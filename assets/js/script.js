const accordionTitles = document.querySelectorAll('.question-container');
accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener("click", () => {
        accordionTitle 
        if (accordionTitle.classList.contains("is-open")) {
            accordionTitle.classList.remove("is-open");
        } else {
            const accordionTitlesWithOpen = document.querySelectorAll('.is-open');
            accordionTitlesWithOpen.forEach((x) => {
                x.classList.remove('is-open');
            });
            accordionTitle.classList.add('is-open');
        }
    })
})