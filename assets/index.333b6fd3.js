import{d as f,c as i,F as p,r as _,n as A,o as c,t as E,a as h,b as $,e as m,w as v,T,f as x,g as L,h as I,i as P,j as w,k as O}from"./vendor.3729662d.js";const S=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};S();var y=(t,n)=>{const a=t.__vccOpts||t;for(const[r,e]of n)a[r]=e;return a};const N=f({name:"text-background",props:{text:String,repeat:{type:Number,default:5},vRepeat:{type:Number,default:10},sep:{type:String,default:"-"},angle:{type:Number,default:0},color:{type:String,default:"#1A1A1A"}},computed:{content(){let t="";for(const n of Array(this.repeat).keys())t+=this.text+" "+this.sep+" ";return t}},mounted(){this.$refs.container.style.transform=`rotate(${this.angle}deg)`}}),R=["reverse"],C={class:"text"};function D(t,n,a,r,e,o){return c(),i("div",{ref:"container",style:A("--color: "+t.color),class:"text-background"},[(c(!0),i(p,null,_(t.vRepeat,s=>(c(),i("div",{reverse:s%2==0,class:"text-line"},[(c(!0),i(p,null,_(t.repeat,l=>(c(),i("div",C,E(t.content),1))),256))],8,R))),256))],4)}var B=y(N,[["render",D],["__scopeId","data-v-41ec61c1"]]);const j=f({name:"App",components:{TextBackground:B},watch:{$route(t,n){t.hash&&this.$nextTick(()=>{this.scrollToId(t.hash.slice(1))})}},methods:{scrollToId(t){try{const n=document.getElementById(t);if(!n)return;window.scrollTo({top:n.offsetTop-72,behaviour:"smooth"})}catch{location.hash=t}}}}),V={class:"app-background"};function F(t,n,a,r,e,o){const s=h("text-background"),l=h("router-view");return c(),i(p,null,[$("div",V,[m(s,{angle:-12.5,color:"var(--light-red)",text:"Ernest Nkansah-Badu"},null,8,["angle"])]),m(l,null,{default:v(({Component:d})=>[m(T,{"enter-active-class":"enter","leave-active-class":"leave"},{default:v(()=>[(c(),x(L(d)))]),_:2},1024)]),_:1})],64)}var W=y(j,[["render",F],["__scopeId","data-v-6019aee0"]]);const q="",H="",M="modulepreload",g={},z="/",u=function(n,a){return!a||a.length===0?n():Promise.all(a.map(r=>{if(r=`${z}${r}`,r in g)return;g[r]=!0;const e=r.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":M,e||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),e)return new Promise((l,d)=>{s.addEventListener("load",l),s.addEventListener("error",d)})})).then(()=>n())},G=[{path:"/",component:()=>u(()=>import("./Home.baf7adbe.js"),["assets/Home.baf7adbe.js","assets/page-title.7a66ea27.js","assets/page-title.6562242d.css","assets/vendor.3729662d.js"]),meta:{title:()=>"Welcome",description:()=>"Developer, problem-solver."},name:"home"},{path:"/about",component:()=>u(()=>import("./About.df959ffc.js"),["assets/About.df959ffc.js","assets/About.60060f6c.css","assets/page-title.7a66ea27.js","assets/page-title.6562242d.css","assets/vendor.3729662d.js","assets/v-separator.2209360a.js","assets/v-separator.3ea2fba6.css"]),meta:{title:()=>"About Me",description:()=>"Learn more about me."},name:"about"},{path:"/portfolio",component:()=>u(()=>import("./Portfolio.73724b8a.js"),["assets/Portfolio.73724b8a.js","assets/Portfolio.9058b5d2.css","assets/page-title.7a66ea27.js","assets/page-title.6562242d.css","assets/vendor.3729662d.js","assets/v-separator.2209360a.js","assets/v-separator.3ea2fba6.css","assets/flat-button.d29b2ef4.js","assets/flat-button.f537ef1b.css"]),meta:{title:()=>"My Work",description:()=>"Here are some projects of mine I'd like you to see."},name:"portfolio"},{path:"/contact",component:()=>u(()=>import("./Contact.f6095232.js"),["assets/Contact.f6095232.js","assets/Contact.d478dfc7.css","assets/page-title.7a66ea27.js","assets/page-title.6562242d.css","assets/vendor.3729662d.js","assets/flat-button.d29b2ef4.js","assets/flat-button.f537ef1b.css"]),meta:{title:()=>"Contact Me",description:()=>"Get in touch with me to discuss anything."},name:"contact"},{path:"/:catchAll(.*)",redirect:"/"}],b=I({history:P(),routes:G});b.afterEach((t,n)=>{w(()=>{const a=t.meta;document.title=a.title(t)+" \u2014 "+q;const r=document.querySelector('head meta[name="description"]'),e=a.description(t)||H;r&&r.setAttribute("content",e);const o=window.getSelection();o&&o.removeAllRanges()})});const k=O(W);k.use(b);k.mount("#app");export{y as _};