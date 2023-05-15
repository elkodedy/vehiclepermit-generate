import{s as h}from"./basecomponent.esm.2753bf63.js";import{s as f}from"./index.esm.bcf2261c.js";import{s as y}from"./index.esm.7663f7f9.js";import{U as b,R as v,A as B,o as r,b as d,j as p,n as i,m as o,t as C,k as g,l as u,g as I,a2 as w,a3 as P,r as k,e as D,w as _,v as S,T as A}from"./entry.497c887e.js";import"./entry.b871eb40.js";var E={name:"Panel",extends:h,emits:["update:collapsed","toggle"],props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},data(){return{d_collapsed:this.collapsed}},watch:{collapsed(e){this.d_collapsed=e}},methods:{toggle(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown(e){(e.code==="Enter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}},computed:{ariaId(){return b()},containerClass(){return["p-panel p-component",{"p-panel-toggleable":this.toggleable}]},buttonAriaLabel(){return this.toggleButtonProps&&this.toggleButtonProps["aria-label"]?this.toggleButtonProps["aria-label"]:this.header}},components:{PlusIcon:y,MinusIcon:f},directives:{ripple:v}};const N=["id"],T=["id","aria-label","aria-controls","aria-expanded"],j=["id","aria-labelledby"];function K(e,l,n,s,t,a){const m=B("ripple");return r(),d("div",o({class:a.containerClass},e.ptm("root")),[p("div",o({class:"p-panel-header"},e.ptm("header")),[i(e.$slots,"header",{},()=>[n.header?(r(),d("span",o({key:0,id:a.ariaId+"_header",class:"p-panel-title"},e.ptm("title")),C(n.header),17,N)):g("",!0)]),p("div",o({class:"p-panel-icons"},e.ptm("icons")),[i(e.$slots,"icons"),n.toggleable?u((r(),d("button",o({key:0,id:a.ariaId+"_header",type:"button",role:"button",class:"p-panel-header-icon p-panel-toggler p-link","aria-label":a.buttonAriaLabel,"aria-controls":a.ariaId+"_content","aria-expanded":!t.d_collapsed,onClick:l[0]||(l[0]=(...c)=>a.toggle&&a.toggle(...c)),onKeydown:l[1]||(l[1]=(...c)=>a.onKeyDown&&a.onKeyDown(...c))},{...n.toggleButtonProps,...e.ptm("toggler")}),[i(e.$slots,"togglericon",{collapsed:t.d_collapsed},()=>[(r(),I(k(t.d_collapsed?"PlusIcon":"MinusIcon"),w(P(e.ptm("togglericon"))),null,16))])],16,T)),[[m]]):g("",!0)],16)],16),D(A,{name:"p-toggleable-content"},{default:_(()=>[u(p("div",o({id:a.ariaId+"_content",class:"p-toggleable-content",role:"region","aria-labelledby":a.ariaId+"_header"},e.ptm("toggleablecontent")),[p("div",o({class:"p-panel-content"},e.ptm("content")),[i(e.$slots,"default")],16),e.$slots.footer?(r(),d("div",o({key:0,class:"p-panel-footer"},e.ptm("footer")),[i(e.$slots,"footer")],16)):g("",!0)],16,j),[[S,!t.d_collapsed]])]),_:3})],16)}function R(e,l){l===void 0&&(l={});var n=l.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",n==="top"&&s.firstChild?s.insertBefore(t,s.firstChild):s.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var V=`
.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.p-panel-title {
    line-height: 1;
}
.p-panel-header-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
`;R(V);E.render=K;export{E as default};
