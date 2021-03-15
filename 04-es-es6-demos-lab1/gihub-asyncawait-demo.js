async function init() {
    try {
        const resultsElem = document.getElementById('results');
        resp = await fetch("users.json");
        users = await resp.json();
        gitUsers = await Promise.all(
            users.map(
                user => fetch(`https://api.github.com/users/${user.name}`)
                    .then(gitResp => gitResp.json())
                    .then(gitUser => {
                        if (gitUser.message === 'Not Found') {
                            throw `User ${user.name} not found.`;
                        } else {
                            return gitUser;
                        }
                    })
            )
        );
        console.log(gitUsers);
        const images = gitUsers.map(gitUser => {
            const img = new Image();
            img.src = gitUser.avatar_url;
            resultsElem.append(img);
            return img;
        });
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 6000);
        });
        images.forEach(image => image.remove());
        return "Demo finished";
    } catch (err) {
        return `Fetching GitHub users was not successful: ${err}`;
    }
}

window.addEventListener('load', () => init().then(msg => console.log(msg)));