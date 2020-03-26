lformsUpdater=function(r){var n={};function e(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=r,e.c=n,e.d=function(r,n,t){e.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:t})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,n){if(1&n&&(r=e(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var o in r)e.d(t,o,function(n){return r[n]}.bind(null,o));return t},e.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,"a",n),n},e.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},e.p="",e(e.s=4)}([function(r,n,e){"use strict";function t(r){if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(r=function(r,n){if(!r)return;if("string"==typeof r)return o(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(r,n)}(r))){var n=0,e=function(){};return{s:e,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var t,i,a=!0,u=!1;return{s:function(){t=r[Symbol.iterator]()},n:function(){var r=t.next();return a=r.done,r},e:function(r){u=!0,i=r},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw i}}}}function o(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}r.exports={isFHIRResource:function(r){return!!r.resourceType},findExtensions:function(r,n){r.extension&&n(r.extension);var e=r.item||r.items;if(e){var o,i=t(e);try{for(i.s();!(o=i.n()).done;){var a=o.value;this.findExtensions(a,n)}}catch(r){i.e(r)}finally{i.f()}}},findItemByExtension:function(r,n){r.extension&&n(r);var e=r.item||r.items;if(e){var o,i=t(e);try{for(i.s();!(o=i.n()).done;){var a=o.value;this.findItemByExtension(a,n)}}catch(r){i.e(r)}finally{i.f()}}},versionLessThan:function(r,n){var e;if(r){for(var t=r.split("."),o=n.split("."),i=0;i<3&&void 0===e;++i){var a=parseInt(t[i]),u=parseInt(o[i]);a!=u&&(e=a<u)}void 0===e&&(e=!1)}else e=!0;return e},makeVersionTag:function(r){return"lformsVersion: "+r},versionFromTag:function(r){var n=null,e=(r.code||r.display).match(/^lformsVersion: (.+)$/);return e&&(n=e[1]),n}}},function(r,n,e){"use strict";function t(r){if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(r=function(r,n){if(!r)return;if("string"==typeof r)return o(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(r,n)}(r))){var n=0,e=function(){};return{s:e,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var t,i,a=!0,u=!1;return{s:function(){t=r[Symbol.iterator]()},n:function(){var r=t.next();return a=r.done,r},e:function(r){u=!0,i=r},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw i}}}}function o(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}for(var i=["23.0.0","22.0.0"],a={},u=0,f=i;u<f.length;u++){var l=f[u];a[l]=e(5)("./"+l)}r.exports={update:function(r,n){var o,u=n,f=e(0),l=f.isFHIRResource(r);if(l){var s=r.meta;if(s){var c=s.tag;if(c){var y,v=t(c);try{for(v.s();!(y=v.n()).done;){var d=y.value,p=f.versionFromTag(d);if(p){o=p;break}}}catch(r){v.e(r)}finally{v.f()}}}}else o=r.lformsVersion;for(var m,h=[],b=0,g=i.length;b<g&&(m=i[b])&&f.versionLessThan(o,m);++b)u&&f.versionLessThan(u,m)||h.push(m);var S,x=h[0],j=t(h.reverse());try{for(j.s();!(S=j.n()).done;){var w=S.value;r=a[w](r)}}catch(r){j.e(r)}finally{j.f()}if(h.length)if(l){var A=r.meta;A||(A=r.meta={});var I,O=A.tag;O||(O=A.tag=[]);var T,E=t(O);try{for(E.s();!(T=E.n()).done;){var k=T.value;if(f.versionFromTag(k)){I=k;break}}}catch(r){E.e(r)}finally{E.f()}var M=f.makeVersionTag(x);I?(I.code=M,delete I.display):O.push({code:M})}else r.lformsVersion=x;return r}}},function(r,n,e){"use strict";function t(r){if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(r=function(r,n){if(!r)return;if("string"==typeof r)return o(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(r,n)}(r))){var n=0,e=function(){};return{s:e,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var t,i,a=!0,u=!1;return{s:function(){t=r[Symbol.iterator]()},n:function(){var r=t.next();return a=r.done,r},e:function(r){u=!0,i=r},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw i}}}}function o(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}r.exports=function(r){var n=e(0);return n.isFHIRResource(r)&&"Questionnaire"!==r.resourceType||n.findExtensions(r,(function(r){var n,e=t(r);try{for(e.s();!(n=e.n()).done;){var o=n.value;"http://hl7.org/fhir/StructureDefinition/questionnaire-observationLinkPeriod"===o.url&&(o.url="http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod")}}catch(r){e.e(r)}finally{e.f()}})),r}},function(r,n,e){"use strict";function t(r){if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(r=function(r,n){if(!r)return;if("string"==typeof r)return o(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(r,n)}(r))){var n=0,e=function(){};return{s:e,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var t,i,a=!0,u=!1;return{s:function(){t=r[Symbol.iterator]()},n:function(){var r=t.next();return a=r.done,r},e:function(r){u=!0,i=r},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw i}}}}function o(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}r.exports=function(r){var n=e(0),o=r.meta;if(o){var i=o.tag;if(i){var a,u=t(i);try{for(u.s();!(a=u.n()).done;){var f=a.value;if(n.versionFromTag(f)){f.display&&!f.code&&(f.code=f.display,delete f.display);break}}}catch(r){u.e(r)}finally{u.f()}}}return"Questionnaire"===r.resourceType&&n.findItemByExtension(r,(function(r){if(r.extension)for(var n=0;n<r.extension.length;n++){"http://hl7.org/fhir/StructureDefinition/questionnaire-answerRepeats"===r.extension[n].url&&(r.repeats=!0,r.extension.splice(n,1),n-=1)}})),r}},function(r,n,e){r.exports=e(1)},function(r,n,e){var t={"./":1,"./22.0.0":2,"./22.0.0.js":2,"./23.0.0":3,"./23.0.0.js":3,"./index":1,"./index.js":1,"./util":0,"./util.js":0};function o(r){var n=i(r);return e(n)}function i(r){if(!e.o(t,r)){var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}return t[r]}o.keys=function(){return Object.keys(t)},o.resolve=i,r.exports=o,o.id=5}]);
//# sourceMappingURL=updater.js.map