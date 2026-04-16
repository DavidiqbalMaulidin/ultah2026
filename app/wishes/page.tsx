"use client"

import { Navigation } from "@/components/navigation"
import { FloatingHearts } from "@/components/floating-hearts"
import { motion } from "framer-motion"
import { Heart, Star, Sparkles, Sun, Moon, Cloud, Flower2, Music } from "lucide-react"

const wishes = [
  {
    icon: Star,
    title: "Semoga Bahagia Selalu",
    message: "Aku berharap setiap hari yang kamu jalani dipenuhi dengan kebahagiaan dan tawa. Semoga senyummu tidak pernah pudar.",
    color: "from-primary/20 to-accent/20",
  },
  {
    icon: Heart,
    title: "Cinta Yang Tulus",
    message: "Terima kasih sudah hadir dalam hidupku. Kehadiranmu adalah anugerah terindah yang pernah kumiliki.",
    color: "from-accent/20 to-primary/20",
  },
  {
    icon: Sun,
    title: "Mimpi Yang Tercapai",
    message: "Semoga semua mimpi dan harapanmu di tahun ini dan seterusnya bisa terwujud. Aku akan selalu mendukungmu.",
    color: "from-primary/20 to-accent/20",
  },
  {
    icon: Moon,
    title: "Ketenangan Hati",
    message: "Di setiap malam yang gelap, semoga hatimu selalu dipenuhi kedamaian dan ketenangan.",
    color: "from-accent/20 to-primary/20",
  },
  {
    icon: Cloud,
    title: "Kesehatan Yang Prima",
    message: "Semoga kamu selalu diberikan kesehatan yang baik agar bisa terus mengejar semua impianmu.",
    color: "from-primary/20 to-accent/20",
  },
  {
    icon: Flower2,
    title: "Berkah Yang Melimpah",
    message: "Semoga rezeki dan berkah selalu mengalir dalam hidupmu. Kamu layak mendapatkan yang terbaik.",
    color: "from-accent/20 to-primary/20",
  },
  {
    icon: Music,
    title: "Kebahagiaan Dalam Setiap Langkah",
    message: "Semoga setiap langkah yang kamu ambil membawamu ke tempat yang lebih baik dan penuh kebahagiaan.",
    color: "from-primary/20 to-accent/20",
  },
  {
    icon: Sparkles,
    title: "Kamu Istimewa",
    message: "Jangan pernah lupa bahwa kamu adalah seseorang yang sangat istimewa. Aku bersyukur memilikimu.",
    color: "from-accent/20 to-primary/20",
  },
]

export default function WishesPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <FloatingHearts />
      <Navigation />

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
            <Heart className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Ucapan Spesial</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Doa dan Harapan
            <span className="block text-primary mt-2">Untukmu, sayang</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Setiap kata di sini berasal dari hatiku yang terdalam. 
            Semoga kamu merasakan betapa berartinya dirimu bagiku.
          </motion.p>
        </motion.div>
      </section>

      {/* Wishes Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wishes.map((wish, index) => (
              <motion.div
                key={wish.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${wish.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity`} />
                <div className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />

                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <wish.icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {wish.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {wish.message}
                  </p>

                  {/* Animated hearts */}
                  <motion.div
                    animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                    className="absolute bottom-4 right-4"
                  >
                    <Heart className="w-6 h-6 text-primary/30 fill-current" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Message */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-card via-card/80 to-card/60 border border-border/50 rounded-3xl p-8 md:p-12 text-center overflow-hidden">
            {/* Animated sparkles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-8 left-8"
            >
              <Sparkles className="w-8 h-8 text-primary/30" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-8 right-8"
            >
              <Sparkles className="w-8 h-8 text-primary/30" />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Heart className="w-16 h-16 text-primary fill-current" />
            </motion.div>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Yang Paling Penting...
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Di atas semua doa dan harapan itu, yang paling kuinginkan adalah 
              kamu selalu bahagia. Apapun yang terjadi, aku akan selalu ada 
              untukmu. Selamat ulang tahun, Ghita sayang.
            </p>
            <p className="text-primary font-serif text-xl italic">
              - Dengan Segenap Cinta
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
