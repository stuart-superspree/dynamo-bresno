// Dynamo Bresno shared site script (v3)

// The Dynamo Dispatch — Substack newsletter sign-up (handles d-, n- prefixed forms)
function subscribeDispatch(e, prefix){
  e.preventDefault();
  var input = document.getElementById(prefix + '-email');
  var email = input && input.value ? input.value.trim() : '';
  var url = 'https://thedynamodispatch.substack.com/subscribe' + (email ? '?email=' + encodeURIComponent(email) : '');
  window.open(url, '_blank', 'noopener');
  var ok = document.getElementById(prefix + '-ok');
  if(ok) ok.textContent = "Opening The Dynamo Dispatch on Substack. Confirm there to finish.";
  if(input) input.value = "";
  return false;
}
// Back-compat alias (older forms call joinDispatch)
function joinDispatch(e, prefix){ return subscribeDispatch(e, prefix); }

document.addEventListener('DOMContentLoaded', function(){

  // ---- Mobile nav toggle (dominant header) ----
  var navbtn = document.getElementById('navbtn');
  var hdr = document.getElementById('hdr');
  if(navbtn && hdr){
    var closeNav = function(){
      hdr.classList.remove('nav-open');
      document.body.classList.remove('nav-locked');
    };
    navbtn.addEventListener('click', function(e){
      e.stopPropagation();
      var open = hdr.classList.toggle('nav-open');
      document.body.classList.toggle('nav-locked', open);
    });
    document.addEventListener('click', function(e){
      if(hdr.classList.contains('nav-open') && !hdr.contains(e.target)){
        closeNav();
      }
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') closeNav();
    });
    // Leaving mobile widths: clear the open menu and page-scroll lock
    window.addEventListener('resize', function(){
      if(window.innerWidth > 1240 && hdr.classList.contains('nav-open')) closeNav();
    });
  }

  // ---- Mark current page active in the nav ----
  var page = location.pathname.split('/').pop() || 'index.html';
  if(page === '') page = 'index.html';
  document.querySelectorAll('.nav a').forEach(function(a){
    var href = a.getAttribute('href');
    if(href === page) a.classList.add('on');
  });

  // ---- News category filter (matches any token in data-cat) ----
  var chips = document.querySelectorAll('.chip');
  if(chips.length){
    chips.forEach(function(chip){
      chip.addEventListener('click', function(){
        chips.forEach(function(c){ c.classList.remove('active'); });
        chip.classList.add('active');
        var f = chip.getAttribute('data-filter');
        document.querySelectorAll('[data-cat]').forEach(function(item){
          var tokens = (item.getAttribute('data-cat') || '').split(/\s+/);
          item.style.display = (f === 'all' || tokens.indexOf(f) !== -1) ? '' : 'none';
        });
      });
    });
  }

  // ---- Scroll reveal (adds .in to .reveal elements as they enter view) ----
  var reveals = document.querySelectorAll('.reveal');
  if(reveals.length){
    var revealAll = function(){ reveals.forEach(function(el){ el.classList.add('in'); }); };
    if('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(en){
          if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });
      reveals.forEach(function(el){ io.observe(el); });
      // Safety net: never let content stay hidden, even if the observer misses.
      setTimeout(revealAll, 2500);
    } else {
      revealAll();
    }
  }

  // ---- News carousel arrows ----
  var track = document.getElementById('carTrack');
  if(track){
    var step = function(){ return Math.max(track.clientWidth * 0.85, 280); };
    var cprev = document.getElementById('carPrev'), cnext = document.getElementById('carNext');
    if(cprev) cprev.addEventListener('click', function(){ track.scrollBy({ left: -step(), behavior: 'smooth' }); });
    if(cnext) cnext.addEventListener('click', function(){ track.scrollBy({ left: step(), behavior: 'smooth' }); });
    var sync = function(){
      if(cprev) cprev.disabled = track.scrollLeft <= 2;
      if(cnext) cnext.disabled = track.scrollLeft >= (track.scrollWidth - track.clientWidth - 2);
    };
    track.addEventListener('scroll', sync); window.addEventListener('resize', sync); sync();
  }

  // ---- Dispatch article prev/next (left = newer, right = older) ----
  var DISPATCH = ['article-champions.html','article-velkovic-statement.html','article-vff-investigation.html','article-disciplinary.html','article-vff-findings.html','article-ganivic.html','article-board-future.html','article-varga-appointed.html','article-varga-scouted.html'];
  var artFile = location.pathname.split('/').pop();
  var ai = DISPATCH.indexOf(artFile);
  if(ai !== -1){
    var older = ai > 0 ? DISPATCH[ai-1] : null;
    var newer = ai < DISPATCH.length-1 ? DISPATCH[ai+1] : null;
    var addArrow = function(dir, href, label){
      if(!href) return;
      var a = document.createElement('a');
      a.className = 'art-nav ' + dir; a.href = href; a.title = label; a.setAttribute('aria-label', label);
      a.innerHTML = (dir === 'prev') ? '‹' : '›';
      document.body.appendChild(a);
    };
    addArrow('prev', newer, 'Newer post');
    addArrow('next', older, 'Older post');
    document.addEventListener('keydown', function(e){
      if(e.key === 'ArrowLeft' && newer) location.href = newer;
      if(e.key === 'ArrowRight' && older) location.href = older;
    });
  }

});
