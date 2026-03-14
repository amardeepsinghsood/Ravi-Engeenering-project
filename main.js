/* ============================================================
   RAVI ENGINEERING — HARUCHIKA-INSPIRED INTERACTIONS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Letter-by-letter animation (hero headline) ── */
  const heroText = document.getElementById('heroCatchEn');
  if (heroText) {
    const lines = heroText.innerHTML.split('<br>');
    heroText.innerHTML = '';
    let globalCharIdx = 0;
    
    lines.forEach((line) => {
      const lineEl = document.createElement('div');
      
      line.trim().split(' ').forEach((word, wordIdx, wordArr) => {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.whiteSpace = 'nowrap';
        
        word.split('').forEach((char) => {
          const charSpan = document.createElement('span');
          charSpan.className = 'letter';
          charSpan.textContent = char;
          charSpan.style.animationDelay = `${globalCharIdx * 0.04}s`;
          wordSpan.appendChild(charSpan);
          globalCharIdx++;
        });
        
        lineEl.appendChild(wordSpan);
        
        // Add space after word
        if (wordIdx < wordArr.length - 1) {
          const spaceSpan = document.createElement('span');
          spaceSpan.innerHTML = '&nbsp;';
          lineEl.appendChild(spaceSpan);
          globalCharIdx++; // advance index for the space too
        }
      });
      heroText.appendChild(lineEl);
    });
  }

  /* ── Navbar scroll ── */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  function handleNavScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link highlight
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(a => a.classList.remove('active'));
        const hit = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (hit) hit.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', handleNavScroll);
  handleNavScroll();

  /* ── Hamburger menu ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  /* ── Smooth scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const el = document.querySelector(id);
      if (el) {
        const headerH = navbar.offsetHeight;
        const pos = el.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      }
    });
  });

  /* ── Scroll Reveal (waypoints) ── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ── Animated Counters ── */
  const counters = document.querySelectorAll('.counter');
  let countersAnimated = new Set();
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated.has(entry.target)) {
        countersAnimated.add(entry.target);
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 2000;
    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart
      el.textContent = Math.floor(ease * target);
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target;
    }
    requestAnimationFrame(update);
  }

  /* ── Testimonial Slider ── */
  const track = document.getElementById('testimonialTrack');
  const slides = track ? track.children : [];
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  const dotsContainer = document.getElementById('sliderDots');
  let currentSlide = 0;
  let autoplayInterval;

  function goToSlide(i) {
    if (i < 0) i = slides.length - 1;
    if (i >= slides.length) i = 0;
    currentSlide = i;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    // Update dots
    dotsContainer.querySelectorAll('.dot').forEach((d, idx) => {
      d.classList.toggle('active', idx === currentSlide);
    });
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => { goToSlide(currentSlide - 1); resetAutoplay(); });
    nextBtn.addEventListener('click', () => { goToSlide(currentSlide + 1); resetAutoplay(); });
  }
  if (dotsContainer) {
    dotsContainer.querySelectorAll('.dot').forEach((dot, idx) => {
      dot.addEventListener('click', () => { goToSlide(idx); resetAutoplay(); });
    });
  }

  function startAutoplay() {
    autoplayInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
  }
  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }
  if (slides.length > 0) startAutoplay();

  // Touch / swipe support
  if (track) {
    let touchStartX = 0, touchEndX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    track.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goToSlide(currentSlide + 1);
        else goToSlide(currentSlide - 1);
        resetAutoplay();
      }
    });
  }

  /* ── Solutions Horizontal Scrollbar ── */
  const solSlider = document.getElementById('solutionsSlider');
  const solRange = document.getElementById('solRange');
  if (solSlider && solRange) {
    solSlider.addEventListener('scroll', () => {
      const maxScroll = solSlider.scrollWidth - solSlider.clientWidth;
      const progress = (solSlider.scrollLeft / maxScroll) * 100;
      solRange.value = progress;
      updateRangeColor(solRange, progress);
    });
    solRange.addEventListener('input', () => {
      const maxScroll = solSlider.scrollWidth - solSlider.clientWidth;
      solSlider.scrollLeft = (solRange.value / 100) * maxScroll;
      updateRangeColor(solRange, solRange.value);
    });
  }
  function updateRangeColor(slider, val) {
    const progress = (val / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, #c40303 ${progress}%, #7183a7 ${progress}%)`;
  }

  /* ── Contact Form ── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = '✓ Enquiry Sent!';
        setTimeout(() => {
          btn.textContent = orig;
          btn.disabled = false;
          contactForm.reset();
        }, 2500);
      }, 1500);
    });
  }

  /* ── Hero Canvas (Particle Network) ── */
  const canvas = document.getElementById('heroCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = 70;
    const MAX_DIST = 150;

    function resizeCanvas() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.r = Math.random() * 2 + 0.5;
        this.alpha = Math.random() * 0.4 + 0.1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Gradient background
      const grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grd.addColorStop(0, '#070f24');
      grd.addColorStop(0.5, '#142046');
      grd.addColorStop(1, '#0d1a3a');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles and connections
      particles.forEach((p, i) => {
        p.update();
        p.draw();
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,55,211,${0.15 * (1 - dist / MAX_DIST)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      // Diagonal decorative lines on canvas
      ctx.save();
      ctx.globalAlpha = 0.04;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      // Line 1
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.15, 0);
      ctx.lineTo(canvas.width * 0.25, canvas.height);
      ctx.stroke();
      // Line 2
      ctx.strokeStyle = '#0037d3';
      ctx.globalAlpha = 0.08;
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.7, 0);
      ctx.lineTo(canvas.width * 0.55, canvas.height);
      ctx.stroke();
      // Line 3
      ctx.strokeStyle = '#c40303';
      ctx.globalAlpha = 0.06;
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.85, 0);
      ctx.lineTo(canvas.width * 0.65, canvas.height);
      ctx.stroke();
      ctx.restore();

      requestAnimationFrame(animate);
    }
    animate();
  }

});
