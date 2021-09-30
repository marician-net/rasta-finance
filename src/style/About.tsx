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
          box-shadow: 0 0 50px 0px rgba(0,0,0,0.2);
          >div:first-child{
            @media only screen and (max-width: ${minWidth}px) {
              flex-direction: column;
            }
            >span{
              padding: 15px;
              font-size: 20px;
              @media only screen and (max-width: ${minWidth}px) {
                flex: 0 0 100%;
                border: none;
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
      }
      >.bottom{
        background-size: cover;
        padding-top: 25rem;
        padding-bottom: 15rem;
        >div{
          margin-left: 3%;
          width: 94%;
          padding: 50px;
          @media only screen and (max-width: ${minWidth}px) {
            flex-direction: column;
            text-align: center;
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
        }
      }
    }
  }
`

export default AboutStyle
