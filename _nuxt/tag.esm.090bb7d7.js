import{o as i,b as o,g as c,r as d,B as l,k as p,n as u,j as g,t as m}from"./entry.600128a6.js";import"./entry.ea737ec0.js";var h={name:"Tag",props:{value:null,severity:null,rounded:Boolean,icon:String},computed:{containerClass(){return["p-tag p-component",{"p-tag-info":this.severity==="info","p-tag-success":this.severity==="success","p-tag-warning":this.severity==="warning","p-tag-danger":this.severity==="danger","p-tag-rounded":this.rounded}]},iconClass(){return["p-tag-icon",this.icon]}}};const y={class:"p-tag-value"};function f(t,a,s,n,e,r){return i(),o("span",{class:l(r.containerClass)},[t.$slots.icon?(i(),c(d(t.$slots.icon),{key:0,class:"p-tag-icon"})):s.icon?(i(),o("span",{key:1,class:l(r.iconClass)},null,2)):p("",!0),u(t.$slots,"default",{},()=>[g("span",y,m(s.value),1)])],2)}function v(t,a){a===void 0&&(a={});var s=a.insertAt;if(!(!t||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",s==="top"&&n.firstChild?n.insertBefore(e,n.firstChild):n.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}}var C=`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.p-tag-icon,
.p-tag-value,
.p-tag-icon.pi {
    line-height: 1.5;
}
.p-tag.p-tag-rounded {
    border-radius: 10rem;
}
`;v(C);h.render=f;export{h as default};
