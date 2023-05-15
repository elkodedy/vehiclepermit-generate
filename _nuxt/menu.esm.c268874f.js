import{U as E,Z as g,D as o,C as D,p as K,q as V,O as B,R as F,z as C,A as H,o as l,b as a,j as v,F as p,g as f,w as O,l as S,B as h,r as x,k as m,t as L,G as w,e as T,T as R,m as N,n as I,i as _,f as P}from"./entry.33a98e6d.js";import"./entry.020dcd79.js";var A={name:"Menuitem",inheritAttrs:!1,emits:["item-click"],props:{item:null,templates:null,exact:null,id:null,focusedOptionId:null},methods:{getItemProp(e,t){return e&&e.item?B.getItemValue(e.item[t]):void 0},onItemActionClick(e,t){t&&t(e)},onItemClick(e){const t=this.getItemProp(this.item,"command");t&&t({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},containerClass(){return["p-menuitem",this.item.class,{"p-focus":this.id===this.focusedOptionId,"p-disabled":this.disabled()}]},linkClass(e){return["p-menuitem-link",{"router-link-active":e&&e.isActive,"router-link-active-exact":this.exact&&e&&e.isExactActive}]},visible(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label(){return typeof this.item.label=="function"?this.item.label():this.item.label}},computed:{iconClass(){return["p-menuitem-icon",this.item.icon]}},directives:{ripple:F}};const U=["id","aria-label","aria-disabled"],Z=["href","onClick"],M={class:"p-menuitem-text"},q=["href","target"],W={class:"p-menuitem-text"};function j(e,t,n,d,r,i){const y=C("router-link"),k=H("ripple");return i.visible()?(l(),a("li",{key:0,id:n.id,class:h(i.containerClass()),role:"menuitem",style:w(n.item.style),"aria-label":i.label(),"aria-disabled":i.disabled()},[v("div",{class:"p-menuitem-content",onClick:t[0]||(t[0]=s=>i.onItemClick(s))},[n.templates.item?(l(),f(x(n.templates.item),{key:1,item:n.item},null,8,["item"])):(l(),a(p,{key:0},[n.item.to&&!i.disabled()?(l(),f(y,{key:0,to:n.item.to,custom:""},{default:O(({navigate:s,href:c,isActive:u,isExactActive:b})=>[S((l(),a("a",{href:c,class:h(i.linkClass({isActive:u,isExactActive:b})),tabindex:"-1","aria-hidden":"true",onClick:z=>i.onItemActionClick(z,s)},[n.templates.itemicon?(l(),f(x(n.templates.itemicon),{key:0,item:n.item,class:h(i.iconClass)},null,8,["item","class"])):n.item.icon?(l(),a("span",{key:1,class:h(i.iconClass)},null,2)):m("",!0),v("span",M,L(i.label()),1)],10,Z)),[[k]])]),_:1},8,["to"])):S((l(),a("a",{key:1,href:n.item.url,class:h(i.linkClass()),target:n.item.target,tabindex:"-1","aria-hidden":"true"},[n.templates.itemicon?(l(),f(x(n.templates.itemicon),{key:0,item:n.item,class:h(i.iconClass)},null,8,["item","class"])):n.item.icon?(l(),a("span",{key:1,class:h(i.iconClass)},null,2)):m("",!0),v("span",W,L(i.label()),1)],10,q)),[[k]])],64))])],14,U)):m("",!0)}A.render=j;var G={name:"Menu",inheritAttrs:!1,emits:["show","hide","focus","blur"],props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:String,default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},exact:{type:Boolean,default:!0},tabindex:{type:Number,default:0},"aria-label":{type:String,default:null},"aria-labelledby":{type:String,default:null}},data(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(e){this.id=e||E()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted(){this.id=this.id||E(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&g.clear(this.container),this.container=null},methods:{itemClick(e){const t=e.item;this.disabled(t)||(t.command&&t.command(e),t.to&&e.navigate&&e.navigate(e.originalEvent),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},onListFocus(e){this.focused=!0,this.popup||(this.selectedOptionIndex!==-1?(this.changeFocusedOptionIndex(this.selectedOptionIndex),this.selectedOptionIndex=-1):this.changeFocusedOptionIndex(0)),this.$emit("focus",e)},onListBlur(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(o.focus(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey(e){const t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()},onArrowUpKey(e){if(e.altKey&&this.popup)o.focus(this.target),this.hide(),e.preventDefault();else{const t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()}},onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey(e){this.changeFocusedOptionIndex(o.find(this.container,"li.p-menuitem:not(.p-disabled)").length-1),e.preventDefault()},onEnterKey(e){const t=o.findSingle(this.list,`li[id="${`${this.focusedOptionIndex}`}"]`),n=t&&o.findSingle(t,".p-menuitem-link");this.popup&&o.focus(this.target),n?n.click():t&&t.click(),e.preventDefault()},onSpaceKey(e){this.onEnterKey(e)},findNextOptionIndex(e){const n=[...o.find(this.container,"li.p-menuitem:not(.p-disabled)")].findIndex(d=>d.id===e);return n>-1?n+1:0},findPrevOptionIndex(e){const n=[...o.find(this.container,"li.p-menuitem:not(.p-disabled)")].findIndex(d=>d.id===e);return n>-1?n-1:0},changeFocusedOptionIndex(e){const t=o.find(this.container,"li.p-menuitem:not(.p-disabled)");let n=e>=t.length?t.length-1:e<0?0:e;n>-1&&(this.focusedOptionIndex=t[n].getAttribute("id"))},toggle(e){this.overlayVisible?this.hide():this.show(e)},show(e){this.overlayVisible=!0,this.target=e.currentTarget},hide(){this.overlayVisible=!1,this.target=null},onEnter(e){this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&g.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&(o.focus(this.list),this.changeFocusedOptionIndex(0)),this.$emit("show")},onLeave(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&g.clear(e)},alignOverlay(){o.absolutePosition(this.container,this.target),this.container.style.minWidth=o.getOuterWidth(this.target)+"px"},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{const t=this.container&&!this.container.contains(e.target),n=!(this.target&&(this.target===e.target||this.target.contains(e.target)));this.overlayVisible&&t&&n?this.hide():!this.popup&&t&&n&&(this.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new D(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!o.isTouchDevice()&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label},separatorClass(e){return["p-menuitem-separator",e.class]},onOverlayClick(e){K.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef(e){this.container=e},listRef(e){this.list=e}},computed:{containerClass(){return["p-menu p-component",{"p-menu-overlay":this.popup,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},focusedOptionId(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:A,Portal:V}};const J=["id"],Q={key:0,class:"p-menu-start"},X=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],Y=["id"],$={key:1,class:"p-menu-end"};function ee(e,t,n,d,r,i){const y=C("PVMenuitem"),k=C("Portal");return l(),f(k,{appendTo:n.appendTo,disabled:!n.popup},{default:O(()=>[T(R,{name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},{default:O(()=>[!n.popup||r.overlayVisible?(l(),a("div",N({key:0,ref:i.containerRef,id:r.id,class:i.containerClass},e.$attrs,{onClick:t[3]||(t[3]=(...s)=>i.onOverlayClick&&i.onOverlayClick(...s))}),[e.$slots.start?(l(),a("div",Q,[I(e.$slots,"start")])):m("",!0),v("ul",{ref:i.listRef,id:r.id+"_list",class:"p-menu-list p-reset",role:"menu",tabindex:n.tabindex,"aria-activedescendant":r.focused?i.focusedOptionId:void 0,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,onFocus:t[0]||(t[0]=(...s)=>i.onListFocus&&i.onListFocus(...s)),onBlur:t[1]||(t[1]=(...s)=>i.onListBlur&&i.onListBlur(...s)),onKeydown:t[2]||(t[2]=(...s)=>i.onListKeyDown&&i.onListKeyDown(...s))},[(l(!0),a(p,null,_(n.model,(s,c)=>(l(),a(p,{key:i.label(s)+c.toString()},[s.items&&i.visible(s)&&!s.separator?(l(),a(p,{key:0},[s.items?(l(),a("li",{key:0,id:r.id+"_"+c,class:"p-submenu-header",role:"none"},[I(e.$slots,"item",{item:s},()=>[P(L(i.label(s)),1)])],8,Y)):m("",!0),(l(!0),a(p,null,_(s.items,(u,b)=>(l(),a(p,{key:u.label+c+"_"+b},[i.visible(u)&&!u.separator?(l(),f(y,{key:0,id:r.id+"_"+c+"_"+b,item:u,templates:e.$slots,exact:n.exact,focusedOptionId:i.focusedOptionId,onItemClick:i.itemClick},null,8,["id","item","templates","exact","focusedOptionId","onItemClick"])):i.visible(u)&&u.separator?(l(),a("li",{key:"separator"+c+b,class:h(i.separatorClass(s)),style:w(u.style),role:"separator"},null,6)):m("",!0)],64))),128))],64)):i.visible(s)&&s.separator?(l(),a("li",{key:"separator"+c.toString(),class:h(i.separatorClass(s)),style:w(s.style),role:"separator"},null,6)):(l(),f(y,{key:i.label(s)+c.toString(),id:r.id+"_"+c,item:s,templates:e.$slots,exact:n.exact,focusedOptionId:i.focusedOptionId,onItemClick:i.itemClick},null,8,["id","item","templates","exact","focusedOptionId","onItemClick"]))],64))),128))],40,X),e.$slots.end?(l(),a("div",$,[I(e.$slots,"end")])):m("",!0)],16,J)):m("",!0)]),_:3},8,["onEnter","onLeave","onAfterLeave"])]),_:3},8,["appendTo","disabled"])}function te(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var d=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&d.firstChild?d.insertBefore(r,d.firstChild):d.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var ie=`
.p-menu-overlay {
    position: absolute;
    top: 0;
    left: 0;
}
.p-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-menu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
.p-menu .p-menuitem-text {
    line-height: 1;
}
`;te(ie);G.render=ee;export{G as default};