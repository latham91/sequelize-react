import PropTypes from "prop-types";
import "./PostCard.css";

export default function PostCard({ title, content, username, createdAt }) {
    return (
        <div className="postCardContainer">
            <div className="postCardTitle">{title}</div>
            <div className="postCardContent">&quot;{content}&quot;</div>
            <div className="postCardFooter">
                <div className="postCardUsername">{username}</div>
                <div className="postCardCreatedAt">
                    {new Date(createdAt).toLocaleDateString()} - {new Date(createdAt).toLocaleTimeString()}
                </div>
            </div>
        </div>
    );
}

PostCard.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};
