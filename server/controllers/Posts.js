const { posts } = require("../models");

const getAllPosts = async (req, res) => {
    try {
        const allPosts = await posts.findAll();

        if (posts.length === 0) {
            return res.status(404).json({ success: false, count: posts.length, message: "No posts found" });
        }

        return res.status(200).json({ success: true, count: posts.length, posts: allPosts });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Unable to retrieve posts", error: error.message });
    }
};

const createPost = async (req, res) => {
    const { title, content, username } = req.body;

    // Post body validation
    if (!title || !content || !username) {
        return res.status(400).json({ success: false, message: "Missing required field" });
    }

    // Create post
    try {
        const newPost = await posts.create({ title, content, username });
        return res.status(201).json({ success: true, message: "Post created", post: newPost });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Unable to create post", error: error.message });
    }
};

module.exports = { getAllPosts, createPost };
