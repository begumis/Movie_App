const express = require("express");
const router = express.Router();
const { updateProfilePicture, updateEmail, updatePassword, deleteUserAccount } = require("../controllers/user.js");
const  auth  = require("../middleware/auth.js");

// Profil resmini güncelleme
router.patch("/updateProfilePicture", auth, updateProfilePicture);

// E-postayı güncelleme
router.patch("/updateEmail", auth, updateEmail);

// Şifreyi güncelleme
router.patch("/updatePassword", auth, updatePassword);

// Hesabı silme
router.delete("/deleteAccount", auth, deleteUserAccount);

module.exports = router;
