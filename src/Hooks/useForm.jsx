import { number } from "prop-types";
import React from "react";


const types = {
    email: {
        regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
        message: "Preencha um email válido",
},
    password: {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        message: "A senha precisa conter 8 caracteres, sendo uma letra maiúscula, uma minúscula, um número e um caractere especial",
    },
    number: {
        regex: /^\d+$/,
        message: "Utilize apenas números",
    },

}


const UserForm = (type) => {

    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState(null);

    function validate(value) {
        if (type === false) return true;
        if (value.length === 0) {
            setError("Preencha um valor");
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
        
    }

    function onChange({target}) {
        if (error) validate(target.value);
        setValue(target.value);
    }

    return {
        value,
        setValue,
        onChange,
        validate: () => validate(value),
        onBlur: () => validate(value),
        error,
    };
};

export default UserForm;