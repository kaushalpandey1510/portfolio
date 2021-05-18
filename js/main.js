$(document).ready(function () {
  //Sticky Navigation

  let nav_offset_top = $(".header_area").height() + 50;

  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area .main_menu").addClass("navbar_fixed");
        } else {
          $(".header_area .main_menu").removeClass("navbar_fixed");
        }
      });
    }
  }

  navbarFixed();

  //Active Tab Trasnsition

  // const sections = document.querySelectorAll('section');
  // const navList = document.querySelectorAll('nav .container-fluid ul li');

  // window.addEventListener('scroll', ()=> {
  //   let current = '';

  //   sections.forEach( section => {
  //     const sectionTop = section.offsetTop;
  //     const sectionHeight = section.clientHeight;
  //     if(pageYOffset >= sectionTop){
  //       current = section.getAttribute('id');
  //     }
  //   })
    
  //   navList.forEach( li => {
  //     li.classList.remove('active');
  //     if(li.classList.contains(current)){
  //       li.classList.add('active');
  //     }
  //   })
  // });
});
