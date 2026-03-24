import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];
    let streaks = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
        this.pulsePhase = Math.random() * Math.PI * 2;
        // Mix of cyan and white-blue particles
        const isCyan = Math.random() > 0.6;
        this.r = isCyan ? 0 : 150 + Math.random() * 80;
        this.g = isCyan ? 180 + Math.random() * 40 : 180 + Math.random() * 60;
        this.b = isCyan ? 220 + Math.random() * 35 : 240 + Math.random() * 15;
      }
      update(time) {
        this.x += this.speedX;
        this.y += this.speedY;
        this.currentOpacity =
          this.opacity * (0.5 + 0.5 * Math.sin(time * this.pulseSpeed + this.pulsePhase));

        if (this.x < -10 || this.x > canvas.width + 10 ||
            this.y < -10 || this.y > canvas.height + 10) {
          this.reset();
        }
      }
      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.currentOpacity})`;
        ctx.fill();

        // Glow
        if (this.size > 1.2) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.currentOpacity * 0.12})`;
          ctx.fill();
        }
      }
    }

    // Light streak class
    class Streak {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 120 + 40;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.15 + 0.05;
        this.opacity = 0;
        this.maxOpacity = Math.random() * 0.06 + 0.02;
        this.fadeIn = true;
        this.life = 0;
        this.maxLife = Math.random() * 300 + 200;
        this.width = Math.random() * 1.5 + 0.5;
        this.isCyan = Math.random() > 0.5;
      }
      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.life++;

        if (this.fadeIn && this.opacity < this.maxOpacity) {
          this.opacity += 0.001;
          if (this.opacity >= this.maxOpacity) this.fadeIn = false;
        }

        if (this.life > this.maxLife * 0.7) {
          this.opacity -= 0.001;
        }

        if (this.life > this.maxLife || this.opacity <= 0) {
          this.reset();
        }
      }
      draw(ctx) {
        const endX = this.x + Math.cos(this.angle) * this.length;
        const endY = this.y + Math.sin(this.angle) * this.length;
        const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);

        if (this.isCyan) {
          gradient.addColorStop(0, `rgba(0, 212, 232, 0)`);
          gradient.addColorStop(0.5, `rgba(0, 212, 232, ${this.opacity})`);
          gradient.addColorStop(1, `rgba(0, 212, 232, 0)`);
        } else {
          gradient.addColorStop(0, `rgba(251, 191, 36, 0)`);
          gradient.addColorStop(0.5, `rgba(251, 191, 36, ${this.opacity * 0.6})`);
          gradient.addColorStop(1, `rgba(251, 191, 36, 0)`);
        }

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.width;
        ctx.stroke();
      }
    }

    // Initialize
    const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 150);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    for (let i = 0; i < 8; i++) {
      streaks.push(new Streak());
    }

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time++;

      // Draw streaks (behind particles)
      streaks.forEach((s) => {
        s.update();
        s.draw(ctx);
      });

      // Draw particles
      particles.forEach((p) => {
        p.update(time);
        p.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" />;
}
