import{s as h}from"./basecomponent.esm.2753bf63.js";import{s as b}from"./index.esm.bcf2261c.js";import{s as y}from"./index.esm.7663f7f9.js";import{U as v,R as B,A as I,o as p,b as g,j as d,n as i,m as o,t as c,k as u,l as m,g as _,r as w,e as C,w as D,v as P,T as k}from"./entry.497c887e.js";import"./entry.b871eb40.js";var S={name:"Fieldset",extends:h,emits:["update:collapsed","toggle"],props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},data(){return{d_collapsed:this.collapsed}},watch:{collapsed(e){this.d_collapsed=e}},methods:{toggle(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown(e){(e.code==="Enter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}},computed:{ariaId(){return v()},buttonAriaLabel(){return this.toggleButtonProps&&this.toggleButtonProps["aria-label"]?this.toggleButtonProps["aria-label"]:this.legend}},directives:{ripple:B},components:{PlusIcon:y,MinusIcon:b}};const A=["id"],E=["id","aria-controls","aria-expanded","aria-label"],N=["id","aria-labelledby"];function T(e,n,a,s,t,l){const f=I("ripple");return p(),g("fieldset",o({class:["p-fieldset p-component",{"p-fieldset-toggleable":a.toggleable}]},e.ptm("root")),[d("legend",o({class:"p-fieldset-legend"},e.ptm("legend")),[a.toggleable?u("",!0):i(e.$slots,"legend",{key:0},()=>[d("span",o({id:l.ariaId+"_header",class:"p-fieldset-legend-text"},e.ptm("legendtitle")),c(a.legend),17,A)]),a.toggleable?m((p(),g("a",o({key:1,id:l.ariaId+"_header",tabindex:"0",role:"button","aria-controls":l.ariaId+"_content","aria-expanded":!t.d_collapsed,"aria-label":l.buttonAriaLabel,onClick:n[0]||(n[0]=(...r)=>l.toggle&&l.toggle(...r)),onKeydown:n[1]||(n[1]=(...r)=>l.onKeyDown&&l.onKeyDown(...r))},{...a.toggleButtonProps,...e.ptm("toggler")}),[i(e.$slots,"togglericon",{collapsed:t.d_collapsed},()=>[(p(),_(w(t.d_collapsed?"PlusIcon":"MinusIcon"),o({class:"p-fieldset-toggler"},e.ptm("togglericon")),null,16))]),i(e.$slots,"legend",{},()=>[d("span",o({class:"p-fieldset-legend-text"},e.ptm("legendtitle")),c(a.legend),17)])],16,E)),[[f]]):u("",!0)],16),C(k,{name:"p-toggleable-content"},{default:D(()=>[m(d("div",o({id:l.ariaId+"_content",class:"p-toggleable-content",role:"region","aria-labelledby":l.ariaId+"_header"},e.ptm("toggleablecontent")),[d("div",o({class:"p-fieldset-content"},e.ptm("content")),[i(e.$slots,"default")],16)],16,N),[[P,!t.d_collapsed]])]),_:3})],16)}function K(e,n){n===void 0&&(n={});var a=n.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",a==="top"&&s.firstChild?s.insertBefore(t,s.firstChild):s.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var j=`
.p-fieldset-legend > a,
.p-fieldset-legend > span {
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-fieldset-toggleable .p-fieldset-legend a {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
}
.p-fieldset-legend-text {
    line-height: 1;
}
`;K(j);S.render=T;export{S as default};
