# Blogify Hub - Where Ideas Thrive

Welcome to Blogify Hub! This is a simple and powerful blogging platform that allows you to create and share your thoughts with the world.

## Features

- **User Authentication:** Securely sign up and log in to start managing your own blog.

- **Create and Edit Posts:** Write and edit your blog posts with an easy-to-use editor.

- **Categories and Tags:** Organize your content by adding categories and tags to your posts.

- **Responsive Design:** Enjoy a seamless experience across devices - desktop, tablet, and mobile.

## API Documentation
- **Link:** https://documenter.getpostman.com/view/32463080/2s9Yytg1Ae

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **JWT**: JSON Web Tokens for authentication.
- **bcrypt**: for hashing the password of users.
- **Cookie-Parser**: for accessing and setting cookies in user's browser securely.
- **Multer**: for storing all the files uploaded on app in our local server.
- **Cloudinary**: for uploading all files from local server to cloudinary cloud.

  
## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

  - #### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/mern-blog-app.git
    cd mern-blog-app
    ```

2. Install server dependencies:

    ```bash
    cd server
    npm install
    ```

3. Install client dependencies:

    ```bash
    cd ../client
    npm install
    ```

4. Create a `.env` file in the `server` directory with the following content:

    ```plaintext
    MONGODB_URI=your_mongodb_connection_string
    ```

   Replace `your_mongodb_connection_string` with your MongoDB connection string.

#### Usage
- Sign up for an account or log in if you already have one.
- Create a new post and start writing your content.
- Save and publish your post to make it visible to others.
- Explore other posts on the platform, and engage with the community.
- 
1. Start the server:

    ```bash
    cd server
    npm run dev
    ```

   The server will run on http://localhost:8000.

2. Start the client:

    ```bash
    cd ../client
    npm run dev
    ```

   The client will run on http://127.0.0.1:5173/.

3. Open your browser and visit  http://127.0.0.1:5173/ to access the blog application.

