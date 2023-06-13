import{U as I,D as a,s as D,R as O,Y as S,z as A,A as v,o as c,b as u,j as w,n as k,e as N,w as P,g as f,r as m,B as p,F as b,i as B,G as y,l as L,k as g}from"./entry.b9153a06.js";import{s as E}from"./index.esm.55f9558b.js";import"./entry.7291cd7f.js";var _={name:"SpeedDial",emits:["click","show","hide","focus","blur"],props:{model:null,visible:{type:Boolean,default:!1},direction:{type:String,default:"up"},transitionDelay:{type:Number,default:30},type:{type:String,default:"linear"},radius:{type:Number,default:0},mask:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},hideOnClickOutside:{type:Boolean,default:!0},buttonClass:null,maskStyle:null,maskClass:null,showIcon:{type:String,default:void 0},hideIcon:{type:String,default:void 0},rotateAnimation:{type:Boolean,default:!0},tooltipOptions:null,style:null,class:null,"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},documentClickListener:null,container:null,list:null,data(){return{id:this.$attrs.id,d_visible:this.visible,isItemClicked:!1,focused:!1,focusedOptionIndex:-1}},watch:{"$attrs.id":function(e){this.id=e||I()},visible(e){this.d_visible=e}},mounted(){if(this.id=this.id||I(),this.type!=="linear"){const e=a.findSingle(this.container,".p-speeddial-button"),t=a.findSingle(this.list,".p-speeddial-item");if(e&&t){const i=Math.abs(e.offsetWidth-t.offsetWidth),l=Math.abs(e.offsetHeight-t.offsetHeight);this.list.style.setProperty("--item-diff-x",`${i/2}px`),this.list.style.setProperty("--item-diff-y",`${l/2}px`)}}this.hideOnClickOutside&&this.bindDocumentClickListener()},beforeMount(){this.unbindDocumentClickListener()},methods:{onFocus(e){this.focused=!0,this.$emit("focus",e)},onBlur(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onItemClick(e,t){t.command&&t.command({originalEvent:e,item:t}),this.hide(),this.isItemClicked=!0,e.preventDefault()},onClick(e){this.d_visible?this.hide():this.show(),this.isItemClicked=!0,this.$emit("click",e)},show(){this.d_visible=!0,this.$emit("show")},hide(){this.d_visible=!1,this.$emit("hide")},calculateTransitionDelay(e){const t=this.model.length;return(this.d_visible?e:t-e-1)*this.transitionDelay},onTogglerKeydown(e){switch(e.code){case"ArrowDown":case"ArrowLeft":this.onTogglerArrowDown(e);break;case"ArrowUp":case"ArrowRight":this.onTogglerArrowUp(e);break;case"Escape":this.onEscapeKey();break}},onKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDown(e);break;case"ArrowUp":this.onArrowUp(e);break;case"ArrowLeft":this.onArrowLeft(e);break;case"ArrowRight":this.onArrowRight(e);break;case"Enter":case"Space":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break}},onTogglerArrowUp(e){this.focused=!0,a.focus(this.list),this.show(),this.navigatePrevItem(e),e.preventDefault()},onTogglerArrowDown(e){this.focused=!0,a.focus(this.list),this.show(),this.navigateNextItem(e),e.preventDefault()},onEnterKey(e){const i=[...a.find(this.container,".p-speeddial-item")].findIndex(n=>n.id===this.focusedOptionIndex);this.onItemClick(e,this.model[i]),this.onBlur(e);const l=a.findSingle(this.container,"button");l&&a.focus(l)},onEscapeKey(){this.hide();const e=a.findSingle(this.container,"button");e&&a.focus(e)},onArrowUp(e){this.direction==="up"?this.navigateNextItem(e):this.direction==="down"?this.navigatePrevItem(e):this.navigateNextItem(e)},onArrowDown(e){this.direction==="up"?this.navigatePrevItem(e):this.direction==="down"?this.navigateNextItem(e):this.navigatePrevItem(e)},onArrowLeft(e){const t=["left","up-right","down-left"],i=["right","up-left","down-right"];t.includes(this.direction)?this.navigateNextItem(e):i.includes(this.direction)?this.navigatePrevItem(e):this.navigatePrevItem(e)},onArrowRight(e){const t=["left","up-right","down-left"],i=["right","up-left","down-right"];t.includes(this.direction)?this.navigatePrevItem(e):i.includes(this.direction)?this.navigateNextItem(e):this.navigateNextItem(e)},onEndKey(e){e.preventDefault(),this.focusedOptionIndex=-1,this.navigatePrevItem(e)},onHomeKey(e){e.preventDefault(),this.focusedOptionIndex=-1,this.navigateNextItem(e)},navigateNextItem(e){const t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()},navigatePrevItem(e){const t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()},changeFocusedOptionIndex(e){const i=[...a.find(this.container,".p-speeddial-item")].filter(l=>!a.hasClass(a.findSingle(l,"a"),"p-disabled"));i[e]&&(this.focusedOptionIndex=i[e].getAttribute("id"))},findPrevOptionIndex(e){const i=[...a.find(this.container,".p-speeddial-item")].filter(s=>!a.hasClass(a.findSingle(s,"a"),"p-disabled")),l=e===-1?i[i.length-1].id:e;let n=i.findIndex(s=>s.getAttribute("id")===l);return n=e===-1?i.length-1:n-1,n},findNextOptionIndex(e){const i=[...a.find(this.container,".p-speeddial-item")].filter(s=>!a.hasClass(a.findSingle(s,"a"),"p-disabled")),l=e===-1?i[0].id:e;let n=i.findIndex(s=>s.getAttribute("id")===l);return n=e===-1?0:n+1,n},calculatePointStyle(e){const t=this.type;if(t!=="linear"){const i=this.model.length,l=this.radius||i*20;if(t==="circle"){const n=2*Math.PI/i;return{left:`calc(${l*Math.cos(n*e)}px + var(--item-diff-x, 0px))`,top:`calc(${l*Math.sin(n*e)}px + var(--item-diff-y, 0px))`}}else if(t==="semi-circle"){const n=this.direction,s=Math.PI/(i-1),d=`calc(${l*Math.cos(s*e)}px + var(--item-diff-x, 0px))`,r=`calc(${l*Math.sin(s*e)}px + var(--item-diff-y, 0px))`;if(n==="up")return{left:d,bottom:r};if(n==="down")return{left:d,top:r};if(n==="left")return{right:r,top:d};if(n==="right")return{left:r,top:d}}else if(t==="quarter-circle"){const n=this.direction,s=Math.PI/(2*(i-1)),d=`calc(${l*Math.cos(s*e)}px + var(--item-diff-x, 0px))`,r=`calc(${l*Math.sin(s*e)}px + var(--item-diff-y, 0px))`;if(n==="up-left")return{right:d,bottom:r};if(n==="up-right")return{left:d,bottom:r};if(n==="down-left")return{right:r,top:d};if(n==="down-right")return{left:r,top:d}}}return{}},getItemStyle(e){const t=this.calculateTransitionDelay(e),i=this.calculatePointStyle(e);return{transitionDelay:`${t}ms`,...i}},bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=e=>{this.d_visible&&this.isOutsideClicked(e)&&this.hide(),this.isItemClicked=!1},document.addEventListener("click",this.documentClickListener))},unbindDocumentClickListener(){this.documentClickListener&&(document.removeEventListener("click",this.documentClickListener),this.documentClickListener=null)},isOutsideClicked(e){return this.container&&!(this.container.isSameNode(e.target)||this.container.contains(e.target)||this.isItemClicked)},isItemVisible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},containerRef(e){this.container=e},listRef(e){this.list=e},itemClass(e){return[{"p-focus":e===this.focusedOptionId}]}},computed:{containerClass(){return[`p-speeddial p-component p-speeddial-${this.type}`,{[`p-speeddial-direction-${this.direction}`]:this.type!=="circle","p-speeddial-opened":this.d_visible,"p-disabled":this.disabled},this.class]},buttonClassName(){return["p-speeddial-button p-button-rounded",{"p-speeddial-rotate":this.rotateAnimation&&!this.hideIcon},this.buttonClass]},maskClassName(){return["p-speeddial-mask",{"p-speeddial-mask-visible":this.d_visible},this.maskClass]},focusedOptionId(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{SDButton:D,PlusIcon:E},directives:{ripple:O,tooltip:S}};const K=["id","aria-activedescendant"],M=["id","aria-controls"],T=["href","target","onClick","aria-label"];function z(e,t,i,l,n,s){const d=A("SDButton"),r=v("tooltip"),x=v("ripple");return c(),u(b,null,[w("div",{ref:s.containerRef,class:p(s.containerClass),style:y(i.style)},[k(e.$slots,"button",{toggle:s.onClick},()=>[N(d,{type:"button",class:p(s.buttonClassName),onClick:t[0]||(t[0]=o=>s.onClick(o)),disabled:i.disabled,onKeydown:s.onTogglerKeydown,"aria-expanded":n.d_visible,"aria-haspopup":!0,"aria-controls":n.id+"_list","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby},{icon:P(()=>[k(e.$slots,"icon",{visible:n.d_visible},()=>[n.d_visible&&i.hideIcon?(c(),f(m(i.hideIcon?"span":"PlusIcon"),{key:0,class:p(i.hideIcon)},null,8,["class"])):(c(),f(m(i.showIcon?"span":"PlusIcon"),{key:1,class:p(i.showIcon)},null,8,["class"]))])]),_:3},8,["class","disabled","onKeydown","aria-expanded","aria-controls","aria-label","aria-labelledby"])]),w("ul",{ref:s.listRef,id:n.id+"_list",class:"p-speeddial-list",role:"menu",onFocus:t[1]||(t[1]=(...o)=>s.onFocus&&s.onFocus(...o)),onBlur:t[2]||(t[2]=(...o)=>s.onBlur&&s.onBlur(...o)),onKeydown:t[3]||(t[3]=(...o)=>s.onKeyDown&&s.onKeyDown(...o)),"aria-activedescendant":n.focused?s.focusedOptionId:void 0,tabindex:"-1"},[(c(!0),u(b,null,B(i.model,(o,h)=>(c(),u(b,{key:h},[s.isItemVisible(o)?(c(),u("li",{key:0,id:`${n.id}_${h}`,"aria-controls":`${n.id}_item`,class:p(["p-speeddial-item",s.itemClass(`${n.id}_${h}`)]),style:y(s.getItemStyle(h)),role:"menuitem"},[e.$slots.item?(c(),f(m(e.$slots.item),{key:1,item:o},null,8,["item"])):L((c(),u("a",{key:0,tabindex:-1,href:o.url||"#",role:"menuitem",class:p(["p-speeddial-action",{"p-disabled":o.disabled}]),target:o.target,onClick:C=>s.onItemClick(C,o),"aria-label":o.label},[o.icon?(c(),u("span",{key:0,class:p(["p-speeddial-action-icon",o.icon])},null,2)):g("",!0)],10,T)),[[r,{value:o.label,disabled:!i.tooltipOptions},i.tooltipOptions],[x]])],14,M)):g("",!0)],64))),128))],40,K)],6),i.mask?(c(),u("div",{key:0,class:p(s.maskClassName),style:y(i.maskStyle)},null,6)):g("",!0)],64)}function R(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",i==="top"&&l.firstChild?l.insertBefore(n,l.firstChild):l.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var F=`
.p-speeddial {
    position: absolute;
    display: flex;
}
.p-speeddial-button {
    z-index: 1;
}
.p-speeddial-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: top 0s linear 0.2s;
    pointer-events: none;
    z-index: 2;
}
.p-speeddial-item {
    transform: scale(0);
    opacity: 0;
    transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.8s;
    will-change: transform;
}
.p-speeddial-action {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
}
.p-speeddial-circle .p-speeddial-item,
.p-speeddial-semi-circle .p-speeddial-item,
.p-speeddial-quarter-circle .p-speeddial-item {
    position: absolute;
}
.p-speeddial-rotate {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    will-change: transform;
}
.p-speeddial-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 250ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.p-speeddial-mask-visible {
    pointer-events: none;
    opacity: 1;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.p-speeddial-opened .p-speeddial-list {
    pointer-events: auto;
}
.p-speeddial-opened .p-speeddial-item {
    transform: scale(1);
    opacity: 1;
}
.p-speeddial-opened .p-speeddial-rotate {
    transform: rotate(45deg);
}

/* Direction */
.p-speeddial-direction-up {
    align-items: center;
    flex-direction: column-reverse;
}
.p-speeddial-direction-up .p-speeddial-list {
    flex-direction: column-reverse;
}
.p-speeddial-direction-down {
    align-items: center;
    flex-direction: column;
}
.p-speeddial-direction-down .p-speeddial-list {
    flex-direction: column;
}
.p-speeddial-direction-left {
    justify-content: center;
    flex-direction: row-reverse;
}
.p-speeddial-direction-left .p-speeddial-list {
    flex-direction: row-reverse;
}
.p-speeddial-direction-right {
    justify-content: center;
    flex-direction: row;
}
.p-speeddial-direction-right .p-speeddial-list {
    flex-direction: row;
}
`;R(F);_.render=z;export{_ as default};
