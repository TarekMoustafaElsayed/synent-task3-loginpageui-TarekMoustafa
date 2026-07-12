document.addEventListener('DOMContentLoaded', function () {
    const authContainer = document.querySelector('.auth-container');
    const forms = document.querySelectorAll('.form-container');
    const showRegisterLink = document.getElementById('showRegister');
    const switchToLoginLink = document.querySelector('.switch-to-login');
    const mobileLoginBtn = document.getElementById('mobileLoginBtn');
    const mobileRegisterBtn = document.getElementById('mobileRegisterBtn');

    // Switch forms for desktop
    function showRegisterForm() {
        authContainer.classList.add('active');
        forms.forEach(form => form.classList.remove('active'));
        document.querySelector('.register-form').classList.add('active');
        mobileLoginBtn.classList.remove('active');
        mobileRegisterBtn.classList.add('active');
    }

    function showLoginForm() {
        authContainer.classList.remove('active');
        forms.forEach(form => form.classList.remove('active'));
        document.querySelector('.login-form').classList.add('active');
        mobileLoginBtn.classList.add('active');
        mobileRegisterBtn.classList.remove('active');
    }

    // Switch to register form when "Create account" is clicked
    showRegisterLink.addEventListener('click', function (e) {
        e.preventDefault();
        showRegisterForm();
    });

    // Switch to login form when "Sign in" is clicked
    switchToLoginLink.addEventListener('click', function (e) {
        e.preventDefault();
        showLoginForm();
    });

    // Mobile toggle buttons
    mobileLoginBtn.addEventListener('click', function() {
        showLoginForm();
    });

    mobileRegisterBtn.addEventListener('click', function() {
        showRegisterForm();
    });

    // Generate floating shapes
    const floatingShapes = document.getElementById('floatingShapes');
    for (let i = 0; i < 15; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        const size = Math.random() * 100 + 50;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 20 + 10;

        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.left = `${posX}%`;
        shape.style.top = `${posY}%`;
        shape.style.animationDelay = `${delay}s`;
        shape.style.animationDuration = `${duration}s`;
        shape.style.opacity = Math.random() * 0.5 + 0.1;

        floatingShapes.appendChild(shape);
    }

    // Form submissions
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('Login form submitted');
        const btn = this.querySelector('.submit-btn');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        setTimeout(() => {
            btn.innerHTML = 'SIGN IN';
        }, 1500);
    });

    document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('Register form submitted');
        const btn = this.querySelector('.submit-btn');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        setTimeout(() => {
            btn.innerHTML = 'SIGN UP';
        }, 1500);
    });

    // 3D tilt effect - only on desktop
    if (window.innerWidth > 992) {
        authContainer.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            authContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        authContainer.addEventListener('mouseleave', () => {
            authContainer.style.transform = 'rotateY(0) rotateX(0)';
        });
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        // On mobile, make sure the correct form is shown based on the toggle
        if (window.innerWidth <= 992) {
            if (mobileLoginBtn.classList.contains('active')) {
                showLoginForm();
            } else {
                showRegisterForm();
            }
        }
    });
});