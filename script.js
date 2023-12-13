document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove active class from all nav links and hide all tab contents
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.classList.remove('active');
            const tabContent = document.querySelector(navLink.getAttribute('href'));
            if (tabContent) {
                tabContent.style.display = 'none';
            }
        });

        // Add active class to clicked nav link and show its tab content
        this.classList.add('active');
        const activeTabContent = document.querySelector(this.getAttribute('href'));
        if (activeTabContent) {
            activeTabContent.style.display = 'block';
        }
    });
});
