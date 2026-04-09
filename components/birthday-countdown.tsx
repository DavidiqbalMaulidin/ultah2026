"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function BirthdayCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Birthday date: April 17, 2026
    const birthday = new Date(2026, 3, 17) // Month is 0-indexed, so 3 = April
    birthday.setHours(0, 0, 0, 0)
    
    const timer = setInterval(() => {
      const now = new Date()
      const diff = birthday.getTime() - now.getTime()

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeBlocks = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ]

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Menuju 17 April 2026
        </h2>
        <p className="text-muted-foreground mb-2">
          Merayakan momen spesialmu memasuki usia ke-20
        </p>
        <p className="text-primary font-medium text-lg mb-10">
          Selamat datang di kepala 2!
        </p>

        <div className="grid grid-cols-4 gap-3 md:gap-6">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-4 md:p-6"
              >
                <motion.span
                  key={block.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="block font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-primary"
                >
                  {String(block.value).padStart(2, "0")}
                </motion.span>
                <span className="text-xs md:text-sm text-muted-foreground mt-2 block">
                  {block.label}
                </span>
              </motion.div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl -z-10" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
