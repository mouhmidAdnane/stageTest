'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/Header"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MessageCircle, Share2, MoreHorizontal, Search, Filter } from 'lucide-react'

export default function SocialFeedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      <Header />
      <div className="sticky top-0 z-50  border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search..." 
                className="pl-10 pr-4"
              />
            </div>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <Button size="sm">Search</Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Companies */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Most followed companies</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'GO AFRICA ONLINE - GAO', type: 'Communication Agency' },
                  { name: 'BNI BANQUE', type: 'Banking' },
                  { name: 'KANAL FM', type: 'Media' },
                  { name: 'CORIS BANK', type: 'Banking' },
                  { name: 'Saham', type: 'Insurance' },
                ].map((company, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${company.name[0]}`} />
                      <AvatarFallback>{company.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-sm">{company.name}</h3>
                      <p className="text-xs text-gray-500">{company.type}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-6 space-y-6">
            {/* Text Post */}
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Jean Dupont</h3>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">Posted 2 hours ago</p>
                </div>
              </CardHeader>
              <CardContent>
                <p>Looking for talented professionals in digital marketing! Great opportunity for someone passionate about growth and innovation.</p>
              </CardContent>
              <CardFooter className="flex gap-4 text-gray-500 text-sm">
                <Button variant="ghost" size="sm" className="flex gap-1">
                  <Heart className="h-4 w-4" />
                  <span>Like</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex gap-1">
                  <MessageCircle className="h-4 w-4" />
                  <span>Comment</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex gap-1">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </CardFooter>
            </Card>

            {/* Image Post */}
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>AG</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Agri Solutions</h3>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">Posted 4 hours ago</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Discover our new agricultural training programs! 🌱</p>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Agricultural training"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex gap-4 text-gray-500 text-sm">
                <Button variant="ghost" size="sm" className="flex gap-1">
                  <Heart className="h-4 w-4" />
                  <span>Like</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex gap-1">
                  <MessageCircle className="h-4 w-4" />
                  <span>Comment</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex gap-1">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </CardFooter>
            </Card>

            {/* Infographic Post */}
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>GO</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Go Africa Online</h3>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">Posted 6 hours ago</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Understanding Scalability in Business 📈</p>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=600&width=600"
                    alt="Scalability infographic"
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex gap-4 text-gray-500 text-sm">
                <Button variant="ghost" size="sm" className="flex gap-1">
                  <Heart className="h-4 w-4" />
                  <span>Like</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex gap-1">
                  <MessageCircle className="h-4 w-4" />
                  <span>Comment</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex gap-1">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Right Sidebar - Professionals */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Most followed professionals</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'KOFFI EDOU', role: 'Digital Marketing Manager', location: 'Côte d\'Ivoire' },
                  { name: 'Martial KOUAME', role: 'Product Manager', location: 'Côte d\'Ivoire' },
                  { name: 'Kra DANDE', role: 'HR Director', location: 'Côte d\'Ivoire' },
                  { name: 'Elon ASSINTI', role: 'Project Manager', location: 'Côte d\'Ivoire' },
                  { name: 'KOFFI PROSPER', role: 'Sales Director', location: 'Côte d\'Ivoire' },
                ].map((professional, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${professional.name[0]}`} />
                      <AvatarFallback>{professional.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-sm">{professional.name}</h3>
                      <p className="text-xs text-gray-500">{professional.role}</p>
                      <p className="text-xs text-gray-400">{professional.location}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

