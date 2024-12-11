//importo BrowserRouter, Routes e Route da react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importo AppLayout
import AppLayout from './layouts/AppLayout';
import Homepage from './pages/Homepage';
import FilmDetailsPage from './pages/FilmDetailsPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}> {/*Layout */}
            <Route index element={<Homepage />} /> {/*Homepage */}
            <Route path='movies/:id' element={<FilmDetailsPage />} /> {/*Film details page */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
