import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from 'rasta-uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const minWidth = 768

const FarmsStyle = createGlobalStyle`
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
    .farmsPage {
      padding: 0px;
      max-width: unset;
      min-height: unset;
      >div:first-child{
      }
      >div:nth-child(2){
        padding: 30px;
        .styled-toggle-button{
          text-transform: uppercase;
          width: min-content;
          border: none;
          border-radius: 34px;
          padding: 0px;
          overflow: hidden;
          align-self: end;
          margin: 0px 100px;
          @media only screen and (max-width: ${minWidth}px) {
            align-self: center;
            margin: unset;
          }
          >span{
            position: relative;
            width: 200%;
            display: block;
            font-size: 17px;
            color: white;
            transition: 200ms;
            >span{
              position: absolute;
              top: 50%;
              right: calc(10px + 50%);
              background: white;
              width: 20px;
              height: 20px;
              border-radius: 100%;
              display: inline-block;
              transform: translateY(-50%);
            }
          }
          >span::before{
            content: attr(data-yes);
            background: lime;
            width: 50%;
            display: inline-block;
            text-align: left;
            padding: 5px 10px;
            color: white;
          }
          >span::after{
            content: attr(data-no);
            background: gray;
            width: 50%;
            display: inline-block;
            padding: 5px 15px;
            color: white;
          }
        }
        .styled-toggle-button.no{
          >span{
            transform: translateX(-50%);
          }
        }
      }
      >div:last-child{
        >div{
          padding: 20px 100px;
          @media only screen and (max-width: 1024px) {
            padding: 50px;
          }
          @media only screen and (max-width: ${minWidth}px) {
            padding: 20px;
          }
          .row{
            .col{
              flex: 0 0 calc(100% / 3);
              @media only screen and (max-width: 1024px) {
                flex: 0 0 calc(100% / 2);
              }
              @media only screen and (max-width: ${minWidth}px) {
                flex: 0 0 100%;
              }
              padding: 10px;
              >div{
                padding: 30px;
                >div:last-child{
                  margin-top: 20px;
                  >div{
                    margin: 5px 0px;
                  }
                }
                hr{
                  margin: 30px auto;
                  width: 100%;
                  border: 1px solid gray;
                  display: block;
                }
              }
            }
          }
        }
      }
    }
  }
`

export default FarmsStyle
