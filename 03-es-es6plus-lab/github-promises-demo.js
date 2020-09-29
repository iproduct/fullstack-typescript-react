function init() {
    return fetch('users.json')
        .then(resp => resp.json())
        .then(users => {
            return Promise.all(users.map(user => fetch(`https://api.github.com/users/${user.name}`)
                .then(gitResp => gitResp.json())))
        }).then(gitUsers => {
            console.log(gitUsers);
            return gitUsers.map(gitUser => {
                const img = new Image();
                img.src = gitUser.avatar_url;
                return img;
            }).map(img => {
                document.getElementById('results').append(img);
                return img;
            });
        }).then(images => new Promise((resolve, reject) => {
            setTimeout(resolve, 10000, images);
        })).then(images =>{
            images.forEach(img => img.remove());
            return 'Demo finished.';
        });
}

window.addEventListener('load', init);
