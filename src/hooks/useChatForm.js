import { useState } from "react";

export const useChatForm = (form, validations) => {
  const [formState, setFormState] = useState(form);
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(false);

  const onInputChange = ({target}) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value })
  }

  const onInputBlur = (e) => {
    onInputChange(e);
    const {findErrors, hasErrors} = validations(formState)
    setErrors(findErrors);
    setValid(hasErrors)
  }

  return {formState, errors, valid, onInputChange, onInputBlur}
}
