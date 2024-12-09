import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'
import {Link} from "react-router-dom"
import Header from "@/components/Header"


export default function DirectoryPage() {
  const categories = [
    {
      title: "Communication, publicité",
      description: "Les sociétés de communication et de publicité : médias, pubs, télévision, événementiel, éditions, imprimeries, objets et cadeaux publicitaires...",
      image: "/placeholder.svg?height=300&width=400",
      subcategories: [
        { name: "Communication agences", link: "#" },
        { name: "Imprimeries", link: "#" }
      ]
    },
    {
      title: "Bâtiment et construction",
      description: "Le secteur de la construction est très large. Articles sanitaires, plomberie & spécialistes des matériaux de construction, travaux de génie civil...",
      image: "/placeholder.svg?height=300&width=400",
      subcategories: [
        { name: "Adduction d'eau", link: "#" },
        { name: "Aluminium", link: "#" }
      ]
    },
    {
      title: "Finances",
      description: "Gérer vos finances au Maroc grâce aux professionnels de l'économie, de la banque, bourse de change, microfinance, transferts de fonds...",
      image: "/placeholder.svg?height=300&width=400",
      subcategories: [
        { name: "Assurances", link: "#" },
        { name: "Assurances - Courtiers", link: "#" }
      ]
    },
    {
      title: "Commerces",
      description: "Nos boutiques, boulangeries, épiciers, commerçants, vente de chaussures, boucheries, librairies, général d'art... un vous apportons tout ce qui se vend",
      image: "/placeholder.svg?height=300&width=400",
      subcategories: [
        { name: "Supermarché", link: "#" },
        { name: "Quincaillerie", link: "#" }
      ]
    },
    {
      title: "Automobile / Moto",
      description: "Les entreprises du secteur automobile : vente de voiture et motos, auto-écoles, stations de lavage de voitures, pièces détachées, garages, location...",
      image: "/placeholder.svg?height=300&width=400",
      subcategories: [
        { name: "Vente de voitures", link: "#" },
        { name: "Vente de pièces - motos", link: "#" }
      ]
    },
    {
      title: "Informatique, Internet",
      description: "Le monde numérique à votre portée : matériel informatique, cybercafés, consultants, fournisseurs d'accès internet, développeurs web...",
      image: "/placeholder.svg?height=300&width=400",
      subcategories: [
        { name: "Cybercafés", link: "#" },
        { name: "Hébergement cloud", link: "#" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Directory companies of Morocco</h1>

        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-5">
              <label htmlFor="what" className="block text-sm font-medium text-gray-700 mb-1">
                Qui, Quoi ?
              </label>
              <Input
                id="what"
                placeholder="Nom d'une société, d'un secteur d'activité..."
                className="w-full"
              />
            </div>
            <div className="md:col-span-5">
              <label htmlFor="where" className="block text-sm font-medium text-gray-700 mb-1">
                Où ?
              </label>
              <Input
                id="where"
                placeholder="Pays, ville..."
                className="w-full"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-transparent mb-1">
                Search
              </label>
              <Button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800">
                <Search className="w-4 h-4 mr-2" />
                Rechercher
              </Button>
            </div>
          </div>
        </div>

        {/* Categories Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-gray-900">All pro categories!</h2>
          <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800">
            Register your company
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
                <div className="space-y-1">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subcategory.link}
                      className="block text-gray-600 hover:text-gray-800 text-sm"
                    >
                      {subcategory.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

