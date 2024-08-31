window.addEventListener('scroll', function() {
    const menu = document.querySelector('.lists');
    const scrollTop = window.scrollY;
    
    const opacity = Math.max(0.3, 1 - (scrollTop / 300));
    
    menu.style.opacity = opacity;
});

document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".info");
    const fadeStart = 250; 
    const fadeEnd = 500;   

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;

        let opacity = 1;

        if (scrollTop > elementTop - fadeStart) {
            const fadeDistance = fadeEnd - fadeStart;
            opacity = 1 - (scrollTop - (elementTop - fadeStart)) / fadeDistance;

            if (opacity < 0) {
                opacity = 0;
            }
        }

        section.style.opacity = opacity;
    });
});
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".button");
    const fadeStart = 250; 
    const fadeEnd = 500;   

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;

        let opacity = 1;

        if (scrollTop > elementTop - fadeStart) {
            const fadeDistance = fadeEnd - fadeStart;
            opacity = 1 - (scrollTop - (elementTop - fadeStart)) / fadeDistance;

            if (opacity < 0) {
                opacity = 0;
            }
        }

        section.style.opacity = opacity;
    });
});
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".who");
    const fadeStart = 150; 
    const fadeEnd = 500;   

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;

        let opacity = 1;

        if (scrollTop > elementTop - fadeStart) {
            const fadeDistance = fadeEnd - fadeStart;
            opacity = 1 - (scrollTop - (elementTop - fadeStart)) / fadeDistance;

            if (opacity < 0) {
                opacity = 0;
            }
        }

        section.style.opacity = opacity;
    });
});
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".videos");
    const fadeStart = 250; 
    const fadeEnd = 500;   

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;

        let opacity = 1;

        if (scrollTop > elementTop - fadeStart) {
            const fadeDistance = fadeEnd - fadeStart;
            opacity = 1 - (scrollTop - (elementTop - fadeStart)) / fadeDistance;

            if (opacity < 0) {
                opacity = 0;
            }
        }

        section.style.opacity = opacity;
    });
});
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("#link1");
    const fadeStart = 500; 
    const fadeEnd = 800;   

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;

        let opacity = 1;

        if (scrollTop > elementTop - fadeStart) {
            const fadeDistance = fadeEnd - fadeStart;
            opacity = 1 - (scrollTop - (elementTop - fadeStart)) / fadeDistance;

            if (opacity < 0) {
                opacity = 0;
            }
        }

        section.style.opacity = opacity;
    });
});
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("#link2");
    const fadeStart = 500; 
    const fadeEnd = 800;   

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;

        let opacity = 1;

        if (scrollTop > elementTop - fadeStart) {
            const fadeDistance = fadeEnd - fadeStart;
            opacity = 1 - (scrollTop - (elementTop - fadeStart)) / fadeDistance;

            if (opacity < 0) {
                opacity = 0;
            }
        }

        section.style.opacity = opacity;
    });
});
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("#link3");
    const fadeStart = 500; 
    const fadeEnd = 800;   

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;

        let opacity = 1;

        if (scrollTop > elementTop - fadeStart) {
            const fadeDistance = fadeEnd - fadeStart;
            opacity = 1 - (scrollTop - (elementTop - fadeStart)) / fadeDistance;

            if (opacity < 0) {
                opacity = 0;
            }
        }

        section.style.opacity = opacity;
    });
});
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("#link4");
    const fadeStart = 500; 
    const fadeEnd = 800;   

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;

        let opacity = 1;

        if (scrollTop > elementTop - fadeStart) {
            const fadeDistance = fadeEnd - fadeStart;
            opacity = 1 - (scrollTop - (elementTop - fadeStart)) / fadeDistance;

            if (opacity < 0) {
                opacity = 0;
            }
        }

        section.style.opacity = opacity;
    });
});
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".services");
    const fadeStart = 250; 
    const fadeEnd = 800;   

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;

        let opacity = 1;

        if (scrollTop > elementTop - fadeStart) {
            const fadeDistance = fadeEnd - fadeStart;
            opacity = 1 - (scrollTop - (elementTop - fadeStart)) / fadeDistance;

            if (opacity < 0) {
                opacity = 0;
            }
        }

        section.style.opacity = opacity;
    });
});
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".simages");
    const fadeStart = 50; 
    const fadeEnd = 1500;   

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;

        let opacity = 1;

        if (scrollTop > elementTop - fadeStart) {
            const fadeDistance = fadeEnd - fadeStart;
            opacity = 1 - (scrollTop - (elementTop - fadeStart)) / fadeDistance;

            if (opacity < 0) {
                opacity = 0;
            }
        }

        section.style.opacity = opacity;
    });
});