"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function GalaxyBackground() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number | null>(null)

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

      // Create starfield
      const starsGeometry = new THREE.BufferGeometry()
      const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 2,
        transparent: true,
        opacity: 0.8
      })

      const starsVertices = []
      for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000
        const y = (Math.random() - 0.5) * 2000
        const z = (Math.random() - 0.5) * 2000
        starsVertices.push(x, y, z)
      }

      starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3))
      const stars = new THREE.Points(starsGeometry, starsMaterial)
      scene.add(stars)

      // Create galaxy spiral
      const galaxyGeometry = new THREE.BufferGeometry()
      const galaxyMaterial = new THREE.PointsMaterial({
        color: 0x9333ea,
        size: 1.5,
        transparent: true,
        opacity: 0.6
      })

      const galaxyVertices = []
      const galaxyColors = []
      
      for (let i = 0; i < 5000; i++) {
        const angle = Math.random() * Math.PI * 2
        const radius = Math.random() * 50 + 10
        const spiralAngle = angle + radius * 0.1
        
        const x = Math.cos(spiralAngle) * radius
        const y = (Math.random() - 0.5) * 10
        const z = Math.sin(spiralAngle) * radius
        
        galaxyVertices.push(x, y, z)
        
        // Color gradient from purple to white
        const color = new THREE.Color()
        color.setHSL(0.75 + Math.random() * 0.1, 0.8, 0.5 + Math.random() * 0.5)
        galaxyColors.push(color.r, color.g, color.b)
      }

      galaxyGeometry.setAttribute('position', new THREE.Float32BufferAttribute(galaxyVertices, 3))
      galaxyGeometry.setAttribute('color', new THREE.Float32BufferAttribute(galaxyColors, 3))
      
      galaxyMaterial.vertexColors = true
      const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial)
      scene.add(galaxy)

      // Create planets
      const planets: THREE.Mesh[] = []
      const glowMeshes: THREE.Mesh[] = []
      
      // Planet 1 - Purple glow
      const planet1Geometry = new THREE.SphereGeometry(0.5, 32, 32)
      const planet1Material = new THREE.MeshBasicMaterial({
        color: 0x9333ea,
        transparent: true,
        opacity: 0.8
      })
      const planet1 = new THREE.Mesh(planet1Geometry, planet1Material)
      planet1.position.set(15, 5, -20)
      scene.add(planet1)
      planets.push(planet1)

      // Planet 2 - Blue glow
      const planet2Geometry = new THREE.SphereGeometry(0.3, 32, 32)
      const planet2Material = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.7
      })
      const planet2 = new THREE.Mesh(planet2Geometry, planet2Material)
      planet2.position.set(-20, -8, -30)
      scene.add(planet2)
      planets.push(planet2)

      // Planet 3 - White glow
      const planet3Geometry = new THREE.SphereGeometry(0.4, 32, 32)
      const planet3Material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.6
      })
      const planet3 = new THREE.Mesh(planet3Geometry, planet3Material)
      planet3.position.set(25, -10, -40)
      scene.add(planet3)
      planets.push(planet3)

      // Add glow effects to planets
      planets.forEach((planet, index) => {
        const radius = (planet.geometry as THREE.SphereGeometry).parameters?.radius || 0.5
        const glowGeometry = new THREE.SphereGeometry(radius * 2, 32, 32)
        const planetMaterial = planet.material as THREE.MeshBasicMaterial
        const glowMaterial = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            color: { value: new THREE.Color(planetMaterial.color) }
          },
          vertexShader: `
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform float time;
            uniform vec3 color;
            varying vec3 vNormal;
            void main() {
              float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
              intensity *= (sin(time * 2.0) * 0.3 + 0.7);
              gl_FragColor = vec4(color, intensity * 0.3);
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide
        })
        
        const glow = new THREE.Mesh(glowGeometry, glowMaterial)
        glow.position.copy(planet.position)
        scene.add(glow)
        glowMeshes.push(glow)
      })

      // Lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
      scene.add(ambientLight)

      const pointLight = new THREE.PointLight(0x9333ea, 1, 100)
      pointLight.position.set(10, 10, 10)
      scene.add(pointLight)

      // Animation loop
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate)

        const time = Date.now() * 0.001

        // Rotate stars slowly
        stars.rotation.y += 0.0005
        
        // Rotate galaxy
        galaxy.rotation.y += 0.001
        
        // Animate planets
        planets.forEach((planet, index) => {
          planet.rotation.y += 0.01 + index * 0.005
          planet.position.y += Math.sin(time + index) * 0.01
        })

        // Animate glow effects
        glowMeshes.forEach((glow, index) => {
          const material = glow.material as THREE.ShaderMaterial
          if (material.uniforms) {
            material.uniforms.time.value = time
          }
        })

        // Camera gentle movement
        camera.position.x = Math.sin(time * 0.1) * 0.5
        camera.position.y = Math.cos(time * 0.15) * 0.3

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
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose()
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose())
            } else {
              object.material.dispose()
            }
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
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  )
}
