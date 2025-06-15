import React, { useEffect, useRef } from 'react';

const Fireflies = ({ count = 15 }) => {
  const canvasRef = useRef(null);
  const fireflies = useRef([]);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create fireflies
    fireflies.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      targetX: Math.random() * canvas.width,
      targetY: Math.random() * canvas.height,
    }));

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      fireflies.current.forEach(firefly => {
        // Update position with slight randomness
        firefly.x += firefly.speedX + (Math.random() * 0.2 - 0.1);
        firefly.y += firefly.speedY + (Math.random() * 0.2 - 0.1);
        
        // Randomly change direction occasionally
        if (Math.random() < 0.01) {
          firefly.speedX = (Math.random() - 0.5) * 0.5;
          firefly.speedY = (Math.random() - 0.5) * 0.5;
        }
        
        // Bounce off edges
        if (firefly.x < 0 || firefly.x > canvas.width) firefly.speedX *= -1;
        if (firefly.y < 0 || firefly.y > canvas.height) firefly.speedY *= -1;
        
        // Draw firefly
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          firefly.x, firefly.y, 0,
          firefly.x, firefly.y, firefly.size * 2
        );
        gradient.addColorStop(0, `rgba(134, 239, 172, ${firefly.opacity})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.arc(firefly.x, firefly.y, firefly.size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw center dot
        ctx.beginPath();
        ctx.fillStyle = `rgba(236, 253, 245, ${firefly.opacity + 0.2})`;
        ctx.arc(firefly.x, firefly.y, firefly.size / 2, 0, Math.PI * 2);
        ctx.fill();
      });
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
};

export default Fireflies;
