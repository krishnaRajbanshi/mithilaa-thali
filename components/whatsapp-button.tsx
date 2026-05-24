"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "9761041597"
  const message = "Hello! I would like to know more about Mithila Thali Biratnagar."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline font-medium">Chat with us</span>
      </Link>
    </motion.div>
  )
}
