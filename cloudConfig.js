const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('@fluidjs/multer-cloudinary');
const multer = require('multer'); // ✅ import multer for safer config

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Define Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'Wanderlust', // Your Cloudinary folder
    allowed_formats: ['jpg', 'png', 'jpeg', 'avif', 'webp'], // allowed formats
    transformation: [{ quality: 'auto', fetch_format: 'auto' }], // optimize images automatically
  },
});

// Add safe multer limits
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // max 5MB file
    files: 1, // allow only 1 file per upload
  },
});

module.exports = { cloudinary, storage, upload };
