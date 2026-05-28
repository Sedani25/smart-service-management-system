let services = JSON.parse(localStorage.getItem("services")) || [];

displayServices();

function addService() {

    let input = document.getElementById("serviceInput");

    let serviceName = input.value;

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

        list.innerHTML += `
            <li>
                ${services[i].name}
                - ${services[i].status}

                <button onclick="deleteService(${services[i].id})">
                    Delete
                </button>
            </li>
        `;
    }
}

function deleteService(id) {

    services = services.filter(service => service.id !== id);

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