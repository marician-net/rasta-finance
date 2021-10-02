import React, { useEffect, useCallback, useState, useMemo } from 'react'
import Page from 'components/layout/Page'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading } from 'rasta-uikit'
import { BLOCKS_PER_YEAR, RASTA_PER_BLOCK, RASTA_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import { useFarms, usePriceBnbBusd, usePriceRastaBusd, usePriceEthBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'

import FarmsStyle from 'style/FarmsStyle'
import headerImg from '../../assets/images/lion-mr-rasta.jpg'
// import BinanceIcon from '../../assets/images/Binance-Icon-Logo.c6f56f81.svg'
import { BinanceIcon } from 'rasta-uikit'
import Icons from 'style/Icons'

const Farms: React.FC = () => {
  const [mainActive, SETmainActive] = useState(false)
  // const { path } = useRouteMatch()
  // const TranslateString = useI18n()
  // const farmList = useFarms()
  // const rastaPrice = usePriceRastaBusd()
  // const bnbPrice = usePriceBnbBusd()
  // const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  // const ethPriceUsd = usePriceEthBusd()

  // const dispatch = useDispatch()
  // const { fastRefresh } = useRefresh()
  // useEffect(() => {
  //   if (account) {
  //     dispatch(fetchFarmUserDataAsync(account))
  //   }
  // }, [account, dispatch, fastRefresh])

  // const [stackedOnly, setStackedOnly] = useState(false)

  // const farmsLP = farmList.filter((farm) => farm.lpSymbol.includes('RLP'))
  // const activeFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X')
  // const inactiveFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier === '0X')
  // const stackedOnlyFarms = activeFarms.filter(
  //   (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  // )
  // // /!\ This function will be removed soon
  // // This function compute the APY for each farm and will be replaced when we have a reliable API
  // // to retrieve assets prices against USD
  // const farmsList = useCallback(
  //   (farmsToDisplay, removed: boolean) => {
  //     const cakePriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === RASTA_POOL_PID)?.tokenPriceVsQuote || 0)
  //     const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
  //       if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
  //         return farm
  //       }
  //       const cakeRewardPerBlock = RASTA_PER_BLOCK.times(farm.poolWeight)
  //       const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

  //       // cakePriceInQuote * cakeRewardPerYear / lpTotalInQuoteToken
  //       let apy = cakePriceVsBNB.times(cakeRewardPerYear).div(farm.lpTotalInQuoteToken)

  //       if (farm.quoteTokenSymbol === QuoteToken.BUSD || farm.quoteTokenSymbol === QuoteToken.UST) {
  //         apy = cakePriceVsBNB.times(cakeRewardPerYear).div(farm.lpTotalInQuoteToken).times(bnbPrice)
  //       } else if (farm.quoteTokenSymbol === QuoteToken.ETH) {
  //         apy = rastaPrice.div(ethPriceUsd).times(cakeRewardPerYear).div(farm.lpTotalInQuoteToken)
  //       } else if (farm.quoteTokenSymbol === QuoteToken.RASTA) {
  //         apy = cakeRewardPerYear.div(farm.lpTotalInQuoteToken)
  //       } else if (farm.dual) {
  //         const cakeApy =
  //           farm && cakePriceVsBNB.times(cakeRewardPerBlock).times(BLOCKS_PER_YEAR).div(farm.lpTotalInQuoteToken)
  //         const dualApy =
  //           farm.tokenPriceVsQuote &&
  //           new BigNumber(farm.tokenPriceVsQuote)
  //             .times(farm.dual.rewardPerBlock)
  //             .times(BLOCKS_PER_YEAR)
  //             .div(farm.lpTotalInQuoteToken)

  //         apy = cakeApy && dualApy && cakeApy.plus(dualApy)
  //       }

  //       return { ...farm, apy }
  //     })
  //     return farmsToDisplayWithAPY.map((farm) => (
  //       <FarmCard
  //         key={farm.pid}
  //         farm={farm}
  //         removed={removed}
  //         bnbPrice={bnbPrice}
  //         cakePrice={rastaPrice}
  //         ethPrice={ethPriceUsd}
  //         ethereum={ethereum}
  //         account={account}
  //       />
  //     ))
  //   },
  //   [farmsLP, bnbPrice, ethPriceUsd, rastaPrice, ethereum, account],
  // )

  return (
    <Page className="farmsPage text-center">
      <FarmsStyle />
      <div
        style={{
          background: 'url(' + headerImg + ')',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          padding: '60px',
        }}
      >
        <span className="text-4xl text-white">Mr. Rasta Farms</span>
      </div>
      <div className="d-flex flex-column">
        <h2>Stake Liquidity Pool Tokens</h2>
        <h3 className="text-gray">Earn Brand New Rasta Tokens</h3>
        <button className={'styled-toggle-button ' + (!mainActive && 'no')} onClick={() => SETmainActive(!mainActive)}>
          <span data-yes="active" data-no="inactive">
            <span></span>
          </span>
        </button>
      </div>
      <div className="text-dark">
        {mainActive ? (
          <div className="d-flex flex-column">
            <div className="d-flex flex-wrap row" style={{ width: '100%' }}>
              <div className="col">
                <div className="d-flex flex-column shadow-md bg-white">
                  <div className="d-flex flex-column align-items-start">
                    <h1>M-Rasta 1</h1>
                    <div className="align-self-stretch d-flex justify-content-between align-items-center">
                      <span
                        className="border-2 border-solid border-dyellow px-2 p-1 d-inline-flex rounded-max"
                        style={{ color: '#f0b90b' }}
                      >
                        <Icons.CheckOIcon />
                        &nbsp;&nbsp;CORE
                      </span>
                      <span
                        className="rounded-max"
                        style={{ background: '#f0b90b', padding: '5px 15px', color: 'white' }}
                      >
                        35x
                      </span>
                      <span>
                        <BinanceIcon style={{ width: '50px' }} />
                      </span>
                    </div>
                  </div>
                  <div
                    className="border-radius-1 py-1"
                    style={{ marginTop: '20px', background: 'rgba(226, 232, 240)' }}
                  >
                    <h2>256.08%</h2>
                    <span className="text-dred">AAR</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-stretch">
                    <div className="d-flex flex-column align-items-start flex-fill">
                      <h1>$0</h1>
                      <span style={{ marginBottom: '10px' }}>Rasta Earned</span>
                      <button className="btn btn-md bg-style1 br-none bl-none text-white">Harvest</button>
                    </div>
                    <div className="border-radius-1 py-1 flex-fill" style={{ background: 'rgba(226, 232, 240)' }}>
                      <h2>0%</h2>
                      <span className="text-dred">Deposit Fee</span>
                    </div>
                  </div>
                  <hr />
                  <button className="btn btn-md bg-style1 br-none bl-none text-white">
                    <h2>
                      <Icons.WalletIcon />
                      &nbsp; Unlock Wallet
                    </h2>
                  </button>
                  <div>
                    <div className="d-flex justify-content-between text-orange">
                      <span>Stake:Total Liquidity</span>
                      <span>
                        M-Rasta 1&nbsp;&nbsp;
                        <span className="text-dred">
                          <Icons.GoOutIcon />
                        </span>
                      </span>
                    </div>
                    <div className="text-right text-orange">47,581</div>
                    <div className="d-flex justify-content-between text-dred">
                      <span>View on BscScan</span>
                      <h3>
                        Detail <Icons.TopIcon />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column shadow-md bg-white">
                  <div className="d-flex flex-column align-items-start">
                    <h1>M-Rasta 1</h1>
                    <div className="align-self-stretch d-flex justify-content-between align-items-center">
                      <span
                        className="border-2 border-solid border-dyellow px-2 p-1 d-inline-flex rounded-max"
                        style={{ color: '#f0b90b' }}
                      >
                        <Icons.CheckOIcon />
                        &nbsp;&nbsp;CORE
                      </span>
                      <span
                        className="rounded-max"
                        style={{ background: '#f0b90b', padding: '5px 15px', color: 'white' }}
                      >
                        35x
                      </span>
                      <span>
                        <BinanceIcon style={{ width: '50px' }} />
                      </span>
                    </div>
                  </div>
                  <div
                    className="border-radius-1 py-1"
                    style={{ marginTop: '20px', background: 'rgba(226, 232, 240)' }}
                  >
                    <h2>256.08%</h2>
                    <span className="text-dred">AAR</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-stretch">
                    <div className="d-flex flex-column align-items-start flex-fill">
                      <h1>$0</h1>
                      <span style={{ marginBottom: '10px' }}>Rasta Earned</span>
                      <button className="btn btn-md bg-style1 br-none bl-none text-white">Harvest</button>
                    </div>
                    <div className="border-radius-1 py-1 flex-fill" style={{ background: 'rgba(226, 232, 240)' }}>
                      <h2>0%</h2>
                      <span className="text-dred">Deposit Fee</span>
                    </div>
                  </div>
                  <hr />
                  <button className="btn btn-md bg-style1 br-none bl-none text-white">
                    <h2>
                      <Icons.WalletIcon />
                      &nbsp; Unlock Wallet
                    </h2>
                  </button>
                  <div>
                    <div className="d-flex justify-content-between text-orange">
                      <span>Stake:Total Liquidity</span>
                      <span>
                        M-Rasta 1&nbsp;&nbsp;
                        <span className="text-dred">
                          <Icons.GoOutIcon />
                        </span>
                      </span>
                    </div>
                    <div className="text-right text-orange">47,581</div>
                    <div className="d-flex justify-content-between text-dred">
                      <span>View on BscScan</span>
                      <h3>
                        Detail <Icons.TopIcon />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column shadow-md bg-white">
                  <div className="d-flex flex-column align-items-start">
                    <h1>M-Rasta 1</h1>
                    <div className="align-self-stretch d-flex justify-content-between align-items-center">
                      <span
                        className="border-2 border-solid border-dyellow px-2 p-1 d-inline-flex rounded-max"
                        style={{ color: '#f0b90b' }}
                      >
                        <Icons.CheckOIcon />
                        &nbsp;&nbsp;CORE
                      </span>
                      <span
                        className="rounded-max"
                        style={{ background: '#f0b90b', padding: '5px 15px', color: 'white' }}
                      >
                        35x
                      </span>
                      <span>
                        <BinanceIcon style={{ width: '50px' }} />
                      </span>
                    </div>
                  </div>
                  <div
                    className="border-radius-1 py-1"
                    style={{ marginTop: '20px', background: 'rgba(226, 232, 240)' }}
                  >
                    <h2>256.08%</h2>
                    <span className="text-dred">AAR</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-stretch">
                    <div className="d-flex flex-column align-items-start flex-fill">
                      <h1>$0</h1>
                      <span style={{ marginBottom: '10px' }}>Rasta Earned</span>
                      <button className="btn btn-md bg-style1 br-none bl-none text-white">Harvest</button>
                    </div>
                    <div className="border-radius-1 py-1 flex-fill" style={{ background: 'rgba(226, 232, 240)' }}>
                      <h2>0%</h2>
                      <span className="text-dred">Deposit Fee</span>
                    </div>
                  </div>
                  <hr />
                  <button className="btn btn-md bg-style1 br-none bl-none text-white">
                    <h2>
                      <Icons.WalletIcon />
                      &nbsp; Unlock Wallet
                    </h2>
                  </button>
                  <div>
                    <div className="d-flex justify-content-between text-orange">
                      <span>Stake:Total Liquidity</span>
                      <span>
                        M-Rasta 1&nbsp;&nbsp;
                        <span className="text-dred">
                          <Icons.GoOutIcon />
                        </span>
                      </span>
                    </div>
                    <div className="text-right text-orange">47,581</div>
                    <div className="d-flex justify-content-between text-dred">
                      <span>View on BscScan</span>
                      <h3>
                        Detail <Icons.TopIcon />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '30px' }}>
              <h3>
                <Icons.DownIcon />
                &nbsp;&nbsp;Load More
              </h3>
            </div>
          </div>
        ) : (
          <div>No Farm Data Found</div>
        )}
      </div>
      {/* <Heading as="h1" size="lg" color="#292525" mb="50px" style={{ textAlign: 'center' }}>
        {TranslateString(696, 'Stake Liquidity Pool Tokens')}
        <br />
        {TranslateString(696, '& Earn Brand New Rasta Tokens')}
      </Heading>
      <FarmTabButtons stackedOnly={stackedOnly} setStackedOnly={setStackedOnly} />
      <div>
        <Divider />
        <FlexLayout>
          <Route exact path={`${path}`}>
            {stackedOnly ? farmsList(stackedOnlyFarms, false) : farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route>
        </FlexLayout>
      </div> */}
    </Page>
  )
}

export default Farms
