import React, { useState } from 'react';
import CoinItem from './CoinItem';
import {AiOutlineStar} from 'react-icons/ai';
import {Sparklines, SparklinesLine} from 'react-sparklines';

const CoinSearch = ({coins}) => {

    const [searchText, setSearchText] = useState('');

    return (
    <div className='rounded-div my-4'>

        <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
            <h1 className='text-2xl font-bold my-2'>
              Search crypto
            </h1>
            <form>
                <input className='w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl'
                       onChange={(e) => setSearchText(e.target.value)} 
                       type="text" 
                       placeholder='Search a coin'
                />
            </form>
        </div>

        <table className='w-full border-collapse text-center'>
            <thead>
                <tr className='border-b'>
                    <th></th>
                    <th className='px-4'>#</th>
                    <th className='text-left'>Coin</th>
                    <th></th>
                    <th>Price</th>
                    <th>24h</th>
                    <th className='hidden md:table-cell'>24h Volume</th>
                    <th className='hidden sm:table-cell'>Market</th>
                    <th>Last 7 Days</th>
                </tr>
            </thead>

            <tbody>
              {coins.filter((value) => {
                if (searchText === '') {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((coin) => (
                 <CoinItem key={coin.id} coin={coin}/>
              ))}
            </tbody>

        </table>

    </div>
  )
}

export default CoinSearch;






// 1. dodajemo props coins u CoinSearch komponenti
// 2. dodajemo div za coin search
// 3. dodajemo table element
// 4. dodajemo thead, tr i th unutar unutar table elementa
// 5. dodajemo tbody element unutar table elementa
// 6. dodajemo javascript map metodu unutar tbody elementa
// 7. uredujemo td elemente unutar tr elementa
// 8. implementiramo Sparklines dijagram ud td elementu
// 9. kreiramo novu komponentu CoinItem u kopiramo tr element i sve sto se nalazi unutar njega
// 10. dodajemo useState hook
// 11. dodajemo filter metodu
// 12. dodajemo onChange dogadaj kod inputa
// 13. dodajemo className elementima
