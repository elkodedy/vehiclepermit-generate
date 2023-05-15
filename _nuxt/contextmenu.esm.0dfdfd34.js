import{U as P,O as u,Z as L,D as l,q as T,R as O,z as y,A as R,o,g as f,w as k,b as d,F as x,i as B,G as E,B as b,j as C,l as w,r as v,k as g,t as K,T as S,e as A,m as N}from"./entry.33a98e6d.js";import{s as G}from"./index.esm.2cd605ec.js";import"./entry.020dcd79.js";var D={name:"ContextMenuSub",emits:["item-click","item-mouseenter"],props:{items:{type:Array,default:null},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},root:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},exact:{type:Boolean,default:!0},activeItemPath:{type:Object,default:null}},methods:{getItemId(e){return`${this.menuId}_${e.key}`},getItemKey(e){return this.getItemId(e)},getItemProp(e,t,n){return e&&e.item?u.getItemValue(e.item[t],n):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemActive(e){return this.activeItemPath.some(t=>t.key===e.key)},isItemVisible(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemFocused(e){return this.focusedItemId===this.getItemId(e)},isItemGroup(e){return u.isNotEmpty(e.items)},onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemActionClick(e,t){t&&t(e)},getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length},getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1},onEnter(){this.position()},position(){const e=this.$refs.container.parentElement,t=l.getOffset(this.$refs.container.parentElement),n=l.getViewport(),r=this.$refs.container.offsetParent?this.$refs.container.offsetWidth:l.getHiddenElementOuterWidth(this.$refs.container),a=l.getOuterWidth(e.children[0]);this.$refs.container.style.top="0px",parseInt(t.left,10)+a+r>n.width-l.calculateScrollbarWidth()?this.$refs.container.style.left=-1*r+"px":this.$refs.container.style.left=a+"px"},getItemClass(e){return["p-menuitem",this.getItemProp(e,"class"),{"p-menuitem-active p-highlight":this.isItemActive(e),"p-focus":this.isItemFocused(e),"p-disabled":this.isItemDisabled(e)}]},getItemActionClass(e,t){return["p-menuitem-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},getItemIconClass(e){return["p-menuitem-icon",this.getItemProp(e,"icon")]},getSeparatorItemClass(e){return["p-menuitem-separator",this.getItemProp(e,"class")]}},components:{AngleRightIcon:G},directives:{ripple:O}};const W={key:0,ref:"container"},H=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset"],U=["onClick","onMouseenter"],Z=["href","onClick"],j={class:"p-menuitem-text"},X=["href","target"],Y={class:"p-menuitem-text"},q=["id"];function J(e,t,n,r,a,i){const c=y("router-link"),m=y("AngleRightIcon"),h=y("ContextMenuSub",!0),p=R("ripple");return o(),f(S,{name:"p-contextmenusub",onEnter:i.onEnter},{default:k(()=>[n.root||n.visible?(o(),d("ul",W,[(o(!0),d(x,null,B(n.items,(s,V)=>(o(),d(x,{key:i.getItemKey(s)},[i.isItemVisible(s)&&!i.getItemProp(s,"separator")?(o(),d("li",{key:0,id:i.getItemId(s),style:E(i.getItemProp(s,"style")),class:b(i.getItemClass(s)),role:"menuitem","aria-label":i.getItemLabel(s),"aria-disabled":i.isItemDisabled(s)||void 0,"aria-expanded":i.isItemGroup(s)?i.isItemActive(s):void 0,"aria-haspopup":i.isItemGroup(s)&&!i.getItemProp(s,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(V)},[C("div",{class:"p-menuitem-content",onClick:I=>i.onItemClick(I,s),onMouseenter:I=>i.onItemMouseEnter(I,s)},[n.templates.item?(o(),f(v(n.templates.item),{key:1,item:s.item},null,8,["item"])):(o(),d(x,{key:0},[i.getItemProp(s,"to")&&!i.isItemDisabled(s)?(o(),f(c,{key:0,to:i.getItemProp(s,"to"),custom:""},{default:k(({navigate:I,href:M,isActive:_,isExactActive:F})=>[w((o(),d("a",{href:M,class:b(i.getItemActionClass(s,{isActive:_,isExactActive:F})),tabindex:"-1","aria-hidden":"true",onClick:z=>i.onItemActionClick(z,I)},[n.templates.itemicon?(o(),f(v(n.templates.itemicon),{key:0,item:s.item,class:b(i.getItemIconClass(s))},null,8,["item","class"])):i.getItemProp(s,"icon")?(o(),d("span",{key:1,class:b(i.getItemIconClass(s))},null,2)):g("",!0),C("span",j,K(i.getItemLabel(s)),1)],10,Z)),[[p]])]),_:2},1032,["to"])):w((o(),d("a",{key:1,href:i.getItemProp(s,"url"),class:b(i.getItemActionClass(s)),target:i.getItemProp(s,"target"),tabindex:"-1","aria-hidden":"true"},[n.templates.itemicon?(o(),f(v(n.templates.itemicon),{key:0,item:s.item,class:b(i.getItemIconClass(s))},null,8,["item","class"])):i.getItemProp(s,"icon")?(o(),d("span",{key:1,class:b(i.getItemIconClass(s))},null,2)):g("",!0),C("span",Y,K(i.getItemLabel(s)),1),i.getItemProp(s,"items")?(o(),d(x,{key:2},[n.templates.submenuicon?(o(),f(v(n.templates.submenuicon),{key:0,active:i.isItemActive(s),class:"p-submenu-icon"},null,8,["active"])):(o(),f(m,{key:1,class:"p-submenu-icon"}))],64)):g("",!0)],10,X)),[[p]])],64))],40,U),i.isItemVisible(s)&&i.isItemGroup(s)?(o(),f(h,{key:0,id:i.getItemId(s)+"_list",role:"menu",class:"p-submenu-list",menuId:n.menuId,focusedItemId:n.focusedItemId,items:s.items,templates:n.templates,activeItemPath:n.activeItemPath,exact:n.exact,level:n.level+1,visible:i.isItemActive(s)&&i.isItemGroup(s),onItemClick:t[0]||(t[0]=I=>e.$emit("item-click",I)),onItemMouseenter:t[1]||(t[1]=I=>e.$emit("item-mouseenter",I))},null,8,["id","menuId","focusedItemId","items","templates","activeItemPath","exact","level","visible"])):g("",!0)],14,H)):g("",!0),i.isItemVisible(s)&&i.getItemProp(s,"separator")?(o(),d("li",{key:1,id:i.getItemId(s),style:E(i.getItemProp(s,"style")),class:b(i.getSeparatorItemClass(s)),role:"separator"},null,14,q)):g("",!0)],64))),128))],512)):g("",!0)]),_:1},8,["onEnter"])}D.render=J;var Q={name:"ContextMenu",inheritAttrs:!1,emits:["focus","blur","show","hide"],props:{model:{type:Array,default:null},appendTo:{type:String,default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},global:{type:Boolean,default:!1},exact:{type:Boolean,default:!0},tabindex:{type:Number,default:0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},target:null,outsideClickListener:null,resizeListener:null,documentContextMenuListener:null,pageX:null,pageY:null,container:null,list:null,data(){return{id:this.$attrs.id,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!1,submenuVisible:!1}},watch:{"$attrs.id":function(e){this.id=e||P()},activeItemPath(e){u.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener(),this.bindDocumentContextMenuListener()):this.visible||(this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindDocumentContextMenuListener())}},beforeUnmount(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.unbindDocumentContextMenuListener(),this.container&&this.autoZIndex&&L.clear(this.container),this.target=null,this.container=null},mounted(){this.id=this.id||P(),this.global&&this.bindDocumentContextMenuListener()},methods:{getItemProp(e,t){return e?u.getItemValue(e[t]):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemGroup(e){return u.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator(e){return this.getItemProp(e,"separator")},getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup(e){return e&&u.isNotEmpty(e.items)},toggle(e){this.visible?this.hide():this.show(e)},show(e){this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},l.focus(this.list),this.pageX=e.pageX,this.pageY=e.pageY,this.visible?this.position():this.visible=!0,e.stopPropagation(),e.preventDefault()},hide(){this.visible=!1,this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""}},onFocus(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:-1,level:0,parentKey:""},this.$emit("focus",e)},onBlur(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",e)},onKeyDown(e){const t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&u.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange(e){const{processedItem:t,isFocus:n}=e;if(u.isEmpty(t))return;const{index:r,key:a,level:i,parentKey:c,items:m}=t,h=u.isNotEmpty(m),p=this.activeItemPath.filter(s=>s.parentKey!==c&&s.parentKey!==a);h&&(p.push(t),this.submenuVisible=!0),this.focusedItemInfo={index:r,level:i,parentKey:c},this.activeItemPath=p,n&&l.focus(this.list)},onItemClick(e){const{processedItem:t}=e,n=this.isProccessedItemGroup(t);if(this.isSelected(t)){const{index:a,key:i,level:c,parentKey:m}=t;this.activeItemPath=this.activeItemPath.filter(h=>i!==h.key&&i.startsWith(h.key)),this.focusedItemInfo={index:a,level:c,parentKey:m},l.focus(this.list)}else n?this.onItemChange(e):this.hide()},onItemMouseEnter(e){this.onItemChange(e)},onArrowDownKey(e){const t=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,t),e.preventDefault()},onArrowUpKey(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){const t=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.popup&&this.hide(),e.preventDefault()}else{const t=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,t),e.preventDefault()}},onArrowLeftKey(e){const t=this.visibleItems[this.focusedItemInfo.index],n=this.activeItemPath.find(a=>a.key===t.parentKey);u.isEmpty(t.parent)||(this.focusedItemInfo={index:-1,parentKey:n?n.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(a=>a.parentKey!==this.focusedItemInfo.parentKey),e.preventDefault()},onArrowRightKey(e){const t=this.visibleItems[this.focusedItemInfo.index];this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey(e){if(this.focusedItemInfo.index!==-1){const t=l.findSingle(this.list,`li[id="${`${this.focusedItemId}`}"]`),n=t&&l.findSingle(t,".p-menuitem-link");n?n.click():t&&t.click();const r=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(r)&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey(e){this.onEnterKey(e)},onEscapeKey(e){this.hide(),!this.popup&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex()),e.preventDefault()},onTabKey(e){if(this.focusedItemInfo.index!==-1){const t=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},onEnter(e){this.position(),this.autoZIndex&&L.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu)},onAfterEnter(){this.bindOutsideClickListener(),this.bindResizeListener(),this.bindDocumentContextMenuListener(),this.$emit("show"),l.focus(this.list)},onLeave(){this.$emit("hide"),this.container=null},onAfterLeave(e){this.autoZIndex&&L.clear(e),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindDocumentContextMenuListener()},position(){let e=this.pageX+1,t=this.pageY+1,n=this.container.offsetParent?this.container.offsetWidth:l.getHiddenElementOuterWidth(this.container),r=this.container.offsetParent?this.container.offsetHeight:l.getHiddenElementOuterHeight(this.container),a=l.getViewport();e+n-document.body.scrollLeft>a.width&&(e-=n),t+r-document.body.scrollTop>a.height&&(t-=r),e<document.body.scrollLeft&&(e=document.body.scrollLeft),t<document.body.scrollTop&&(t=document.body.scrollTop),this.container.style.left=e+"px",this.container.style.top=t+"px"},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{const t=this.container&&!this.container.contains(e.target),n=this.visible?!(this.target&&(this.target===e.target||this.target.contains(e.target))):!0;t&&n&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.visible&&!l.isTouchDevice()&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindDocumentContextMenuListener(){this.documentContextMenuListener||(this.documentContextMenuListener=e=>{e.button!==2?this.show(e):this.hide()},document.addEventListener("contextmenu",this.documentContextMenuListener))},unbindDocumentContextMenuListener(){this.documentContextMenuListener&&(document.removeEventListener("contextmenu",this.documentContextMenuListener),this.documentContextMenuListener=null)},isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())},isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)},isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected(e){return this.activeItemPath.some(t=>t.key===e.key)},findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))},findLastItemIndex(){return u.findLastIndex(this.visibleItems,e=>this.isValidItem(e))},findNextItemIndex(e){const t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(n=>this.isValidItem(n)):-1;return t>-1?t+e+1:e},findPrevItemIndex(e){const t=e>0?u.findLastIndex(this.visibleItems.slice(0,e),n=>this.isValidItem(n)):-1;return t>-1?t:e},findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))},findFirstFocusedItemIndex(){const e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex(){const e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let n=-1,r=!1;return this.focusedItemInfo.index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(a=>this.isItemMatched(a)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(a=>this.isItemMatched(a)):n+this.focusedItemInfo.index):n=this.visibleItems.findIndex(a=>this.isItemMatched(a)),n!==-1&&(r=!0),n===-1&&this.focusedItemInfo.index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemIndex(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r},changeFocusedItemIndex(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView(e=-1){const t=e!==-1?`${this.id}_${e}`:this.focusedItemId,n=l.findSingle(this.list,`li[id="${t}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems(e,t=0,n={},r=""){const a=[];return e&&e.forEach((i,c)=>{const m=(r!==""?r+"_":"")+c,h={item:i,index:c,level:t,key:m,parent:n,parentKey:r};h.items=this.createProcessedItems(i.items,t+1,h,m),a.push(h)}),a},containerRef(e){this.container=e},listRef(e){this.list=e?e.$el:void 0}},computed:{containerClass(){return["p-contextmenu p-component",{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},processedItems(){return this.createProcessedItems(this.model||[])},visibleItems(){const e=this.activeItemPath.find(t=>t.key===this.focusedItemInfo.parentKey);return e?e.items:this.processedItems},focusedItemId(){return this.focusedItemInfo.index!==-1?`${this.id}${u.isNotEmpty(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:""}_${this.focusedItemInfo.index}`:null}},components:{ContextMenuSub:D,Portal:T}};function $(e,t,n,r,a,i){const c=y("ContextMenuSub"),m=y("Portal");return o(),f(m,{appendTo:n.appendTo},{default:k(()=>[A(S,{name:"p-contextmenu",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},{default:k(()=>[a.visible?(o(),d("div",N({key:0,ref:i.containerRef,class:i.containerClass},e.$attrs),[A(c,{ref:i.listRef,id:a.id+"_list",class:"p-contextmenu-root-list",role:"menubar",root:!0,tabindex:n.tabindex,"aria-orientation":"vertical","aria-activedescendant":a.focused?i.focusedItemId:void 0,menuId:a.id,focusedItemId:a.focused?i.focusedItemId:void 0,items:i.processedItems,templates:e.$slots,activeItemPath:a.activeItemPath,exact:n.exact,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,level:0,visible:a.submenuVisible,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter},null,8,["id","tabindex","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","exact","aria-labelledby","aria-label","visible","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"])],16)):g("",!0)]),_:1},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]),_:1},8,["appendTo"])}function ee(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var te=`
.p-contextmenu {
    position: absolute;
}
.p-contextmenu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-contextmenu .p-submenu-list {
    position: absolute;
    min-width: 100%;
    z-index: 1;
}
.p-contextmenu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
.p-contextmenu .p-menuitem-text {
    line-height: 1;
}
.p-contextmenu .p-menuitem {
    position: relative;
}
.p-contextmenu .p-menuitem-link .p-submenu-icon {
    margin-left: auto;
}
.p-contextmenu-enter-from {
    opacity: 0;
}
.p-contextmenu-enter-active {
    transition: opacity 250ms;
}
`;ee(te);Q.render=$;export{Q as default};