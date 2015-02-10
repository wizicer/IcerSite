/**
 * Shower HTML presentation engine: github.com/shower/shower
 * @copyright 2010–2013 Vadim Makeev, pepelsbey.net
 * @license MIT license: github.com/shower/shower/wiki/MIT-License
 */
window.shower=window.shower||function(e,t,i){var r={},n=e.location,s=t.body,l=[],o=[],a,u=!!(e.history&&e.history.pushState);function d(e){for(var t in e){if(e.hasOwnProperty(t)){this[t]=e[t]}}}d.prototype={getSlideNumber:function(){return this.number},isLast:function(){return r.slideList.length===this.number+1},isFinished:function(){return this.innerComplete>=this.innerLength},process:function(e){if(this.timing){this.initTimer(e);return this}this.next(e);return this},initTimer:function(e){var t=this;if(!t.timing){return false}t.stopTimer();if(t.isFinished()){a=setInterval(function(){t.stopTimer();e.next()},t.timing*(t.innerLength||1))}else{a=setInterval(function(){if(t.isFinished()){t.stopTimer();e.next()}else{t.next(e)}},t.timing)}return this},stopTimer:function(){if(a){clearInterval(a);a=false}return this},prev:function(e){var i,r=this;if(!r.hasInnerNavigation||r.isFinished()||r.innerComplete===0){e.prev();return false}i=t.getElementById(r.id).querySelectorAll(".next.active");if(!i||i.length<1){return false}if(r.innerComplete>0){r.innerComplete--;i[i.length-1].classList.remove("active")}else{e.prev()}return this},next:function(e){var i,r=this;if(!r.hasInnerNavigation||r.isFinished()){e.next();return false}if(!r.isFinished()){i=t.getElementById(r.id).querySelectorAll(".next:not(.active)");i[0].classList.add("active");r.innerComplete++}return this}};r._getData=function(e,t){return e.dataset?e.dataset[t]:e.getAttribute("data-"+t)};r.slideList=[];r.init=function(e,i){var n;e=e||".slide";i=i||"div.progress div";l=t.querySelectorAll(e);o=t.querySelector(i);for(var s=0;s<l.length;s++){if(!l[s].id){l[s].id=s+1}n=r._getData(l[s],"timing");if(n&&/^(\d{1,2}:)?\d{1,3}$/.test(n)){if(n.indexOf(":")!==-1){n=n.split(":");n=(parseInt(n[0],10)*60+parseInt(n[1],10))*1e3}else{n=parseInt(n,10)*1e3}if(n===0){n=false}}else{n=false}r.slideList.push(new d({id:l[s].id,number:s,hasInnerNavigation:null!==l[s].querySelector(".next"),timing:n,innerLength:l[s].querySelectorAll(".next").length,innerComplete:0}))}return r};r._getTransform=function(){var t=Math.max(s.clientWidth/e.innerWidth,s.clientHeight/e.innerHeight);return"scale("+1/t+")"};r._applyTransform=function(e){["WebkitTransform","MozTransform","msTransform","OTransform","transform"].forEach(function(t){s.style[t]=e});return true};r._isNumber=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};r._normalizeSlideNumber=function(e){if(!r._isNumber(e)){throw new Error("Gimme slide number as Number, baby!")}if(e<0){e=0}if(e>=r.slideList.length){e=r.slideList.length-1}return e};r._getSlideIdByEl=function(e){while("BODY"!==e.nodeName&&"HTML"!==e.nodeName){if(e.classList.contains("slide")){return e.id}else{e=e.parentNode}}return""};r._checkInteractiveElement=function(e){return"A"===e.target.nodeName};r.getSlideNumber=function(e){var t=r.slideList.length-1,i;if(e===""){i=0}for(;t>=0;--t){if(e===r.slideList[t].id){i=t;break}}return i};r.go=function(e,t){var i;if(!r._isNumber(e)){throw new Error("Gimme slide number as Number, baby!")}if(!r.slideList[e]){return false}n.hash=r.getSlideHash(e);r.updateProgress(e);r.updateActiveAndVisitedSlides(e);if(r.isSlideMode()){r.showPresenterNotes(e);i=r.slideList[e];if(i.timing){i.initTimer(r)}}if(typeof t==="function"){t()}return e};r.next=function(e){var t=r.getCurrentSlideNumber(),i=r.slideList[t+1];if(!i){return false}r.go(t+1);if(typeof e==="function"){e()}return this};r._turnNextSlide=function(e){var t=r.getCurrentSlideNumber(),i=r.slideList[t];if(r.isSlideMode()){i.stopTimer();i.next(r)}else{r.go(t+1)}if(typeof e==="function"){e()}return};r.prev=r.previous=function(e){var t=r.getCurrentSlideNumber();if(t<1){return false}r.go(t-1);if(typeof e==="function"){e()}return true};r._turnPreviousSlide=function(e){var t=r.getCurrentSlideNumber(),i=r.slideList[t];i.stopTimer();if(r.isSlideMode()){i.prev(r)}else{r.go(t-1)}if(typeof e==="function"){e()}return true};r.first=function(e){var t=r.slideList[r.getCurrentSlideNumber()];t.timing&&t.stopTimer();r.go(0);if(typeof e==="function"){e()}};r.last=function(e){var t=r.slideList[r.getCurrentSlideNumber()];t.timing&&t.stopTimer();r.go(r.slideList.length-1);if(typeof e==="function"){e()}};r.enterSlideMode=function(e){var t=r.getCurrentSlideNumber();s.classList.remove("list");s.classList.add("full");if(r.isListMode()&&u){history.pushState(null,null,n.pathname+"?full"+r.getSlideHash(t))}r._applyTransform(r._getTransform());if(typeof e==="function"){e()}return true};r.enterListMode=function(e){var t;s.classList.remove("full");s.classList.add("list");r.clearPresenterNotes();if(r.isListMode()){return false}t=r.getCurrentSlideNumber();r.slideList[t].stopTimer();if(r.isSlideMode()&&u){history.pushState(null,null,n.pathname+r.getSlideHash(t))}r.scrollToSlide(t);r._applyTransform("none");if(typeof e==="function"){e()}return true};r.toggleMode=function(e){if(r.isListMode()){r.enterSlideMode()}else{r.enterListMode()}if(typeof e==="function"){e()}return true};r.getCurrentSlideNumber=function(){var e=r.slideList.length-1,t=n.hash.substr(1);for(;e>=0;--e){if(t===r.slideList[e].id){return e}}return-1};r.scrollToSlide=function(i){var n,s=false;if(!r._isNumber(i)){throw new Error("Gimme slide number as Number, baby!")}if(r.isSlideMode()){throw new Error("You can't scroll to because you in slide mode. Please, switch to list mode.")}if(-1===i){return s}if(r.slideList[i]){n=t.getElementById(r.slideList[i].id);e.scrollTo(0,n.offsetTop);s=true}else{throw new Error("There is no slide with number "+i)}return s};r.isListMode=function(){return u?!/^full.*/.test(n.search.substr(1)):s.classList.contains("list")};r.isSlideMode=function(){return u?/^full.*/.test(n.search.substr(1)):s.classList.contains("full")};r.updateProgress=function(e){if(null===o){return false}if(!r._isNumber(e)){throw new Error("Gimme slide number as Number, baby!")}o.style.width=(100/(r.slideList.length-1)*r._normalizeSlideNumber(e)).toFixed(2)+"%";return true};r.updateActiveAndVisitedSlides=function(e){var i,n,s=r.slideList.length;e=r._normalizeSlideNumber(e);if(!r._isNumber(e)){throw new Error("Gimme slide number as Number, baby!")}for(i=0;i<s;++i){n=t.getElementById(r.slideList[i].id);if(i<e){n.classList.remove("active");n.classList.add("visited")}else if(i>e){n.classList.remove("visited");n.classList.remove("active")}else{n.classList.remove("visited");n.classList.add("active")}}return true};r.clearPresenterNotes=function(){if(r.isSlideMode()&&e.console&&e.console.clear){console.clear()}};r.showPresenterNotes=function(i){r.clearPresenterNotes();if(e.console){i=r._normalizeSlideNumber(i);var n=r.slideList[i].id,s=r.slideList[i+1]?r.slideList[i+1].id:null,l=t.getElementById(n).querySelector("footer");if(l&&l.innerHTML){console.info(l.innerHTML.replace(/\n\s+/g,"\n"))}if(s){var o=t.getElementById(s).querySelector("h2");if(o){o=o.innerHTML.replace(/^\s+|<[^>]+>/g,"");console.info("NEXT: "+o)}}}};r.getSlideHash=function(e){if(!r._isNumber(e)){throw new Error("Gimme slide number as Number, baby!")}e=r._normalizeSlideNumber(e);return"#"+r.slideList[e].id};e.addEventListener("DOMContentLoaded",function(){if(s.classList.contains("full")||r.isSlideMode()){r.go(r.getCurrentSlideNumber());r.enterSlideMode()}},false);e.addEventListener("popstate",function(){if(r.isListMode()){r.enterListMode()}else{r.enterSlideMode()}},false);e.addEventListener("resize",function(){if(r.isSlideMode()){r._applyTransform(r._getTransform())}},false);t.addEventListener("keydown",function(e){var t=r.getCurrentSlideNumber(),i=r.slideList[t!==-1?t:0],n;switch(e.which){case 80:if(r.isListMode()&&e.altKey&&e.metaKey){e.preventDefault();n=i.number;r.go(n);r.enterSlideMode();r.showPresenterNotes(n);i.timing&&i.initTimer(r)}break;case 116:e.preventDefault();if(r.isListMode()){n=e.shiftKey?i.number:0;r.go(n);r.enterSlideMode();r.showPresenterNotes(n);i.timing&&i.initTimer(r)}else{r.enterListMode()}break;case 13:if(r.isListMode()&&-1!==t){e.preventDefault();r.enterSlideMode();r.showPresenterNotes(t);i.timing&&i.initTimer(r)}break;case 27:if(r.isSlideMode()){e.preventDefault();r.enterListMode()}break;case 33:case 38:case 37:case 72:case 75:if(e.altKey||e.ctrlKey||e.metaKey){return}e.preventDefault();r._turnPreviousSlide();break;case 34:case 40:case 39:case 76:case 74:if(e.altKey||e.ctrlKey||e.metaKey){return}e.preventDefault();r._turnNextSlide();break;case 36:e.preventDefault();r.first();break;case 35:e.preventDefault();r.last();break;case 9:case 32:e.preventDefault();r[e.shiftKey?"_turnPreviousSlide":"_turnNextSlide"]();break;default:}},false);r.init();t.addEventListener("click",function(e){var t=r.getSlideNumber(r._getSlideIdByEl(e.target)),i;if(r.isListMode()&&r._getSlideIdByEl(e.target)){r.go(t);r.enterSlideMode();r.showPresenterNotes(t);i=r.slideList[t];if(i.timing){i.initTimer(r)}}},false);t.addEventListener("touchstart",function(t){var i=r.getSlideNumber(r._getSlideIdByEl(t.target)),n,s;if(r._getSlideIdByEl(t.target)){if(r.isSlideMode()&&!r._checkInteractiveElement(t)){s=t.touches[0].pageX;if(s>e.innerWidth/2){r._turnNextSlide()}else{r._turnPreviousSlide()}}if(r.isListMode()){r.go(r.getSlideNumber(r._getSlideIdByEl(t.target)));r.enterSlideMode();r.showPresenterNotes(i);n=r.slideList[i];if(n.timing){n.initTimer(r)}}}},false);t.addEventListener("touchmove",function(e){if(r.isSlideMode()){e.preventDefault()}},false);return r}(this,this.document);