// Import utils
import React, { useState } from "react";
import axios from "axios";

// Create a function
export default function ShareComment(props) {
  const [descriptionComment, setDescriptionComment] = useState('');
  const setPosts = props.setPosts
  console.log(setPosts);

  const postComment = async (e) => {
    e.preventDefault(); //To prevent the default event
    //Add the config
    const config = {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
    console.log(config);
    console.log("Props posts console.log")
    console.log(props.posts);

      //Recovery the backend with Axios
      const response = await axios.post(`http://localhost:8080/api/:publicationId/comments`, {
        username: localStorage.getItem('username'),
        descriptionComment: descriptionComment,
        publicationId: props.publicationId,
      }, config);
      console.log(response);

      props.setPosts((oldState) => { 
        const posts = [...oldState]
        console.log(posts)
        const index = posts.findIndex(post => post.id === response.data.publicationId)
        posts[index].comments.push(response.data)
        console.log('New post', posts)
        return posts
      });
      setDescriptionComment('')
  }
  return (
      <div className="shareWrapper">
        <div className="shareTop">
          <div className="shareInfosContainer">
            <div className="shareName">
              <span className="shareProfileName">{localStorage.getItem('username')}</span>
            </div>
          </div>
        </div>
        <form onSubmit={(e) => { postComment(e)}}>
          <div className="postInput">
            <input
              type="text"
              value={descriptionComment}
              onChange={(e) => setDescriptionComment(e.target.value)}
              placeholder="Write a comment..."
              aria-label='content-input'
              className="shareInput"
            />
            </div>
          </form>
      </div>
  );
}