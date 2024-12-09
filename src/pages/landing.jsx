'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Building2, Megaphone, Users, Laptop, ShoppingBag, Handshake, Search, MessageCircle, Briefcase, NewspaperIcon } from 'lucide-react'
import Header from "@/components/Header"

export default function LandingPage() {
  const [userType, setUserType] = useState('company')
  const [showPassword, setShowPassword] = useState(false)
  const [registerCompany, setRegisterCompany] = useState(false)

  const features = [
    {
      icon: <Handshake className="w-8 h-8" />,
      text: "Find your future clients"
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      text: "Sell your products and services"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      text: "Promote your brand image"
    },
    {
      icon: <Users className="w-8 h-8" />,
      text: "Access a pool of local talent"
    },
    {
      icon: <Users className="w-8 h-8" />,
      text: "Create your own community"
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      text: "Digitize your communication"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header/>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold mb-6">
                  Why use <span className="text-blue-600">Go Africa Online</span>?
                </h1>
                <div className="mb-8">
                  <p className="text-gray-600 mb-2">You are</p>
                  <div className="inline-flex rounded-full bg-[#4D7C0F] p-1">
                    <button
                      onClick={() => setUserType('company')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        userType === 'company' ? 'bg-white text-gray-900' : 'text-white'
                      }`}
                    >
                      A company
                    </button>
                    <button
                      onClick={() => setUserType('professional')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        userType === 'professional' ? 'bg-white text-gray-900' : 'text-white'
                      }`}
                    >
                      A professional
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 mb-4 flex items-center justify-center text-blue-600">
                        {feature.icon}
                      </div>
                      <p className="text-gray-800">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Registration Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-8">
                Join for free with <span className="text-blue-600">millions of African members and companies</span>
              </h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstname" className="block text-sm font-medium">
                      First name<span className="text-red-500">*</span>
                    </label>
                    <Input id="firstname" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastname" className="block text-sm font-medium">
                      Last name<span className="text-red-500">*</span>
                    </label>
                    <Input id="lastname" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    className="border-red-500" 
                    defaultValue="adnane20002016@gmail.c" 
                  />
                  <p className="text-red-500 text-sm">This email is not available</p>
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium">
                    Password<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"} 
                      className="pr-10 bg-blue-50" 
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                  <ul className="text-xs space-y-1">
                    <li className="text-gray-600">8 characters minimum</li>
                    <li className="text-green-600">At least one uppercase letter</li>
                    <li className="text-green-600">At least one lowercase letter</li>
                    <li className="text-green-600">At least one number</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg">
                  <Building2 className="text-blue-600" />
                  <span className="text-blue-600 font-medium">Would you also like to register a company?</span>
                  <div className="ml-auto">
                    <Switch
                      checked={registerCompany}
                      onCheckedChange={setRegisterCompany}
                    />
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm">
                    I accept the <button className="text-blue-600 hover:underline">terms and conditions</button>
                  </label>
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
                >
                  Create my account
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            A super professional and multi-service app
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Companies</h3>
              <p className="text-gray-600">Connect with leading African companies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professionals</h3>
              <p className="text-gray-600">Network with talented professionals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Network</h3>
              <p className="text-gray-600">Engage with your professional community</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Private Messaging</h3>
              <p className="text-gray-600">Direct communication with your network</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Jobs</h3>
              <p className="text-gray-600">Find your next career opportunity</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <NewspaperIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">News / Articles</h3>
              <p className="text-gray-600">Stay updated with industry news</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                We don't just create connections<br />
                <span className="text-yellow-400">We build opportunities</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Go Africa Online helps professionals and companies connect, collaborate, and grow together. Join our thriving community of African professionals and organizations.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-2">304,173</div>
                  <div className="text-gray-300">Registered members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">898,640</div>
                  <div className="text-gray-300">Connections made</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">1.7M</div>
                  <div className="text-gray-300">Monthly page views</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">5M</div>
                  <div className="text-gray-300">Messages exchanged</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="African Professionals"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">They trust us</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <img
                  src={`/placeholder.svg?height=60&width=120&text=Partner${i}`}
                  alt={`Partner ${i}`}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trending on Go Africa Online</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Most Followed Companies */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Most followed companies</h3>
              <div className="space-y-4">
                {[
                  { name: 'Orabank Togo', type: 'Banking', logo: '/placeholder.svg?height=40&width=40' },
                  { name: 'ANPE', type: 'Employment', logo: '/placeholder.svg?height=40&width=40' },
                  { name: 'GO AFRICA ONLINE', type: 'Media', logo: '/placeholder.svg?height=40&width=40' },
                  { name: 'TOP GUINEE', type: 'Retail', logo: '/placeholder.svg?height=40&width=40' },
                  { name: 'TWIGO', type: 'Technology', logo: '/placeholder.svg?height=40&width=40' },
                ].map((company, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <img
                      src={company.logo}
                      alt={company.name}
                      width={40}
                      height={40}
                      className="rounded"
                    />
                    <div>
                      <h4 className="font-medium">{company.name}</h4>
                      <p className="text-sm text-gray-500">{company.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Publications */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Trending publications</h3>
              <div className="space-y-6">
                {[
                  {
                    author: 'Tendresse Gaelly',
                    title: 'Agricultural Development Specialist',
                    content: 'Hello everyone! I am new here, coming from Gabon and I am an agricultural economist...',
                    time: '8 minutes ago',
                    avatar: '/placeholder.svg?height=40&width=40'
                  },
                  {
                    author: 'Burozone',
                    title: 'Office Furniture',
                    content: 'Comfort and style: Highlight the comfort, aesthetics, and durability of furniture...',
                    time: '15 minutes ago',
                    avatar: '/placeholder.svg?height=40&width=40'
                  }
                ].map((post, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-sm p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={post.avatar}
                        alt={post.author}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-medium">{post.author}</h4>
                        <p className="text-sm text-gray-500">{post.title}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">{post.content}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <button className="flex items-center gap-1">
                        <span>Like</span>
                      </button>
                      <button className="flex items-center gap-1">
                        <span>Comment</span>
                      </button>
                      <button className="flex items-center gap-1">
                        <span>Share</span>
                      </button>
                      <span className="ml-auto">{post.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Most Followed Professionals */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Most followed professionals</h3>
              <div className="space-y-4">
                {[
                  { name: 'SEMA ELVIRA GUE', role: 'Building Technician', country: 'Côte d\'Ivoire', avatar: '/placeholder.svg?height=40&width=40' },
                  { name: 'KOKOU WILSON', role: 'Transport & Logistics', country: 'Côte d\'Ivoire', avatar: '/placeholder.svg?height=40&width=40' },
                  { name: 'Cinthia SEMEVO', role: 'HR Assistant', country: 'Benin', avatar: '/placeholder.svg?height=40&width=40' },
                  { name: 'KOFFI PROSPER', role: 'Transit Agent', country: 'Côte d\'Ivoire', avatar: '/placeholder.svg?height=40&width=40' },
                  { name: 'Camille glou tokpa Jean', role: 'PDG', country: 'Côte d\'Ivoire', avatar: '/placeholder.svg?height=40&width=40' },
                ].map((professional, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <img
                      src={professional.avatar}
                      alt={professional.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-medium">{professional.name}</h4>
                      <p className="text-sm text-gray-500">{professional.role}</p>
                      <p className="text-xs text-gray-400">{professional.country}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img
                src="/placeholder.svg?height=40&width=120"
                alt="Logo"
                width={120}
                height={40}
                className="h-10 mb-4"
              />
              <p className="text-gray-600">Your professional network in Africa</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Guidelines</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Go Africa Online. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

