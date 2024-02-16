import React, { useState } from "react";
import { useSharedThemeState } from "../../contexts/ThemeContext";
import emoji from "react-easy-emoji";

export function Theme(props) {
    const { theme, toggleTheme } = useSharedThemeState();
    const [isChecked, setChecked] = useState(theme === "dark" ? true : false);

    return (

        <label className="relative inline-block w-[50px] h-[27px] ml-20">
            <input
                className="peer/input transform scale-50"
                type="checkbox"
                checked={isChecked}
                onChange={() => {
                    toggleTheme();
                    setChecked(!isChecked);
                }}
            />
            <span className="before:transition-all before:duration-300 before:ease-in-out peer-checked/input:before:transform peer-checked/input:before:translate-x-[26px] peer-checked/input:bg-blue before:rounded-full before:grid before:place-items-center before:absolute before:absolute before:h-[26px] before:w-[28px] before:left-0 before-bottom-0 before:bg-white before-transition rounded-full flex items-center absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition duration-400">
                <span className={`${isChecked ? 'transform translate-x-[26px]' : ''} z-10 flex items-center transition-all duration-300 ease-in-out`}>{isChecked ? emoji("🌜") : emoji("☀️")}</span>
            </span>
        </label>
    )
}
