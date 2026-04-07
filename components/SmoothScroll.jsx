export function scrollToSection(event) {
    event.preventDefault();
    try {
        var section = document.querySelector(event.target.parentElement.getAttribute('href'));
        if (section === null) {
            section = document.querySelector(event.target.getAttribute('href'));
        }
        section.scrollIntoView({ behavior: "smooth" });
    } catch (_error) {
        // ignore scroll errors
    }
}
