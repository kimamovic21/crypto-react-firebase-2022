import React from 'react';
import CoinSearch from '../components/CoinSearch';

const Home = ({coins}) => {
  return (
    <div>
      <CoinSearch coins={coins} />
    </div>
  )
}

export default Home;




// 1. dodajemo props coins CoinSearch komponenti
// 2. 