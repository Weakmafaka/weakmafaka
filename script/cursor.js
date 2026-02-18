(function () {
  var canon = document.querySelector('.cursor-canon');
  var cursor = document.getElementById('cursorDrop');
  var trailEl = document.getElementById('cursorTrail');
  if (!canon || !cursor || !trailEl) return;

  var TRAIL_LENGTH = 12;
  var trailDots = [];
  for (var i = 0; i < TRAIL_LENGTH; i++) {
    var dot = document.createElement('div');
    dot.className = 'cursor-trail-dot';
    trailEl.appendChild(dot);
    trailDots.push(dot);
  }

  var mouseX = 0, mouseY = 0;
  var x = 0, y = 0;
  var prevX = 0, prevY = 0;
  var history = [];
  var visible = false;
  var overHeader = false;
  var idleTime = 0;
  var LERP = 0.22;

  var person = document.querySelector('.person');
  var personPullX = 0, personPullY = 0;
  var PERSON_PULL_FACTOR = 0.035;
  var PERSON_PULL_MAX = 48;
  var PERSON_PULL_LERP = 0.08;

  function setPosition(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!visible) {
      visible = true;
      x = mouseX;
      y = mouseY;
      if (!overHeader) canon.style.opacity = '1';
    }
  }

  function hideCursor() {
    visible = false;
    canon.style.opacity = '0';
  }

  function tick() {
    var vx = mouseX - prevX;
    var vy = mouseY - prevY;
    prevX = mouseX;
    prevY = mouseY;

    var speed = Math.sqrt(vx * vx + vy * vy);
    if (speed < 0.4) {
      idleTime += 16;
    } else {
      idleTime = 0;
    }

    x += (mouseX - x) * LERP;
    y += (mouseY - y) * LERP;

    history.unshift({ x: x, y: y });
    if (history.length > TRAIL_LENGTH) history.pop();

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';

    if (idleTime > 200) {
      cursor.classList.add('idle');
    } else {
      cursor.classList.remove('idle');
    }

    for (var i = 0; i < TRAIL_LENGTH; i++) {
      var dot = trailDots[i];
      if (i < history.length && speed > 0.3 && !overHeader) {
        var p = history[i];
        var t = i / TRAIL_LENGTH;
        var size = 6 + (1 - t) * 6;
        var opacity = (1 - t) * 0.5;
        dot.style.left = p.x + 'px';
        dot.style.top = p.y + 'px';
        dot.style.width = size + 'px';
        dot.style.height = size + 'px';
        dot.style.opacity = opacity;
      } else {
        dot.style.opacity = '0';
      }
    }

    if (overHeader || !visible) {
      canon.style.opacity = '0';
    } else {
      canon.style.opacity = '1';
    }

    if (person) {
      var rect = person.getBoundingClientRect();
      var centerX = rect.left + rect.width / 2;
      var centerY = rect.top + rect.height / 2;
      var dx = mouseX - centerX;
      var dy = mouseY - centerY;
      var targetX = Math.max(-PERSON_PULL_MAX, Math.min(PERSON_PULL_MAX, dx * PERSON_PULL_FACTOR));
      var targetY = Math.max(-PERSON_PULL_MAX, Math.min(PERSON_PULL_MAX, dy * PERSON_PULL_FACTOR));
      personPullX += (targetX - personPullX) * PERSON_PULL_LERP;
      personPullY += (targetY - personPullY) * PERSON_PULL_LERP;
      person.style.transform = 'translate(' + personPullX + 'px, ' + personPullY + 'px)';
    }

    requestAnimationFrame(tick);
  }

  var header = document.querySelector('.header-container');
  if (header) {
    header.addEventListener('mouseenter', function () {
      overHeader = true;
    });
    header.addEventListener('mouseleave', function () {
      overHeader = false;
    });
  }

  document.addEventListener('mousemove', setPosition);
  document.addEventListener('mouseleave', hideCursor);
  document.addEventListener('mouseenter', function (e) {
    if (e.target === document.documentElement || e.target === document.body) setPosition(e);
  });

  var transitionBlock = document.querySelector('.transition');
  var stripe1 = document.querySelector('.transition-stripe-1');
  var stripe2 = document.querySelector('.transition-stripe-2');
  var stripe3 = document.querySelector('.transition-stripe-3');

  function updateTransitionStripes() {
    if (!transitionBlock || !stripe1 || !stripe2 || !stripe3) return;
    var docTop = transitionBlock.offsetTop;
    var blockHeight = transitionBlock.offsetHeight;
    var winHeight = window.innerHeight;
    var scrollStart = docTop - winHeight;
    var scrollEnd = docTop + blockHeight;
    var scrollY = window.scrollY || window.pageYOffset;
    var progress = Math.max(0, Math.min(1, (scrollY - scrollStart) / (scrollEnd - scrollStart)));
    var offset13 = 100 * (1 - 2 * progress);
    var offset2 = 100 * (2 * progress - 1);
    stripe1.style.transform = 'translateX(' + offset13 + '%)';
    stripe2.style.transform = 'translateX(' + offset2 + '%)';
    stripe3.style.transform = 'translateX(' + offset13 + '%)';
  }

  window.addEventListener('scroll', updateTransitionStripes, { passive: true });
  updateTransitionStripes();

  canon.style.opacity = '0';
  requestAnimationFrame(tick);
})();
