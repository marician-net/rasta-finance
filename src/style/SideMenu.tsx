import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from 'rasta-uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const minWidth = 768

const SideMenuStyle = createGlobalStyle`
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
    .sideMenu {
      position: fixed;
      left: -100%;
      top: 0px;
      background: #231f20;
      width: 310px;
      height: 100%;
      padding: 20px 30px;
      overflow: auto;
      transition: 1s;
      z-index: 100;
      /* @media only screen and (max-width: ${minWidth}px) {
      } */
      >a{
        margin-top: 10px;
        background: transparent;
        border: none;
        display: flex;
        color: white;
        font-size: 25px;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        span{
          display: flex;
          align-items: center;
          svg{
            margin-right: 10px;
          }
        }
      }
      .closeBtn{
        margin-left: auto;
      }
      >span{
        margin-left: 30px;
        color: white;
      }
    }
    .sideMenu.showSideMenu {
      left: 0px;
    }
  }
`

export default SideMenuStyle
