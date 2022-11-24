import { useState } from "react";
import axios from "axios";

const URL = "http://localhost:3000/users";

export const SendForm = ({ name, contact, birth, input }) => {
  const [post, setPost] = useState(false);
  const [sending, setSending] = useState(false);

  const createPost = () => {
    setSending(true);
    axios.post(URL, input).then(() => {
      setPost(true);
    }).catch(() => {
        setPost(false);
    });
  }

  return (
    <>
      {name && contact && birth && (
        <>
          
          {!post ? (
            <>
                <button onClick={createPost}>Enviar {post}</button>
                {
                    sending && <small className="error">Ha ocurrido un error!</small>
                }
            </>
            ) : (
                <div className="success">Se ha guardado correctamente!</div>
            )}
          <div className="chat-message-answers-content clearfix">
            <div>{name}</div>
            <div>{contact}</div>
            <div>{birth}</div>
          </div>
        </>
      )}
    </>
  );
};
