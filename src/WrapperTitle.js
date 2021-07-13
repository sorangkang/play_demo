import React from 'react'

function WrapperTitle({children}) {
    const style = {
        display : 'flex',
        borderRadius : '15px',
        padding : '5px',
        margin : '10px',
        backgroundColor : 'lightgray'
    }
    return (
        <div style={style}>
            {children}
        </div>
    )
}


export default WrapperTitle