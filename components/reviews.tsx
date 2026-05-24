"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Biratnagar",
    rating: 5,
    review: "The best Mithila food I've had outside of my grandmother's kitchen! The Special Thali brings back so many memories. Highly recommended!",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Sunita Devi",
    location: "Itahari",
    rating: 5,
    review: "Amazing family atmosphere and authentic taste. The Dal Pitha is absolutely delicious. We visit every weekend now!",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Amit Jha",
    location: "Dharan",
    rating: 5,
    review: "Finally found a place that serves real Mithila cuisine! The fish curry is outstanding and the service is excellent.",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Priya Singh",
    location: "Biratnagar",
    rating: 4,
    review: "Great food and wonderful ambiance. The Sattu Paratha is a must-try! Will definitely come back again.",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Mohan Mishra",
    location: "Kathmandu",
    rating: 5,
    review: "Visited while traveling through Biratnagar. What a gem! The Royal Thali was worth every rupee. Authentic taste!",
    date: "2 months ago",
  },
  {
    id: 6,
    name: "Kavita Sharma",
    location: "Biratnagar",
    rating: 5,
    review: "The Kheer here is divine! Perfect place for family gatherings. The staff is very friendly and attentive.",
    date: "1 month ago",
  },
]

export function Reviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="reviews" className="py-20 md:py-32 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            What Our Guests Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our valued customers 
            have to say about their dining experience with us.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-3xl font-bold text-foreground">4.9</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground mb-2">500+</p>
            <p className="text-sm text-muted-foreground">Happy Reviews</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground mb-2">98%</p>
            <p className="text-sm text-muted-foreground">Would Recommend</p>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "fill-secondary text-secondary"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-foreground mb-6 leading-relaxed">
                    &quot;{testimonial.review}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location} • {testimonial.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
