import React from 'react'

function WrapperContent(props) {
    const style = {
        border : '3px solid gray',
        borderRadius : '15px',
        padding : '30px',
        margin : '10px',
        backgroundColor : 'white'
    }
    return (
        <>  
            <h1 style={{
                padding : '0px',
                marginLeft : '10px',
                backgroundColor : 'white',
                color : 'gray',
                fontStyle : 'italic',
                fontSize : '20px',
                textAlign : 'left'
            }}>{props.title}</h1>
            <div style={style}>
                {props.children}
            </div>
        </>
    )
}


export default WrapperContent