import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from 'rasta-uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const minWidth = 768

const IndexStyle = createGlobalStyle`
  * {
    /* font-family: 'Kanit', sans-serif; */
    line-height: initial;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    img {
      height: auto;
      max-width: 100%;
    }
    .homePage {
      padding: 0px;
      max-width: unset;
      .header {
        background: linear-gradient(black 50%, #bd011a);
        width: 100%;
        padding: 0px;
        padding-top: 50px;
        padding-bottom: 50px;
        >div:first-child{
          >div:first-child{
            margin-bottom: 50px;
            padding: 20px;
            flex: 0 0 60%;
            @media only screen and (max-width: ${minWidth}px) {
              flex: 0 0 100%;
              text-align: center;
            }
            .title {
              width: 50%;
              @media only screen and (max-width: ${minWidth}px) {
              width: 100%;
            }
            }
            .content {
              margin-top: 30px;
              font-size: 16px
            }
            .action {
              margin-top: 30px;
              button {
                width: 30%;
              }
              button:first-child{
              }
              button:last-child{
                margin-left: 30px;
              }
            }
          }
          >div:last-child {
            @media only screen and (max-width: ${minWidth}px) {
              display: none;
            }
            flex: 0 0 40%;
            img {
              width: 100%;
            }
          }
        }
        >div:last-child{
          margin-top: 50px;
          padding: 10px 10px;
          display: flex;
          @media only screen and (max-width: ${minWidth}px) {
            display: none;
          }
          div{
            margin: 10px;
            background: #bd011a;
            padding: 30px;
            border-radius: 20px;
            color: white;
            text-align: center;
            flex: 0 0 calc(25% - 20px);
            span:first-child{
              font-size: 30px;
            }
            span:last-child{
              font-size: 16px;
            }
          }
        }
      }
      .community {
        >div:first-child{
          @media only screen and (max-width: ${minWidth}px) {
            display: none;
          }
        }
        >div:last-child{
          @media only screen and (max-width: ${minWidth}px) {
            text-align: center;
            flex: 0 0 100%;
          }
          .title {
            margin: 15px;
          }
          .content {
            margin: 15px;
            max-width: 250px;
            @media only screen and (max-width: ${minWidth}px) {
              max-width: unset;
            }
          }
          .action {
            margin: 15px;
            button {
              width: 30%;
            }
            button:last-child {
              margin-left: 30px;
            }
          }
        }
      }
      .launchpad {
        @media only screen and (max-width: ${minWidth}px) {
          text-align: center;
        }
      }
      .request {
        @media only screen and (max-width: ${minWidth}px) {
          flex-direction: column;
          text-align: center;
        }
        button{
          @media only screen and (max-width: ${minWidth}px) {
            margin-top: 20px;
          }
        }
      }
    }
  }
`

export default IndexStyle
