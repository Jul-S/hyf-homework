const url = "https://api.github.com/search/repositories?q=user:";
const users = ["jaimakena", "varsha84", "Sarulathaanbu"];

function getUsersReposFromGit() {
    Promise.all([
        fetch(url + users[0]),
        fetch(url + users[1]),
        fetch(url + users[2])
    ])
        .then(async ([res1, res2, res3]) => {
            const userData1 = await res1.json();
            const userData2 = await res2.json();
            const userData3 = await res3.json();
            return [userData1, userData2, userData3]
        })
        .then((data) => {
            console.log(data);
            renderData(data);
        }).catch((err) => {
            console.log(err);
        })
}

getUsersReposFromGit();

function renderData(usersDataArray) {
    const usersList = document.createElement("ul");
    usersDataArray.forEach(userData => {
        const userListElement = document.createElement("li");
        const repoTitle = document.createElement("h2");
        repoTitle.innerHTML = `${userData.items[0].owner.login}'s repositories`
        userListElement.appendChild(repoTitle);

        const reposList = document.createElement("ul");
        userData.items.forEach(repo => {
            const repoListElement = document.createElement("li");
            const repoText = document.createElement("p");
            repoText.innerHTML = `${repo.name}: ${repo.html_url}`
            repoListElement.appendChild(repoText);
            reposList.appendChild(repoListElement);
        })

        userListElement.appendChild(reposList);
        usersList.appendChild(userListElement);
    });

    document.body.appendChild(usersList);
}