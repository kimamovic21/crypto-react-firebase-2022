import React, { useContext } from 'react';
import {HiSun, HiMoon} from 'react-icons/hi';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {

  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div className='p-2'>
        {theme === 'dark' ? 
        (   
            <div className='flex items-center cursor-pointer'
                 onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                <HiSun className='text-primary text-2xl mr-2'/> Light mode
            </div>
        ) : 
        (
            <div className='flex items-center cursor-pointer'
                 onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                <HiMoon className='text-primary text-2xl mr-2'/> Dark mode
            </div>
        )
        }
    </div>
  )
}

export default ThemeToggle;



// 1. dodajemo useContext hook
// 2. dodajemo uslov unutar div elementa za ikonice
// 3. dodajemo onClick dogadaj za promjenu boje pozadine
// 4. uredujemo izgled divova na stranici

