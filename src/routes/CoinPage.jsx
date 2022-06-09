import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import {FaTwitter, FaFacebook, FaReddit, FaGithub} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
//import DOMPurify from 'dompurify';  - ne radi !!!

const CoinPage = () => {

  const [coin, setCoin] = useState({});
  const params = useParams();

  // const url = 'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true';
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
      console.log(response.data);
    })
  }, [url])

  return (
    <div className='rounded-div my-12 py-8'>

      <div className='flex py-8'>
        <img className='w-20 mr-8'
             src={coin.image?.large} 
             alt="/" 
        />
        <div>
          <p className='text-3xl font-bold'>{coin?.name} price</p>
          <p>({coin.symbol?.toUpperCase()} / USD)</p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <div className='flex justify-between'>
            { coin.market_data?.current_price ? 
            (<p className='text-3xl font-bold'>${coin.market_data.current_price.usd.toLocaleString()}</p>) : (null)
            }
            <p>7 Day</p>
          </div>

          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color='blue' />
            </Sparklines>
          </div>

          <div className='flex justify-between py-4'>
              <div>
              <p className='text-gray-500 text-sm'>Market Cap</p>
                {coin.market_data?.market_cap ? (<p>${coin.market_data.market_cap.usd.toLocaleString()}</p>) : null}
              </div>
              <div>
                <p className='text-gray-500 text-sm'>Volume 24h</p>
                {coin.market_data?.market_cap ? (<p>${coin.market_data.total_volume.usd.toLocaleString()}</p>) : null}
              </div>
          </div>

          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>24h High</p>
              {coin.market_data?.high_24h ? (<p>${coin.market_data.high_24h.usd.toLocaleString()}</p>) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>24h Low</p>
              {coin.market_data?.low_24h ? (<p>${coin.market_data.low_24h.usd.toLocaleString()}</p>) : null}
            </div>
          </div>

        </div>

        <div>
          <p className='text-xl font-bold'>Market Stats</p>
          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>Market Rank</p>
              {coin.market_cap_rank}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Hashing algorithm</p>
              {coin.hashing_algorithm ? (<p>{coin.hashing_algorithm}</p>) : null }
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Trust score</p>
              {coin.tickers ? (<p>{coin.liquidity_score.toFixed(2)}</p>) : null}
            </div>
          </div>

          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (24h)</p>
              {coin.market_data ? (<p>{coin.market_data.price_change_percentage_24h.toFixed(2)}</p>) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (7d)</p>
              {coin.market_data ? (<p>{coin.market_data.price_change_percentage_7d.toFixed(2)}</p>) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (14d)</p>
              {coin.market_data ? (<p>{coin.market_data.price_change_percentage_14d.toFixed(2)}</p>) : null}
            </div>
          </div>

          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>Price change (30d)</p>
              {coin.market_data ? (<p>{coin.market_data.price_change_percentage_30d.toFixed(2)}</p>) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price change (60d)</p>
              {coin.market_data ? (<p>{coin.market_data.price_change_percentage_60d.toFixed(2)}</p>) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price change (1y)</p>
              {coin.market_data ? (<p>{coin.market_data.price_change_percentage_1y.toFixed(2)}</p>) : null}
            </div>
          </div>

          <div className='flex justify-around p-8 text-accent'>
            <FaTwitter />
            <FaFacebook /> 
            <FaReddit />
            <FaGithub />
          </div>

        </div>

      </div>


      {/* Description */}
      <div className='py-4'>
          <p className='text-xl font-bold'>About {coin.name}</p>
          <p>{coin.description?.en}</p>
      </div>

    </div>
  )
}

export default CoinPage;





// 1. dodajemo useState hook
// 2. dodajemo useEffect hook
// 3. dodajemo elemente unutar komponente
// 4. dodajemo img elemente i unutar src atributa imamo javascript optional chaining
// 5. javascript optional chaining ?. koristimo kad pristupamo ugnjezdenim objektima ili nizovima
// 6. dodajemo Sparklines element
// 7. dodajemo div u kojem se nalaze ikonice
// 8. dodajemo div u kojem se nalazi opis kriptovalute
// 9. dodajemo p element sa atributom 
// 10. dodajemo className elementima
// 11. importujemo useParams
