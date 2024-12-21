import { useState, useEffect } from 'react';

import Header from '../../components/Header/Header';
import Market from '../../components/Widgets/Market/Market';
import BuySell from '../../components/Widgets/BuySell/BuySell';
import BuyOrders from '../../components/Widgets/BuyOrders/BuyOrders';
import SellOrders from '../../components/Widgets/SellOrders/SellOrders';
import TradeHistory from '../../components/Widgets/TradeHistory/TradeHistory';
import CoinVertical from '../../components/Widgets/Coin/CoinVertical';
import CoinHorizontal from '../../components/Widgets/Coin/CoinHorizontal';
import CandleStick from '../../components/Widgets/CandleStick/CandleStick';

interface ICrypto {
  id: number;
  name: string;
  icon: string;
  symbol: string;
  weight: string;
  amount: string;
  change: string;
  currency: string;
  exchange: string;
  description: string;
  financialRate: string;
}

const coinData: ICrypto = {
  id: 1,
  name: 'Bitcoin',
  symbol: 'BTC',
  change: '-%3.28',
  currency: 'USD',
  exchange: 'BTC/USD',
  weight: '104k',
  financialRate: '-0.0252%/hr',
  icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-BTC-icon.png',
  amount: '18.783,33',
  description: `Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group using the name Satoshi Nakamoto. It was released as open-source software in 2009`,
};

const MarketScreen = (): JSX.Element => {
  const [coinInfo, setCoinInfo] = useState<ICrypto | null>(null);
  
  useEffect(() => {
    setCoinInfo(coinData);
  }, []);

  return (
      <div className='content'>
        <Header title='Market' />
        <div className='flex flex-destroy'>
          <div className='content-30 box-right-padding'>
            <Market />

            {coinInfo && <CoinVertical item={coinInfo} />}
          </div>
          <div className='content-70 flex-1'>
            {coinInfo && (
              <CoinHorizontal
                item={coinInfo}
              />
            )}

            <div className='flex flex-destroy'>
              <div className='content-70 flex-1 box-right-padding'>
                <CandleStick />
              </div>
              <div className='content-30'>
                <BuySell />
              </div>
            </div>

            <div className='flex flex-destroy flex-space-between'>
              <div className='flex-1 box-right-padding'>
                <TradeHistory />
              </div>
              <div className='flex-1 box-right-padding'>
                <BuyOrders />
              </div>
              <div className='flex-1'>
                <SellOrders />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MarketScreen;
