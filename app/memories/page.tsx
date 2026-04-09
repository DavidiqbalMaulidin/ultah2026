"use client"

import { Navigation } from "@/components/navigation"
import { SparkleEffect } from "@/components/sparkle-effect"
import { motion } from "framer-motion"
import { Heart, Camera, Calendar, MapPin, Star, Sparkles, ImageIcon } from "lucide-react"
import Image from "next/image"

const photos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-06%20at%2019.02.12-t1RREIFUch3Tmt254Q0Ztg1oZ9JTvU.jpeg",
    alt: "Foto romantis berdua di hujan",
    caption: "Bersama dalam hujan",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-06%20at%2019.02.12%20%281%29-xXE751JbEaXpBMQzmLejK7KUYDMAcd.jpeg",
    alt: "Momen lucu bersama",
    caption: "Tawa dan kebahagiaan",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-06%20at%2019.02.13-kMXlWCa2S1WNCskX8PFxQrrh3eaxNs.jpeg",
    alt: "Senyum bahagia berdua",
    caption: "Senyum terindah",
  },
]

const memories = [
  {
    title: "Pertama Kali Bertemu",
    date: "Hari Yang Tak Terlupakan",
    description: "Saat mata kita pertama kali bertemu, aku tahu ada sesuatu yang istimewa tentangmu. Moment itu mengubah segalanya.",
    icon: Heart,
  },
  {
    title: "Kencan Pertama",
    date: "Moment Indah",
    description: "Dari senyum gugupmu hingga tawa lepasmu, semuanya membuatku semakin jatuh cinta padamu.",
    icon: Calendar,
  },
  {
    title: "Tempat Favorit Kita",
    date: "Alam kitchen",
    description: "Tetapi di mana pun kita berada, selama bersamamu, itu adalah tempat terbaik di dunia.",
    icon: MapPin,
  },
  {
    title: "Momen Bahagia",
    date: "Selalu",
    description: "Tertawa bersama, menangis bersama, semua momen itu menjadikan kita lebih kuat.",
    icon: Star,
  },
  {
    title: "Masa Depan Kita",
    date: "Selamanya",
    description: "Aku tidak sabar untuk menciptakan lebih banyak kenangan indah bersamamu.",
    icon: Sparkles,
  },
]

const reasons = [
  "Senyummu yang bisa menerangi hari tergelap",
  "Caramu tertawa yang sangat menular",
  "Kebaikan hatimu yang tulus",
  "Semangatmu yang tidak pernah padam",
  "Cara kamu selalu ada saat aku butuhkan",
  "Pelukan hangatmu yang menenangkan",
  "Dukunganmu yang tidak pernah habis",
  "Cintamu yang membuatku lebih baik",
]

export default function MemoriesPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <SparkleEffect />
      <Navigation />

      <audio autoPlay loop>
        <source src="/lagu.mp3" type="audio/mpeg" />
      </audio>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
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
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Kenangan Indah</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Cerita Kita
            <span className="block text-primary mt-2">Bersama</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Setiap momen bersamamu adalah cerita yang ingin kuceritakan selamanya.
          </motion.p>
        </motion.div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6"
            >
              <ImageIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Galeri Foto</span>
            </motion.div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Momen <span className="text-primary">Berharga</span> Kita
            </h2>
            <p className="text-muted-foreground">
              Setiap foto menyimpan sejuta cerita indah
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.03, y: -10 }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-border/50 group-hover:border-primary/50 transition-colors duration-300">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Caption */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <p className="text-foreground font-serif text-lg text-center">
                      {photo.caption}
                    </p>
                  </motion.div>
                </div>
                
                {/* Heart decoration */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg"
                >
                  <Heart className="w-4 h-4 text-primary-foreground fill-current" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Memories Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {memories.map((memory, index) => (
              <motion.div
                key={memory.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"
                />

                {/* Content card */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 relative overflow-hidden"
                  >
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                      >
                        <memory.icon className="w-6 h-6 text-primary" />
                      </motion.div>

                      <span className="text-xs text-primary font-medium uppercase tracking-wider">
                        {memory.date}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-foreground mt-1 mb-2">
                        {memory.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {memory.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons I Love You */}
      <section className="py-20 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Alasan Kenapa Aku <span className="text-primary">Mencintaimu</span>
            </h2>
            <p className="text-muted-foreground">
              Sebenarnya ada jutaan alasan, tapi ini beberapa favoritku
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="relative bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl p-4 h-full">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.2 
                    }}
                    className="absolute top-3 right-3"
                  >
                    <Heart className="w-4 h-4 text-primary/50 fill-current" />
                  </motion.div>
                  
                  <span className="text-3xl font-serif font-bold text-primary/20 block mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {reason}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Love Letter */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-card via-card/90 to-card/70 border border-border/50 rounded-3xl p-8 md:p-12">
            {/* Paper texture effect */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPC9zdmc+')] opacity-50 rounded-3xl" />

            <div className="relative z-10">
              <div className="text-center mb-8">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-12 h-12 text-primary fill-current mx-auto" />
                </motion.div>
              </div>

              <p className="text-foreground/90 leading-loose text-center font-serif text-lg italic">
                {'"'}Setiap hari bersamamu adalah hadiah. Setiap tawa yang kita bagi adalah 
                musik terindah. Setiap kenangan yang kita ciptakan adalah harta yang tak 
                ternilai. Terima kasih telah menjadi bagian terpenting dalam hidupku. 
                Aku tidak bisa membayangkan hidup tanpamu.{'"'}
              </p>

              <div className="text-center mt-8">
                <p className="text-primary font-medium">
                  Dengan Segenap Cinta,
                </p>
                <p className="text-foreground font-serif text-xl mt-2">
                  Untukmu, Sayangku
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
