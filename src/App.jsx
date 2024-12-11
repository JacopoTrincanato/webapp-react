//importo BrowserRouter, Routes e Route da react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importo AppLayout
import AppLayout from './layouts/AppLayout';
import Homepage from './pages/Homepage';
import FilmDetails from './pages/FilmDetails';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}> {/*Layout */}
            <Route index element={<Homepage />} /> {/*Homepage */}
            <Route path='movie/:id' element={<FilmDetails />} /> {/*Film details page */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
