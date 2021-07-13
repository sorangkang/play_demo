import React from 'react'

function WrapperFooter({children}) {
    const style = {
        display : 'flex',
        justifyContent : 'space-between',
        borderRadius : '15px',
        padding : '0px',
        margin : '0px',
        backgroundColor : 'white'
    }
    return (
        <div style={style}>
            {children}
        </div>
    )
}


export default WrapperFooter