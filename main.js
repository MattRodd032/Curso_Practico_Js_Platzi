    const userEmail = document.querySelector('.navbar-email');
    const menuEmail = document.querySelector('.desktop-menu');

    userEmail.addEventListener('click', toggleUserEmail);

    function toggleUserEmail() {
        menuEmail.classList.toggle('inactive');
    }
