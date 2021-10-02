import React, { useEffect, useCallback, useState, useMemo } from 'react'
import Page from 'components/layout/Page'

import ContactStyle from 'style/ContactStyle'
import headerImg from '../../assets/images/lion-mr-rasta.jpg'
import { BinanceIcon } from 'rasta-uikit'
import Icons from 'style/Icons'

const Contact: React.FC = () => {
  const [mainActive, SETmainActive] = useState(false)
  return (
    <Page className="contactPage text-center">
      <ContactStyle />
      <div className="header d-flex flex-column" style={{ paddingTop: '14rem', paddingBottom: '20rem' }}>
        <span className="text-white text-5xl">Contact Us</span>
        <span className="text-white" style={{ marginTop: '20px' }}>
          Feel free to contact us any time
          <br />
          Let’s make some magic together!
        </span>
      </div>
      <div className="main bg-white p-3">
        <div className="d-flex bg-white" style={{ marginTop: '-14rem' }}>
          <div className="flex-12-7 d-flex flex-column justify-content-around align-items-center">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Message" />
            <button className="btn btn-md bg-style1 br-none bl-none text-white px-3" style={{ width: '30%' }}>
              SEND IT
            </button>
          </div>
          <div
            className="flex-12-5 d-flex flex-column justify-content-around align-items-start text-white"
            style={{ padding: '50px' }}
          >
            <h2>Contact Info</h2>
            <div>
              <h2 style={{ display: 'inline-block', marginRight: '10px' }}>
                <Icons.MobileIcon />
              </h2>
              <h3 style={{ display: 'inline-block' }}>00-0000-000</h3>
            </div>
            <div>
              <h2 style={{ display: 'inline-block', marginRight: '10px' }}>
                <Icons.MailIcon />
              </h2>
              <h3 style={{ display: 'inline-block' }}>Ioremipsum@rasta.finance</h3>
            </div>
            <div>
              <button className="btn btn-sm btn-outline-white rounded-circle d-inline-flex" style={{ padding: '10px' }}>
                <Icons.TwitterIcon />
              </button>
              <button className="btn btn-sm btn-outline-white rounded-circle d-inline-flex" style={{ padding: '10px' }}>
                <Icons.PlaneIcon />
              </button>
              <button className="btn btn-sm btn-outline-white rounded-circle d-inline-flex" style={{ padding: '10px' }}>
                <Icons.TiktokIcon />
              </button>
              <button className="btn btn-sm btn-outline-white rounded-circle d-inline-flex" style={{ padding: '10px' }}>
                <Icons.MidIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Contact
