"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Utensils, Users, Award, Heart } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Utensils,
      title: "Authentic Recipes",
      description: "Traditional recipes preserved for generations",
    },
    {
      icon: Users,
      title: "Family Environment",
      description: "A warm, welcoming space for everyone",
    },
    {
      icon: Award,
      title: "Quality Ingredients",
      description: "Fresh, locally sourced ingredients daily",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish crafted with passion and care",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              {/* Placeholder for restaurant image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Utensils className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-lg font-medium text-foreground">Traditional Kitchen</p>
                  <p className="text-sm text-muted-foreground">Where flavors come alive</p>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-2xl -z-10" />
            
            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-xl"
            >
              <p className="text-3xl font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              A Journey Through Mithila&apos;s Culinary Heritage
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Mithila Thali Biratnagar brings you the authentic flavors of Mithila region, 
              where every dish tells a story of tradition, culture, and love. Our recipes 
              have been passed down through generations, preserving the essence of 
              traditional Mithila cuisine.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Located in the heart of Biratnagar, we offer a family-friendly environment 
              where you can experience the warmth of Mithila hospitality along with 
              delicious, home-style cooking that will transport you to the rich cultural 
              heritage of our region.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chef Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10 p-6 bg-card rounded-xl border"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">MT</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Master Chef Team</h3>
                  <p className="text-sm text-muted-foreground">
                    Our experienced chefs bring decades of expertise in traditional Mithila cuisine
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
