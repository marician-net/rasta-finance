import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from 'rasta-uikit/dist/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends PancakeTheme {}
}

const minWidth = 768

const ContactStyle = createGlobalStyle`
  body {
    .contactPage{
      background-color: black;
      border-bottom: 1px solid gray;
      padding: 0px;
      max-width: unset;
      min-height: unset;
      @media only screen and (max-width: ${minWidth}px) {
        text-align: center;
      }
      .header{
        background: linear-gradient(black 50%, #bd011a);
      }
      .main{
        >div{
          width: 90%;
          margin-left: 5%;
          box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5);
          @media only screen and (max-width: ${minWidth}px) {
            flex-direction: column;
            >div:first-child{
              padding: 10px !important;
              button{
                width: 100% !important;
              }
              >div:last-child{
                background: rgba(35, 31, 32);
              }
            }
          }
          >div:first-child{
            padding: 50px;
            input{
              margin-top: 30px;
              margin-bottom: 30px;
              width: 80%;
              padding: 15px;
              border: none;
              border-bottom: 1px solid rgba(0,0,0,0.2);
              font-size: 17px;
            }
          }
          >div:last-child{
            background: rgba(35, 31, 32);
            @media only screen and (max-width: ${minWidth}px) {
              text-align: center;
            }
            >div{
              @media only screen and (max-width: ${minWidth}px) {
                width: 100%;
                text-align: center;
                >* {
                  word-wrap: break-word;
                }
              }
            }
            >div:last-child{
              @media only screen and (max-width: ${minWidth}px) {
                margin-top: 20px;
              }
              >button{
                margin-left: 10px;
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
`

export default ContactStyle
