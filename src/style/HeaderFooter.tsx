import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from 'rasta-uikit/dist/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends PancakeTheme {}
}

const minWidth = 768

const HeaderFooter = createGlobalStyle`
  body {
    .headerElement{
      @media only screen and (max-width: ${minWidth}px) {
        text-align: center;
      }
      background-color: black;
      border-bottom: 1px solid gray;
      padding: 0px;
      max-width: unset;
      min-height: unset;
    }
    .footerElement {
      max-width: unset;
      min-height: unset;
      background-color: black;
      padding: 50px 100px;
      *{
        @media only screen and (max-width: ${minWidth}px) {
          text-align: center;
          margin-right: auto !important;
          margin-left: auto !important;
        }
      }
      div{
        @media only screen and (max-width: ${minWidth}px) {
          flex-direction: column;
          margin-right: auto !important;
          margin-left: auto !important;
        }
        .Links{
          @media only screen and (max-width: ${minWidth}px) {
            margin-top: 20px;
          }
          >button{
            padding: 0.5rem;
            display: inline-flex;
            svg{
              width: 16px;
              height: 16px;
            }
          }
          >button:hover{
            background: yellow !important;
            color: green !important;
          }
        }
      }
    }
  }
`

export default HeaderFooter
