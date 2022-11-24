import { useEffect } from "react";
import { useChatForm } from "../hooks/useChatForm";
import { MessageImg } from "./MessageImg";

const initialForm = {
  day: "",
  month: "",
  year: "",
};

const formValidations = (form) => {
  let findErrors = {};
  const validMonths = [
    "enero",
    "febrero",
    "marzo",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  if (!form.day) {
    findErrors.day = "Este campo es requerido";
  }

  if (form.day && form.day < 1 || form.day > 31) {
    findErrors.day = "Ingrese un valor entre 1 - 31";
  }

  if (!form.month) {
    findErrors.month = "Este campo es requerido";
  }

  if (form.month && !validMonths.includes(form.month.toLowerCase())) {
    findErrors.month = "Escriba un mes valido";
  }

  if (!form.year) {
    findErrors.year = "Este campo es requerido";
  }

  if (form.year && form.year > 2022 || form.year < 1900) {
    findErrors.year = "Ingrese un año valido";
  }

  const hasErrors = !Object.keys(findErrors).length;
  return { findErrors, hasErrors };
};

export const ChatBirthForm = ({ onSendResponse, onMessage }) => {
  const { formState, errors, valid, onInputChange, onInputBlur } = useChatForm(
    initialForm,
    formValidations
  );
  const { day, month, year } = formState;
  
  useEffect(() => {
    if(valid){
        onSendResponse(formState);
        onMessage(`Fecha de Nacimiento: ${day}/${month}/${year}`);
    }else{
        onMessage('');
    }
  }, [formState]);

  return (
    <>
      <div className="chat-message clearfix">
        <MessageImg />

        <div className="chat-message-content clearfix">
          <h3>¿Cual es tu fecha de nacimiento?</h3>
          <form>
            <input
              type="number"
              placeholder="Dia"
              name="day"
              value={day}
              onChange={onInputChange}
              onBlur={onInputBlur}
            />
            {errors.day && <small className="error">{errors.day}</small>}

            <input
              type="text"
              placeholder="Mes"
              name="month"
              value={month}
              onChange={onInputChange}
              onBlur={onInputBlur}
            />
            {errors.month && <small className="error">{errors.month}</small>}

            <input
              type="number"
              placeholder="Año"
              name="year"
              value={year}
              onChange={onInputChange}
              onBlur={onInputBlur}
            />
            {errors.year && <small className="error">{errors.year}</small>}
          </form>
        </div>
      </div>
    </>
  );
};
