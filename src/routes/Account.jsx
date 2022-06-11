import React from 'react';
import { useNavigate } from 'react-router-dom';
import SavedCoins from '../components/SavedCoins';
import { UserAuth } from '../context/AuthContext';

const Account = () => {

  const {user, logout} = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout()
      navigate('/')
    } catch(e) {
      console.log(e.message)
    }
  }

  return (
    <div className='max-w-[1140px] mx-auto'>
      <div className='flex justify-between items-center my-12 py-8 rounded-div'>
        <div>
          <h1 className='text-2xl font-bold'>
            Account page
          </h1>
          <div>
            <p>Welcome, {user?.email}</p>
          </div>
        </div>
        <div>
          <button onClick={handleSignOut}
                  className='border px-6 py-2 rounded-2xl shadow-xl hover:shadow-2xl'>
            Sign out
          </button>
        </div>
      </div>
      <div className='flex justify-between items-center my-12 py-8 rounded-div'>
        <div className='w-full min-h-[300px]'>
          <h2 className='text-2xl font-bold py-4'>
            Watch list
          </h2>
          <SavedCoins />
        </div>
      </div>
    </div>
  )
}

export default Account;





// 1. dodajemo div elemente
// 2. dodajemo className elementima
// 3. dodajemo UserAuth i useNavigate metoda
// 4. dodajemo funkciju handleSignOut
// 5. dodajemo onClick dogadaj button elementu
// 6. 