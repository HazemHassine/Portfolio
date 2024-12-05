import React, { useEffect, useRef } from "react";

const DynamicBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Apply dark teal and navy blue gradient background
    const setGradientBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#004d40"); // Dark Teal
      gradient.addColorStop(1, "#001f3d"); // Navy Blue
      canvas.style.background = `linear-gradient(to bottom right, #004d40, #001f3d)`; // Dark teal to navy blue gradient
      return gradient;
    };

    // Resize canvas to fit the screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setGradientBackground();
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Create particles
    const particles = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1, // Slightly larger particles
      color: `rgba(255, 255, 255, ${Math.random() * 0.7 + 0.3})`, // White with minimum opacity of 0.3
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * 2 - 1,
      angle: Math.random() * Math.PI * 2,
    }));

    // Draw particles and animate
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Update particle position
        particle.x += Math.cos(particle.angle) * particle.speedX;
        particle.y += Math.sin(particle.angle) * particle.speedY;
        particle.angle += 0.01;

        // Reflect particles at canvas edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Connect particles with lines
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 150})`; // Fade lines based on distance
            ctx.lineWidth = 0.5; // Thinner lines
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      // Request the next animation frame
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" />;
};

export default DynamicBackground;
