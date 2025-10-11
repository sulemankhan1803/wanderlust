# Wanderlust - Full Stack Travel Accommodation Platform

Wanderlust is a full-stack web application inspired by Airbnb, where users can explore, create, edit, and review travel listings.  
It supports user authentication, image uploads via Cloudinary, and stores data securely in MongoDB Atlas.

---

## 🚀 Features

- 🏠 Create, edit, and delete listings (hotels, villas, cottages, etc.)
- 🧭 Explore listings with location details
- 🌍 Upload and store images via **Cloudinary**
- 🔐 Secure authentication using **Passport.js**
- 💬 Add and manage reviews for listings
- ⚙️ Data validation using **Joi**
- 💾 MongoDB Atlas for database storage
- 🗺️ Mapbox integrated for geolocation (dummy coordinates used if token invalid)
- ✨ Flash messages and clean UI with EJS templates

---

## 🛠️ Tech Stack

**Frontend:**  
- EJS  
- Bootstrap / Custom CSS  

**Backend:**  
- Node.js  
- Express.js  

**Database:**  
- MongoDB Atlas  

**Other Tools:**  
- Cloudinary (Image Storage)  
- Multer (File Upload Middleware)  
- Passport.js (Authentication)  
- Connect-Mongo (Session Storage)  
- dotenv (Environment Variables)

---

## 📦 Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/sulemankhan1803/wanderlust.git
cd wanderlust
```
### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Setup environment variables
Create a .env file in the root directory and add:
```bash
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
MAP_TOKEN=your_mapbox_token
```

🧑‍💻 Usage
Start the app:
```bash
node app.js
```

or (for auto-restart on save)
```bash
npx nodemon app.js
```

Visit:
http://localhost:8080/listings


