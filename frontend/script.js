let services = [];

function addService() {

    let input = document.getElementById("serviceInput");

    let serviceName = input.value;

    if(serviceName === "") {
        alert("Please enter a service");
        return;
    }

    services.push(serviceName);

    displayServices();

    input.value = "";
}

function displayServices() {

    let list = document.getElementById("serviceList");

    list.innerHTML = "";

    for(let i = 0; i < services.length; i++) {

        list.innerHTML += `
            <li>${services[i]}</li>
        `;
    }
}