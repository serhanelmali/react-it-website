import GlobalStyle from "./globalStyles"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//Pages
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Pricing from "./pages/Pricing"

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  )
}

export default App
