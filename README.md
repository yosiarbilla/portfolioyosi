# Portfolio Website - Yosi Pratama

Portfolio website pribadi yang modern dan masculine dengan tema gelap. Dibangun menggunakan React, Tailwind CSS, dan Framer Motion untuk animasi yang smooth.

## 🚀 Features

- **Dark Theme**: Tema gelap yang masculine dan elegan
- **Responsive Design**: Optimal di mobile dan desktop
- **Smooth Animations**: Menggunakan Framer Motion untuk transisi yang halus
- **Modern UI/UX**: Desain minimalis tapi engaging
- **Performance Optimized**: Fast loading dan smooth scrolling
- **Clean Code**: Struktur kode yang rapi dan mudah dikembangkan

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon components
- **iPhone System Fonts** - Typography

## 📁 Project Structure

```
portfolio-yosi/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Landing section
│   │   ├── About.jsx         # About me section
│   │   ├── Projects.jsx      # Projects showcase
│   │   ├── Skills.jsx        # Skills & technologies
│   │   └── Contact.jsx       # Contact information
│   ├── App.jsx               # Main app component
│   ├── index.js              # Entry point
│   └── index.css             # Global styles
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🎨 Customization Guide

### 1. Personal Information
Edit the following files to update your personal information:

**`src/components/Hero.jsx`**
- Change name: `Yosi Pratama`
- Update job title: `Web Developer & Creative Engineer`
- Modify description

**`src/components/About.jsx`**
- Update about me text
- Add your profile photo
- Modify personal traits

**`src/components/Contact.jsx`**
- Update email: `yosi.pratama@email.com`
- Change social media links
- Update location

### 2. Projects
In `src/components/Projects.jsx`, update the `projects` array:
```javascript
{
  id: 1,
  title: "Your Project Title",
  description: "Project description...",
  tech: ["Tech", "Stack"],
  liveUrl: "https://your-project.com",
  githubUrl: "https://github.com/your-repo"
}
```

### 3. Skills
In `src/components/Skills.jsx`, modify the `skillCategories` array to reflect your skills.

### 4. Colors & Styling
Update colors in `tailwind.config.js`:
```javascript
colors: {
  'dark': {
    900: '#0a0a0a',  // Main background
    800: '#1a1a1a',  // Section backgrounds
    700: '#2a2a2a',  // Card backgrounds
    600: '#3a3a3a',  // Borders
  }
}
```

### 5. Animations
Customize animations in `src/index.css` or individual components using Framer Motion.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Features Implemented

### ✅ Design Requirements
- [x] Dark/black masculine theme
- [x] iPhone system fonts
- [x] Minimalist but not boring layout
- [x] Hover effects and light animations
- [x] Card/grid layout for projects

### ✅ Sections
- [x] Hero with name, title, CTA buttons
- [x] About Me with description & photo placeholder
- [x] Projects showcase (3 sample projects)
- [x] Skills with technology icons
- [x] Contact with email & social links

### ✅ Technical
- [x] React + Tailwind CSS
- [x] Framer Motion animations
- [x] Clean code structure
- [x] Separate components
- [x] Responsive design
- [x] Scroll animations

## 🔧 Performance Tips

1. **Optimize Images**: Add your actual project images in optimized formats
2. **Lazy Loading**: Consider adding lazy loading for images
3. **Bundle Analysis**: Use `npm run build` and analyze bundle size
4. **Caching**: Configure proper caching headers for production

## 📝 TODO / Enhancements

- [ ] Add actual project images
- [ ] Implement dark mode toggle (optional)
- [ ] Add blog section
- [ ] Integrate with CMS
- [ ] Add contact form with backend
- [ ] SEO optimization
- [ ] Add testimonials section

## 🎨 Design Philosophy

Website ini mengadopsi prinsip:
- **Masculine & Professional**: Warna gelap dengan tipografi tegas
- **Clean & Minimal**: Fokus pada konten, tidak ramai
- **Performance First**: Animasi ringan, loading cepat
- **User Experience**: Navigasi intuitif, responsive design

---

**Built with ❤️ using React & Tailwind CSS** 