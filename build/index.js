!function(e){var t={};function n(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,n){var l=n(5),a=n(4),c=n(3);e.exports=function(e,t){return l(e)||a(e,t)||c()}},function(e,t,n){"use strict";n.r(t);var l=n(0),a=wp.blocks.registerBlockType,c=(wp.element.Fragment,wp.components),r=(c.PanelBody,c.SelectControl,c.BaseControl,c.IconButton,wp.editor.InnerBlocks),s=wp.i18n,o=s.__;s._x;a("nhsblocks/section",{title:o("Section","nhsblocks"),description:o("Add a section that separates content, and put any other block into it.","nhsblocks"),category:"nhsblocks",icon:"welcome-widgets-menus",supports:{align:["wide","full"],anchor:!0},attributes:{},edit:function(e){var t=e.attributes;e.setAttributes,t.colorScheme,t.contentMaxWidth,t.attachmentId,t.attachmentUrl;return Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-panel-group nhsuk-grid-column-full"},Object(l.createElement)(r,null)))},save:function(e){var t=e.attributes;t.colorScheme,t.contentMaxWidth,t.attachmentId;return Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-panel-group nhsuk-grid-column-full"},Object(l.createElement)(r.Content,null)))}});var i=wp.i18n.__,u=wp.blocks.registerBlockType,m=wp.editor,h=m.RichText,b=m.InnerBlocks;u("nhsblocks/dodont",{title:i("Do and Don't List","nhsblocks"),category:"nhsblocks",icon:"yes-alt",attributes:{panelTitle:{type:"string",source:"html",selector:"h3"}},edit:function(e){var t=e.attributes.panelTitle,n=(e.className,e.setAttributes);return Object(l.createElement)("div",{className:"nhsuk-do-dont-list"},Object(l.createElement)("h3",{className:"nhsuk-do-dont-list__label"},Object(l.createElement)(h,{placeholder:i("Panel Title","nhsblocks"),value:t,onChange:function(e){n({panelTitle:e})}})),Object(l.createElement)("ul",{className:"nhsuk-list nhsuk-list--cross"},Object(l.createElement)(b,{allowedBlocks:[]})))},save:function(e){var t=e.attributes,n=t.panelTitle;t.panelText;return Object(l.createElement)("div",{className:"nhsuk-do-dont-list"},Object(l.createElement)("h3",{className:"nhsuk-do-dont-list__label"},Object(l.createElement)(h.Content,{value:n})),Object(l.createElement)("ul",{className:"nhsuk-list nhsuk-list--cross"},Object(l.createElement)(b.Content,null)))}}),u("nhsblocks/doitem",{title:i("List Item with Tick","nhsblocks"),category:"nhsblocks",icon:"yes",parent:["nhsblocks/dodont"],attributes:{panelText:{type:"string",source:"html",selector:"span"}},edit:function(e){var t=e.attributes.panelText,n=e.setAttributes;return Object(l.createElement)("li",null,Object(l.createElement)("svg",{class:"nhsuk-icon nhsuk-icon__tick",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},Object(l.createElement)("path",{"stroke-width":"4","stroke-linecap":"round",d:"M18.4 7.8l-8.5 8.4L5.6 12"})),Object(l.createElement)("span",null,Object(l.createElement)(h,{placeholder:i("Text","nhsblocks"),value:t,onChange:function(e){n({panelText:e})}})))},save:function(e){var t=e.attributes.panelText;return Object(l.createElement)("li",null,Object(l.createElement)("svg",{class:"nhsuk-icon nhsuk-icon__tick",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},Object(l.createElement)("path",{"stroke-width":"4","stroke-linecap":"round",d:"M18.4 7.8l-8.5 8.4L5.6 12"})),Object(l.createElement)("span",null,Object(l.createElement)(h.Content,{value:t})))}}),u("nhsblocks/dontitem",{title:i("List Item with Cross","nhsblocks"),category:"nhsblocks",icon:"no-alt",parent:["nhsblocks/dodont"],attributes:{panelText:{type:"string",source:"html",selector:"span"}},edit:function(e){var t=e.attributes.panelText,n=e.setAttributes;return Object(l.createElement)("li",null,Object(l.createElement)("svg",{class:"nhsuk-icon nhsuk-icon__cross",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},Object(l.createElement)("path",{d:"M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"}),Object(l.createElement)("path",{d:"M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"})),Object(l.createElement)("span",null,Object(l.createElement)(h,{placeholder:i("Text","nhsblocks"),value:t,onChange:function(e){n({panelText:e})}})))},save:function(e){var t=e.attributes.panelText;return Object(l.createElement)("li",null,Object(l.createElement)("svg",{class:"nhsuk-icon nhsuk-icon__cross",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},Object(l.createElement)("path",{d:"M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"}),Object(l.createElement)("path",{d:"M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"})),Object(l.createElement)("span",null,Object(l.createElement)(h.Content,{value:t})))}});var d=wp.i18n.__,p=wp.blocks.registerBlockType,k=wp.editor,g=k.RichText,v=k.URLInputButton;p("nhsblocks/nhsbutton",{title:d("Button","nhsblocks"),category:"nhsblocks",icon:"admin-links",styles:[{name:"green",label:d("Standard (Green)"),isDefault:!0},{name:"secondary",label:d("Secondary (Grey)")},{name:"reverse",label:d("Reverse (White)")}],supports:{align:!0},attributes:{buttonLabel:{type:"string",source:"html",selector:".nhsuk-button"},buttonLink:{type:"string",source:"attribute",selector:"a.nhsuk-button",attribute:"href"}},edit:function(e){var t=e.attributes,n=t.buttonLabel,a=t.buttonLink,c=e.className,r=e.setAttributes;return Object(l.createElement)("a",{href:"#0",className:"".concat(c," nhsuk-button")},Object(l.createElement)(g,{placeholder:d("Button Label","nhsblocks"),value:n,onChange:function(e){r({buttonLabel:e})}}),Object(l.createElement)(v,{className:"nhsblocks-dropdown__input",label:d("Button URL","nhsblocks"),onChange:function(e){r({buttonLink:e})},url:a}))},save:function(e){var t=e.attributes,n=t.buttonLabel,a=t.buttonLink;return Object(l.createElement)("a",{href:a,className:"nhsuk-button"},Object(l.createElement)(g.Content,{value:n}))}});var O=wp.i18n.__,E=wp.blocks.registerBlockType,j=wp.editor.RichText;E("nhsblocks/reveal1",{title:O("Simple Reveal","nhsblocks"),category:"nhsblocks",icon:"plus-alt",styles:[{name:"downarrow",label:O("Down Arrow"),isDefault:!0},{name:"expander",label:O("Plus Icon")}],attributes:{revealTitle:{type:"string",source:"html",selector:".nhsuk-details__summary-text"},revealText:{type:"string",source:"html",selector:".nhsuk-details__text"},expanderBox:{type:"string"}},edit:function(e){var t=e.attributes,n=t.revealTitle,a=t.revealText,c=e.className,r=e.setAttributes;return Object(l.createElement)("details",{className:"".concat(c," nhsuk-details newstyle"),open:!0},Object(l.createElement)("summary",{className:"nhsuk-details__summary",role:"button","aria-controls":"details-content-","aria-expanded":"true"},Object(l.createElement)("span",{className:"nhsuk-details__summary-text"},Object(l.createElement)(j,{placeholder:O("Reveal Title","nhsblocks"),value:n,onChange:function(e){r({revealTitle:e})}}))),Object(l.createElement)("div",{className:"nhsuk-details__text",id:"details-content-","aria-hidden":"false"},Object(l.createElement)(j,{multiline:"p",placeholder:O("Reveal Contents","nhsblocks"),onChange:function(e){r({revealText:e})},value:a})))},save:function(e){var t=e.attributes,n=t.revealTitle,a=t.revealText;return Object(l.createElement)("details",{className:"nhsuk-details"},Object(l.createElement)("summary",{className:"nhsuk-details__summary",role:"button","aria-controls":"details-content-","aria-expanded":"false"},Object(l.createElement)("span",{className:"nhsuk-details__summary-text"},Object(l.createElement)(j.Content,{value:n}))),Object(l.createElement)("div",{className:"nhsuk-details__text",id:"details-content-","aria-hidden":"false"},Object(l.createElement)(j.Content,{multiline:"p",value:a})))}});var w=wp.i18n.__,f=wp.blocks.registerBlockType,_=wp.editor,y=_.RichText,x=_.InnerBlocks,N=[["core/paragraph",{placeholder:"Panel Text"}],["nhsblocks/nhsbutton",{align:"right"}]];f("nhsblocks/panel1",{title:w("Panel Region","nhsblocks"),description:w("By default this block includes a title, block of text and button link. You can remove the button if you wish by clicking it then clicking three dots on the navigation bar at the top of the page then the bin","nhsblocks"),icon:"feedback",category:"nhsblocks",styles:[{name:"default",label:w("Plain white panel"),isDefault:!0},{name:"panel-grey",label:w("Grey")},{name:"panel-with-label",label:w("With Label")}],attributes:{panelTitle:{type:"string",source:"html",selector:"h3"}},edit:function(e){var t=e.attributes.panelTitle,n=e.className,a=e.setAttributes;return Object(l.createElement)("div",{className:"".concat(n," nhsuk-panel")},Object(l.createElement)("h3",null,Object(l.createElement)(y,{placeholder:w("Panel Title","nhsblocks"),value:t,onChange:function(e){a({panelTitle:e})}})),Object(l.createElement)("div",{className:"paneltext"},Object(l.createElement)(x,{template:N})))},save:function(e){var t=e.attributes.panelTitle;return Object(l.createElement)("div",{className:"nhsuk-panel"},Object(l.createElement)("h3",null,Object(l.createElement)(y.Content,{value:t})),Object(l.createElement)("div",{className:"paneltext"},Object(l.createElement)(x.Content,null)))}});var T=wp.i18n.__,C=wp.blocks.registerBlockType,B=wp.editor.RichText,q=wp.data.withSelect;C("nhsblocks/latestnews",{title:T("Latest Posts / News","nhsblocks"),category:"nhsblocks",edit:q(function(e){return{posts:e("core").getEntityRecords("postType","post",{per_page:6})}})(function(e){var t=e.posts;e.className;if(!t)return"Loading...";if(t&&0===t.length)return"No posts";var n=t[0];console.info(n);return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-'.$width.' nhsuk-panel-group__item"},Object(l.createElement)("div",{className:"nhsuk-panel"},Object(l.createElement)("h3",null,Object(l.createElement)(B.Content,{value:n.title.rendered})),Object(l.createElement)("img",{src:function(e){return e||""}(n.featured_image_nhsblocksFeatImg_url),alt:"{post.title.rendered}"}),Object(l.createElement)(B.Content,{value:n.excerpt.rendered}),Object(l.createElement)("a",{href:n.link},"Read More Link")))}),save:function(e){return null}});var S=wp.i18n.__,I=wp.blocks.registerBlockType,L=wp.editor,R=L.URLInputButton,P=L.RichText,A=L.InnerBlocks;L.MediaUpload,L.InspectorControls;I("nhsblocks/promo1",{title:S("Promo Region","nhsblocks"),category:"nhsblocks",icon:"megaphone",styles:[{name:"default",label:S("Standard"),isDefault:!0},{name:"promo-small",label:S("Smaller Text")}],attributes:{promoTitle:{type:"string",source:"html",selector:".nhsuk-promo__heading"},promoText:{type:"string",source:"html",selector:".nhsuk-promo__description"},promoLink:{type:"string",source:"attribute",selector:".nhsuk-promo a",attribute:"href"}},edit:function(e){var t=e.attributes,n=t.promoTitle,a=t.promoText,c=t.promoLink,r=e.className,s=e.setAttributes;return Object(l.createElement)("div",{className:"".concat(r," nhsuk-promo")},Object(l.createElement)("div",{class:"nhsuk-promo__content"},Object(l.createElement)(R,{className:"nhsblocks-dropdown__input",label:S("Panel Link","nhsblocks"),onChange:function(e){s({promoLink:e})},url:c}),Object(l.createElement)(A,{allowedBlocks:["core/image"]}),Object(l.createElement)("h3",{class:"nhsuk-promo__heading"},Object(l.createElement)(P,{placeholder:S("Promo Title","nhsblocks"),value:n,onChange:function(e){s({promoTitle:e})}})),Object(l.createElement)("div",{className:"nhsuk-promo__description"},Object(l.createElement)(P,{multiline:"p",placeholder:S("Promo Contents","nhsblocks"),onChange:function(e){s({promoText:e})},value:a}))))},save:function(e){var t=e.attributes,n=t.promoTitle,a=t.promoText,c=t.promoLink;return Object(l.createElement)("div",{className:"nhsuk-promo"},Object(l.createElement)("a",{href:c,className:"nhsuk-promo__link-wrapper"},Object(l.createElement)("div",{class:"nhsuk-promo__content"},Object(l.createElement)(A.Content,null),Object(l.createElement)("h3",{class:"nhsuk-promo__heading"},Object(l.createElement)(P.Content,{value:n})),Object(l.createElement)("div",{className:"nhsuk-promo__description"},Object(l.createElement)(P.Content,{multiline:"p",value:a})))))}});var Q=wp.i18n.__,M=wp.blocks.registerBlockType,D=wp.editor.RichText;M("nhsblocks/quote1",{title:Q("Simple Quote","nhsblocks"),category:"nhsblocks",icon:"format-quote",styles:[{name:"standard",label:Q("Standard"),isDefault:!0},{name:"quote-reverse",label:Q("Inverse")}],attributes:{quoteName:{type:"string",source:"html",selector:".nhsuk-inset-text__quote-attribution"},quoteText:{type:"array",source:"children",multiline:"p",selector:".nhsuk-inset-text__quote"}},edit:function(e){var t=e.attributes,n=t.quoteName,a=t.quoteText,c=e.className,r=e.setAttributes;return Object(l.createElement)("div",{className:"".concat(c," nhsuk-inset-text")},Object(l.createElement)("span",{className:"nhsuk-u-visually-hidden"},"Quote / Testimonial: "),Object(l.createElement)("div",{className:"nhsuk-inset-text__quote"},Object(l.createElement)(D,{multiline:"p",placeholder:Q("Quote","nhsblocks"),onChange:function(e){r({quoteText:e})},value:a})),Object(l.createElement)("span",{className:"nhsuk-inset-text__quote-attribution"},Object(l.createElement)(D,{placeholder:Q("Quote Name","nhsblocks"),value:n,onChange:function(e){r({quoteName:e})}})))},save:function(e){var t=e.attributes,n=t.quoteName,a=t.quoteText;return Object(l.createElement)("div",{className:"nhsuk-inset-text"},Object(l.createElement)("span",{className:"nhsuk-u-visually-hidden"},"Quote / Testimonial: "),Object(l.createElement)("div",{className:"nhsuk-inset-text__quote"},Object(l.createElement)(D.Content,{multiline:"p",value:a})),Object(l.createElement)("span",{className:"nhsuk-inset-text__quote-attribution"},Object(l.createElement)(D.Content,{value:n})))}});var W=wp.i18n.__,z=wp.blocks.registerBlockType,U=wp.editor.RichText;z("nhsblocks/card1",{title:W("Card Region","nhsblocks"),category:"nhsblocks",attributes:{cardTitle:{type:"string",source:"html",selector:".nhsuk-care-card__heading-text"},cardText:{type:"array",source:"children",multiline:"p",selector:".nhsuk-care-card__content"}},edit:function(e){var t=e.attributes,n=t.cardTitle,a=t.cardText,c=e.className,r=e.setAttributes;return Object(l.createElement)("div",{className:"".concat(c," nhsuk-care-card")},Object(l.createElement)("div",{className:"nhsuk-care-card__heading-container"},Object(l.createElement)("h3",{className:"nhsuk-care-card__heading"},Object(l.createElement)("span",{role:"text"},Object(l.createElement)("span",{className:"nhsuk-u-visually-hidden"},"Non-urgent advice: "),Object(l.createElement)("span",{className:"nhsuk-care-card__heading-text"},Object(l.createElement)(U,{placeholder:W("Card Title","nhsblocks"),value:n,onChange:function(e){r({cardTitle:e})}})))),Object(l.createElement)("span",{className:"nhsuk-care-card__arrow","aria-hidden":"true"})),Object(l.createElement)("div",{className:"nhsuk-care-card__content"},Object(l.createElement)(U,{multiline:"p",placeholder:W("Card Contents","nhsblocks"),onChange:function(e){r({cardText:e})},value:a})))},save:function(e){var t=e.attributes,n=t.cardTitle,a=t.cardText;return Object(l.createElement)("div",{className:"nhsuk-grid-column-width nhsuk-care-card nhsuk-care-card--type"},Object(l.createElement)("div",{className:"nhsuk-care-card__heading-container"},Object(l.createElement)("h3",{className:"nhsuk-care-card__heading"},Object(l.createElement)("span",{role:"text"},Object(l.createElement)("span",{className:"nhsuk-u-visually-hidden"},"Non-urgent advice: "),Object(l.createElement)("span",{className:"nhsuk-care-card__heading-text"},Object(l.createElement)(U.Content,{value:n})))),Object(l.createElement)("span",{className:"nhsuk-care-card__arrow","aria-hidden":"true"})),Object(l.createElement)("div",{className:"nhsuk-care-card__content"},Object(l.createElement)(U.Content,{multiline:"p",value:a})))}}),wp.blocks.registerBlockStyle("nhsblocks/card1",{name:"default",label:"Standard Blue",isDefault:!0}),wp.blocks.registerBlockStyle("nhsblocks/card1",{name:"urgent",label:"Urgent (Red)"}),wp.blocks.registerBlockStyle("nhsblocks/card1",{name:"immediate",label:"Immediate (Red and Black)"});var H=n(1),G=n.n(H),F=wp.element.useState,Y=wp.i18n.__,$=wp.blocks.registerBlockType,J=wp.editor.InnerBlocks,K=wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"31.000",y:"0.000",width:"29.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"29.000",height:"30"})),V=wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"41.000",y:"0.000",width:"19.000",height:"30"}),wp.element.createElement("rect",{x:"21.000",y:"0.000",width:"19.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"19.000",height:"30"})),X=wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"21.000",y:"0.000",width:"39.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"19.000",height:"30"})),Z=wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"41.000",y:"0.000",width:"19.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"39.000",height:"30"})),ee=wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"46.000",y:"0.000",width:"14.000",height:"30"}),wp.element.createElement("rect",{x:"31.000",y:"0.000",width:"14.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"29.000",height:"30"})),te=[{title:"Two Columns",icon:K,template:[["nhsblocks/onehalf"],["nhsblocks/onehalf"]]},{title:"Three Columns",icon:V,template:[["nhsblocks/onethird"],["nhsblocks/onethird"],["nhsblocks/onethird"]]},{title:"One Third / Two Thirds Columns",icon:X,template:[["nhsblocks/onethird"],["nhsblocks/twothirds"]]},{title:"Two Thirds / One Third Columns",icon:Z,template:[["nhsblocks/twothirds"],["nhsblocks/onethird"]]},{title:"One Quarter / One Half / One Quarter Columns",icon:wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"46.000",y:"0.000",width:"14.000",height:"30"}),wp.element.createElement("rect",{x:"16.000",y:"0.000",width:"29.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"14.000",height:"30"})),template:[["nhsblocks/onequarter"],["nhsblocks/onehalf"],["nhsblocks/onequarter"]]},{title:"One Quarter / One Quarter / One Half Columns",icon:wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"31.000",y:"0.000",width:"29.000",height:"30"}),wp.element.createElement("rect",{x:"16.000",y:"0.000",width:"14.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"14.000",height:"30"})),template:[["nhsblocks/onequarter"],["nhsblocks/onequarter"],["nhsblocks/onehalf"]]},{title:"One Half / One Quarter / One Quarter Columns",icon:ee,template:[["nhsblocks/onehalf"],["nhsblocks/onequarter"],["nhsblocks/onequarter"]]}],ne=[{title:"Panel",icon:"feedback",template:[["nhsblocks/panel1"]]},{title:"Promo",icon:"megaphone",template:[["nhsblocks/promo1"]]},{title:"Quote / Testimonial",icon:"format-quote",template:[["nhsblocks/quote1"]]}];$("nhsblock/rowgroup",{title:Y("Grouped Items","nhsblocks"),category:"nhsblocks",icon:"layout",edit:function(e){var t=F(null),n=G()(t,2),a=n[0],c=n[1];return Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-panel-group nhsuk-grid-column-full"},Object(l.createElement)(J,{template:a,__experimentalTemplateOptions:te,__experimentalOnSelectTemplateOption:c})))},save:function(e){return Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-panel-group nhsuk-grid-column-full"},Object(l.createElement)(J.Content,null)))}}),$("nhsblocks/onehalf",{title:Y("One Half Width","nhsblocks"),category:"nhsblocks",parent:["nhsblock/rowgroup"],edit:function(e){var t=F([]),n=G()(t,2),a=n[0],c=n[1];return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-half"},Object(l.createElement)(J,{template:a,__experimentalTemplateOptions:ne,__experimentalOnSelectTemplateOption:c}))},save:function(e){return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-half"},Object(l.createElement)(J.Content,null))}}),$("nhsblocks/onethird",{title:Y("One Third Width","nhsblocks"),category:"nhsblocks",parent:["nhsblock/rowgroup"],edit:function(e){var t=F(null),n=G()(t,2),a=n[0],c=n[1];return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-third"},Object(l.createElement)(J,{template:a,__experimentalTemplateOptions:ne,__experimentalOnSelectTemplateOption:c}))},save:function(e){return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-third"},Object(l.createElement)(J.Content,null))}}),$("nhsblocks/onequarter",{title:Y("One Quarter Width","nhsblocks"),category:"nhsblocks",parent:["nhsblock/rowgroup"],edit:function(e){var t=F(null),n=G()(t,2),a=n[0],c=n[1];return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-quarter"},Object(l.createElement)(J,{template:a,__experimentalTemplateOptions:ne,__experimentalOnSelectTemplateOption:c}))},save:function(e){return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-quarter"},Object(l.createElement)(J.Content,null))}}),$("nhsblocks/twothirds",{title:Y("Two Thirds Width","nhsblocks"),category:"nhsblocks",parent:["nhsblock/rowgroup"],edit:function(e){var t=F(null),n=G()(t,2),a=n[0],c=n[1];return Object(l.createElement)("div",{className:"nhsuk-grid-column-two-thirds"},Object(l.createElement)(J,{template:a,__experimentalTemplateOptions:ne,__experimentalOnSelectTemplateOption:c}))},save:function(e){return Object(l.createElement)("div",{className:"nhsuk-grid-column-two-thirds"},Object(l.createElement)(J.Content,null))}}),$("nhsblocks/threequarters",{title:Y("Three Quarter Width","nhsblocks"),category:"nhsblocks",parent:["nhsblock/rowgroup"],edit:function(e){var t=F(null),n=G()(t,2),a=n[0],c=n[1];return Object(l.createElement)("div",{className:"nhsuk-grid-column-three-quarters"},Object(l.createElement)(J,{template:a,__experimentalTemplateOptions:ne,__experimentalOnSelectTemplateOption:c}))},save:function(e){return Object(l.createElement)("div",{className:"nhsuk-grid-column-three-quarters"},Object(l.createElement)(J.Content,null))}});var le=wp.i18n.__,ae=wp.blocks.registerBlockType,ce=wp.blockEditor,re=ce.RichText,se=ce.InspectorControls,oe=ce.ColorPalette,ie=ce.MediaUpload,ue=ce.InnerBlocks;ae("nhsblocks/heroblock",{title:le("Hero Block","nhsblocks"),description:le("Full width zone, designed to go at the top of your page with an optional image background, texta area and call to action","nhsblocks"),category:"nhsblocks",icon:"schedule",attributes:{overlayColor:{type:"string",default:"#005eb8"},backgroundImage:{type:"string",default:"/wp-content/themes/nightingale-2-0/assets/pixel_trans.png"}},edit:function(e){var t=e.setAttributes,n=e.attributes,a=e.className,c=n.overlayColor,r=n.backgroundImage;return[Object(l.createElement)(se,null,Object(l.createElement)("div",null,Object(l.createElement)("strong",null,"Select a background color:")," ",Object(l.createElement)("br",null),Object(l.createElement)("i",null,"(this will be ignored if you choose an image below)"),Object(l.createElement)(oe,{value:c,onChange:function(e){t({overlayColor:e})}})),Object(l.createElement)("div",null,Object(l.createElement)("strong",null,"Select a background image:"),Object(l.createElement)(ie,{onSelect:function(e){t({backgroundImage:e.sizes.full.url})},type:"image",value:r,render:function(e){var t=e.open;return Object(l.createElement)("button",{onClick:t},"Upload Image!")}}))),Object(l.createElement)("section",{className:"".concat(a,"  nhsuk-hero nhsuk-hero--image nhsuk-hero--image-description"),style:{backgroundColor:c,backgroundImage:"url(".concat(r,")"),backgroundSize:"cover",backgroundPosition:"center"}},Object(l.createElement)("div",{className:"nhsuk-hero__overlay"},Object(l.createElement)("div",{className:"nhsuk-width-container"},Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-grid-column-two-thirds"},Object(l.createElement)(ue,{template:[]}))))))]},save:function(e){var t=e.attributes,n=(e.className,t.overlayColor),a=t.backgroundImage;return Object(l.createElement)("section",{className:"nhsuk-hero nhsuk-hero--image nhsuk-hero--image-description",style:{backgroundImage:"url(".concat(a,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundColor:n}},Object(l.createElement)("div",{className:"nhsuk-hero__overlay"},Object(l.createElement)("div",{className:"nhsuk-width-container"},Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-grid-column-two-thirds"},Object(l.createElement)(ue.Content,null))))))}}),ae("nhsblocks/heroinner",{title:le("Hero Block Inner Text","nhsblocks"),description:le("Add some text to the header","nhsblocks"),category:"nhsblocks",parent:"nhsblocks/heroblock",icon:"nametag",attributes:{texttitle:{type:"array",source:"children",selector:"h1"},texttext:{type:"array",source:"children",selector:"p"},fontColor:{type:"string",default:"#ffffff"}},edit:function(e){var t=e.setAttributes,n=e.attributes,a=(e.className,n.fontColor);return[Object(l.createElement)(se,null,Object(l.createElement)("div",null,Object(l.createElement)("strong",null,"Select a font color:"),Object(l.createElement)(oe,{value:a,onChange:function(e){t({fontColor:e})}}))),Object(l.createElement)("div",{className:"nhsuk-hero-content"},Object(l.createElement)(re,{tagName:"h1",className:"nhsuk-u-margin-bottom-3",value:n.texttitle,onChange:function(e){t({texttitle:e})},placeholder:"Enter your text here!",style:{color:a}}),Object(l.createElement)(re,{tagName:"p",className:"nhsuk-body-l nhsuk-u-margin-bottom-0",value:n.texttext,onChange:function(e){t({texttext:e})},placeholder:"Enter your text here!",style:{color:a}}),Object(l.createElement)("span",{className:"nhsuk-hero__arrow","aria-hidden":"true"}))]},save:function(e){var t=e.attributes,n=(e.className,t.fontColor);return Object(l.createElement)("div",{className:"nhsuk-hero-content"},Object(l.createElement)(re.Content,{tagName:"h1",className:"nhsuk-u-margin-bottom-3",style:{color:n},value:t.texttitle}),Object(l.createElement)(re.Content,{tagName:"p",className:"nhsuk-body-l nhsuk-u-margin-bottom-0",style:{color:n},value:t.textString}),Object(l.createElement)("span",{className:"nhsuk-hero__arrow","aria-hidden":"true"}))}})},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t){e.exports=function(e,t){var n=[],l=!0,a=!1,c=void 0;try{for(var r,s=e[Symbol.iterator]();!(l=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);l=!0);}catch(e){a=!0,c=e}finally{try{l||null==s.return||s.return()}finally{if(a)throw c}}return n}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}}]);