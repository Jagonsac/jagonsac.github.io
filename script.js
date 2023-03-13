const animation_elements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate')
        } else {
            entry.target.classList.remove('animate')
        }
    })
}, {
    threshold: 0.4
});

for (let i = 0; i < animation_elements.length; i++) {
    const el = animation_elements[i];

    observer.observe(el);
}
