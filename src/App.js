import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./routes/Home";
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Account from './routes/Account';
import axios from "axios";

function App() {

  const [coins, setCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true';
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data);
    });
  }, [url]);

  return (
    <ThemeProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home coins={coins} />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;



// 1. dodajemo ThemeProvider
// 2. doajemo Routes element
// 3. dodajemo Route elemente
// 4. na vrhu importujemo axios
// 5. dodajemo useState hook
// 6. posjecujemo web stranicu https://www.coingecko.com/
// 7. kliknemo na products 
// 8. odaberemo crypto API
// 9. kliknemo na view plan
// 10. kliknemo na get started (free plan)
// 11. kliknemo na coins market
// 12. kliknemo try it out
// 13. stavimo currency vrijednost usd (americki dolar)
// 14. stavimo per page vrijednost 10
// 15. odaberemo sparkline boolean vrijednost true
// 16. na kraju kliknemo execute
// 17. kopiramo request URL link
// 18. dodajemo const url i kopiramo requst URL link
// 19. dodajemo useEffect hook
// 20. preko useEffect hook pozivamo API i dobijamo rezultat
// 21. u Route elementu (<Home />) dodajemo props coins
// 22. otvaramo i uredujemo Home.jsx komponentu
 