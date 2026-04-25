import Heroes from "./pages/Heroes"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import NotFound from "./pages/NotFound"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import HeroDetail from "./pages/HeroDetail"
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/heroes/:key" element={<HeroDetail/>}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App