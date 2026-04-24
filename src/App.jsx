import Heroes from "./pages/Heroes"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import { Route, Routes, BrowserRouter } from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heroes" element={<Heroes />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App