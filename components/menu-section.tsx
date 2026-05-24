"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  "All",
  "Mithila Thali",
  "Veg Items",
  "Non-Veg Items",
  "Snacks",
  "Drinks",
  "Desserts",
]

const menuItems = [
  // Mithila Thali
  {
    id: 1,
    name: "Special Mithila Thali",
    description: "Complete traditional thali with dal, bhaat, sabji, achar, papad & sweet",
    price: 350,
    category: "Mithila Thali",
    isVeg: true,
    popular: true,
  },
  {
    id: 2,
    name: "Royal Mithila Thali",
    description: "Premium thali with 8 items including kheer and special sabji",
    price: 500,
    category: "Mithila Thali",
    isVeg: true,
    popular: true,
  },
  {
    id: 3,
    name: "Non-Veg Mithila Thali",
    description: "Traditional thali with chicken curry, dal, rice and sides",
    price: 450,
    category: "Mithila Thali",
    isVeg: false,
  },
  // Veg Items
  {
    id: 4,
    name: "Sattu Paratha",
    description: "Traditional roasted gram flour stuffed paratha",
    price: 80,
    category: "Veg Items",
    isVeg: true,
    popular: true,
  },
  {
    id: 5,
    name: "Aloo Bhujia",
    description: "Spiced potato curry cooked in traditional style",
    price: 120,
    category: "Veg Items",
    isVeg: true,
  },
  {
    id: 6,
    name: "Chokha",
    description: "Mashed roasted vegetables with mustard oil and spices",
    price: 100,
    category: "Veg Items",
    isVeg: true,
  },
  {
    id: 7,
    name: "Dal Pitha",
    description: "Steamed rice dumplings stuffed with spiced lentils",
    price: 90,
    category: "Veg Items",
    isVeg: true,
  },
  // Non-Veg Items
  {
    id: 8,
    name: "Mithila Fish Curry",
    description: "Fresh fish cooked in traditional mustard gravy",
    price: 280,
    category: "Non-Veg Items",
    isVeg: false,
    popular: true,
  },
  {
    id: 9,
    name: "Chicken Curry",
    description: "Home-style chicken curry with aromatic spices",
    price: 250,
    category: "Non-Veg Items",
    isVeg: false,
  },
  {
    id: 10,
    name: "Mutton Curry",
    description: "Slow-cooked mutton in rich, spiced gravy",
    price: 350,
    category: "Non-Veg Items",
    isVeg: false,
  },
  // Snacks
  {
    id: 11,
    name: "Thekua",
    description: "Sweet fried cookie made with wheat flour and jaggery",
    price: 60,
    category: "Snacks",
    isVeg: true,
  },
  {
    id: 12,
    name: "Bhuja",
    description: "Crunchy puffed rice mix with spices and peanuts",
    price: 40,
    category: "Snacks",
    isVeg: true,
  },
  {
    id: 13,
    name: "Samosa",
    description: "Crispy pastry filled with spiced potatoes",
    price: 30,
    category: "Snacks",
    isVeg: true,
  },
  // Drinks
  {
    id: 14,
    name: "Masala Chai",
    description: "Traditional spiced tea with ginger and cardamom",
    price: 25,
    category: "Drinks",
    isVeg: true,
  },
  {
    id: 15,
    name: "Lassi",
    description: "Creamy yogurt drink, sweet or salted",
    price: 50,
    category: "Drinks",
    isVeg: true,
  },
  {
    id: 16,
    name: "Fresh Lime Water",
    description: "Refreshing lime drink with mint",
    price: 35,
    category: "Drinks",
    isVeg: true,
  },
  // Desserts
  {
    id: 17,
    name: "Kheer",
    description: "Creamy rice pudding with cardamom and nuts",
    price: 70,
    category: "Desserts",
    isVeg: true,
    popular: true,
  },
  {
    id: 18,
    name: "Malpua",
    description: "Sweet pancakes soaked in sugar syrup",
    price: 80,
    category: "Desserts",
    isVeg: true,
  },
  {
    id: 19,
    name: "Balushahi",
    description: "Traditional flaky sweet glazed with sugar",
    price: 50,
    category: "Desserts",
    isVeg: true,
  },
]

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="menu" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Our Menu
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Taste the Tradition
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our carefully curated menu featuring authentic Mithila dishes 
            prepared with love and traditional recipes.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 bg-card"
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group overflow-hidden">
                  <CardContent className="p-6">
                    {/* Food Image Placeholder */}
                    <div className="relative h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl">
                          {item.isVeg ? "🥗" : "🍖"}
                        </span>
                      </div>
                      {item.popular && (
                        <span className="absolute top-2 right-2 px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                      <span className={`absolute top-2 left-2 w-4 h-4 rounded-sm border-2 flex items-center justify-center ${
                        item.isVeg ? "border-green-600" : "border-red-600"
                      }`}>
                        <span className={`w-2 h-2 rounded-full ${
                          item.isVeg ? "bg-green-600" : "bg-red-600"
                        }`} />
                      </span>
                    </div>

                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-primary font-bold whitespace-nowrap">
                        Rs. {item.price}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>

                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full hover:bg-primary hover:text-primary-foreground"
                    >
                      Add to Order
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">No items found matching your search.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
