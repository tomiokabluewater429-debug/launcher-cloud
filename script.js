fetch("apps/apps.json")
.then(res => res.json())
.then(data => {
    const container = document.getElementById("app-list");
    container.innerHTML = "";

    data.forEach(app => {
        const div = document.createElement("div");
        div.className = "app";
        div.onclick = () => window.location.href = app.url;

        div.innerHTML = `
            <img src="${app.icon}">
            <span>${app.name}</span>
        `;

        container.appendChild(div);
    });
})
.catch(() => {
    document.getElementById("app-list").innerHTML =
        "<p>Erro ao carregar apps</p>";
});
