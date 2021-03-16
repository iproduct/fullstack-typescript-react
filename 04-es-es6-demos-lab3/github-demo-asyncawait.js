async function init() {
    const demoElem = document.getElementById('demo');
    try {
        const resp = await fetch('users.json');
        const users = await resp.json();
        const gitUsers = await Promise.all(users.map(
            async user => {
                const gitUserResp = await fetch(`https://api.github.com/users/${user.name}`);
                gitUser = await gitUserResp.json();
                if (gitUser.message === "Not Found") {
                    throw `User '${user.name}' not found.`
                } else {
                    return gitUser;
                }
            }
        ));
        console.log(gitUsers);
        const images = gitUsers.map(gitUser => {
            const img = new Image();
            img.src = gitUser.avatar_url;
            demoElem.append(img);
            return img;
        })
        await new Promise((resolve, reject) => setTimeout(resolve, 6000));
        images.forEach(img => {
            img.remove();
        });
    } catch(err){ // promise catch all
        return `Error: ${err}`
    }
    return 'Demo finished';
}

window.addEventListener('load', () => init().then(msg => console.log(msg)));