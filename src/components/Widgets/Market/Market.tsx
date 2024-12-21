import { useState, useEffect } from 'react';

import Box from '../../Common/Box';
import MarketRow from './MarketRow';

interface ICrypto {
  id: number;
  name: string;
  icon: string;
  date: string;
  amount: string;
  currency: string;
  change: string;
  lineChartData: number[];
  status: number;
}

const Market = (): JSX.Element => {
  const [dataArray, setDataArray] = useState<ICrypto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCryptoData();
  }, []);

  const fetchCryptoData = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,ripple,polkadot,dogecoin,cardano&order=market_cap_desc&sparkline=true'
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      // Transform the data to match our interface
      const transformedData: ICrypto[] = data.map((coin: any, index: number) => ({
        id: index + 1,
        name: `${coin.symbol.toUpperCase()}/USD`,
        icon: coin.image,
        date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        amount: coin.current_price.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        currency: 'USD',
        change: `${coin.price_change_percentage_24h.toFixed(2)}%`,
        lineChartData: coin.sparkline_in_7d?.price.slice(-7) || [0, 0, 0, 0, 0, 0, 0],
        status: coin.price_change_percentage_24h >= 0 ? 1 : 2,
      }));

      setDataArray(transformedData);
      setLoading(false);
    } catch (err) {
      setError('An error occurred');
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        Markets
      </div>
      <div className='box-content box-content-height'>
        {dataArray && dataArray.map((item) => <MarketRow key={item.id.toString()} item={item} />)}
      </div>
      
    </Box>
  );
};

export default Market;
