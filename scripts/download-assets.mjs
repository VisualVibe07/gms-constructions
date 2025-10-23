import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';

// Create directories
const createDirectories = async () => {
  const dirs = [
    'public/images',
    'public/fonts',
    'public/icons',
    'src/assets'
  ];
  
  for (const dir of dirs) {
    try {
      await fs.mkdir(dir, { recursive: true });
      console.log(`✅ Created directory: ${dir}`);
    } catch (error) {
      console.log(`Directory ${dir} already exists or error: ${error.message}`);
    }
  }
};

// Download images
const downloadImages = async () => {
  const images = [
    // Hero background images
    { url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop', filename: 'hero-bg.jpg' },
    { url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop', filename: 'hero-bg-2.jpg' },
    
    // Project images
    { url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop', filename: 'project-1.jpg' },
    { url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop', filename: 'project-2.jpg' },
    { url: 'https://images.unsplash.com/photo-1590725140246-20acdee442be?w=400&h=300&fit=crop', filename: 'project-3.jpg' },
    { url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop', filename: 'project-4.jpg' },
    { url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop', filename: 'project-5.jpg' },
    { url: 'https://images.unsplash.com/photo-1590725140246-20acdee442be?w=400&h=300&fit=crop', filename: 'project-6.jpg' },
    { url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop', filename: 'project-7.jpg' },
    { url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop', filename: 'project-8.jpg' },
    { url: 'https://images.unsplash.com/photo-1590725140246-20acdee442be?w=400&h=300&fit=crop', filename: 'project-9.jpg' },
    { url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop', filename: 'project-10.jpg' },
    { url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop', filename: 'project-11.jpg' },
    { url: 'https://images.unsplash.com/photo-1590725140246-20acdee442be?w=400&h=300&fit=crop', filename: 'project-12.jpg' },
    { url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop', filename: 'project-13.jpg' },
    { url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop', filename: 'project-14.jpg' },
    { url: 'https://images.unsplash.com/photo-1590725140246-20acdee442be?w=400&h=300&fit=crop', filename: 'project-15.jpg' },
    { url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop', filename: 'project-16.jpg' },
    { url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop', filename: 'project-17.jpg' },
    { url: 'https://images.unsplash.com/photo-1590725140246-20acdee442be?w=400&h=300&fit=crop', filename: 'project-18.jpg' },
    { url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop', filename: 'project-19.jpg' },
    { url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop', filename: 'project-20.jpg' },
    
    // Team images
    { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', filename: 'team-1.jpg' },
    { url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop', filename: 'team-2.jpg' },
    { url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop', filename: 'team-3.jpg' },
    
    // Testimonial images
    { url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop', filename: 'testimonial-1.jpg' },
    { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', filename: 'testimonial-2.jpg' },
    { url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop', filename: 'testimonial-3.jpg' },
    
    // Blog images
    { url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop', filename: 'blog-1.jpg' },
    { url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop', filename: 'blog-2.jpg' },
    
    // About image
    { url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop', filename: 'about.jpg' }
  ];

  console.log('📥 Downloading images...');
  
  for (const image of images) {
    try {
      const response = await fetch(image.url);
      if (response.ok) {
        const buffer = await response.buffer();
        await fs.writeFile(`public/images/${image.filename}`, buffer);
        console.log(`✅ Downloaded: ${image.filename}`);
      } else {
        console.log(`❌ Failed to download: ${image.filename}`);
      }
    } catch (error) {
      console.log(`❌ Error downloading ${image.filename}: ${error.message}`);
    }
  }
};

// Download fonts
const downloadFonts = async () => {
  const fonts = [
    {
      name: 'Poppins',
      url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap',
      filename: 'poppins.css'
    },
    {
      name: 'Roboto',
      url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
      filename: 'roboto.css'
    }
  ];

  console.log('📥 Downloading fonts...');
  
  for (const font of fonts) {
    try {
      const response = await fetch(font.url);
      if (response.ok) {
        const css = await response.text();
        await fs.writeFile(`public/fonts/${font.filename}`, css);
        console.log(`✅ Downloaded: ${font.filename}`);
      } else {
        console.log(`❌ Failed to download: ${font.filename}`);
      }
    } catch (error) {
      console.log(`❌ Error downloading ${font.filename}: ${error.message}`);
    }
  }
};

// Create icon fonts
const createIconFonts = async () => {
  const iconCSS = `
/* Font Awesome Icons */
@font-face {
  font-family: 'FontAwesome';
  src: url('data:font/woff2;base64,') format('woff2');
  font-weight: normal;
  font-style: normal;
}

.fa {
  font-family: 'FontAwesome';
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fa-facebook:before { content: "\\f09a"; }
.fa-twitter:before { content: "\\f099"; }
.fa-linkedin:before { content: "\\f08c"; }
.fa-instagram:before { content: "\\f16d"; }
.fa-arrow-right:before { content: "\\f061"; }
.fa-arrow-left:before { content: "\\f060"; }
.fa-phone:before { content: "\\f095"; }
.fa-envelope:before { content: "\\f0e0"; }
.fa-map-marker:before { content: "\\f041"; }
.fa-clock:before { content: "\\f017"; }
.fa-heart:before { content: "\\f004"; }
`;

  try {
    await fs.writeFile('public/icons/fontawesome.css', iconCSS);
    console.log('✅ Created: fontawesome.css');
  } catch (error) {
    console.log(`❌ Error creating fontawesome.css: ${error.message}`);
  }
};

// Create animations CSS
const createAnimations = async () => {
  const animationsCSS = `
/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}

/* Animation classes */
.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out;
}

.animate-fadeInLeft {
  animation: fadeInLeft 0.6s ease-out;
}

.animate-fadeInRight {
  animation: fadeInRight 0.6s ease-out;
}

.animate-slideInDown {
  animation: slideInDown 0.6s ease-out;
}

.animate-pulse {
  animation: pulse 2s infinite;
}

.animate-bounce {
  animation: bounce 1s infinite;
}

/* Hover animations */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}

.hover-rotate {
  transition: transform 0.3s ease;
}

.hover-rotate:hover {
  transform: rotate(5deg);
}

/* Loading animations */
.loading-spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Scroll animations */
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
`;

  try {
    await fs.writeFile('public/animations.css', animationsCSS);
    console.log('✅ Created: animations.css');
  } catch (error) {
    console.log(`❌ Error creating animations.css: ${error.message}`);
  }
};

// Main execution
const main = async () => {
  console.log('🚀 Starting asset download...');
  
  try {
    await createDirectories();
    await downloadImages();
    await downloadFonts();
    await createIconFonts();
    await createAnimations();
    
    console.log('✅ All assets downloaded successfully!');
  } catch (error) {
    console.error('❌ Error during asset download:', error);
  }
};

main();
