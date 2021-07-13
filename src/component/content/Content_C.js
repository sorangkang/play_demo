import React from 'react'
import ResponsiveAreaBump from './ResponsiveAreaBump'
function Content_C() {
    const data = [
        {
          "id": "제록스 복합기",
          "data": [
            {
              "x": 2015,
              "y": 20
            },
            {
              "x": 2016,
              "y": 17
            },
            {
              "x": 2017,
              "y": 16
            },
            {
              "x": 2018,
              "y": 15
            },
            {
              "x": 2019,
              "y": 24
            },
            {
              "x": 2020,
              "y": 20
            }
          ]
        },
        {
          "id": "캐논 스마트 큐브",
          "data": [
            {
              "x": 2015,
              "y": 16
            },
            {
              "x": 2016,
              "y": 16
            },
            {
              "x": 2017,
              "y": 19
            },
            {
              "x": 2018,
              "y": 21
            },
            {
              "x": 2019,
              "y": 27
            },
            {
              "x": 2020,
              "y": 11
            }
          ]
        },
        {
          "id": "삼성 복합기",
          "data": [
            {
              "x": 2015,
              "y": 29
            },
            {
              "x": 2016,
              "y": 23
            },
            {
              "x": 2017,
              "y": 30
            },
            {
              "x": 2018,
              "y": 27
            },
            {
              "x": 2019,
              "y": 24
            },
            {
              "x": 2020,
              "y": 28
            }
          ]
        },
        {
          "id": "HP 포토 스마트 복합기",
          "data": [
            {
              "x": 2015,
              "y": 28
            },
            {
              "x": 2016,
              "y": 16
            },
            {
              "x": 2017,
              "y": 22
            },
            {
              "x": 2018,
              "y": 30
            },
            {
              "x": 2019,
              "y": 13
            },
            {
              "x": 2020,
              "y": 14
            }
          ]
        },
        {
          "id": "앱속 무한복합기",
          "data": [
            {
              "x": 2015,
              "y": 17
            },
            {
              "x": 2016,
              "y": 18
            },
            {
              "x": 2017,
              "y": 18
            },
            {
              "x": 2018,
              "y": 10
            },
            {
              "x": 2019,
              "y": 24
            },
            {
              "x": 2020,
              "y": 11
            }
          ]
        }
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
                무인 결제 (복합기) 분야의 Keystone Firms에 대한 HiVro 플랫폼에서의 점유율/선호도를 분석합니다.
            </h1>
            <div style={{
                    padding : '10px',
                    margin : '10px',
                    height : '470px',
                    width : '100%',
                    display : 'flex'
                }}>
                <ResponsiveAreaBump data={data}/>
            </div>
        </div>
    )
}

export default Content_C


