(()=>{"use strict";(()=>{const e=document.querySelector(".header-contacts__arrow img"),t=document.querySelector(".header-contacts__phone-number-accord"),o=t.querySelector(".header-contacts__phone-number");e.setAttribute("style","transform: rotate(0deg);"),e.addEventListener("click",(()=>{"transform: rotate(0deg);"==e.getAttribute("style")?(t.style.top="30px",e.style.transform="rotate(180deg)",o.style.opacity=1):(t.style.top="0",e.style.transform="rotate(0deg)",o.style.opacity=0)}))})(),(()=>{const e=document.querySelector(".menu__icon"),t=document.querySelector(".popup-menu"),o=t.querySelector(".popup-dialog-menu"),r=t.querySelector(".close"),l=document.querySelector(".popup-menu-nav"),n=document.getElementById("main"),i=document.getElementById("formula"),c=document.getElementById("repair-types"),s=document.getElementById("portfolio"),a=document.getElementById("transparency"),d=document.getElementById("director"),m=document.getElementById("reviews"),u=document.getElementById("faq"),y=()=>{window.innerWidth<576?(t.style.visibility="hidden",o.style.transform="translate3d(0, -100vh, 0)"):(t.style.visibility="hidden",o.style.transform="translate3d(645px, 0, 0)")};e.addEventListener("click",(()=>{t.style.visibility="visible",o.style.transform="translate3d(0, 0, 0)"})),r.addEventListener("click",y),l.addEventListener("click",(e=>{e.preventDefault(),e.target.matches('[href="#main"]')?(n.scrollIntoView({block:"start",behavior:"smooth"}),y()):e.target.matches('[href="#formula"]')?(i.scrollIntoView({block:"start",behavior:"smooth"}),y()):e.target.matches('[href="#repair-types"]')?(c.scrollIntoView({block:"start",behavior:"smooth"}),y()):e.target.matches('[href="#portfolio"]')?(s.scrollIntoView({block:"start",behavior:"smooth"}),y()):e.target.matches('[href="#transparency"]')?(a.scrollIntoView({block:"start",behavior:"smooth"}),y()):e.target.matches('[href="#director"]')?(d.scrollIntoView({block:"start",behavior:"smooth"}),y()):e.target.matches('[href="#reviews"]')?(m.scrollIntoView({block:"start",behavior:"smooth"}),y()):e.target.matches('[href="#faq"]')?(u.scrollIntoView({block:"start",behavior:"smooth"}),y()):e.target.matches(".menu-link")&&y()}))})(),(()=>{const e=document.querySelector(".button-footer"),t=document.getElementById("main");e.addEventListener("click",(e=>{e.preventDefault(),t.scrollIntoView({block:"start",behavior:"smooth"})}))})(),(()=>{const e=document.querySelectorAll(".link-list"),t=document.querySelector(".popup-repair-types");t.querySelector(".close").addEventListener("click",(()=>{t.style.visibility="hidden"})),e.forEach(((e,o)=>{e.addEventListener("click",(()=>{t.style.visibility="visible"}))}))})(),(()=>{const e=document.querySelector(".link-privacy"),t=document.querySelector(".popup-privacy");t.querySelector(".close").addEventListener("click",(()=>{t.style.visibility="hidden"})),e.addEventListener("click",(()=>{t.style.visibility="visible"}))})(),(()=>{const e=document.querySelectorAll('[name="phone"]'),t=e=>{e.target.value=o(e.target.value)},o=e=>e.replace(/\D/g,"").replace(/^(\d)/,"($1").replace(/^(\(\d{3})(\d)/,"$1) $2").replace(/(\d{3})(\d{1,4})/,"$1-$2").replace(/(-\d{4})\d+?$/,"$1");e.forEach(((e,o)=>[e.addEventListener("input",t)]))})(),(()=>{const e=document.querySelectorAll(".formula-item-popup");document.querySelectorAll(".formula-item__icon-inner-text").forEach(((t,o)=>{t.addEventListener("mouseenter",(()=>{e[o].style.visibility="visible",e[o].style.opacity=1,console.log(e[o].getBoundingClientRect().top),e[o].getBoundingClientRect().top<=0&&(e[o].style.transform="rotate(180deg)",e[o].style.transform="rotate(180deg)")})),t.addEventListener("mouseout",(()=>{e[o].style.visibility="hidden",e[o].style.opacity=.1}))}))})()})();