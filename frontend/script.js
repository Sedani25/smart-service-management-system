document
    .getElementById("loadBtn")
    .addEventListener("click", loadServices);

document
    .getElementById("addBtn")
    .addEventListener("click", addService);

async function addService() {

    const serviceName =
        document.getElementById("serviceName").value;

    const service = {

        id: Date.now(),

        name: serviceName,

        status: "Pending"
    };

    await fetch(
        "http://localhost:8080/services",
        {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/json"
            },

            body:
                JSON.stringify(service)
        }
    );

    document.getElementById(
        "serviceName"
    ).value = "";

    loadServices();
}

async function loadServices() {

    const response =
        await fetch(
            "http://localhost:8080/services"
        );

    const services =
        await response.json();

    displayServices(services);
}

function displayServices(services) {

    const list =
        document.getElementById("serviceList");

    list.innerHTML = "";

    services.forEach(service => {

        const li =
            document.createElement("li");

        li.textContent =
            `${service.name} - ${service.status}`;

        list.appendChild(li);
    });
}