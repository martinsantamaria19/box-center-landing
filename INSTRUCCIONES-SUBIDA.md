# 📤 INSTRUCCIONES PARA SUBIR AL SERVIDOR

## ✅ CAMBIOS REALIZADOS

Todos los archivos han sido actualizados para funcionar en el subdirectorio `/landing-page/`:

- ✅ **sitemap.xml** - URL actualizada a `/landing-page/`
- ✅ **robots.txt** - Rutas actualizadas al subdirectorio
- ✅ **manifest.json** - start_url actualizado
- ✅ **index.html** - Todas las URLs absolutas actualizadas (7 cambios)

---

## 📂 ESTRUCTURA DE SUBIDA AL SERVIDOR

### **IMPORTANTE: robots.txt va en la RAÍZ**

```
public_html/                          ← Raíz del dominio
├── robots.txt                        ← ⚠️ SUBIR AQUÍ (raíz obligatoria)
│
└── landing-page/                     ← Tu carpeta de la landing
    ├── index.html                    ← ✅ 
    ├── sitemap.xml                   ← ✅
    ├── manifest.json                 ← ✅
    ├── .htaccess                     ← ✅
    ├── OPTIMIZACIONES.md             ← (opcional)
    ├── css/
    │   └── style.css
    ├── js/
    │   └── form.js
    └── img/
        └── storage-facility-hero.jpg
```

---

## 🚀 PASOS DE IMPLEMENTACIÓN

### **1. Subir archivos via FTP/cPanel**

**A) Carpeta landing-page:**
```
Subir TODO el contenido (excepto robots.txt) a:
→ public_html/landing-page/
```

**B) Archivo robots.txt:**
```
Subir SOLO robots.txt a:
→ public_html/robots.txt
```

### **2. Verificar permisos**

Asegúrate que los archivos tengan estos permisos:
```
Archivos (.html, .css, .js, .xml, .txt): 644
Carpetas (css/, js/, img/): 755
```

### **3. Verificación POST-SUBIDA**

Abre tu navegador y verifica estas URLs:

#### ✅ **robots.txt en la raíz:**
```
https://www.boxcenter.com.uy/robots.txt
```
**Debe mostrar:**
```
# robots.txt para BoxCenter Uruguay
User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.boxcenter.com.uy/landing-page/sitemap.xml
...
```

#### ✅ **Sitemap en subdirectorio:**
```
https://www.boxcenter.com.uy/landing-page/sitemap.xml
```
**Debe mostrar el XML con la URL correcta**

#### ✅ **Landing page funcional:**
```
https://www.boxcenter.com.uy/landing-page/
```
**Debe cargar normalmente**

#### ✅ **CSS cargando:**
```
https://www.boxcenter.com.uy/landing-page/css/style.css
```
**Debe mostrar el CSS**

#### ✅ **Imagen hero:**
```
https://www.boxcenter.com.uy/landing-page/img/storage-facility-hero.jpg
```
**Debe mostrar la imagen**

---

## 🔍 VERIFICACIÓN SEO

### **1. Google Search Console**

Una vez subido, registra tu propiedad:

1. Ve a: https://search.google.com/search-console/
2. Agregar propiedad: `https://www.boxcenter.com.uy/landing-page/`
3. Verificar mediante meta tag o archivo HTML
4. Enviar sitemap: `https://www.boxcenter.com.uy/landing-page/sitemap.xml`

### **2. Validar Schema.org**

1. Ve a: https://validator.schema.org/
2. Pega la URL: `https://www.boxcenter.com.uy/landing-page/`
3. Verificar que no haya errores

### **3. Test Mobile-Friendly**

1. Ve a: https://search.google.com/test/mobile-friendly
2. Ingresa: `https://www.boxcenter.com.uy/landing-page/`
3. Verificar que pase el test

### **4. PageSpeed Insights**

1. Ve a: https://pagespeed.web.dev/
2. Ingresa: `https://www.boxcenter.com.uy/landing-page/`
3. Objetivo: 85+ en mobile, 95+ en desktop

---

## ⚠️ TROUBLESHOOTING

### **Problema 1: robots.txt no aparece**

**Causa:** Está en el subdirectorio en vez de la raíz

**Solución:**
```
Mover de: public_html/landing-page/robots.txt
A:        public_html/robots.txt
```

### **Problema 2: CSS/JS no cargan**

**Causa:** Rutas relativas incorrectas

**Solución:**
Verificar que en `index.html` las rutas sean relativas:
```html
<link rel="stylesheet" href="css/style.css">    ← Correcto
<script src="js/form.js"></script>              ← Correcto
```

NO usar rutas absolutas desde la raíz:
```html
<link rel="stylesheet" href="/css/style.css">   ← ❌ Incorrecto
```

### **Problema 3: Imagen no carga**

**Causa:** Ruta de la imagen incorrecta

**Solución:**
Verificar en `css/style.css` línea 10:
```css
background: url('../img/storage-facility-hero.jpg') center center/cover no-repeat;
```

El `../` es correcto porque el CSS está en `css/` y sube un nivel.

### **Problema 4: .htaccess no funciona**

**Causa:** Servidor no permite .htaccess o no es Apache

**Solución:**
- Verificar con tu hosting si soporta .htaccess
- Si es Nginx, necesitas configuración diferente
- Contactar soporte del hosting

---

## 📋 CHECKLIST FINAL

```
Antes de subir:
□ Verificar que robots.txt esté preparado para la raíz
□ Verificar que todos los archivos estén actualizados

Durante la subida:
□ Subir landing-page/ completa al servidor
□ Subir robots.txt a la raíz (public_html/)
□ Verificar permisos de archivos

Después de subir:
□ Probar https://www.boxcenter.com.uy/robots.txt
□ Probar https://www.boxcenter.com.uy/landing-page/
□ Probar https://www.boxcenter.com.uy/landing-page/sitemap.xml
□ Verificar que CSS/JS carguen correctamente
□ Verificar que la imagen hero cargue
□ Probar el formulario de contacto
□ Registrar en Google Search Console
□ Enviar sitemap a Google
□ Correr PageSpeed Insights
□ Correr Mobile-Friendly Test
```

---

## 🎯 PRÓXIMOS PASOS DESPUÉS DE SUBIR

1. **Inmediato:**
   - ✅ Verificar que todo funcione
   - ✅ Probar formulario de contacto
   - ✅ Verificar en mobile (tu teléfono)

2. **Esta semana:**
   - 📊 Registrar en Google Search Console
   - 📊 Configurar Google Analytics
   - 🖼️ Optimizar imagen hero a WebP
   - 🎨 Crear favicon e iconos PWA

3. **Este mes:**
   - 🔒 Habilitar SSL/HTTPS
   - 📈 Monitorear métricas en Search Console
   - 🚀 Correr auditoría de Lighthouse

---

## 📞 SOPORTE

Si tienes problemas:

1. **Revisa los logs del servidor** (disponibles en cPanel)
2. **Abre las DevTools del navegador** (F12) y busca errores en Console
3. **Verifica las rutas** de archivos en Network tab
4. **Contacta a tu hosting** si hay problemas con .htaccess o permisos

---

**¡Todo listo para subir al servidor!** 🚀

**Última actualización:** 8 de Octubre, 2025
