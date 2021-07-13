import React from 'react'
import MultipleSelect from '../common/MultipleSelect'

function Header_B() {
    return (
        <>
            <div style={{
                padding : '10px',
                margin : '10px',
                fontSize : '18px',
                width : '160px'
            }}>
                Biz Domain
            </div>
            <MultipleSelect></MultipleSelect>
            <div style={{
                padding : '10px',
                margin : '10px',
                width : '1200px',
                color : 'white',
                marginRight : 'auto',
                fontSize : '18px',
                textAlign : 'right'
            }}>
                Now You are looking for the 무인매장 business for B2C Area..
            </div>
        </>
    )
}

export default Header_B


