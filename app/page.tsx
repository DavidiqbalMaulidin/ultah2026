"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BirthdayCountdown } from "@/components/birthday-countdown"
import { FloatingHearts } from "@/components/floating-hearts"
import { SparkleEffect } from "@/components/sparkle-effect"
import { motion } from "framer-motion"
import { Heart, Stars, Cake, Gift } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Heart,
    title: "Cinta Yang Tulus",
    description: "Setiap moment bersamamu adalah kenangan indah yang tak terlupakan",
    href: "/wishes",
  },
  {
    icon: Stars,
    title: "Mimpi Bersama",
    description: "Semoga semua harapan dan impianmu tercapai di tahun ini",
    href: "/memories",
  },
  {
    icon: Cake,
    title: "Hari Spesial",
    description: "Merayakan kehadiranmu yang membuat hidupku lebih bermakna",
    href: "/wishes",
  },
  {
    icon: Gift,
    title: "Hadiah Untukmu",
    description: "Ada sesuatu yang spesial menunggumu di sini",
    href: "/gift",
  },
]

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">


      <FloatingHearts />
      <SparkleEffect />
      <Navigation />
      
      <HeroSection />
      <BirthdayCountdown />

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Sesuatu Yang Spesial
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Klik setiap kartu untuk menemukan kejutan yang sudah kusiapkan untukmu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link key={feature.title} href={feature.href}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 cursor-pointer overflow-hidden"
                >
                  {/* Hover gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                    >
                      <feature.icon className="w-7 h-7 text-primary" />
                    </motion.div>

                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom glow */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative bg-card/40 backdrop-blur-md border border-border/30 rounded-3xl p-8 md:p-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -left-6 text-primary/30"
            >
              <Stars className="w-12 h-12" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -right-6 text-primary/30"
            >
              <Stars className="w-12 h-12" />
            </motion.div>

            <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed mb-6">
              {'"'}Kamu adalah alasan kenapa aku percaya bahwa hal-hal indah masih ada di dunia ini{'"'}
            </blockquote>
            <p className="text-primary font-medium">— Untukmu, Ghita</p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-border/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made by @Daveeed_Iqbaaal for Ghita
          </p>
        </motion.div>
      </footer>
    </main>
  )
}