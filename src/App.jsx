import { Route, Routes } from 'react-router-dom'
import { Footer, Header, MobileActions } from './components/Layout'
import Seo from './components/Seo'
import { AboutPage, ContactPage, HomePage, ListingPage, ProjectPage, ProjectsPage, PropertyPage, SellPage } from './pages/Pages'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return <><Seo /><Header /><Routes>
    <Route path="/" element={<HomePage />} /><Route path="/buy" element={<ListingPage intent="buy" />} />
    <Route path="/rent" element={<ListingPage intent="rent" />} /><Route path="/property/:id" element={<PropertyPage />} />
    <Route path="/sell" element={<SellPage />} /><Route path="/projects" element={<ProjectsPage />} />
    <Route path="/projects/:id" element={<ProjectPage />} /><Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} /><Route path="*" element={<NotFoundPage />} />
  </Routes><Footer /><MobileActions /></>
}
