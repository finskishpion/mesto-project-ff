(()=>{"use strict";var e=document.querySelector(".places__list");function t(e,t,n,r){var o=e.name,c=e.link,d=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),i=d.querySelector(".card__image"),u=d.querySelector(".card__like-button");return d.querySelector(".card__title").textContent=o,i.alt=o,i.src=c,d.querySelector(".card__delete-button").addEventListener("click",(function(){return t(d)})),i.addEventListener("click",(function(){return n(o,c)})),u.addEventListener("click",(function(){return r(u)})),d}function n(e){e.remove()}function r(e){e.classList.toggle("card__like-button_is-active")}function o(e){e.classList.add("popup_is-animated"),e.classList.add("popup_is-opened"),e.addEventListener("click",i),document.addEventListener("keydown",d)}function c(e){e.classList.add("popup_is-animated"),e.classList.remove("popup_is-opened"),e.removeEventListener("click",i),document.removeEventListener("keydown",d)}function d(e){"Escape"===e.key&&c(document.querySelector(".popup_is-opened"))}function i(e){e.target===e.currentTarget&&c(e.currentTarget)}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(o){return e.append(t(o,n,h,r))}));var u=document.querySelector(".profile__edit-button"),s=document.querySelector(".profile__add-button"),a=document.querySelectorAll(".popup__close"),p=document.querySelector(".popup_type_edit"),l=document.querySelector(".popup_type_new-card"),m=document.querySelector(".popup_type_image"),_=document.querySelector(".profile__title"),v=document.querySelector(".profile__description"),f=document.querySelector(".popup__image"),y=document.querySelector(".popup__caption"),k=document.forms.edit_profile,q=k.elements.name,S=k.elements.description,L=document.forms.new_place,g=L.elements.place_name,E=L.elements.link;function h(e,t){o(m),f.src=t,f.alt=e,y.textContent=e}u.addEventListener("click",(function(){o(p),q.value=_.textContent,S.value=v.textContent})),s.addEventListener("click",(function(){return o(l)})),a.forEach((function(e){e.addEventListener("click",(function(){c(e.closest(".popup"))}))})),k.addEventListener("submit",(function(e){e.preventDefault(),_.textContent=q.value,v.textContent=S.value,c(p)})),L.addEventListener("submit",(function(o){o.preventDefault();var d=t({name:g.value,link:E.value},n,h,r);e.prepend(d),L.reset(),c(l)}))})();