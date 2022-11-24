import { useState } from "react";
import formIcon from "../assets/form-icon.png";
import { ChatAnswer } from "./ChatAnswer";
import { ChatNameForm } from "./ChatNameForm";
import { ChatBirthForm } from "./ChatBirthForm";
import { ChatContactForm } from "./ChatContactForm";
import { SendForm } from "./SendForm";

const setForm = (form = {}, newForm = {}) => {
  return {...form, ...newForm}
}

export const ChatBox = () => {
  const [fullForm, setFullForm] = useState({})
  const [fullName, setFullName ] = useState('')
  const [fullBirth, setFullBirth ] = useState('')
  const [fullContact, setFullContact ] = useState('')

  const onSendResponse = (e) => {
    const newForm = setForm(fullForm, e);
    setFullForm(newForm);
  }

  const onNameMessage = (e) => {
    setFullName(e);
  }

  const onBirthMessage = (e) => {
    setFullBirth(e);
  }

  const onContactMessage = (e) => {
    setFullContact(e);
  }

  return (
    <>
      <div id="live-chat">
        <header className="clearfix">
          <img className="icon" src={formIcon} alt="Icon" />
          <h3>Titulo de Forumulario</h3>

          <span className="chat-message-note">En menos de 5 minutos</span>
        </header>

        <div className="chat">
          <div className="chat-history">
                <ChatNameForm onSendResponse={onSendResponse} onMessage={onNameMessage}/>
                <ChatAnswer message={fullName}/>
                <ChatBirthForm onSendResponse={onSendResponse} onMessage={onBirthMessage}/>
                <ChatAnswer message={fullBirth}/>
                <ChatContactForm onSendResponse={onSendResponse} onMessage={onContactMessage}/>
                <ChatAnswer message={fullContact}/>
                <SendForm name={fullName} contact={fullContact} birth={fullBirth} input={fullForm}/>
          </div>
        </div>
      </div>
    </>
  );
};
