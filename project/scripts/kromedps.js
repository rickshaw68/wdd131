// Set current year in footer
document.getElementById("getdates").textContent = new Date().getFullYear();

// Set last modified date in footer
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

function getViewedCount() {
    let count = localStorage.getItem("viewed");
    return count ? parseInt(count) : 0;
}

function updateViewedCount() {
    let count = getViewedCount();
    count++; 
    
    localStorage.setItem("viewed", count);
    
    let counterElement = document.getElementById("viewed-counter");
    
    if (counterElement) {
        counterElement.textContent = `Page Views: ${count}`;    }
}


document.addEventListener("DOMContentLoaded", updateViewedCount);
