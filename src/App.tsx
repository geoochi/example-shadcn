import { HashRouter, Routes, Route } from 'react-router'
import Page01 from './app/dashboard/page01'
import Page02 from './app/dashboard/page02'
import Sidebar from './app/layout/sidebar'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/page01' element={<Page01 />} />
        <Route path='/page02' element={<Page02 />} />
        <Route path='/sidebar' element={<Sidebar />} />
      </Routes>
    </HashRouter>
  )
}
