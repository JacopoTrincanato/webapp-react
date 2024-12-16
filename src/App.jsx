//importo BrowserRouter, Routes e Route da react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importo useState
//import { useState } from 'react';

//importo AppLayout
import AppLayout from './layouts/AppLayout';

//importo il GlobalContext
import GlobalContext from './contexts/GlobalContext';

//importo Homepage
import Homepage from './pages/Homepage';

//importo FilmDetailsPage
import FilmDetailsPage from './pages/FilmDetailsPage';

//importo NotFound
import NotFound from './components/NotFound';

function App() {



  return (
    <>
      <GlobalContext.Provider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}> {/*Layout */}
              <Route index element={<Homepage />} /> {/*Homepage */}
              <Route path="movies/:id" element={<FilmDetailsPage />} /> {/*Film details page */}
              {<Route path="*" element={<NotFound />} />} {/*Not Found */}
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
