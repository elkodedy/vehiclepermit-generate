import{R as S,A as w,o as s,b as d,j as f,l as g,B as b,g as m,r as p,k as h,F as k,i as _,D as u,m as I,G as T,U as L,N as D,z as y,e as V,Z as x,q as O,Q as F,w as C,T as E}from"./entry.b9153a06.js";import{s as A}from"./index.esm.5ee52e62.js";import{s as B}from"./index.esm.ad5e98d3.js";import{s as R}from"./index.esm.83cb8100.js";import{s as H}from"./index.esm.83df8d55.js";import"./entry.7291cd7f.js";var P={name:"GalleriaItem",emits:["start-slideshow","stop-slideshow","update:activeIndex"],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted(){this.autoPlay&&this.$emit("start-slideshow")},methods:{next(){let e=this.activeIndex+1,t=this.circular&&this.value.length-1===this.activeIndex?0:e;this.$emit("update:activeIndex",t)},prev(){let e=this.activeIndex!==0?this.activeIndex-1:0,t=this.circular&&this.activeIndex===0?this.value.length-1:e;this.$emit("update:activeIndex",t)},stopSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},navBackward(e){this.stopSlideShow(),this.prev(),e&&e.cancelable&&e.preventDefault()},navForward(e){this.stopSlideShow(),this.next(),e&&e.cancelable&&e.preventDefault()},onIndicatorClick(e){this.stopSlideShow(),this.$emit("update:activeIndex",e)},onIndicatorMouseEnter(e){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit("update:activeIndex",e))},onIndicatorKeyDown(e,t){switch(e.code){case"Enter":case"Space":this.stopSlideShow(),this.$emit("update:activeIndex",t),e.preventDefault();break;case"ArrowDown":case"ArrowUp":e.preventDefault();break}},isIndicatorItemActive(e){return this.activeIndex===e},isNavBackwardDisabled(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled(){return!this.circular&&this.activeIndex===this.value.length-1},ariaSlideNumber(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,e):void 0},ariaPageLabel(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{activeItem(){return this.value[this.activeIndex]},navBackwardClass(){return["p-galleria-item-prev p-galleria-item-nav p-link",{"p-disabled":this.isNavBackwardDisabled()}]},navForwardClass(){return["p-galleria-item-next p-galleria-item-nav p-link",{"p-disabled":this.isNavForwardDisabled()}]},ariaSlideLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0}},components:{ChevronLeftIcon:A,ChevronRightIcon:B},directives:{ripple:S}};const M={class:"p-galleria-item-wrapper"},K={class:"p-galleria-item-container"},z=["disabled"],G=["id","aria-label","aria-roledescription"],U=["disabled"],j={key:2,class:"p-galleria-caption"},Z={key:0,class:"p-galleria-indicators p-reset"},q=["aria-label","aria-selected","aria-controls","onClick","onMouseenter","onKeydown"],W={key:0,type:"button",tabindex:"-1",class:"p-link"};function X(e,t,i,l,n,a){const v=w("ripple");return s(),d("div",M,[f("div",K,[i.showItemNavigators?g((s(),d("button",{key:0,type:"button",class:b(a.navBackwardClass),onClick:t[0]||(t[0]=o=>a.navBackward(o)),disabled:a.isNavBackwardDisabled()},[(s(),m(p(i.templates.previousitemicon||"ChevronLeftIcon"),{class:"p-galleria-item-prev-icon"}))],10,z)),[[v]]):h("",!0),f("div",{id:i.id+"_item_"+i.activeIndex,class:"p-galleria-item",role:"group","aria-label":a.ariaSlideNumber(i.activeIndex+1),"aria-roledescription":a.ariaSlideLabel},[i.templates.item?(s(),m(p(i.templates.item),{key:0,item:a.activeItem},null,8,["item"])):h("",!0)],8,G),i.showItemNavigators?g((s(),d("button",{key:1,type:"button",class:b(a.navForwardClass),onClick:t[1]||(t[1]=o=>a.navForward(o)),disabled:a.isNavForwardDisabled()},[(s(),m(p(i.templates.nextitemicon||"ChevronRightIcon"),{class:"p-galleria-item-next-icon"}))],10,U)),[[v]]):h("",!0),i.templates.caption?(s(),d("div",j,[i.templates.caption?(s(),m(p(i.templates.caption),{key:0,item:a.activeItem},null,8,["item"])):h("",!0)])):h("",!0)]),i.showIndicators?(s(),d("ul",Z,[(s(!0),d(k,null,_(i.value,(o,r)=>(s(),d("li",{key:`p-galleria-indicator-${r}`,class:b(["p-galleria-indicator",{"p-highlight":a.isIndicatorItemActive(r)}]),tabindex:"0","aria-label":a.ariaPageLabel(r+1),"aria-selected":i.activeIndex===r,"aria-controls":i.id+"_item_"+r,onClick:c=>a.onIndicatorClick(r),onMouseenter:c=>a.onIndicatorMouseEnter(r),onKeydown:c=>a.onIndicatorKeyDown(c,r)},[i.templates.indicator?h("",!0):(s(),d("button",W)),i.templates.indicator?(s(),m(p(i.templates.indicator),{key:1,index:r},null,8,["index"])):h("",!0)],42,q))),128))])):h("",!0)])}P.render=X;var $={name:"GalleriaThumbnails",emits:["stop-slideshow","update:activeIndex"],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:"300px"},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible(e,t){this.d_numVisible=e,this.d_oldNumVisible=t},activeIndex(e,t){this.d_activeIndex=e,this.d_oldActiveItemIndex=t}},mounted(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated(){let e=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(this.d_activeIndex<=this.getMedianItemIndex()?e=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?e=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2===0?e=this.d_activeIndex*-1+this.getMedianItemIndex()+1:e=this.d_activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.$refs.itemsContainer.style.transform=this.isVertical?`translate3d(0, ${e*(100/this.d_numVisible)}%, 0)`:`translate3d(${e*(100/this.d_numVisible)}%, 0, 0)`,this.d_oldActiveItemIndex!==this.d_activeIndex&&(u.removeClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step(e){let t=this.totalShiftedItems+e;e<0&&-1*t+this.d_numVisible>this.value.length-1?t=this.d_numVisible-this.value.length:e>0&&t>0&&(t=0),this.circular&&(e<0&&this.value.length-1===this.d_activeIndex?t=0:e>0&&this.d_activeIndex===0&&(t=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(u.removeClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical?`translate3d(0, ${t*(100/this.d_numVisible)}%, 0)`:`translate3d(${t*(100/this.d_numVisible)}%, 0, 0)`,this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=t},stopSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},getMedianItemIndex(){let e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1},navBackward(e){this.stopSlideShow();let t=this.d_activeIndex!==0?this.d_activeIndex-1:0,i=t+this.totalShiftedItems;this.d_numVisible-i-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);let l=this.circular&&this.d_activeIndex===0?this.value.length-1:t;this.$emit("update:activeIndex",l),e.cancelable&&e.preventDefault()},navForward(e){this.stopSlideShow();let t=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;t+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);let i=this.circular&&this.value.length-1===this.d_activeIndex?0:t;this.$emit("update:activeIndex",i),e.cancelable&&e.preventDefault()},onItemClick(e){this.stopSlideShow();let t=e;if(t!==this.d_activeIndex){const i=t+this.totalShiftedItems;let l=0;t<this.d_activeIndex?(l=this.d_numVisible-i-1-this.getMedianItemIndex(),l>0&&-1*this.totalShiftedItems!==0&&this.step(l)):(l=this.getMedianItemIndex()-i,l<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(l)),this.$emit("update:activeIndex",t)}},onThumbnailKeydown(e,t){switch((e.code==="Enter"||e.code==="Space")&&(this.onItemClick(t),e.preventDefault()),e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey(){const e=u.find(this.$refs.itemsContainer,".p-galleria-thumbnail-item"),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===e.length?e.length-1:t+1)},onLeftKey(){const e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey(){const e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey(){const e=u.find(this.$refs.itemsContainer,".p-galleria-thumbnail-item"),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,e.length-1)},onTabKey(){const e=[...u.find(this.$refs.itemsContainer,".p-galleria-thumbnail-item")],t=e.findIndex(n=>u.hasClass(n,"p-galleria-thumbnail-item-current")),i=u.findSingle(this.$refs.itemsContainer,'.p-galleria-thumbnail-item > [tabindex="0"'),l=e.findIndex(n=>n===i.parentElement);e[l].children[0].tabIndex="-1",e[t].children[0].tabIndex="0"},findFocusedIndicatorIndex(){const e=[...u.find(this.$refs.itemsContainer,".p-galleria-thumbnail-item")],t=u.findSingle(this.$refs.itemsContainer,'.p-galleria-thumbnail-item > [tabindex="0"]');return e.findIndex(i=>i===t.parentElement)},changedFocusedIndicator(e,t){const i=u.find(this.$refs.itemsContainer,".p-galleria-thumbnail-item");i[e].children[0].tabIndex="-1",i[t].children[0].tabIndex="0",i[t].children[0].focus()},onTransitionEnd(){this.$refs.itemsContainer&&(u.addClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="")},onTouchStart(e){let t=e.changedTouches[0];this.startPos={x:t.pageX,y:t.pageY}},onTouchMove(e){e.cancelable&&e.preventDefault()},onTouchEnd(e){let t=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,t.pageY-this.startPos.y):this.changePageOnTouch(e,t.pageX-this.startPos.x)},changePageOnTouch(e,t){t<0?this.navForward(e):this.navBackward(e)},getTotalPageNumber(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle(){this.thumbnailsStyle||(this.thumbnailsStyle=document.createElement("style"),this.thumbnailsStyle.type="text/css",document.body.appendChild(this.thumbnailsStyle));let e=`
                #${this.containerId} .p-galleria-thumbnail-item {
                    flex: 1 0 ${100/this.d_numVisible}%
                }
            `;if(this.responsiveOptions){this.sortedResponsiveOptions=[...this.responsiveOptions],this.sortedResponsiveOptions.sort((t,i)=>{const l=t.breakpoint,n=i.breakpoint;let a=null;return l==null&&n!=null?a=-1:l!=null&&n==null?a=1:l==null&&n==null?a=0:typeof l=="string"&&typeof n=="string"?a=l.localeCompare(n,void 0,{numeric:!0}):a=l<n?-1:l>n?1:0,-1*a});for(let t=0;t<this.sortedResponsiveOptions.length;t++){let i=this.sortedResponsiveOptions[t];e+=`
                        @media screen and (max-width: ${i.breakpoint}) {
                            #${this.containerId} .p-galleria-thumbnail-item {
                                flex: 1 0 ${100/i.numVisible}%
                            }
                        }
                    `}}this.thumbnailsStyle.innerHTML=e},calculatePosition(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){let e=window.innerWidth,t={numVisible:this.numVisible};for(let i=0;i<this.sortedResponsiveOptions.length;i++){let l=this.sortedResponsiveOptions[i];parseInt(l.breakpoint,10)>=e&&(t=l)}this.d_numVisible!==t.numVisible&&(this.d_numVisible=t.numVisible)}},bindDocumentListeners(){this.documentResizeListener||(this.documentResizeListener=()=>{this.calculatePosition()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},isNavBackwardDisabled(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible},firstItemAciveIndex(){return this.totalShiftedItems*-1},lastItemActiveIndex(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e},ariaPageLabel(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{navBackwardClass(){return["p-galleria-thumbnail-prev p-link",{"p-disabled":this.isNavBackwardDisabled()}]},navForwardClass(){return["p-galleria-thumbnail-next p-link",{"p-disabled":this.isNavForwardDisabled()}]},ariaPrevButtonLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0}},components:{ChevronLeftIcon:A,ChevronRightIcon:B,ChevronUpIcon:H,ChevronDownIcon:R},directives:{ripple:S}};const Y={class:"p-galleria-thumbnail-wrapper"},Q={class:"p-galleria-thumbnail-container"},J=["disabled","aria-label"],ee=["aria-selected","aria-controls","onKeydown"],te=["tabindex","aria-label","aria-current","onClick"],ie=["disabled","aria-label"];function ae(e,t,i,l,n,a){const v=w("ripple");return s(),d("div",Y,[f("div",Q,[i.showThumbnailNavigators?g((s(),d("button",I({key:0,class:a.navBackwardClass,disabled:a.isNavBackwardDisabled(),type:"button","aria-label":a.ariaPrevButtonLabel,onClick:t[0]||(t[0]=o=>a.navBackward(o))},i.prevButtonProps),[(s(),m(p(i.templates.previousthumbnailicon||(i.isVertical?"ChevronUpIcon":"ChevronLeftIcon")),{class:"p-galleria-thumbnail-prev-icon"}))],16,J)),[[v]]):h("",!0),f("div",{class:"p-galleria-thumbnail-items-container",style:T({height:i.isVertical?i.contentHeight:""})},[f("div",{ref:"itemsContainer",class:"p-galleria-thumbnail-items",role:"tablist",onTransitionend:t[1]||(t[1]=(...o)=>a.onTransitionEnd&&a.onTransitionEnd(...o)),onTouchstart:t[2]||(t[2]=o=>a.onTouchStart(o)),onTouchmove:t[3]||(t[3]=o=>a.onTouchMove(o)),onTouchend:t[4]||(t[4]=o=>a.onTouchEnd(o))},[(s(!0),d(k,null,_(i.value,(o,r)=>(s(),d("div",{key:`p-galleria-thumbnail-item-${r}`,class:b(["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":i.activeIndex===r,"p-galleria-thumbnail-item-active":a.isItemActive(r),"p-galleria-thumbnail-item-start":a.firstItemAciveIndex()===r,"p-galleria-thumbnail-item-end":a.lastItemActiveIndex()===r}]),role:"tab","aria-selected":i.activeIndex===r,"aria-controls":i.containerId+"_item_"+r,onKeydown:c=>a.onThumbnailKeydown(c,r)},[f("div",{class:"p-galleria-thumbnail-item-content",tabindex:i.activeIndex===r?"0":"-1","aria-label":a.ariaPageLabel(r+1),"aria-current":i.activeIndex===r?"page":void 0,onClick:c=>a.onItemClick(r)},[i.templates.thumbnail?(s(),m(p(i.templates.thumbnail),{key:0,item:o},null,8,["item"])):h("",!0)],8,te)],42,ee))),128))],544)],4),i.showThumbnailNavigators?g((s(),d("button",I({key:1,class:a.navForwardClass,disabled:a.isNavForwardDisabled(),type:"button","aria-label":a.ariaNextButtonLabel,onClick:t[5]||(t[5]=o=>a.navForward(o))},i.nextButtonProps),[(s(),m(p(i.templates.nextthumbnailicon||(i.isVertical?"ChevronDownIcon":"ChevronRightIcon")),{class:"p-galleria-thumbnail-prev-icon"}))],16,ie)),[[v]]):h("",!0)])])}$.render=ae;var N={name:"GalleriaContent",inheritAttrs:!1,interval:null,emits:["activeitem-change","mask-hide"],data(){return{id:this.$attrs.id||L(),activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.value":function(e){e&&e.length<this.numVisible&&(this.numVisible=e.length)},"$attrs.activeIndex":function(e){this.activeIndex=e},"$attrs.numVisible":function(e){this.numVisible=e},"$attrs.autoPlay":function(e){e?this.startSlideShow():this.stopSlideShow()}},updated(){this.$emit("activeitem-change",this.activeIndex)},beforeUnmount(){this.slideShowActive&&this.stopSlideShow()},methods:{isAutoPlayActive(){return this.slideShowActive},startSlideShow(){this.interval=setInterval(()=>{let e=this.$attrs.circular&&this.$attrs.value.length-1===this.activeIndex?0:this.activeIndex+1;this.activeIndex=e},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass(e,t){const l=["top","left","bottom","right"].find(n=>n===t);return l?`${e}-${l}`:""},isVertical(){return this.$attrs.thumbnailsPosition==="left"||this.$attrs.thumbnailsPosition==="right"}},computed:{galleriaClass(){const e=this.$attrs.showThumbnails&&this.getPositionClass("p-galleria-thumbnails",this.$attrs.thumbnailsPosition),t=this.$attrs.showIndicators&&this.getPositionClass("p-galleria-indicators",this.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":this.$attrs.fullScreen,"p-galleria-indicator-onitem":this.$attrs.showIndicatorsOnItem,"p-galleria-item-nav-onhover":this.$attrs.showItemNavigatorsOnHover&&!this.$attrs.fullScreen},e,t,this.$attrs.containerClass]},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:P,GalleriaThumbnails:$,TimesIcon:D},directives:{ripple:S}};const ne=["id"],le=["aria-label"],se={key:1,class:"p-galleria-header"},re=["aria-live"],oe={key:2,class:"p-galleria-footer"};function de(e,t,i,l,n,a){const v=y("GalleriaItem"),o=y("GalleriaThumbnails"),r=w("ripple");return e.$attrs.value&&e.$attrs.value.length>0?(s(),d("div",I({key:0,id:n.id,class:a.galleriaClass,style:e.$attrs.containerStyle},e.$attrs.containerProps),[e.$attrs.fullScreen?g((s(),d("button",{key:0,autofocus:"",type:"button",class:"p-galleria-close p-link","aria-label":a.closeAriaLabel,onClick:t[0]||(t[0]=c=>e.$emit("mask-hide"))},[(s(),m(p(e.$attrs.templates.closeicon||"TimesIcon"),{class:"p-galleria-close-icon"}))],8,le)),[[r]]):h("",!0),e.$attrs.templates&&e.$attrs.templates.header?(s(),d("div",se,[(s(),m(p(e.$attrs.templates.header)))])):h("",!0),f("div",{class:"p-galleria-content","aria-live":e.$attrs.autoPlay?"polite":"off"},[V(v,{id:n.id,activeIndex:n.activeIndex,"onUpdate:activeIndex":t[1]||(t[1]=c=>n.activeIndex=c),slideShowActive:n.slideShowActive,"onUpdate:slideShowActive":t[2]||(t[2]=c=>n.slideShowActive=c),value:e.$attrs.value,circular:e.$attrs.circular,templates:e.$attrs.templates,showIndicators:e.$attrs.showIndicators,changeItemOnIndicatorHover:e.$attrs.changeItemOnIndicatorHover,showItemNavigators:e.$attrs.showItemNavigators,autoPlay:e.$attrs.autoPlay,onStartSlideshow:a.startSlideShow,onStopSlideshow:a.stopSlideShow},null,8,["id","activeIndex","slideShowActive","value","circular","templates","showIndicators","changeItemOnIndicatorHover","showItemNavigators","autoPlay","onStartSlideshow","onStopSlideshow"]),e.$attrs.showThumbnails?(s(),m(o,{key:0,activeIndex:n.activeIndex,"onUpdate:activeIndex":t[3]||(t[3]=c=>n.activeIndex=c),slideShowActive:n.slideShowActive,"onUpdate:slideShowActive":t[4]||(t[4]=c=>n.slideShowActive=c),containerId:n.id,value:e.$attrs.value,templates:e.$attrs.templates,numVisible:n.numVisible,responsiveOptions:e.$attrs.responsiveOptions,circular:e.$attrs.circular,isVertical:a.isVertical(),contentHeight:e.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:e.$attrs.showThumbnailNavigators,prevButtonProps:e.$attrs.prevButtonProps,nextButtonProps:e.$attrs.nextButtonProps,onStopSlideshow:a.stopSlideShow},null,8,["activeIndex","slideShowActive","containerId","value","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","prevButtonProps","nextButtonProps","onStopSlideshow"])):h("",!0)],8,re),e.$attrs.templates&&e.$attrs.templates.footer?(s(),d("div",oe,[(s(),m(p(e.$attrs.templates.footer)))])):h("",!0)],16,ne)):h("",!0)}N.render=de;var he={name:"Galleria",inheritAttrs:!1,emits:["update:activeIndex","update:visible"],props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:"bottom"},verticalThumbnailViewPortHeight:{type:String,default:"300px"},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:"bottom"},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},container:null,mask:null,data(){return{containerVisible:this.visible}},updated(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.fullScreen&&u.removeClass(document.body,"p-overflow-hidden"),this.mask=null,this.container&&(x.clear(this.container),this.container=null)},methods:{onBeforeEnter(e){x.set("modal",e,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter(e){this.mask.style.zIndex=String(parseInt(e.style.zIndex,10)-1),u.addClass(document.body,"p-overflow-hidden"),this.focus()},onBeforeLeave(){u.addClass(this.mask,"p-component-overlay-leave")},onAfterLeave(e){x.clear(e),this.containerVisible=!1,u.removeClass(document.body,"p-overflow-hidden")},onActiveItemChange(e){this.activeIndex!==e&&this.$emit("update:activeIndex",e)},maskHide(){this.$emit("update:visible",!1)},containerRef(e){this.container=e},maskRef(e){this.mask=e},focus(){let e=this.container.$el.querySelector("[autofocus]");e&&e.focus()}},computed:{maskContentClass(){return["p-galleria-mask p-component-overlay p-component-overlay-enter",this.maskClass,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]}},components:{GalleriaContent:N,Portal:O},directives:{focustrap:F}};const ce=["role","aria-modal"];function ue(e,t,i,l,n,a){const v=y("GalleriaContent"),o=y("Portal"),r=w("focustrap");return i.fullScreen?(s(),m(o,{key:0},{default:C(()=>[n.containerVisible?(s(),d("div",{key:0,ref:a.maskRef,class:b(a.maskContentClass),role:i.fullScreen?"dialog":"region","aria-modal":i.fullScreen?"true":void 0},[V(E,{name:"p-galleria",onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onAfterLeave:a.onAfterLeave,appear:""},{default:C(()=>[i.visible?g((s(),m(v,I({key:0,ref:a.containerRef,onMaskHide:a.maskHide,templates:e.$slots,onActiveitemChange:a.onActiveItemChange},e.$props),null,16,["onMaskHide","templates","onActiveitemChange"])),[[r]]):h("",!0)]),_:1},8,["onBeforeEnter","onEnter","onBeforeLeave","onAfterLeave"])],10,ce)):h("",!0)]),_:1})):(s(),m(v,I({key:1,templates:e.$slots,onActiveitemChange:a.onActiveItemChange},e.$props),null,16,["templates","onActiveitemChange"]))}function me(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",i==="top"&&l.firstChild?l.insertBefore(n,l.firstChild):l.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var pe=`
.p-galleria-content {
    display: flex;
    flex-direction: column;
}
.p-galleria-item-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
}
.p-galleria-item-container {
    position: relative;
    display: flex;
    height: 100%;
}
.p-galleria-item-nav {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.p-galleria-item-prev {
    left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.p-galleria-item-next {
    right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
.p-galleria-item-nav-onhover .p-galleria-item-nav {
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
}
.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav {
    pointer-events: all;
    opacity: 1;
}
.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled {
    pointer-events: none;
}
.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}

/* Thumbnails */
.p-galleria-thumbnail-wrapper {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}
.p-galleria-thumbnail-prev,
.p-galleria-thumbnail-next {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
}
.p-galleria-thumbnail-prev span,
.p-galleria-thumbnail-next span {
    display: flex;
    justify-content: center;
    align-items: center;
}
.p-galleria-thumbnail-container {
    display: flex;
    flex-direction: row;
}
.p-galleria-thumbnail-items-container {
    overflow: hidden;
    width: 100%;
}
.p-galleria-thumbnail-items {
    display: flex;
}
.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}
.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity 0.3s;
}
.p-galleria-thumbnail-item-current {
    opacity: 1;
}

/* Positions */
/* Thumbnails */
.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}
.p-galleria-thumbnails-left .p-galleria-item-wrapper,
.p-galleria-thumbnails-right .p-galleria-item-wrapper {
    flex-direction: row;
}
.p-galleria-thumbnails-left .p-galleria-item-wrapper,
.p-galleria-thumbnails-top .p-galleria-item-wrapper {
    order: 2;
}
.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,
.p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper {
    order: 1;
}
.p-galleria-thumbnails-left .p-galleria-thumbnail-container,
.p-galleria-thumbnails-right .p-galleria-thumbnail-container {
    flex-direction: column;
    flex-grow: 1;
}
.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

/* Indicators */
.p-galleria-indicators {
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-galleria-indicator > button {
    display: inline-flex;
    align-items: center;
}
.p-galleria-indicators-left .p-galleria-item-wrapper,
.p-galleria-indicators-right .p-galleria-item-wrapper {
    flex-direction: row;
    align-items: center;
}
.p-galleria-indicators-left .p-galleria-item-container,
.p-galleria-indicators-top .p-galleria-item-container {
    order: 2;
}
.p-galleria-indicators-left .p-galleria-indicators,
.p-galleria-indicators-top .p-galleria-indicators {
    order: 1;
}
.p-galleria-indicators-left .p-galleria-indicators,
.p-galleria-indicators-right .p-galleria-indicators {
    flex-direction: column;
}
.p-galleria-indicator-onitem .p-galleria-indicators {
    position: absolute;
    display: flex;
}
.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}
.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}
.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}
.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}

/* FullScreen */
.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-galleria-close {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.p-galleria-mask .p-galleria-item-nav {
    position: fixed;
    top: 50%;
    margin-top: -0.5rem;
}

/* Animation */
.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}
.p-galleria-enter-active .p-galleria-item-nav {
    opacity: 0;
}

/* Keyboard Support */
.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}
.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
`;me(pe);he.render=ue;export{he as default};
