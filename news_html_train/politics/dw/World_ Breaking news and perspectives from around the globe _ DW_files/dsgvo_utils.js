var DWDE;(DWDE=window.DWDE||{}).dsgvo={privacyFlagStoreCookies:null,privacyFlagLocalStorageKey:"de.dw.settings.privacy",overlaySelector:".cookie",overlayButtonOkaySelector:".cookie__btn--ok",overlayButtonNopeSelector:".cookie__btn--more",overlayVisibleClass:"cookie--visible",init:function(){this.getPrivacyFlag(),"true"!==this.privacyFlagStoreCookies&&(this.initializeListeners(),this.showOverlay())},initializeListeners:function(){$(this.overlaySelector).find(this.overlayButtonOkaySelector).on("click",function(e){DWDE.dsgvo.setPrivacyFlag(e,!0),DWDE.dsgvo.reInitializeScripts()})},reInitializeScripts:function(){googleTracking(),facebookTracking()},getIsStorageAvailable:function(){return"undefined"!=typeof Storage},setPrivacyFlag:function(e,i){if(e.preventDefault(),this.getIsStorageAvailable())try{localStorage.setItem(this.privacyFlagLocalStorageKey,i)}catch(e){}this.hideOverlay()},getPrivacyFlag:function(){if(this.getIsStorageAvailable())try{this.privacyFlagStoreCookies=localStorage.getItem(this.privacyFlagLocalStorageKey)}catch(e){}},showOverlay:function(){setTimeout(function(){$(DWDE.dsgvo.overlaySelector).addClass(DWDE.dsgvo.overlayVisibleClass)}),$(this.overlaySelector).css("display","block")},hideOverlay:function(){$(this.overlaySelector).removeClass(this.overlayVisibleClass),$(this.overlaySelector).fadeOut(),DWDE.accessToBeta.initialDisplay()},isStoringCookiesOkay:function(){return this.getPrivacyFlag(),this.privacyFlagStoreCookies}},jQuery(document).ready(function(){DWDE.dsgvo.init()});