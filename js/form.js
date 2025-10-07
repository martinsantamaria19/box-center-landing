$(document).ready(function() {
    // Manejo del formulario de contacto
    $('#contactForm').on('submit', function(e) {
        e.preventDefault(); // Prevenir envío por defecto
        
        const form = $(this);
        const submitBtn = $('#submitBtn');
        const btnText = $('.btn-text');
        const btnLoading = $('.btn-loading');
        
        // Validación básica
        if (!validateForm()) {
            return;
        }
        
        // Mostrar estado de carga
        showLoadingState(submitBtn, btnText, btnLoading);
        
        // Enviar formulario con fetch para evitar redirecciones
        const formData = new FormData(form[0]);
        
        fetch(form.attr('action'), {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Esto evita problemas de CORS y redirecciones
        })
        .then(() => {
            // Con no-cors, siempre consideramos exitoso si no hay error de red
            hideLoadingState(submitBtn, btnText, btnLoading);
            showSuccessMessage();
            form[0].reset();
        })
        .catch((error) => {
            hideLoadingState(submitBtn, btnText, btnLoading);
            console.error('Error al enviar formulario:', error);
            showValidationError('Error de conexión. Verifica tu internet.');
        });
    });
    
    // Función de validación
    function validateForm() {
        const nombre = $('input[name="nombre"]').val().trim();
        const email = $('input[name="email"]').val().trim();
        const telefono = $('input[name="telefono"]').val().trim();
        
        // Validar nombre
        if (nombre.length < 2) {
            showValidationError('El nombre debe tener al menos 2 caracteres');
            return false;
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showValidationError('Por favor ingresa un email válido');
            return false;
        }
        
        // Validar teléfono
        if (telefono.length < 8) {
            showValidationError('El teléfono debe tener al menos 8 dígitos');
            return false;
        }
        
        return true;
    }
    
    // Mostrar estado de carga
    function showLoadingState(btn, text, loading) {
        btn.prop('disabled', true);
        text.addClass('d-none');
        loading.removeClass('d-none');
    }
    
    // Ocultar estado de carga
    function hideLoadingState(btn, text, loading) {
        btn.prop('disabled', false);
        text.removeClass('d-none');
        loading.addClass('d-none');
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
    
    // Mostrar mensaje de error
    function showErrorMessage() {
        Swal.fire({
            icon: 'error',
            title: 'Error al enviar',
            text: 'Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.',
            confirmButtonText: 'Intentar de nuevo',
            confirmButtonColor: '#ffbf00'
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
    
    // Animación suave al hacer scroll
    $(window).on('scroll', function() {
        const scrollTop = $(this).scrollTop();
        if (scrollTop > 100) {
            $('.hero').addClass('scrolled');
        } else {
            $('.hero').removeClass('scrolled');
        }
    });
});
