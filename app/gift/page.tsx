"use client"

import { Navigation } from "@/components/navigation"
import { FloatingHearts } from "@/components/floating-hearts"
import { SparkleEffect } from "@/components/sparkle-effect"
import { motion, AnimatePresence } from "framer-motion"
import { Gift, Heart, Sparkles, Star, PartyPopper, Music, Cake } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import confetti from "canvas-confetti"
import Image from "next/image"

export default function GiftPage() {
  const [isOpened, setIsOpened] = useState(false)
  const [showFinalMessage, setShowFinalMessage] = useState(false)

  const handleOpenGift = () => {
    setIsOpened(true)
    
    // Trigger confetti
    const duration = 3000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 }

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        clearInterval(interval)
        return
      }

      const particleCount = 50 * (timeLeft / duration)
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ec4899', '#f472b6', '#db2777', '#be185d', '#ffffff'],
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ec4899', '#f472b6', '#db2777', '#be185d', '#ffffff'],
      })
    }, 250)

    setTimeout(() => {
      setShowFinalMessage(true)
    }, 2000)
  }

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <FloatingHearts />
      <SparkleEffect />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6"
          >
            <Gift className="w-4 h-4" />
            <span className="text-sm font-medium">Hadiah Spesial</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Ada Sesuatu
            <span className="block text-primary mt-2">Untukmu</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Aku sudah menyiapkan sesuatu yang spesial. Klik untuk membukanya!
          </motion.p>
        </motion.div>
      </section>

      {/* Gift Box Section */}
      <section className="py-10 px-4 min-h-[60vh] flex items-center justify-center">
        <div className="relative">
          <AnimatePresence mode="wait">
            {!isOpened ? (
              <motion.div
                key="closed-gift"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0, rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Gift Box */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [-2, 2, -2]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative cursor-pointer group"
                  onClick={handleOpenGift}
                >
                  {/* Glow effect */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-primary/30 rounded-3xl blur-3xl"
                  />

                  {/* Gift box */}
                  <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary via-accent to-primary rounded-3xl flex items-center justify-center border-4 border-primary-foreground/20 shadow-2xl group-hover:scale-105 transition-transform">
                    {/* Ribbon vertical */}
                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-12 bg-primary-foreground/30" />
                    {/* Ribbon horizontal */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-12 bg-primary-foreground/30" />
                    {/* Bow */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="relative">
                          <div className="w-16 h-16 bg-primary-foreground rounded-full" />
                          <div className="absolute -left-8 top-4 w-12 h-8 bg-primary-foreground rounded-full rotate-45" />
                          <div className="absolute -right-8 top-4 w-12 h-8 bg-primary-foreground rounded-full -rotate-45" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Question mark */}
                    <span className="text-6xl md:text-8xl font-serif text-primary-foreground/80">?</span>
                  </div>

                  {/* Floating particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-primary"
                      style={{
                        top: "30%",
                        left: "50%",
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    >
                      <Sparkles className="w-6 h-6" />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-10"
                >
                  <Button
                    onClick={handleOpenGift}
                    size="lg"
                    className="text-lg px-10 py-7 rounded-full group"
                  >
                    <Gift className="w-6 h-6 mr-2 group-hover:animate-bounce" />
                    Buka Hadiah
                  </Button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="opened-gift"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="text-center max-w-3xl mx-auto"
              >
                {/* Celebration icons */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-center gap-4 mb-8"
                >
                  {[PartyPopper, Cake, Music, Star, Heart].map((Icon, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        delay: i * 0.2 
                      }}
                      className="text-primary"
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Main message */}
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
                >
                  <motion.span
                    animate={{ 
                      textShadow: [
                        "0 0 20px rgba(236, 72, 153, 0.5)",
                        "0 0 60px rgba(236, 72, 153, 0.8)",
                        "0 0 20px rgba(236, 72, 153, 0.5)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-primary"
                  >
                    Selamat Ulang Tahun ya
                  </motion.span>
                </motion.h2>

                <AnimatePresence>
                  {showFinalMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                    <motion.h3
                      className="font-serif text-2xl md:text-3xl text-foreground mb-6"
                    >
                      Sayangkuu!!!
                    </motion.h3>

<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1.03 }}
  transition={{
    delay: 0.3,
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  }}
  className="mb-6 flex justify-center transform-gpu"
>
  {/* OUTER RGB FRAME (yang muter) */}
  <div className="relative p-[4px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-spin-slow">
    
    {/* INNER FIXED LAYER */}
    <div className="bg-background rounded-2xl p-[4px]">
      
      {/* IMAGE WRAPPER (NO ANIMASI BIAR GAK KEDIP) */}
      <div className="rounded-2xl overflow-hidden shadow-[0_0_45px_rgba(236,72,153,0.75)]">
        <Image
          src="/memories/romantis/foto6.jpg"
          alt="Foto sayangku"
          width={250}
          height={300}
          className="object-cover rounded-2xl"
          priority
          unoptimized
        />
      </div>

    </div>
  </div>
</motion.div>
                                        

                      <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 mb-8">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="mb-6"
                        >
                          <Heart className="w-16 h-16 text-primary fill-current mx-auto" />
                        </motion.div>

                        <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                          Hadiah terbesar yang bisa kuberikan adalah janji bahwa aku akan 
                          selalu ada untukmu, menemanimu dalam suka dan duka, mendukung 
                          setiap mimpimu, dan mencintaimu dengan segenap hatiku.
                        </p>

                        <p className="text-muted-foreground">
                          Semoga tahun ini membawa lebih banyak kebahagiaan, kesuksesan, 
                          dan momen indah dalam hidupmu. Aku sangat bersyukur memilikimu.
                        </p>
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-primary font-serif text-xl"
                      >
                        <p>Dengan Segenap Cinta,</p>
                        <motion.p
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-2xl mt-2"
                        >
                          - Seseorang yang sangat mencintaimu -
                        </motion.p>
                      </motion.div>

                      {/* Hearts animation */}
                      <div className="flex justify-center gap-2 mt-8">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              y: [0, -15, 0],
                              scale: [1, 1.2, 1]
                            }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity,
                              delay: i * 0.2 
                            }}
                          >
                            <Heart className="w-6 h-6 text-primary fill-current" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  )
}
