import{y as h,o as i,b as o,n as d,F as p,g as m,r as u,B as r,k as s,t as y}from"./entry.33a98e6d.js";import"./entry.020dcd79.js";var f={name:"Chip",emits:["remove"],props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},data(){return{visible:!0}},methods:{onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)},close(e){this.visible=!1,this.$emit("remove",e)}},computed:{containerClass(){return["p-chip p-component",{"p-chip-image":this.image!=null}]}},components:{TimesCircleIcon:h}};const g=["aria-label"],v=["src"],k={key:3,class:"p-chip-text"};function C(e,c,n,l,t,a){return t.visible?(i(),o("div",{key:0,class:r(a.containerClass),"aria-label":n.label},[d(e.$slots,"default"),e.$slots.default?s("",!0):(i(),o(p,{key:0},[n.image?(i(),o("img",{key:0,src:n.image},null,8,v)):e.$slots.icon?(i(),m(u(e.$slots.icon),{key:1,class:"p-chip-icon"})):n.icon?(i(),o("span",{key:2,class:r(["p-chip-icon",n.icon])},null,2)):s("",!0),n.label?(i(),o("div",k,y(n.label),1)):s("",!0)],64)),n.removable?d(e.$slots,"removeicon",{key:1,onClick:a.close,onKeydown:a.onKeydown},()=>[(i(),m(u(n.removeIcon?"span":"TimesCircleIcon"),{tabindex:"0",class:r(["p-chip-remove-icon",n.removeIcon]),onClick:a.close,onKeydown:a.onKeydown},null,40,["class","onClick","onKeydown"]))]):s("",!0)],10,g)):s("",!0)}function b(e,c){c===void 0&&(c={});var n=c.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",n==="top"&&l.firstChild?l.insertBefore(t,l.firstChild):l.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var B=`
.p-chip {
    display: inline-flex;
    align-items: center;
}
.p-chip-text {
    line-height: 1.5;
}
.p-chip-icon.pi {
    line-height: 1.5;
}
.p-chip-remove-icon {
    line-height: 1.5;
    cursor: pointer;
}
.p-chip img {
    border-radius: 50%;
}
`;b(B);f.render=C;export{f as default};
