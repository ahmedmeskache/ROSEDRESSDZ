window.ROSEDRESS = window.ROSEDRESS || {};

(function(){

  var PAGES = [
    {href:"index.html", label:"Home"},
    {href:"shop.html", label:"Shop"},
    {href:"collections.html", label:"Collections"},
    {href:"lookbook.html", label:"Lookbook"},
    {href:"about.html", label:"About"},
    {href:"contact.html", label:"Contact"},
    {href:"cart.html", label:"Cart"}
  ];

  ROSEDRESS.renderHeader = function(active){
    var nav = document.querySelector('header#site-header') || document.createElement('header');
    nav.id = 'site-header';
    nav.className = 'fixed top-0 w-full z-50 nav-fixed h-24 flex items-center justify-between px-6 md:px-16';
    nav.style.cssText = 'background:rgba(246,242,236,.85);backdrop-filter:blur(10px);border-bottom:1px solid rgba(156,139,119,.25);';

    var center = PAGES[0];
    var left = PAGES.slice(1,4);
    var right = PAGES.slice(4);

    function link(page){
      var isActive = page.href === active;
      return '<a href="'+page.href+'" class="nav-link hover:text-[#c9a876] transition-colors '+(isActive?'text-[#c9a876]':'')+'" data-cart-page="'+((page.href==='cart.html')?'yes':'')+'">'+page.label.toUpperCase()+'</a>';
    }

    nav.innerHTML =
      '<div class="hidden lg:flex gap-8 text-[11px] tracking-[0.2em] font-medium">'+
        left.map(link).join('')+
      '</div>'+
      '<div class="absolute left-1/2 -translate-x-1/2 flex flex-col items-center leading-none">'+
        '<a href="index.html" class="block" aria-label="Rosedress">'+
          '<img src="logo.svg" alt="Rosedress" class="h-12 md:h-14 w-auto object-contain">'+
        '</a>'+
        '<span class="hidden md:block text-[10px] tracking-[0.5em] text-[#9c8b77] mt-1">ROSEDRESS COLLECTION</span>'+
      '</div>'+
      '<div class="flex items-center gap-6 md:gap-7">'+
        '<div class="hidden lg:flex gap-8 text-[11px] tracking-[0.2em] font-medium">'+
          right.map(link).join('')+
        '</div>'+
        '<button class="hover:text-[#c9a876] transition-colors text-xl" aria-label="Search"><iconify-icon icon="lucide:search"></iconify-icon></button>'+
        '<a href="cart.html" class="hover:text-[#c9a876] transition-colors text-xl relative" aria-label="Cart">'+
          '<iconify-icon icon="lucide:shopping-bag"></iconify-icon>'+
          '<span class="cart-count absolute -top-1 -right-2 text-[10px] bg-[#c9a876] text-white w-4 h-4 rounded-full flex items-center justify-center">0</span>'+
        '</a>'+
        '<button class="text-2xl lg:hidden" id="menuToggle" aria-label="Menu"><iconify-icon icon="lucide:menu"></iconify-icon></button>'+
      '</div>'+
      '<div id="mobileMenu" class="mobile-menu fixed inset-0 z-40 bg-[#f6f2ec] flex flex-col items-center justify-center gap-8 opacity-0 invisible">'+
        PAGES.map(function(p){ return '<a href="'+p.href+'" class="text-2xl font-serif">'+p.label+'</a>'; }).join('')+
      '</div>';

    var holder = document.querySelector('#header-holder');
    if(holder){ holder.parentNode.insertBefore(nav, holder.nextSibling); holder.remove(); }
    else { document.body.insertBefore(nav, document.body.firstChild); }
  };

  ROSEDRESS.renderFooter = function(){
    var f = document.querySelector('footer#site-footer');
    if(!f){ return; }
    f.className = 'py-20 px-6 md:px-16 bg-white border-t border-[#f6f2ec]';
    f.innerHTML =
      '<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20">'+
        '<div class="md:col-span-2">'+
          '<a href="index.html" class="block mb-8 inline-block"><img src="logo.svg" alt="Rosedress" class="h-16 md:h-24 w-auto object-contain"></a>'+
          '<p class="text-sm text-gray-500 leading-loose max-w-sm font-light italic font-classic">Modesty and elegance, cut from the same cloth. Every Rosedress piece is designed to make you feel confident, beautiful and true to your values.</p>'+
        '</div>'+
        '<div class="space-y-6">'+
          '<h5 class="text-[10px] tracking-[0.4em] uppercase text-[#c9a876] font-bold">Explore</h5>'+
          '<ul class="space-y-4 text-[13px] font-light">'+
            '<li><a href="shop.html" class="hover:text-[#c9a876] transition-colors">Shop</a></li>'+
            '<li><a href="collections.html" class="hover:text-[#c9a876] transition-colors">Collections</a></li>'+
            '<li><a href="lookbook.html" class="hover:text-[#c9a876] transition-colors">Lookbook</a></li>'+
            '<li><a href="about.html" class="hover:text-[#c9a876] transition-colors">Our Story</a></li>'+
          '</ul>'+
        '</div>'+
        '<div class="space-y-6">'+
          '<h5 class="text-[10px] tracking-[0.4em] uppercase text-[#c9a876] font-bold">Follow</h5>'+
          '<ul class="space-y-4 text-[13px] font-light">'+
            '<li><a href="https://www.instagram.com/rosedressdz/" target="_blank" rel="noopener" class="hover:text-[#c9a876] transition-colors inline-flex items-center gap-2"><iconify-icon icon="lucide:instagram" class="text-base"></iconify-icon> @rosedressdz</a></li>'+
            '<li><a href="contact.html" class="hover:text-[#c9a876] transition-colors">Contact us</a></li>'+
            '<li><a href="contact.html" class="hover:text-[#c9a876] transition-colors">Visit Rosedress</a></li>'+
          '</ul>'+
        '</div>'+
      '</div>'+
      '<div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#9c8b77]/15 flex flex-col md:flex-row justify-between gap-4 text-[11px] tracking-wide text-gray-400">'+
        '<span>© 2026 Rosedress — Annaba, Algeria</span>'+
        '<span>Powered by <span class="text-[#c9a876] font-semibold tracking-[0.3em] uppercase">VisionDz</span></span>'+
      '</div>';
  };

  var activePage = (location.pathname.split('/').pop() || 'index.html');
  ROSEDRESS.renderHeader(activePage);
  ROSEDRESS.renderFooter();

  document.addEventListener('DOMContentLoaded', function(){
    ROSEDRESS.initGlobalUI();
  });

  ROSEDRESS.initGlobalUI = function(){
    // mobile menu
    var toggle = document.getElementById('menuToggle');
    var menu = document.getElementById('mobileMenu');
    if(toggle && menu){
      var open = false;
      toggle.addEventListener('click', function(){
        open = !open;
        menu.classList.toggle('opacity-0', !open);
        menu.classList.toggle('invisible', !open);
      });
      menu.querySelectorAll('a').forEach(function(a){
        a.addEventListener('click', function(){ open=false; menu.classList.add('opacity-0','invisible'); });
      });
    }
    // nav shadow
    var nav = document.getElementById('site-header');
    if(nav){
      function onScroll(){ nav.classList.toggle('scrolled', window.scrollY>40); }
      window.addEventListener('scroll', onScroll, {passive:true});
      onScroll();
    }
    // cart count
    ROSEDRESS.updateCartCount();
    // scroll reveal
    if('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
      },{threshold:.12});
      document.querySelectorAll('.scroll-reveal,.reveal-left,.reveal-right').forEach(function(el){ io.observe(el); });
    } else {
      document.querySelectorAll('.scroll-reveal,.reveal-left,.reveal-right').forEach(function(el){ el.classList.add('visible'); });
    }
  };

  // ===== CART (localStorage demo) =====
  ROSEDRESS.getCart = function(){
    try { return JSON.parse(localStorage.getItem('rosedress_cart')) || []; } catch(e){ return []; }
  };
  ROSEDRESS.saveCart = function(cart){ localStorage.setItem('rosedress_cart', JSON.stringify(cart)); };
  ROSEDRESS.addToCart = function(id, size){
    var cart = ROSEDRESS.getCart();
    var item = cart.find(function(i){ return i.id===id && i.size===(size||''); });
    if(item){ item.qty = (item.qty||1)+1; }
    else { cart.push({id:id, size:size||'', qty:1}); }
    ROSEDRESS.saveCart(cart);
    ROSEDRESS.updateCartCount();
  };
  ROSEDRESS.updateCartCount = function(){
    var n = ROSEDRESS.getCart().reduce(function(s,i){ return s+(i.qty||1); },0);
    document.querySelectorAll('.cart-count').forEach(function(el){ el.textContent = n; });
  };
})();
