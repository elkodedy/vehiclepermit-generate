import{_ as c,L as d,$ as p,y as m,o as l,b as u,n as r,g as f,B as o,r as y,j as h,f as g}from"./entry.b43c92c6.js";import"./entry.4b682d46.js";var v={name:"InlineMessage",props:{severity:{type:String,default:"error"},icon:{type:String,default:void 0}},timeout:null,data(){return{visible:!0}},mounted(){this.sticky||setTimeout(()=>{this.visible=!1},this.life)},computed:{containerClass(){return["p-inline-message p-component p-inline-message-"+this.severity,{"p-inline-message-icon-only":!this.$slots.default}]},iconComponent(){return{info:c,success:d,warn:p,error:m}[this.severity]}}};const C={class:"p-inline-message-text"};function x(n,s,i,t,e,a){return l(),u("div",{"aria-live":"polite",class:o(a.containerClass)},[r(n.$slots,"icon",{},()=>[(l(),f(y(i.icon?"span":a.iconComponent),{class:o(["p-inline-message-icon",i.icon])},null,8,["class"]))]),h("span",C,[r(n.$slots,"default",{},()=>[g(" ")])])],2)}function $(n,s){s===void 0&&(s={});var i=s.insertAt;if(!(!n||typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",i==="top"&&t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e),e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}}var B=`
.p-inline-message {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: top;
}
.p-inline-message-icon-only .p-inline-message-text {
    visibility: hidden;
    width: 0;
}
.p-fluid .p-inline-message {
    display: flex;
}
`;$(B);v.render=x;export{v as default};
