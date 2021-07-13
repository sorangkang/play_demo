import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
//import Dashboard from './dashboard/Dashboard'
import WrapperContent from './WrapperContent'
import WrapperTitle from './WrapperTitle'
import WrapperTitle_B from './WrapperTitle_B'
import WrapperFooter from './WrapperFooter'

import Header_A from './component/header/Header_A'
import Header_B from './component/header/Header_B'

import Content_A from './component/content/Content_A'
import Content_B from './component/content/Content_B'
import Content_C from './component/content/Content_C'
import Content_D from './component/content/Content_D'

import Content_Footer from './component/content/Content_Footer'

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
}));

  //ReactDOM.render(<Example />, document.getElementById("root"));

function MyRoot() {
    const classes = useStyles();
    const [page, setPage] = useState(0)
    const MINPAGE = 0
    const MAXPAGE = 3

    const onBack = () => {
        let newPage = page <= MINPAGE ? MINPAGE : page - 1    
        setPage(newPage)
    }

    const onMore = () => {
        let newPage = page >= MAXPAGE ? MAXPAGE : page + 1      
        setPage(newPage)
    }

    function RenderContent(index) {
        switch(index) {
            case 0:
                return (
                <WrapperContent title='Business Map'>
                    <Content_A/>
                </WrapperContent>);
            case 1:
                return (
                <WrapperContent title='Business Ecosystem'>
                    <Content_B/>
                </WrapperContent>);
            case 2:
                return (
                <WrapperContent title='KeyStone Firms - 무인 결제(복합기)'>
                    <Content_C/>
                </WrapperContent>);
            case 3:
                return (
                <WrapperContent title='Product Analyis - 무인 결제(복합기) - 캐논 스마트 큐브'>
                    <Content_D/>
                </WrapperContent>);
            default:
                return (
                <WrapperContent>
                    <Content_A/>
                </WrapperContent>);
        }
    
    }

    function RenderBack() {
        if (page > MINPAGE) {
            return (
                <button style={{
                    fontSize : '20px',
                    padding : '12px',
                    marginLeft : '15px',
                    borderRadius : '15px',
                    backgroundColor : 'white'
                }} size="medium" onClick={onBack} >
                Back
                </button>
            )
        }
        else {
            return (
                <button style={{
                    fontSize : '20px',
                    padding : '12px',
                    borderRadius : '15px',
                    backgroundColor : 'white',
                    visibility:"hidden"

                }} size="medium" onClick={onBack} >
                Back
                </button>
            )
        }
    }

    function RenderMore() {
        if (page < MAXPAGE) {
            return (
                <button style={{
                    fontSize : '20px',
                    padding : '12px',
                    marginRight : '15px',
                    borderRadius : '15px',
                    backgroundColor : 'white'
                }} color="primary" size="medium" onClick={onMore} >
                Next
                </button>
            )
        }
        else {
            return (
                <button style={{
                    fontSize : '20px',
                    padding : '12px',
                    marginRight : '15px',
                    borderRadius : '15px',
                    backgroundColor : 'white',
                    visibility:"hidden" 
                }} color="primary" size="medium" onClick={onMore} >
                Next
                </button>
            )
        }
    }
    return (
        <>
            <WrapperTitle>
                <Header_A/>
            </WrapperTitle>
            
            <WrapperTitle_B>
                <Header_B/>
            </WrapperTitle_B>

            {
                RenderContent(page)
            }
    
            <WrapperFooter>
                {
                    RenderBack()
                }
                {
                    RenderMore()
                }
            </WrapperFooter>
        </>
    )
      
}

export default MyRoot