import React, { useEffect, useRef } from 'react'

const StarsBackground = ({ numStars = 300 }) => {
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    class Star {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5
        // slower base speeds to avoid long horizontal streaks
        this.speed = Math.random() * 0.015 + 0.005
        this.alpha = Math.random()
        this.twinkleSpeed = Math.random() * 0.02 + 0.01
        this.twinklePhase = Math.random() * Math.PI * 2
      }
      update() {
        // clamp per-frame movement so a star can't travel far in a single frame
        const dx = this.speed * (1 + this.size * 0.2)
        const clampedDx = Math.min(dx, 2.5) // pixels per frame max
        this.x -= clampedDx
        if (this.x < 0) this.x = canvas.width
        this.alpha = (Math.sin(Date.now() * this.twinkleSpeed + this.twinklePhase) + 1) / 2
      }
      draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255, ${this.alpha})`
        ctx.fill()
      }
    }

    const stars = []
    for (let i = 0; i < numStars; i++) stars.push(new Star())

    const animate = () => {
  // trail fade for gentle motion blur, use a bluish translucent so page stays blue
  // increased alpha so trails decay faster and don't form long lines
  ctx.fillStyle = 'rgba(8,24,34,0.12)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (const s of stars) {
        s.update()
        // mix color: mostly pale bluish, occasional warm gold tint based on size
        const starAlpha = Math.max(0.05, s.alpha)
        const blue = `rgba(175,210,220, ${starAlpha.toFixed(3)})`
        const gold = `rgba(207,161,107, ${starAlpha.toFixed(3) * 0.7})`
        // small stars lean bluish, larger get a warm touch
        const use = s.size > 1.2 ? gold : blue
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fillStyle = use
        ctx.fill()
      }

      animRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Pause/resume on user interaction like in the original demo
    let typing = false
    const pauseFor = 2000
    const pause = () => {
      if (!typing) {
        typing = true
        if (animRef.current) cancelAnimationFrame(animRef.current)
        setTimeout(() => {
          typing = false
          animate()
        }, pauseFor)
      }
    }

    const keyHandler = () => pause()
    const mouseHandler = () => pause()
    document.addEventListener('keydown', keyHandler)
    canvas.addEventListener('mousemove', mouseHandler)

    return () => {
      window.removeEventListener('resize', resize)
      document.removeEventListener('keydown', keyHandler)
      canvas.removeEventListener('mousemove', mouseHandler)
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [numStars])

  // The canvas is absolute, full-screen and placed behind content via low z-index
  return (
    <canvas
      ref={canvasRef}
      id="starsCanvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // allow clicks through
        zIndex: 0,
      }}
    />
  )
}

export default StarsBackground
