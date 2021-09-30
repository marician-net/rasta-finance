import React from 'react'
import { useHistory } from 'react-router'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'

import HeaderFooterStyle from 'style/HeaderFooter'

import logoImg from '../../assets/images/logo.f2daa131.png'

interface Props {
  sideMenuCtrl: any
}

const Header: React.FC<Props> = ({ sideMenuCtrl }) => {
  const TranslateString = useI18n()
  const history = useHistory()
  return (
    <Page className="headerElement d-flex justify-content-between align-items-center" style={{ padding: '0px 100px' }}>
      <HeaderFooterStyle />
      <button
        className="cursor-pointer"
        style={{ color: 'white', fontSize: '25px', background: 'transparent', border: 'none' }}
        onClick={() => sideMenuCtrl(true)}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
        </svg>
      </button>
      <img
        className="cursor-pointer"
        src={logoImg}
        alt=""
        style={{ width: '16rem' }}
        onClick={() => history.push('/')}
      />
      <button
        className="text-white cursor-pointer"
        style={{
          background: 'transparent',
          border: '1px solid lime',
          borderRadius: '10px',
          padding: '5px 40px',
          fontSize: '16px',
        }}
      >
        Connect
      </button>
    </Page>
  )
}

export default Header
