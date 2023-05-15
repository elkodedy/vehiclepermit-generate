import{U as h,s as B,z as p,o as b,b as v,n as u,e as s,w as c,j as x,B as i,m as f,g as C,r as g,G as I}from"./entry.497c887e.js";import{s as w}from"./index.esm.b3a9a1b0.js";import S from"./tieredmenu.esm.268a479f.js";import"./entry.b871eb40.js";import"./index.esm.57cbd0e4.js";var m={name:"SplitButton",emits:["click"],props:{label:{type:String,default:null},icon:{type:String,default:null},model:{type:Array,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1},class:{type:null,default:null},style:{type:null,default:null},buttonProps:{type:null,default:null},menuButtonProps:{type:null,default:null},menuButtonIcon:{type:String,default:void 0},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},data(){return{isExpanded:!1}},methods:{onDropdownButtonClick(){this.$refs.menu.toggle({currentTarget:this.$el,relatedTarget:this.$refs.button.$el}),this.isExpanded=!this.$refs.menu.visible},onDropdownKeydown(e){(e.code==="ArrowDown"||e.code==="ArrowUp")&&(this.onDropdownButtonClick(),e.preventDefault())},onDefaultButtonClick(e){this.isExpanded&&this.$refs.menu.hide(e),this.$emit("click",e)}},computed:{ariaId(){return h()},containerClass(){return["p-splitbutton p-component",this.class,{[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text,"p-button-outlined":this.outlined,"p-button-sm":this.size==="small","p-button-lg":this.size==="large"}]}},components:{PVSButton:B,PVSMenu:S,ChevronDownIcon:w}};function k(e,l,t,o,n,a){const r=p("PVSButton"),y=p("PVSMenu");return b(),v("div",{class:i(a.containerClass),style:I(t.style)},[u(e.$slots,"default",{},()=>[s(r,f({type:"button",class:"p-splitbutton-defaultbutton",label:t.label,disabled:t.disabled,"aria-label":t.label,onClick:a.onDefaultButtonClick},t.buttonProps),{icon:c(d=>[u(e.$slots,"icon",{},()=>[x("span",{class:i([t.icon,d.class])},null,2)])]),_:3},16,["label","disabled","aria-label","onClick"])]),s(r,f({ref:"button",type:"button",class:"p-splitbutton-menubutton",disabled:t.disabled,"aria-haspopup":"true","aria-expanded":n.isExpanded,"aria-controls":a.ariaId+"_overlay",onClick:a.onDropdownButtonClick,onKeydown:a.onDropdownKeydown},t.menuButtonProps),{icon:c(d=>[u(e.$slots,"menubuttonicon",{},()=>[(b(),C(g(t.menuButtonIcon?"span":"ChevronDownIcon"),{class:i([t.menuButtonIcon,d.class])},null,8,["class"]))])]),_:3},16,["disabled","aria-expanded","aria-controls","onClick","onKeydown"]),s(y,{ref:"menu",id:a.ariaId+"_overlay",model:t.model,popup:!0,autoZIndex:t.autoZIndex,baseZIndex:t.baseZIndex,appendTo:t.appendTo},null,8,["id","model","autoZIndex","baseZIndex","appendTo"])],6)}function D(e,l){l===void 0&&(l={});var t=l.insertAt;if(!(!e||typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t==="top"&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var P=`
.p-splitbutton[data-v-5a8b8d41] {
    display: inline-flex;
    position: relative;
}
.p-splitbutton .p-splitbutton-defaultbutton[data-v-5a8b8d41],
.p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button[data-v-5a8b8d41],
.p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button[data-v-5a8b8d41] {
    flex: 1 1 auto;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
}
.p-splitbutton-menubutton[data-v-5a8b8d41],
.p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button[data-v-5a8b8d41],
.p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button[data-v-5a8b8d41] {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.p-splitbutton .p-menu[data-v-5a8b8d41] {
    min-width: 100%;
}
.p-fluid .p-splitbutton[data-v-5a8b8d41] {
    display: flex;
}
`;D(P);m.render=k;m.__scopeId="data-v-5a8b8d41";export{m as default};
