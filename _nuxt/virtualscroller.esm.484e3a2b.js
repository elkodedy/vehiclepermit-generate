import{D as f,x as W,z as A,o as C,b as v,n as T,j as F,F as B,i as R,B as H,G as P,k as V,e as O}from"./entry.497c887e.js";import"./entry.b871eb40.js";var N={name:"VirtualScroller",emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},resizeDelay:{type:Number,default:10},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0},inline:{type:Boolean,default:!1},step:{type:Number,default:0},appendOnly:{type:Boolean,default:!1},autoSize:{type:Boolean,default:!1}},data(){return{first:this.isBoth()?{rows:0,cols:0}:0,last:this.isBoth()?{rows:0,cols:0}:0,page:this.isBoth()?{rows:0,cols:0}:0,numItemsInViewport:this.isBoth()?{rows:0,cols:0}:0,lastScrollPos:this.isBoth()?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,resizeTimeout:null,defaultWidth:0,defaultHeight:0,defaultContentWidth:0,defaultContentHeight:0,isRangeChanged:!1,lazyLoadState:{},resizeListener:null,initialized:!1,watch:{numToleratedItems(t){this.d_numToleratedItems=t},loading(t){this.d_loading=t},items(t,e){(!e||e.length!==(t||[]).length)&&(this.init(),this.calculateAutoSize())},itemSize(){this.init(),this.calculateAutoSize()},orientation(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},scrollHeight(){this.init(),this.calculateAutoSize()},scrollWidth(){this.init(),this.calculateAutoSize()}},mounted(){this.viewInit(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0,this.lazyLoadState=this.lazyLoadState||{}},updated(){!this.initialized&&this.viewInit()},unmounted(){this.unbindResizeListener(),this.initialized=!1},methods:{viewInit(){f.isVisible(this.element)&&(this.setContentEl(this.content),this.init(),this.bindResizeListener(),this.defaultWidth=f.getWidth(this.element),this.defaultHeight=f.getHeight(this.element),this.defaultContentWidth=f.getWidth(this.content),this.defaultContentHeight=f.getHeight(this.content),this.initialized=!0)},init(){this.disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize())},isVertical(){return this.orientation==="vertical"},isHorizontal(){return this.orientation==="horizontal"},isBoth(){return this.orientation==="both"},scrollTo(t){this.lastScrollPos=this.both?{top:0,left:0}:0,this.element&&this.element.scrollTo(t)},scrollToIndex(t,e="auto"){const s=this.isBoth(),n=this.isHorizontal(),l=this.first,{numToleratedItems:i}=this.calculateNumItems(),o=this.getContentPosition(),r=this.itemSize,h=(w=0,z)=>w<=z?0:w,g=(w,z,L)=>w*z+L,c=(w=0,z=0)=>this.scrollTo({left:w,top:z,behavior:e});let d=s?{rows:0,cols:0}:0,p=!1;s?(d={rows:h(t[0],i[0]),cols:h(t[1],i[1])},c(g(d.cols,r[1],o.left),g(d.rows,r[0],o.top)),p=d.rows!==l.rows||d.cols!==l.cols):(d=h(t,i),n?c(g(d,r,o.left),0):c(0,g(d,r,o.top)),p=d!==l),this.isRangeChanged=p,this.first=d},scrollInView(t,e,s="auto"){if(e){const n=this.isBoth(),l=this.isHorizontal(),{first:i,viewport:o}=this.getRenderedRange(),r=(c=0,d=0)=>this.scrollTo({left:c,top:d,behavior:s}),h=e==="to-start",g=e==="to-end";if(h){if(n)o.first.rows-i.rows>t[0]?r(o.first.cols*this.itemSize[1],(o.first.rows-1)*this.itemSize[0]):o.first.cols-i.cols>t[1]&&r((o.first.cols-1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.first-i>t){const c=(o.first-1)*this.itemSize;l?r(c,0):r(0,c)}}else if(g){if(n)o.last.rows-i.rows<=t[0]+1?r(o.first.cols*this.itemSize[1],(o.first.rows+1)*this.itemSize[0]):o.last.cols-i.cols<=t[1]+1&&r((o.first.cols+1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.last-i<=t+1){const c=(o.first+1)*this.itemSize;l?r(c,0):r(0,c)}}}else this.scrollToIndex(t,s)},getRenderedRange(){const t=(n,l)=>Math.floor(n/(l||n));let e=this.first,s=0;if(this.element){const n=this.isBoth(),l=this.isHorizontal(),{scrollTop:i,scrollLeft:o}=this.element.scrollTop;n?(e={rows:t(i,this.itemSize[0]),cols:t(o,this.itemSize[1])},s={rows:e.rows+this.numItemsInViewport.rows,cols:e.cols+this.numItemsInViewport.cols}):(e=t(l?o:i,this.itemSize),s=e+this.numItemsInViewport)}return{first:this.first,last:this.last,viewport:{first:e,last:s}}},calculateNumItems(){const t=this.isBoth(),e=this.isHorizontal(),s=this.itemSize,n=this.getContentPosition(),l=this.element?this.element.offsetWidth-n.left:0,i=this.element?this.element.offsetHeight-n.top:0,o=(c,d)=>Math.ceil(c/(d||c)),r=c=>Math.ceil(c/2),h=t?{rows:o(i,s[0]),cols:o(l,s[1])}:o(e?l:i,s),g=this.d_numToleratedItems||(t?[r(h.rows),r(h.cols)]:r(h));return{numItemsInViewport:h,numToleratedItems:g}},calculateOptions(){const t=this.isBoth(),e=this.first,{numItemsInViewport:s,numToleratedItems:n}=this.calculateNumItems(),l=(o,r,h,g=!1)=>this.getLast(o+r+(o<h?2:3)*h,g),i=t?{rows:l(e.rows,s.rows,n[0]),cols:l(e.cols,s.cols,n[1],!0)}:l(e,s,n);this.last=i,this.numItemsInViewport=s,this.d_numToleratedItems=n,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=t?Array.from({length:s.rows}).map(()=>Array.from({length:s.cols})):Array.from({length:s})),this.lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this.step?t?{rows:0,cols:e.cols}:0:e,last:Math.min(this.step?this.step:i,this.items.length)},this.$emit("lazy-load",this.lazyLoadState)})},calculateAutoSize(){this.autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.content){const t=this.isBoth(),e=this.isHorizontal(),s=this.isVertical();this.content.style.minHeight=this.content.style.minWidth="auto",this.content.style.position="relative",this.element.style.contain="none";const[n,l]=[f.getWidth(this.content),f.getHeight(this.content)];n!==this.defaultContentWidth&&(this.element.style.width=""),l!==this.defaultContentHeight&&(this.element.style.height="");const[i,o]=[f.getWidth(this.element),f.getHeight(this.element)];(t||e)&&(this.element.style.width=i<this.defaultWidth?i+"px":this.scrollWidth||this.defaultWidth+"px"),(t||s)&&(this.element.style.height=o<this.defaultHeight?o+"px":this.scrollHeight||this.defaultHeight+"px"),this.content.style.minHeight=this.content.style.minWidth="",this.content.style.position="",this.element.style.contain=""}})},getLast(t=0,e){return this.items?Math.min(e?(this.columns||this.items[0]).length:this.items.length,t):0},getContentPosition(){if(this.content){const t=getComputedStyle(this.content),e=parseFloat(t.paddingLeft)+Math.max(parseFloat(t.left)||0,0),s=parseFloat(t.paddingRight)+Math.max(parseFloat(t.right)||0,0),n=parseFloat(t.paddingTop)+Math.max(parseFloat(t.top)||0,0),l=parseFloat(t.paddingBottom)+Math.max(parseFloat(t.bottom)||0,0);return{left:e,right:s,top:n,bottom:l,x:e+s,y:n+l}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize(){if(this.element){const t=this.isBoth(),e=this.isHorizontal(),s=this.element.parentElement,n=this.scrollWidth||`${this.element.offsetWidth||s.offsetWidth}px`,l=this.scrollHeight||`${this.element.offsetHeight||s.offsetHeight}px`,i=(o,r)=>this.element.style[o]=r;t||e?(i("height",l),i("width",n)):i("height",l)}},setSpacerSize(){const t=this.items;if(t){const e=this.isBoth(),s=this.isHorizontal(),n=this.getContentPosition(),l=(i,o,r,h=0)=>this.spacerStyle={...this.spacerStyle,[`${i}`]:(o||[]).length*r+h+"px"};e?(l("height",t,this.itemSize[0],n.y),l("width",this.columns||t[1],this.itemSize[1],n.x)):s?l("width",this.columns||t,this.itemSize,n.x):l("height",t,this.itemSize,n.y)}},setContentPosition(t){if(this.content&&!this.appendOnly){const e=this.isBoth(),s=this.isHorizontal(),n=t?t.first:this.first,l=(o,r)=>o*r,i=(o=0,r=0)=>this.contentStyle={...this.contentStyle,transform:`translate3d(${o}px, ${r}px, 0)`};if(e)i(l(n.cols,this.itemSize[1]),l(n.rows,this.itemSize[0]));else{const o=l(n,this.itemSize);s?i(o,0):i(0,o)}}},onScrollPositionChange(t){const e=t.target,s=this.isBoth(),n=this.isHorizontal(),l=this.getContentPosition(),i=(a,m)=>a?a>m?a-m:a:0,o=(a,m)=>Math.floor(a/(m||a)),r=(a,m,u,y,S,I)=>a<=S?S:I?u-y-S:m+S-1,h=(a,m,u,y,S,I,b)=>a<=I?0:Math.max(0,b?a<m?u:a-I:a>m?u:a-2*I),g=(a,m,u,y,S,I)=>{let b=m+y+2*S;return a>=S&&(b+=S+1),this.getLast(b,I)},c=i(e.scrollTop,l.top),d=i(e.scrollLeft,l.left);let p=s?{rows:0,cols:0}:0,w=this.last,z=!1,L=this.lastScrollPos;if(s){const a=this.lastScrollPos.top<=c,m=this.lastScrollPos.left<=d;if(!this.appendOnly||this.appendOnly&&(a||m)){const u={rows:o(c,this.itemSize[0]),cols:o(d,this.itemSize[1])},y={rows:r(u.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],a),cols:r(u.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],m)};p={rows:h(u.rows,y.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],a),cols:h(u.cols,y.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],m)},w={rows:g(u.rows,p.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:g(u.cols,p.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},z=p.rows!==this.first.rows||w.rows!==this.last.rows||p.cols!==this.first.cols||w.cols!==this.last.cols||this.isRangeChanged,L={top:c,left:d}}}else{const a=n?d:c,m=this.lastScrollPos<=a;if(!this.appendOnly||this.appendOnly&&m){const u=o(a,this.itemSize),y=r(u,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,m);p=h(u,y,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,m),w=g(u,p,this.last,this.numItemsInViewport,this.d_numToleratedItems),z=p!==this.first||w!==this.last||this.isRangeChanged,L=a}}return{first:p,last:w,isRangeChanged:z,scrollPos:L}},onScrollChange(t){const{first:e,last:s,isRangeChanged:n,scrollPos:l}=this.onScrollPositionChange(t);if(n){const i={first:e,last:s};if(this.setContentPosition(i),this.first=e,this.last=s,this.lastScrollPos=l,this.$emit("scroll-index-change",i),this.lazy&&this.isPageChanged(e)){const o={first:this.step?Math.min(this.getPageByFirst(e)*this.step,this.items.length-this.step):e,last:Math.min(this.step?(this.getPageByFirst(e)+1)*this.step:s,this.items.length)};(this.lazyLoadState.first!==o.first||this.lazyLoadState.last!==o.last)&&this.$emit("lazy-load",o),this.lazyLoadState=o}}},onScroll(t){if(this.$emit("scroll",t),this.delay&&this.isPageChanged()){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){const{isRangeChanged:e}=this.onScrollPositionChange(t);(e||(this.step?this.isPageChanged():!1))&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(t),this.d_loading&&this.showLoader&&(!this.lazy||this.loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst())},this.delay)}else this.onScrollChange(t)},onResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(f.isVisible(this.element)){const t=this.isBoth(),e=this.isVertical(),s=this.isHorizontal(),[n,l]=[f.getWidth(this.element),f.getHeight(this.element)],[i,o]=[n!==this.defaultWidth,l!==this.defaultHeight];(t?i||o:s?i:e?o:!1)&&(this.d_numToleratedItems=this.numToleratedItems,this.defaultWidth=n,this.defaultHeight=l,this.defaultContentWidth=f.getWidth(this.content),this.defaultContentHeight=f.getHeight(this.content),this.init())}},this.resizeDelay)},bindResizeListener(){this.resizeListener||(this.resizeListener=this.onResize.bind(this),window.addEventListener("resize",this.resizeListener),window.addEventListener("orientationchange",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),window.removeEventListener("orientationchange",this.resizeListener),this.resizeListener=null)},getOptions(t){const e=(this.items||[]).length,s=this.isBoth()?this.first.rows+t:this.first+t;return{index:s,count:e,first:s===0,last:s===e-1,even:s%2===0,odd:s%2!==0}},getLoaderOptions(t,e){let s=this.loaderArr.length;return{index:t,count:s,first:t===0,last:t===s-1,even:t%2===0,odd:t%2!==0,...e}},getPageByFirst(t){return Math.floor(((t??this.first)+this.d_numToleratedItems*4)/(this.step||1))},isPageChanged(t){return this.step?this.page!==this.getPageByFirst(t??this.first):!0},setContentEl(t){this.content=t||this.content||f.findSingle(this.element,".p-virtualscroller-content")},elementRef(t){this.element=t},contentRef(t){this.content=t}},computed:{containerClass(){return["p-virtualscroller",{"p-virtualscroller-inline":this.inline,"p-virtualscroller-both p-both-scroll":this.isBoth(),"p-virtualscroller-horizontal p-horizontal-scroll":this.isHorizontal()},this.class]},contentClass(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass(){return["p-virtualscroller-loader",{"p-component-overlay":!this.$slots.loader}]},loadedItems(){return this.items&&!this.d_loading?this.isBoth()?this.items.slice(this.appendOnly?0:this.first.rows,this.last.rows).map(t=>this.columns?t:t.slice(this.appendOnly?0:this.first.cols,this.last.cols)):this.isHorizontal()&&this.columns?this.items:this.items.slice(this.appendOnly?0:this.first,this.last):[]},loadedRows(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns(){if(this.columns){const t=this.isBoth(),e=this.isHorizontal();if(t||e)return this.d_loading&&this.loaderDisabled?t?this.loaderArr[0]:this.loaderArr:this.columns.slice(t?this.first.cols:this.first,t?this.last.cols:this.last)}return this.columns}},components:{SpinnerIcon:W}};const M=["tabindex"];function x(t,e,s,n,l,i){const o=A("SpinnerIcon");return s.disabled?(C(),v(B,{key:1},[T(t.$slots,"default"),T(t.$slots,"content",{items:s.items,rows:s.items,columns:i.loadedColumns})],64)):(C(),v("div",{key:0,ref:i.elementRef,class:H(i.containerClass),tabindex:s.tabindex,style:P(s.style),onScroll:e[0]||(e[0]=(...r)=>i.onScroll&&i.onScroll(...r))},[T(t.$slots,"content",{styleClass:i.contentClass,items:i.loadedItems,getItemOptions:i.getOptions,loading:l.d_loading,getLoaderOptions:i.getLoaderOptions,itemSize:s.itemSize,rows:i.loadedRows,columns:i.loadedColumns,contentRef:i.contentRef,spacerStyle:l.spacerStyle,contentStyle:l.contentStyle,vertical:i.isVertical(),horizontal:i.isHorizontal(),both:i.isBoth()},()=>[F("div",{ref:i.contentRef,class:H(i.contentClass),style:P(l.contentStyle)},[(C(!0),v(B,null,R(i.loadedItems,(r,h)=>T(t.$slots,"item",{key:h,item:r,options:i.getOptions(h)})),128))],6)]),s.showSpacer?(C(),v("div",{key:0,class:"p-virtualscroller-spacer",style:P(l.spacerStyle)},null,4)):V("",!0),!s.loaderDisabled&&s.showLoader&&l.d_loading?(C(),v("div",{key:1,class:H(i.loaderClass)},[t.$slots&&t.$slots.loader?(C(!0),v(B,{key:0},R(l.loaderArr,(r,h)=>T(t.$slots,"loader",{key:h,options:i.getLoaderOptions(h,i.isBoth()&&{numCols:t.d_numItemsInViewport.cols})})),128)):V("",!0),T(t.$slots,"loadingicon",{},()=>[O(o,{spin:"",class:"p-virtualscroller-loading-icon"})])],2)):V("",!0)],46,M))}function D(t,e){e===void 0&&(e={});var s=e.insertAt;if(!(!t||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",s==="top"&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=t:l.appendChild(document.createTextNode(t))}}var E=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}
.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    /* contain: content; */
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}
.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}
.p-virtualscroller .p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.p-virtualscroller-loader.p-component-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-virtualscroller-loading-icon {
    font-size: 2rem;
}
.p-virtualscroller-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
}
.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

/* Inline */
.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`;D(E);N.render=x;export{N as default};