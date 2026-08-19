// ============================"
// SMOOTH SCROLL NAVIGATION
// ============================"

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================"
// NAVBAR ACTIVE LINK HIGHLIGHT
// ============================"

const updateActiveLink = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-menu a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
};

updateActiveLink();

// ============================"
// ANIMACIÓN DE CARGA
// ============================"

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ============================"
// FUNCIONES PARA ACTUALIZAR CONTENIDO (future use)
// ============================"

/**
 * Función para agregar un nuevo proyecto a la página
 * @param {string} title - Título del proyecto
 * @param {string} language - Lenguaje de programación
 * @param {string} repositoryLink - Link al repositorio
 */
function addProject(title, language, repositoryLink) {
    const projectsContainer = document.querySelector('.projects-container');
    
    // Remover el placeholder si existe
    const placeholder = document.querySelector('.project-placeholder');
    if (placeholder) {
        placeholder.remove();
    }

    // Crear elemento del proyecto
    const projectElement = document.createElement('div');
    projectElement.className = 'project-item';
    projectElement.innerHTML = `
        <h3>${title}</h3>
        <span class="project-language">${language}</span>
        <br>
        <a href="${repositoryLink}" target="_blank" class="project-link">Ver repositorio →</a>
    `;

    projectsContainer.appendChild(projectElement);
}

/**
 * Función para actualizar información de contacto
 * @param {string} email - Correo electrónico
 * @param {string} linkedin - Link de LinkedIn
 * @param {string} github - Link de GitHub
 */
function updateContactInfo(email, linkedin, github) {
    const contactContainer = document.querySelector('.contact-container');
    
    if (email) {
        const emailItem = contactContainer.querySelector('[href^="mailto:"]');
        if (emailItem) {
            emailItem.href = `mailto:${email}`;
            emailItem.textContent = email;
        }
    }

    if (linkedin) {
        const linkedinLink = Array.from(contactContainer.querySelectorAll('a'))
            .find(link => link.textContent.includes('LinkedIn'));
        if (linkedinLink) {
            linkedinLink.href = linkedin;
        }
    }

    if (github) {
        const githubLink = Array.from(contactContainer.querySelectorAll('a'))
            .find(link => link.textContent.includes('GitHub'));
        if (githubLink) {
            githubLink.href = github;
        }
    }
}

/**
 * Función para agregar una nueva skill
 * @param {string} skillName - Nombre de la skill
 * @param {string} category - Categoría de la skill
 */
function addSkill(skillName, category) {
    const skillsContainer = document.querySelector('.skills-container');
    
    const skillElement = document.createElement('div');
    skillElement.className = 'skill-item';
    skillElement.innerHTML = `
        <h3>${skillName}</h3>
        <p class="skill-category">${category}</p>
    `;

    skillsContainer.appendChild(skillElement);
}

/**
 * Función para agregar un nuevo curso a la sección de educación
 * @param {string} courseName - Nombre del curso
 * @param {string} courseCategory - Categoría del curso
 */
function addEducationCourse(courseName, courseCategory) {
    const educationContainer = document.querySelector('.education-container');
    
    const educationElement = document.createElement('div');
    educationElement.className = 'education-item';
    educationElement.innerHTML = `
        <h3>${courseName}</h3>
        <p class="education-category">${courseCategory}</p>
    `;

    educationContainer.appendChild(educationElement);
}

// ============================"
// EJEMPLO DE USO (comentado para usar después)
// ============================"

// addProject('Mi Primer Proyecto', 'JavaScript', 'https://github.com/TrioxElPapu/proyecto');
// addSkill('JavaScript', 'Lenguaje de Programación');
// addEducationCourse('Nombre del Curso', 'Categoría');
// updateContactInfo('nuevo@email.com', 'https://linkedin.com/...', 'https://github.com/...');