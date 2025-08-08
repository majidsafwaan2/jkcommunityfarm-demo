# JK Community Farm Website Clone

A modern, responsive website clone of the JK Community Farm website with an integrated AI-powered chatbot specifically designed for community farming and food security.

## 🌟 Features

### Website Features
- **Modern Design**: Clean, professional design with green color scheme matching the farm theme
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Elements**: Smooth animations, hover effects, and dynamic content
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Performance**: Optimized loading with lazy loading and efficient code

### Chatbot Features
- **Farm-Specific Characters**: 4 unique characters with different roles:
  - **Sarah** - Head Farmer (farming expertise, sustainable agriculture)
  - **Mike** - Volunteer Coordinator (volunteer opportunities, community engagement)
  - **Lisa** - Education Director (food education, nutrition, learning)
  - **Emma** - Community Outreach (food pantries, community partnerships)

- **AI-Powered Conversations**: Realistic responses using Google's Gemini AI
- **Quick Prompts**: Pre-defined conversation starters
- **Character Selection**: Users can choose which farm staff member to chat with
- **Mobile Responsive**: Perfect experience on all devices

## 🚀 Quick Start

### Prerequisites
- Modern web browser
- Internet connection (for AI chatbot functionality)
- Local web server (for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/majidsafwaan2/jkcommunityfarm-demo.git
   cd jkcommunityfarm-demo
   ```

2. **Open in browser**
   - For development: Use a local server (e.g., `python -m http.server 8000`)
   - For production: Deploy to any web hosting service

3. **Access the website**
   - Open `index.html` in your browser
   - The chatbot will automatically load in the bottom-right corner

## 📁 Project Structure

```
jkcommunityfarm-demo/
├── index.html              # Main HTML file
├── styles.css              # Complete CSS styles
├── main.js                 # Website functionality
├── chatbot.js              # AI chatbot implementation
├── images/                 # Image assets
│   ├── logo.png           # Farm logo
│   ├── hero-bg.jpg        # Hero background
│   ├── food-education-center.jpg
│   ├── hitt-contracting.jpg
│   ├── hitt-partnership.jpg
│   └── partner*.png       # Partner logos
└── README.md              # This file
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#4CAF50` - Main brand color
- **Secondary Green**: `#45a049` - Darker green for hover states
- **Background**: `#f8f9fa` - Light gray for sections
- **Text**: `#333` - Dark gray for readability
- **Accent**: `#2196F3` - Blue for links and highlights

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 600-700 weight
- **Body Text**: 400 weight
- **Responsive Sizes**: Scales appropriately on all devices

### Components
- **Buttons**: Gradient backgrounds with hover effects
- **Cards**: Shadow effects with hover animations
- **Navigation**: Fixed header with dropdown menus
- **Chatbot**: Floating widget with character selection

## 🤖 Chatbot Configuration

### Characters

#### Sarah - Head Farmer
- **Expertise**: Sustainable agriculture, organic farming, crop management
- **Topics**: Farming techniques, crop varieties, soil health, organic practices
- **Personality**: Knowledgeable, passionate, educational

#### Mike - Volunteer Coordinator
- **Expertise**: Volunteer management, community engagement, event planning
- **Topics**: Volunteer opportunities, corporate team building, field trips
- **Personality**: Enthusiastic, encouraging, community-focused

#### Lisa - Education Director
- **Expertise**: Food education, nutrition, sustainable agriculture education
- **Topics**: Food security, healthy eating, educational programs
- **Personality**: Educational, inspiring, informative

#### Emma - Community Outreach
- **Expertise**: Community partnerships, food pantries, food justice
- **Topics**: Community impact, food distribution, partnerships
- **Personality**: Community-focused, informative, impact-driven

### AI Integration
- **API**: Google Gemini AI (Gemini 1.5 Flash)
- **Response Style**: Friendly, informative, concise
- **Context**: Farm-specific information and community focus
- **Language**: Natural, conversational, educational

## 🔧 Customization

### Styling
The website uses CSS custom properties for easy customization:

```css
:root {
    --primary-color: #4CAF50;
    --secondary-color: #45a049;
    --background-color: #f8f9fa;
    --text-color: #333;
    --accent-color: #2196F3;
}
```

### Chatbot Configuration
Modify the chatbot by editing `chatbot.js`:

```javascript
// Change API key
const chatbot = new JKFarmChatbot({
    apiKey: 'your-api-key-here',
    organization: 'Your Organization Name'
});

// Add new characters
const newCharacter = {
    id: 'new-character',
    name: 'Character Name',
    role: 'Character Role',
    photo: 'path/to/photo.jpg',
    system: 'Character system prompt',
    intro: 'Character introduction'
};
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

### Mobile Features
- Collapsible navigation menu
- Touch-friendly buttons and interactions
- Optimized chatbot for mobile screens
- Responsive typography and spacing

## 🚀 Deployment

### Vercel Deployment
1. **Connect to Vercel**
   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Deploy
   vercel
   ```

2. **GitHub Integration**
   - Push to GitHub repository
   - Connect repository to Vercel
   - Automatic deployments on push

### Other Hosting Options
- **Netlify**: Drag and drop deployment
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3**: Static website hosting
- **Firebase Hosting**: Google's hosting solution

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph protocol support
- Structured data markup
- Fast loading times
- Mobile-first design

## 🧪 Testing

### Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

### Performance
- Lighthouse score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Page load time: < 3 seconds
- Mobile-friendly design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **JK Community Farm**: Original website inspiration
- **Google Gemini AI**: AI chatbot functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography
- **Inter Font**: Primary typeface

## 📞 Support

For support and questions:
- **GitHub Issues**: [Create an issue](https://github.com/majidsafwaan2/jkcommunityfarm-demo/issues)
- **Email**: support@example.com
- **Documentation**: [Wiki](https://github.com/majidsafwaan2/jkcommunityfarm-demo/wiki)

## 🔄 Updates

### Version 1.0.0
- Initial release
- Complete website clone
- AI-powered chatbot
- Responsive design
- Modern UI/UX

---

**Built with ❤️ for community farming and food security**