import React, { useEffect } from "react";
import { useChatForm } from "../hooks/useChatForm";
import { MessageImg } from "./MessageImg";
import { validEmail, validPhoneNumber } from "../helpers/validations";

const initialForm = {
  email: "",
  phoneNumber: "",
};

const formValidations = (form) => {
  let findErrors = {};

  if (!form.email.trim()) {
    findErrors.email = "Este campo es requerido";
  }

  if (form.email.trim() && !validEmail(form.email)) {
    findErrors.email = "Ingrese un email valido";
  }

  if (!form.phoneNumber.trim()) {
    findErrors.phoneNumber = "Este campo es requerido";
  }

  if (form.phoneNumber.trim() && !validPhoneNumber(form.phoneNumber)) {
    findErrors.phoneNumber = "Ingrese un numero telefonico valido";
  }

  const hasErrors = !Object.keys(findErrors).length;
  return { findErrors, hasErrors };
};

export const ChatContactForm = ({ onSendResponse, onMessage }) => {
  const { formState, errors, valid, onInputChange, onInputBlur } = useChatForm(
    initialForm,
    formValidations
  );
  const { email, phoneNumber } = formState;

  useEffect(() => {
    if (valid) {
      onSendResponse(formState);
      onMessage(
        `Correo Electronico: ${email}\nTelefono: ${phoneNumber}`
      );
    } else {
      onMessage('');
    }
  }, [formState]);

  return (
    <>
      <div className="chat-message clearfix">
        <MessageImg />

        <div className="chat-message-content clearfix">
          <h3>Datos de Contacto</h3>
          <form>
            <input
              type="text"
              placeholder="Correo Electronico"
              name="email"
              value={email}
              onChange={onInputChange}
              onBlur={onInputBlur}
            />
            {errors.email && <small className="error">{errors.email}</small>}

            <input
              type="text"
              placeholder="Numero de Telefono"
              name="phoneNumber"
              value={phoneNumber}
              onChange={onInputChange}
              onBlur={onInputBlur}
            />
            {errors.phoneNumber && (
              <small className="error">{errors.phoneNumber}</small>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
