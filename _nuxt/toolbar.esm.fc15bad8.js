import{s as p}from"./basecomponent.esm.482e346f.js";import{o as i,b as d,j as n,n as l,m as a}from"./entry.b9153a06.js";import"./entry.7291cd7f.js";var c={name:"Toolbar",extends:p,props:{"aria-labelledby":{type:String,default:null}}};const m=["aria-labelledby"];function u(e,o,s,r,t,g){return i(),d("div",a({class:"p-toolbar p-component",role:"toolbar","aria-labelledby":e.ariaLabelledby},e.ptm("root")),[n("div",a({class:"p-toolbar-group-start p-toolbar-group-left"},e.ptm("start")),[l(e.$slots,"start")],16),n("div",a({class:"p-toolbar-group-center"},e.ptm("center")),[l(e.$slots,"center")],16),n("div",a({class:"p-toolbar-group-end p-toolbar-group-right"},e.ptm("end")),[l(e.$slots,"end")],16)],16,m)}function b(e,o){o===void 0&&(o={});var s=o.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",s==="top"&&r.firstChild?r.insertBefore(t,r.firstChild):r.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var f=`
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
.p-toolbar-group-start,
.p-toolbar-group-center,
.p-toolbar-group-end {
    display: flex;
    align-items: center;
}
.p-toolbar-group-left,
.p-toolbar-group-right {
    display: flex;
    align-items: center;
}
`;b(f);c.render=u;export{c as default};
