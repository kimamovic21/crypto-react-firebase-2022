import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
      setNav(!nav)
  }

  return (
    <div className='rounded-div flex items-center justify-between h-20 font-bold'> 

        <Link to='/'>
            <h1 className='text-2xl'>Cryptobase</h1>
        </Link>

        {/* Theme Toggle */}

        <div className='hidden md:block'>
            <ThemeToggle />
        </div>
        

        {/* Sign div */}

        <div className='hidden md:block'>
            <Link className='p-4 hover:text-accent'
                  to='/signin'>
                Sign in
            </Link>
            <Link className='bg-button text-btnText px-3 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'
                  to='/signup'>
                Sign up
            </Link>
        </div>


        {/* Menu icon */}

        <div className='block md:hidden cursor-pointer z-10'
             onClick={handleNav}>
            {/* <AiOutlineMenu /> */}
            { 
                nav ? 
                <AiOutlineClose size={27}/> :
                <AiOutlineMenu  size={27}/> 
            }
        </div>


        {/* Mobile menu */}

        <div className={
                         nav ? 
                         'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10' :
                         'fixed left-[-100%] top-20 h-[50%] flex flex-col items-center justify-between ease-in duration-300'
                        }
            >

            <ul className='w-full p-4'>
                <li className='border-b py-6'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='border-b py-6'>
                    <Link to='/'>Account</Link>
                </li>
                <li className='py-6'>
                    <ThemeToggle />
                </li>
            </ul>

            {/* Mobile Menu Sign */}

            <div className='w-full flex flex-col p-4'>
                <Link to='/signin'>
                    <button className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'>
                        Sign in
                    </button>
                </Link>
                <Link to='/signup'>
                    <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>
                        Sign up
                    </button>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Navbar;




// 1. importujemo Link element u kojem se nalazi h1 element
// 2. dodajemo ThemeToggle komponentu
// 3. dodajemo div u kojem se nalaze Link elementi
// 4. dodajemo div za Menu icon 
// 5. dodajemo AiOutlineMenu ikonu 
// 6. dodajemo div za Mobile menu
// 7. unutar tog diva dodajemo ul element sa li elementima
// 8. dodajemo jos jedan div unutar diva za Mobile menu
// 9. dodajemo klasu glavnom divu u ovoj komponenti
// 10. Div elementu za Theme Toggle dodajemo klasu
// 11. Div elementu za Sign dodajemo klasu
// 12. uredujemo Link elemente unutar Sign diva
// 13. dodajemo i uredujemo klasu Menu icon divu
// 14. dodajemo i uredujemo klasu Mobile menu divu
// 15. dodajemo i uredujemo klasu ul elementu unutar Mobile menu diva
// 16. dodajemo i uredujemo klase li elementima unutar ul elementa
// 17. dodajemo i uredujemo klase Mobile Menu Sign divu
// 18. dodajemo i uredujemo klase button elemenata u Mobile Menu Sign divu
// 19. dodajemo useState hook
// 20. ispod useState hook dodajemo handleNav funkciju
// 21. dodajemo onClick dogadaj Menu icon divu
// 22. dodajemo uslov (ternarni operator) kako ce se ikone pojavljivati na ekranu
// 23. u divu za Mobile menu dodajemo klasu kao ternarni operator

