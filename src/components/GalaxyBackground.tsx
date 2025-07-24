"use client"

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export default function GalaxyBackground() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!mountRef.current) return

    try {
      // Scene setup
      const scene = new THREE.Scene()
      sceneRef.current = scene

      // Camera setup
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      camera.position.z = 5

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true 
      })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0x000000, 0)
      rendererRef.current = renderer
      mountRef.current.appendChild(renderer.domElement)

      // Create simple starfield (small smooth points only)
      const starsGeometry = new THREE.BufferGeometry()
      const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.5,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
      })

      const starsVertices = []
      for (let i = 0; i < 3000; i++) {
        const x = (Math.random() - 0.5) * 2000
        const y = (Math.random() - 0.5) * 2000
        const z = (Math.random() - 0.5) * 2000
        starsVertices.push(x, y, z)
      }

      starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3))
      const stars = new THREE.Points(starsGeometry, starsMaterial)
      scene.add(stars)

      // Create simple galaxy spiral (very subtle, no cubes)
      const galaxyGeometry = new THREE.BufferGeometry()
      const galaxyMaterial = new THREE.PointsMaterial({
        color: 0x3b82f6,
        size: 0.3,
        transparent: true,
        opacity: 0.4,
        sizeAttenuation: true
      })

      const galaxyVertices = []
      
      for (let i = 0; i < 1500; i++) {
        const angle = Math.random() * Math.PI * 2
        const radius = Math.random() * 100 + 30
        const spiralAngle = angle + radius * 0.03
        
        const x = Math.cos(spiralAngle) * radius
        const y = (Math.random() - 0.5) * 5
        const z = Math.sin(spiralAngle) * radius
        
        galaxyVertices.push(x, y, z)
      }

      galaxyGeometry.setAttribute('position', new THREE.Float32BufferAttribute(galaxyVertices, 3))
      const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial)
      scene.add(galaxy)

      // Create a few simple planets (spheres only)
      const planets: THREE.Mesh[] = []
      const planetData = [
        { size: 0.4, color: 0x3b82f6, position: [20, 8, -30] },
        { size: 0.3, color: 0x1e40af, position: [-25, -12, -40] },
        { size: 0.35, color: 0x60a5fa, position: [30, -8, -50] }
      ]
      
      planetData.forEach((data) => {
        const planetGeometry = new THREE.SphereGeometry(data.size, 16, 16)
        const planetMaterial = new THREE.MeshBasicMaterial({
          color: data.color,
          transparent: true,
          opacity: 0.6
        })
        const planet = new THREE.Mesh(planetGeometry, planetMaterial)
        planet.position.set(data.position[0], data.position[1], data.position[2])
        scene.add(planet)
        planets.push(planet)
      })

      // Simple ambient lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
      scene.add(ambientLight)

      // Fade in effect
      let fadeOpacity = 0
      const fadeInDuration = 2000
      const startTime = Date.now()

      // Simple animation loop
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate)

        const time = Date.now() * 0.001
        const elapsed = Date.now() - startTime

        // Fade in effect
        if (elapsed < fadeInDuration) {
          fadeOpacity = elapsed / fadeInDuration
          starsMaterial.opacity = 0.8 * fadeOpacity
          galaxyMaterial.opacity = 0.4 * fadeOpacity
        } else if (!isLoaded) {
          setIsLoaded(true)
        }

        // Slow star rotation
        stars.rotation.y += 0.0002
        
        // Slow galaxy rotation
        galaxy.rotation.y += 0.0005

        // Simple planet rotation
        planets.forEach((planet, index) => {
          planet.rotation.y += 0.005 + index * 0.002
          planet.rotation.x += 0.003 + index * 0.001
        })

        // Minimal camera movement
        camera.position.x = Math.sin(time * 0.02) * 0.3
        camera.position.y = Math.cos(time * 0.025) * 0.2

        renderer.render(scene, camera)
      }

      animate()

      // Handle window resize
      const handleResize = () => {
        if (!camera || !renderer) return
        
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener('resize', handleResize)

      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize)
        
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current)
        }
        
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement)
        }
        
        // Dispose of Three.js objects
        scene.traverse((object: THREE.Object3D) => {
          if (object instanceof THREE.Mesh) {
            if (object.geometry) object.geometry.dispose()
            if (Array.isArray(object.material)) {
              object.material.forEach((material: THREE.Material) => material.dispose())
            } else if (object.material) {
              object.material.dispose()
            }
          }
          if (object instanceof THREE.Points) {
            if (object.geometry) object.geometry.dispose()
            if (object.material) object.material.dispose()
          }
        })
        
        renderer.dispose()
      }
    } catch (error) {
      console.error('Error initializing Three.js scene:', error)
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      className={`fixed inset-0 -z-10 pointer-events-none transition-opacity duration-2000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ zIndex: -1 }}
    />
  )
}
