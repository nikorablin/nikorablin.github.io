(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{1516:function(e,t,r){"use strict";var n=r(888);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,r,o,i,a){if(a!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},9632:function(e,t,r){e.exports=r(1516)()},888:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4184:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=classNames.apply(null,r);i&&e.push(i)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0!==(r=(function(){return classNames}).apply(t,[]))&&(e.exports=r)}()},2567:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return r(2399)}])},2399:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return resume}});var n=r(5893),o=r(9008),i=r.n(o),a=r(7294),s=r(4184),l=r.n(s),c=JSON.parse('{"$schema":"https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json","basics":{"name":"Nik Korablin","label":"Full-stack JS Engineer","email":"nikorablin@gmail.com","phone":"7178240189","url":"http://nikorablin.io","location":{"postalCode":"PA 17543","city":"Lititz","countryCode":"US","region":"Pennsylvania"},"profiles":[{"network":"LinkedIn","url":"https://linkedin.com/in/nikorablin"},{"network":"Github","url":"https://github.com/nikorablin"}]},"work":[{"name":"The Knot","position":"Engineering Manager","url":"https://theknotww.com","startDate":"2021-11-01","highlights":["Manage a team of 5 engineers","Work on a large-scale React eCommerce platform","Node misroservices leveraging ElasticSearch and RabbitMQ"]},{"name":"iFIT","position":"Technical Lead","url":"https://ifit.com","startDate":"2018-04-01","endDate":"2021-10-30","highlights":["Worked as the lead enginner on a team of 6 engineers","Worked on React front-end applications for embedded devices","Built Typescript microservices on AWS Lambda","Emphasis on good, testable code"]},{"name":"Fin-tech start up","position":"Senior Full-stack JS Engineer","startDate":"2017-01-01","endDate":"2018-03-01","highlights":["Helped build a stealth financial research app from the ground up","NodeJS, React, Electron, RethinkDB","Built chat feature, wrote batch jobs, dealt with realtime data"]},{"name":"WhoseYourLandlord.com","position":"CTO","url":"https://wyl.co","startDate":"2016-05-01","endDate":"2017-01-01","highlights":["Built the entire application from the start","Ruby on Rails and React","Managed a few junior developers"]},{"name":"Vanguard Group","position":"Java Engineer","url":"https://vanguard.com","startDate":"2013-06-01","endDate":"2016-05-01","highlights":["Worked on retail advice platform","Enterprise-scale Java application","AngularJS front end","Wrote unit tests and end to end tests using Cucumber"]},{"name":"WebTek","position":"Front-end web developer","url":"https://wyl.co","startDate":"2008-05-01","endDate":"2013-06-01","highlights":["Developed websites for small and large busineses","Wordpress, eCommerce"]}],"education":[{"institution":"Temple University","url":"https://www.temple.edu/","area":"Information Science & Technology","studyType":"Bachelor","startDate":"2009-09-01","endDate":"2013-05-01"}],"skills":[{"name":"Languages","keywords":["Javascript","Typescript","Ruby"]},{"name":"Frameworks","keywords":["NodeJS","React","Electron","Redux","Rails"]},{"name":"Testing","keywords":["TDD","Jest","react-testing-library"]},{"name":"Database","keywords":["MongoDB","Postgres","ElasticSearch","RethinkDB"]}],"languages":[{"language":"English"},{"language":"Russian"}],"meta":{"canonical":"https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json","version":"v1.0.0","lastModified":"2017-12-24T15:53:00"}}'),u=r(8947),m=r(9632),p=r.n(m);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function _toConsumableArray(e){return function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance")}()}function camelize(e){var t;return(t=e-0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)}var f=!1;try{f=!0}catch(e){}function normalizeIconArgs(e){return e&&"object"===_typeof(e)&&e.prefix&&e.iconName&&e.icon?e:u.Qc.icon?u.Qc.icon(e):null===e?null:e&&"object"===_typeof(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function objectWithKey(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?_defineProperty({},e,t):{}}function FontAwesomeIcon(e){var t,r,n,o,i,a,s,l,c,m,p,h=e.forwardedRef,y=_objectWithoutProperties(e,["forwardedRef"]),b=y.icon,g=y.mask,v=y.symbol,x=y.className,j=y.title,w=y.titleId,k=normalizeIconArgs(b),O=objectWithKey("classes",[].concat(_toConsumableArray((r=y.spin,n=y.pulse,o=y.fixedWidth,i=y.inverse,a=y.border,s=y.listItem,l=y.flip,c=y.size,m=y.rotation,p=y.pull,Object.keys((_defineProperty(t={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":i,"fa-border":a,"fa-li":s,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(c),null!=c),_defineProperty(t,"fa-rotate-".concat(m),null!=m&&0!==m),_defineProperty(t,"fa-pull-".concat(p),null!=p),_defineProperty(t,"fa-swap-opacity",y.swapOpacity),t)).map(function(e){return t[e]?e:null}).filter(function(e){return e}))),_toConsumableArray(x.split(" ")))),_=objectWithKey("transform","string"==typeof y.transform?u.Qc.transform(y.transform):y.transform),S=objectWithKey("mask",normalizeIconArgs(g)),N=(0,u.qv)(k,_objectSpread2({},O,{},_,{},S,{symbol:v,title:j,titleId:w}));if(!N)return!function(){if(!f&&console&&"function"==typeof console.error){var e;(e=console).error.apply(e,arguments)}}("Could not find icon",k),null;var P=N.abstract,D={ref:h};return Object.keys(y).forEach(function(e){FontAwesomeIcon.defaultProps.hasOwnProperty(e)||(D[e]=y[e])}),d(P[0],D)}FontAwesomeIcon.displayName="FontAwesomeIcon",FontAwesomeIcon.propTypes={border:p().bool,className:p().string,mask:p().oneOfType([p().object,p().array,p().string]),fixedWidth:p().bool,inverse:p().bool,flip:p().oneOf(["horizontal","vertical","both"]),icon:p().oneOfType([p().object,p().array,p().string]),listItem:p().bool,pull:p().oneOf(["right","left"]),pulse:p().bool,rotation:p().oneOf([0,90,180,270]),size:p().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p().bool,symbol:p().oneOfType([p().bool,p().string]),title:p().string,transform:p().oneOfType([p().string,p().object]),swapOpacity:p().bool},FontAwesomeIcon.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var d=(function convert(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof t)return t;var n=(t.children||[]).map(function(t){return convert(e,t)}),o=Object.keys(t.attributes||{}).reduce(function(e,r){var n=t.attributes[r];switch(r){case"class":e.attrs.className=n,delete t.attributes.class;break;case"style":e.attrs.style=n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r=t.indexOf(":"),n=camelize(t.slice(0,r)),o=t.slice(r+1).trim();return n.startsWith("webkit")?e[n.charAt(0).toUpperCase()+n.slice(1)]=o:e[n]=o,e},{});break;default:0===r.indexOf("aria-")||0===r.indexOf("data-")?e.attrs[r.toLowerCase()]=n:e.attrs[camelize(r)]=n}return e},{attrs:{}}),i=r.style,a=void 0===i?{}:i,s=_objectWithoutProperties(r,["style"]);return o.attrs.style=_objectSpread2({},o.attrs.style,{},a),e.apply(void 0,[t.tag,_objectSpread2({},o.attrs,{},s)].concat(_toConsumableArray(n)))}).bind(null,a.createElement),resume_ContactLink=e=>{let{item:t}=e;return(0,n.jsxs)("span",{className:"flex items-center content-center",children:[(0,n.jsx)(FontAwesomeIcon,{className:"mr-2 text-gray-400",fixedWidth:!0,icon:t.icon}),(0,n.jsx)("a",{className:"flex-1",href:t.url,children:t.label})]},t.key)};let h=["email","phone","url"],y={email:{prefix:"mailto:",icon:"envelope-open"},phone:{prefix:"tel:",icon:"mobile"},url:{icon:"link",prefix:""}},formatContactItem=e=>t=>{var r,n;return{key:t,label:"url"===t?new URL((null==e?void 0:e[t])||"").hostname:null==e?void 0:e[t],url:"".concat(null===(r=y[t])||void 0===r?void 0:r.prefix).concat(e[t]),icon:null===(n=y[t])||void 0===n?void 0:n.icon}},formatProfiles=e=>{let t=new URL(e.url||"");return{key:e.network,url:e.url,label:"".concat(t.host).concat(t.pathname),icon:["fab",(e.network||"").toLowerCase()]}};var resume_Header=e=>{let{basics:t}=e;return(0,n.jsxs)("header",{className:"flex py-5 items-center border-b-2 text-gray-700",children:[(0,n.jsxs)("div",{className:"flex-grow",children:[(0,n.jsx)("h1",{className:"text-4xl font-bold",children:null==t?void 0:t.name}),(0,n.jsx)("h2",{className:"text-xl text-gray-400",children:null==t?void 0:t.label})]}),(0,n.jsx)("nav",{children:[...h.map(formatContactItem(t)),...((null==t?void 0:t.profiles)||[]).map(formatProfiles)].map(e=>(0,n.jsx)(resume_ContactLink,{item:e},e.key))})]})},b=r(9887),g=r.n(b),utils_formatDate=e=>void 0===e?"present":new Date(e).toLocaleDateString("en-us",{month:"long",year:"numeric"});let WorkItem=e=>{var t;let{item:r}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:r.name}),(0,n.jsxs)("h4",{className:"text-gray-400",children:[r.position,", ",utils_formatDate(r.startDate)," - ",utils_formatDate(r.endDate)]}),(0,n.jsx)("ul",{className:"list-disc pl-5",children:null===(t=r.highlights)||void 0===t?void 0:t.map(e=>(0,n.jsx)("li",{children:e},g()(e)))})]})},EducationItem=e=>{let{item:t}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:t.institution}),(0,n.jsxs)("h4",{className:"text-gray-400",children:[utils_formatDate(t.startDate)," - ",utils_formatDate(t.endDate)]})]})},SkillItem=e=>{var t;let{item:r}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:r.name}),(0,n.jsx)("h4",{className:"text-gray-400",children:null===(t=r.keywords)||void 0===t?void 0:t.join(", ")})]})};var resume_ResumeItem=e=>{let{item:t}=e;return void 0!==t.position?(0,n.jsx)(WorkItem,{item:t},t.name):void 0!==t.institution?(0,n.jsx)(EducationItem,{item:t},t.institution):void 0!==t.keywords?(0,n.jsx)(SkillItem,{item:t},t.name):(0,n.jsx)("div",{})};let v={work:"Work Experience",skills:"Skills",education:"Education"},renderSectionItem=e=>e.map(e=>(0,n.jsx)(resume_ResumeItem,{item:e},e.name)),renderSection=e=>(0,n.jsxs)("div",{className:"grid grid-cols-resume gap-4 text-gray-700 mb-4",children:[(0,n.jsx)("section",{children:(0,n.jsx)("h3",{className:"text-lg",children:v[e]})}),(0,n.jsx)("section",{className:l()("grid","gap-4",{"grid-cols-2":"skills"===e}),children:renderSectionItem(c[e])})]},e);var resume=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:"Nik Korablin | Resume"}),(0,n.jsx)("meta",{name:"description",content:"I am a full-stack Javascript engineer working remotely from Lancaster, PA"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.svg"})]}),(0,n.jsxs)("div",{className:"container mx-auto md:w-8/12",children:[(0,n.jsx)(resume_Header,{basics:c.basics}),(0,n.jsx)("main",{className:"py-5 mb-5",children:Object.keys(v).map(renderSection)})]})]})},9008:function(e,t,r){e.exports=r(9201)},9887:function(e){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2567)}),_N_E=e.O()}]);