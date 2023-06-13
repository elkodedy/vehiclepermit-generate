import{U as w,O as l,D as g,R as _,z as P,A as D,o as r,b as o,B as d,G as L,t as E,k as I,F as b,i as K,j as v,g as y,w as M,l as S,r as x,n as F,e as N}from"./entry.b9153a06.js";import{s as G}from"./index.esm.352ce731.js";import{s as R}from"./index.esm.0ebf10cf.js";import"./entry.7291cd7f.js";var V={name:"MegaMenuSub",emits:["item-click","item-mouseenter"],props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},horizontal:{type:Boolean,default:!1},submenu:{type:Object,default:null},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItem:{type:Object,default:null},exact:{type:Boolean,default:!0}},methods:{getSubListId(e){return`${this.getItemId(e)}_list`},getSubListKey(e){return this.getSubListId(e)},getItemId(e){return`${this.menuId}_${e.key}`},getItemKey(e){return this.getItemId(e)},getItemProp(e,t,i){return e&&e.item?l.getItemValue(e.item[t],i):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemActive(e){return l.isNotEmpty(this.activeItem)?this.activeItem.key===e.key:!1},isItemVisible(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemFocused(e){return this.focusedItemId===this.getItemId(e)},isItemGroup(e){return l.isNotEmpty(e.items)},onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemActionClick(e,t){t&&t(e)},getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length},getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1},getSubmenuHeaderClass(e){return["p-megamenu-submenu-header p-submenu-header",this.getItemProp(e,"class"),{"p-disabled":this.isItemDisabled(e)}]},getColumnClass(e){let t=this.isItemGroup(e)?e.items.length:0,i;switch(t){case 2:i="p-megamenu-col-6";break;case 3:i="p-megamenu-col-4";break;case 4:i="p-megamenu-col-3";break;case 6:i="p-megamenu-col-2";break;default:i="p-megamenu-col-12";break}return i},getItemClass(e){return["p-menuitem",this.getItemProp(e,"class"),{"p-menuitem-active p-highlight":this.isItemActive(e),"p-focus":this.isItemFocused(e),"p-disabled":this.isItemDisabled(e)}]},getItemActionClass(e,t){return["p-menuitem-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},getItemIconClass(e){return["p-menuitem-icon",this.getItemProp(e,"icon")]},getSeparatorItemClass(e){return["p-menuitem-separator",this.getItemProp(e,"class")]}},components:{AngleRightIcon:R,AngleDownIcon:G},directives:{ripple:_}};const B=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset"],T=["onClick","onMouseenter"],O=["href","onClick"],U={class:"p-menuitem-text"},H=["href","target"],j={class:"p-menuitem-text"},q={key:0,class:"p-megamenu-panel"},W={class:"p-megamenu-grid"},J=["id"];function Q(e,t,i,m,a,n){const u=P("router-link"),c=P("MegaMenuSub",!0),f=D("ripple");return r(),o("ul",null,[i.submenu?(r(),o("li",{key:0,class:d(n.getSubmenuHeaderClass(i.submenu)),style:L(n.getItemProp(i.submenu,"style")),role:"presentation"},E(n.getItemLabel(i.submenu)),7)):I("",!0),(r(!0),o(b,null,K(i.items,(s,C)=>(r(),o(b,{key:n.getItemKey(s)},[n.isItemVisible(s)&&!n.getItemProp(s,"separator")?(r(),o("li",{key:0,id:n.getItemId(s),style:L(n.getItemProp(s,"style")),class:d(n.getItemClass(s)),role:"menuitem","aria-label":n.getItemLabel(s),"aria-disabled":n.isItemDisabled(s)||void 0,"aria-expanded":n.isItemGroup(s)?n.isItemActive(s):void 0,"aria-haspopup":n.isItemGroup(s)&&!n.getItemProp(s,"to")?"menu":void 0,"aria-level":i.level+1,"aria-setsize":n.getAriaSetSize(),"aria-posinset":n.getAriaPosInset(C)},[v("div",{class:"p-menuitem-content",onClick:h=>n.onItemClick(h,s),onMouseenter:h=>n.onItemMouseEnter(h,s)},[i.templates.item?(r(),y(x(i.templates.item),{key:1,item:s.item},null,8,["item"])):(r(),o(b,{key:0},[n.getItemProp(s,"to")&&!n.isItemDisabled(s)?(r(),y(u,{key:0,to:n.getItemProp(s,"to"),custom:""},{default:M(({navigate:h,href:p,isActive:k,isExactActive:z})=>[S((r(),o("a",{href:p,class:d(n.getItemActionClass(s,{isActive:k,isExactActive:z})),tabindex:"-1","aria-hidden":"true",onClick:A=>n.onItemActionClick(A,h)},[i.templates.itemicon?(r(),y(x(i.templates.itemicon),{key:0,item:s.item,class:d(n.getItemIconClass(s))},null,8,["item","class"])):n.getItemProp(s,"icon")?(r(),o("span",{key:1,class:d(n.getItemIconClass(s))},null,2)):I("",!0),v("span",U,E(n.getItemLabel(s)),1)],10,O)),[[f]])]),_:2},1032,["to"])):S((r(),o("a",{key:1,href:n.getItemProp(s,"url"),class:d(n.getItemActionClass(s)),target:n.getItemProp(s,"target"),tabindex:"-1","aria-hidden":"true"},[i.templates.itemicon?(r(),y(x(i.templates.itemicon),{key:0,item:s.item,class:d(n.getItemIconClass(s))},null,8,["item","class"])):n.getItemProp(s,"icon")?(r(),o("span",{key:1,class:d(n.getItemIconClass(s))},null,2)):I("",!0),v("span",j,E(n.getItemLabel(s)),1),n.isItemGroup(s)?(r(),o(b,{key:2},[i.templates.submenuicon?(r(),y(x(i.templates.submenuicon),{key:0,active:n.isItemActive(s),class:"p-submenu-icon"},null,8,["active"])):(r(),y(x(i.horizontal?"AngleDownIcon":"AngleRightIcon"),{key:1,class:"p-submenu-icon"}))],64)):I("",!0)],10,H)),[[f]])],64))],40,T),n.isItemVisible(s)&&n.isItemGroup(s)?(r(),o("div",q,[v("div",W,[(r(!0),o(b,null,K(s.items,h=>(r(),o("div",{key:n.getItemKey(h),class:d(n.getColumnClass(s))},[(r(!0),o(b,null,K(h,p=>(r(),y(c,{key:n.getSubListKey(p),id:n.getSubListId(p),role:"menu",class:"p-submenu-list p-megamenu-submenu",menuId:i.menuId,focusedItemId:i.focusedItemId,submenu:p,items:p.items,templates:i.templates,exact:i.exact,level:i.level+1,onItemClick:t[0]||(t[0]=k=>e.$emit("item-click",k)),onItemMouseenter:t[1]||(t[1]=k=>e.$emit("item-mouseenter",k))},null,8,["id","menuId","focusedItemId","submenu","items","templates","exact","level"]))),128))],2))),128))])])):I("",!0)],14,B)):I("",!0),n.isItemVisible(s)&&n.getItemProp(s,"separator")?(r(),o("li",{key:1,id:n.getItemId(s),style:L(n.getItemProp(s,"style")),class:d(n.getSeparatorItemClass(s)),role:"separator"},null,14,J)):I("",!0)],64))),128))])}V.render=Q;var X={name:"MegaMenu",emits:["focus","blur"],props:{model:{type:Array,default:null},orientation:{type:String,default:"horizontal"},exact:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},outsideClickListener:null,resizeListener:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data(){return{id:this.$attrs.id,focused:!1,focusedItemInfo:{index:-1,key:"",parentKey:""},activeItem:null,dirty:!1}},watch:{"$attrs.id":function(e){this.id=e||w()},activeItem(e){l.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted(){this.id=this.id||w()},beforeUnmount(){this.unbindOutsideClickListener(),this.unbindResizeListener()},methods:{getItemProp(e,t){return e?l.getItemValue(e[t]):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemGroup(e){return l.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator(e){return this.getItemProp(e,"separator")},getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup(e){return e&&l.isNotEmpty(e.items)},hide(e,t){this.activeItem=null,this.focusedItemInfo={index:-1,key:"",parentKey:""},t&&g.focus(this.menubar),this.dirty=!1},onFocus(e){if(this.focused=!0,this.focusedItemInfo.index===-1){const t=this.findFirstFocusedItemIndex(),i=this.findVisibleItem(t);this.focusedItemInfo={index:t,key:i.key,parentKey:i.parentKey}}this.$emit("focus",e)},onBlur(e){this.focused=!1,this.focusedItemInfo={index:-1,key:"",parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown(e){if(this.disabled){e.preventDefault();return}const t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&l.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange(e){const{processedItem:t,isFocus:i}=e;if(l.isEmpty(t))return;const{index:m,key:a,parentKey:n,items:u}=t,c=l.isNotEmpty(u);c&&(this.activeItem=t),this.focusedItemInfo={index:m,key:a,parentKey:n},c&&(this.dirty=!0),i&&g.focus(this.menubar)},onItemClick(e){const{originalEvent:t,processedItem:i}=e,m=this.isProccessedItemGroup(i),a=l.isEmpty(i.parent);if(this.isSelected(i)){const{index:u,key:c,parentKey:f}=i;this.activeItem=null,this.focusedItemInfo={index:u,key:c,parentKey:f},this.dirty=!a,g.focus(this.menubar)}else if(m)this.onItemChange(e);else{const u=a?i:this.activeItem;this.hide(t),this.changeFocusedItemInfo(t,u?u.index:-1),g.focus(this.menubar)}},onItemMouseEnter(e){this.dirty&&this.onItemChange(e)},onArrowDownKey(e){if(this.horizontal)if(l.isNotEmpty(this.activeItem)&&this.activeItem.key===this.focusedItemInfo.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{const i=this.findVisibleItem(this.focusedItemInfo.index);this.isProccessedItemGroup(i)&&(this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo={index:-1,key:i.key,parentKey:i.parentKey},this.searchValue="")}const t=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,t),e.preventDefault()},onArrowUpKey(e){if(e.altKey&&this.horizontal){if(this.focusedItemInfo.index!==-1){const t=this.findVisibleItem(this.focusedItemInfo.index);!this.isProccessedItemGroup(t)&&l.isNotEmpty(this.activeItem)&&(this.focusedItemInfo.index===0?(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null):this.changeFocusedItemInfo(e,this.findFirstItemIndex()))}e.preventDefault()}else{const t=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,t),e.preventDefault()}},onArrowLeftKey(e){const t=this.findVisibleItem(this.focusedItemInfo.index);if(this.isProccessedItemGroup(t)){if(this.horizontal){const m=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,m)}}else{this.vertical&&l.isNotEmpty(this.activeItem)&&t.columnIndex===0&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null);const m=t.columnIndex-1,a=this.visibleItems.findIndex(n=>n.columnIndex===m);a!==-1&&this.changeFocusedItemInfo(e,a)}e.preventDefault()},onArrowRightKey(e){const t=this.findVisibleItem(this.focusedItemInfo.index);if(this.isProccessedItemGroup(t)){if(this.vertical)if(l.isNotEmpty(this.activeItem)&&this.activeItem.key===t.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{const a=this.findVisibleItem(this.focusedItemInfo.index);this.isProccessedItemGroup(a)&&(this.onItemChange({originalEvent:e,processedItem:a}),this.focusedItemInfo={index:-1,key:a.key,parentKey:a.parentKey},this.searchValue="")}const m=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,m)}else{const m=t.columnIndex+1,a=this.visibleItems.findIndex(n=>n.columnIndex===m);a!==-1&&this.changeFocusedItemInfo(e,a)}e.preventDefault()},onHomeKey(e){this.changeFocusedItemInfo(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey(e){this.changeFocusedItemInfo(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey(e){if(this.focusedItemInfo.index!==-1){const t=g.findSingle(this.menubar,`li[id="${`${this.focusedItemId}`}"]`),i=t&&g.findSingle(t,".p-menuitem-link");i?i.click():t&&t.click();const m=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(m)&&this.changeFocusedItemInfo(e,this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey(e){this.onEnterKey(e)},onEscapeKey(e){l.isNotEmpty(this.activeItem)&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key},this.activeItem=null),e.preventDefault()},onTabKey(e){if(this.focusedItemInfo.index!==-1){const t=this.findVisibleItem(this.focusedItemInfo.index);!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{const t=this.container&&!this.container.contains(e.target),i=this.popup?!(this.target&&(this.target===e.target||this.target.contains(e.target))):!0;t&&i&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener(){this.resizeListener||(this.resizeListener=e=>{g.isTouchDevice()||this.hide(e,!0)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())},isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)},isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected(e){return l.isNotEmpty(this.activeItem)?this.activeItem.key===e.key:!1},findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))},findLastItemIndex(){return l.findLastIndex(this.visibleItems,e=>this.isValidItem(e))},findNextItemIndex(e){const t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(i=>this.isValidItem(i)):-1;return t>-1?t+e+1:e},findPrevItemIndex(e){const t=e>0?l.findLastIndex(this.visibleItems.slice(0,e),i=>this.isValidItem(i)):-1;return t>-1?t:e},findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))},findFirstFocusedItemIndex(){const e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex(){const e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},findVisibleItem(e){return l.isNotEmpty(this.visibleItems)?this.visibleItems[e]:null},searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let i=-1,m=!1;return this.focusedItemInfo.index!==-1?(i=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(a=>this.isItemMatched(a)),i=i===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(a=>this.isItemMatched(a)):i+this.focusedItemInfo.index):i=this.visibleItems.findIndex(a=>this.isItemMatched(a)),i!==-1&&(m=!0),i===-1&&this.focusedItemInfo.index===-1&&(i=this.findFirstFocusedItemIndex()),i!==-1&&this.changeFocusedItemInfo(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),m},changeFocusedItemInfo(e,t){const i=this.findVisibleItem(t);this.focusedItemInfo.index=t,this.focusedItemInfo.key=l.isNotEmpty(i)?i.key:"",this.scrollInView()},scrollInView(e=-1){const t=e!==-1?`${this.id}_${e}`:this.focusedItemId,i=g.findSingle(this.menubar,`li[id="${t}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems(e,t=0,i={},m="",a){const n=[];return e&&e.forEach((u,c)=>{const f=(m!==""?m+"_":"")+(a!==void 0?a+"_":"")+c,s={item:u,index:c,level:t,key:f,parent:i,parentKey:m,columnIndex:a!==void 0?a:i.columnIndex!==void 0?i.columnIndex:c};s.items=t===0&&u.items&&u.items.length>0?u.items.map((C,h)=>this.createProcessedItems(C,t+1,s,f,h)):this.createProcessedItems(u.items,t+1,s,f),n.push(s)}),n},containerRef(e){this.container=e},menubarRef(e){this.menubar=e?e.$el:void 0}},computed:{containerClass(){return["p-megamenu p-component",{"p-megamenu-horizontal":this.horizontal,"p-megamenu-vertical":this.vertical}]},processedItems(){return this.createProcessedItems(this.model||[])},visibleItems(){const e=l.isNotEmpty(this.activeItem)?this.activeItem:null;return e&&e.key===this.focusedItemInfo.parentKey?e.items.reduce((t,i)=>(i.forEach(m=>{m.items.forEach(a=>{t.push(a)})}),t),[]):this.processedItems},horizontal(){return this.orientation==="horizontal"},vertical(){return this.orientation==="vertical"},focusedItemId(){return l.isNotEmpty(this.focusedItemInfo.key)?`${this.id}_${this.focusedItemInfo.key}`:null}},components:{MegaMenuSub:V}};const Y=["id"],Z={key:0,class:"p-megamenu-start"},$={key:1,class:"p-megamenu-end"};function ee(e,t,i,m,a,n){const u=P("MegaMenuSub");return r(),o("div",{ref:n.containerRef,id:a.id,class:d(n.containerClass)},[e.$slots.start?(r(),o("div",Z,[F(e.$slots,"start")])):I("",!0),N(u,{ref:n.menubarRef,id:a.id+"_list",class:"p-megamenu-root-list",tabindex:i.disabled?-1:i.tabindex,role:"menubar","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-disabled":i.disabled||void 0,"aria-orientation":i.orientation,"aria-activedescendant":a.focused?n.focusedItemId:void 0,menuId:a.id,focusedItemId:a.focused?n.focusedItemId:void 0,items:n.processedItems,horizontal:n.horizontal,templates:e.$slots,activeItem:a.activeItem,exact:i.exact,level:0,onFocus:n.onFocus,onBlur:n.onBlur,onKeydown:n.onKeyDown,onItemClick:n.onItemClick,onItemMouseenter:n.onItemMouseEnter},null,8,["id","tabindex","aria-label","aria-labelledby","aria-disabled","aria-orientation","aria-activedescendant","menuId","focusedItemId","items","horizontal","templates","activeItem","exact","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),e.$slots.end?(r(),o("div",$,[F(e.$slots,"end")])):I("",!0)],10,Y)}function te(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document>"u")){var m=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",i==="top"&&m.firstChild?m.insertBefore(a,m.firstChild):m.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var ie=`
.p-megamenu {
    display: flex;
}
.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-megamenu-root-list > .p-menuitem {
    position: relative;
}
.p-megamenu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
.p-megamenu .p-menuitem-text {
    line-height: 1;
}
.p-megamenu-panel {
    display: none;
    position: absolute;
    width: auto;
    z-index: 1;
}
.p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
    display: block;
}
.p-megamenu-submenu {
    margin: 0;
    padding: 0;
    list-style: none;
}

/* Horizontal */
.p-megamenu-horizontal {
    align-items: center;
}
.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.p-megamenu-horizontal .p-megamenu-end {
    margin-left: auto;
    align-self: center;
}

/* Vertical */
.p-megamenu-vertical {
    flex-direction: column;
}
.p-megamenu-vertical .p-megamenu-root-list {
    flex-direction: column;
}
.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
    left: 100%;
    top: 0;
}
.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem > .p-menuitem-content > .p-menuitem-link > .p-submenu-icon {
    margin-left: auto;
}
.p-megamenu-grid {
    display: flex;
}
.p-megamenu-col-2,
.p-megamenu-col-3,
.p-megamenu-col-4,
.p-megamenu-col-6,
.p-megamenu-col-12 {
    flex: 0 0 auto;
    padding: 0.5rem;
}
.p-megamenu-col-2 {
    width: 16.6667%;
}
.p-megamenu-col-3 {
    width: 25%;
}
.p-megamenu-col-4 {
    width: 33.3333%;
}
.p-megamenu-col-6 {
    width: 50%;
}
.p-megamenu-col-12 {
    width: 100%;
}
`;te(ie);X.render=ee;export{X as default};