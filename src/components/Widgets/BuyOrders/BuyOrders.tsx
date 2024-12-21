import { useRef, useState, useEffect } from 'react';

import Box from '../../Common/Box';
import BuyOrdersRow from './BuyOrdersRow';

interface IPriceList {
  id: number;
  type: number;
  price: string;
  total: string;
  amount: string;
  currency: string;
}

const dataArray: IPriceList[] = [
  {
    id: 1,
    price: '82,03',
    amount: '0,15',
    total: '237,31',
    currency: 'USD',
    type: 1,
  },
  {
    id: 2,
    price: '82,03',
    amount: '0,15',
    total: '237,31',
    currency: 'USD',
    type: 1,
  },
  {
    id: 3,
    price: '82,03',
    amount: '0,15',
    total: '237,31',
    currency: 'USD',
    type: 3,
  },
  {
    id: 4,
    price: '82,03',
    amount: '0,15',
    total: '237,31',
    currency: 'USD',
    type: 3,
  },
  {
    id: 5,
    price: '82,03',
    amount: '0,15',
    total: '237,31',
    currency: 'USD',
    type: 2,
  },
  {
    id: 6,
    price: '82,03',
    amount: '0,15',
    total: '237,31',
    currency: 'USD',
    type: 1,
  },
  {
    id: 7,
    price: '82,03',
    amount: '0,15',
    total: '237,31',
    currency: 'USD',
    type: 2,
  },
  {
    id: 8,
    price: '82,03',
    amount: '0,15',
    total: '237,31',
    currency: 'USD',
    type: 3,
  },
  {
    id: 9,
    price: '82,03',
    amount: '0,15',
    total: '237,31',
    currency: 'USD',
    type: 3,
  },
];

const BuyOrders = (): JSX.Element => {
  const ref = useRef<any>(null);

  const [data, setData] = useState<IPriceList[]>([]);

  useEffect(() => {
    setData(dataArray);
  }, []);



  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        <div ref={ref} className='flex flex-center flex-space-between'>
          <p>Buy Orders</p>
        </div>
      </div>
      <div className='box-content box-content-height-nobutton'>
        <div className='orders-row'>
          {data && data.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th className='left no-select'>Price</th>
                  <th className='center no-select'>Amount</th>
                  <th className='right no-select'>Total</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: IPriceList) => (
                  <BuyOrdersRow key={item.id.toString()} item={item} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Box>
  );
};

export default BuyOrders;
