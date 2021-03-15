function init() {
    const resultsElem = document.getElementById('results');
    return fetch("users.json")
        .then(resp => resp.json())
        .then(users =>{
            return Promise.all(
                users.map(
                    user => fetch(`https://api.github.com/users/${user.name}`)
                            .then(gitResp => gitResp.json())
            ))
        }).then(gitUsers =>{
            console.log(gitUsers);
            const images = gitUsers.map(gitUser => {
                const img = new Image();
                img.src = gitUser.avatar_url;
                resultsElem.append(img);
                return img;
            })
            return images;
        }).then(images => new Promise((resolve, reject) => {
            setTimeout(resolve, 6000, images);
        })).then(images => {
            images.forEach(image => image.remove());
            return "Demo finished";
        });
}

window.addEventListener('load', () => init().then(msg => console.log(msg)));