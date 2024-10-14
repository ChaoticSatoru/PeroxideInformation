// Function to scroll to a specific section when a button is clicked
function scrollToSection(sectionId) {
    // Get the section by its ID
    const section = document.getElementById(sectionId);

    // Scroll to the section smoothly
    section.scrollIntoView({ behavior: 'smooth' });
}

