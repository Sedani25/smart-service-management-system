let loadButton =
document.getElementById("loadButton");

loadButton.addEventListener(
    "click",
    loadServices
);

async function loadServices() {

    let response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );

    let services = await response.json();

    displayServices(services);
}

function displayServices(services) {

    let list =
    document.getElementById("serviceList");

    list.innerHTML = "";

    services.forEach(service => {

        let li = document.createElement("li");

        li.innerHTML = `
            ${service.title}
        `;

        list.appendChild(li);
    });
}