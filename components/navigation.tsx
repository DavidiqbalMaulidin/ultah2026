"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Heart, Gift, MessageCircleHeart, Sparkles, Volume2, VolumeX } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { getAudio } from "@/components/AudioPlayer"

const navItems = [
  { href: "/", label: "Home", icon: Heart },
  { href: "/wishes", label: "Wishes", icon: MessageCircleHeart },
  { href: "/memories", label: "Memories", icon: Sparkles },
  { href: "/gift", label: "Gift", icon: Gift },
]

export function Navigation() {
  const pathname = usePathname()
  const [isPlaying, setIsPlaying] = useState(false)

  // 🔥 sync state sama audio asli
  useEffect(() => {
    const audio = getAudio()
    if (!audio) return

    const updateState = () => {
      setIsPlaying(!audio.paused)
    }

    audio.addEventListener("play", updateState)
    audio.addEventListener("pause", updateState)

    return () => {
      audio.removeEventListener("play", updateState)
      audio.removeEventListener("pause", updateState)
    }
  }, [])

  const toggleAudio = () => {
    const audio = getAudio()

    // 🔥 fix biar gak null error
    if (!audio) {
      console.warn("Audio belum ready")
      return
    }

    if (audio.paused) {
      audio.play().catch(() => {})
      setIsPlaying(true)
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50"
    >
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <Heart className="w-6 h-6 text-primary fill-primary" />
            </motion.div>
            <span className="font-serif text-lg font-semibold text-foreground">
              For Ghita
            </span>
          </Link>

          {/* MENU */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 md:gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon

                return (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "relative flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300",
                        isActive
                          ? "text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute inset-0 bg-primary rounded-full"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                      <Icon className="w-4 h-4 relative z-10" />
                      <span className="hidden md:block text-sm font-medium relative z-10">
                        {item.label}
                      </span>
                    </motion.div>
                  </Link>
                )
              })}
            </div>

            {/* 🔊 AUDIO BUTTON */}
            <motion.button
              onClick={toggleAudio}
              whileTap={{ scale: 0.9 }}
              className="ml-2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
            >
              {isPlaying ? (
                <Volume2 className="w-5 h-5 text-primary" />
              ) : (
                <VolumeX className="w-5 h-5 text-muted-foreground" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}