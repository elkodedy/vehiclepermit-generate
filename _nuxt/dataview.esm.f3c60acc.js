import{O as h,z as v,o as l,b as u,n as i,k as d,g as w,E as P,w as g,B as f,j as m,F as c,i as k}from"./entry.600128a6.js";import S from"./paginator.esm.05a18373.js";import"./entry.ea737ec0.js";import"./index.esm.ebc9a441.js";import"./dropdown.esm.588565e7.js";import"./index.esm.f9d0898b.js";import"./virtualscroller.esm.bdad7ed0.js";import"./inputnumber.esm.28c88c11.js";import"./index.esm.15b9ae17.js";import"./index.esm.ae9c0163.js";import"./inputtext.esm.cb76cc36.js";import"./index.esm.db37d01a.js";var R={name:"DataView",emits:["update:first","update:rows","page"],props:{value:{type:Array,default:null},layout:{type:String,default:"list"},rows:{type:Number,default:0},first:{type:Number,default:0},totalRecords:{type:Number,default:0},paginator:{type:Boolean,default:!1},paginatorPosition:{type:String,default:"bottom"},alwaysShowPaginator:{type:Boolean,default:!0},paginatorTemplate:{type:String,default:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"},pageLinkSize:{type:Number,default:5},rowsPerPageOptions:{type:Array,default:null},currentPageReportTemplate:{type:String,default:"({currentPage} of {totalPages})"},sortField:{type:[String,Function],default:null},sortOrder:{type:Number,default:null},lazy:{type:Boolean,default:!1},dataKey:{type:String,default:null}},data(){return{d_first:this.first,d_rows:this.rows}},watch:{first(t){this.d_first=t},rows(t){this.d_rows=t},sortField(){this.resetPage()},sortOrder(){this.resetPage()}},methods:{getKey(t,s){return this.dataKey?h.resolveFieldData(t,this.dataKey):s},onPage(t){this.d_first=t.first,this.d_rows=t.rows,this.$emit("update:first",this.d_first),this.$emit("update:rows",this.d_rows),this.$emit("page",t)},sort(){if(this.value){const t=[...this.value];return t.sort((s,a)=>{let o=h.resolveFieldData(s,this.sortField),r=h.resolveFieldData(a,this.sortField),e=null;return o==null&&r!=null?e=-1:o!=null&&r==null?e=1:o==null&&r==null?e=0:typeof o=="string"&&typeof r=="string"?e=o.localeCompare(r,void 0,{numeric:!0}):e=o<r?-1:o>r?1:0,this.sortOrder*e}),t}else return null},resetPage(){this.d_first=0,this.$emit("update:first",this.d_first)}},computed:{containerClass(){return["p-dataview p-component",{"p-dataview-list":this.layout==="list","p-dataview-grid":this.layout==="grid"}]},getTotalRecords(){return this.totalRecords?this.totalRecords:this.value?this.value.length:0},empty(){return!this.value||this.value.length===0},paginatorTop(){return this.paginator&&(this.paginatorPosition!=="bottom"||this.paginatorPosition==="both")},paginatorBottom(){return this.paginator&&(this.paginatorPosition!=="top"||this.paginatorPosition==="both")},items(){if(this.value&&this.value.length){let t=this.value;if(t&&t.length&&this.sortField&&(t=this.sort()),this.paginator){const s=this.lazy?0:this.d_first;return t.slice(s,s+this.d_rows)}else return t}else return null}},components:{DVPaginator:S}};const T={key:0,class:"p-dataview-header"},L={class:"p-dataview-content"},_={class:"p-grid p-nogutter grid grid-nogutter"},b={key:0,class:"p-col col"},F={class:"p-dataview-emptymessage"},O={key:3,class:"p-dataview-footer"};function z(t,s,a,o,r,e){const y=v("DVPaginator");return l(),u("div",{class:f(e.containerClass)},[t.$slots.header?(l(),u("div",T,[i(t.$slots,"header")])):d("",!0),e.paginatorTop?(l(),w(y,{key:1,rows:r.d_rows,first:r.d_first,totalRecords:e.getTotalRecords,pageLinkSize:a.pageLinkSize,template:a.paginatorTemplate,rowsPerPageOptions:a.rowsPerPageOptions,currentPageReportTemplate:a.currentPageReportTemplate,class:f({"p-paginator-top":e.paginatorTop}),alwaysShow:a.alwaysShowPaginator,onPage:s[0]||(s[0]=n=>e.onPage(n))},P({_:2},[t.$slots.paginatorstart?{name:"start",fn:g(()=>[i(t.$slots,"paginatorstart")]),key:"0"}:void 0,t.$slots.paginatorend?{name:"end",fn:g(()=>[i(t.$slots,"paginatorend")]),key:"1"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow"])):d("",!0),m("div",L,[m("div",_,[(l(!0),u(c,null,k(e.items,(n,p)=>(l(),u(c,{key:e.getKey(n,p)},[t.$slots.list&&a.layout==="list"?i(t.$slots,"list",{key:0,data:n,index:p}):d("",!0),t.$slots.grid&&a.layout==="grid"?i(t.$slots,"grid",{key:1,data:n,index:p}):d("",!0)],64))),128)),e.empty?(l(),u("div",b,[m("div",F,[i(t.$slots,"empty")])])):d("",!0)])]),e.paginatorBottom?(l(),w(y,{key:2,rows:r.d_rows,first:r.d_first,totalRecords:e.getTotalRecords,pageLinkSize:a.pageLinkSize,template:a.paginatorTemplate,rowsPerPageOptions:a.rowsPerPageOptions,currentPageReportTemplate:a.currentPageReportTemplate,class:f({"p-paginator-bottom":e.paginatorBottom}),alwaysShow:a.alwaysShowPaginator,onPage:s[1]||(s[1]=n=>e.onPage(n))},P({_:2},[t.$slots.paginatorstart?{name:"start",fn:g(()=>[i(t.$slots,"paginatorstart")]),key:"0"}:void 0,t.$slots.paginatorend?{name:"end",fn:g(()=>[i(t.$slots,"paginatorend")]),key:"1"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow"])):d("",!0),t.$slots.footer?(l(),u("div",O,[i(t.$slots,"footer")])):d("",!0)],2)}R.render=z;export{R as default};