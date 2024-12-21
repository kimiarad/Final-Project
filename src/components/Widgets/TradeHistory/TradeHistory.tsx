import { useRef, useState, useEffect } from 'react';


import Box from '../../Common/Box';
import TradeHistoryRow from './TradeHistoryRow';

interface IHistory {
  id: number;
  type: number;
  time: string;
  weight: number;
  amount: string;
  currency: string;
}

const dataArray: IHistory[] = [
  {
    id: 1,
    amount: '146.70',
    currency: 'USD',
    weight: 10,
    time: '06:22:15',
    type: 1,
  },
  {
    id: 2,
    amount: '146.70',
    currency: 'USD',
    weight: 10,
    time: '07:30:30',
    type: 1,
  },
  {
    id: 3,
    amount: '146.70',
    currency: 'USD',
    weight: 10,
    time: '09:15:42',
    type: 2,
  },
  {
    id: 4,
    amount: '146.70',
    currency: 'USD',
    weight: 10,
    time: '11:12:50',
    type: 2,
  },
  {
    id: 5,
    amount: '146.70',
    currency: 'USD',
    weight: 10,
    time: '13:30:01',
    type: 1,
  },
  {
    id: 6,
    amount: '146.70',
    currency: 'USD',
    weight: 10,
    time: '14:20:36',
    type: 1,
  },
  {
    id: 7,
    amount: '146.70',
    currency: 'USD',
    weight: 10,
    time: '17:45:58',
    type: 1,
  },
  {
    id: 8,
    amount: '146.70',
    currency: 'USD',
    weight: 10,
    time: '20:05:54',
    type: 1,
  },
  {
    id: 9,
    amount: '146.70',
    currency: 'USD',
    weight: 10,
    time: '22:30:45',
    type: 2,
  },
];

const TradeHistory = (): JSX.Element => {
  const ref = useRef<any>(null);

  const [data, setData] = useState<IHistory[]>([]);

  useEffect(() => {
    setData(dataArray);
  }, []);

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        <div ref={ref} className='flex flex-center flex-space-between'>
          Market History
        </div>
      </div>
      <div className='box-content box-content-height-nobutton'>
        <div className='trade-history-row'>
          {data && data.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th className='left no-select'>Price</th>
                  <th className='center no-select'>Volume</th>
                  <th className='center no-select'>Trade</th>
                  <th className='right no-select'>Time</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: IHistory) => (
                  <TradeHistoryRow key={item.id.toString()} item={item} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Box>
  );
};

export default TradeHistory;
