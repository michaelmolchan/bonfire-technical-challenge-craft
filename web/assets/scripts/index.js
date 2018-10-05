
$(() => {
  const menuIcon = document.querySelector('.menuIcon')
  const nav = document.querySelector('.overlay-menu')

  menuIcon.addEventListener('click', () => {
    if (nav.style.transform !== 'translateX(0%)') {
      nav.style.transform = 'translateX(0%)'
      nav.style.transition = 'transform 0.2s ease-out'
    } else {
      nav.style.transform = 'translateX(-100%)'
      nav.style.transition = 'transform 0.2s ease-out'
    }
  })

  // closes mobile menu when a link is clicked
  $('#menu').click(() => {
    toggleIcon.className = 'menuIcon'
    nav.style.transform = 'translateX(-100%)'
    nav.style.transition = 'transform 0.2s ease-out'
  })

  // Add active class to the current button (highlight it)
  const btns = document.querySelectorAll('#buttons .btn')
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      const current = document.getElementsByClassName('active')
      current[0].className = current[0].className.replace(' active', '')
      this.className += ' active'
    })
  }

  $('#show-all').click(() => {
    $('.even').fadeIn()
    $('.odd').fadeIn()
  })

  $('#show-odd').click(() => {
    $('.even').fadeOut()
    $('.odd').fadeIn()
  })

  $('#show-even').click(() => {
    $('.odd').fadeOut()
    $('.even').fadeIn()
  })

  // GreenSock Box Hover Effect
  $('.section').hover(over, out);

  function over(){
    TweenMax.to(this, .3, {y:-15, boxShadow: '0px 30px 30px 0px rgba(61, 85, 92, 0.1)', borderTop: '3px solid rgba(199, 72, 107, 1)', ease: Power0.easeNone})
    TweenMax.to($(this).find("h1"), .3, {y:-40, color: '#caa97d', ease: Power0.easeNone})
    TweenMax.to($(this).find("p"), .3, {y:-40, color: '#1d314c', ease: Power0.easeNone})
    TweenMax.to($(this).find("button"), .3, {y:-20, ease: Power0.easeNone, opacity: 1});
  }

  function out(){
    TweenMax.to(this, .3, {y: 0, boxShadow: '1px 2px 5px 1px rgba(0, 0, 0, 0.05)', borderTop: '3px solid rgba(199, 72, 107, 0)', ease: Power0.easeNone})
    TweenMax.to($(this).find("h1"), .3, {y:0, color: '#aaaeb6', ease: Power0.easeNone})
    TweenMax.to($(this).find("p"), .3, {y:0, color: '#696579', ease: Power0.easeNone})
    TweenMax.to($(this).find("button"), .3, {y:0, ease: Power0.easeNone, opacity: 0});
  }

  // Hamburger Menu Toggle Animation
  var $iconBarTop = $('.menu-icon-top'),
    $iconBarMiddle = $('.menu-icon-middle'),
    $iconBarBottom = $('.menu-icon-bottom');

  var tlMenuToggle = new TimelineMax({paused:true});

  tlMenuToggle
    .to($iconBarTop, .8, {y: 10, rotation:45, ease: Elastic.easeOut.config(1, 0.5)})
    .to($iconBarMiddle, .1, {backgroundColor: 'rgb(250, 250, 250, 0)', ease: Power0.easeNone}, '-=.8')
    .to($iconBarBottom, .8, {y: -10, rotation:-45, ease: Elastic.easeOut.config(1, 0.5)}, '-=.8');

  const toggleIcon = document.querySelector('.menuIcon')

  toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className !== 'menuIcon toggle') {
      toggleIcon.className += ' toggle'
      tlMenuToggle.play().timeScale(1);
    } else {
      toggleIcon.className = 'menuIcon'
      tlMenuToggle.reverse().timeScale(2);
    }
  })
})
