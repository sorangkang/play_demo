import React from 'react'
import MyResponsiveChord from './ResponsiveChord'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


function Content_B() {
    const classes = useStyles();
    const matrix = [
        [
          104,
          827,
          447,
          1168,
          12
        ],
        [
          56,
          35,
          495,
          826,
          144
        ],
        [
          730,
          70,
          27,
          27,
          93
        ],
        [
          363,
          421,
          289,
          1727,
          498
        ],
        [
          415,
          310,
          447,
          150,
          29
        ]
      ]
    return (
        <div style={{height:550}}>
            <h1 style={{
                padding : '0px',
                margin : '0px',
                backgroundColor : 'white',
                width : '100%',
                fontSize : '25px',
                textAlign : 'center'
            }}>
                무인매장 비즈니스 생태계에 필요한 솔루션/HW 영역을 두 가지 시각으로 분석합니다.
            </h1>
            <div style={{
                    padding : '0px',
                    margin : '1px',
                    height : '100%',
                    width : '100%',
                    display : 'flex'
                }}>
                <div style={{
                    padding : '10px',
                    margin : '10px',
                    height : '420px',
                    width : '50%'
                }}>
                    <h1 style={{
                        padding : '1px',
                        margin : '1px',
                        backgroundColor : 'white',
                        fontSize : '30px',
                        textAlign : 'left'
                    }}>Cyclic View</h1>
                    <p style={{
                        padding : '1px',
                        margin : '1px',
                        backgroundColor : 'white',
                        width : '100%',
                        fontSize : '15px',
                        textAlign : 'left'
                    }}>
                        HiVro 를 통해 Connect 하고 있는 영역을 확인 가능합니다.
                    </p>
                    <MyResponsiveChord matrix={matrix}></MyResponsiveChord>
                </div>
                <div style={{
                    padding : '10px',
                    margin : '10px',
                    height : '300px',
                    width : '50%'
                }}>
                    <h1 style={{
                        padding : '1px',
                        margin : '1px',
                        backgroundColor : 'white',
                        fontSize : '30px',
                        textAlign : 'left'
                    }}>Linear View</h1>
                    <p style={{
                        padding : '1px',
                        margin : '1px',
                        backgroundColor : 'white',
                        width : '100%',
                        fontSize : '15px',
                        textAlign : 'left'
                    }}>
                        영역 별 메인 솔루션/HW 분야를 확인 가능합니다.
                    </p>
                    <br></br><br></br><br></br>
                    <div style={{ fontSize : '20px', margin : '10px'}}>고객 식별</div>
                    <div style={{ display : 'flex'}}>
                        <div style={{ fontSize : '20px', margin : '10px'}}>무인 결제</div>
                        <Button style={{ marginLeft : '25px' }} variant="outlined" color="secondary">
                            복합기
                        </Button>
                        <Button style={{ marginLeft : '25px' }} variant="outlined" >
                            바코드 스캐닝
                        </Button>
                        <Button style={{ marginLeft : '25px' }} variant="outlined" >
                            이미지 스캐닝
                        </Button>
                    </div>
                    <div style={{ fontSize : '20px', margin : '10px'}}>관심사 분석</div>
                    <div style={{ fontSize : '20px', margin : '10px'}}>재고 관리</div>
                    <div style={{ fontSize : '20px', margin : '10px'}}>광고 배포</div>
                </div>
            </div>

        </div>
    )
}

export default Content_B


