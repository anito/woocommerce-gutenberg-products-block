!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=30)}([function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.React}()},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,r){e.exports=r(22)()},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){var n=r(21);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t,r){var n=r(16),o=r(3);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},function(e,t){!function(){e.exports=this.regeneratorRuntime}()},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},function(e,t){function r(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function c(e){r(i,o,a,c,s,"next",e)}function s(e){r(i,o,a,c,s,"throw",e)}c(void 0)}))}}},function(e,t){!function(){e.exports=this.wp.a11y}()},function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t){!function(){e.exports=this.ReactDOM}()},function(e,t,r){function n(e){for(var t,r,n=[],o=0;o<rowCut.length;o++)(t=rowCut.substring(o).match(/^&[a-z0-9#]+;/))?(r=t[0],n.push(r),o+=r.length-1):n.push(rowCut[o]);return n}e.exports&&(e.exports=function(e,t){for(var r,o,a,i,c,s=(t=t||{}).limit||100,l=void 0===t.preserveTags||t.preserveTags,u=void 0!==t.wordBreak&&t.wordBreak,p=t.suffix||"...",f=t.moreLink||"",d=t.moreText||"»",v=t.preserveWhiteSpace||!1,h=e.replace(/</g,"\n<").replace(/>/g,">\n").replace(/\n\n/g,"\n").replace(/^\n/g,"").replace(/\n$/g,"").split("\n"),b=0,w=[],m=!1,g=0;g<h.length;g++)if(r=h[g],rowCut=v?r:r.replace(/[ ]+/g," "),r.length){var y=n(rowCut);if("<"!==r[0])if(b>=s)r="";else if(b+y.length>=s){if(" "===y[(o=s-b)-1])for(;o&&" "===y[(o-=1)-1];);else a=y.slice(o).indexOf(" "),u||(-1!==a?o+=a:o=r.length);r=y.slice(0,o).join("")+p,f&&(r+='<a href="'+f+'" style="display:inline">'+d+"</a>"),b=s,m=!0}else b+=y.length;else if(l){if(b>=s)if(c=(i=r.match(/[a-zA-Z]+/))?i[0]:"")if("</"!==r.substring(0,2))w.push(c),r="";else{for(;w[w.length-1]!==c&&w.length;)w.pop();w.length&&(r=""),w.pop()}else r=""}else r="";h[g]=r}return{html:h.join("\n").replace(/\n/g,""),more:m}})},function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},,function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},function(e,t,r){"use strict";var n=r(23);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,r){"use strict";r.r(t);var n=r(6),o=r.n(n),a=r(7),i=r.n(a),c=r(3),s=r.n(c),l=r(8),u=r.n(l),p=r(9),f=r.n(p),d=r(5),v=r.n(d),h=r(0),b=r(15),w=r(1),m=r.n(w),g=(r(4),r(12)),y=r.n(g),O=r(10),R=r.n(O),_=r(2),k=r.n(_),j=r(16);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){k()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x={adminUrl:"",countries:[],currency:{code:"USD",precision:2,symbol:"$",symbolPosition:"left",decimalSeparator:".",priceFormat:"%1$s%2$s",thousandSeparator:","},defaultDateRange:"period=month&compare=previous_year",locale:{siteLocale:"en_US",userLocale:"en_US",weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},orderStatuses:[],siteTitle:"",wcAssetUrl:""},S=P({},x,{},"object"===("undefined"==typeof wcSettings?"undefined":r.n(j)()(wcSettings))?wcSettings:{});function T(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},n=S.hasOwnProperty(e)?S[e]:t;return r(n,t)}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}S.currency=P({},x.currency,{},S.currency),S.locale=P({},x.locale,{},S.locale);var C=T("storeApiNonce");y.a.use((function(e,t){if(function(e){var t=e.url||e.path;return!(!t||!e.method||"GET"===e.method)&&null!==/wc\/store\//.exec(t)}(e)){var r=e.headers||{};e.headers=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){k()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{"X-WC-Store-API-Nonce":C})}return t(e,t)})),y.a.setNonce=function(e){var t=null==e?void 0:e.get("X-WC-Store-API-Nonce");t&&(C=t)};T("currentUserIsAdmin",!1);var N=T("reviewRatingsEnabled",!0),L=T("showAvatars",!0),A=(T("max_columns",6),T("min_columns",1),T("default_columns",3),T("max_rows",6),T("min_rows",1),T("default_rows",3),T("min_height",500),T("default_height",500),T("placeholderImgSrc",""),T("thumbnail_size",300),T("isLargeCatalog"),T("limitTags"),T("hasProducts",!0),T("hasTags",!0),T("homeUrl",""),T("couponsEnabled",!0),T("shippingEnabled",!0),T("taxesEnabled",!0),T("displayShopPricesIncludingTax",!1),T("displayCartPricesIncludingTax",!1),T("productCount",0),T("attributes",[]),T("isShippingCalculatorEnabled",!0),T("isShippingCostHidden",!1),T("wcBlocksAssetUrl","")),I=(T("shippingCountries",{}),T("allowedCountries",{}),T("shippingStates",{}),T("allowedStates",{}),T("shippingMethodsExist",!1),{id:0,title:"",permalink:""}),M=T("storePages",{shop:I,cart:I,checkout:I,privacy:I,terms:I}),U=(M.shop.permalink,M.checkout.id,M.checkout.permalink,M.privacy.permalink,M.privacy.title,M.terms.permalink,M.terms.title,M.cart.id,M.cart.permalink,"".concat("/wc/blocks","/products"),"".concat("/wc/blocks","/products/categories"),"".concat("/wc/blocks","/product-meta"),"".concat("/wc/blocks","/metas"),function(e){return y()({path:"/wc/blocks/products/reviews?"+Object.entries(e).map((function(e){return e.join("=")})).join("&"),parse:!1}).then((function(e){return e.json().then((function(t){return{reviews:t,totalReviews:parseInt(e.headers.get("x-wp-total"),10)}}))}))});function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var H=function(e){var t,r=e.label,n=e.screenReaderLabel,o=e.wrapperElement,a=e.wrapperProps,i=null!=r,c=null!=n;return!i&&c?(t=o||"span",a=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){k()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},a,{className:R()(a.className,"screen-reader-text")}),React.createElement(t,a,n)):(t=o||w.Fragment,i&&c&&r!==n?React.createElement(t,a,React.createElement("span",{"aria-hidden":"true"},r),React.createElement("span",{className:"screen-reader-text"},n)):React.createElement(t,a,r))};H.defaultProps={wrapperProps:{}};var W=H,B=(r(29),function(e){var t=e.onClick,r=e.label,n=e.screenReaderLabel;return React.createElement("div",{className:"wp-block-button wc-block-load-more"},React.createElement("button",{className:"wp-block-button__link",onClick:t},React.createElement(W,{label:r,screenReaderLabel:n})))});B.defaultProps={label:Object(h.__)("Load more","woo-gutenberg-products-block")};var V=B,$=r(33),q=(r(26),Object($.withInstanceId)((function(e){var t=e.className,r=e.instanceId,n=e.defaultValue,o=e.label,a=e.onChange,i=e.options,c=e.screenReaderLabel,s=e.readOnly,l=e.value,u="wc-block-sort-select__select-".concat(r);return React.createElement("div",{className:R()("wc-block-sort-select",t)},React.createElement(W,{label:o,screenReaderLabel:c,wrapperElement:"label",wrapperProps:{className:"wc-block-sort-select__label",htmlFor:u}}),React.createElement("select",{id:u,className:"wc-block-sort-select__select",defaultValue:n,onChange:a,readOnly:s,value:l},i.map((function(e){return React.createElement("option",{key:e.key,value:e.key},e.label)}))))}))),z=(r(25),function(e){var t=e.defaultValue,r=e.onChange,n=e.readOnly,o=e.value;return React.createElement(q,{className:"wc-block-review-sort-select",defaultValue:t,label:Object(h.__)("Order by","woo-gutenberg-products-block"),onChange:r,options:[{key:"most-recent",label:Object(h.__)("Most recent","woo-gutenberg-products-block")},{key:"highest-rating",label:Object(h.__)("Highest rating","woo-gutenberg-products-block")},{key:"lowest-rating",label:Object(h.__)("Lowest rating","woo-gutenberg-products-block")}],readOnly:n,screenReaderLabel:Object(h.__)("Order reviews by","woo-gutenberg-products-block"),value:o})}),X=r(18),G=r.n(X),Y=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...",n=G()(e,{suffix:r,limit:t});return n.html},Z=function(e,t,r,n){var o=J(e,t,r);return Y(e,o-n.length,n)},J=function(e,t,r){for(var n={start:0,middle:0,end:e.length};n.start<=n.end;)n.middle=Math.floor((n.start+n.end)/2),t.innerHTML=Y(e,n.middle),n=K(n,t.clientHeight,r);return n.middle},K=function(e,t,r){return t<=r?e.start=e.middle+1:e.end=e.middle-1,e};function Q(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var ee=function(e){u()(n,e);var t,r=(t=n,function(){var e,r=v()(t);if(Q()){var n=v()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return f()(this,e)});function n(e){var t;return o()(this,n),(t=r.apply(this,arguments)).state={isExpanded:!1,clampEnabled:null,content:e.children,summary:"."},t.reviewSummary=Object(w.createRef)(),t.reviewContent=Object(w.createRef)(),t.getButton=t.getButton.bind(s()(t)),t.onClick=t.onClick.bind(s()(t)),t}return i()(n,[{key:"componentDidMount",value:function(){if(this.props.children){var e=this.props,t=e.maxLines,r=e.ellipsis,n=(this.reviewSummary.current.clientHeight+1)*t+1,o=this.reviewContent.current.clientHeight+1>n;this.setState({clampEnabled:o}),o&&this.setState({summary:Z(this.reviewContent.current.innerHTML,this.reviewSummary.current,n,r)})}}},{key:"getButton",value:function(){var e=this.state.isExpanded,t=this.props,r=t.className,n=t.lessText,o=t.moreText,a=e?n:o;if(a)return m.a.createElement("a",{href:"#more",className:r+"__read_more",onClick:this.onClick,"aria-expanded":!e,role:"button"},a)}},{key:"onClick",value:function(e){e.preventDefault();var t=this.state.isExpanded;this.setState({isExpanded:!t})}},{key:"render",value:function(){var e=this.props.className,t=this.state,r=t.content,n=t.summary,o=t.clampEnabled,a=t.isExpanded;return r?!1===o?m.a.createElement("div",{className:e},m.a.createElement("div",{ref:this.reviewContent},r)):m.a.createElement("div",{className:e},(!a||null===o)&&m.a.createElement("div",{ref:this.reviewSummary,"aria-hidden":a,dangerouslySetInnerHTML:{__html:n}}),(a||null===o)&&m.a.createElement("div",{ref:this.reviewContent,"aria-hidden":!a},r),this.getButton()):null}}]),n}(w.Component);ee.defaultProps={maxLines:3,ellipsis:"&hellip;",moreText:Object(h.__)("Read more","woo-gutenberg-products-block"),lessText:Object(h.__)("Read less","woo-gutenberg-products-block"),className:"read-more-content"};var te=ee;r(28);var re=function(e){var t=e.attributes,r=e.review,n=void 0===r?{}:r,o=t.imageType,a=t.showReviewDate,i=t.showReviewerName,c=t.showReviewImage,s=t.showReviewRating,l=t.showReviewContent,u=t.showProductName,p=n.rating,f=!Object.keys(n).length>0,d=Number.isFinite(p)&&s;return React.createElement("li",{className:R()("wc-block-review-list-item__item",{"is-loading":f}),"aria-hidden":f},(u||a||i||c||d)&&React.createElement("div",{className:"wc-block-review-list-item__info"},c&&function(e,t,r){return r||!e?React.createElement("div",{className:"wc-block-review-list-item__image",width:"48",height:"48"}):React.createElement("div",{className:"wc-block-review-list-item__image"},"product"===t?React.createElement("img",{"aria-hidden":"true",alt:"",src:e.product_picture||"",className:"wc-block-review-list-item__image",width:"48",height:"48"}):React.createElement("img",{"aria-hidden":"true",alt:"",src:e.reviewer_avatar_urls[48]||"",srcSet:e.reviewer_avatar_urls[96]+" 2x",className:"wc-block-review-list-item__image",width:"48",height:"48"}),e.verified&&React.createElement("div",{className:"wc-block-review-list-item__verified",title:Object(h.__)("Verified buyer","woo-gutenberg-products-block")},Object(h.__)("Verified buyer","woo-gutenberg-products-block")))}(n,o,f),(u||i||d||a)&&React.createElement("div",{className:"wc-block-review-list-item__meta"},d&&function(e){var t=e.rating,r={width:t/5*100+"%"};return React.createElement("div",{className:"wc-block-review-list-item__rating"},React.createElement("div",{className:"wc-block-review-list-item__rating__stars",role:"img"},React.createElement("span",{style:r},Object(h.sprintf)(Object(h.__)("Rated %d out of 5","woo-gutenberg-products-block"),t))))}(n),u&&function(e){return React.createElement("div",{className:"wc-block-review-list-item__product"},React.createElement("a",{href:e.product_permalink,dangerouslySetInnerHTML:{__html:e.product_name}}))}(n),i&&function(e){var t=e.reviewer,r=void 0===t?"":t;return React.createElement("div",{className:"wc-block-review-list-item__author"},r)}(n),a&&function(e){var t=e.date_created,r=e.formatted_date_created;return React.createElement("time",{className:"wc-block-review-list-item__published-date",dateTime:t},r)}(n))),l&&function(e){return React.createElement(te,{maxLines:10,moreText:Object(h.__)("Read full review","woo-gutenberg-products-block"),lessText:Object(h.__)("Hide full review","woo-gutenberg-products-block"),className:"wc-block-review-list-item__text"},React.createElement("div",{dangerouslySetInnerHTML:{__html:e.review||""}}))}(n))};r(27);function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var oe=function(e){var t=e.attributes,r=e.reviews,n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){k()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{showReviewImage:(L||"product"===t.imageType)&&t.showReviewImage,showReviewRating:N&&t.showReviewRating});return React.createElement("ul",{className:"wc-block-review-list"},0===r.length?React.createElement(re,{attributes:n}):r.map((function(e,t){return React.createElement(re,{key:e.id||t,attributes:n,review:e})})))},ae=r(13),ie=r.n(ae),ce=r(11),se=r.n(ce),le=r(14),ue=r.n(le),pe=r(19),fe=r.n(pe),de=function(){var e=ue()(se.a.mark((function e(t){var r;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();function ve(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var he=function(e){var t=function(t){u()(a,t);var r,n=(r=a,function(){var e,t=v()(r);if(ve()){var n=v()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f()(this,e)});function a(){var e;o()(this,a);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=n.call.apply(n,[this].concat(r)),k()(s()(e),"isPreview",!!e.props.attributes.previewReviews),k()(s()(e),"delayedAppendReviews",e.props.delayFunction(e.appendReviews)),k()(s()(e),"state",{error:null,loading:!0,reviews:e.isPreview?e.props.attributes.previewReviews:[],totalReviews:e.isPreview?e.props.attributes.previewReviews.length:0}),k()(s()(e),"setError",function(){var t=ue()(se.a.mark((function t(r){var n,o;return se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.onReviewsLoadError,t.next=3,de(r);case 3:o=t.sent,e.setState({reviews:[],loading:!1,error:o}),n(o);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e}return i()(a,[{key:"componentDidMount",value:function(){this.replaceReviews()}},{key:"componentDidUpdate",value:function(e){e.reviewsToDisplay<this.props.reviewsToDisplay?this.delayedAppendReviews():this.shouldReplaceReviews(e,this.props)&&this.replaceReviews()}},{key:"shouldReplaceReviews",value:function(e,t){return e.orderby!==t.orderby||e.order!==t.order||e.productId!==t.productId||!fe()(e.categoryIds,t.categoryIds)}},{key:"componentWillUnMount",value:function(){this.delayedAppendReviews.cancel&&this.delayedAppendReviews.cancel()}},{key:"getArgs",value:function(e){var t=this.props,r=t.categoryIds,n=t.order,o=t.orderby,a=t.productId,i={order:n,orderby:o,per_page:t.reviewsToDisplay-e,offset:e};return r&&r.length&&(i.category_id=Array.isArray(r)?r.join(","):r),a&&(i.product_id=a),i}},{key:"replaceReviews",value:function(){if(!this.isPreview){var e=this.props.onReviewsReplaced;this.updateListOfReviews().then(e)}}},{key:"appendReviews",value:function(){if(!this.isPreview){var e=this.props,t=e.onReviewsAppended,r=e.reviewsToDisplay,n=this.state.reviews;r<=n.length||this.updateListOfReviews(n).then(t)}}},{key:"updateListOfReviews",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=this.props.reviewsToDisplay,n=this.state.totalReviews,o=Math.min(n,r)-t.length;return this.setState({loading:!0,reviews:t.concat(Array(o).fill({}))}),U(this.getArgs(t.length)).then((function(r){var n=r.reviews,o=r.totalReviews;return e.setState({reviews:t.filter((function(e){return Object.keys(e).length})).concat(n),totalReviews:o,loading:!1,error:null}),{newReviews:n}})).catch(this.setError)}},{key:"render",value:function(){var t=this.props.reviewsToDisplay,r=this.state,n=r.error,o=r.loading,a=r.reviews,i=r.totalReviews;return React.createElement(e,ie()({},this.props,{error:n,isLoading:o,reviews:a.slice(0,t),totalReviews:i}))}}]),a}(w.Component);k()(t,"defaultProps",{delayFunction:function(e){return e},onReviewsAppended:function(){},onReviewsLoadError:function(){},onReviewsReplaced:function(){}});var r=e.displayName,n=void 0===r?e.name||"Component":r;return t.displayName="WithReviews( ".concat(n," )"),t}((function(e){var t=e.attributes,r=e.onAppendReviews,n=e.onChangeOrderby,o=e.reviews,a=e.totalReviews,i=t.orderby;return 0===o.length?null:React.createElement(w.Fragment,null,"false"!==t.showOrderby&&N&&React.createElement(z,{defaultValue:i,onChange:n}),React.createElement(oe,{attributes:t,reviews:o}),"false"!==t.showLoadMore&&a>o.length&&React.createElement(V,{onClick:r,screenReaderLabel:Object(h.__)("Load more reviews","woo-gutenberg-products-block")}))}));function be(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var we=function(e){u()(n,e);var t,r=(t=n,function(){var e,r=v()(t);if(be()){var n=v()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return f()(this,e)});function n(){var e;o()(this,n);var t=(e=r.apply(this,arguments)).props.attributes;return e.state={orderby:t.orderby,reviewsToDisplay:parseInt(t.reviewsOnPageLoad,10)},e.onAppendReviews=e.onAppendReviews.bind(s()(e)),e.onChangeOrderby=e.onChangeOrderby.bind(s()(e)),e}return i()(n,[{key:"onAppendReviews",value:function(){var e=this.props.attributes,t=this.state.reviewsToDisplay;this.setState({reviewsToDisplay:t+parseInt(e.reviewsOnLoadMore,10)})}},{key:"onChangeOrderby",value:function(e){var t=this.props.attributes;this.setState({orderby:e.target.value,reviewsToDisplay:parseInt(t.reviewsOnPageLoad,10)})}},{key:"onReviewsAppended",value:function(e){var t=e.newReviews;Object(b.speak)(Object(h.sprintf)(Object(h._n)("%d review loaded.","%d reviews loaded.",t.length,"woo-gutenberg-products-block"),t.length))}},{key:"onReviewsReplaced",value:function(){Object(b.speak)(Object(h.__)("Reviews list updated.","woo-gutenberg-products-block"))}},{key:"onReviewsLoadError",value:function(){Object(b.speak)(Object(h.__)("There was an error loading the reviews.","woo-gutenberg-products-block"))}},{key:"render",value:function(){var e=this.props.attributes,t=e.categoryIds,r=e.productId,n=this.state.reviewsToDisplay,o=function(e){if(N){if("lowest-rating"===e)return{order:"asc",orderby:"rating"};if("highest-rating"===e)return{order:"desc",orderby:"rating"}}return{order:"desc",orderby:"date_gmt"}}(this.state.orderby),a=o.order,i=o.orderby;return React.createElement(he,{attributes:e,categoryIds:t,onAppendReviews:this.onAppendReviews,onChangeOrderby:this.onChangeOrderby,onReviewsAppended:this.onReviewsAppended,onReviewsLoadError:this.onReviewsLoadError,onReviewsReplaced:this.onReviewsReplaced,order:a,orderby:i,productId:r,reviewsToDisplay:n})}}]),n}(w.Component),me=r(17),ge=function(e){var t=e.imageUrl,r=void 0===t?"".concat(A,"img/block-error.svg"):t,n=e.header,o=void 0===n?Object(h.__)("Oops!","woo-gutenberg-products-block"):n,a=e.text,i=void 0===a?Object(h.__)("There was an error loading the content.","woo-gutenberg-products-block"):a,c=e.errorMessage,s=e.errorMessagePrefix,l=void 0===s?Object(h.__)("Error:","woo-gutenberg-products-block"):s;return React.createElement("div",{className:"wc-block-error"},r&&React.createElement("img",{className:"wc-block-error__image",src:r,alt:""}),React.createElement("div",{className:"wc-block-error__content"},o&&React.createElement("p",{className:"wc-block-error__header"},o),i&&React.createElement("p",{className:"wc-block-error__text"},i),c&&React.createElement("p",{className:"wc-block-error__message"},l?l+" ":"",c)))};r(24);function ye(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var Oe=function(e){u()(n,e);var t,r=(t=n,function(){var e,r=v()(t);if(ye()){var n=v()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return f()(this,e)});function n(){var e;o()(this,n);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return e=r.call.apply(r,[this].concat(a)),k()(s()(e),"state",{errorMessage:"",hasError:!1}),e}return i()(n,[{key:"render",value:function(){var e=this.props,t=e.header,r=e.imageUrl,n=e.showErrorMessage,o=e.text,a=e.errorMessagePrefix,i=this.state,c=i.errorMessage;return i.hasError?React.createElement(ge,{errorMessage:n?c:null,header:t,imageUrl:r,text:o,errorMessagePrefix:a}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:React.createElement(w.Fragment,null,React.createElement("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}}]),n}(w.Component);Oe.defaultProps={showErrorMessage:!0};var Re=Oe;function _e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ke(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(r),!0).forEach((function(t){k()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_e(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}!function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},o=document.querySelectorAll(e);o.length&&Array.prototype.forEach.call(o,(function(e,o){var a=r(e,o),i=n(e,o),c=ke({},e.dataset,{},a.attributes);e.classList.remove("is-loading"),Object(me.render)(React.createElement(Re,i,React.createElement(t,ie()({},a,{attributes:c}))),e)}))}("\n\t.wp-block-woocommerce-all-reviews,\n\t.wp-block-woocommerce-reviews-by-product,\n\t.wp-block-woocommerce-reviews-by-category\n",we,(function(e){return{attributes:{showReviewDate:e.classList.contains("has-date"),showReviewerName:e.classList.contains("has-name"),showReviewImage:e.classList.contains("has-image"),showReviewRating:e.classList.contains("has-rating"),showReviewContent:e.classList.contains("has-content"),showProductName:e.classList.contains("has-product-name")}}}))},,,function(e,t){!function(){e.exports=this.wp.compose}()}]);