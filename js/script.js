
// Select the elements
let header = document.getElementById('header');
let btnTop = document.getElementById('btnTop');

// Function to check if the header is in the view
function isHeaderInView() {
    let headerInView = header.getBoundingClientRect();
    return headerInView.bottom > 0;
}

// Show or hide the "Back to Top" button based on the header's visibility

function toggleBackToTopButton() {
    if (isHeaderInView()) {
        btnTop.classList.add("d-none") 
    } else {
        btnTop.classList.remove("d-none")  
    }
}

// Add click event listener to the "Back to Top" button

document.getElementById("btnTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add scroll event listener
window.addEventListener('scroll', toggleBackToTopButton);
