//importo BrowserRouter, Routes e Route da react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route> {/*Layout */}
            <Route /> {/*Homepage */}
            <Route /> {/*Film details page */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
