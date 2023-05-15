import{s as N}from"./index.esm.f9d0898b.js";import{s as _}from"./index.esm.4e1c5fed.js";import{D as C,z as k,o,b as d,j as i,B as g,g as p,r as u,k as r,G as y,F as m,i as K,e as b}from"./entry.600128a6.js";import"./entry.ea737ec0.js";var z={name:"OrganizationChartNode",emits:["node-click","node-toggle"],props:{node:{type:null,default:null},templates:{type:null,default:null},collapsible:{type:Boolean,default:!1},collapsedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null}},methods:{onNodeClick(t){C.hasClass(t.target,"p-node-toggler")||C.hasClass(t.target,"p-node-toggler-icon")||this.selectionMode&&this.$emit("node-click",this.node)},onChildNodeClick(t){this.$emit("node-click",t)},toggleNode(){this.$emit("node-toggle",this.node)},onChildNodeToggle(t){this.$emit("node-toggle",t)},onKeydown(t){(t.code==="Enter"||t.code==="Space")&&(this.toggleNode(),t.preventDefault())}},computed:{nodeContentClass(){return["p-organizationchart-node-content",this.node.styleClass,{"p-organizationchart-selectable-node":this.selectable,"p-highlight":this.selected}]},leaf(){return this.node.leaf===!1?!1:!(this.node.children&&this.node.children.length)},colspan(){return this.node.children&&this.node.children.length?this.node.children.length*2:null},childStyle(){return{visibility:!this.leaf&&this.expanded?"inherit":"hidden"}},expanded(){return this.collapsedKeys[this.node.key]===void 0},selectable(){return this.selectionMode&&this.node.selectable!==!1},selected(){return this.selectable&&this.selectionKeys&&this.selectionKeys[this.node.key]===!0},toggleable(){return this.collapsible&&this.node.collapsible!==!1&&!this.leaf}},components:{ChevronDownIcon:N,ChevronUpIcon:_}};const v={class:"p-organizationchart-table"},x={key:0},w=["colspan"],M=["colspan"],T=i("div",{class:"p-organizationchart-line-down"},null,-1),S=[T],B=["colspan"],O=i("div",{class:"p-organizationchart-line-down"},null,-1),D=[O];function I(t,l,e,c,s,n){const h=k("OrganizationChartNode",!0);return o(),d("table",v,[i("tbody",null,[e.node?(o(),d("tr",x,[i("td",{colspan:n.colspan},[i("div",{class:g(n.nodeContentClass),onClick:l[2]||(l[2]=(...a)=>n.onNodeClick&&n.onNodeClick(...a))},[(o(),p(u(e.templates[e.node.type]||e.templates.default),{node:e.node},null,8,["node"])),n.toggleable?(o(),d("a",{key:0,tabindex:"0",class:"p-node-toggler",onClick:l[0]||(l[0]=(...a)=>n.toggleNode&&n.toggleNode(...a)),onKeydown:l[1]||(l[1]=(...a)=>n.onKeydown&&n.onKeydown(...a))},[e.templates.togglericon?(o(),p(u(e.templates.togglericon),{key:0,expanded:n.expanded,class:"p-node-toggler-icon"},null,8,["expanded"])):(o(),p(u(n.expanded?"ChevronDownIcon":"ChevronUpIcon"),{key:1,class:"p-node-toggler-icon"}))],32)):r("",!0)],2)],8,w)])):r("",!0),i("tr",{style:y(n.childStyle),class:"p-organizationchart-lines"},[i("td",{colspan:n.colspan},S,8,M)],4),i("tr",{style:y(n.childStyle),class:"p-organizationchart-lines"},[e.node.children&&e.node.children.length===1?(o(),d("td",{key:0,colspan:n.colspan},D,8,B)):r("",!0),e.node.children&&e.node.children.length>1?(o(!0),d(m,{key:1},K(e.node.children,(a,f)=>(o(),d(m,{key:a.key},[i("td",{class:g(["p-organizationchart-line-left",{"p-organizationchart-line-top":f!==0}])}," ",2),i("td",{class:g(["p-organizationchart-line-right",{"p-organizationchart-line-top":f!==e.node.children.length-1}])}," ",2)],64))),128)):r("",!0)],4),i("tr",{style:y(n.childStyle),class:"p-organizationchart-nodes"},[(o(!0),d(m,null,K(e.node.children,a=>(o(),d("td",{key:a.key,colspan:"2"},[b(h,{node:a,templates:e.templates,collapsedKeys:e.collapsedKeys,onNodeToggle:n.onChildNodeToggle,collapsible:e.collapsible,selectionMode:e.selectionMode,selectionKeys:e.selectionKeys,onNodeClick:n.onChildNodeClick},null,8,["node","templates","collapsedKeys","onNodeToggle","collapsible","selectionMode","selectionKeys","onNodeClick"])]))),128))],4)])])}z.render=I;var E={name:"OrganizationChart",emits:["node-unselect","node-select","update:selectionKeys","node-expand","node-collapse","update:collapsedKeys"],props:{value:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},collapsible:{type:Boolean,default:!1},collapsedKeys:{type:null,default:null}},data(){return{d_collapsedKeys:this.collapsedKeys||{}}},watch:{collapsedKeys(t){this.d_collapsedKeys=t}},methods:{onNodeClick(t){const l=t.key;if(this.selectionMode){let e=this.selectionKeys?{...this.selectionKeys}:{};e[l]?(delete e[l],this.$emit("node-unselect",t)):(this.selectionMode==="single"&&(e={}),e[l]=!0,this.$emit("node-select",t)),this.$emit("update:selectionKeys",e)}},onNodeToggle(t){const l=t.key;this.d_collapsedKeys[l]?(delete this.d_collapsedKeys[l],this.$emit("node-expand",t)):(this.d_collapsedKeys[l]=!0,this.$emit("node-collapse",t)),this.d_collapsedKeys={...this.d_collapsedKeys},this.$emit("update:collapsedKeys",this.d_collapsedKeys)}},components:{OrganizationChartNode:z}};const V={class:"p-organizationchart p-component"};function j(t,l,e,c,s,n){const h=k("OrganizationChartNode");return o(),d("div",V,[b(h,{node:e.value,templates:t.$slots,onNodeToggle:n.onNodeToggle,collapsedKeys:s.d_collapsedKeys,collapsible:e.collapsible,onNodeClick:n.onNodeClick,selectionMode:e.selectionMode,selectionKeys:e.selectionKeys},null,8,["node","templates","onNodeToggle","collapsedKeys","collapsible","onNodeClick","selectionMode","selectionKeys"])])}function A(t,l){l===void 0&&(l={});var e=l.insertAt;if(!(!t||typeof document>"u")){var c=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",e==="top"&&c.firstChild?c.insertBefore(s,c.firstChild):c.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var F=`
.p-organizationchart-table {
    border-spacing: 0;
    border-collapse: separate;
    margin: 0 auto;
}
.p-organizationchart-table > tbody > tr > td {
    text-align: center;
    vertical-align: top;
    padding: 0 0.75rem;
}
.p-organizationchart-node-content {
    display: inline-block;
    position: relative;
}
.p-organizationchart-node-content .p-node-toggler {
    position: absolute;
    bottom: -0.75rem;
    margin-left: -0.75rem;
    z-index: 2;
    left: 50%;
    user-select: none;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    text-decoration: none;
}
.p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon {
    position: relative;
    top: 0.25rem;
}
.p-organizationchart-line-down {
    margin: 0 auto;
    height: 20px;
    width: 1px;
}
.p-organizationchart-line-right {
    border-radius: 0px;
}
.p-organizationchart-line-left {
    border-radius: 0;
}
.p-organizationchart-selectable-node {
    cursor: pointer;
}
`;A(F);E.render=j;export{E as default};
