import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import Box from '../../Common/Box';

interface ISeries {
  series: any;
  options: any;
}

interface CandleData {
  x: Date;
  y: number[];
}

class CandleStickError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CandleStickError';
  }
}

const CandleStick = (): JSX.Element => {
  const [state, setState] = useState<ISeries | null>(null);
  const [error, setError] = useState<string | null>(null);

  const formatCandleData = (apiData: any[]): CandleData[] => {  
    return apiData.map(item => ({
        x: new Date(item[0]),
        y: [
          Number(item[1]), // Open
          Number(item[2]), // High
          Number(item[3]), // Low
          Number(item[4])  // Close
        ]
      }));
  };

  const fetchBitcoinData = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=7'
      );

      if (!response.ok) {
        throw new CandleStickError(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const formattedData = formatCandleData(data);

      setState({
        series: [{
          data: formattedData
        }],
        options: {
          chart: {
            type: 'candlestick',
            height: 470,
            toolbar: {
              show: true,
            },
          },
          xaxis: {
            type: 'datetime',
          },
          yaxis: {
            tooltip: {
              enabled: true,
            },
            labels: {
              formatter: (value: number) => `$${value.toFixed(2)}`
            }
          },
          title: {
            text: 'Bitcoin Price Chart (Last 7 Days)',
            align: 'left'
          }
        }
      });
    } catch (error) {
      setError('Failed to fetch Bitcoin data');
    }
  };

  useEffect(() => {
    fetchBitcoinData();
  }, []);

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        Bitcoin Market History
      </div>
      <div className='box-content box-content-height-nobutton'>
        {error && (
          <div className="error-message" style={{ color: 'red', padding: '1rem' }}>
            {error}
          </div>
        )}
        {state && !error && (
          <ReactApexChart
            height={470}
            type='candlestick'
            series={state.series}
            options={state.options}
          />
        )}
      </div>
    </Box>
  );
};

export default CandleStick;
