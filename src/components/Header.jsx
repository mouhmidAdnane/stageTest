import { Button } from "@/components/ui/button"
import {Link} from "react-router-dom"


const Header= ()=>{
    return (
        <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img
              src="/placeholder.svg?height=40&width=120"
              alt="Logo"
              width={120}
              height={40}
              className="h-10"
            />
            <nav className="hidden md:flex items-center gap-6">
              {/* <Link to="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Countries</Link> */}
              <Link to="/feed" className="text-sm font-medium text-gray-600 hover:text-gray-900">Network</Link>
              <Link to="/companies" className="text-sm font-medium text-gray-600 hover:text-gray-900">Companies</Link>
              <Link to="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Talents</Link>
              <Link to="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Jobs</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Register</Button>
          </div>
        </div>
      </header>
    )
}

export default Header