import{Z as p,D as c,Q as w,R as x,q as L,N as B,z as S,A as h,o as r,g as f,w as m,b as l,B as u,e as I,T as A,l as v,m as E,j as g,n as b,k as d,r as R}from"./entry.b9153a06.js";import"./entry.7291cd7f.js";var D={name:"Sidebar",inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},data(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&p.clear(this.mask),this.container=null,this.mask=null},methods:{hide(){this.$emit("update:visible",!1)},onEnter(){this.$emit("show"),this.focus(),this.autoZIndex&&p.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter(){this.enableDocumentSettings()},onBeforeLeave(){this.modal&&c.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(){this.autoZIndex&&p.clear(this.mask),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick(e){this.dismissable&&this.modal&&this.mask===e.target&&this.hide()},focus(){const e=i=>i.querySelector("[autofocus]");let t=this.$slots.default&&e(this.content);t||(t=this.$slots.header&&e(this.headerContainer),t||(t=e(this.container))),t&&t.focus()},enableDocumentSettings(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&c.addClass(document.body,"p-overflow-hidden")},disableDocumentSettings(){this.unbindOutsideClickListener(),this.blockScroll&&c.removeClass(document.body,"p-overflow-hidden")},onKeydown(e){e.code==="Escape"&&this.hide()},containerRef(e){this.container=e},maskRef(e){this.mask=e},contentRef(e){this.content=e},headerContainerRef(e){this.headerContainer=e},closeButtonRef(e){this.closeButton=e},getPositionClass(){const t=["left","right","top","bottom"].find(i=>i===this.position);return t?`p-sidebar-${t}`:""},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.isOutsideClicked(e)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked(e){return this.container&&!this.container.contains(e.target)}},computed:{containerClass(){return["p-sidebar p-component",{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1,"p-sidebar-full":this.fullScreen}]},fullScreen(){return this.position==="full"},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},maskClass(){return["p-sidebar-mask",this.getPositionClass(),{"p-component-overlay p-component-overlay-enter":this.modal,"p-sidebar-mask-scrollblocker":this.blockScroll,"p-sidebar-visible":this.containerVisible,"p-sidebar-full":this.fullScreen}]}},directives:{focustrap:w,ripple:x},components:{Portal:L,TimesIcon:B}};const T=["aria-modal"],V={key:0,class:"p-sidebar-header-content"},Z=["aria-label"];function j(e,t,i,a,s,n){const k=S("Portal"),y=h("ripple"),C=h("focustrap");return r(),f(k,null,{default:m(()=>[s.containerVisible?(r(),l("div",{key:0,ref:n.maskRef,class:u(n.maskClass),onMousedown:t[2]||(t[2]=(...o)=>n.onMaskClick&&n.onMaskClick(...o))},[I(A,{name:"p-sidebar",onEnter:n.onEnter,onAfterEnter:n.onAfterEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},{default:m(()=>[i.visible?v((r(),l("div",E({key:0,ref:n.containerRef,class:n.containerClass,role:"complementary","aria-modal":i.modal,onKeydown:t[1]||(t[1]=(...o)=>n.onKeydown&&n.onKeydown(...o))},e.$attrs),[g("div",{ref:n.headerContainerRef,class:"p-sidebar-header"},[e.$slots.header?(r(),l("div",V,[b(e.$slots,"header")])):d("",!0),i.showCloseIcon?v((r(),l("button",{key:1,ref:n.closeButtonRef,autofocus:"",type:"button",class:"p-sidebar-close p-sidebar-icon p-link","aria-label":n.closeAriaLabel,onClick:t[0]||(t[0]=(...o)=>n.hide&&n.hide(...o))},[b(e.$slots,"closeicon",{},()=>[(r(),f(R(i.closeIcon?"span":"TimesIcon"),{class:u(["p-sidebar-close-icon ",i.closeIcon])},null,8,["class"]))])],8,Z)),[[y]]):d("",!0)],512),g("div",{ref:n.contentRef,class:"p-sidebar-content"},[b(e.$slots,"default")],512)],16,T)),[[C]]):d("",!0)]),_:3},8,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],34)):d("",!0)]),_:3})}function N(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",i==="top"&&a.firstChild?a.insertBefore(s,a.firstChild):a.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var P=`
.p-sidebar-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    background-color: transparent;
    transition-property: background-color;
}
.p-sidebar-mask.p-component-overlay {
    pointer-events: auto;
}
.p-sidebar-visible {
    display: flex;
}
.p-sidebar {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
}
.p-sidebar-content {
    overflow-y: auto;
    flex-grow: 1;
}
.p-sidebar-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-shrink: 0;
}
.p-sidebar-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}
.p-sidebar-full .p-sidebar {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
}

/* Animation */
/* Center */
.p-sidebar-left .p-sidebar-enter-from,
.p-sidebar-left .p-sidebar-leave-to {
    transform: translateX(-100%);
}
.p-sidebar-right .p-sidebar-enter-from,
.p-sidebar-right .p-sidebar-leave-to {
    transform: translateX(100%);
}
.p-sidebar-top .p-sidebar-enter-from,
.p-sidebar-top .p-sidebar-leave-to {
    transform: translateY(-100%);
}
.p-sidebar-bottom .p-sidebar-enter-from,
.p-sidebar-bottom .p-sidebar-leave-to {
    transform: translateY(100%);
}
.p-sidebar-full .p-sidebar-enter-from,
.p-sidebar-full .p-sidebar-leave-to {
    opacity: 0;
}
.p-sidebar-full .p-sidebar-enter-active,
.p-sidebar-full .p-sidebar-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Position */
.p-sidebar-left {
    justify-content: flex-start;
}
.p-sidebar-right {
    justify-content: flex-end;
}
.p-sidebar-top {
    align-items: flex-start;
}
.p-sidebar-bottom {
    align-items: flex-end;
}

/* Size */
.p-sidebar-left .p-sidebar {
    width: 20rem;
    height: 100%;
}
.p-sidebar-right .p-sidebar {
    width: 20rem;
    height: 100%;
}
.p-sidebar-top .p-sidebar {
    height: 10rem;
    width: 100%;
}
.p-sidebar-bottom .p-sidebar {
    height: 10rem;
    width: 100%;
}
.p-sidebar-left .p-sidebar-sm,
.p-sidebar-right .p-sidebar-sm {
    width: 20rem;
}
.p-sidebar-left .p-sidebar-md,
.p-sidebar-right .p-sidebar-md {
    width: 40rem;
}
.p-sidebar-left .p-sidebar-lg,
.p-sidebar-right .p-sidebar-lg {
    width: 60rem;
}
.p-sidebar-top .p-sidebar-sm,
.p-sidebar-bottom .p-sidebar-sm {
    height: 10rem;
}
.p-sidebar-top .p-sidebar-md,
.p-sidebar-bottom .p-sidebar-md {
    height: 20rem;
}
.p-sidebar-top .p-sidebar-lg,
.p-sidebar-bottom .p-sidebar-lg {
    height: 30rem;
}
.p-sidebar-left .p-sidebar-content,
.p-sidebar-right .p-sidebar-content,
.p-sidebar-top .p-sidebar-content,
.p-sidebar-bottom .p-sidebar-content {
    width: 100%;
    height: 100%;
}
@media screen and (max-width: 64em) {
.p-sidebar-left .p-sidebar-lg,
    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-md {
        width: 20rem;
}
}
`;N(P);D.render=j;export{D as default};
