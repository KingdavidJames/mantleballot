"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function VoicesWebsite() {
  const [currentStory, setCurrentStory] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const workCards = [
    {
      id: "01",
      title: "Community Health Outreach",
      description: "Bringing medical services directly to underserved communities.",
      image: "/placeholder.svg?height=200&width=300",
      bgColor: "bg-lime-400",
    },
    {
      id: "02",
      title: "Women & Children's Health",
      description: "Focused care for maternal wellness and child health development.",
      image: "/placeholder.svg?height=200&width=300",
      bgColor: "bg-stone-200",
    },
    {
      id: "03",
      title: "Health Education & Awareness",
      description: "Building awareness to change lives and challenge traditional health myths.",
      image: "/placeholder.svg?height=200&width=300",
      bgColor: "bg-stone-200",
    },
  ]

  const stats = [
    { number: "1000+", label: "lives touched" },
    { number: "60+", label: "communities served" },
    { number: "50+", label: "medical and health volunteers" },
    { number: "2", label: "transformative projects and growing" },
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-stone-50 px-4 py-4 md:px-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
            <span className="text-teal-700 font-semibold text-lg">voices</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
              Project
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
              Training
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
              Contact Us
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 py-12 md:px-8 lg:py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-teal-700 leading-tight">
              Every Voice Deserves to Be Heard. Every Life Deserves to Be Nurtured.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-lime-400 text-black hover:bg-lime-500 px-8 py-3 rounded-none font-medium">
                Explore our Projects
              </Button>
              <Button variant="ghost" className="text-teal-700 hover:text-teal-800 px-8 py-3 rounded-none font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/hero-image.jpg"
                alt="Community members smiling"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-lime-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work in Action */}
      <section className="px-4 py-16 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-teal-700 mb-2">Our Work in Action</h2>
              <p className="text-gray-600">Explore the pillars of our mission and see each impact.</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="rounded-full border-gray-300">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-300">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {workCards.map((card, index) => (
              <Card
                key={card.id}
                className={`overflow-hidden border-0 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`${card.bgColor} p-6 h-32 flex flex-col justify-between`}>
                  <span className="text-sm text-gray-600">{card.id}</span>
                  <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{card.description}</p>
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-teal-700 px-4 py-16 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-light mb-4">Real Impact. Real Lives.</h2>
              <p className="text-teal-200 mb-8">Here's what your support helps us achieve.</p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-700 rounded-none"
              >
                Connect to Donate <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-light text-lime-400 mb-2">{stat.number}</div>
                  <div className="text-teal-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stories of Change */}
      <section className="px-4 py-16 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-teal-700 mb-2">Stories of Change</h2>
              <p className="text-gray-600">Real-life details of our life changing projects</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="rounded-full border-gray-300">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-300">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="relative h-96 md:h-80">
              <Image src="/placeholder.svg?height=400&width=800" alt="ENCASE project" fill className="object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="text-sm opacity-80">01</span>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">ENCASE project</h3>
                <p className="text-sm opacity-90 mb-6 max-w-md">
                  Ending Child Marriage and other harmful practices in Nigeria through community engagement and
                  empowerment. This project has reached over 500 girls and women in rural communities.
                </p>
                <Button className="bg-lime-400 text-black hover:bg-lime-500 rounded-none">Read More</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-lime-400 px-4 py-16 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-12">Contact Us</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <Input className="border-0 bg-white rounded-none h-12" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <Input type="email" className="border-0 bg-white rounded-none h-12" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <Textarea className="border-0 bg-white rounded-none min-h-32" />
            </div>
            <Button className="bg-teal-700 text-white hover:bg-teal-800 px-8 py-3 rounded-none">Submit</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-700 text-white px-4 py-12 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                <span className="font-semibold text-lg">voices</span>
              </div>
              <p className="text-teal-200 text-sm leading-relaxed">
                Voices is a nonprofit healthcare organization dedicated to improving health outcomes in underserved
                communities. Together, we can create lasting change and save lives.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-teal-200">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get in Touch</h4>
              <ul className="space-y-2 text-sm text-teal-200">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Donate
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors cursor-pointer">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors cursor-pointer">
                  <span className="text-xs">in</span>
                </div>
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors cursor-pointer">
                  <span className="text-xs">t</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-teal-600 pt-8 text-center text-sm text-teal-200">
            <p>&copy; 2024 Voices. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
