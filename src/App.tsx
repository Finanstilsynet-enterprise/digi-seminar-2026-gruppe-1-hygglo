import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { BookingPage } from './pages/BookingPage'
import { EquipmentDetailPage } from './pages/EquipmentDetailPage'
import { EquipmentPage } from './pages/EquipmentPage'
import { RequestsPage } from './pages/RequestsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EquipmentPage />} />
        <Route path="/utstyr/:id" element={<EquipmentDetailPage />} />
        <Route path="/utstyr/:id/book" element={<BookingPage />} />
        <Route path="/foresporsler" element={<RequestsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
