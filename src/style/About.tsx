import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from 'rasta-uikit/dist/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends PancakeTheme {}
}

const minWidth = 768

const AboutStyle = createGlobalStyle`
  body {
    .aboutPage{
      padding: 0px;
      max-width: unset;
      min-height: unset;
      >.header{
        background-size: cover;
        background-position: center !important;
        background-blend-mode: overlay;
        padding-top: 10rem;
        padding-bottom: 16rem;
      }
      >.main{
        >div:first-child{
          position: relative;
          left: 3%;
          margin-bottom: -50px;
          background: white;
          width: 94%;
          padding: 15px;
          border-radius: 10px;
          transform: translateY(-50%);
          @media only screen and (max-width: ${minWidth}px) {
            transform: unset;
            flex-direction: column;
            margin-top: 10px;
            margin-bottom: 50px;
          }
          box-shadow: 0 0 50px 0px rgba(0,0,0,0.2);
          >div:first-child{
            @media only screen and (max-width: ${minWidth}px) {
              flex-direction: column;
            }
            >span:nth-child(1){
              flex: 1;
            }
            >span:nth-child(2){
              flex: 1;
              border-right: 2px solid rgba(0,0,0,0.1);
              border-left: 2px solid rgba(0,0,0,0.1);
              @media only screen and (max-width: ${minWidth}px) {
                border: none;
                border-top: 2px solid rgba(0,0,0,0.1);
                border-bottom: 2px solid rgba(0,0,0,0.1);
              }
            }
            >span:nth-child(3){
              flex: 1;
            }
            >span{
              padding: 15px;
              font-size: 20px;
              @media only screen and (max-width: ${minWidth}px) {
                flex: 0 0 100%;
              }
              p{
                font-size: 50px;
                color: green;
              }
            }
          }
          a.action{
            margin-top: 40px;
          }
        }
        >div:nth-child(2){
        }
        >div:nth-child(3){
          margin-top: 150px;
          padding: 0px 20px;
          text-align: center;
          aligin-items: stretch;
          @media only screen and (max-width: ${minWidth}px) {
            flex-wrap: wrap;
            margin-top: 50px;
          }
          >div{
            margin: 0px 5px;
            background: white;
            padding-top: 30px;
            padding-bottom: 30px;
            border-radius: 10px;
            color: green;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-shadow: 0 0 10px 0px rgba(0,0,0,0.2);
            @media only screen and (max-width: ${minWidth}px) {
              margin-top: 20px;
              flex: 0 0 calc(50% - 10px);
            }
          }
        }
        >div:last-child{
          margin-top: -50px;
          margin-left: 3%;
          width: 94%;
          transform: translateY(50%);
          @media only screen and (max-width: ${minWidth}px) {
            margin-top: 100px;
            transform: unset;
            flex-direction: column;
          }
          >div>div{
            padding: 80px 50px;
            @media only screen and (max-width: ${minWidth}px) {
              padding: 20px;
            }
          }
        }
      }
      >.bottom{
        background-size: cover;
        padding-top: 25rem;
        padding-bottom: 15rem;
        @media only screen and (max-width: ${minWidth}px) {
          padding: 10px;
        }
        >div{
          margin-left: 3%;
          width: 94%;
          padding: 50px;
          @media only screen and (max-width: ${minWidth}px) {
            flex-direction: column;
            text-align: center;
            padding: 10px;
          }
          >div{
            @media only screen and (max-width: ${minWidth}px) {
              padding: 10px;
              *{
                margin-left: 0px !important;
                margin-right: 0px !important;
              }
            }
            .alert{
              padding: 0px 30px;
              border-left: 4px solid green;
              @media only screen and (max-width: ${minWidth}px) {
                padding: 0px;
                border-left: none;
              }
            }
            .links{
              button{
                background: transparent;
                padding: 10px;
                border: 2px solid gray;
                color: gray;
              }
            }
            .action, .links{
              button:hover {
                background: linear-gradient(90deg, green, yellow) !important;
                color: white !important;
                border-color: white !important;
              }
            }
            .action{
              @media only screen and (max-width: ${minWidth}px) {
                display: flex;
                flex-direction: column;
                button{
                  margin: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
`

export default AboutStyle
