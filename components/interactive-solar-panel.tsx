"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface InteractiveSolarPanelProps {
  className?: string
}

export default function InteractiveSolarPanel({ className = "" }: InteractiveSolarPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cells, setCells] = useState<{ x: number; y: number; size: number }[]>([])
  const [isHovering, setIsHovering] = useState(false)

  // Actualizar dimensiones del panel
  useEffect(() => {
    const updateDimensions = () => {
      if (panelRef.current) {
        const { width, height } = panelRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  // Crear celdas del panel solar
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const cellSize = 40 // Tamaño de cada celda
    const cols = Math.floor(dimensions.width / cellSize)
    const rows = Math.floor(dimensions.height / cellSize)
    const newCells = []

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        newCells.push({
          x: x * cellSize,
          y: y * cellSize,
          size: cellSize - 2, // Pequeño espacio entre celdas
        })
      }
    }

    setCells(newCells)
  }, [dimensions])

  // Manejar movimiento del mouse
  const handleMouseMove = (e: React.MouseEvent) => {
    if (panelRef.current) {
      const rect = panelRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
      setIsHovering(true)
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  // Calcular la ondulación para cada celda
  const getCellStyle = (cellX: number, cellY: number) => {
    if (!isHovering) {
      return {
        transform: "translateZ(0)",
        opacity: 0.7 + Math.random() * 0.3,
      }
    }

    const centerX = cellX + cells[0].size / 2
    const centerY = cellY + cells[0].size / 2
    const distanceX = mousePosition.x - centerX
    const distanceY = mousePosition.y - centerY
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

    // Calcular la altura de la ondulación basada en la distancia al cursor
    const waveHeight = Math.max(0, 1 - distance / 300) * 30

    // Calcular el brillo basado en la distancia al cursor
    const brightness = Math.max(0.7, 1 - distance / 300)

    // Calcular el retraso basado en la distancia para crear un efecto de onda
    const delay = distance * 0.002

    return {
      transform: `translateZ(${waveHeight}px)`,
      opacity: brightness,
      transition: `transform 0.3s ease ${delay}s, opacity 0.3s ease ${delay}s`,
    }
  }

  // Efecto de energía fluyendo
  const renderEnergyFlows = () => {
    if (!isHovering) return null

    return [...Array(10)].map((_, i) => {
      const startX = mousePosition.x
      const startY = mousePosition.y
      const angle = Math.random() * Math.PI * 2
      const distance = 100 + Math.random() * 200
      const endX = startX + Math.cos(angle) * distance
      const endY = startY + Math.sin(angle) * distance

      return (
        <motion.div
          key={i}
          className="absolute bg-yellow-400/60 rounded-full"
          style={{
            width: 2 + Math.random() * 3,
            height: 2 + Math.random() * 3,
            left: startX,
            top: startY,
            zIndex: 5,
          }}
          animate={{
            left: [startX, endX],
            top: [startY, endY],
            opacity: [1, 0],
          }}
          transition={{
            duration: 1 + Math.random(),
            ease: "easeOut",
          }}
        />
      )
    })
  }

  return (
    <div
      ref={panelRef}
      className={`overflow-hidden perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm z-0"></div>

      {/* Celdas del panel solar */}
      <div className="absolute inset-0 z-10">
        {cells.map((cell, index) => (
          <div
            key={index}
            className="absolute bg-blue-800/40 backdrop-blur-sm border border-blue-500/30"
            style={{
              left: cell.x,
              top: cell.y,
              width: cell.size,
              height: cell.size,
              ...getCellStyle(cell.x, cell.y),
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-400/30 to-blue-600/20"></div>
          </div>
        ))}
      </div>

      {/* Efectos de energía */}
      {renderEnergyFlows()}

      {/* Resplandor central */}
      {isHovering && (
        <motion.div
          className="absolute rounded-full bg-yellow-400/30 blur-xl z-5"
          style={{
            width: 100,
            height: 100,
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  )
}
