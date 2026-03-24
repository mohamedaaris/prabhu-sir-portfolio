import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    // Track mouse position
    const mouse = {
      x: null,
      y: null,
      radius: 150 // Interaction radius
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", resize);

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 15) + 1;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        // Color tint selection: cyan or purple/blue
        this.isCyan = Math.random() > 0.5;
      }

      update() {
        // Natural wandering movement
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Mouse interaction (repel & parallax)
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = mouse.radius;
            let force = (maxDistance - distance) / maxDistance;
            let directionX = forceDirectionX * force * this.density * 0.4;
            let directionY = forceDirectionY * force * this.density * 0.4;
            
            this.x -= directionX;
            this.y -= directionY;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        if (this.isCyan) {
          ctx.fillStyle = "rgba(0, 212, 232, 0.6)";
          ctx.shadowColor = "rgba(0, 212, 232, 0.8)";
        } else {
          ctx.fillStyle = "rgba(167, 139, 250, 0.5)";
          ctx.shadowColor = "rgba(167, 139, 250, 0.8)";
        }
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      }
    }

    const init = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 9000), 200);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawConnections = () => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          // Connect particles to each other if close
          if (distance < 100) {
            opacityValue = 1 - (distance / 100);
            ctx.strokeStyle = particles[a].isCyan 
              ? `rgba(0, 212, 232, ${opacityValue * 0.15})` 
              : `rgba(167, 139, 250, ${opacityValue * 0.15})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }

        // Connect particles to mouse
        if (mouse.x != null && mouse.y != null) {
          let dx = particles[a].x - mouse.x;
          let dy = particles[a].y - mouse.y;
          let distanceToMouse = Math.sqrt(dx * dx + dy * dy);
          
          if (distanceToMouse < mouse.radius) {
            opacityValue = 1 - (distanceToMouse / mouse.radius);
            ctx.strokeStyle = `rgba(0, 212, 232, ${opacityValue * 0.4})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    };

    resize(); // calls init()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      drawConnections();

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" className="pointer-events-none fixed inset-0 z-0 h-full w-full" />;
}

