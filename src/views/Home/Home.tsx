import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from 'rasta-uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import TwitterCard from 'views/Home/components/TwitterCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'
import CountDown from 'components/CountDown'

import IndexStyle from 'style/Index'

import headerImg from '../../assets/images/lion-coin.46eafaf2.png'
import communityImg from '../../assets/images/community-lion.d314860b.png'
import launchpadImg from '../../assets/images/favCreator-bg.jpg'

// const Hero = styled.div`
//   align-items: center;
//   background-image: url('/images/logo.svg');
//   background-repeat: no-repeat;
//   background-position: top center;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   margin: auto;
//   margin-bottom: 32px;
//   padding-top: 116px;
//   text-align: center;

//   ${({ theme }) => theme.mediaQueries.lg} {
//     background-image: url('/images/logo.svg'), url('/images/logo.svg');
//     background-position: left center, right center;
//     height: 165px;
//     padding-top: 0;
//   }
// `

// const Cards = styled(BaseLayout)`
//   align-items: stretch;
//   justify-content: stretch;
//   margin-bottom: 32px;

//   & > div {
//     grid-column: span 6;
//     width: 100%;
//   }

//   ${({ theme }) => theme.mediaQueries.sm} {
//     & > div {
//       grid-column: span 8;
//     }
//   }

//   ${({ theme }) => theme.mediaQueries.lg} {
//     & > div {
//       grid-column: span 6;
//     }
//   }
// `

// const ColumnCards = styled(BaseLayout)`
//   display: flex;
//   flex-direction: column;
//   align-items: stretch;
//   justify-content: stretch;
//   margin-bottom: 32px;

//   & > div {
//     grid-column: span 6;
//     width: 100%;
//   }

//   ${({ theme }) => theme.mediaQueries.sm} {
//     & > div {
//       grid-column: span 8;
//     }
//   }

//   ${({ theme }) => theme.mediaQueries.lg} {
//     & > div {
//       grid-column: span 6;
//     }
//   }
// `

// const CTACards = styled(BaseLayout)`
//   align-items: start;
//   margin-bottom: 32px;

//   & > div {
//     grid-column: span 6;
//   }

//   ${({ theme }) => theme.mediaQueries.sm} {
//     & > div {
//       grid-column: span 12;
//     }
//   }

//   ${({ theme }) => theme.mediaQueries.lg} {
//     & > div {
//       grid-column: span 6;
//     }
//   }
// `

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page className="homePage">
      <IndexStyle />
      <div className="header">
        <div className="d-flex align-items-end">
          <div className="flex-12-7">
            <p className="title text-3rem">
              <p className="text-yellow">Pride and Joy</p>
              <p className="text-white"> of the Binance Smart Chain</p>
            </p>
            <p className="content text-white">
              Join thousands of Rastas on a journey to ZION. RastaFinance is decentralizing finance, using the latest in
              blockchain technology. Seize the power of your own money, join the revolution.
            </p>
            <div className="action">
              <button className="btn btn-lg bg-style1 br-none bl-none text-white">Farm Rasta Now</button>
              <button className="btn btn-lg btn-outline-gold">Buy Rasta</button>
            </div>
          </div>
          <div className="flex-12-5">
            <img src={headerImg} alt="" />
          </div>
        </div>
        <div>
          <div>
            <span>123412</span>
            <br />
            <span>Counter</span>
          </div>
          <div>
            <span>123412</span>
            <br />
            <span>Holders</span>
          </div>
          <div>
            <span>123412</span>
            <br />
            <span>Transfers</span>
          </div>
          <div>
            <span>123412</span>
            <br />
            <span>Continents</span>
          </div>
        </div>
      </div>
      <div className="community d-flex" style={{ padding: '50px 0px' }}>
        <div className="flex-12-5 d-flex justify-content-center">
          <img src={communityImg} alt="" />
        </div>
        <div className="flex-12-7 d-flex flex-column justify-content-center">
          <span className="title">
            <span className="text-3rem">Join The Community </span>
            <br />
            <span className="text-3rem">That Cares</span>
          </span>
          <span className="content">
            Built by the very same people that make up this loving community. Powered by the People!
          </span>
          <div className="action">
            <button className="btn btn-lg bg-style1 br-none bl-none text-white">Whitepaper</button>
            <button className="btn btn-lg btn-outline-green text-green">Join TheCommunity</button>
          </div>
        </div>
      </div>
      <div className="launchpad" style={{ backgroundImage: 'url(' + launchpadImg + ')', backgroundSize: 'cover' }}>
        <div
          className="d-flex flex-column align-items-center"
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '50px',
          }}
        >
          <span className="text-3rem text-white">Interact with Your Favorite Creators. </span>
          <span className="text-3rem text-yellow">Completely Decentralized.</span>
          <span className="text-white">
            We are bridging creators with their fans, using the latest in blockchain technology. Interact with your
            favorite artist, pledge support, and earn money. All through your own private screen and wallet.
          </span>
          <button
            className="btn btn-lg bg-style1 br-none bl-none text-white"
            style={{ paddingRight: '40px', paddingLeft: '40px', marginTop: '20px' }}
          >
            GO TO LAUNCH PAD
          </button>
        </div>
      </div>
      <div className="request d-flex bg-style2" style={{ padding: '50px' }}>
        <div className="flex-12-7">
          <div className="text-2xl text-white">REQUEST A LAUNCH:</div>
          <div className="text-white">
            Sign up to join the community as an artist, and receive direct financial benefit from your fan-base and the
            entire RastaCommunity.
          </div>
        </div>
        <div className="flex-12-5 d-flex justify-content-center align-items-center">
          <button className="btn btn-lg bg-red text-white" style={{ paddingRight: '40px', paddingLeft: '40px' }}>
            SIGN IN AS AN ARTIST
          </button>
        </div>
      </div>
      {/* <Hero>
        <Heading as="h1" size="xl" mb="24px" color="#543212">
          {TranslateString(576, 'Rasta.Finance')}
        </Heading>
        <Text color="black">{TranslateString(578, 'Community Driven High Yield AMM')}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
        </Cards>
        <CTACards>
          <CakeStats />
          <TotalValueLockedCard />
        </CTACards>
      </div> */}
    </Page>
  )
}

export default Home
