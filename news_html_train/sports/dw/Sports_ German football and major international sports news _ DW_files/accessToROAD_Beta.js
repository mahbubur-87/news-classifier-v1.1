var DWDE;(DWDE=window.DWDE||{}).accessToBeta={roadOverlaySelector:"#accesstobeta",overlayVisibleClass:"accesstobeta--visible",overlayMinifiedClass:"accesstobeta--minified",accessFlag:"accessToRoadBeta",init:function(){const e=document.querySelector(this.roadOverlaySelector);e&&this.initialDisplay(e.classList)},toggleFullMini:function(){const e=document.querySelector(this.roadOverlaySelector).classList;e&&(e.contains(this.overlayVisibleClass)?e.remove(this.overlayVisibleClass):e.add(this.overlayVisibleClass),e.contains(this.overlayMinifiedClass)?e.remove(this.overlayMinifiedClass):e.add(this.overlayMinifiedClass))},setFlag:function(){DWDE.dsgvo.isStoringCookiesOkay()&&!localStorage.getItem(this.accessFlag)&&localStorage.setItem(this.accessFlag,"true")},initialDisplay:function(){const e=localStorage.getItem(this.accessFlag);DWDE.dsgvo.isStoringCookiesOkay()&&("true"===e?($(this.roadOverlaySelector).addClass(this.overlayMinifiedClass),DWDE.accessToBeta.addSpaceOnSocialIcon()):document.addEventListener("scroll",function e(){setTimeout(function(){$(DWDE.accessToBeta.roadOverlaySelector).addClass(DWDE.accessToBeta.overlayVisibleClass),DWDE.accessToBeta.setFlag(),DWDE.accessToBeta.addSpaceOnSocialIcon(),document.removeEventListener("scroll",e)},5e3)}))},addSpaceOnSocialIcon:function(){const e=document.querySelector(".sharing__share--L"),s=document.querySelector(".sharing__more");e&&s&&(e.classList.add("sharing__share--L-accessToBeta"),s.classList.add("sharing__more--accessToBeta"))}},jQuery(document).ready(function(){DWDE.accessToBeta.init();const e=document.querySelector(".accesstobeta__arrow"),s=document.querySelector(".accesstobeta__btn--ok");e&&e.addEventListener("click",function(){DWDE.accessToBeta.toggleFullMini()}),s&&s.addEventListener("click",function(){DWDE.accessToBeta.setFlag()})});