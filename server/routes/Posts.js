const router = require("express").Router();
const { getAllPosts, createPost } = require("../controllers/Posts");

router.route("/").get(getAllPosts).post(createPost);

module.exports = router;
