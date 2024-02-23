
function showSection(sectionName) {
    const sections = ['article', 'videos', 'others'];

    // Hide all sections
    sections.forEach(function (section) {
        document.getElementById(section).style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionName).style.display = 'block';
}

// Show the default section (e.g., 'article' by default)
