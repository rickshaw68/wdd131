// Set current year in footer
document.getElementById("getdates").textContent = new Date().getFullYear();

// Set last modified date in footer
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
