import "./PostForm.css";
import PropTypes from "prop-types";

import axios from "axios";

export default function PostForm({ posts, setPosts }) {
    const createNewPost = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const body = {
            title: formData.get("title"),
            content: formData.get("content"),
            username: formData.get("username"),
        };

        axios
            .post("http://localhost:3001/api/posts", body)
            .then((response) => setPosts([{ ...response.data.post }, ...posts]));
    };

    return (
        <form onSubmit={createNewPost} className="postForm">
            <div className="titleWrapper">
                <div className="postFormTitle">Title</div>
                <input className="postFormTitleInput" type="text" name="title" />
            </div>
            <div className="contentWrapper">
                <div className="postFormContent">Content</div>
                <textarea className="postFormContentInput" type="text" name="content" />
            </div>
            <div className="authorWrapper">
                <div className="postFormUsername">Username</div>
                <input className="postFormUsernameInput" type="text" name="username" />
            </div>
            <button className="postFormSubmitButton" type="submit">
                Submit
            </button>
        </form>
    );
}

PostForm.propTypes = {
    setPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
};
