// Smooth scrolling for navigation links
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

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Here you would typically send the form data to a server
        // For now, we'll just log it and show a success message
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Animate skill bars on scroll
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.proficiency');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 200);
    });
};

// Intersection Observer for skill bars animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe the skills section
const skillsSection = document.querySelector('.languages-section');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Add active class to navigation links on scroll
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');

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
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNavLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileNavLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileNavLinks.classList.remove('active');
    });
});

// GitHub API configuration
const GITHUB_USERNAME = 'aelishkumar8'; // Your GitHub username
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

// Function to fetch repository data from GitHub
async function fetchGitHubData() {
    try {
        const response = await fetch(GITHUB_API_URL);
        const repos = await response.json();
        return repos;
    } catch (error) {
        console.error('Error fetching GitHub data:', error);
        return [];
    }
}

// Function to calculate language percentages
async function calculateLanguagePercentages() {
    const repos = await fetchGitHubData();
    const languageStats = {};

    // Fetch language data for each repository
    for (const repo of repos) {
        try {
            const langResponse = await fetch(repo.languages_url);
            const languages = await langResponse.json();
            
            // Add language data to stats
            for (const [lang, bytes] of Object.entries(languages)) {
                languageStats[lang] = (languageStats[lang] || 0) + bytes;
            }
        } catch (error) {
            console.error(`Error fetching languages for ${repo.name}:`, error);
        }
    }

    // Calculate percentages
    const totalBytes = Object.values(languageStats).reduce((a, b) => a + b, 0);
    const percentages = {};

    for (const [lang, bytes] of Object.entries(languageStats)) {
        percentages[lang] = Math.round((bytes / totalBytes) * 100);
    }

    return percentages;
}

// Function to create language item HTML
function createLanguageItem(language, percentage) {
    return `
        <div class="language-item">
            <span>${language}</span>
            <div class="proficiency-bar">
                <div class="proficiency" style="width: ${percentage}%"></div>
            </div>
            <span class="percentage">${percentage}%</span>
        </div>
    `;
}

// Function to update the languages section
async function updateLanguagesSection() {
    const languagesList = document.getElementById('languagesList');
    const percentages = await calculateLanguagePercentages();

    // Sort languages by percentage
    const sortedLanguages = Object.entries(percentages)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5); // Show top 5 languages

    // Create HTML for each language
    const languagesHTML = sortedLanguages
        .map(([lang, percentage]) => createLanguageItem(lang, percentage))
        .join('');

    // Update the DOM
    languagesList.innerHTML = languagesHTML;

    // Add animation to proficiency bars
    const proficiencyBars = document.querySelectorAll('.proficiency');
    proficiencyBars.forEach(bar => {
        bar.style.transition = 'width 1s ease-in-out';
    });
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateLanguagesSection();
}); 