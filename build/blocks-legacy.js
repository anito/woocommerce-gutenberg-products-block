this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks.blocks=function(t){function e(e){for(var o,i,s=e[0],a=e[1],u=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);for(l&&l(e);p.length;)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,s=1;s<n.length;s++){var a=n[s];0!==r[a]&&(o=!1)}o&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={6:0},c=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=a;return c.push([588,2,0,1]),n()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},21:function(t,e){!function(){t.exports=this.wp.compose}()},23:function(t,e){!function(){t.exports=this.wp.blocks}()},3:function(t,e){!function(){t.exports=this.wp.components}()},331:function(t,e,n){},334:function(t,e){(0,wp.hooks.addFilter)("blocks.getBlockAttributes","woocommerce-blocks/get-block-attributes",(function(t,e){return e.name.startsWith("woocommerce/")&&Object.keys(e.attributes).map((function(n){return void 0===t[n]&&void 0!==e.defaults&&void 0!==e.defaults[n]&&(t[n]=e.defaults[n]),n})),t}))},48:function(t,e){!function(){t.exports=this.wc.wcSettings}()},5:function(t,e){!function(){t.exports=this.lodash}()},588:function(t,e,n){"use strict";n.r(e);var o=n(81),r=n.n(o),c=n(0),i=n(23),s=n(1),a=n(611),u=n(8),l=n.n(u),f=function(t){var e=t.className,n=t.size;return Object(c.createElement)(a.a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 245 145",className:l()("woo-icon",e),width:Math.floor(1.67*n),height:n},Object(c.createElement)("path",{fill:"#96588A",d:"M22.76 0h199.1a22.77 22.77 0 0 1 22.8 22.76v75.92a22.77 22.77 0 0 1-22.78 22.78h-71.41l9.77 24-43.13-24H22.76C10.1946 121.449.011 111.2654 0 98.7V22.76C.011 10.1946 10.1946.011 22.76 0z"}),Object(c.createElement)("path",{fill:"#FFF",fillRule:"nonzero",d:"M12.32 20.63a8.16 8.16 0 0 1 6.25-3.09c5.0733-.36 7.9867 2.0333 8.74 7.18 3.14 20.86 6.4933 38.5633 10.06 53.11l21.92-41.69c2-3.76 4.49-5.76 7.52-6 4.3867-.3067 7.13 2.49 8.23 8.39a186 186 0 0 0 9.47 34.23c2.62-25.38 7.0133-43.7133 13.18-55a7.73 7.73 0 0 1 6.6-4.43 8.8 8.8 0 0 1 6.32 2 7.75 7.75 0 0 1 3.05 5.74 8.52 8.52 0 0 1-1 4.77c-3.9 7.24-7.12 19.28-9.66 36.12-2.48 16.2533-3.3967 28.9633-2.75 38.13a12.25 12.25 0 0 1-1.16 6.56 6.32 6.32 0 0 1-5.33 3.53c-2.6667.18-5.3033-1.0567-7.91-3.71-9.2933-9.54-16.6567-23.7267-22.09-42.56C57.3 76.7167 52.48 86.3333 49.3 92.76c-5.86 11.3333-10.89 17.13-15.09 17.39-2.7333.1933-5.0667-2.0933-7-6.86-5.1-13.0933-10.5833-38.4033-16.45-75.93a8.56 8.56 0 0 1 1.56-6.73zM227.23 36.34a23.17 23.17 0 0 0-16-11.59 26.25 26.25 0 0 0-5.42-.58c-9.5867 0-17.41 5-23.47 15a53 53 0 0 0-7.78 28.16c0 7.7333 1.6167 14.3333 4.85 19.8a23.15 23.15 0 0 0 16 11.59 26.28 26.28 0 0 0 5.42.59c9.68 0 17.5033-5 23.47-15A53.89 53.89 0 0 0 232.08 56c0-7.7333-1.6167-14.2867-4.85-19.66zm-12.61 27.72c-1.3733 6.56-3.9167 11.5-7.63 14.82-2.9267 2.6667-5.6133 3.7433-8.06 3.23-2.4467-.5133-4.4033-2.6667-5.87-6.46a25.68 25.68 0 0 1-1.76-9.09 35.9 35.9 0 0 1 .73-7.34 33 33 0 0 1 5.28-11.88c3.3333-4.8933 6.8067-6.9467 10.42-6.16 2.44.4867 4.3933 2.64 5.86 6.46a25.68 25.68 0 0 1 1.76 9.12 35.73 35.73 0 0 1-.73 7.33v-.03zM164.57 36.34a23.2 23.2 0 0 0-16-11.59 26.42 26.42 0 0 0-5.43-.58c-9.5933 0-17.4167 5-23.47 15a53 53 0 0 0-7.78 28.16c0 7.7333 1.6133 14.3333 4.84 19.8a23.19 23.19 0 0 0 16 11.59 26.44 26.44 0 0 0 5.43.59c9.68 0 17.5033-5 23.47-15A53.88 53.88 0 0 0 169.4 56c0-7.7333-1.6133-14.2867-4.84-19.66h.01zm-12.61 27.72c-1.3667 6.56-3.91 11.5-7.63 14.82-2.93 2.64-5.63 3.72-8.07 3.23-2.44-.49-4.4-2.64-5.86-6.46a25.7 25.7 0 0 1-1.77-9.09 35.9 35.9 0 0 1 .74-7.34 33 33 0 0 1 5.28-11.88c3.3333-4.8933 6.8067-6.9467 10.42-6.16 2.44.4867 4.3933 2.64 5.86 6.46a25.91 25.91 0 0 1 1.76 9.12 35.73 35.73 0 0 1-.73 7.33v-.03z"}))},p=n(3),h=(n(2),function(t){var e=t.size,n=void 0===e?20:e,o=t.className;return Object(c.createElement)(p.Icon,{className:l()("hal-icon",o),icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:n,width:Math.floor(1.67*n),viewBox:"0 0 329.64 479.8"},Object(c.createElement)("path",{fill:"#e30006",d:"M409.72,131.82c-17.85-40.28-51.86-68.18-99-84.93-8.4-3-40.86-19.26-54.33-30.69,0,0,0,0,0,.05l-.07-.05c-13.46,11.43-46,27.71-54.38,30.69-47.18,16.75-81.22,44.65-99.07,84.93-10,22.47-11.15,47.43-11.38,71.72-.21,21.36.83,42.72,1.3,64.07.13,6.06,1.76,10.6,8.75,14.43,9.08,5,10.66,14.34,11.76,23,2.83,22.51-1.15,44.08-10.63,65.3-11,24.6-3.54,39.49,19.6,59.2C151.22,454.24,233.77,496,233.77,496s-15.22-118.37-25.31-176.77a85,85,0,0,1-1.13-8.69c-1.25-18.18-3.91-34.25-31.21-38.18-13.8-2-45.72-32.15-45.72-32.15l22.91-17.12,75.7,5.14s11.67,6.27,10.41,12.34c-2.55,12.33-1.11,25.76-9.38,36.66-8.92,11.76-6.26,20.66,3.71,31,10.44,10.81,16.54,17.59,22.58,17.59h0s0-.31,0-.32v.07c0-1,12-6.67,22.44-17.45,10-10.34,12.65-19.15,3.72-30.9-8.27-10.91-6.82-24.32-9.38-36.65-1.25-6.08,10.42-12.35,10.42-12.35l75.7-5.13,22.92,17.12s-31.92,30.18-45.73,32.15c-27.3,3.93-30,20-31.21,38.18-.2,2.91-.63,5.81-1.12,8.69C294,377.63,278.8,496,278.8,496s82.55-41.76,111.48-66.42c23.14-19.71,30.61-34.6,19.61-59.2-9.48-21.22-13.46-42.79-10.63-65.3,1.1-8.7,2.68-18.06,11.76-23,7-3.83,8.62-8.37,8.75-14.43.47-21.35,1.52-42.71,1.31-64.07C420.85,179.25,419.67,154.29,409.72,131.82Z",transform:"translate(-91.47 -16.2)"}))})}),b=(n(331),n(332),n(15)),m=n.n(b),d=n(17),w=n.n(d),v=n(18),g=n.n(v),k=n(16),y=n.n(k),O=n(19),j=n.n(O),x=n(20),C=n.n(x),M=n(10),W=n.n(M),A=n(6),_=n.n(A),z=n(21),E=n(48);function B(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var D=wp.blocks.getBlockType,P=wp.hooks.addFilter,S=Object(z.createHigherOrderComponent)((function(t){return function(e){j()(r,e);var n,o=(n=r,function(){var t,e=W()(n);if(B()){var o=W()(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return C()(this,t)});function r(){var t;w()(this,r);for(var e=arguments.length,n=new Array(e),c=0;c<e;c++)n[c]=arguments[c];return t=o.call.apply(o,[this].concat(n)),_()(y()(t),"mounted",!1),t}return g()(r,[{key:"componentDidMount",value:function(){var t=this.props,e=t.block,n=t.setAttributes;e.name.startsWith("woocommerce/")&&n(this.getAttributesWithDefaults())}},{key:"componentDidUpdate",value:function(){this.props.block.name.startsWith("woocommerce/")&&!this.mounted&&(this.mounted=!0)}},{key:"getAttributesWithDefaults",value:function(){var t=D(this.props.block.name),e=this.props.attributes;return!this.mounted&&this.props.block.name.startsWith("woocommerce/")&&void 0!==t.attributes&&void 0!==t.defaults&&(e=Object.assign({},this.props.attributes||{}),Object.keys(t.attributes).map((function(n){return void 0===e[n]&&void 0!==t.defaults[n]&&(e[n]=t.defaults[n]),n}))),e}},{key:"render",value:function(){return Object(c.createElement)(t,m()({},this.props,{attributes:this.getAttributesWithDefaults()}))}}]),r}(c.Component)}),"withDefaultAttributes");Object(E.compareWithWpVersion)("5.3","<=")&&P("editor.BlockListBlock","woocommerce-blocks/block-list-block",S);n(334);Object(i.setCategories)([].concat(r()(Object(i.getCategories)().filter((function(t){return"woocommerce"!==t.slug}))),[{slug:"woocommerce",title:Object(s.__)("WooCommerce","woo-gutenberg-products-block"),icon:Object(c.createElement)(f,null)}])),Object(i.setCategories)([].concat(r()(Object(i.getCategories)().filter((function(t){return"halehmann"!==t.slug}))),[{slug:"halehmann",title:Object(s.__)("Lehmann GmbH","woo-gutenberg-products-block"),icon:Object(c.createElement)(h,null)}]))}});