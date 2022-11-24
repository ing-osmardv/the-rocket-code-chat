import { useEffect } from "react";
import { useChatForm } from "../hooks/useChatForm";
import { MessageImg } from "./MessageImg";

const initialForm = {
  firstName: "",
  secondName: "",
  lastName: "",
  motherLastName: "",
};

const formValidations = (form) => {
  let findErrors = {};

  if (!form.firstName.trim()) {
    findErrors.firstName = "Este campo es requerido";
  }

  if (!form.lastName.trim()) {
    findErrors.lastName = "Este campo es requerido";
  }
  const hasErrors = !Object.keys(findErrors).length;
  return {findErrors, hasErrors};
};

export const ChatNameForm = ({onSendResponse, onMessage}) => {
  const { formState, errors, valid, onInputChange, onInputBlur } = useChatForm(
    initialForm,
    formValidations,
  );
  const { firstName, secondName, lastName, motherLastName } = formState;

  useEffect(() => {
    if(valid){
        onSendResponse(formState);
        onMessage(`Nombre: ${firstName} ${secondName} ${lastName} ${motherLastName}`);
    }else{
        onMessage('');
    }
  }, [formState])
    
  return (
    <>
      <div className="chat-message clearfix">
        <MessageImg />

        <div className="chat-message-content clearfix">
          <h3>¿Cual es tu nombre?</h3>
          <form>
            <input
              type="text"
              placeholder="Primer Nombre"
              name="firstName"
              value={firstName}
              onChange={onInputChange}
              onBlur={onInputBlur}
            />
            {errors.firstName && (
              <small className="error">{errors.firstName}</small>
            )}

            <input
              type="text"
              placeholder="Segundo Nombre"
              name="secondName"
              value={secondName}
              onChange={onInputChange}
              onBlur={onInputBlur}
            />
            {errors.secondName && (
              <small className="error">{errors.secondName}</small>
            )}

            <input
              type="text"
              placeholder="Apellido Paterno"
              name="lastName"
              value={lastName}
              onChange={onInputChange}
              onBlur={onInputBlur}
            />
            {errors.lastName && (
              <small className="error">{errors.lastName}</small>
            )}

            <input
              type="text"
              placeholder="Apellido Materno"
              name="motherLastName"
              value={motherLastName}
              onChange={onInputChange}
              onBlur={onInputBlur}
            />
            {errors.motherLastName && (
              <small className="error">{errors.motherLastName}</small>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
