# Portfolio Template

A clean and modern portfolio template built with HTML, CSS, and JavaScript. This template is designed to showcase your skills, work experience, certificates, education, and personal information in a professional manner.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Welcome banner with profile image
- Social media integration
- Project showcase section
- Work experience timeline
- Certificates display
- Education section
- About me section with:
  - Technical skills
  - Language proficiency
  - Personal details
  - Contact form
- Modern animations and transitions
- Clean and professional design

## How to Use

1. Clone or download this repository
2. Open `index.html` in your code editor
3. Customize the content in `index.html` with your personal information
4. Modify the styles in `styles.css` to match your preferences
5. Update the JavaScript functionality in `script.js` if needed

## Customization Guide

### 1. Welcome Section
```html
<div class="welcome-banner">
    <div class="profile-image">
        <img src="your-profile-image.jpg" alt="Your Name">
    </div>
    <div class="welcome-content">
        <h1>Welcome to My Portfolio</h1>
        <p class="intro-text">Hi, I'm <span class="highlight">Your Name</span></p>
        <p class="subtitle">Your Title/Role</p>
    </div>
</div>
```
- Replace `your-profile-image.jpg` with your profile picture
- Update name and title
- Profile image should be square (recommended size: 600x600px)

### 2. Social Media Links
```html
<div class="social-links">
    <a href="your-linkedin-url" class="social-link linkedin">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="your-github-url" class="social-link github">
        <i class="fab fa-github"></i>
    </a>
    <a href="your-instagram-url" class="social-link instagram">
        <i class="fab fa-instagram"></i>
    </a>
</div>
```
- Replace URLs with your social media profiles
- Add or remove social media platforms as needed
- Icons use Font Awesome (already included)

### 3. Project Showcase
```html
<div class="project-preview">
    <div class="project-image">
        <img src="project-image.jpg" alt="Project Title">
    </div>
    <div class="project-description">
        <h3>Project Title</h3>
        <p>Project description...</p>
        <a href="#" class="btn">Learn More</a>
    </div>
</div>
```
- Add your project images
- Update project descriptions
- Add links to project details

### 4. Work Experience
```html
<div class="timeline-item">
    <div class="timeline-content">
        <h3>Job Title</h3>
        <p class="date">Duration</p>
        <p>Job description...</p>
    </div>
</div>
```
- Add your work history
- Include dates and descriptions
- Add company logos if desired

### 5. Certificates
```html
<div class="certificate-card">
    <h3>Certificate Title</h3>
    <p>Issuing Organization</p>
    <p>Date Earned</p>
    <p>Description</p>
</div>
```
- Add your certificates
- Include issue dates and organizations
- Add certificate images if available

### 6. Education
```html
<div class="education-item">
    <h3>Institution Name</h3>
    <p class="degree">Degree Name</p>
    <p class="year">Duration</p>
    <p>Description</p>
</div>
```
- Add your educational background
- Include degrees and dates
- Add institution logos if desired

### 7. About Me Section
#### Technical Skills
```html
<div class="skill-item">
    <i class="fas fa-code"></i>
    <span>Skill Name</span>
</div>
```
- Add your technical skills
- Use appropriate Font Awesome icons
- Update skill levels as needed

#### Languages
```html
<div class="language-item">
    <span>Language</span>
    <div class="proficiency-bar">
        <div class="proficiency" style="width: 90%"></div>
    </div>
</div>
```
- Add languages you know
- Adjust proficiency percentages
- Add or remove languages as needed

#### Contact Form
```html
<form id="contactForm">
    <input type="text" id="name" name="name" required>
    <input type="email" id="email" name="email" required>
    <textarea id="message" name="message" required></textarea>
    <button type="submit" class="btn">Send Message</button>
</form>
```
- Update form handling in script.js
- Add your email service integration
- Customize form fields as needed

## Styling Customization

### Colors
The template uses a clean color scheme that can be modified in `styles.css`:
- Primary: #3498db (Blue)
- Secondary: #2c3e50 (Dark Blue)
- Background: #f8f9fa (Light Gray)
- Text: #333 (Dark Gray)

### Fonts
- Main font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Font Awesome icons for social media and skills

### Responsive Breakpoints
- Mobile: max-width: 768px
- Tablet: 768px - 1024px
- Desktop: 1024px and above

## Browser Support

The template is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is free to use for personal and commercial projects.

## Credits

- Font Awesome for icons
- Google Fonts for typography 