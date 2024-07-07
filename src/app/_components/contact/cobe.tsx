'use client'
import createGlobe from 'cobe'
import React, { useEffect, useRef } from 'react'

export const Earth: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 0

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 380 * 2,
      height: 380 * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 30000,
      mapBrightness: 6,
      baseColor: [1, 0.5, 3],
      markerColor: [0.1, 0.8, 1], // Customize marker color here
      glowColor: [1, 1, 2],
      opacity: 1,
      offset: [0, 0],
      markers: [
        { location: [78.9629, 20.5937], size: 0.1 },
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state: Record<string, any>) => {
        state.phi = phi
        phi += 0.003
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <div className='App flex items-center justify-center z-[10]'>
      <canvas
        ref={canvasRef}
        style={{ width: 380, height: 380, maxWidth: '100%', aspectRatio: '1' }}
      />
    </div>
  )
}
