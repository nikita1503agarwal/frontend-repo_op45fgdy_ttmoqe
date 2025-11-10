import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Custom from './pages/Custom'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Blog from './pages/Blog'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/about" element={<About />} />
      <Route path="/custom" element={<Custom />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  )
}

export default App
