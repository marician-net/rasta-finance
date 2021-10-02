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
    .flex-wrap{
      flex-wrap: wrap;
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
    .align-self-stretch{
      align-self: stretch;
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
    .text-5xl {
      font-size: 3rem;
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
    .text-dred{
      color: #b10202;
    }
    .text-orange{
      color: orange;
    }
    .text-gray{
      color: gray;
    }
    .text-center{
      text-align: center;
    }
    .text-left{
      text-align: left;
    }
    .text-right{
      text-align: right;
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
    .bg-dark{
      background: black;
    }
    .border-solid{
      border-style: solid;
    }
    .border-2{
      border-width: 2px;
    }
    .border-dyellow{
      border-color: #f0b90b;
    }
    .border-radius-1{
      border-radius: 10px;
    }
    .br-none{
      border-right: none !important;
    }
    .bl-none{
      border-left: none !important;
    }

    .rounded-max{
      border-radius: 10000px;
    }
    .rounded-circle{
      border-radius: 100% !important;
    }

    .p-1{
      padding: 10px;
    }
    .p-2{
      padding: 20px;
    }
    .p-3{
      padding: 30px;
    }
    .p-4{
      padding: 40px;
    }
    .p-5{
      padding: 50px;
    }
    .pl-1{
      padding-left: 10px;
    }
    .pl-2{
      padding-left: 20px;
    }
    .pl-3{
      padding-left: 30px;
    }
    .pl-4{
      padding-left: 40px;
    }
    .pl-5{
      padding-left: 50px;
    }
    .pr-1{
      padding-right: 10px;
    }
    .pr-2{
      padding-right: 20px;
    }
    .pr-3{
      padding-right: 30px;
    }
    .pr-4{
      padding-right: 40px;
    }
    .pr-5{
      padding-right: 50px;
    }
    .px-1{
      padding-right: 10px;
      padding-left: 10px;
    }
    .px-2{
      padding-right: 20px;
      padding-left: 20px;
    }
    .px-3{
      padding-right: 30px;
      padding-left: 30px;
    }
    .px-4{
      padding-right: 40px;
      padding-left: 40px;
    }
    .px-5{
      padding-right: 50px;
      padding-left: 50px;
    }
    .py-1{
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .py-2{
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .py-3{
      padding-top: 30px;
      padding-bottom: 30px;
    }
    .py-4{
      padding-top: 40px;
      padding-bottom: 40px;
    }
    .py-5{
      padding-top: 50px;
      padding-bottom: 50px;
    }

    .cursor-pointer{
      cursor: pointer;
    }

    .shadow-md{
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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
    .btn-outline-white{
      background: transparent;
      border-color: white !important;
      color: white;
    }
    .btn.btn-outline-green{
      background: transparent;
      border-color: green !important;
    }
    .btn-outline-dyellow{
      background: transparent;
      border-color: #f0b90b !important;
    }
  }
`

export default GlobalStyle
