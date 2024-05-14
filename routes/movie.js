const express = require("express");
const {getAllMovies,getMovieDetail,createMovie,getMovieUpdate,deleteMovie} = require("../controllers/movie.js");
const isAdmin = require("../middleware/isAdmin.js")


const router = express.Router();

router.get("/", getAllMovies);
router.get("/getMovieDetail/:id", getMovieDetail);
router.post("/createMovie",isAdmin,createMovie);
router.patch("/getMovieUpdate/:id",isAdmin,getMovieUpdate);
router.delete("/deleteMovie/:id",isAdmin,deleteMovie);


module.exports = router;