import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";
import PhotoLibrary from "@mui/icons-material/PhotoLibrary";
import Videocam from "@mui/icons-material/Videocam";
import EmojiEmotions from "@mui/icons-material/EmojiEmotions";
import { useStatevalue } from './StateProvider';
import db from "./firebase";
import firebase from "firebase/compat/app"

const MessageSender = () => {
const [input, setInput] = useState('');
const [imageUrl, setImageUrl] = useState('')
const [{user},dispatch] = useStatevalue();

  const handleSubmit = (e) => {
    e.preventDefault();

db.collection("posts").add({
  message:input,
  timestamp:firebase.firestore.FieldValue.serverTimestamp(),
  profilePic:user.photoURL,
  username:user.displayName,
  image:imageUrl,
});

    setImageUrl("");
    setInput("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender_Top">
        <Avatar src={user.photoURL}/>
        <form>
          <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
            className="messageSender_input"
            placeholder={"Whats on your mind"}
          />
          <input value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} placeholder="Image url (optional)" />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender_Bottom">
        <div className="messageSender_option">
          <Videocam style={{ color: "red" }} className="video" />
          <p>Live Video</p>
        </div>
        <div className="messageSender_option">
          <PhotoLibrary style={{ color: "green" }} className="photo" />
          <p>Photo/Video</p>
        </div>
        <div className="messageSender_option">
          <EmojiEmotions style={{ color: "orange" }} className="emoji" />
          <p>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
