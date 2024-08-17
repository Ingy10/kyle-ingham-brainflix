This is the BrainFlix project for BrainStation
Created by: Kyle Ingham

BrainFlix Prototype - Sprint 1
Video Streaming Platform Prototype

# Project Overview:

- Project Description:

  BrainFlix is a prototype for a video streaming platform designed to demonstrate the potential of a new startup idea. Developed to assist an entrepreneur in securing funding from venture capitalists, BrainFlix showcases a responsive and functional app prototype based on provided designs and mockups. The project involves creating dynamic components with React, ensuring a seamless user experience, and adhering to modern design principles.

- What the application does:

  1. Displays a main video with dynamic details and comments.
  2. Provides a sidebar with next videos, excluding the currently displayed one.
  3. Allows users to click on side videos to update the main video section dynamically.
  4. Implements responsive design to ensure usability across various devices and screen sizes.
  5. Allows users to play given video with functional video controls.

- Technologies used:

  1. React
  2. Vite
  3. SASS
  4. Flexbox
  5. JavaScript
  6. HTML

- Challenges faced:

  1. Ensuring the dynamic update of the main video section based on user interactions.
  2. Ensuring video list is updated and removes selected video from list.
  3. Implementing a responsive design that closely matches the provided mockups.

- Future features:

  1. A fully functional comments section allowing users to post new comments.
  2. Enhanced video player styling.

- Installation:

  - To get started with the BrainFlix prototype, follow these steps:
    1. Clone the repository
       - git clone https://github.com/Ingy10/kyle-ingham-brainflix.git
       - cd kyle-ingham-brainflix
    2. Install Dependencies
       - npm install
    3. Run the dev server
       - npm run dev

- Usage:

  After running the development server, you can view the application in your browser at http://localhost:5173/. This link may be different for other users so check your terminal for the link next to 'Local:' after you run the dev server. The application will automatically reload if you make changes to the source code.

- Project Structure

  Brainflix-Kyle-Ingham

  - public
  - src
    - assets
      - fonts
      - icons
      - images
      - logo
    - components
      - header
        - nav-bar
      - main
        - Comments
          - Comments Section
      - Footer
    - data
    - styles
      - partials
  - .gitignore
  - eslint.config.js
  - package-lock.json
  - package.json
  - readme.md
  - vite.config.js
