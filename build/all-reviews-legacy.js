this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["all-reviews"]=function(e){function t(t){for(var n,a,i=t[0],s=t[1],l=t[2],d=0,b=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);b.length;)b.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==o[s]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={4:0},c=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;return c.push([589,2,0,1]),r()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},11:function(e,t){!function(){e.exports=this.React}()},12:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},14:function(e,t){!function(){e.exports=this.wp.editor}()},21:function(e,t){!function(){e.exports=this.wp.compose}()},23:function(e,t){!function(){e.exports=this.wp.blocks}()},24:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(12),o=r.n(n),c=r(22),a=r.n(c),i=function(){var e=a()(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},26:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},28:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(26));t.a=function(e){var t,r,a,i=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=i).message,a=t.type,r?"general"===a?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===a?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},3:function(e,t){!function(){e.exports=this.wp.components}()},4:function(e,t,r){"use strict";r.d(t,"n",(function(){return f})),r.d(t,"o",(function(){return m})),r.d(t,"i",(function(){return h})),r.d(t,"k",(function(){return v})),r.d(t,"a",(function(){return g})),r.d(t,"j",(function(){return O})),r.d(t,"m",(function(){return y})),r.d(t,"c",(function(){return j})),r.d(t,"l",(function(){return _})),r.d(t,"b",(function(){return k})),r.d(t,"g",(function(){return R})),r.d(t,"h",(function(){return E})),r.d(t,"e",(function(){return A})),r.d(t,"f",(function(){return P})),r.d(t,"p",(function(){return C})),r.d(t,"d",(function(){return S}));var n=r(6),o=r.n(n),c=r(7),a=r.n(c),i=r(37);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={adminUrl:"",countries:[],currency:{code:"USD",precision:2,symbol:"$",symbolPosition:"left",decimalSeparator:".",priceFormat:"%1$s%2$s",thousandSeparator:","},defaultDateRange:"period=month&compare=previous_year",locale:{siteLocale:"en_US",userLocale:"en_US",weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},orderStatuses:[],siteTitle:"",wcAssetUrl:""},d=l({},u,{},"object"===("undefined"==typeof wcSettings?"undefined":r.n(i)()(wcSettings))?wcSettings:{});function b(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},n=d.hasOwnProperty(e)?d[e]:t;return r(n,t)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}d.currency=l({},u.currency,{},d.currency),d.locale=l({},u.locale,{},d.locale);var w=b("storeApiNonce");a.a.use((function(e,t){if(function(e){var t=e.url||e.path;return!(!t||!e.method||"GET"===e.method)&&null!==/wc\/store\//.exec(t)}(e)){var r=e.headers||{};e.headers=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{"X-WC-Store-API-Nonce":w})}return t(e,t)})),a.a.setNonce=function(e){var t=null==e?void 0:e.get("X-WC-Store-API-Nonce");t&&(w=t)};b("currentUserIsAdmin",!1);var f=b("reviewRatingsEnabled",!0),m=b("showAvatars",!0),h=b("max_columns",6),v=b("min_columns",1),g=b("default_columns",3),O=b("max_rows",6),y=b("min_rows",1),j=b("default_rows",3),_=b("min_height",500),k=b("default_height",500),R=(b("placeholderImgSrc",""),b("thumbnail_size",300),b("isLargeCatalog")),E=b("limitTags"),A=(b("hasProducts",!0),b("hasTags",!0)),P=b("homeUrl",""),C=(b("couponsEnabled",!0),b("shippingEnabled",!0),b("taxesEnabled",!0),b("displayShopPricesIncludingTax",!1),b("displayCartPricesIncludingTax",!1),b("productCount",0),b("attributes",[]),b("isShippingCalculatorEnabled",!0),b("isShippingCostHidden",!1),b("wcBlocksAssetUrl","")),B=(b("shippingCountries",{}),b("allowedCountries",{}),b("shippingStates",{}),b("allowedStates",{}),b("shippingMethodsExist",!1),{id:0,title:"",permalink:""}),N=b("storePages",{shop:B,cart:B,checkout:B,privacy:B,terms:B}),S=(N.shop.permalink,N.checkout.id,N.checkout.permalink,N.privacy.permalink,N.privacy.title,N.terms.permalink,N.terms.title,N.cart.id,N.cart.permalink,{root:"/wc/blocks",products:"".concat("/wc/blocks","/products"),categories:"".concat("/wc/blocks","/products/categories"),metaProducts:"".concat("/wc/blocks","/product-meta"),metas:"".concat("/wc/blocks","/metas")})},44:function(e,t,r){"use strict";r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return u}));var n=r(7),o=r.n(n),c=r(8),a=r.n(c),i=r(4),s=function(e){if(i.n){if("lowest-rating"===e)return{order:"asc",orderby:"rating"};if("highest-rating"===e)return{order:"desc",orderby:"rating"}}return{order:"desc",orderby:"date_gmt"}},l=function(e){return o()({path:"/wc/blocks/products/reviews?"+Object.entries(e).map((function(e){return e.join("=")})).join("&"),parse:!1}).then((function(e){return e.json().then((function(t){return{reviews:t,totalReviews:parseInt(e.headers.get("x-wp-total"),10)}}))}))},u=function(e,t){var r=t.className,n=t.showReviewDate,o=t.showReviewerName,c=t.showReviewContent,i=t.showProductName,s=t.showReviewImage,l=t.showReviewRating;return a()(e,r,{"has-image":s,"has-name":o,"has-date":n,"has-rating":l,"has-content":c,"has-product-name":i})}},48:function(e,t){!function(){e.exports=this.wc.wcSettings}()},5:function(e,t){!function(){e.exports=this.lodash}()},53:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(64)),a=r(611),i=Object(n.createElement)(a.a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})),s=r(8),l=r.n(s),u=r(3),d=r(28);r(82),t.a=function(e){var t=e.className,r=e.error,a=e.isLoading,s=e.onRetry;return Object(n.createElement)(u.Placeholder,{icon:Object(n.createElement)(c.a,{srcElement:i}),label:Object(o.__)("Sorry, an error occurred","woo-gutenberg-products-block"),className:l()("wc-block-api-error",t)},Object(n.createElement)(d.a,{error:r}),s&&Object(n.createElement)(n.Fragment,null,a?Object(n.createElement)(u.Spinner,null):Object(n.createElement)(u.Button,{isDefault:!0,onClick:s},Object(o.__)("Retry","woo-gutenberg-products-block"))))}},589:function(e,t,r){"use strict";r.r(t);var n=r(6),o=r.n(n),c=r(0),a=r(1),i=r(23),s=r(64),l=r(611),u=Object(c.createElement)(l.a,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(c.createElement)("path",{d:"M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"})),d=(r(93),r(14)),b=r(3),p=(r(2),r(96)),w=function(){return Object(c.createElement)(b.Placeholder,{className:"wc-block-all-reviews",icon:Object(c.createElement)(s.a,{srcElement:u,className:"block-editor-block-icon"}),label:Object(a.__)("All Reviews","woo-gutenberg-products-block")},Object(a.__)("This block shows a list of all product reviews. Your store does not have any reviews yet, but they will show up here when it does.","woo-gutenberg-products-block"))},f=r(78),m=function(e){var t=e.attributes,r=e.setAttributes;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(d.InspectorControls,{key:"inspector"},Object(c.createElement)(b.PanelBody,{title:Object(a.__)("Content","woo-gutenberg-products-block")},Object(c.createElement)(b.ToggleControl,{label:Object(a.__)("Product name","woo-gutenberg-products-block"),checked:t.showProductName,onChange:function(){return r({showProductName:!t.showProductName})}}),Object(f.b)(t,r)),Object(c.createElement)(b.PanelBody,{title:Object(a.__)("List Settings","woo-gutenberg-products-block")},Object(f.c)(t,r))),Object(c.createElement)(p.a,{attributes:t,className:"wc-block-all-reviews",icon:Object(c.createElement)(s.a,{icon:u,className:"block-editor-block-icon"}),name:Object(a.__)("All Reviews","woo-gutenberg-products-block"),noReviewsPlaceholder:w}))},h=r(94),v=r(95),g=r(84);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(i.registerBlockType)("woocommerce/all-reviews",{title:Object(a.__)("All Reviews","woo-gutenberg-products-block"),icon:{src:Object(c.createElement)(s.a,{srcElement:u}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(a.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(a.__)("Show a list of all product reviews.","woo-gutenberg-products-block"),supports:{html:!1},example:y({},g.a,{attributes:y({},g.a.attributes,{showProductName:!0})}),attributes:y({},h.a,{showProductName:{type:"boolean",default:!0}}),edit:function(e){return Object(c.createElement)(m,e)},save:v.a})},64:function(e,t,r){"use strict";var n=r(6),o=r.n(n),c=r(35),a=r.n(c),i=r(11);r(2);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,c=a()(e,["srcElement","size"]);return Object(i.isValidElement)(t)&&Object(i.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},c))}},7:function(e,t){!function(){e.exports=this.wp.apiFetch}()},77:function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},78:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return p}));var n=r(0),o=r(1),c=r(116),a=r(3),i=r(14),s=r(48),l=r(4),u=r(83),d=function(e,t){return Object(n.createElement)(i.BlockControls,null,Object(n.createElement)(a.Toolbar,{controls:[{icon:"edit",title:Object(o.__)("Edit","woo-gutenberg-products-block"),onClick:function(){return t({editMode:!e})},isActive:e}]}))},b=function(e,t){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(a.ToggleControl,{label:Object(o.__)("Product rating","woo-gutenberg-products-block"),checked:e.showReviewRating,onChange:function(){return t({showReviewRating:!e.showReviewRating})}}),e.showReviewRating&&!l.n&&Object(n.createElement)(a.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},Object(c.a)(Object(o.__)("Product rating is disabled in your <a>store settings</a>.","woo-gutenberg-products-block"),{a:Object(n.createElement)("a",{href:Object(s.getAdminLink)("admin.php?page=wc-settings&tab=products"),target:"_blank",rel:"noopener noreferrer"})})),Object(n.createElement)(a.ToggleControl,{label:Object(o.__)("Reviewer name","woo-gutenberg-products-block"),checked:e.showReviewerName,onChange:function(){return t({showReviewerName:!e.showReviewerName})}}),Object(n.createElement)(a.ToggleControl,{label:Object(o.__)("Image","woo-gutenberg-products-block"),checked:e.showReviewImage,onChange:function(){return t({showReviewImage:!e.showReviewImage})}}),Object(n.createElement)(a.ToggleControl,{label:Object(o.__)("Review date","woo-gutenberg-products-block"),checked:e.showReviewDate,onChange:function(){return t({showReviewDate:!e.showReviewDate})}}),Object(n.createElement)(a.ToggleControl,{label:Object(o.__)("Review content","woo-gutenberg-products-block"),checked:e.showReviewContent,onChange:function(){return t({showReviewContent:!e.showReviewContent})}}),e.showReviewImage&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)(u.a,{label:Object(o.__)("Review image","woo-gutenberg-products-block"),value:e.imageType,options:[{label:Object(o.__)("Reviewer photo","woo-gutenberg-products-block"),value:"reviewer"},{label:Object(o.__)("Product","woo-gutenberg-products-block"),value:"product"}],onChange:function(e){return t({imageType:e})}}),"reviewer"===e.imageType&&!l.o&&Object(n.createElement)(a.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},Object(c.a)(Object(o.__)("Reviewer photo is disabled in your <a>site settings</a>.","woo-gutenberg-products-block"),{a:Object(n.createElement)("a",{href:Object(s.getAdminLink)("options-discussion.php"),target:"_blank",rel:"noopener noreferrer"})}))))},p=function(e,t){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(a.ToggleControl,{label:Object(o.__)("Order by","woo-gutenberg-products-block"),checked:e.showOrderby,onChange:function(){return t({showOrderby:!e.showOrderby})}}),Object(n.createElement)(a.SelectControl,{label:Object(o.__)("Order Product Reviews by","woo-gutenberg-products-block"),value:e.orderby,options:[{label:"Most recent",value:"most-recent"},{label:"Highest Rating",value:"highest-rating"},{label:"Lowest Rating",value:"lowest-rating"}],onChange:function(e){return t({orderby:e})}}),Object(n.createElement)(a.RangeControl,{label:Object(o.__)("Starting Number of Reviews","woo-gutenberg-products-block"),value:e.reviewsOnPageLoad,onChange:function(e){return t({reviewsOnPageLoad:e})},max:20,min:1}),Object(n.createElement)(a.ToggleControl,{label:Object(o.__)("Load more","woo-gutenberg-products-block"),checked:e.showLoadMore,onChange:function(){return t({showLoadMore:!e.showLoadMore})}}),e.showLoadMore&&Object(n.createElement)(a.RangeControl,{label:Object(o.__)("Load More Reviews","woo-gutenberg-products-block"),value:e.reviewsOnLoadMore,onChange:function(e){return t({reviewsOnLoadMore:e})},max:20,min:1}))}},82:function(e,t,r){},83:function(e,t,r){"use strict";var n=r(15),o=r.n(n),c=r(17),a=r.n(c),i=r(18),s=r.n(i),l=r(16),u=r.n(l),d=r(19),b=r.n(d),p=r(20),w=r.n(p),f=r(10),m=r.n(f),h=r(0),v=r(5),g=r(8),O=r.n(g),y=r(3),j=r(21);r(149);function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var k=function(e){b()(n,e);var t,r=(t=n,function(){var e,r=m()(t);if(_()){var n=m()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return w()(this,e)});function n(){var e;return a()(this,n),(e=r.apply(this,arguments)).onClick=e.onClick.bind(u()(e)),e}return s()(n,[{key:"onClick",value:function(e){this.props.onChange&&this.props.onChange(e.target.value)}},{key:"render",value:function(){var e,t=this,r=this.props,n=r.label,c=r.checked,a=r.instanceId,i=r.className,s=r.help,l=r.options,u=r.value,d="inspector-toggle-button-control-".concat(a);return s&&(e=Object(v.isFunction)(s)?s(c):s),Object(h.createElement)(y.BaseControl,{id:d,help:e,className:O()("components-toggle-button-control",i)},Object(h.createElement)("label",{id:d+"__label",htmlFor:d,className:"components-toggle-button-control__label"},n),Object(h.createElement)(y.ButtonGroup,{"aria-labelledby":d+"__label"},l.map((function(e,r){var c={};return u===e.value?(c.isPrimary=!0,c["aria-pressed"]=!0):(c.isDefault=!0,c["aria-pressed"]=!1),Object(h.createElement)(y.Button,o()({key:"".concat(e.label,"-").concat(e.value,"-").concat(r),value:e.value,onClick:t.onClick,"aria-label":n+": "+e.label},c),e.label)}))))}}]),n}(h.Component);t.a=Object(j.withInstanceId)(k)},84:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(1),o="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAMAAwAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+t6KKtaXps2sahBZ24DTTNtXPQepPsBzQBVo/OvddD+H2j6Nbqr2sd7Pj5prhQ2T7A8Cl1z4f6PrNuyrax2c+Plmt1CkH3A4NAHhP50Vb1bTJtG1G4srgASwttOOh9CPYjBqp+VABXX/AAreNfF8If7zROEz/ex/hmuQq1pT3cepW7WAdrxXBiEYyS30oA+kKKp6RPeXOnwyX9strdEfPErBgD9f6UurT3dtp80ljbC7ugPkiZgoJ+tAHkHxWeNvFsgT7ywoHx/e6/yIrj6t6vJdy6lcvfh1vGcmUSDBB+lVKACvbvh/4Qj8PaYlxOgOozrudmHMYPRB/X3+leVeDrBdT8UabbuNyGUMwPcL8xH6V9BUAJRRRQByfxA8IR+IdMe4gjA1GBSyMo5kA6of6e/1rxGvpr/PWvn3xjYLpnijUrdBtQTFlHoGG4D9aAP/2Q==",c={attributes:{editMode:!1,imageType:"reviewer",orderby:"most-recent",reviewsOnLoadMore:10,reviewsOnPageLoad:10,showLoadMore:!0,showOrderby:!0,showReviewDate:!0,showReviewerName:!0,showReviewImage:!0,showReviewRating:!0,showReviewContent:!0,previewReviews:[{id:1,date_created:"2019-07-15T17:05:04",formatted_date_created:Object(n.__)("July 15, 2019","woo-gutenberg-products-block"),date_created_gmt:"2019-07-15T15:05:04",product_id:0,product_name:Object(n.__)("WordPress Pennant","woo-gutenberg-products-block"),product_permalink:"#",reviewer:Object(n.__)("Alice","woo-gutenberg-products-block"),review:"<p>".concat(Object(n.__)("I bought this product last week and I'm very happy with it.","woo-gutenberg-products-block"),"</p>\n"),reviewer_avatar_urls:{48:o,96:o},rating:5,verified:!0},{id:2,date_created:"2019-07-12T12:39:39",formatted_date_created:Object(n.__)("July 12, 2019","woo-gutenberg-products-block"),date_created_gmt:"2019-07-12T10:39:39",product_id:0,product_name:Object(n.__)("WordPress Pennant","woo-gutenberg-products-block"),product_permalink:"#",reviewer:Object(n.__)("Bob","woo-gutenberg-products-block"),review:"<p>".concat(Object(n.__)("This product is awesome, I love it!","woo-gutenberg-products-block"),"</p>\n"),reviewer_avatar_urls:{48:o,96:o},rating:null,verified:!1}]}}},93:function(e,t,r){},94:function(e,t,r){"use strict";t.a={editMode:{type:"boolean",default:!0},imageType:{type:"string",default:"reviewer"},orderby:{type:"string",default:"most-recent"},reviewsOnLoadMore:{type:"number",default:10},reviewsOnPageLoad:{type:"number",default:10},showLoadMore:{type:"boolean",default:!0},showOrderby:{type:"boolean",default:!0},showReviewDate:{type:"boolean",default:!0},showReviewerName:{type:"boolean",default:!0},showReviewImage:{type:"boolean",default:!0},showReviewRating:{type:"boolean",default:!0},showReviewContent:{type:"boolean",default:!0},previewReviews:{type:"array",default:null}}},95:function(e,t,r){"use strict";var n=r(15),o=r.n(n),c=r(0),a=(r(93),r(44));t.a=function(e){var t=e.attributes,r=t.categoryIds,n=t.imageType,i=t.orderby,s=t.productId,l={"data-image-type":n,"data-orderby":i,"data-reviews-on-page-load":t.reviewsOnPageLoad,"data-reviews-on-load-more":t.reviewsOnLoadMore,"data-show-load-more":t.showLoadMore,"data-show-orderby":t.showOrderby},u="wc-block-all-reviews";return s&&(l["data-product-id"]=s,u="wc-block-reviews-by-product"),Array.isArray(r)&&(l["data-category-ids"]=r.join(","),u="wc-block-reviews-by-category"),Object(c.createElement)("div",o()({className:Object(a.a)(u,t)},l))}},96:function(e,t,r){"use strict";var n=r(17),o=r.n(n),c=r(18),a=r.n(c),i=r(19),s=r.n(i),l=r(20),u=r.n(l),d=r(10),b=r.n(d),p=r(0),w=r(1),f=r(11),m=(r(2),r(5)),h=r(3),v=r(4),g=r(53),O=r(6),y=r.n(O),j=r(8),_=r.n(j);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var R=function(e){var t,r=e.label,n=e.screenReaderLabel,o=e.wrapperElement,c=e.wrapperProps,a=null!=r,i=null!=n;return!a&&i?(t=o||"span",c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){y()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},c,{className:_()(c.className,"screen-reader-text")}),Object(p.createElement)(t,c,n)):(t=o||f.Fragment,a&&i&&r!==n?Object(p.createElement)(t,c,Object(p.createElement)("span",{"aria-hidden":"true"},r),Object(p.createElement)("span",{className:"screen-reader-text"},n)):Object(p.createElement)(t,c,r))};R.defaultProps={wrapperProps:{}};var E=R,A=(r(200),function(e){var t=e.onClick,r=e.label,n=e.screenReaderLabel;return Object(p.createElement)("div",{className:"wp-block-button wc-block-load-more"},Object(p.createElement)("button",{className:"wp-block-button__link",onClick:t},Object(p.createElement)(E,{label:r,screenReaderLabel:n})))});A.defaultProps={label:Object(w.__)("Load more","woo-gutenberg-products-block")};var P=A,C=r(21),B=(r(197),Object(C.withInstanceId)((function(e){var t=e.className,r=e.instanceId,n=e.defaultValue,o=e.label,c=e.onChange,a=e.options,i=e.screenReaderLabel,s=e.readOnly,l=e.value,u="wc-block-sort-select__select-".concat(r);return Object(p.createElement)("div",{className:_()("wc-block-sort-select",t)},Object(p.createElement)(E,{label:o,screenReaderLabel:i,wrapperElement:"label",wrapperProps:{className:"wc-block-sort-select__label",htmlFor:u}}),Object(p.createElement)("select",{id:u,className:"wc-block-sort-select__select",defaultValue:n,onChange:c,readOnly:s,value:l},a.map((function(e){return Object(p.createElement)("option",{key:e.key,value:e.key},e.label)}))))}))),N=(r(196),function(e){var t=e.defaultValue,r=e.onChange,n=e.readOnly,o=e.value;return Object(p.createElement)(B,{className:"wc-block-review-sort-select",defaultValue:t,label:Object(w.__)("Order by","woo-gutenberg-products-block"),onChange:r,options:[{key:"most-recent",label:Object(w.__)("Most recent","woo-gutenberg-products-block")},{key:"highest-rating",label:Object(w.__)("Highest rating","woo-gutenberg-products-block")},{key:"lowest-rating",label:Object(w.__)("Lowest rating","woo-gutenberg-products-block")}],readOnly:n,screenReaderLabel:Object(w.__)("Order reviews by","woo-gutenberg-products-block"),value:o})}),S=r(16),D=r.n(S),x=r(114),T=r.n(x),L=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...",n=T()(e,{suffix:r,limit:t});return n.html},Q=function(e,t,r,n){var o=I(e,t,r);return L(e,o-n.length,n)},I=function(e,t,r){for(var n={start:0,middle:0,end:e.length};n.start<=n.end;)n.middle=Math.floor((n.start+n.end)/2),t.innerHTML=L(e,n.middle),n=M(n,t.clientHeight,r);return n.middle},M=function(e,t,r){return t<=r?e.start=e.middle+1:e.end=e.middle-1,e};function F(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var U=function(e){s()(n,e);var t,r=(t=n,function(){var e,r=b()(t);if(F()){var n=b()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return u()(this,e)});function n(e){var t;return o()(this,n),(t=r.apply(this,arguments)).state={isExpanded:!1,clampEnabled:null,content:e.children,summary:"."},t.reviewSummary=Object(f.createRef)(),t.reviewContent=Object(f.createRef)(),t.getButton=t.getButton.bind(D()(t)),t.onClick=t.onClick.bind(D()(t)),t}return a()(n,[{key:"componentDidMount",value:function(){if(this.props.children){var e=this.props,t=e.maxLines,r=e.ellipsis,n=(this.reviewSummary.current.clientHeight+1)*t+1,o=this.reviewContent.current.clientHeight+1>n;this.setState({clampEnabled:o}),o&&this.setState({summary:Q(this.reviewContent.current.innerHTML,this.reviewSummary.current,n,r)})}}},{key:"getButton",value:function(){var e=this.state.isExpanded,t=this.props,r=t.className,n=t.lessText,o=t.moreText,c=e?n:o;if(c)return Object(p.createElement)("a",{href:"#more",className:r+"__read_more",onClick:this.onClick,"aria-expanded":!e,role:"button"},c)}},{key:"onClick",value:function(e){e.preventDefault();var t=this.state.isExpanded;this.setState({isExpanded:!t})}},{key:"render",value:function(){var e=this.props.className,t=this.state,r=t.content,n=t.summary,o=t.clampEnabled,c=t.isExpanded;return r?!1===o?Object(p.createElement)("div",{className:e},Object(p.createElement)("div",{ref:this.reviewContent},r)):Object(p.createElement)("div",{className:e},(!c||null===o)&&Object(p.createElement)("div",{ref:this.reviewSummary,"aria-hidden":c,dangerouslySetInnerHTML:{__html:n}}),(c||null===o)&&Object(p.createElement)("div",{ref:this.reviewContent,"aria-hidden":!c},r),this.getButton()):null}}]),n}(f.Component);U.defaultProps={maxLines:3,ellipsis:"&hellip;",moreText:Object(w.__)("Read more","woo-gutenberg-products-block"),lessText:Object(w.__)("Read less","woo-gutenberg-products-block"),className:"read-more-content"};var H=U;r(199);var V=function(e){var t=e.attributes,r=e.review,n=void 0===r?{}:r,o=t.imageType,c=t.showReviewDate,a=t.showReviewerName,i=t.showReviewImage,s=t.showReviewRating,l=t.showReviewContent,u=t.showProductName,d=n.rating,b=!Object.keys(n).length>0,f=Number.isFinite(d)&&s;return Object(p.createElement)("li",{className:_()("wc-block-review-list-item__item",{"is-loading":b}),"aria-hidden":b},(u||c||a||i||f)&&Object(p.createElement)("div",{className:"wc-block-review-list-item__info"},i&&function(e,t,r){return r||!e?Object(p.createElement)("div",{className:"wc-block-review-list-item__image",width:"48",height:"48"}):Object(p.createElement)("div",{className:"wc-block-review-list-item__image"},"product"===t?Object(p.createElement)("img",{"aria-hidden":"true",alt:"",src:e.product_picture||"",className:"wc-block-review-list-item__image",width:"48",height:"48"}):Object(p.createElement)("img",{"aria-hidden":"true",alt:"",src:e.reviewer_avatar_urls[48]||"",srcSet:e.reviewer_avatar_urls[96]+" 2x",className:"wc-block-review-list-item__image",width:"48",height:"48"}),e.verified&&Object(p.createElement)("div",{className:"wc-block-review-list-item__verified",title:Object(w.__)("Verified buyer","woo-gutenberg-products-block")},Object(w.__)("Verified buyer","woo-gutenberg-products-block")))}(n,o,b),(u||a||f||c)&&Object(p.createElement)("div",{className:"wc-block-review-list-item__meta"},f&&function(e){var t=e.rating,r={width:t/5*100+"%"};return Object(p.createElement)("div",{className:"wc-block-review-list-item__rating"},Object(p.createElement)("div",{className:"wc-block-review-list-item__rating__stars",role:"img"},Object(p.createElement)("span",{style:r},Object(w.sprintf)(Object(w.__)("Rated %d out of 5","woo-gutenberg-products-block"),t))))}(n),u&&function(e){return Object(p.createElement)("div",{className:"wc-block-review-list-item__product"},Object(p.createElement)("a",{href:e.product_permalink,dangerouslySetInnerHTML:{__html:e.product_name}}))}(n),a&&function(e){var t=e.reviewer,r=void 0===t?"":t;return Object(p.createElement)("div",{className:"wc-block-review-list-item__author"},r)}(n),c&&function(e){var t=e.date_created,r=e.formatted_date_created;return Object(p.createElement)("time",{className:"wc-block-review-list-item__published-date",dateTime:t},r)}(n))),l&&function(e){return Object(p.createElement)(H,{maxLines:10,moreText:Object(w.__)("Read full review","woo-gutenberg-products-block"),lessText:Object(w.__)("Hide full review","woo-gutenberg-products-block"),className:"wc-block-review-list-item__text"},Object(p.createElement)("div",{dangerouslySetInnerHTML:{__html:e.review||""}}))}(n))};r(198);function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var J=function(e){var t=e.attributes,r=e.reviews,n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){y()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{showReviewImage:(v.o||"product"===t.imageType)&&t.showReviewImage,showReviewRating:v.n&&t.showReviewRating});return Object(p.createElement)("ul",{className:"wc-block-review-list"},0===r.length?Object(p.createElement)(V,{attributes:n}):r.map((function(e,t){return Object(p.createElement)(V,{key:e.id||t,attributes:n,review:e})})))},X=r(15),G=r.n(X),z=r(12),K=r.n(z),Y=r(22),Z=r.n(Y),q=r(77),$=r.n(q),ee=r(44),te=r(24);function re(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function ne(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var oe=function(e){var t=function(t){s()(c,t);var r,n=(r=c,function(){var e,t=b()(r);if(re()){var n=b()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u()(this,e)});function c(){var e;o()(this,c);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e=n.call.apply(n,[this].concat(r)),y()(D()(e),"isPreview",!!e.props.attributes.previewReviews),y()(D()(e),"delayedAppendReviews",e.props.delayFunction(e.appendReviews)),y()(D()(e),"state",{error:null,loading:!0,reviews:e.isPreview?e.props.attributes.previewReviews:[],totalReviews:e.isPreview?e.props.attributes.previewReviews.length:0}),y()(D()(e),"setError",function(){var t=Z()(K.a.mark((function t(r){var n,o;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.onReviewsLoadError,t.next=3,Object(te.a)(r);case 3:o=t.sent,e.setState({reviews:[],loading:!1,error:o}),n(o);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e}return a()(c,[{key:"componentDidMount",value:function(){this.replaceReviews()}},{key:"componentDidUpdate",value:function(e){e.reviewsToDisplay<this.props.reviewsToDisplay?this.delayedAppendReviews():this.shouldReplaceReviews(e,this.props)&&this.replaceReviews()}},{key:"shouldReplaceReviews",value:function(e,t){return e.orderby!==t.orderby||e.order!==t.order||e.productId!==t.productId||!$()(e.categoryIds,t.categoryIds)}},{key:"componentWillUnMount",value:function(){this.delayedAppendReviews.cancel&&this.delayedAppendReviews.cancel()}},{key:"getArgs",value:function(e){var t=this.props,r=t.categoryIds,n=t.order,o=t.orderby,c=t.productId,a={order:n,orderby:o,per_page:t.reviewsToDisplay-e,offset:e};return r&&r.length&&(a.category_id=Array.isArray(r)?r.join(","):r),c&&(a.product_id=c),a}},{key:"replaceReviews",value:function(){if(!this.isPreview){var e=this.props.onReviewsReplaced;this.updateListOfReviews().then(e)}}},{key:"appendReviews",value:function(){if(!this.isPreview){var e=this.props,t=e.onReviewsAppended,r=e.reviewsToDisplay,n=this.state.reviews;r<=n.length||this.updateListOfReviews(n).then(t)}}},{key:"updateListOfReviews",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=this.props.reviewsToDisplay,n=this.state.totalReviews,o=Math.min(n,r)-t.length;return this.setState({loading:!0,reviews:t.concat(Array(o).fill({}))}),Object(ee.b)(this.getArgs(t.length)).then((function(r){var n=r.reviews,o=r.totalReviews;return e.setState({reviews:t.filter((function(e){return Object.keys(e).length})).concat(n),totalReviews:o,loading:!1,error:null}),{newReviews:n}})).catch(this.setError)}},{key:"render",value:function(){var t=this.props.reviewsToDisplay,r=this.state,n=r.error,o=r.loading,c=r.reviews,a=r.totalReviews;return Object(p.createElement)(e,G()({},this.props,{error:n,isLoading:o,reviews:c.slice(0,t),totalReviews:a}))}}]),c}(f.Component);y()(t,"defaultProps",{delayFunction:function(e){return e},onReviewsAppended:function(){},onReviewsLoadError:function(){},onReviewsReplaced:function(){}});var r=e.displayName,n=void 0===r?e.name||"Component":r;return t.displayName="WithReviews( ".concat(n," )"),t}(function(e){s()(n,e);var t,r=(t=n,function(){var e,r=b()(t);if(ne()){var n=b()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return u()(this,e)});function n(){return o()(this,n),r.apply(this,arguments)}return a()(n,[{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.error,n=e.isLoading,o=e.noReviewsPlaceholder,c=e.reviews,a=e.totalReviews;return r?Object(p.createElement)(g.a,{className:"wc-block-featured-product-error",error:r,isLoading:n}):0!==c.length||n?Object(p.createElement)(h.Disabled,null,t.showOrderby&&v.n&&Object(p.createElement)(N,{readOnly:!0,value:t.orderby}),Object(p.createElement)(J,{attributes:t,reviews:c}),t.showLoadMore&&a>c.length&&Object(p.createElement)(P,{screenReaderLabel:Object(w.__)("Load more reviews","woo-gutenberg-products-block")})):Object(p.createElement)(o,{attributes:t})}}]),n}(f.Component));function ce(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var ae=function(e){s()(n,e);var t,r=(t=n,function(){var e,r=b()(t);if(ce()){var n=b()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return u()(this,e)});function n(){return o()(this,n),r.apply(this,arguments)}return a()(n,[{key:"renderHiddenContentPlaceholder",value:function(){var e=this.props,t=e.icon,r=e.name;return Object(p.createElement)(h.Placeholder,{icon:t,label:r},Object(w.__)("The content for this block is hidden due to block settings.","woo-gutenberg-products-block"))}},{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.className,n=e.noReviewsPlaceholder,o=t.categoryIds,c=t.productId,a=t.reviewsOnPageLoad,i=t.showProductName,s=t.showReviewDate,l=t.showReviewerName,u=t.showReviewContent,d=t.showReviewImage,b=t.showReviewRating,w=Object(ee.c)(t.orderby),f=w.order,h=w.orderby;return!(u||b||s||l||d||i)?this.renderHiddenContentPlaceholder():Object(p.createElement)("div",{className:Object(ee.a)(r,t)},Object(p.createElement)(oe,{attributes:t,categoryIds:o,delayFunction:function(e){return Object(m.debounce)(e,400)},noReviewsPlaceholder:n,orderby:h,order:f,productId:c,reviewsToDisplay:a}))}}]),n}(f.Component);t.a=ae}});