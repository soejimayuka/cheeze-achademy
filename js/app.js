/* ==============================
    swiper
  ============================== */
const mySwiper = new Swiper(".swiper-container", {
  // オプション
  speed: 1000,
  centeredSlides: true,
  spaceBetween: 24,
  slidesPerView: "2.5",

  // 自動再生
  autoplay: {
    disableOnInteraction: true,
    delay: 1000,
  },

  loop: true,

  breakpoints: {
    992: {
      spaceBetween: 32,
      slidesPerView: "4",
      centeredSlides: true,
    },
  },
});

/* ==============================
    Drawer
  ============================== */
function Toggle(selector, target) {
  this.ele = document.querySelector(selector);
  this.target = document.querySelector(target);
  this.objectName = selector.substring(4);

  // console.log(this.link);

  this.toggle = function () {
    // this.link..classList.remove(`is-${this.objectName}Active`);
    const isExpanded = this.ele.getAttribute("aria-expanded") !== "false";
    this.ele.setAttribute("aria-expanded", !isExpanded);
    this.target.classList.toggle(`is-${this.objectName}Active`);
  };

  this.ele.addEventListener("click", this.toggle.bind(this));

  // 閉じるevent（アンカーリンク）
  document.querySelectorAll('a[href^="#"]').forEach((e, i) => {
    e.addEventListener("click", this.toggle.bind(this));
  });
}

new Toggle(".js-drawer", "body");
