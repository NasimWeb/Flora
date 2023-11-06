import React, { useEffect } from "react";
import { useReducer } from "react";
import './Input.css'
import { Validator } from "../vaidationRules/Validator";


export default function Inputs(props) {

    const inputReducer = (state, action) => {
   
        switch (action.type) {
          case "CHANGE": {
            return {
              value: action.value,
              isValid: Validator(action.value , action.validations) 
            };
          }
        }
        
      };
    

  const [inputHandler, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

 const {value , isValid} = inputHandler

  useEffect(()=> {
    props.OnInputHandler(value,props.id,isValid)
  },[value])


  const element = props.element === 'input' ? (
    <input
    type={props.type}
    className={`${props.className} ${inputHandler.isValid === true ? 'sucsses' : 'error'}`}
    id={props.id}
    placeholder={props.placeholder}
    value={inputHandler.value}
    onChange={(e) =>
      dispatch({ type: "CHANGE", value: e.target.value, isValid: true , validations: props.allValidations })
    }
  />
  ) : (
    <textarea 
    type={props.type}
    className={props.className}
    id={props.id}
    placeholder={props.placeholder}
    value={inputHandler.value}
    onChange={(e) =>
      dispatch({ type: "CHANGE", value: e.target.value, isValid: true , validations: props.allValidations })
    }
    ></textarea>
  )
 
  return (
    <div>
       {element}
    </div>
  );
}
