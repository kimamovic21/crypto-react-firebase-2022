import React from 'react';
import CoinSearch from '../components/CoinSearch';
import Trending from '../components/Trending';

const Home = ({coins}) => {
  return (
    <div>
      <CoinSearch coins={coins} />
      <Trending />
    </div>
  )
}

export default Home;




// 1. dodajemo props coins CoinSearch komponenti
// 2. doajemo Trending komponentu
// 3. 