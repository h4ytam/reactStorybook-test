import React from 'react'

export const Button = ({backgroundColor,label,onClick}) => {
    return (
        <div>
            <button style={{backgroundColor:backgroundColor}}
            onClick={onClick}
            size="medium"
            >{label}</button>
        </div>
    )
}

