This is the BrainFlix project for BrainStation
Created by: Kyle Ingham

**BrainFlix Prototype - Client-side**  
Video Streaming Platform Prototype

Created by: Kyle Ingham

## Project Overview

BrainFlix is a prototype for a video streaming platform designed to demonstrate the potential of a new startup idea. The client side of this project was developed using React and Vite, focusing on a responsive and dynamic user interface to provide a robust user experience.

### Features

1. Displays a main video with dynamic details and comments.
2. Provides a sidebar with next videos, excluding the currently displayed one.
3. Allows users to click on side videos to update the main video section dynamically.
4. Implements responsive design to ensure usability across various devices and screen sizes.
5. Allows users to play videos with functional video controls.

### Technologies Used

- React
- Vite
- SASS
- Flexbox
- JavaScript
- HTML

### Challenges Faced

1. Ensuring the dynamic update of the main video section based on user interactions.
2. Ensuring video list is updated and removes selected video from the list.
3. Implementing a responsive design that closely matches the provided mockups.

### Future Features

1. Enhanced video player styling.

## Installation

To get started with the BrainFlix client-side application, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ingy10/kyle-ingham-brainflix.git
   cd kyle-ingham-brainflix
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Development Server:**

   ```bash
   npm run dev
   ```

4. **View the Application:**

   Open your browser and navigate to [http://localhost:5173/](http://localhost:5173/). This link may vary based on your environment, so check your terminal for the exact URL.

## Project Structure

Client-side Structure

- public
- src
  - assets
    - fonts
    - icons
    - images
    - logo
  - components
    - Header
      - Nav-bar
    - Main
      - Comments
        - Comments Section
    - Footer
  - pages
    - Main Video Page
    - Upload Video Page
  - data
  - styles
    - partials
- .gitignore
- eslint.config.js
- .env
- .env.sample
- package-lock.json
- package.json
- readme.md
- vite.config.js
