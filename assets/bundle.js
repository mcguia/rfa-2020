!function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";var n=m(i(1)),o=m(i(2)),a=m(i(3)),r=m(i(4)),s=m(i(5)),c=m(i(6)),l=m(i(7)),d=m(i(8)),u=m(i(9)),f=m(i(10)),v=m(i(11)),p=m(i(12));function m(e){return e&&e.__esModule?e:{default:e}}n.default.init(),a.default.init(),s.default.init(),c.default.init(),l.default.init(),d.default.init(),u.default.init(),f.default.init(),v.default.init(),p.default.markdownLinksNewPage(),"/"!==window.location.pathname&&"/rfa-2019/"!==window.location.pathname||(r.default.init(),o.default.init())},function(e,t,i){"use strict";var n={toggleExpandable:function(){document.querySelector(".expandable");$(".read-more").on("click",function(e){var t=e.currentTarget.closest(".expandable");t.classList.contains("js-expandable-active")?t.classList.remove("js-expandable-active"):t.classList.add("js-expandable-active")})},init:function(){this.toggleExpandable()}};e.exports=n},function(e,t,i){"use strict";var n={filterExamples:function(e){var t=this;document.querySelectorAll(".examples-wrapper").forEach(function(i){-1==i.getAttribute("data-examples").indexOf(e)?i.classList.add("examples-wrapper--hidden"):i.classList.remove("examples-wrapper--hidden");var n=i.parentElement;t.hasVisibleElements(n)?n.classList.remove("filterable--empty"):n.classList.add("filterable--empty")})},filterByAttribute:function(){var e=this;document.querySelector(".issues-dropdown-filter__select").addEventListener("change",function(t){var i=t.currentTarget.options[t.currentTarget.selectedIndex].value;e.filterExamples(i)})},filterByUI:function(){var e=document.querySelector(".issues-dropdown-filter__select").value;this.filterExamples(e)},hasVisibleElements:function(e){return Array.from(e.children).filter(function(e){return $(e).is(":visible")}).length},init:function(){this.filterByAttribute(),this.filterByUI()}};e.exports=n},function(e,t,i){"use strict";var n={fixNav:function(){var e=$(window);if($(".page-section--nav").length>0){var t=$(".page-section--nav"),i=t.offset().top;e.scroll(function(){t.toggleClass("fixed",e.scrollTop()>i)})}},handleRedirectDropdownSelect:function(){document.querySelector(".criteria-dropdown-nav__select").addEventListener("change",function(e){var t=e.currentTarget.options[e.currentTarget.selectedIndex].getAttribute("data-path");window.location.href=t})},init:function(){var e=document.querySelector(".criteria-dropdown-nav__select");this.fixNav(),e&&this.handleRedirectDropdownSelect()}};e.exports=n},function(e,t,i){"use strict";var n={fixIndexTable:function(){var e=$(window);if($(".fixed-section").length>0){var t=$(".fixed-section"),i=($(".fixed-section-wrapper"),t.offset().top);$(".read-more").on("click",function(){i=t.offset().top});e.scroll(function(){if(e.scrollTop()>i){t.addClass("fixed");var n=document.querySelector(".fixed-section-wrapper").getBoundingClientRect(),o=Math.abs(n.top)+50,a=n.height;$(".content-section").css("margin-top",$(".fixed-section").height()),$(".examples-grid__content-row:first-of-type .examples-grid__content-cell").css("padding-top","7rem"),a<=Math.abs(o)?t.css("opacity",0):t.css("opacity",1),$(".slide-panel__content").addClass("panel-fixed");document.querySelector(".slide-panel__wrapper--compact").getBoundingClientRect().bottom}else t.removeClass("fixed"),$(".content-section").css("margin-top","initial"),$(".examples-grid__content-row:first-of-type .examples-grid__content-cell").css("padding-top","3rem"),$(".slide-panel__content").removeClass("panel-fixed").removeClass("fixed-bottom")})}},init:function(){this.fixIndexTable()}};e.exports=n},function(e,t,i){"use strict";var n={openModal:function(){$(".js-open-modal").click(function(e){$(e.currentTarget).parent().find(".js-target-modal").addClass("js-active"),$("#overlay").addClass("js-active"),$("body").addClass("js-body-modal-active")})},closeModal:function(){$("body").on("click",".js-close-modal",function(){$(".js-target-modal").removeClass("js-active"),$("#overlay").removeClass("js-active"),$("body").removeClass("js-body-modal-active")})},clickOverlayCloseModal:function(){$("#overlay").click(function(){$("body").removeClass("js-body-modal-active")})},init:function(){this.openModal(),this.closeModal(),this.clickOverlayCloseModal()}};e.exports=n},function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var o={slideContainer:$(".nav"),slideTarget:$(".nav__container"),overlay:document.querySelector("#overlay"),direction:document.querySelector(".js-trigger-nav").getAttribute("data-direction"),mainMenu:function(){o.slideTarget.animate(n({},o.direction,"-100%"),"slow").fadeOut(5),o.slideContainer.removeClass("is-visible"),document.querySelector(".js-trigger-nav").addEventListener("click",function(){o.slideTarget.animate(n({},o.direction,"0%"),500).css("display","block"),o.slideContainer.addClass("is-visible"),o.overlay.classList.add("js-active")})},closeMenuButton:function(){document.querySelector(".js-close-nav").addEventListener("click",function(){o.slideTarget.animate(n({},o.direction,"-100%"),700).fadeOut(5),o.slideContainer.removeClass("is-visible"),o.overlay.classList.remove("js-active")})},closeMenuOverlay:function(){document.querySelector("#overlay").addEventListener("click",function(){o.slideTarget.animate(n({},o.direction,"-100%"),700).fadeOut(5),o.slideContainer.removeClass("is-visible"),o.overlay.classList.remove("js-active")})},init:function(){this.mainMenu(),this.closeMenuButton(),this.closeMenuOverlay()}};e.exports=o},function(e,t,i){"use strict";var n={onClickOverlay:function(){$("#overlay").click(function(){$(".js-active").removeClass("js-active"),$(".js-active-menu").removeClass("js-active-menu")})},init:function(){this.onClickOverlay()}};e.exports=n},function(e,t,i){"use strict";var n={smoothScrolling:function(){$("a[href*=\\#]:not([href=\\#])").on("click",function(e){var t=$(e.currentTarget.hash),i=e.currentTarget.hostname,n=window.location.hostname,o=e.currentTarget.pathname.replace(/^\//,""),a=window.location.pathname.replace(/^\//,"");return t.length||(t=$("[name="+e.currentTarget.hash.slice(1)+"]")),!t.length||i!==n&&o!==a||($("html, body").animate({scrollTop:t.offset().top},1e3),!1)})},init:function(){this.smoothScrolling()}};e.exports=n},function(e,t,i){"use strict";var n={fixedSearchTrigger:function(){$(".js-trigger-search").on("click",function(e){e.preventDefault(),$(e.currentTarget).parent().addClass("js-active"),$("#overlay").addClass("js-active")})},init:function(){this.fixedSearchTrigger()}};e.exports=n},function(e,t,i){"use strict";var n={closeSticky:function(){$(".js-close-sticky").click(function(){$(".js-target-sticky").removeClass("js-active")})},init:function(){this.closeSticky()}};e.exports=n},function(e,t,i){"use strict";var n={hoverCriteria:function(){$(".title").hover(function(){$(this).find("span.tooltip").css({display:"inline",opacity:"1",visibility:"visible"})},function(){$(this).find("span.tooltip").css({display:"inline",opacity:"0",visibility:"hidden"})})},init:function(){this.hoverCriteria()}};e.exports=n},function(e,t,i){"use strict";var n={markdownLinksNewPage:function(){$(".markdown a").map(function(e,t){return t.setAttribute("target","_blank")})}};e.exports=n}]);