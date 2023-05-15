import{o as l,b as i,n as p,F as m,t as u,g,r as y,B as o,k as d}from"./entry.b43c92c6.js";import"./entry.4b682d46.js";var h={name:"Avatar",emits:["error"],props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},methods:{onError(){this.$emit("error")}},computed:{containerClass(){return["p-avatar p-component",{"p-avatar-image":this.image!=null,"p-avatar-circle":this.shape==="circle","p-avatar-lg":this.size==="large","p-avatar-xl":this.size==="xlarge"}]}}};const v=["aria-labelledby","aria-label"],f={key:0,class:"p-avatar-text"},b=["src","alt"];function S(e,r,a,n,t,s){return l(),i("div",{class:o(s.containerClass),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},[p(e.$slots,"default"),e.$slots.default?d("",!0):(l(),i(m,{key:0},[a.label?(l(),i("span",f,u(a.label),1)):e.$slots.icon?(l(),g(y(e.$slots.icon),{key:1,class:"p-avatar-icon"})):a.icon?(l(),i("span",{key:2,class:o(["p-avatar-icon",a.icon])},null,2)):a.image?(l(),i("img",{key:3,src:a.image,alt:e.ariaLabel,onError:r[0]||(r[0]=(...c)=>s.onError&&s.onError(...c))},null,40,b)):d("",!0)],64))],10,v)}function k(e,r){r===void 0&&(r={});var a=r.insertAt;if(!(!e||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",a==="top"&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var C=`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
}
.p-avatar.p-avatar-image {
    background-color: transparent;
}
.p-avatar.p-avatar-circle {
    border-radius: 50%;
}
.p-avatar-circle img {
    border-radius: 50%;
}
.p-avatar .p-avatar-icon {
    font-size: 1rem;
}
.p-avatar img {
    width: 100%;
    height: 100%;
}
`;k(C);h.render=S;export{h as default};
