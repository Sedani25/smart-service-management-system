let services =
JSON.parse(localStorage.getItem("services")) || [];

let addButton = document.getElementById("addButton");

let clearButton = document.getElementById("clearButton");

addButton.addEventListener("click", addService);

clearButton.addEventListener("click", clearServices);

displayServices();

function addService() {

    let input = document.getElementById("serviceInput");

    let serviceName = input.value.trim();

    if(serviceName === "") {
        alert("Please enter a service");
        return;
    }

    let service = {
        id: Date.now(),
        name: serviceName,
        status: "Pending"
    };

    services.push(service);

    saveServices();

    displayServices();

    input.value = "";
}

function displayServices() {

    let list = document.getElementById("serviceList");

    list.innerHTML = "";

    for(let i = 0; i < services.length; i++) {

        let li = document.createElement("li");

        li.innerHTML = `
            ${services[i].name}
            - ${services[i].status}
        `;

        let deleteButton =
        document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            deleteService(services[i].id);
        });

        li.appendChild(deleteButton);

        list.appendChild(li);
    }
}

function deleteService(id) {

    services =
    services.filter(service => service.id !== id);

    saveServices();

    displayServices();
}

function clearServices() {

    services = [];

    saveServices();

    displayServices();
}

function saveServices() {

    localStorage.setItem(
        "services",
        JSON.stringify(services)
    );
}