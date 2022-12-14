// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

const iconHome = document.querySelector(".for__menu");
const menuHome = document.querySelectorAll(".menu__home");
const activeItem = document.querySelectorAll(".content-list__item");
const btn = document.querySelectorAll(".btn");
const changeConnect = document.querySelectorAll(".content-title-connect");
const changeBground = document.querySelectorAll(".item2-contain-content");
const linechart = document.querySelectorAll(".line-chart");
const timelenghtbtn = document.querySelectorAll(".time-lenght-btn");
const monthDate = document.querySelectorAll(".month-data ");
const inforimg = document.querySelector(".infor-title-img");
const inforbranch = document.querySelector(".infor-title-branch");

inforimg.onclick = () => {
  inforbranch.classList.toggle("active");
};
// item 1 .........................

$(document).ready(() => {
  $(".list__item-image").slick({
    slidesToShow: 1,
    scrollToShow: 1,
    autoplay: true,
    lazyLoad: "ondemand",
    autoplaySpeed: 2100,
    arrows: false,
    // draggable: false,
    infinite: true,
    fade: true,
    cssEase: "linear",
  });
});

menuHome.forEach((value, index) => {
  const activeIndex = activeItem[index];

  value.onclick = () => {
    document.querySelector(".menu__home.active").classList.remove("active");
    document
      .querySelector(".content-list__item.active")
      .classList.remove("active");
    value.classList.add("active");
    activeIndex.classList.add("active");
  };
});

// item 2 ..........................

btn.forEach((value, index) => {
  const indexConnect = changeConnect[index];
  const changeBground = document.querySelectorAll(".item2-contain-content");
  const indexBroung = changeBground[index];
  value.onclick = (e) => {
    if (e.target.innerText === "off") {
      e.target.innerText = "on";
      indexConnect.innerText = "Connected ";
      indexBroung.classList.add("active");
    } else if (e.target.innerText === "on") {
      e.target.innerText = "off";
      indexConnect.innerText = "Not Connect";
      indexBroung.classList.remove("active");
    }
  };
});

// item 3

timelenghtbtn.forEach((value, index) => {
  const chartIndex = linechart[index];
  const monthDateIndex = monthDate[index];
  value.onclick = () => {
    document.querySelector(".month-data.active").classList.remove("active");
    document.querySelector(".line-chart.active").classList.remove("active");
    document
      .querySelector(".time-lenght-btn.active")
      .classList.remove("active");
    value.classList.add("active");
    chartIndex.classList.add("active");
    monthDateIndex.classList.add("active");
  };
});
