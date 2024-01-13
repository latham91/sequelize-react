import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";

import PostCard from "./components/PostCard";
import PostForm from "./components/PostForm";

export default function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://192.168.1.145:3001/api/posts").then((response) => setPosts(response.data.posts));
    }, []);

    if (!posts) return <div>Loading...</div>;

    return (
        <div className="App">
            <div className="formContainer">
                <PostForm posts={posts} setPosts={setPosts} />
            </div>
            <div className="postsContainer">
                {posts.map((post) => (
                    <PostCard key={post.post_id} {...post} />
                ))}
            </div>
        </div>
    );
}
