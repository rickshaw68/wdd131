// Set current year in footer
document.getElementById("getdates").textContent = new Date().getFullYear();

// Set last modified date in footer
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.getElementById("contact-request-counter");
    let count = localStorage.getItem("contactRequestCount") || 0;
    count = parseInt(count);
    count++;
    localStorage.setItem("contactRequestCount", count);
    if (counterElement) {
        counterElement.textContent = `Total Contact Requests: ${count}`;
    }
});


