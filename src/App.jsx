//importo BrowserRouter, Routes e Route da react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importo AppLayout
import AppLayout from './layouts/AppLayout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}> {/*Layout */}
            <Route /> {/*Homepage */}
            <Route /> {/*Film details page */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
