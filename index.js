// Function to search for a section and open its corresponding page
function searchSection() {
    const query = document.getElementById('searchInput').value.toLowerCase();

    // Check for each section
    if (query.includes('home')) {
        window.location.href = 'home.html';
    } else if (query.includes('about')) {
        window.location.href = 'about.html';
    } else if (query.includes('services')) {
        window.location.href = 'services.html';
    } else if (query.includes('contact')) {
        window.location.href = 'contact.html';
    } else {
        alert('No matching section found.');
    }
}
