// Set current year in footer
document.getElementById("getdates").textContent = new Date().getFullYear();

// Set last modified date in footer
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

// Ensure localStorage works safely
function getReviewCount() {
    try {
        return parseInt(localStorage.getItem("reviewCount")) || 0;
    } catch (error) {
        console.error("Error accessing localStorage:", error);
        return 0;
    }
}

// Increment review count & update localStorage
function updateReviewCount() {
    let reviewCount = getReviewCount();
    reviewCount++;
    
    try {
        localStorage.setItem("reviewCount", reviewCount);
    } catch (error) {
        console.error("Error updating localStorage:", error);
    }

    // Locate the thank-you message container
    const reviewContainer = document.querySelector(".wf1");

    if (reviewContainer) {
        // Create a new paragraph element for the counter
        const reviewCountElem = document.createElement("p");
        reviewCountElem.textContent = `Total Reviews Submitted: ${reviewCount}`;
        reviewCountElem.classList.add("review-counter");

        // Append the counter below the "Back to Form" button
        reviewContainer.appendChild(reviewCountElem);
    }
}

// Initialize when `review.html` loads
document.addEventListener("DOMContentLoaded", updateReviewCount);
