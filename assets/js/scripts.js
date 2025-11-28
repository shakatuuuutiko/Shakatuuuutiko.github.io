// Smooth scroll para enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carga dinámica de proyectos
document.addEventListener('DOMContentLoaded', () => {
    const basePath = '.'; // Ruta base relativa
    const projectList = document.getElementById('project-list');
    
    fetch(`${basePath}/assets/js/projects.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar projects.json');
            }
            return response.json();
        })
        .then(data => {
            data.projects.forEach(project => {
                const projectHTML = `
                    <article class="project-card">
                        <a href="${project.url}" target="_blank">
                            <div class="project-image" style="background-image: url('${project.image}')"></div>
                            <div class="project-details">
                                <h2>${project.title}</h2>
                                <p>${project.description}</p>
                                <span class="btn">Ver detalles</span>
                            </div>
                        </a>
                    </article>
                `;
                projectList.insertAdjacentHTML('beforeend', projectHTML);
            });
        })
        .catch(error => {
            console.error('Error cargando proyectos:', error);
            projectList.innerHTML = '<p>Hubo un problema al cargar los proyectos. ¡Vuelve a intentarlo más tarde!</p>';
        });
});

// Validación básica de formulario (opcional)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí iría la lógica para formulario real (si lo agregas más tarde)
            console.log('Formulario enviado (demo)');
            alert('¡Mensaje recibido! Gracias por contactarme.');
            this.reset();
        });
    }
});