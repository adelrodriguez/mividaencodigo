(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{J4bc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("Zttt"),i=a("Wbzz"),s=a("9eSz"),l=a.n(s),u=a("7Qib"),c=a("d+ly"),m=a.n(c),d=a("gGy4"),f=function(){var e=Object(d.c)().author,t=Object(i.useStaticQuery)("983529882").photo;return o.a.createElement("div",{className:m.a.author},o.a.createElement(l.a,{fixed:t.fixed,className:m.a.author__image,alt:e.name}),o.a.createElement("p",{className:m.a.author__bio},e.bio,o.a.createElement("a",{className:m.a["author__bio-twitter"],href:Object(u.a)("twitter",e.contacts.twitter),rel:"noopener noreferrer",target:"_blank"},"Encuéntrame en ",o.a.createElement("strong",null,"Twitter"),".")))},p=a("RPjP"),_=a.n(p),g=function(e){var t=e.postTitle,a=e.postSlug,n=Object(d.c)(),r=n.url,i=n.disqusShortname;return i?o.a.createElement(_.a,{shortname:i,identifier:t,title:t,url:r+a}):null},h=a("wd/R"),b=a.n(h),y=a("myfg"),v=a.n(y),E=a("i6OX"),w=function(e){var t=e.date,a=e.time.minutes;return o.a.createElement("div",{className:v.a.meta},o.a.createElement("div",{className:v.a.meta__container},o.a.createElement(E.a,{className:v.a.meta__icon,icon:["far","calendar"]}),o.a.createElement("time",null,b()(t).locale("es-do").format("LL, h:mm A"))),o.a.createElement("div",{className:v.a.meta__container},o.a.createElement(E.a,{className:v.a.meta__icon,icon:["far","clock"]}),o.a.createElement("span",null,"Apróx. ",Math.round(a)," min",a>1&&"s")))},N=a("Mvws"),k=a.n(N),O=function(e){var t=e.body,a=e.title,n=e.date,r=e.time;return o.a.createElement("div",{className:k.a.content},o.a.createElement("h1",{className:k.a.content__title},a),o.a.createElement(w,{date:n,time:r}),o.a.createElement("div",{className:k.a.content__body,dangerouslySetInnerHTML:{__html:t}}))},j=a("WXWR"),S=a.n(j),P=function(e){var t=e.tags,a=e.tagSlugs;return o.a.createElement("div",{className:S.a.tags},o.a.createElement("ul",{className:S.a.tags__list},a&&a.map((function(e,a){return o.a.createElement("li",{className:S.a["tags__list-item"],key:t[a]},o.a.createElement(i.Link,{to:e,className:S.a["tags__list-item-link"]},t[a]))}))))},T=a("gt/k"),q=a.n(T),x=function(e){var t=e.post,a=t.html,n=t.fields,r=n.tagSlugs,i=n.slug,s=n.readingTime,l=t.frontmatter,u=l.tags,c=l.title,m=l.date;return o.a.createElement("div",{className:q.a.post},o.a.createElement("div",{className:q.a["post__home-button"],onClick:function(){return window.history.back()}},"⟵"),o.a.createElement("div",{className:q.a.post__content},o.a.createElement(O,{body:a,title:c,date:m,time:s})),o.a.createElement("div",{className:q.a.post__footer},u&&r&&o.a.createElement(P,{tags:u,tagSlugs:r}),o.a.createElement(f,null)),o.a.createElement("div",{className:q.a.post__comments},o.a.createElement(g,{postSlug:i,postTitle:t.frontmatter.title})))};t.default=function(e){var t=e.data,a=Object(d.c)(),n=a.description,i=a.author,s=t.markdownRemark.frontmatter,l=s.title,u=s.description,c=null!==u?u:n;return o.a.createElement(r.a,{title:l,description:c,author:i},o.a.createElement(x,{post:t.markdownRemark}))}},Mvws:function(e,t,a){e.exports={content:"Content-module--content--3p512",content__title:"Content-module--content__title--2BDW9",content__body:"Content-module--content__body--2TrQ-"}},RPjP:function(e,t,a){"use strict";e.exports=a("SLms")},SLms:function(e,t,a){"use strict";a("E9XD"),Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=s(a("q1tI")),i=s(a("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=["shortname","identifier","title","url","category_id","onNewComment","language"],m=!1;function d(e,t){var a=t.onNewComment,n=t.language,o=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["onNewComment","language"]);for(var r in o)e.page[r]=o[r];e.language=n,a&&(e.callbacks={onNewComment:[a]})}var f=function(e){function t(){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,a){return c.some((function(e){return e===a}))?t:n({},t,function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},a,e.props[a]))}),{});return r.default.createElement("div",t,r.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!m){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),m=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};c.forEach((function(a){"shortname"!==a&&e.props[a]&&(t[a]=e.props[a])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){d(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){d(this,t)},this.addDisqusScript())}}]),t}(r.default.Component);f.displayName="DisqusThread",f.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},f.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=f},WXWR:function(e,t,a){e.exports={tags:"Tags-module--tags--1L_ct",tags__list:"Tags-module--tags__list--91FqN","tags__list-item":"Tags-module--tags__list-item--1M30P","tags__list-item-link":"Tags-module--tags__list-item-link--3SL_8"}},"d+ly":function(e,t,a){e.exports={author:"Author-module--author--2Yefr",author__image:"Author-module--author__image--1PUrH",author__bio:"Author-module--author__bio--1Rnp-","author__bio-twitter":"Author-module--author__bio-twitter--n-O9n"}},"gt/k":function(e,t,a){e.exports={post__footer:"Post-module--post__footer--3WzWU",post__comments:"Post-module--post__comments--25y6I","post__home-button":"Post-module--post__home-button--16Kl0"}},myfg:function(e,t,a){e.exports={meta:"Meta-module--meta--1XDVh",meta__container:"Meta-module--meta__container--1O11T",meta__icon:"Meta-module--meta__icon--2NEJU"}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-63266c045fff6f0806d4.js.map