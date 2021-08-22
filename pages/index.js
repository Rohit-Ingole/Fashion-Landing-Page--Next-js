import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Overlay from "../components/Overlay";

import { slideImagesData } from "../constants/slideImagesData";

const Home = () => {
  let nav;
  let hamb;

  useEffect(() => {
    let isScroll = false;

    const scrollSlide = () => {
      if (isScroll) return;

      isScroll = true;

      let currProduct = document.querySelector(".product-info.active");
      currProduct.classList.remove("active");
      productIndex =
        productIndex + 1 > productInfos.length - 1 ? 0 : productIndex + 1;
      productInfos[productIndex].classList.add("active");

      let listitems = document.querySelectorAll(".slide");

      let slider = document.querySelector(".slider");

      let reverse = Array.from(listitems).slice().reverse();

      let left = reverse[0].offsetLeft + "px";
      let height = reverse[0].offsetHeight + "px";
      let width = reverse[0].offsetWidth + "px";
      let zIndex = reverse[0].style.zIndex;

      reverse.forEach((el, index) => {
        if (index < listitems.length - 1) {
          el.style.left = reverse[index + 1].offsetLeft + "px";
          el.style.height = reverse[index + 1].offsetHeight + "px";
          el.style.width = reverse[index + 1].offsetWidth + "px";
          el.style.zIndex = index + 1;
          el.style.transform = "unset";
          el.style.opacity = "1";
        }
        if (index === listitems.length - 1) {
          el.style.transform = "scale(1.5)";
          el.style.opacity = "0";

          let cln = el.cloneNode(true);

          setTimeout(() => {
            el.remove();
            cln.style.transform = "scale(0)";
            cln.style.left = left;
            cln.style.height = height;
            cln.style.width = width;
            // cln.style.transform = 'unset'
            cln.style.opacity = "0";
            cln.style.zIndex = 0;
            cln.style.animation = "unset";
            slider.appendChild(cln);
            isScroll = false;
          }, 1000);
        }
      });
      listitems = document.querySelectorAll(".slide");
      listitems[0].style.zIndex = "4";
    };

    let productIndex = 0;

    let productInfos = document.querySelectorAll(".product-info");

    setTimeout(() => {
      productInfos[productIndex].classList.add("active");
    }, 200);

    let slideControl = document.querySelector(".slide-control");

    slideControl.onclick = (e) => {
      scrollSlide();
    };

    nav = document.querySelector(".nav-overlay");
    hamb = document.querySelector(".hamburger");
  }, []);

  const openNav = () => {
    nav.classList.toggle("active");
    hamb.classList.toggle("active");
  };

  const Slide = ({ url }) => (
    <div className="slide">
      <div
        className="img-holder"
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
    </div>
  );

  return (
    <div
      className="container"
      style={{
        backgroundImage: "url(/images/tamara-bellis-68csPWTnafo-unsplash.jpg)",
      }}
    >
      <Navbar openNav={openNav} />

      <div className="copyright">
        Copyright (c) 2020{" "}
        <a
          href="https://github.com/Rohit-Ingole"
          target="_blank"
          rel="noreferrer"
        >
          Rohit Ingole
        </a>
      </div>

      <Overlay />
      <div className="col-7">
        <div className="slider">
          {slideImagesData.map((item, index) => (
            <Slide key={index} url={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
