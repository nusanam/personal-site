'use client';

import { useEffect, useRef } from 'react';

interface Droplet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radiusX: number; // Horizontal radius for oval
  radiusY: number; // Vertical radius for oval
  rotation: number; // Rotation angle for the oval
  rotationSpeed: number; // Speed of rotation
  color: string;
  id: number;
  mass: number; // For physics calculations
}

const WaterDropletsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropletsRef = useRef<Droplet[]>([]);
  const animationFrameRef = useRef<number>(null);
  const nextIdRef = useRef(0);

  // Droplet colors matching the design system gradients
  const dropletColors = [
    'rgba(255, 107, 107, 0.8)', // Coral
    'rgba(255, 142, 83, 0.8)', // Orange
    'rgba(255, 107, 169, 0.8)', // Pink
    'rgba(139, 92, 246, 0.8)', // Purple
    'rgba(59, 130, 246, 0.8)', // Blue
    'rgba(236, 72, 153, 0.8)', // Bright Pink
    'rgba(20, 184, 166, 0.8)', // Teal
  ];

  // Create a random droplet shape
  const createDroplet = (
    x: number,
    y: number,
    baseRadius?: number,
    vx?: number,
    vy?: number,
    color?: string
  ): Droplet => {
    const radius = baseRadius || 30 + Math.random() * 70;
    const aspectRatio = 0.6 + Math.random() * 0.6; // Random oval shape
    const radiusX = radius;
    const radiusY = radius * aspectRatio;
    const mass = Math.PI * radiusX * radiusY; // Area as mass

    return {
      x,
      y,
      vx: vx !== undefined ? vx : (Math.random() - 0.5) * 2,
      vy: vy !== undefined ? vy : (Math.random() - 0.5) * 2,
      radiusX,
      radiusY,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      color:
        color ||
        dropletColors[Math.floor(Math.random() * dropletColors.length)],
      id: nextIdRef.current++,
      mass,
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Initialize droplets
    const initializeDroplets = () => {
      dropletsRef.current = [];
      const numDroplets = Math.floor(window.innerWidth / 250);

      for (let i = 0; i < numDroplets; i++) {
        dropletsRef.current.push(
          createDroplet(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        );
      }
    };

    initializeDroplets();

    window.addEventListener('resize', () => {
      updateSize();
      initializeDroplets();
    });

    // Get effective radius (average of X and Y)
    const getEffectiveRadius = (droplet: Droplet) => {
      return (droplet.radiusX + droplet.radiusY) / 2;
    };

    // Check collision between two droplets
    const checkCollision = (d1: Droplet, d2: Droplet) => {
      const dx = d2.x - d1.x;
      const dy = d2.y - d1.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const r1 = getEffectiveRadius(d1);
      const r2 = getEffectiveRadius(d2);
      return distance < r1 + r2;
    };

    // Break a droplet into smaller particles
    const breakDroplet = (
      droplet: Droplet,
      impactVelocity: number
    ): Droplet[] => {
      const particles: Droplet[] = [];
      const numParticles = Math.floor(3 + Math.random() * 4); // 3-6 particles
      const totalMass = droplet.mass;
      const particleMass = totalMass / numParticles;

      for (let i = 0; i < numParticles; i++) {
        const angle = (Math.PI * 2 * i) / numParticles + Math.random() * 0.5;
        const speed = 2 + Math.random() * 3;
        const particleRadius = Math.sqrt(particleMass / Math.PI);

        particles.push(
          createDroplet(
            droplet.x + Math.cos(angle) * 10,
            droplet.y + Math.sin(angle) * 10,
            particleRadius,
            droplet.vx + Math.cos(angle) * speed,
            droplet.vy + Math.sin(angle) * speed,
            droplet.color
          )
        );
      }

      return particles;
    };

    // Handle collision physics
    const handleCollision = (d1: Droplet, d2: Droplet) => {
      const dx = d2.x - d1.x;
      const dy = d2.y - d1.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Calculate relative velocity
      const dvx = d2.vx - d1.vx;
      const dvy = d2.vy - d1.vy;
      const relativeSpeed = Math.sqrt(dvx * dvx + dvy * dvy);

      // Calculate collision angle
      const angle = Math.atan2(dy, dx);
      const collisionAngle = Math.abs(Math.atan2(dvy, dvx) - angle);

      const r1 = getEffectiveRadius(d1);
      const r2 = getEffectiveRadius(d2);
      const minRadius = 20; // Threshold for small particles
      const maxRadius = 80; // Threshold for large droplets

      // Small particles combine
      if (r1 < minRadius && r2 < minRadius && relativeSpeed < 2) {
        const totalMass = d1.mass + d2.mass;
        const newRadius = Math.sqrt(totalMass / Math.PI);
        d1.radiusX = newRadius;
        d1.radiusY = newRadius * (0.6 + Math.random() * 0.4);
        d1.mass = totalMass;
        d1.vx = (d1.vx * d1.mass + d2.vx * d2.mass) / totalMass;
        d1.vy = (d1.vy * d1.mass + d2.vy * d2.mass) / totalMass;
        return { type: 'merge', removeIds: [d2.id] };
      }

      // Large droplets with high-speed collision break apart
      if ((r1 > maxRadius || r2 > maxRadius) && relativeSpeed > 2.5) {
        const newParticles: Droplet[] = [];

        if (r1 > maxRadius) {
          newParticles.push(...breakDroplet(d1, relativeSpeed));
        }
        if (r2 > maxRadius) {
          newParticles.push(...breakDroplet(d2, relativeSpeed));
        }

        return {
          type: 'break',
          removeIds: [
            ...(r1 > maxRadius ? [d1.id] : []),
            ...(r2 > maxRadius ? [d2.id] : []),
          ],
          newParticles,
        };
      }

      // Medium droplets merge on gentle collision
      if (relativeSpeed < 1.5 && collisionAngle < Math.PI / 3) {
        const totalMass = d1.mass + d2.mass;
        const newRadius = Math.sqrt(totalMass / Math.PI);
        d1.radiusX = newRadius;
        d1.radiusY = newRadius * (0.6 + Math.random() * 0.4);
        d1.mass = totalMass;
        d1.vx = (d1.vx * d1.mass + d2.vx * d2.mass) / totalMass;
        d1.vy = (d1.vy * d1.mass + d2.vy * d2.mass) / totalMass;
        return { type: 'merge', removeIds: [d2.id] };
      }

      // Default: elastic bounce
      const nx = dx / distance;
      const ny = dy / distance;

      const v1n = d1.vx * nx + d1.vy * ny;
      const v2n = d2.vx * nx + d2.vy * ny;

      const m1 = d1.mass;
      const m2 = d2.mass;

      const v1nAfter = (v1n * (m1 - m2) + 2 * m2 * v2n) / (m1 + m2);
      const v2nAfter = (v2n * (m2 - m1) + 2 * m1 * v1n) / (m1 + m2);

      d1.vx += (v1nAfter - v1n) * nx;
      d1.vy += (v1nAfter - v1n) * ny;
      d2.vx += (v2nAfter - v2n) * nx;
      d2.vy += (v2nAfter - v2n) * ny;

      // Separate overlapping droplets
      const overlap = r1 + r2 - distance;
      if (overlap > 0) {
        const separationRatio = m2 / (m1 + m2);
        d1.x -= nx * overlap * separationRatio;
        d1.y -= ny * overlap * separationRatio;
        d2.x += nx * overlap * (1 - separationRatio);
        d2.y += ny * overlap * (1 - separationRatio);
      }

      return { type: 'bounce' };
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const toRemove: number[] = [];
      const toAdd: Droplet[] = [];

      dropletsRef.current.forEach((droplet, i) => {
        // Update position
        droplet.x += droplet.vx;
        droplet.y += droplet.vy;
        droplet.rotation += droplet.rotationSpeed;

        // Bounce off walls
        const effectiveRadius = getEffectiveRadius(droplet);
        if (
          droplet.x - effectiveRadius < 0 ||
          droplet.x + effectiveRadius > canvas.width
        ) {
          droplet.vx *= -0.9;
          droplet.x = Math.max(
            effectiveRadius,
            Math.min(canvas.width - effectiveRadius, droplet.x)
          );
        }
        if (
          droplet.y - effectiveRadius < 0 ||
          droplet.y + effectiveRadius > canvas.height
        ) {
          droplet.vy *= -0.9;
          droplet.y = Math.max(
            effectiveRadius,
            Math.min(canvas.height - effectiveRadius, droplet.y)
          );
        }

        // Check collisions with other droplets
        for (let j = i + 1; j < dropletsRef.current.length; j++) {
          const other = dropletsRef.current[j];
          if (checkCollision(droplet, other)) {
            const result = handleCollision(droplet, other);
            if (result.type === 'merge' && result.removeIds) {
              toRemove.push(...result.removeIds);
            } else if (
              result.type === 'break' &&
              result.removeIds &&
              result.newParticles
            ) {
              toRemove.push(...result.removeIds);
              toAdd.push(...result.newParticles);
            }
          }
        }

        // Draw droplet as oval with gradient and blur effect
        ctx.save();
        ctx.translate(droplet.x, droplet.y);
        ctx.rotate(droplet.rotation);

        const gradient = ctx.createRadialGradient(
          0,
          0,
          0,
          0,
          0,
          Math.max(droplet.radiusX, droplet.radiusY)
        );
        gradient.addColorStop(0, droplet.color);
        gradient.addColorStop(0.7, droplet.color.replace('0.8', '0.4'));
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.filter = 'blur(20px)';
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.ellipse(0, 0, droplet.radiusX, droplet.radiusY, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Remove droplets
      dropletsRef.current = dropletsRef.current.filter(
        (d) => !toRemove.includes(d.id)
      );

      // Add new particles
      dropletsRef.current.push(...toAdd);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='fixed inset-0 z-0 pointer-events-none'
      aria-hidden='true'
    />
  );
};

export default WaterDropletsBackground;
