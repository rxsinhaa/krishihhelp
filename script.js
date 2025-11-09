// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {

    // Select all elements you want to apply the fade-in effect to
    const sections = document.querySelectorAll('.content-section');

    // Make sure we found some sections
    if (sections.length === 0) {
        return;
    }

    // Set up the Intersection Observer
    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // Triggers when 10% of the element is visible
    };

    // This callback function runs when an observed element enters/leaves the viewport
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the CSS transition
                entry.target.classList.add('is-visible');
                
                // Stop observing the element once it's visible so the animation
                // doesn't re-run every time you scroll past it.
                observer.unobserve(entry.target);
            }
        });
    };

    // Create the new observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Loop over each section and tell the observer to watch it
    sections.forEach(section => {
        observer.observe(section);
    });

});