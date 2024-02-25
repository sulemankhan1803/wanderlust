const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require('multer');
const { storage } = require("../cloudConfig.js")
const upload = multer({ storage })


router.route("/")
    // Index Route
    .get(wrapAsync(listingController.index))

    // Create route
    .post(isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingController.createListing));


// New Listing Route 
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
    // Show Route
    .get(wrapAsync(listingController.showListing))

    // Update route
    .put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))

    // Delete Route
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// Edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));


module.exports = router;