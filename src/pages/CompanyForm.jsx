'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ImagePlus, Plus, X } from 'lucide-react'
import { useState } from "react"
import Header from "@/components/Header"

export default function CompanyRegistrationForm() {
  const [phones, setPhones] = useState([''])
  const [socials, setSocials] = useState([''])

  const addPhone = () => setPhones([...phones, ''])
  const removePhone = (index) => {
    const newPhones = phones.filter((_, i) => i !== index)
    setPhones(newPhones)
  }

  const addSocial = () => setSocials([...socials, ''])
  const removeSocial = (index) => {
    const newSocials = socials.filter((_, i) => i !== index)
    setSocials(newSocials)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">

      <Header />
     
      <div className="container max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold">Inscription d&apos;une société</h1>
          <p className="mt-2 text-muted-foreground">
            Go Africa Online permet aux sociétés inscrites de gagner en visibilité auprès de nos visiteurs.
            Mieux vous renseignez votre fiche, et plus facilement les prospects et clients la trouveront.
          </p>
          <p className="text-muted-foreground">
            Nous vous conseillons donc de remplir votre fiche le plus soigneusement possible et d&apos;y renseigner un maximum d&apos;informations.
          </p>
        </div>

        <Card className="p-6">
          <form className="space-y-8">
            {/* Banner Upload */}
            <div className="relative aspect-[3/1] w-full overflow-hidden rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
              <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-2">
                <ImagePlus className="h-8 w-8 text-gray-400" />
                <span className="text-sm text-gray-500">Ajouter une bannière de profil pour votre société</span>
                <span className="text-xs text-gray-400">(2400x800)</span>
                <input type="file" className="hidden" accept="image/*" />
              </label>
            </div>

            {/* Logo Upload */}
            <div className="relative h-32 w-32 overflow-hidden rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
              <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-1">
                <ImagePlus className="h-6 w-6 text-gray-400" />
                <span className="text-center text-xs text-gray-500">Logo</span>
                <span className="text-center text-[10px] text-gray-400">Fichiers acceptés: jpg, png</span>
                <span className="text-center text-[10px] text-gray-400">Poids max: 2 Mo</span>
                <input type="file" className="hidden" accept="image/*" />
              </label>
            </div>

            {/* Company Details */}
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="company">Nom de la société*</Label>
                <Input id="company" placeholder="Le nom de votre société" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email de contact de la société*</Label>
                <Input id="email" type="email" placeholder="exemple@email.com" />
              </div>

              {/* Phone Numbers */}
              <div className="grid gap-2">
                <Label>Coordonnées*</Label>
                <p className="text-xs text-muted-foreground">
                  Merci de renseigner au minimum un numéro de téléphone fixe ou cellulaire.
                </p>
                {phones.map((phone, index) => (
                  <div key={index} className="flex gap-2">
                    <Select>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Téléphone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mobile">Mobile</SelectItem>
                        <SelectItem value="fixed">Fixe</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Coordonnée" />
                    {phones.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removePhone(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button type="button" variant="outline" className="w-fit" onClick={addPhone}>
                  <Plus className="mr-2 h-4 w-4" />
                  Ajouter
                </Button>
              </div>

              {/* Social Media */}
              <div className="grid gap-2">
                <Label>Site internet et réseaux sociaux</Label>
                {socials.map((social, index) => (
                  <div key={index} className="flex gap-2">
                    <Select>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Facebook" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="twitter">Twitter</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="website">Site web</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Lien" />
                    {socials.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeSocial(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button type="button" variant="outline" className="w-fit" onClick={addSocial}>
                  <Plus className="mr-2 h-4 w-4" />
                  Ajouter
                </Button>
              </div>

              {/* Address */}
              <div className="grid gap-2">
                <Label htmlFor="address">Adresse*</Label>
                <Input id="address" placeholder="Adresse de votre société" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="country">Pays*</Label>
                  <Select>
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Sélectionnez un pays" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morocco">Maroc</SelectItem>
                      <SelectItem value="algeria">Algérie</SelectItem>
                      <SelectItem value="tunisia">Tunisie</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="city">Ville*</Label>
                  <Select>
                    <SelectTrigger id="city">
                      <SelectValue placeholder="Sélectionnez une ville" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casablanca">Casablanca</SelectItem>
                      <SelectItem value="rabat">Rabat</SelectItem>
                      <SelectItem value="marrakech">Marrakech</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="sector">Secteur d&apos;activité*</Label>
                <Select>
                  <SelectTrigger id="sector">
                    <SelectValue placeholder="Sélectionnez un secteur" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technologie</SelectItem>
                    <SelectItem value="retail">Commerce</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description courte*</Label>
                <Textarea id="description" placeholder="Décrivez votre société" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="needs">Quels sont vos enjeux et vos besoins en communication?</Label>
                <Textarea id="needs" placeholder="Décrivez vos besoins" />
              </div>
            </div>

            <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
              Inscrire la société
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}

