/*! For license information please see component---src-templates-category-template-js-95ca99c19f7c504bb555.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/d1K":function(e,t,a){"use strict";a.d(t,"a",(function(){return P}));var n=a("q1tI"),i=a.n(n),o=a("Wbzz"),r=a("9eSz"),m=a.n(r),s=a("8t71"),l=a.n(s),c=function(e){var t=e.info,a=e.isIndex,n=Object(o.useStaticQuery)("776984010").logo;return i.a.createElement("div",{className:l.a.about},i.a.createElement(o.Link,{to:"/"},i.a.createElement(m.a,{fixed:n.fixed,className:l.a.about__logo,alt:t.title})),a?i.a.createElement("h1",{className:l.a.about__title},i.a.createElement(o.Link,{className:l.a["about__title-link"],to:"/"},t.title)):i.a.createElement("h2",{className:l.a.about__title},i.a.createElement(o.Link,{className:l.a["about__title-link"],to:"/"},t.title)),i.a.createElement("p",{className:l.a.about__description},t.description))},_=a("7Qib"),u=a("i6OX"),d=a("aU/I"),g=a.n(d),p=function(e){var t=e.contacts;return i.a.createElement("div",{className:g.a.contacts},i.a.createElement("ul",{className:g.a.contacts__list},Object.keys(t).map((function(e){return i.a.createElement("li",{className:g.a["contacts__list-item"],key:e},i.a.createElement("a",{className:g.a["contacts__list-item-link"],href:Object(_.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},i.a.createElement(u.a,{icon:Object(_.b)(e)})))}))))},b=a("Nrk+"),f=a.n(b),v=function(e){var t=e.copyright;return i.a.createElement("div",{className:f.a.copyright},t)},h=a("je8k"),E=a.n(h),k=function(e){var t=e.menu;return i.a.createElement("nav",{className:E.a.menu},i.a.createElement("ul",{className:E.a.menu__list},t.map((function(e){return i.a.createElement("li",{className:E.a["menu__list-item"],key:e.path},i.a.createElement(o.Link,{to:e.path,className:E.a["menu__list-item-link"],activeClassName:E.a["menu__list-item-link--active"]},e.label))}))))},y=a("SySy"),N=a.n(y),M=a("gGy4"),P=function(e){var t=e.isIndex,a=Object(M.c)(),n=a.author,o=a.copyright,r=a.menu,m=a.title,s=a.subtitle;return i.a.createElement("div",{className:N.a.sidebar},i.a.createElement("div",{className:N.a.sidebar__inner},i.a.createElement(c,{info:{title:m,description:s},isIndex:t}),i.a.createElement(k,{menu:r}),i.a.createElement(p,{contacts:n.contacts}),i.a.createElement(v,{copyright:o})))}},"1xLx":function(e,t,a){e.exports={feed:"Feed-module--feed--37QKH"}},"3TXJ":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),i=a.n(n),o=a("Wbzz"),r=a("wd/R"),m=a.n(r),s=(a("iYuL"),a("Gq9T")),l=a.n(s),c=function(e){var t=e.edge,a=e.className,n=void 0===a?"":a;return i.a.createElement("div",{className:l.a.item+" "+n},i.a.createElement("div",{className:l.a.item__meta},i.a.createElement("time",{className:l.a["item__meta-time"],dateTime:m()(t.node.frontmatter.date).format("MMMM D, YYYY")},m()(t.node.frontmatter.date).format("MMMM D, YYYY")),i.a.createElement("span",{className:l.a["item__meta-divider"]}),i.a.createElement("span",{className:l.a["item__meta-category"]},i.a.createElement(o.Link,{to:t.node.fields.categorySlug,className:l.a["item__meta-category-link"]},t.node.frontmatter.category))),i.a.createElement("h3",{className:l.a.item__title},i.a.createElement(o.Link,{className:l.a["item__title-link"],to:t.node.fields.slug},t.node.frontmatter.title)),i.a.createElement("p",{className:l.a.item__description},t.node.frontmatter.description),i.a.createElement(o.Link,{className:l.a.item__readmore,to:t.node.fields.slug},"Leer más"))}},"6V6j":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),i=a.n(n),o=a("3TXJ"),r=a("1xLx"),m=a.n(r),s=function(e){var t=e.edges;return i.a.createElement("div",{className:m.a.feed},t.map((function(e){return i.a.createElement(o.a,{edge:e,key:e.node.fields.slug})})))}},"8t71":function(e,t,a){e.exports={about__logo:"About-module--about__logo--1QQ_H",about__title:"About-module--about__title--2R23O","about__title-link":"About-module--about__title-link--1EO1d",about__description:"About-module--about__description--2dEA5"}},Gq9T:function(e,t,a){e.exports={item:"Item-module--item--3z1q7",item__title:"Item-module--item__title--1c7Hz","item__title-link":"Item-module--item__title-link--3tdqC",item__description:"Item-module--item__description--3KVBZ","item__meta-time":"Item-module--item__meta-time--3UvyA","item__meta-divider":"Item-module--item__meta-divider--22sIr","item__meta-category-link":"Item-module--item__meta-category-link--25wU0",item__readmore:"Item-module--item__readmore--1TilQ"}},MF2s:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),o=a("Zttt"),r=a("/d1K"),m=a("6V6j"),s=a("RXmK"),l=a("v0M6"),c=a("gGy4");t.default=function(e){var t=e.data,a=e.pageContext,n=Object(c.c)(),_=n.description,u=n.author,d=a.category,g=a.currentPage,p=a.prevPagePath,b=a.nextPagePath,f=a.hasPrevPage,v=a.hasNextPage,h=t.allMarkdownRemark.edges,E=g>0?d+" - Página "+g:""+d;return i.a.createElement(o.a,{title:E,description:_,author:u},i.a.createElement(r.a,null),i.a.createElement(s.a,{title:"Categoría: "+d},i.a.createElement(m.a,{edges:h}),i.a.createElement(l.a,{prevPagePath:p,nextPagePath:b,hasPrevPage:f,hasNextPage:v})))}},"Nrk+":function(e,t,a){e.exports={copyright:"Copyright-module--copyright--1ariN"}},RBgx:function(e,t,a){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("q1tI"),i=a.n(n),o=a("RBgx"),r=a.n(o),m=function(e){var t=e.title,a=e.children,o=Object(n.useRef)();return Object(n.useEffect)((function(){o.current.scrollIntoView()})),i.a.createElement("div",{ref:o,className:r.a.page},i.a.createElement("div",{className:r.a.page__inner},t&&i.a.createElement("h1",{className:r.a.page__title},t),i.a.createElement("div",{className:r.a.page__body},a)))}},SySy:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},U4DU:function(e,t,a){e.exports={pagination:"Pagination-module--pagination--2H3nO",pagination__prev:"Pagination-module--pagination__prev--bet5s","pagination__prev-link":"Pagination-module--pagination__prev-link--1Nzs6",pagination__next:"Pagination-module--pagination__next--3hFiN","pagination__next-link":"Pagination-module--pagination__next-link--3FUtA"}},"aU/I":function(e,t,a){e.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},iYuL:function(e,t,a){!function(e){"use strict";var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),a="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),n=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],i=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;e.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,n){return e?/-MMM-/.test(n)?a[e.month()]:t[e.month()]:t},monthsRegex:i,monthsShortRegex:i,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:n,longMonthsParse:n,shortMonthsParse:n,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4},invalidDate:"Fecha inválida"})}(a("wd/R"))},je8k:function(e,t,a){e.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}},v0M6:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),i=a.n(n),o=a("Wbzz"),r={PREV_PAGE:"←",NEXT_PAGE:"→"},m=a("U4DU"),s=a.n(m),l=function(e){var t=e.prevPagePath,a=e.nextPagePath,n=e.hasNextPage,m=e.hasPrevPage;return i.a.createElement("div",{className:s.a.pagination},m&&i.a.createElement("div",{className:s.a.pagination__prev},i.a.createElement(o.Link,{rel:"prev",to:t,className:s.a["pagination__prev-link"]},r.PREV_PAGE)),n&&i.a.createElement("div",{className:s.a.pagination__next},i.a.createElement(o.Link,{rel:"next",to:a,className:s.a["pagination__next-link"]},r.NEXT_PAGE)))}}}]);
//# sourceMappingURL=component---src-templates-category-template-js-95ca99c19f7c504bb555.js.map