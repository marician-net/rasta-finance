import React from 'react'
import { useState } from 'react'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'

import AboutStyle from 'style/About'
import Icons from '../../style/Icons'

import headerImg from '../../assets/images/aboutHero.jpg'
import mainBottomImg1 from '../../assets/images/senor-burdy.91417ee1.png'
import mainBottomImg2 from '../../assets/images/senor-evo.34aeb8b2.png'
import bottomImg from '../../assets/images/leaf-bg.jpg'
import { transform } from 'lodash'

const About: React.FC = () => {
  const TranslateString = useI18n()
  let readable
  let SETreadable
  ;[readable, SETreadable] = useState(false)
  return (
    <Page className="aboutPage d-flex flex-column align-content-stretch">
      <AboutStyle />
      <div className="header" style={{ background: 'url(' + headerImg + ')' }}>
        <div className="d-flex flex-column align-items-center">
          <span className="text-4xl text-white">About Us</span>
          <span className="text-white" style={{ marginTop: '10px' }}>
            We are a big team with an even bigger heart.
          </span>
          <button
            className="btn btn-md bg-style1 text-white br-none bl-none"
            style={{ paddingRight: '70px', paddingLeft: '70px', marginTop: '20px' }}
          >
            Read The Docs
          </button>
        </div>
      </div>
      <div className="main">
        <div className="d-flex flex-column text-center">
          <div className="d-flex justify-content-around">
            <span style={{ flex: '1', borderRight: '2px solid rgba(0,0,0,0.1)' }}>
              <p>
                <Icons.QuestionIcon />
              </p>
              What’s Rasta?
              <div style={{ marginTop: '10px', fontSize: '16px', display: readable ? '' : 'none' }}>
                The precious $RASTA token is the official Token of the RastaFinance eco-system. Through its
                decentralized exchange (DEX) and architecture, RastaFinance is putting the people's money, back into the
                people's hands
              </div>
            </span>
            <span style={{ flex: '1' }}>
              <p>
                <Icons.LinkIcon />
              </p>
              Connect Directly to Your Wallet
              <div style={{ marginTop: '10px', fontSize: '16px', display: readable ? '' : 'none' }}>
                The Rasta.Finance platform connects straight to your smart chain wallet, in order to ensure swift
                interaction with our DeFi protocols. Please find the guide on connecting your Binance Smart Chain (BSC)
                enabled wallet.
              </div>
            </span>
            <span style={{ flex: '1', borderLeft: '2px solid rgba(0,0,0,0.1)' }}>
              <p>
                <Icons.UsersIcon />
              </p>
              Join a Community that Cares
              <div style={{ marginTop: '10px', fontSize: '16px', display: readable ? '' : 'none' }}>
                Farming the $RASTA token involves staking your coins to provide liquidity for the RastaDEX. By a whole
                community doing this together, we grow the community and make it easier for new Rastas to join
              </div>
            </span>
          </div>
          <a className="action d-flex flex-column cursor-pointer" onClick={() => SETreadable(!readable)}>
            {!readable ? 'Read All More' : 'Close'}
            <i style={{ fontSize: '10px' }}>{!readable ? '▼' : '▲'}</i>
          </a>
        </div>
        <div className="text-center">
          What started as a dream, has caught on fire and spread without control. The vision of RastaFinance can no
          longer be caged, it has been decentralized and distributed to all corners of the world. <br />
          We value transparency, love, compassion and camaraderie above all else. We stand strong as ONE, as we are
          determined to re-gain the power of our own money, taking it back from the institutions and exploiters that
          have kept us apart. <br />
          So connect your browser-based wallet, and join the Decentralized REVOLUTION!
        </div>
        <div className="d-flex justify-content-around">
          <div>
            <span>Rasta</span>
            <span>Token</span>
          </div>
          <div>
            <span>MRasta</span>
            <span>Token</span>
          </div>
          <div>
            <span>Factory</span>
            <span>Address</span>
          </div>
          <div>
            <span>Router</span>
            <span>Address</span>
          </div>
          <div>
            <span>Bouyancy</span>
            <span>Fund Address</span>
          </div>
          <div>
            <span>Rasta</span>
            <span>Trust Fund</span>
            <span>Address</span>
          </div>
        </div>
        <div
          className="d-flex"
          style={{ position: 'relative', marginTop: '-50px', left: '3%', width: '94%', transform: 'translateY(50%)' }}
        >
          <div className="flex-12-4" style={{ padding: '10px' }}>
            <div className="text-center" style={{ background: 'white', padding: '80px 50px' }}>
              <img src={mainBottomImg1} alt="" />
              <h2>sdfsdfsdf</h2>
              <h3>sdfsdfsdf</h3>
            </div>
          </div>
          <div className="flex-12-4" style={{ padding: '10px' }}>
            <div className="text-center" style={{ background: 'white', padding: '80px 50px' }}>
              <img src={mainBottomImg2} alt="" />
              <h2>sdfsdfsdf</h2>
              <h3>sdfsdfsdf</h3>
            </div>
          </div>
          <div className="flex-12-4" style={{ padding: '10px' }}>
            <div className="text-center" style={{ background: 'white', padding: '80px 50px' }}>
              <img src={mainBottomImg2} alt="" />
              <h2>sdfsdfsdf</h2>
              <h3>sdfsdfsdf</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom" style={{ background: 'url(' + bottomImg + ')' }}>
        <div className="d-flex bg-white">
          <div className="flex-12-6 d-flex justify-content-center align-items-center">
            <div style={{ width: '200px', textAlign: 'left' }}>
              <h2>Rasta.Finance</h2>
              <br />
              <h3>
                <span className="text-green">
                  <Icons.CheckIcon />
                </span>
                Decentralized
              </h3>
              <h3>
                <span className="text-green">
                  <Icons.CheckIcon />
                </span>
                Community Driven
              </h3>
              <h3>
                <span className="text-green">
                  <Icons.CheckIcon />
                </span>
                For The People.
              </h3>
              <h3>
                <span className="text-green">
                  <Icons.CheckIcon />
                </span>
                By The People.
              </h3>
            </div>
          </div>
          <div className="flex-12-6" style={{ padding: '50px' }}>
            <h2 style={{ padding: '0px 30px', borderLeft: '4px solid green' }}>
              Let's connect and get <br /> to know each other
            </h2>
            <h3 style={{ marginLeft: '30px', marginTop: '20px' }}>
              Best way to get in touch with us is to join the Telegram community, our admins are from all over the world
              and we are ready to answer any questions you may have.
            </h3>
            <div className="action" style={{ marginLeft: '30px', marginTop: '20px' }}>
              <button className="btn btn-md btn-outline-green text-dark">Join Now</button>
              <button className="btn btn-md btn-outline-green text-dark" style={{ marginLeft: '30px' }}>
                Farm Rasta
              </button>
            </div>
            <div className="links" style={{ marginLeft: '30px', marginTop: '20px' }}>
              <button className="btn btn-sm rounded-circle d-inline-flex">
                <Icons.TwitterIcon />
              </button>
              <button className="btn btn-sm rounded-circle d-inline-flex" style={{ marginLeft: '20px' }}>
                <Icons.PlaneIcon />
              </button>
              <button className="btn btn-sm rounded-circle d-inline-flex" style={{ marginLeft: '20px' }}>
                <Icons.TiktokIcon />
              </button>
              <button className="btn btn-sm rounded-circle d-inline-flex" style={{ marginLeft: '20px' }}>
                <Icons.MidIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default About
