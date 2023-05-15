import{D as u,R as T,z as B,A as D,o as r,b as o,j as h,F as g,i as E,g as f,w as N,B as b,G as L,l as v,r as p,k as m,t as x}from"./entry.600128a6.js";import"./entry.ea737ec0.js";var S={name:"TabMenu",emits:["update:activeIndex","tab-change"],props:{model:{type:Array,default:null},exact:{type:Boolean,default:!0},activeIndex:{type:Number,default:0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},timeout:null,data(){return{d_activeIndex:this.activeIndex}},watch:{$route(){this.timeout=setTimeout(()=>this.updateInkBar(),50)},activeIndex(e){this.d_activeIndex=e}},mounted(){this.updateInkBar()},updated(){this.updateInkBar()},beforeUnmount(){clearTimeout(this.timeout)},methods:{onItemClick(e,s,l,t){if(this.disabled(s)){e.preventDefault();return}s.command&&s.command({originalEvent:e,item:s}),s.to&&t&&t(e),l!==this.d_activeIndex&&(this.d_activeIndex=l,this.$emit("update:activeIndex",this.d_activeIndex)),this.$emit("tab-change",{originalEvent:e,index:l})},onKeydownItem(e,s,l){let t=l,i={};const n=this.$refs.tabLink;switch(e.code){case"ArrowRight":{i=this.findNextItem(this.$refs.tab,t),t=i.i;break}case"ArrowLeft":{i=this.findPrevItem(this.$refs.tab,t),t=i.i;break}case"End":{i=this.findPrevItem(this.$refs.tab,this.model.length),t=i.i,e.preventDefault();break}case"Home":{i=this.findNextItem(this.$refs.tab,-1),t=i.i,e.preventDefault();break}case"Space":case"Enter":{e.currentTarget&&e.currentTarget.click(),e.preventDefault();break}case"Tab":{this.setDefaultTabIndexes(n);break}}n[t]&&n[l]&&(n[l].tabIndex="-1",n[t].tabIndex="0",n[t].focus())},findNextItem(e,s){let l=s+1;if(l>=e.length)return{nextItem:e[e.length],i:e.length};let t=e[l];return t?u.hasClass(t,"p-disabled")?this.findNextItem(e,l):{nextItem:t,i:l}:null},findPrevItem(e,s){let l=s-1;if(l<0)return{nextItem:e[0],i:0};let t=e[l];return t?u.hasClass(t,"p-disabled")?this.findPrevItem(e,l):{prevItem:t,i:l}:null},getItemClass(e,s){return["p-tabmenuitem",e.class,{"p-highlight":this.d_activeIndex===s,"p-disabled":this.disabled(e)}]},getRouteItemClass(e,s,l){return["p-tabmenuitem",e.class,{"p-highlight":this.exact?l:s,"p-disabled":this.disabled(e)}]},getItemIcon(e){return["p-menuitem-icon",e.icon]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label},setDefaultTabIndexes(e){setTimeout(()=>{e.forEach(s=>{s.tabIndex=u.hasClass(s.parentElement,"p-highlight")?"0":"-1"})},300)},setTabIndex(e){return this.d_activeIndex===e?"0":"-1"},updateInkBar(){let e=this.$refs.nav.children,s=!1;for(let l=0;l<e.length;l++){let t=e[l];u.hasClass(t,"p-highlight")&&(this.$refs.inkbar.style.width=u.getWidth(t)+"px",this.$refs.inkbar.style.left=u.getOffset(t).left-u.getOffset(this.$refs.nav).left+"px",s=!0)}s||(this.$refs.inkbar.style.width="0px",this.$refs.inkbar.style.left="0px")}},directives:{ripple:T}};const K={class:"p-tabmenu p-component"},z=["aria-labelledby","aria-label"],R=["href","aria-label","aria-disabled","tabindex","onClick","onKeydown"],A={class:"p-menuitem-text"},P=["onClick","onKeydown"],$=["href","target","aria-label","aria-disabled","tabindex"],H={class:"p-menuitem-text"},j={ref:"inkbar",role:"none",class:"p-tabmenu-ink-bar"};function F(e,s,l,t,i,n){const _=B("router-link"),y=D("ripple");return r(),o("div",K,[h("ul",{ref:"nav",class:"p-tabmenu-nav p-reset",role:"menubar","aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},[(r(!0),o(g,null,E(l.model,(a,d)=>(r(),o(g,{key:n.label(a)+"_"+d.toString()},[a.to&&!n.disabled(a)?(r(),f(_,{key:0,to:a.to,custom:""},{default:N(({navigate:c,href:C,isActive:w,isExactActive:k})=>[n.visible(a)?(r(),o("li",{key:0,ref_for:!0,ref:"tab",class:b(n.getRouteItemClass(a,w,k)),style:L(a.style),role:"presentation"},[e.$slots.item?(r(),f(p(e.$slots.item),{key:1,item:a,index:d},null,8,["item","index"])):v((r(),o("a",{key:0,ref_for:!0,ref:"tabLink",role:"menuitem",href:C,class:"p-menuitem-link","aria-label":n.label(a),"aria-disabled":n.disabled(a),tabindex:k?"0":"-1",onClick:I=>n.onItemClick(I,a,d,c),onKeydown:I=>n.onKeydownItem(I,a,d,c)},[e.$slots.itemicon?(r(),f(p(e.$slots.itemicon),{key:0,item:a,class:b(n.getItemIcon(a))},null,8,["item","class"])):a.icon?(r(),o("span",{key:1,class:b(n.getItemIcon(a))},null,2)):m("",!0),h("span",A,x(n.label(a)),1)],40,R)),[[y]])],6)):m("",!0)]),_:2},1032,["to"])):n.visible(a)?(r(),o("li",{key:1,ref_for:!0,ref:"tab",class:b(n.getItemClass(a,d)),role:"presentation",onClick:c=>n.onItemClick(c,a,d),onKeydown:c=>n.onKeydownItem(c,a,d)},[e.$slots.item?(r(),f(p(e.$slots.item),{key:1,item:a,index:d},null,8,["item","index"])):v((r(),o("a",{key:0,ref_for:!0,ref:"tabLink",role:"menuitem",href:a.url,class:"p-menuitem-link",target:a.target,"aria-label":n.label(a),"aria-disabled":n.disabled(a),tabindex:n.setTabIndex(d)},[e.$slots.itemicon?(r(),f(p(e.$slots.itemicon),{key:0,item:a,class:b(n.getItemIcon(a))},null,8,["item","class"])):a.icon?(r(),o("span",{key:1,class:b(n.getItemIcon(a))},null,2)):m("",!0),h("span",H,x(n.label(a)),1)],8,$)),[[y]])],42,P)):m("",!0)],64))),128)),h("li",j,null,512)],8,z)])}function O(e,s){s===void 0&&(s={});var l=s.insertAt;if(!(!e||typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",l==="top"&&t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var V=`
.p-tabmenu {
    overflow-x: auto;
}
.p-tabmenu-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex-wrap: nowrap;
}
.p-tabmenu-nav a {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    text-decoration: none;
    overflow: hidden;
}
.p-tabmenu-nav a:focus {
    z-index: 1;
}
.p-tabmenu-nav .p-menuitem-text {
    line-height: 1;
}
.p-tabmenu-ink-bar {
    display: none;
    z-index: 1;
}
.p-tabmenu::-webkit-scrollbar {
    display: none;
}
`;O(V);S.render=F;export{S as default};
