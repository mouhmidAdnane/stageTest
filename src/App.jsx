import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import DirectoryPage from "@/pages/Companies"
import CompanyRegistrationForm from "@/pages/CompanyForm"
import LandingPage from "@/pages/landing"
import SocialFeedPage from "@/pages/Network"



function App() {

  return (

          <Router>
            <Routes>

            <Route path="/companies" element={<DirectoryPage />} />
            <Route path="/new/companies" element={<CompanyRegistrationForm />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/feed" element={<SocialFeedPage />} />
             
            </Routes>
          </Router>

  )
}

export default App
