
document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll('.content-section');


    if (sections.length === 0) {
        return;
    }


    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');

                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
        observer.observe(section);
    });

});
