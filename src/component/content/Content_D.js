import React from 'react'
//import cube from '../../resource/smartcube.png'
import ResponsiveBullet from './ResponsiveBullet'
function Content_D() {
    const data = [
        {
          "id": "Screen",
          "ranges": [
            0,
            6,
            15,
            30,
            89
          ],
          "measures": [
            57
          ],
          "markers": [
            2
          ]
        },
        {
          "id": "Power",
          "ranges": [
            0,
            1,
            19,
            25,
            32,
            73
          ],
          "measures": [
            57
          ],
          "markers": [
            1,3, 8, 17, 22, 45, 53
          ]
        },
        {
          "id": "Temp",
          "ranges": [
            0,
            18,
            230,
            216
          ],
          "measures": [
            184
          ],
          "markers": [
            6
          ]
        },
        {
          "id": "Tray",
          "ranges": [
            0,
            1,
            9,
            19,
            27
          ],
          "measures": [
            7
          ],
          "markers": [
            2, 5
          ]
        },
        {
          "id": "Door Open",
          "ranges": [
            0,
            2,
            17,
            385
          ],
          "measures": [
            291
          ],
          "markers": [
            1, 33, 52, 102, 132, 201
          ]
        }
      ]
    const cube = 'https://lgccteststav2.blob.core.windows.net/public/smartcube.png'
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
                무인 결제 (복합기) 분야의 Keystone Firm 중 캐논의 대표 모델인 스마트 큐브의 제품을 분석합니다.
            </h1>
            <div style={{
                display:'flex',
                height : '490px',
                width: '100%',
                padding : '10px'
                }}>
                <div>
                  <img
                      src={cube}
                      style={{
                        width : '80%',
                        margin : '10px',
                        align : 'center'
                      }}
                  />
                  <div style={{
                    padding : '0px',
                    marginLeft : '25px',
                    backgroundColor : 'white',
                    width : '100%',
                    fontSize : '17px',
                    textAlign : 'left'
                  }}>
                      복합기에 자주 발생하는 문제는 Screen, Power, Temp, Tray, Door Open 입니다.
                  </div>
                  <div style={{
                    padding : '0px',
                    marginLeft : '25px',
                    backgroundColor : 'white',
                    width : '100%',
                    fontSize : '17px',
                    textAlign : 'left'
                  }}>
                      그래프는 문제의 발생 주기(단위: 일)를 의미합니다.
                  </div>
                  <div style={{
                    padding : '0px',
                    marginLeft : '25px',
                    backgroundColor : 'white',
                    width : '100%',
                    fontSize : '17px',
                    textAlign : 'left'
                  }}>
                      평균 문제 발생 주기는 흰 색, 고객 불만이 접수되는 시점이 붉은 색으로 마크되어 있습니다.
                  </div>

                </div>
                <div style={{
                    margin : '0px',
                    width : '970px',
                    height: '490px'
                }}>
                    <ResponsiveBullet data={data}/>
                </div>
            </div>
            
        </div>
    )
}

export default Content_D


