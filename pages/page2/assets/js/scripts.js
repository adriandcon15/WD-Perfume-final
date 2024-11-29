document.querySelectorAll('.dropdown > a').forEach(dropdownToggle => {
    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        const dropdown = this.parentElement;
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        
        document.querySelectorAll('.dropdown').forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('active');
            }
        });

        dropdown.classList.toggle('active');
    });
});


document.addEventListener('click', function(event) {
    const isDropdown = event.target.closest('.dropdown');
    if (!isDropdown) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
