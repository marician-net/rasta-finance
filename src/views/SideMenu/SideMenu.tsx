import React from 'react'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'

import logoImg from '../../assets/images/logo.f2daa131.png'
import SideMenuStyle from 'style/SideMenu'
import Icons from '../../style/Icons'

interface Props {
  visible?: any
}

const SideMenu: React.FC<Props> = ({ visible }) => {
  const TranslateString = useI18n()
  const visibility = visible[0]
  const SETvisibility = visible[1]
  return (
    <Page className={'sideMenu d-flex flex-column align-content-stretch ' + (!visibility ? '' : 'showSideMenu')}>
      <SideMenuStyle />
      <div className="d-flex">
        <a
          className="closeBtn d-flex cursor-pointer"
          style={{ background: 'transparent', border: 'none', padding: '0px', fontSize: '30px', color: 'white' }}
          onClick={() => {
            SETvisibility(false)
          }}
        >
          <Icons.TimesIcon />
        </a>
      </div>
      <a>
        <span>
          <Icons.HomeIcon />
          Home
        </span>
      </a>
      <a href="/about">
        <span>
          <Icons.AboutIcon />
          About
        </span>
      </a>
      <a>
        <span>
          <Icons.TradeIcon />
          Trade
        </span>
      </a>
      <a>
        <span>
          <Icons.RasinoIcon />
          Rasino
        </span>

        <Icons.RightIcon />
      </a>
      <a>
        <span>
          <Icons.FarmIcon />
          Farms
        </span>

        <Icons.RightIcon />
      </a>
      <span>Mr. Rasta</span>
      <span>Mrs. Rasta</span>
      <a>
        <span>
          <Icons.PoolIcon />
          Pools
        </span>

        <Icons.RightIcon />
      </a>
      <span>Mr. Rasta</span>
      <span>Mrs. Rasta</span>
      <a>
        <span>
          <Icons.StarIcon />
          Top Launch Pad
        </span>
      </a>
      <a>
        <span>
          <Icons.CommentIcon />
          Community
        </span>

        <Icons.RightIcon />
      </a>
      <span>Telegram</span>
      <span>Coin Market Cap</span>
      <span>Whitepaper</span>
      <span>Medium</span>
      <span>Dapp</span>
      <span>Radar</span>
      <span>Chart</span>
      <a>
        <span>
          <Icons.PhoneIcon />
          Contact
        </span>
      </a>
    </Page>
  )
}

export default SideMenu
