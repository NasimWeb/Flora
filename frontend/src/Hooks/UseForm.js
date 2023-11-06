import { useReducer } from "react";

export default function UseForm(iniInputs, initFormIsValid) {
  const formReducer = (state, action) => {
    let isFormValid = true;
    switch (action.type) {
      case "CHANGE_INPUT": {
        for (const inputId in state.inputs) {
          if (inputId === action.id) {
            isFormValid = action.isValid;
          } else {
            isFormValid = state.inputs[inputId].isValid;
          }
        }

        return {
          inputs: {
            ...state.inputs,
            [action.id]: {
              value: action.value,
              isValid: action.isValid,
            },
          },
          isFormValid: isFormValid,
        };
      }

      default: {
        return state;
      }
    }
  };

  const [formState, dispatch] = useReducer(formReducer, {
    inputs: iniInputs,
    isFormValid: initFormIsValid,
  });

  const OnInputHandler = (value, id, isValid) => {
    dispatch({
      type: "CHANGE_INPUT",
      value,
      isValid,
      id,
    });
  };

  return [formState, OnInputHandler];
}
