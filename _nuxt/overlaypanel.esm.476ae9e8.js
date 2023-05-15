import{Z as d,p as a,D as r,C as k,U as g,Q as w,R as E,q as T,N as x,z as S,A as p,o as c,g as h,w as f,e as z,T as O,l as u,b as v,m as A,j as I,n as y,r as B,B as H,k as m}from"./entry.33a98e6d.js";import"./entry.020dcd79.js";var R={name:"OverlayPanel",inheritAttrs:!1,emits:["show","hide"],props:{dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!1},appendTo:{type:String,default:"body"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:void 0}},data(){return{visible:!1}},watch:{dismissable:{immediate:!0,handler(e){e?this.bindOutsideClickListener():this.unbindOutsideClickListener()}}},selfClick:!1,target:null,eventTarget:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,styleElement:null,overlayEventListener:null,beforeUnmount(){this.dismissable&&this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.destroyStyle(),this.unbindResizeListener(),this.target=null,this.container&&this.autoZIndex&&d.clear(this.container),this.overlayEventListener&&(a.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{toggle(e,t){this.visible?this.hide():this.show(e,t)},show(e,t){this.visible=!0,this.eventTarget=e.currentTarget,this.target=t||e.currentTarget},hide(){this.visible=!1,r.focus(this.target)},onContentClick(){this.selfClick=!0},onEnter(e){this.container.setAttribute(this.attributeSelector,""),this.alignOverlay(),this.dismissable&&this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&d.set("overlay",e,this.baseZIndex+this.$primevue.config.zIndex.overlay),this.overlayEventListener=t=>{this.container.contains(t.target)&&(this.selfClick=!0)},this.focus(),a.on("overlay-click",this.overlayEventListener),this.$emit("show")},onLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),a.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null,this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&d.clear(e)},alignOverlay(){r.absolutePosition(this.container,this.target);const e=r.getOffset(this.container),t=r.getOffset(this.target);let l=0;e.left<t.left&&(l=t.left-e.left),this.container.style.setProperty("--overlayArrowLeft",`${l}px`),e.top<t.top&&r.addClass(this.container,"p-overlaypanel-flipped")},onContentKeydown(e){e.code==="Escape"&&this.hide()},onButtonKeydown(e){switch(e.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":e.preventDefault()}},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},bindOutsideClickListener(){!this.outsideClickListener&&r.isClient()&&(this.outsideClickListener=e=>{this.visible&&!this.selfClick&&!this.isTargetClicked(e)&&(this.visible=!1),this.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null,this.selfClick=!1)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new k(this.target,()=>{this.visible&&(this.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.visible&&!r.isTouchDevice()&&(this.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked(e){return this.eventTarget&&(this.eventTarget===e.target||this.eventTarget.contains(e.target))},containerRef(e){this.container=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-overlaypanel[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},onOverlayClick(e){a.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{containerClass(){return["p-overlaypanel p-component",{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},attributeSelector(){return g()},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:w,ripple:E},components:{Portal:T,TimesIcon:x}};const D=["aria-modal"],K=["aria-label"];function Z(e,t,l,o,s,n){const b=S("Portal"),C=p("ripple"),L=p("focustrap");return c(),h(b,{appendTo:l.appendTo},{default:f(()=>[z(O,{name:"p-overlaypanel",onEnter:n.onEnter,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave},{default:f(()=>[s.visible?u((c(),v("div",A({key:0,ref:n.containerRef,role:"dialog",class:n.containerClass,"aria-modal":s.visible,onClick:t[5]||(t[5]=(...i)=>n.onOverlayClick&&n.onOverlayClick(...i))},e.$attrs),[I("div",{class:"p-overlaypanel-content",onClick:t[0]||(t[0]=(...i)=>n.onContentClick&&n.onContentClick(...i)),onMousedown:t[1]||(t[1]=(...i)=>n.onContentClick&&n.onContentClick(...i)),onKeydown:t[2]||(t[2]=(...i)=>n.onContentKeydown&&n.onContentKeydown(...i))},[y(e.$slots,"default")],32),l.showCloseIcon?u((c(),v("button",{key:0,class:"p-overlaypanel-close p-link","aria-label":n.closeAriaLabel,type:"button",autofocus:"",onClick:t[3]||(t[3]=(...i)=>n.hide&&n.hide(...i)),onKeydown:t[4]||(t[4]=(...i)=>n.onButtonKeydown&&n.onButtonKeydown(...i))},[y(e.$slots,"closeicon",{},()=>[(c(),h(B(l.closeIcon?"span":"TimesIcon"),{class:H(["p-overlaypanel-close-icon ",l.closeIcon])},null,8,["class"]))])],40,K)),[[C]]):m("",!0)],16,D)),[[L]]):m("",!0)]),_:3},8,["onEnter","onLeave","onAfterLeave"])]),_:3},8,["appendTo"])}function N(e,t){t===void 0&&(t={});var l=t.insertAt;if(!(!e||typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",l==="top"&&o.firstChild?o.insertBefore(s,o.firstChild):o.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var P=`
.p-overlaypanel {
    position: absolute;
    margin-top: 10px;
    top: 0;
    left: 0;
}
.p-overlaypanel-flipped {
    margin-top: 0;
    margin-bottom: 10px;
}
.p-overlaypanel-close {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
}

/* Animation */
.p-overlaypanel-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}
.p-overlaypanel-leave-to {
    opacity: 0;
}
.p-overlaypanel-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}
.p-overlaypanel-leave-active {
    transition: opacity 0.1s linear;
}
.p-overlaypanel:after,
.p-overlaypanel:before {
    bottom: 100%;
    left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}
.p-overlaypanel:after {
    border-width: 8px;
    margin-left: -8px;
}
.p-overlaypanel:before {
    border-width: 10px;
    margin-left: -10px;
}
.p-overlaypanel-flipped:after,
.p-overlaypanel-flipped:before {
    bottom: auto;
    top: 100%;
}
.p-overlaypanel.p-overlaypanel-flipped:after {
    border-bottom-color: transparent;
}
.p-overlaypanel.p-overlaypanel-flipped:before {
    border-bottom-color: transparent;
}
`;N(P);R.render=Z;export{R as default};
