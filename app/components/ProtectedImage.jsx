'use client'

import Image from 'next/image'

/**
 * Composant d'image protégée contre le téléchargement
 * - Désactive le clic droit
 * - Désactive le drag & drop
 * - Lazy loading par défaut
 * - Optimisation automatique de la qualité
 */
export default function ProtectedImage({
  src,
  alt,
  className = '',
  priority = false,
  quality = 75,
  sizes,
  fill = false,
  width,
  height,
  ...props
}) {
  const handleContextMenu = (e) => {
    e.preventDefault()
    return false
  }

  const handleDragStart = (e) => {
    e.preventDefault()
    return false
  }

  return (
    <div
      className={`relative select-none ${className}`}
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
      style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className="select-none pointer-events-none"
        draggable={false}
        loading={priority ? 'eager' : 'lazy'}
        quality={quality}
        sizes={sizes}
        {...props}
      />
    </div>
  )
}
