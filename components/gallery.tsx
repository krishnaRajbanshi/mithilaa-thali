"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    id: 1,
    title: "Traditional Mithila Thali",
    category: "Food",
  },
  {
    id: 2,
    title: "Restaurant Interior",
    category: "Interior",
  },
  {
    id: 3,
    title: "Chef Preparing Dal Pitha",
    category: "Kitchen",
  },
  {
    id: 4,
    title: "Family Dining Experience",
    category: "Experience",
  },
  {
    id: 5,
    title: "Special Desserts",
    category: "Food",
  },
  {
    id: 6,
    title: "Traditional Decorations",
    category: "Interior",
  },
  {
    id: 7,
    title: "Fresh Ingredients",
    category: "Kitchen",
  },
  {
    id: 8,
    title: "Happy Customers",
    category: "Experience",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="gallery" className="py-20 md:py-32 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            A Glimpse Inside
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a visual journey through our restaurant, food, and the memorable 
            experiences we create for our guests.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className={`relative cursor-pointer group overflow-hidden rounded-xl ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <div className={`${
                index === 0 || index === 5 ? "aspect-square" : "aspect-square"
              } bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center`}>
                <div className="text-center p-4">
                  <span className="text-4xl mb-2 block">
                    {image.category === "Food" ? "🍛" : 
                     image.category === "Interior" ? "🏠" :
                     image.category === "Kitchen" ? "👨‍🍳" : "👨‍👩‍👧‍👦"}
                  </span>
                  <span className="text-sm font-medium text-foreground/70">{image.title}</span>
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrevious()
                }}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-4xl w-full aspect-video bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-2xl flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center text-white">
                  <span className="text-6xl mb-4 block">
                    {galleryImages[selectedImage].category === "Food" ? "🍛" : 
                     galleryImages[selectedImage].category === "Interior" ? "🏠" :
                     galleryImages[selectedImage].category === "Kitchen" ? "👨‍🍳" : "👨‍👩‍👧‍👦"}
                  </span>
                  <h3 className="text-2xl font-bold">{galleryImages[selectedImage].title}</h3>
                  <p className="text-white/70">{galleryImages[selectedImage].category}</p>
                </div>
              </motion.div>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
