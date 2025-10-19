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
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
      
        if (!validateForm()) return;
        showLoadingState();
      
        const nombre = nombreInput.value.trim();
        const email = emailInput.value.trim();
        const telefono = telefonoInput.value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
            
        try {
            // Usamos URLSearchParams (simple request, sin headers -> sin preflight)
            const payload = new URLSearchParams();
            payload.append('nombre', nombre);
            payload.append('email', email);
            payload.append('telefono', telefono);
            payload.append('mensaje', mensaje);
          
            const response = await fetch("https://hook.us2.make.com/s8amsbgwg9lll1q7oxp1fbdw2vy2ny8v", {
              method: "POST",
              body: payload // <- sin headers
            });
          
            hideLoadingState();
          
            if (response.ok || response.status === 200) {
              // Redirigir a página de agradecimiento
              window.location.href = 'contacto-exitoso.html';
            } else {
              alert('Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.');
            }
          } catch (error) {
            hideLoadingState();
            console.error('Error de conexión:', error);
            alert('Error de conexión. Por favor, verifica tu internet e intenta nuevamente.');
          }
          
          
      });
      
    
    // Función de validación
    function validateForm() {
        const nombre = nombreInput.value.trim();
        const email = emailInput.value.trim();
        const telefono = telefonoInput.value.trim();
        const mensaje = mensajeInput.value.trim();
        
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

        // Validar mensaje
        if (mensaje.length < 10) {
            showValidationError('El mensaje debe tener al menos 10 caracteres');
            mensajeInput.focus();
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
    
    // Función de éxito (ahora redirige a página de éxito)
    function redirectToSuccess() {
        window.location.href = 'contacto-exitoso.html';
    }
    
    // Mostrar error de validación
    function showValidationError(message) {
        alert(message);
    }
    
    // Animación suave al hacer scroll (optimizada con throttle)
    let ticking = false;
    const hero = document.querySelector('.hero');
    const locationContainer = document.querySelector('.location-container');
    const featuresSection = document.querySelector('.features');
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                // Hero scroll effect
                if (scrollTop > 100) {
                    hero.classList.add('scrolled');
                } else {
                    hero.classList.remove('scrolled');
                }
                
                // Location container color change when over white background
                if (locationContainer && featuresSection) {
                    const featuresOffset = featuresSection.offsetTop;
                    const featuresHeight = featuresSection.offsetHeight;
                    const viewportHeight = window.innerHeight;
                    
                    // Check if location is over the features section (white background)
                    if (scrollTop + viewportHeight > featuresOffset && scrollTop < featuresOffset + featuresHeight) {
                        locationContainer.classList.add('scrolled');
                    } else {
                        locationContainer.classList.remove('scrolled');
                    }
                }
                
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
    
    // Funcionalidad del indicador de scroll
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator && featuresSection) {
        scrollIndicator.addEventListener('click', function() {
            featuresSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});
