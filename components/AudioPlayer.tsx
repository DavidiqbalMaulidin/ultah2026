"use client"

import { useEffect } from "react"

let audio: HTMLAudioElement | null = null

export default function AudioPlayer() {
  useEffect(() => {
    // bikin audio cuma sekali
    if (!audio) {
      audio = new Audio("/lagu.mp3")
      audio.loop = true
    }

    const playAudio = () => {
      audio?.play().catch(() => {})
      document.removeEventListener("click", playAudio)
    }

    document.addEventListener("click", playAudio)

    return () => {
      document.removeEventListener("click", playAudio)
    }
  }, [])

  return null
}

// helper buat control dari luar
export function getAudio() {
  return audio
}