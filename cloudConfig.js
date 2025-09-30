const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('@fluidjs/multer-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'Wanderlust', // your Cloudinary folder
    allowed_formats: ['jpg', 'png', 'jpeg', 'avif'], // restrict file types
  },
});

module.exports = { cloudinary, storage };