// Set current year in footer
document.getElementById("getdates").textContent = new Date().getFullYear();

// Set last modified date in footer
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

// Function to get the current page view count from localStorage
function getViewedCount() {
    let count = localStorage.getItem("viewed");
    return count ? parseInt(count) : 0;
}

// Function to update and display the page view count
function updateViewedCount() {
    let count = getViewedCount();
    count++; // Increment count

    // Save updated count to localStorage
    localStorage.setItem("viewed", count);

    // Select the counter display element
    let counterElement = document.getElementById("viewed-counter");

    // If the element exists, update its text
    if (counterElement) {
        counterElement.textContent = `Page Views: ${count}`;
    }
}

// Run when the page loads
document.addEventListener("DOMContentLoaded", updateViewedCount);
