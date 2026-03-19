import { Routes, Route } from 'react-router-dom'
import { RootLayout } from '@/components/layout/RootLayout'
import { HomePage } from '@/components/pages/HomePage'
import { DirectionsListPage } from '@/components/pages/DirectionsListPage'
import { DirectionPage } from '@/components/pages/DirectionPage'
import { TeachersPage } from '@/components/pages/TeachersPage'
import { PricesPage } from '@/components/pages/PricesPage'
import { ContactsPage } from '@/components/pages/ContactsPage'
import { NotFoundPage } from '@/components/pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/directions" element={<DirectionsListPage />} />
        <Route path="/directions/:slug" element={<DirectionPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
