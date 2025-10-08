// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del formulario
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.querySelector('.btn-text');
    const btnLoading = document.querySelector('.btn-loading');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const telefonoInput = document.getElementById('telefono');
    
    // Manejo del envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validación básica
        if (!validateForm()) {
            return;
        }
        
        // Mostrar estado de carga
        showLoadingState();
        
        // Enviar formulario con fetch
        const formData = new FormData(form);
        
        fetch(form.action, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Evita problemas de CORS
        })
        .then(() => {
            hideLoadingState();
            showSuccessMessage();
            form.reset();
        })
        .catch((error) => {
            hideLoadingState();
            console.error('Error al enviar formulario:', error);
            showValidationError('Error de conexión. Verifica tu internet.');
        });
    });
    
    // Función de validación
    function validateForm() {
        const nombre = nombreInput.value.trim();
        const email = emailInput.value.trim();
        const telefono = telefonoInput.value.trim();
        
        // Validar nombre
        if (nombre.length < 2) {
            showValidationError('El nombre debe tener al menos 2 caracteres');
            nombreInput.focus();
            return false;
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showValidationError('Por favor ingresa un email válido');
            emailInput.focus();
            return false;
        }
        
        // Validar teléfono
        if (telefono.length < 8) {
            showValidationError('El teléfono debe tener al menos 8 dígitos');
            telefonoInput.focus();
            return false;
        }
        
        return true;
    }
    
    // Mostrar estado de carga
    function showLoadingState() {
        submitBtn.disabled = true;
        btnText.classList.add('d-none');
        btnLoading.classList.remove('d-none');
    }
    
    // Ocultar estado de carga
    function hideLoadingState() {
        submitBtn.disabled = false;
        btnText.classList.remove('d-none');
        btnLoading.classList.add('d-none');
    }
    
    // Mostrar mensaje de éxito
    function showSuccessMessage() {
        Swal.fire({
            icon: 'success',
            title: '¡Mensaje enviado!',
            text: 'Gracias por contactarnos. Te responderemos en menos de 24 horas.',
            confirmButtonText: 'Perfecto',
            confirmButtonColor: '#ffbf00',
            timer: 5000,
            timerProgressBar: true
        });
    }
    
    // Mostrar error de validación
    function showValidationError(message) {
        Swal.fire({
            icon: 'warning',
            title: 'Datos incorrectos',
            text: message,
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#ffbf00'
        });
    }
    
    // Animación suave al hacer scroll (optimizada con throttle)
    let ticking = false;
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > 100) {
                    hero.classList.add('scrolled');
                } else {
                    hero.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
});
