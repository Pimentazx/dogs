import React from "react";
import styles from "./Button.module.css";
import { Children } from "react";

    const Button = ({ children, ...props }) => {
        return (
            <button className={styles.button} {...props}>
                {children}
            </button>
        );
    }

export default Button;