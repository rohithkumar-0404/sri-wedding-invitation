/* ==========================================================================
   Srinithi & Vishu – Sacred Garden Wedding Invitation Script
   Replication of "The Sacred Garden" (Royal Botanical & Swan Elegance)
   ========================================================================== */

(function () {
  'use strict';

  // --- DOM Elements ---
  var overlay       = document.getElementById('weiOverlay');
  var videoWrap     = document.getElementById('weiVideoWrap');
  var video         = document.getElementById('weiVideo');
  var audio         = document.getElementById('weiAudio');
  var audioBtn      = document.getElementById('weiAudioBtn');
  var audioWaves    = document.querySelector('.audio-waves');
  var iconPlay      = document.getElementById('weiIconPlay');
  
  var elDays        = document.getElementById('days');
  var elHours       = document.getElementById('hours');
  var elMins        = document.getElementById('minutes');
  var elSecs        = document.getElementById('seconds');
  var countdownWrap = document.getElementById('countdownContainer');

  var done          = false;
  var audioUnlocked = false;

  // --- 1. Audio Unlocking for Mobile (iOS & Android) ---
  function unlockAudio() {
    if (audioUnlocked) return;
    audioUnlocked = true;
    var p = audio.play();
    if (p && p.then) {
      p.then(function () {
        // Silently primed
      }).catch(function () {});
    }
  }

  // --- 2. Opening Screen Interaction & Sequence ---
  function startOpeningSequence() {
    if (done) return;
    done = true;

    // Start background music immediately
    audio.volume = 1;
    audio.loop = true;
    var ap = audio.play();
    if (ap && ap.catch) {
      ap.catch(function () {
        console.log('Audio autoplay prevented, awaiting user gesture');
      });
    }

    // Fade out initial opening card overlay
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    setTimeout(function () {
      overlay.style.display = 'none';
    }, 1400);

    // Show envelope opening video if supported
    if (video) {
      videoWrap.classList.add('wei-video-in');
      var vp = video.play();
      if (vp && vp.catch) {
        vp.catch(function () {
          // If video fails to autoplay, smoothly skip to endSequence
          endSequence();
        });
      }
      
      // Safety timeout: transition smoothly after 3.2s regardless of video event
      setTimeout(function () {
        if (!video.dataset.fading) {
          endSequence();
        }
      }, 3200);
    } else {
      endSequence();
    }
  }

  function endSequence() {
    if (video && !video.dataset.fading) {
      video.dataset.fading = '1';
    }

    if (videoWrap) {
      videoWrap.classList.remove('wei-video-in');
      videoWrap.classList.add('wei-video-out');
      setTimeout(function () {
        videoWrap.style.display = 'none';
      }, 1400);
    }

    // Reveal floating music controller button
    if (audioBtn) {
      audioBtn.style.visibility = 'visible';
      audioBtn.style.opacity = '1';
    }

    // Trigger ink reveal on countdown
    triggerCountdownReveal();
  }

  // Attach touch & click listeners to overlay
  if (overlay) {
    overlay.addEventListener('touchstart', unlockAudio, { passive: true });
    overlay.addEventListener('click', startOpeningSequence);
  }

  // Monitor video playback end
  if (video) {
    video.addEventListener('timeupdate', function () {
      if (video.duration && video.currentTime >= video.duration - 0.8 && !video.dataset.fading) {
        endSequence();
      }
    });

    video.addEventListener('ended', function () {
      endSequence();
    });

    video.addEventListener('error', function () {
      endSequence();
    });

    video.load();
  }

  // Ensure audio repeats seamlessly
  if (audio) {
    audio.addEventListener('ended', function () {
      audio.currentTime = 0;
      audio.play().catch(function () {});
    });
  }

  // --- 3. Floating Audio Toggle Controller ---
  if (audioBtn) {
    audioBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (audio.paused) {
        audio.play().catch(function () {});
        audioBtn.classList.remove('paused');
        if (iconPlay) iconPlay.style.display = 'none';
        if (audioWaves) audioWaves.style.display = 'flex';
      } else {
        audio.pause();
        audioBtn.classList.add('paused');
        if (iconPlay) iconPlay.style.display = 'block';
        if (audioWaves) audioWaves.style.display = 'none';
      }
    });
  }

  // --- 4. Wedding Countdown Timer ---
  // Target: Sunday, 13 December 2026, 7:00 AM IST
  var eventDate = new Date('2026-12-13T07:00:00+05:30').getTime();
  var prev = { days: null, hours: null, minutes: null, seconds: null };
  var countdownRevealed = false;

  function flip(el, newVal) {
    if (!el || el.textContent === newVal) return;
    el.classList.add('flip-out');
    setTimeout(function () {
      el.classList.remove('flip-out');
      el.classList.add('flip-in');
      el.textContent = newVal;
      // Trigger browser reflow
      void el.offsetHeight;
      el.classList.remove('flip-in');
    }, 520);
  }

  function tickCountdown() {
    var now = new Date().getTime();
    var dist = eventDate - now;

    if (dist < 0) {
      if (countdownWrap) {
        countdownWrap.innerHTML = '<div class="countdown-concluded" style="font-family: Ovo, serif; font-size: 26px; color: #B48C3D; padding: 20px;">The Wedding Celebration has Begun!</div>';
      }
      return;
    }

    var d = String(Math.floor(dist / (1000 * 60 * 60 * 24)));
    var h = String(Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    var m = String(Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    var s = String(Math.floor((dist % (1000 * 60)) / 1000)).padStart(2, '0');

    if (elDays && d !== prev.days) { flip(elDays, d); prev.days = d; }
    if (elHours && h !== prev.hours) { flip(elHours, h); prev.hours = h; }
    if (elMins && m !== prev.minutes) { flip(elMins, m); prev.minutes = m; }
    if (elSecs && s !== prev.seconds) { flip(elSecs, s); prev.seconds = s; }
  }

  tickCountdown();
  setInterval(tickCountdown, 1000);

  function triggerCountdownReveal() {
    if (countdownRevealed) return;
    countdownRevealed = true;
    document.querySelectorAll('.number').forEach(function (el) { el.classList.add('revealed'); });
    document.querySelectorAll('.label').forEach(function (el) { el.classList.add('revealed'); });
    document.querySelectorAll('.separator').forEach(function (el) { el.classList.add('revealed'); });
  }

  if (countdownWrap && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        triggerCountdownReveal();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(countdownWrap);
  }

  // --- 5. Schedule Day Switcher Tabs ---
  var scheduleTabs = document.querySelectorAll('.schedule-tab-btn');
  var dayCards = document.querySelectorAll('.schedule-day-card');

  scheduleTabs.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetDay = this.getAttribute('data-day');

      scheduleTabs.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      if (targetDay === 'all') {
        dayCards.forEach(function (card) { card.style.display = 'block'; });
      } else {
        dayCards.forEach(function (card) {
          if (card.getAttribute('data-day') === targetDay) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      }
    });
  });

  // --- 6. Photo Gallery Lightbox ---
  var lightbox = document.getElementById('galleryLightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var lightboxClose = document.getElementById('lightboxClose');
  var galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var img = this.querySelector('.gallery-img');
      var caption = this.getAttribute('data-caption') || (img ? img.alt : '');
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = caption;
        if (lightboxCaption) lightboxCaption.textContent = caption;
        lightbox.classList.add('active');
      }
    });
  });

  function closeLightbox() {
    if (lightbox) lightbox.classList.remove('active');
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  // --- 7. Falling Botanical Petals Particle Effect ---
  var canvas = document.getElementById('petalsCanvas');
  if (canvas) {
    var ctx = canvas.getContext('2d');
    var petals = [];
    var petalCount = 20;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function Petal() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * -canvas.height;
      this.size = 8 + Math.random() * 12;
      this.speedX = -1 + Math.random() * 2;
      this.speedY = 0.8 + Math.random() * 1.5;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      this.opacity = 0.4 + Math.random() * 0.4;
      // Soft rose & gold tones
      var tones = [
        'rgba(235, 185, 180, ', // Rose pink
        'rgba(212, 175, 55, ',  // Soft gold
        'rgba(240, 215, 195, ', // Warm peach
        'rgba(180, 140, 61, '   // Bronze gold
      ];
      this.colorBase = tones[Math.floor(Math.random() * tones.length)];
    }

    Petal.prototype.update = function () {
      this.y += this.speedY;
      this.x += Math.sin(this.y * 0.01) + this.speedX;
      this.rotation += this.rotationSpeed;

      if (this.y > canvas.height + 20) {
        this.y = -20;
        this.x = Math.random() * canvas.width;
      }
    };

    Petal.prototype.draw = function () {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.fillStyle = this.colorBase + this.opacity + ')';
      ctx.beginPath();
      // Draw organic petal curve
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size / 2, this.size / 2, 0, this.size);
      ctx.bezierCurveTo(this.size / 2, this.size / 2, this.size / 2, -this.size / 2, 0, 0);
      ctx.fill();
      ctx.restore();
    };

    for (var i = 0; i < petalCount; i++) {
      petals.push(new Petal());
    }

    function animatePetals() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var j = 0; j < petals.length; j++) {
        petals[j].update();
        petals[j].draw();
      }
      requestAnimationFrame(animatePetals);
    }
    animatePetals();
  }

})();
