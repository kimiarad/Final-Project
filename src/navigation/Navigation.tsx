import { Routes, Route } from 'react-router-dom';

import MarketScreen from '../screens/Market/MarketScreen';


const Navigation = (): JSX.Element => (
  <Routes>
    <Route path='/market' element={<MarketScreen />} />
  </Routes>
);

export default Navigation;
