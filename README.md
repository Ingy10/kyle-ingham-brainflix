# 🎥 BrainFlix - Video Streaming Platform

A full-stack video streaming platform prototype built with React and Express, featuring dynamic content loading, video playback, and user interactions.

## 🌟 Screenshots

[Project Screenshot - Landing Page](./src/assets/screenshots/BrainFlix%20Kyle%20Ingham%20-%20Main%20Page.png)

[Project Screenshot - Upload Page](./src/assets/screenshots/BrainFlix%20Kyle%20Ingham%20-%20Upload%20Page.png)

## ⚡ Key Features

- 📺 Dynamic video playback with custom controls
- 💬 Interactive comment system with real-time updates
- 📤 Video upload simulation with image thumbnails
- 📱 Fully responsive design across all devices
- 🔄 Real-time content updates via API
- 🎨 Sleek, modern UI based on professional mockups

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Sass](https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-671DDF?style=flat-square&logo=axios&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white)
![Multer](https://img.shields.io/badge/-Multer-FF6B6B?style=flat-square&logoColor=white)

## 🚀 Quick Start

### Frontend Setup
```bash
# Clone the frontend repository
git clone https://github.com/Ingy10/kyle-ingham-brainflix.git
cd kyle-ingham-brainflix

# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup
```bash
# Clone the backend repository
git clone https://github.com/Ingy10/kyle-ingham-brainflix.api.git
cd kyle-ingham-brainflix.api

# Install dependencies
npm install

# Start the server
node --watch index.js
```

## 📐 Architecture

### Frontend Structure
```
src/
├── assets/          # Static assets (fonts, icons, images)
├── components/      # Reusable React components
├── pages/          # Page components
├── styles/         # SASS styles
└── utils/          # Utility functions
```

### Backend Structure
```
server/
├── data/           # JSON data storage
├── public/         # Static files
├── routes/         # API route handlers
└── middleware/     # Custom middleware
```

## 🔌 API Endpoints

```javascript
GET    /api/videos          # Get all videos
GET    /api/videos/:id      # Get specific video
POST   /api/videos          # Upload new video
POST   /api/videos/comments # Add comment
DELETE /api/comments/:id    # Delete comment
```

## 💡 Key Features Explained

### Video Player
- Custom video controls
- Dynamic content loading
- Automatic next video suggestions
- View count tracking

### Comment System
- Real-time comment posting
- Comment deletion functionality
- Timestamp formatting
- Like/dislike functionality

### Upload System
- Image thumbnail upload
- Form validation
- Progress tracking
- Success notifications

## 🎯 Future Enhancements

- [ ] User authentication system
- [ ] Video categories and tags
- [ ] Advanced search functionality
- [ ] Social sharing features
- [ ] Analytics dashboard

## 🔨 Development

### Prerequisites
- Node.js >= 14.0.0
- npm >= 6.14.0

### Environment Variables
```env
# Frontend (.env)
VITE_API_URL=http://localhost:8080

# Backend (.env)
PORT=8080
CORS_ORIGIN=http://localhost:5173
```

## 📚 Learning Outcomes

- React component architecture
- State management
- REST API development
- File upload handling
- Full-stack integration
- Responsive design implementation

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

## 🤝 Connect With Me

- [LinkedIn](https://www.linkedin.com/in/kyle-ingham/)

---

Made with ❤️ by Kyle Ingham
