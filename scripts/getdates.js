// Dynamically set the current year in the footer
document.getElementById("getdates").textContent = new Date().getFullYear();

// Dynamically set the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;