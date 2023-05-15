import{s as d}from"./index.esm.a9c75abf.js";import{Z as o,D as h,o as s,g as a,w as m,b as u,B as c,n as f,r as v,k as y,T as L}from"./entry.33a98e6d.js";import"./entry.020dcd79.js";var b={name:"ScrollTop",scrollListener:null,container:null,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"}},data(){return{visible:!1}},mounted(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(o.clear(this.container),this.overlay=null)},methods:{onClick(){(this.target==="window"?window:this.$el.parentElement).scroll({top:0,behavior:this.behavior})},checkVisibility(e){e>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener(){this.scrollListener=()=>{this.checkVisibility(this.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener(){this.scrollListener=()=>{this.checkVisibility(h.getWindowScrollTop())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter(e){o.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterLeave(e){o.clear(e)},containerRef(e){this.container=e}},computed:{containerClass(){return["p-scrolltop p-link p-component",{"p-scrolltop-sticky":this.target!=="window"}]},scrollTopAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:d}};const g=["aria-label"];function w(e,i,r,l,t,n){return s(),a(L,{name:"p-scrolltop",appear:"",onEnter:n.onEnter,onAfterLeave:n.onAfterLeave},{default:m(()=>[t.visible?(s(),u("button",{key:0,ref:n.containerRef,class:c(n.containerClass),onClick:i[0]||(i[0]=(...p)=>n.onClick&&n.onClick(...p)),type:"button","aria-label":n.scrollTopAriaLabel},[f(e.$slots,"icon",{},()=>[(s(),a(v(r.icon?"span":"ChevronUpIcon"),{class:c(["p-scrolltop-icon",r.icon])},null,8,["class"]))])],10,g)):y("",!0)]),_:3},8,["onEnter","onAfterLeave"])}function k(e,i){i===void 0&&(i={});var r=i.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",r==="top"&&l.firstChild?l.insertBefore(t,l.firstChild):l.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var C=`
.p-scrolltop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-scrolltop-sticky {
    position: sticky;
}
.p-scrolltop-sticky.p-link {
    margin-left: auto;
}
.p-scrolltop-enter-from {
    opacity: 0;
}
.p-scrolltop-enter-active {
    transition: opacity 0.15s;
}
.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}
.p-scrolltop-leave-active {
    transition: opacity 0.15s;
}
`;k(C);b.render=w;export{b as default};
