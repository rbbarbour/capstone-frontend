_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery,i=void 0!==o&&o;return n||r&&i}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(t);var o=n("q1tI"),i=n.n(o),c=n("8Kt/"),s=n.n(c),u=n("JDnx"),l=n("MX0m"),f=n.n(l),d=n("YFqc"),p=n.n(d),v=n("wx14"),m=n("zLVn"),h=n("17x9"),y=n.n(h),b=n("TSYQ"),g=n.n(b),j=n("33Jr"),w={tabs:y.a.bool,pills:y.a.bool,vertical:y.a.oneOfType([y.a.bool,y.a.string]),horizontal:y.a.string,justified:y.a.bool,fill:y.a.bool,navbar:y.a.bool,card:y.a.bool,tag:j.c,className:y.a.string,cssModule:y.a.object},x=function(e){var t=e.className,n=e.cssModule,a=e.tabs,r=e.pills,o=e.vertical,c=e.horizontal,s=e.justified,u=e.fill,l=e.navbar,f=e.card,d=e.tag,p=Object(m.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),h=Object(j.b)(g()(t,l?"navbar-nav":"nav",!!c&&"justify-content-"+c,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(o),{"nav-tabs":a,"card-header-tabs":f&&a,"nav-pills":r,"card-header-pills":f&&r,"nav-justified":s,"nav-fill":u}),n);return i.a.createElement(d,Object(v.a)({},p,{className:h}))};x.propTypes=w,x.defaultProps={tag:"ul",vertical:!1};var O=x,M={tag:j.c,active:y.a.bool,className:y.a.string,cssModule:y.a.object},S=function(e){var t=e.className,n=e.cssModule,a=e.active,r=e.tag,o=Object(m.a)(e,["className","cssModule","active","tag"]),c=Object(j.b)(g()(t,"nav-item",!!a&&"active"),n);return i.a.createElement(r,Object(v.a)({},o,{className:c}))};S.propTypes=M,S.defaultProps={tag:"li"};var _=S,A=n("1Yj4"),N=i.a.createElement,I=function(e){var t=Object(o.useContext)(u.a),n=t.user,a=t.isAuthenticated,r=t.setIsAuthenticated,i=t.setRestaurant,c=t.setCart;return console.log("User: ".concat(n)),console.log("Is authenticated: ".concat(a)),N("div",null,N(s.a,null,N("title",null,"Rickstaraunt.com"),N("meta",{charSet:"utf-8"}),N("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),N("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossOrigin:"anonymous"}),N("script",{src:"https://js.stripe.com/v3"})),N("header",{className:"jsx-1077135524"},N(f.a,{id:"1077135524"},["a.jsx-1077135524{color:white;}","h5.jsx-1077135524{color:white;padding-top:8px;font-size:1em;}"]),N(O,{className:"navbar navbar-dark bg-dark"},N(_,null,N(p.a,{href:"/"},N("a",{style:{fontSize:"1.5em"},onClick:function(){i(0),c({items:[],total:0})},className:"jsx-1077135524 navbar-brand"},"Rickstaurant.com"))),N(_,{className:"ml-auto"},n?N("h5",{className:"jsx-1077135524"},n.username):N(p.a,{href:"/register"},N("a",{className:"jsx-1077135524 nav-link"}," Sign up"))),N(_,null,n?N(p.a,{href:"/"},N("a",{onClick:function(){logout(),setUser(null),r(!1)},className:"jsx-1077135524 nav-link"},"Logout")):N(p.a,{href:"/login"},N("a",{className:"jsx-1077135524 nav-link"},"Sign in"))))),N(A.a,null,e.children))},k=(n("zPlV"),i.a.createElement);t.default=function(e){var t=Object(o.useState)(null),n=t[0],a=t[1],i=Object(o.useState)(!1),c=i[0],l=i[1],f=Object(o.useState)(0),d=f[0],p=f[1],v=Object(o.useState)({items:[],total:0}),m=v[0],h=v[1],y=e.Component,b=e.pageProps;return k(u.a.Provider,{value:{addItem:function(e){var t=m.items,n=!0;if(t.length>0&&(n=t.find((function(t){return t.id===e.id})))||(n=!1),console.log("Found Item value: ".concat(JSON.stringify(n))),n)console.log("Total so far:  ".concat(m.total)),o={items:t.map((function(e){return e.id===n.id?Object.assign({},e,{quantity:e.quantity+1}):e})),total:m.total+e.price};else{var a=JSON.parse(JSON.stringify(e));a.quantity=1;var o={items:[].concat(r(m.items),[a]),total:m.total+e.price};h(o),console.log("Total items: ".concat(JSON.stringify(o)))}h(o),console.log("state reset to cart:".concat(JSON.stringify(m)))},removeItem:function(e){var t=m.items,n=t.find((function(t){return t.id===e.id}));if(n.quantity>1)var a={items:t.map((function(e){return e.id===n.id?Object.assign({},e,{quantity:e.quantity-1}):e})),total:m.total-e.price};else{console.log("Try remove item ".concat(JSON.stringify(n)));var r=t.findIndex((function(e){return e.id===n.id}));t.splice(r,1);a={items:t,total:m.total-e.price}}h(a)},cart:m,setCart:h,isAuthenticated:c,setIsAuthenticated:l,user:n,setUser:a,restaurant:d,setRestaurant:p}},k(s.a,null,k("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossOrigin:"anonymous"})),k(I,null,k(y,b)))}},"1Yj4":function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),i=n.n(o),c=n("17x9"),s=n.n(c),u=n("TSYQ"),l=n.n(u),f=n("33Jr"),d={tag:f.c,fluid:s.a.oneOfType([s.a.bool,s.a.string]),className:s.a.string,cssModule:s.a.object},p=function(e){var t=e.className,n=e.cssModule,o=e.fluid,c=e.tag,s=Object(r.a)(e,["className","cssModule","fluid","tag"]),u="container";!0===o?u="container-fluid":o&&(u="container-"+o);var d=Object(f.b)(l()(t,u),n);return i.a.createElement(c,Object(a.a)({},s,{className:d}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},"7W2i":function(e,t,n){var a=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var c=0,s=d.length;c<s;c++){var u=d[c];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=r.props[u],f=a[u]||new Set;f.has(l)?o=!1:(f.add(l),a[u]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function v(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(c.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,s.isInAmpMode)(n)},t)}v.rewind=function(){};var m=v;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=r},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=u(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var a=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?r(e):t}},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var o,i=r(n("q1tI")),c=n("elyg"),s=n("nOHt"),u=new Map,l=window.IntersectionObserver,f={};var d=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function p(e,t,n,a){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),f[t+"%"+n]=!0)}var v=function(e){var t=!1!==e.prefetch,n=i.default.useState(),r=a(n,2),o=r[0],u=r[1],v=(0,s.useRouter)(),m=v&&v.pathname||"/",h=i.default.useMemo((function(){var t=(0,c.resolveHref)(m,e.href,!0),n=a(t,2),r=n[0],o=n[1];return{href:r,as:e.as?(0,c.resolveHref)(m,e.as):o||r}}),[m,e.href,e.as]),y=h.href,b=h.as;i.default.useEffect((function(){if(t&&l&&o&&o.tagName&&(0,c.isLocalURL)(y)&&!f[y+"%"+b])return d(o,(function(){p(v,y,b)}))}),[t,o,y,b,v]);var g=e.children,j=e.replace,w=e.shallow,x=e.scroll;"string"===typeof g&&(g=i.default.createElement("a",null,g));var O=i.Children.only(g),M={ref:function(e){e&&u(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,v,y,b,j,w,x)}};return t&&(M.onMouseEnter=function(e){(0,c.isLocalURL)(y)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),p(v,y,b,{priority:!0}))}),(e.passHref||"a"===O.type&&!("href"in O.props))&&(M.href=(0,c.addBasePath)((0,c.addLocale)(b,v&&v.locale,v&&v.defaultLocale))),i.default.cloneElement(O,M)};t.default=v},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},zPlV:function(e,t,n){}},[[0,0,2,1,3]]]);