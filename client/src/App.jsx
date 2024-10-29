import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import { useEffect, useState } from 'react';
import Authenticate from './Components/Modals/Authenticate';
import { CgCloseO } from "react-icons/cg";
import ShoppingCart from './Components/Modals/ShoppingCart';
import ForgotPassword from './Components/Helpers/ForgotPassword';
import Donations from './Components/Modals/Donations';
import Store from './Pages/Store';
import Fada from './Pages/About/Fada';
import AboutUs from './Pages/AboutUs';
import { Toaster } from 'react-hot-toast';
import Blogs from './Pages/Blogs';
import Blog from './Pages/Blog';

function App() {
  const [ selectedCard, setSelectedCard ] = useState(null)

  const renderPopup = () => {
    switch(selectedCard){
      case 'authenticate' :
        return (
          <div>
              <Authenticate setSelectedCard={setSelectedCard} selectedCard={selectedCard} />
          </div>
        )
      case 'shoppingCart':
        return (
          <div>
            <ShoppingCart setSelectedCard={setSelectedCard} />
          </div>
        )
      case 'forgotPassword':
        return (
          <ForgotPassword setSelectedCard={setSelectedCard} />
        )
      case 'donations':
        return (
          <div>
            <Donations setSelectedCard={setSelectedCard} />
          </div>
        )
    }
  }

  /**
   useEffect(() => {
     const handleClickOutside = (event) => {
       if (event.target.classList.contains('popup-overlay')) {
         setSelectedCard(null);
       }
     };
 
     document.addEventListener('click', handleClickOutside);
 
     return () => {
       document.removeEventListener('click', handleClickOutside);
     };
   }, []);
   * 
   */

  const closePopup = () => {
    setSelectedCard(null);
  };

  return (
    <div className='app overflow-hidden'>
      <Toaster position='top-center'></Toaster>
      {
        selectedCard && (
          <>
            <div className={`popup-overlay z-[9999] fixed flex items-center justify-center top-0 left-0 w-[100vw] h-[100vh] bg-transparent-bg-2 transition-transform duration-500 ease-in-out transform translate-y-0`}
            >
              <div className={`z-50 w-[550px] phone:max-w-[94%] h-auto m-auto rounded-[12px] border-[1px] px-[24px] py-4 flex flex-col gap-6 bg-white shadow-xl`}>
                <div className='w-full flex flex-col'>
                  <div onClick={closePopup} className='ml-auto p-1 cursor-pointer'>
                    <CgCloseO className='text-[32px] phone:text-[28px]' />
                  </div>
                  <div className='mt-2'>
                    {renderPopup()}
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage setSelectedCard={setSelectedCard} />} />
          <Route path='/shop' element={<Store setSelectedCard={setSelectedCard} />} />
          <Route path='/about-fada' element={<Fada />} />
          <Route path='/about-us' element={<AboutUs setSelectedCard={setSelectedCard} />} />
          <Route path='/blogs' element={<Blogs setSelectedCard={setSelectedCard} />} />
          <Route path='/blog/:id' element={<Blog setSelectedCard={setSelectedCard} />} />



        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
