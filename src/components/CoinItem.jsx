import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const CoinItem = ({coin}) => {
  return (
    <tr>
      <td><AiOutlineStar/></td>
        <td>{coin.market_cap_rank}</td>
        <td>
            <div>
                <img src={coin.image} alt={coin.id} style={{width: "5rem"}}/>
                <p>{coin.name}</p>
            </div>
        </td>
        <td>{coin.symbol}</td>
        <td>{coin.current_price}</td>
        <td>{coin.price_change_percentage_24h}</td>
        <td>{coin.total_volume}</td>
        <td>{coin.market_cap}</td>
        <td>
            <Sparklines data={coin.sparkline_in_7d.price}>
                <SparklinesLine color='blue'/> 
            </Sparklines>
        </td>
        {/* <td>{coin.sparkline_in_7d.price}</td> */}
    </tr>
  );
};

export default CoinItem;


// 1. dodajemo tr element kao parent element u kojem ce se nalaziti podaci o kriptovalutama
// 2.



