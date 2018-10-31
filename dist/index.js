!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SmoothDnD=t():e.SmoothDnD=t()}(this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};o=function(){return this}();try{o=o||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":r(window))&&(o=window)}e.exports=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.containerInstance="smooth-dnd-container-instance",t.containersInDraggable="smooth-dnd-containers-in-draggable",t.defaultGroupName="@@smooth-dnd-default-group@@",t.wrapperClass="smooth-dnd-draggable-wrapper",t.defaultGrabHandleClass="smooth-dnd-default-grap-handle",t.animationClass="animated",t.translationValue="__smooth_dnd_draggable_translation_value",t.visibilityValue="__smooth_dnd_draggable_visibility_value",t.ghostClass="smooth-dnd-ghost",t.containerClass="smooth-dnd-container",t.extraSizeForInsertion="smooth-dnd-extra-size-for-insertion",t.stretcherElementClass="smooth-dnd-stretcher-element",t.stretcherElementInstance="smooth-dnd-stretcher-instance",t.isDraggableDetached="smoth-dnd-is-draggable-detached",t.disbaleTouchActions="smooth-dnd-disable-touch-action",t.noUserSelectClass="smooth-dnd-no-user-select"},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});t.getIntersection=function(e,t){return{left:Math.max(e.left,t.left),top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom)}};var n=t.getIntersectionOnAxis=function(e,t,n){return"x"===n?{left:Math.max(e.left,t.left),top:e.top,right:Math.min(e.right,t.right),bottom:e.bottom}:{left:e.left,top:Math.max(e.top,t.top),right:e.right,bottom:Math.min(e.bottom,t.bottom)}},o=t.getContainerRect=function(e){var t=e.getBoundingClientRect(),n={left:t.left,right:t.right+10,top:t.top,bottom:t.bottom};if(a(e,"x")&&!i(e,"x")){var o=n.right-n.left;n.right=n.right+e.scrollWidth-o}if(a(e,"y")&&!i(e,"y")){var r=n.bottom-n.top;n.bottom=n.bottom+e.scrollHeight-r}return n},r=(t.getScrollingAxis=function(t){var n=e.getComputedStyle(t),o=n.overflow;if("auto"===o||"scroll"===o)return"xy";var r=n["overflow-x"],i="auto"===r||"scroll"===r,a=n["overflow-y"];return(i?"x":"")+("auto"===a||"scroll"===a?"y":"")||null},t.isScrolling=function(t,n){var o=e.getComputedStyle(t),r=o.overflow,i=o["overflow-"+n];return"auto"===r||"scroll"===r||("auto"===i||"scroll"===i)}),i=t.isScrollingOrHidden=function(t,n){var o=e.getComputedStyle(t),r=o.overflow,i=o["overflow-"+n];return"auto"===r||"scroll"===r||"hidden"===r||("auto"===i||"scroll"===i||"hidden"===i)},a=t.hasBiggerChild=function(e,t){return"x"===t?e.scrollWidth>e.clientWidth:e.scrollHeight>e.clientHeight};t.hasScrollBar=function(e,t){return a(e,t)&&r(e,t)},t.getVisibleRect=function(e,t){var r=e,l=t||o(e);for(r=e.parentElement;r;)a(r,"x")&&i(r,"x")&&(l=n(l,r.getBoundingClientRect(),"x")),a(r,"y")&&i(r,"y")&&(l=n(l,r.getBoundingClientRect(),"y")),r=r.parentElement;return l},t.listenScrollParent=function(t,n){var o=[];return setTimeout(function(){for(var i=t;i;)(r(i,"x")||r(i,"y"))&&(i.addEventListener("scroll",n),o.push(i)),i=i.parentElement;e.addEventListener("scroll",n)},10),{dispose:function(){o.forEach(function(e){e.removeEventListener("scroll",n)}),e.removeEventListener("scroll",n)}}},t.hasParent=function(e,t){for(var n=e;n;){if(n===t)return!0;n=n.parentElement}return!1},t.getParent=function(e,t){for(var n=e;n;){if(n.matches(t))return n;n=n.parentElement}return null},t.hasClass=function(e,t){return e.className.split(" ").map(function(e){return e}).indexOf(t)>-1},t.addClass=function(e,t){if(e){var n=e.className.split(" ").filter(function(e){return e});-1===n.indexOf(t)&&(n.unshift(t),e.className=n.join(" "))}},t.removeClass=function(e,t){if(e){var n=e.className.split(" ").filter(function(e){return e&&e!==t});e.className=n.join(" ")}},t.debounce=function(e,t,n){var o=null;return function(){for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];o&&clearTimeout(o),n&&!o?e.call.apply(e,[void 0].concat(i)):o=setTimeout(function(){o=null,e.call.apply(e,[void 0].concat(i))},t)}},t.removeChildAt=function(e,t){return e.removeChild(e.children[t])},t.addChildAt=function(e,t,n){n>=e.children.lenght?e.appendChild(t):e.insertBefore(t,e.children[n])},t.isMobile=function(){return"undefined"!=typeof window&&!!(e.navigator.userAgent.match(/Android/i)||e.navigator.userAgent.match(/webOS/i)||e.navigator.userAgent.match(/iPhone/i)||e.navigator.userAgent.match(/iPad/i)||e.navigator.userAgent.match(/iPod/i)||e.navigator.userAgent.match(/BlackBerry/i)||e.navigator.userAgent.match(/Windows Phone/i))},t.clearSelection=function(){e.getSelection?e.getSelection().empty?e.getSelection().empty():e.getSelection().removeAllRanges&&e.getSelection().removeAllRanges():e.document.selection&&e.document.selection.empty()},t.getElementCursor=function(t){if(t){var n=e.getComputedStyle(t);if(n)return n.cursor}return null}}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.domDropHandler=function(t){var n=t.element,i=t.draggables;t.layout,t.options;return function(t,a){var l=t.removedIndex,s=t.addedIndex,u=t.droppedElement,c=null;if(null!==l&&(c=(0,o.removeChildAt)(n,l),i.splice(l,1)),null!==s){var d=e.document.createElement("div");d.className=""+r.wrapperClass,d.appendChild(c.firstElementChild||u),d[r.containersInDraggable]=[],(0,o.addChildAt)(n,d,s),s>=i.length?i.push(d):i.splice(s,0,d)}a&&a(t)}},t.reactDropHandler=function(){return{handler:function(e){e.element,e.draggables,e.layout,e.options;return function(e,t){t&&t(e)}}}};var o=n(2),r=n(1)}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t,n,l){t[r.extraSizeForInsertion]=0;var s=l,u=function(e){return{get:function(t,n){var o=e[n];return t[o||n]},set:function(t,n,o){requestAnimationFrame(function(){t[e[n]]=e.setters[n]?e.setters[n](o):o})}}}("horizontal"===n?i:a),c={translation:0},d=null;e.addEventListener("resize",function(){m(t)}),setTimeout(function(){g()},10);var f=o.listenScrollParent(t,function(){m(t),d&&d()});function g(){m(t),function(e){var t=e.getBoundingClientRect();c.scaleX=e.offsetWidth?(t.right-t.left)/e.offsetWidth:1,c.scaleY=e.offsetHeight?(t.bottom-t.top)/e.offsetHeight:1}(t)}var p=void 0;function m(e){c.rect=o.getContainerRect(e),c.visibleRect=o.getVisibleRect(e,c.rect)}function v(e){return u.get(e,"size")*u.get(c,"scale")}function h(e){return u.get(e,"dragPosition")}function y(e,t){var o=c.visibleRect,r=o.left,i=o.top,a=o.right,l=o.bottom;l-i<2&&(l=i+30);var s=c.rect;return"vertical"===n?e>s.left&&e<s.right&&t>i&&t<l:e>r&&e<a&&t>s.top&&t<s.bottom}return{getSize:v,getContainerRectangles:function(){return{rect:c.rect,visibleRect:c.visibleRect}},getBeginEndOfDOMRect:function(e){return{begin:u.get(e,"begin"),end:u.get(e,"end")}},getBeginEndOfContainer:function(){var e=u.get(c.rect,"begin")+c.translation,t=u.get(c.rect,"end")+c.translation;return{begin:e,end:t}},getBeginEndOfContainerVisibleRect:function(){var e=u.get(c.visibleRect,"begin")+c.translation,t=u.get(c.visibleRect,"end")+c.translation;return{begin:e,end:t}},getBeginEnd:function(e){var n=function(e){return(u.get(e,"distanceToParent")+(e[r.translationValue]||0))*u.get(c,"scale")}(e)+(u.get(c.rect,"begin")+c.translation)-u.get(t,"scrollValue");return{begin:n,end:n+v(e)*u.get(c,"scale")}},getAxisValue:h,setTranslation:function(e,t){t?u.set(e.style,"translate",t):e.style.removeProperty("transform");e[r.translationValue]=t,e[r.containersInDraggable]&&setTimeout(function(){e[r.containersInDraggable].forEach(function(e){!function e(t){t.layout.invalidateRects();t.onTranslated();t.getChildContainers()&&t.getChildContainers().forEach(function(t){return e(t)})}(e)})},s+20)},getTranslation:function(e){return e[r.translationValue]},setVisibility:function(e,t){void 0!==e[r.visibilityValue]&&e[r.visibilityValue]===t||(t?e.style.removeProperty("visibility"):e.style.visibility="hidden",e[r.visibilityValue]=t)},isVisible:function(e){return void 0===e[r.visibilityValue]||e[r.visibilityValue]},isInVisibleRect:y,dispose:function(){f&&f.dispose();p&&(p.parentNode.removeChild(p),p=null)},getContainerScale:function(){return{scaleX:c.scaleX,scaleY:c.scaleY}},setScrollListener:function(e){d=e},setSize:function(e,t){u.set(e,"setSize",t)},getTopLeftOfElementBegin:function(e){var t=0,o=0;"horizontal"===n?(o=e,t=c.rect.top):(o=c.rect.left,t=e);return{top:t,left:o}},getScrollSize:function(e){return u.get(e,"scrollSize")},getScrollValue:function(e){return u.get(e,"scrollValue")},setScrollValue:function(e,t){return u.set(e,"scrollValue",t)},invalidate:g,invalidateRects:function(){m(t)},getPosition:function(e){return y(e.x,e.y)?h(e):null}}};var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(2)),r=n(1);var i={size:"offsetWidth",distanceToParent:"offsetLeft",translate:"transform",begin:"left",end:"right",dragPosition:"x",scrollSize:"scrollWidth",offsetSize:"offsetWidth",scrollValue:"scrollLeft",scale:"scaleX",setSize:"width",setters:{translate:function(e){return"translate3d("+e+"px, 0, 0)"}}},a={size:"offsetHeight",distanceToParent:"offsetTop",translate:"transform",begin:"top",end:"bottom",dragPosition:"y",scrollSize:"scrollHeight",offsetSize:"offsetHeight",scrollValue:"scrollTop",scale:"scaleY",setSize:"height",setters:{translate:function(e){return"translate3d(0,"+e+"px, 0)"}}}}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=n(2);function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y",n=!1,o=null,r=null,i=null,a=null;return{animate:function(l,s){i=l,a=s,(n=!0)&&function n(){null===o&&(o=requestAnimationFrame(function(l){null===r&&(r=l);var s=l-r;r=l;var u=s/1e3*a;(function(e,t,n){e&&(e!==window?"x"===t?e.scrollLeft+=n:e.scrollTop+=n:"x"===t?e.scrollBy(n,0):e.scrollBy(0,n))})(e,t,u="begin"===i?0-u:u),o=null,n()}))}()},stop:function(){n&&(cancelAnimationFrame(o),n=!1,r=null,o=null)}}};function a(e){var t={element:e,rect:(0,o.getVisibleRect)(e,e.getBoundingClientRect()),descendants:[],invalidate:n,axis:null,dispose:function(){e.removeEventListener("scroll",n)}};function n(){t.rect=(0,o.getVisibleRect)(e,e.getBoundingClientRect()),t.descendants.forEach(function(e){return e.invalidate()})}return e.addEventListener("scroll",n),t}function l(e){return Object.assign(e,i(e.element,e.axis))}t.default=function(t){var n,s,u,c=(n=t.map(function(e){return e.element}),s=[],u=null,n.forEach(function(e){var t=e;for(u=null;t;){var n=(0,o.getScrollingAxis)(t);if(n&&!s.some(function(e){return e.element===t})){var r=a(t);u&&r.descendants.push(u),u=r,"xy"===n?(s.push(Object.assign({},r,{axis:"x"})),s.push(Object.assign({},r,{axis:"y"},{descendants:[]}))):s.push(Object.assign({},r,{axis:n}))}t=t.parentElement}}),s),d=[].concat(r(c.map(l)),r(function(){function t(){return{left:0,right:e.innerWidth,top:0,bottom:e.innerHeight}}return[Object.assign({rect:t(),axis:"y"},i(e)),Object.assign({rect:t(),axis:"x"},i(e,"x"))]}()));return function(e){var t=e.draggableInfo,n=e.reset;if(d.length){if(n)return d.forEach(function(e){return e.stop()}),c.forEach(function(e){return e.dispose()}),null;d.forEach(function(e){var n=function(e,t){var n=t.rect,o=n.left,r=n.right,i=n.top,a=n.bottom,l=e.x,s=e.y;if(l<o||l>r||s<i||s>a)return null;var u=void 0,c=void 0,d=void 0;return"x"===t.axis?(u=o,c=r,d=l):(u=i,c=a,d=s),c-d<100?{direction:"end",speedFactor:(100-(c-d))/100}:d-u<100?{direction:"begin",speedFactor:(100-(d-u))/100}:void 0}(t.mousePosition,e);n?e.animate(n.direction,1500*n.speedFactor):e.stop()})}}}}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.removeStyle=t.addCursorStyleToBody=t.addStyleToHead=void 0;var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1));function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={overflow:"hidden",display:"block"},s={height:"100%",display:"inline-block","vertical-align":"top","white-space":"normal"},u=(a(o={},"."+i.containerClass,{position:"relative"}),a(o,"."+i.containerClass+" *",{"box-sizing":"border-box"}),a(o,"."+i.containerClass+".horizontal",{"white-space":"nowrap"}),a(o,"."+i.containerClass+".horizontal > ."+i.stretcherElementClass,{display:"inline-block"}),a(o,"."+i.containerClass+".horizontal > ."+i.wrapperClass,s),a(o,"."+i.containerClass+".vertical > ."+i.wrapperClass,l),a(o,"."+i.wrapperClass,{}),a(o,"."+i.wrapperClass+".horizontal",s),a(o,"."+i.wrapperClass+".vertical",l),a(o,"."+i.wrapperClass+".animated",{transition:"transform ease"}),a(o,"."+i.ghostClass+" *",{"box-sizing":"border-box"}),a(o,"."+i.ghostClass+".animated",{transition:"all ease-in-out"}),a(o,"."+i.disbaleTouchActions+" *",{"touch-actions":"none","-ms-touch-actions":"none"}),a(o,"."+i.noUserSelectClass+" *",{"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}),o);function c(e){return Object.keys(e).reduce(function(t,n){var o=e[n];return"object"===(void 0===o?"undefined":r(o))?""+t+n+"{"+c(o)+"}":""+t+n+":"+o+";"},"")}t.addStyleToHead=function(){if("undefined"!=typeof window){var t=e.document.head||e.document.getElementsByTagName("head")[0],n=e.document.createElement("style"),o=c(u);n.type="text/css",n.styleSheet?n.styleSheet.cssText=o:n.appendChild(e.document.createTextNode(o)),t.appendChild(n)}},t.addCursorStyleToBody=function(t){if(t&&"undefined"!=typeof window){var n=e.document.head||e.document.getElementsByTagName("head")[0],o=e.document.createElement("style"),r=c({"body *":{cursor:t+" !important"}});return o.type="text/css",o.styleSheet?o.styleSheet.cssText=r:o.appendChild(e.document.createTextNode(r)),n.appendChild(o),o}return null},t.removeStyle=function(t){t&&"undefined"!=typeof window&&(e.document.head||e.document.getElementsByTagName("head")[0]).removeChild(t)}}).call(this,n(0))},function(e,t,n){"use strict";(function(e){var t;(t=e.Node||e.Element)&&t.prototype&&!t.prototype.matches&&(t.prototype.matches=t.prototype.matchesSelector||t.prototype.mozMatchesSelector||t.prototype.msMatchesSelector||t.prototype.oMatchesSelector||t.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1}),function(e){e&&e.prototype&&null==e.prototype.firstElementChild&&Object.defineProperty(e.prototype,"firstElementChild",{get:function(){for(var e,t=this.childNodes,n=0;e=t[n++];)if(1===e.nodeType)return e;return null}})}(e.Node||e.Element),Array.prototype.some||(Array.prototype.some=function(e){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof e)throw new TypeError;for(var t=Object(this),n=t.length>>>0,o=arguments.length>=2?arguments[1]:void 0,r=0;r<n;r++)if(r in t&&e.call(o,t[r],r,t))return!0;return!1})}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),n(7);var o,r=u(n(2)),i=u(n(1)),a=n(6),l=n(5),s=(o=l)&&o.__esModule?o:{default:o};function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var c=["mousedown","touchstart"],d=["mousemove","touchmove"],f=["mouseup","touchend"],g=null,p=null,m=null,v=null,h=[],y=!1,b=null,C=null,x=null,E=null,S=r.isMobile();function w(){"undefined"!=typeof window&&c.forEach(function(t){e.document.addEventListener(t,I,{passive:!1})})}function O(){return e.document.body}var D=function(){var t=void 0,n=void 0,o=void 0,r=null,i=1,a=5;function l(e){var o=R(e),r=o.clientX,l=o.clientY;if(n)(Math.abs(t.clientX-r)>a||Math.abs(t.clientY-l)>a)&&c();else if(Math.abs(t.clientX-r)>i||Math.abs(t.clientY-l)>i)return g()}function s(){c()}function u(){c()}function c(){clearTimeout(r),d.forEach(function(t){return e.document.removeEventListener(t,l)},{passive:!1}),f.forEach(function(t){return e.document.removeEventListener(t,s)},{passive:!1}),e.document.removeEventListener("drag",u,{passive:!1})}function g(){clearTimeout(r),c(),o()}return function(i,a,c){t=R(i),o=c,(n="number"==typeof a?a:S?100:0)&&(r=setTimeout(g,n)),d.forEach(function(t){return e.document.addEventListener(t,l)},{passive:!1}),f.forEach(function(t){return e.document.addEventListener(t,s)},{passive:!1}),e.document.addEventListener("drag",u,{passive:!1})}}();function I(t){var n=R(t);if(!y&&(void 0===n.button||0===n.button)&&(p=r.getParent(n.target,"."+i.wrapperClass))){var o=r.getParent(p,"."+i.containerClass),a=h.filter(function(e){return e.element===o})[0],l=a.getOptions().dragHandleSelector,s=a.getOptions().nonDragAreaSelector,u=!0;l&&!r.getParent(n.target,l)&&(u=!1),s&&r.getParent(n.target,s)&&(u=!1),u&&D(n,a.getOptions().dragBeginDelay,function(){r.clearSelection(),B(n,r.getElementCursor(t.target)),d.forEach(function(t){e.document.addEventListener(t,A,{passive:!1})}),f.forEach(function(t){e.document.addEventListener(t,P,{passive:!1})})})}}function P(){d.forEach(function(t){e.document.removeEventListener(t,A,{passive:!1})}),f.forEach(function(t){e.document.removeEventListener(t,P,{passive:!1})}),C({reset:!0}),E&&((0,a.removeStyle)(E),E=null),v&&function(e){function t(){r.removeClass(m.ghost,"animated"),m.ghost.style.transitionDuration=null,O().removeChild(m.ghost),e()}function n(e,n,o){var i=e.top,a=e.left;r.addClass(m.ghost,"animated"),o&&r.addClass(m.ghost.firstElementChild,o),m.ghost.style.transitionDuration=n+"ms",m.ghost.style.left=a+"px",m.ghost.style.top=i+"px",setTimeout(function(){t()},n+20)}if(v.targetElement){var o=h.filter(function(e){return e.element===v.targetElement})[0];!(d=o.getOptions()).shouldAnimateDrop||d.shouldAnimateDrop(v.container.getOptions(),v.payload)?n(o.getDragResult().shadowBeginEnd.rect,Math.max(150,o.getOptions().animationDuration/2),o.getOptions().dropClass):t()}else{var i=h.filter(function(e){return e===v.container})[0];if("move"===i.getOptions().behaviour&&i.getDragResult()){var a=i.getDragResult(),l=a.removedIndex,s=a.elementSize,u=i.layout;i.getTranslateCalculator({dragResult:{removedIndex:l,addedIndex:l,elementSize:s}});var c=l>0?u.getBeginEnd(i.draggables[l-1]).end:u.getBeginEndOfContainer().begin;n(u.getTopLeftOfElementBegin(c),i.getOptions().animationDuration,i.getOptions().dropClass)}else r.addClass(m.ghost,"animated"),m.ghost.style.transitionDuration=i.getOptions().animationDuration+"ms",m.ghost.style.opacity="0",m.ghost.style.transform="scale(0.90)",setTimeout(function(){t()},i.getOptions().animationDuration)}var d}(function(){r.removeClass(e.document.body,i.disbaleTouchActions),r.removeClass(e.document.body,i.noUserSelectClass),T(!1),(g||[]).forEach(function(e){e.handleDrop(v)}),g=null,p=null,m=null,v=null,y=!1,null,x=null,b=null})}function R(e){return e.touches?e.touches[0]:e}function T(e){h.forEach(function(t){var n=e?t.getOptions().onDragStart:t.getOptions().onDragEnd;if(n){var o={isSource:t===v.container,payload:v.payload};t.isDragRelevant(v.container,v.payload)?o.willAcceptDrop=!0:o.willAcceptDrop=!1,n(o)}})}function B(t,n){y=!0;var o=h.filter(function(e){return p.parentElement===e.element})[0];o.setDraggables(),o,x=o.getOptions().lockAxis?o.getOptions().lockAxis.toLowerCase():null,v=function(e){var t=h.filter(function(t){return e.parentElement===t.element})[0],n=t.draggables.indexOf(e);return{container:t,element:e,elementIndex:n,payload:t.getOptions().getChildPayload?t.getOptions().getChildPayload(n):void 0,targetElement:null,position:{x:0,y:0},groupName:t.getOptions().groupName}}(p),m=function(t,n,o,l){var s=n.x,u=n.y,c=o.getScale(),d=(c.scaleX,c.scaleY,t.getBoundingClientRect()),f=d.left,g=d.top,p=d.right,m=d.bottom,v=f+(p-f)/2,h=g+(m-g)/2,y=t.cloneNode(!0);return y.style.zIndex=1e3,y.style.boxSizing="border-box",y.style.position="fixed",y.style.left=f+"px",y.style.top=g+"px",y.style.width=p-f+"px",y.style.height=m-g+"px",y.style.overflow="visible",y.style.transition=null,y.style.removeProperty("transition"),y.style.pointerEvents="none",o.getOptions().dragClass?setTimeout(function(){r.addClass(y.firstElementChild,o.getOptions().dragClass);var t=e.getComputedStyle(y.firstElementChild).cursor;E=(0,a.addCursorStyleToBody)(t)}):E=(0,a.addCursorStyleToBody)(l),r.addClass(y,o.getOptions().orientation),r.addClass(y,i.ghostClass),{ghost:y,centerDelta:{x:v-s,y:h-u},positionDelta:{left:f-s,top:g-u}}}(p,{x:t.clientX,y:t.clientY},v.container,n),v.position={x:t.clientX+m.centerDelta.x,y:t.clientY+m.centerDelta.y},v.mousePosition={x:t.clientX,y:t.clientY},r.addClass(e.document.body,i.disbaleTouchActions),r.addClass(e.document.body,i.noUserSelectClass),g=h.filter(function(e){return e.isDragRelevant(o,v.payload)}),b=function(e){var t=e;return function(e){var n=!1;t.forEach(function(t){var o=t.handleDrag(e);n|=o.containerBoxChanged||!1,o.containerBoxChanged=!1}),C({draggableInfo:e}),n&&(n=!1,setTimeout(function(){h.forEach(function(e){e.layout.invalidateRects(),e.onTranslated()})},10))}}(g),C&&C({reset:!0}),C=function(e,t){return e.getOptions().autoScrollEnabled?(0,s.default)(t):function(){return null}}(o,g),g.forEach(function(e){return e.prepareDrag(e,g)}),T(!0),b(v),O().appendChild(m.ghost)}function A(e){e.preventDefault();var t=R(e);v?(x?"y"===x?(m.ghost.style.top=t.clientY+m.positionDelta.top+"px",v.position.y=t.clientY+m.centerDelta.y,v.mousePosition.y=t.clientY):"x"===x&&(m.ghost.style.left=t.clientX+m.positionDelta.left+"px",v.position.x=t.clientX+m.centerDelta.x,v.mousePosition.x=t.clientX):(m.ghost.style.left=t.clientX+m.positionDelta.left+"px",m.ghost.style.top=t.clientY+m.positionDelta.top+"px",v.position.x=t.clientX+m.centerDelta.x,v.position.y=t.clientY+m.centerDelta.y,v.mousePosition.x=t.clientX,v.mousePosition.y=t.clientY),b(v)):B(t,r.getElementCursor(e.target))}(0,a.addStyleToHead)(),t.default=(w(),{register:function(e){h.push(e)},unregister:function(e){h.splice(h.indexOf(e),1)}})}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=s(n(8)),r=s(n(4)),i=n(2),a=n(3),l=n(1);function s(e){return e&&e.__esModule?e:{default:e}}var u={groupName:null,behaviour:"move",orientation:"vertical",getChildPayload:null,animationDuration:250,autoScrollEnabled:!0,shouldAcceptDrop:null,shouldAnimateDrop:null};function c(e,t,n){t?((0,i.addClass)(e,l.animationClass),e.style.transitionDuration=n+"ms"):((0,i.removeClass)(e,l.animationClass),e.style.removeProperty("transition-duration"))}function d(e){return e?e[l.containerInstance]:null}function f(t){if(N.wrapChild)return N.wrapChild(t);var n=e.document.createElement("div");return n.className=""+l.wrapperClass,t.parentElement.insertBefore(n,t),n.appendChild(t),n}function g(e){var t=[];return Array.prototype.map.call(e.children,function(n){if(n.nodeType===Node.ELEMENT_NODE){var o=n;(0,i.hasClass)(n,l.wrapperClass)||(o=f(n)),o[l.containersInDraggable]=[],o[l.translationValue]=0,t.push(o)}else e.removeChild(n)}),t}function p(e){var t=e.layout;return function(e,n){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function e(n,o,r,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(i<r)return r;if(r===i){var l=t.getBeginEnd(n[r]),s=l.begin,u=l.end;return o>s&&o<=u?a?o<(u+s)/2?r:r+1:r:null}var c=Math.floor((i+r)/2),d=t.getBeginEnd(n[c]),f=d.begin,g=d.end;return o<f?e(n,o,r,c-1,a):o>g?e(n,o,c+1,i,a):a?o<(g+f)/2?c:c+1:c}(e,n,0,e.length-1,o)}}function m(e){var t=e.element,n=e.draggables,o=e.layout,r=e.options,i=function(e){var t=e.element,n=e.draggables,o=e.layout;return e.options,function(){n.forEach(function(e){c(e,!1),o.setTranslation(e,0),o.setVisibility(e,!0),e[l.containersInDraggable]=[]}),t[l.stretcherElementInstance]&&(t[l.stretcherElementInstance].parentNode.removeChild(t[l.stretcherElementInstance]),t[l.stretcherElementInstance]=null)}}({element:t,draggables:n,layout:o,options:r}),s=(N.dropHandler||a.domDropHandler)({element:t,draggables:n,layout:o,options:r});return function(e,t){var n=t.addedIndex,o=t.removedIndex;if(i(),e.targetElement){var a={removedIndex:o,addedIndex:null!==n?null!==o&&o<n?n-1:n:null,payload:e.payload,droppedElement:e.element.firstElementChild};s(a,r.onDrop)}}}function v(e,t){var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;return Object.assign({},u,e)}(t),o=g(e,n.orientation,n.animationDuration);return(0,i.addClass)(e,l.containerClass+" "+n.orientation),{element:e,draggables:o,options:n,layout:(0,r.default)(e,n.orientation,n.animationDuration)}}function h(e,t){var n=function(e,t){for(var n=e.element;n;){var o=d(n.parentElement);if(o&&t.indexOf(o)>-1)return{container:o,draggable:n};n=n.parentElement}return null}(e,t);n&&(n.container.getChildContainers().push(e),e.setParentContainer(n.container),n.draggable[l.containersInDraggable].push(e))}function y(e){e.draggables;var t=e.element,n=e.options,o=null;return function(e){var r=e.draggableInfo,i=(e.dragResult,o);return null==o&&r.container.element===t&&"copy"!==n.behaviour&&(i=o=r.elementIndex),{removedIndex:i}}}function b(e){var t=e.draggables,n=e.layout;return function(e){e.draggableInfo;var o=e.dragResult;null!==o.removedIndex&&n.setVisibility(t[o.removedIndex],!1)}}function C(e){var t=e.element,n=e.layout;return function(e){var o=e.draggableInfo;return{pos:d(t).isPosInChildContainer()?null:n.getPosition(o.position)}}}function x(e){var t=e.element,n=!1;return function(e){e.draggableInfo;var o=e.dragResult;d(t).getParentContainer()&&n!==(null!==o.pos)&&(n=null!==o.pos,d(t).getParentContainer().onChildPositionCaptured(n))}}function E(e){var t=e.layout,n=null;return function(e){var o=e.draggableInfo;return null===e.dragResult.pos?n=null:{elementSize:n=n||t.getSize(o.element)}}}function S(e){var t=e.element;return function(e){var n=e.draggableInfo,o=e.dragResult;!function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];t&&n?e.targetElement=t:e.targetElement===t&&(e.targetElement=null)}(n,t,!!o.pos)}}function w(e){e.draggables,e.layout;return function(e){return null!==e.dragResult.pos?{addedIndex:0}:{addedIndex:null}}}function O(e){e.draggables;var t=e.layout,n=null;return function(e){var o=e.dragResult.addedIndex;if(o!==n){n=o;var r=t.getBeginEndOfContainer(),i=r.begin,a=r.end;return{shadowBeginEnd:{rect:t.getTopLeftOfElementBegin(i,a)}}}}}function D(e){var t=B(e);return function(e){var n=e.draggableInfo,o=e.dragResult;return n.invalidateShadow?t({draggableInfo:n,dragResult:o}):null}}function I(e){var t,n,o,r=(n=(t=e).draggables,o=p({layout:t.layout}),function(e){var t=e.dragResult,r=t.shadowBeginEnd,i=t.pos;if(!r){var a=o(n,i,!0);return null!==a?a:n.length}return r.begin+r.beginAdjustment<=i&&r.end>=i?null:i<r.begin+r.beginAdjustment?o(n,i):i>r.end?o(n,i)+1:n.length});return function(e){var t=e.dragResult,n=null;return null!==t.pos&&null===(n=r({dragResult:t}))&&(n=t.addedIndex),{addedIndex:n}}}function P(){var e=null;return function(t){var n=t.dragResult,o=n.addedIndex,r=n.shadowBeginEnd;o!==e&&null!==e&&r&&(r.beginAdjustment=0),e=o}}function R(t){var n=t.element,o=t.draggables,r=t.layout,i=t.options,a=null;return function(t){var s=t.dragResult,u=s.addedIndex,c=s.removedIndex,d=s.elementSize;if(null===c)if(null!==u){if(!a){var f=r.getBeginEndOfContainer();f.end=f.begin+r.getSize(n);var g=r.getScrollSize(n)>r.getSize(n)?f.begin+r.getScrollSize(n)-r.getScrollValue(n):f.end,p=o.length>0?r.getBeginEnd(o[o.length-1]).end-o[o.length-1][l.translationValue]:f.begin;if(p+d>g){(a=e.document.createElement("div")).className=l.stretcherElementClass+" "+i.orientation;var m=d+p-g;return r.setSize(a.style,m+"px"),n.appendChild(a),n[l.stretcherElementInstance]=a,{containerBoxChanged:!0}}}}else if(a){r.setTranslation(a,0);var v=a;return a=null,n.removeChild(v),n[l.stretcherElementInstance]=null,{containerBoxChanged:!0}}}}function T(e){e.element;var t=e.draggables,n=e.layout,o=null,r=null;return function(e){var i=e.dragResult,a=i.addedIndex,l=i.removedIndex,s=i.elementSize;if(a!==o||l!==r){for(var u=0;u<t.length;u++)if(u!==l){var c=t[u],d=0;null!==l&&l<u&&(d-=n.getSize(t[l])),null!==a&&a<=u&&(d+=s),n.setTranslation(c,d)}return o=a,r=l,{addedIndex:a,removedIndex:l}}}}function B(e){var t=e.draggables,n=e.layout,o=null;return function(e){var r=e.draggableInfo,i=e.dragResult,a=i.addedIndex,l=i.removedIndex,s=i.elementSize,u=i.pos,c=i.shadowBeginEnd;if(null!==u){if(null===a||!r.invalidateShadow&&a===o)return null;o&&(o=a);var d=a-1,f=0,g=null,p=null;if(d===l&&d--,d>-1){var m=n.getSize(t[d]);if(p=n.getBeginEnd(t[d]),s<m){var v=(m-s)/2;f=p.end-v}else f=p.end}else p={end:n.getBeginEndOfContainer().begin};var h=1e4,y=a;if(y===l&&y++,y<t.length){var b=n.getSize(t[y]);if(g=n.getBeginEnd(t[y]),s<b){var C=(b-s)/2;h=g.begin+C}else h=g.begin}else g={begin:n.getContainerRectangles().end};return{shadowBeginEnd:{begin:f,end:h,rect:p&&g?n.getTopLeftOfElementBegin(p.end,g.begin):null,beginAdjustment:c?c.beginAdjustment:0}}}return o=null,{shadowBeginEnd:null}}}function A(){var e=null;return function(t){var n=t.dragResult,o=n.pos,r=n.addedIndex,i=n.shadowBeginEnd;t.draggableInfo.invalidateShadow;if(null!==o){if(null!=r&&null===e){if(o<i.begin){var a=o-i.begin-5;i.beginAdjustment=a}e=r}}else e=null}}function _(e){var t=e.options,n=!1;return function(e){var o=!!e.dragResult.pos;if(o!==n){if(n=o,!o)return t.onDragLeave&&t.onDragLeave(),{dragLeft:!0};t.onDragEnter&&t.onDragEnter()}}}function z(e){var t=e.options,n=null;return function(e){var o=e.dragResult,r=o.addedIndex,i=o.removedIndex,a=e.draggableInfo,l=a.payload,s=a.element;if(t.onDropReady&&n!==r){n=r;var u=r;null!==i&&r>i&&u--,t.onDropReady({addedIndex:u,removedIndex:i,payload:l,element:s.firstElementChild})}}}function j(e){return"drop-zone"===e.options.behaviour?M(e)(y,b,C,x,E,S,w,O,_,z):M(e)(y,b,C,x,E,S,D,I,P,R,T,B,A,_,z)}function M(e){return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];var r=n.map(function(t){return t(e)}),i=null;return function(e){return i=r.reduce(function(t,n){return Object.assign(t,n({draggableInfo:e,dragResult:t}))},i||{addedIndex:null,removedIndex:null,elementSize:null,pos:null,shadowBeginEnd:null})}}}function L(e){return function(t){var n=null,o=null,r=v(e,t),a=j(r),s=m(r),u=null,d=!1,p=[];function y(){null!==o&&(o.invalidateShadow=!0,n=a(o),o.invalidateShadow=!1)}function b(e){d=e,u&&(u.onChildPositionCaptured(e),o&&(n=a(o)))}function C(e,t,n){for(var o=g(t,n.orientation,n.animationDuration),r=0;r<o.length;r++)e[r]=o[r];for(var i=0;i<e.length-o.length;i++)e.pop()}return r.layout.setScrollListener(function(){y()}),{element:e,draggables:r.draggables,isDragRelevant:function(e){var t=e.element,n=e.options;return function(e,o){if(n.shouldAcceptDrop)return n.shouldAcceptDrop(e.getOptions(),o);var r=e.getOptions();return"copy"!==n.behaviour&&(0,i.getParent)(t,"."+l.wrapperClass)!==e.element&&(e.element===t||!(!r.groupName||r.groupName!==n.groupName))}}(r),getScale:r.layout.getContainerScale,layout:r.layout,getChildContainers:function(){return p},onChildPositionCaptured:b,dispose:function(e){var t;t=e.element,Array.prototype.map.call(t.children,function(e){if(e.nodeType===Node.ELEMENT_NODE){var n=e;(0,i.hasClass)(e,l.wrapperClass)&&(t.insertBefore(n,f.firstElementChild),t.removeChild(n))}})},prepareDrag:function(e,t){var n=e.element,o=r.draggables,i=e.getOptions();C(o,n,i),e.layout.invalidateRects(),h(e,t),o.forEach(function(e){return c(e,!0,i.animationDuration)})},isPosInChildContainer:function(){return d},handleDrag:function(e){return o=e,(n=a(e)).dragLeft&&"drop-zone"!==r.options.behaviour&&(n.dragLeft=!1,setTimeout(function(){n&&T(r)({dragResult:n})},20)),n},handleDrop:function(e){o=null,b(!1),a=j(r),s(e,n),n=null,u=null,p=[]},getDragResult:function(){return n},getTranslateCalculator:function(){return T(r).apply(void 0,arguments)},setParentContainer:function(e){u=e},getParentContainer:function(){return u},onTranslated:function(){y()},getOptions:function(){return r.options},setDraggables:function(){C(r.draggables,e,r.options)}}}}function N(e,t){var n=L(e)(t);return e[l.containerInstance]=n,o.default.register(n),{dispose:function(){o.default.unregister(n),n.layout.dispose(),n.dispose(n)}}}t.default=N}).call(this,n(0))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dropHandlers=t.constants=void 0;var o,r=n(9),i=(o=r)&&o.__esModule?o:{default:o},a=s(n(1)),l=s(n(3));function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.default=i.default,t.constants=a,t.dropHandlers=l}])});