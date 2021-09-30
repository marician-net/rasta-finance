import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from 'rasta-uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    h1,h2,h3,h4,h5{
      font-size: revert !important;
      font-weight: normal !important;
    }
    img {
      height: auto;
      max-width: 100%;
    }
    .d-none{
      display: none;
    }
    .d-flex{
      display: flex;
    }
    .d-inline-flex{
      display: inline-flex;
    }
    .flex-column{
      flex-direction: column;
    }
    .flex-12-4{
      flex: 0 0 calc(100% / 12 * 4)
    }
    .flex-12-5{
      flex: 0 0 calc(100% / 12 * 5)
    }
    .flex-12-6{
      flex: 0 0 calc(100% / 12 * 6)
    }
    .flex-12-7{
      flex: 0 0 calc(100% / 12 * 7)
    }
    .flex-fill {
      flex: 1 1 auto;
    }
    .flex-grow-1 {
      flex-grow: 1;
    }
    .justify-content-center{
      justify-content: center;
    }
    .justify-content-around{
      justify-content: space-around;
    }
    .justify-content-between{
      justify-content: space-between;
    }
    .justify-content-stretch{
      justify-content: stretch;
    }
    .align-items-start{
      align-items: flex-start;
    }
    .align-items-center{
      align-items: center;
    }
    .align-items-end{
      align-items: flex-end;
    }
    .align-items-stretch{
      align-items: stretch;
    }
    .align-content-stretch{
      align-content: stretch;
    }
    .mx-auto{
      margin-left: auto;
      margin-right: auto;
    }
    .text-3rem {
      font-size: 3rem;
    }
    .text-2xl {
      font-size: 1.5rem;
    }
    .text-4xl {
      font-size: 2.25rem;
    }
    .text-yellow {
      color: yellow !important;
    }
    .text-white {
      color: white !important;
    }
    .text-green{
      color: green !important;
    }
    .text-dark{
      color: black;
    }
    .text-center{
      text-align: center;
    }
    .bg-style1{
      background: linear-gradient(90deg, yellow, green);
    }
    .bg-style2{
      background: linear-gradient(90deg, red, gold);
    }
    .bg-red{
      background: red;
    }
    .bg-white{
      background: white;
    }
    .br-none{
      border-right: none !important;
    }
    .bl-none{
      border-left: none !important;
    }
    .rounded-circle{
      border-radius: 100% !important;
    }
    .cursor-pointer{
      cursor: pointer;
    }
    
    .btn{
      cursor: pointer;
    }
    .btn.btn-lg {
      padding: 12px 36px;
      border-width: 2px;
      border-style: solid;
      border-radius: 15px;
      border-color: transparent;
      font-size: 16px;
    }
    .btn.btn-md {
      padding: 6px 18px;
      border-width: 2px;
      border-style: solid;
      border-radius: 15px;
      border-color: transparent;
      font-size: 16px;
    }
    .btn.btn-sm {
      padding: 3px 9px;
      border-width: 2px;
      border-style: solid;
      border-radius: 15px;
      border-color: transparent;
      font-size: 16px;
    }
    .btn.btn-outline-gold{
      background: transparent;
      border-color: gold !important;
      color: white;
    }
    .btn.btn-outline-green{
      background: transparent;
      border-color: green !important;
    }
  }
`

export default GlobalStyle
