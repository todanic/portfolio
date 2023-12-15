import React from 'react'
import React, {useContext} from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export function Splash(props) {
    const {isDark} = useContext(StyleContext);

    return (
       <div className='flex'>
            <div>
                <h1></h1>
            </div>
       </div>
    )
}
