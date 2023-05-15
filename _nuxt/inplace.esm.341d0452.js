import{s as y,N as v,Q as h,z as b,A as C,l as B,o as i,b as c,m as d,K as k,n as p,g as r,w as I,r as _,B as u,k as x}from"./entry.33a98e6d.js";import"./entry.020dcd79.js";var P={name:"Inplace",emits:["open","close","update:active"],props:{closable:{type:Boolean,default:!1},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},closeIcon:{type:String,default:void 0},displayProps:{type:null,default:null},closeButtonProps:{type:null,default:null}},data(){return{d_active:this.active}},watch:{active(e){this.d_active=e}},methods:{open(e){this.disabled||(this.$emit("open",e),this.d_active=!0,this.$emit("update:active",!0))},close(e){this.$emit("close",e),this.d_active=!1,this.$emit("update:active",!1),setTimeout(()=>{this.$refs.display.focus()},0)}},computed:{containerClass(){return["p-inplace p-component",{"p-inplace-closable":this.closable}]},displayClass(){return["p-inplace-display",{"p-disabled":this.disabled}]},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{IPButton:y,TimesIcon:v},directives:{focustrap:h}};const g=["tabindex"],w={key:1,class:"p-inplace-content"};function T(e,a,s,n,t,l){const f=b("IPButton"),m=C("focustrap");return B((i(),c("div",{class:u(l.containerClass),"aria-live":"polite"},[t.d_active?(i(),c("div",w,[p(e.$slots,"content"),s.closable?(i(),r(f,d({key:0,"aria-label":l.closeAriaLabel,onClick:l.close},s.closeButtonProps),{icon:I(()=>[p(e.$slots,"closeicon",{},()=>[(i(),r(_(s.closeIcon?"span":"TimesIcon"),{class:u(s.closeIcon)},null,8,["class"]))])]),_:3},16,["aria-label","onClick"])):x("",!0)])):(i(),c("div",d({key:0,ref:"display",class:l.displayClass,tabindex:e.$attrs.tabindex||"0",role:"button",onClick:a[0]||(a[0]=(...o)=>l.open&&l.open(...o)),onKeydown:a[1]||(a[1]=k((...o)=>l.open&&l.open(...o),["enter"]))},s.displayProps),[p(e.$slots,"display")],16,g))],2)),[[m]])}function A(e,a){a===void 0&&(a={});var s=a.insertAt;if(!(!e||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",s==="top"&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var N=`
.p-inplace .p-inplace-display {
    display: inline;
    cursor: pointer;
}
.p-inplace .p-inplace-content {
    display: inline;
}
.p-fluid .p-inplace.p-inplace-closable .p-inplace-content {
    display: flex;
}
.p-fluid .p-inplace.p-inplace-closable .p-inplace-content > .p-inputtext {
    flex: 1 1 auto;
    width: 1%;
}
`;A(N);P.render=T;export{P as default};
