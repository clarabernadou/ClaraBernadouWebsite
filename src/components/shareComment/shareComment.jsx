// Import utils
import React, { useState } from "react";
import axios from "axios";
// Import CSS

// Create a function
export default function Share(props) {
  const [descriptionComment, setDescriptionComment] = useState('');

  const comment = async (e) => {
    e.preventDefault(); //To prevent the default event
    //Add the config
    // const config = {
    //   headers: {
    //      "Content-Type": "application/json"
    //    }
    // }

    //Form for push infos to array in database
    let form = new FormData()
    form.append('userId', localStorage.getItem('userId'));
    form.append('username', props.username);
    form.append('descriptionComment', descriptionComment);

    console.log(form);

    //TEST
    console.log('-----------------------------------------')
    console.log('Form data console.log ⬇️')
    console.log(form.data)

      //Recovery the backend with Axios
      const response = await axios({
        method: "post",
        baseURL: `http://localhost:8080/api/comments/createComment`,
        headers: {'Content-Type' : 'multipart/form-data'},
        data: form
      })

      //TEST
      console.log('-----------------------------------------')
      console.log('Response data console.log ⬇️')
      console.log(response.data)


      props.setComments([...props.comments, response.data])
      
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
        <form>
          <div className="postInput">
            <input
              type="text"
              value={descriptionComment}
              onChange={(e) => setDescriptionComment(e.target.value)}
              placeholder="Write whatever you want..."
              aria-label='content-input'
              className="shareInput"
            />
          </div>
            <div className="postButton">
              <button 
                onClick={(e) => { comment(e)}}
                className="shareButton">
                Comment
              </button>
            </div>
          </form>
      </div>
  );
}