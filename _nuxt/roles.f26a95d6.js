import{d as F,u as j,a8 as q,a5 as n,aj as K,al as O,o as T,b as $,j as d,e as a,w as r,G as I,t as U,h as B,ak as me,am as pe,B as ve,k as A,f as E,V as fe,s as be,I as he}from"./entry.b9153a06.js";import G from"./inputtext.esm.104f294d.js";import H from"./column.esm.01b3d724.js";import ye from"./splitbutton.esm.4283be6c.js";import J from"./datatable.esm.9db32825.js";import ge from"./textarea.esm.6922fb0d.js";import{u as M}from"./useMyFetch.1f0d7db9.js";import _e from"./checkbox.esm.588331ce.js";import"./entry.7291cd7f.js";import"./index.esm.83cb8100.js";import"./tieredmenu.esm.3214eac0.js";import"./index.esm.0ebf10cf.js";import"./paginator.esm.10b5c7f9.js";import"./index.esm.8ad36174.js";import"./dropdown.esm.fcdad3b3.js";import"./virtualscroller.esm.d0c94242.js";import"./inputnumber.esm.2f4424d9.js";import"./index.esm.352ce731.js";import"./index.esm.3dd487a1.js";import"./index.esm.ad5e98d3.js";import"./index.esm.a9de877b.js";import"./index.esm.55f9558b.js";import"./index.esm.62cdfcbe.js";const we={class:"p-fluid"},ke={class:"card"},Ve=F({__name:"RolePermission",setup(W){j({title:"Master Role"}),q(()=>{y.value=!0,_()});const y=n(!1),z=K(),C=n("/api/master/permission-role"),D=n([]),g=n(0),S=n({}),R=n([]),_=()=>{y.value=!0,S.value.roleId=O().$storage.getState("roleId"),M(C.value,{method:"get",params:S.value}).then(l=>{D.value=l.data,g.value=l.total,y.value=!1}).catch(l=>{y.value=!1,z.add({severity:"error",summary:l.data.status,detail:l.data.message,life:3e3})})},w=l=>{const{newData:c,index:o}=l;D.value[o]=c},b=()=>{let l="";const c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let o=0;o<5;o++)l+=c.charAt(Math.floor(Math.random()*c.length));return l},N=l=>{const{data:c,newValue:o,field:p}=l,v={permission:{permission:c.permission,key:p,[p]:o},roleId:O().$storage.getState("roleId")};M("/api/master/update-permission-role",{method:"post",body:v}).then(f=>{_()}).catch(f=>{z.add({severity:"error",summary:f.data.status,detail:f.data.message,life:3e3})})},k=l=>{const c=l==="Y"?"white":"black";return"background-color: "+(l==="Y"?"green":"white")+"; padding: 0 8px; border-radius: 5px; color: "+c};return(l,c)=>{const o=G,p=H,v=_e,f=J;return T(),$("div",we,[d("div",ke,[a(f,{editingRows:B(R),"onUpdate:editingRows":c[0]||(c[0]=e=>me(R)?R.value=e:null),value:B(D),"edit-mode":"cell","data-key":"id","responsive-layout":"scroll",class:"p-datatable-sm","show-gridlines":"","striped-rows":"",onRowEditSave:w,onCellEditComplete:N},{default:r(()=>[a(p,{field:"permission",header:"Permission",style:{width:"20%"}},{editor:r(({data:e,field:u})=>[a(o,{modelValue:e[u],"onUpdate:modelValue":m=>e[u]=m,readonly:"",autofocus:"",class:"p-inputtext-sm"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(p,{field:"index",header:"View",style:{width:"20%"}},{editor:r(({data:e,field:u})=>[a(v,{modelValue:e[u],"onUpdate:modelValue":m=>e[u]=m,name:"index","input-id":b(),value:"Y","false-value":"N",binary:!0},null,8,["modelValue","onUpdate:modelValue","input-id"])]),body:r(e=>[d("span",{style:I(k(e.data.index))},U(e.data.index),5)]),_:1}),a(p,{field:"store",header:"Store",style:{width:"20%"}},{editor:r(({data:e,field:u})=>[a(v,{modelValue:e[u],"onUpdate:modelValue":m=>e[u]=m,name:"store","input-id":b(),value:"Y","false-value":"N",binary:!0},null,8,["modelValue","onUpdate:modelValue","input-id"])]),body:r(e=>[d("span",{style:I(k(e.data.store))},U(e.data.store),5)]),_:1}),a(p,{field:"edits",header:"Edit",style:{width:"20%"}},{editor:r(({data:e,field:u})=>[a(v,{modelValue:e[u],"onUpdate:modelValue":m=>e[u]=m,name:"edits","input-id":b(),value:"Y","false-value":"N",binary:!0},null,8,["modelValue","onUpdate:modelValue","input-id"])]),body:r(e=>[d("span",{style:I(k(e.data.edits))},U(e.data.edits),5)]),_:1}),a(p,{field:"erase",header:"Delete",style:{width:"20%"}},{editor:r(({data:e,field:u})=>[a(v,{modelValue:e[u],"onUpdate:modelValue":m=>e[u]=m,name:"erase","input-id":b(),value:"Y","false-value":"N",binary:!0},null,8,["modelValue","onUpdate:modelValue","input-id"])]),body:r(e=>[d("span",{style:I(k(e.data.erase))},U(e.data.erase),5)]),_:1})]),_:1},8,["editingRows","value"])])])}}}),xe={class:"card card-sm"},Ce={class:"table-header flex justify-content-between flex-wrap"},De={class:"flex align-items-center justify-content-center"},Se={class:"mb-2 mr-3 md:m-0 p-as-md-center"},Ne={class:"hidden lg:flex align-items-center justify-content-center"},Ue={class:"p-input-icon-left mr-2"},Re=d("i",{class:"pi pi-search"},null,-1),Pe={class:"field"},Te=d("label",{for:"name"},"Name",-1),$e={key:0,class:"p-error"},Me={class:"field"},ze=d("label",{for:"description"},"Description",-1),Ie={class:"confirmation-content"},Le=d("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),Ae={key:0},Oe={class:"confirmation-content"},Ye=d("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),Be={key:0},mt=F({__name:"roles",setup(W){j({title:"Master Role"}),q(()=>{_.value=!0,V()});const y=K(),z=pe(),C=n("/api/master/roles"),D=n("Role"),g=n("post"),S=n("New "),R=n(),_=n(!1),w=n(!1),b=n(!1),N=n(!1),k=n(!1),l=n(),c=n(null),o=n({}),p=n(0),v=n(!1),f=n({global:{value:null,matchMode:fe.CONTAINS}});n([{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]);const e=t=>[{label:"Permission",icon:"pi pi-refresh",command:()=>{u(t)}},{label:"Delete",icon:"pi pi-times",command:()=>{de(t)}}],u=t=>{O().$storage.setState("roleId",t.id),z.open(Ve,{props:{header:"Role Permission: "+t.name,style:{width:"50vw"},breakpoints:{"960px":"75vw","640px":"90vw"},modal:!0,maximizable:!0},onClose:s=>{const h=s.data;if(h){const P=h.buttonType,x=P?{summary:"No Product Selected",detail:`Pressed '${P}' button`}:{summary:"Product Selected",detail:h.name};y.add({severity:"info",...x,life:3e3})}}})},m=n({}),V=()=>{_.value=!0,M(C.value,{method:"get",params:{options:JSON.stringify(m.value)}}).then(t=>{c.value=t.data,p.value=t.total,_.value=!1}).catch(t=>{_.value=!1,y.add({severity:"error",summary:t.data.status,detail:t.data.message,life:3e3})})},Q=t=>{m.value=t,V()},X=t=>{m.value=t,V()},Z=()=>{m.value.filters=f.value,V()},ee=()=>{v.value=l.value.length===p.value},te=()=>{v.value=!1},ae=t=>{t.checked?(v.value=!0,l.value=c.value):(v.value=!1,l.value=[])},le=()=>{o.value={},w.value=!1,b.value=!0,g.value="post",S.value="New "},oe=()=>{b.value=!1,w.value=!1},se=()=>{w.value=!0,M(g.value==="post"?C.value:C.value+"/"+o.value.id,{method:g.value,body:o.value}).then(t=>{oe(),V()}).catch(t=>{y.add({severity:"error",summary:t.data.status,detail:t.data.message,life:3e3})}).finally(()=>{w.value=!1})},ne=t=>{o.value={...t},b.value=!0,g.value="patch",S.value="Edit "},ie=()=>{k.value=!0,g.value="delete"},de=t=>{o.value=t,N.value=!0,g.value="delete",l.value=[o.value]},Y=()=>{M(C.value+"/0",{method:g.value,body:{selected:l.value}}).then(t=>{k.value=!1,N.value=!1,V()}).catch(t=>{y.add({severity:"error",summary:t.data.status,detail:t.data.message,life:3e3})}).finally(()=>{w.value=!1})};return(t,s)=>{const h=be,P=G,x=H,re=ye,ue=J,ce=ge,L=he;return T(),$("div",null,[d("div",xe,[a(ue,{ref_key:"dt",ref:R,filters:f.value,"onUpdate:filters":s[1]||(s[1]=i=>f.value=i),selection:l.value,"onUpdate:selection":s[2]||(s[2]=i=>l.value=i),value:c.value,lazy:!0,paginator:!0,rows:10,"data-key":"id","total-records":p.value,loading:_.value,"column-resize-mode":"fit","paginator-template":"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown","rows-per-page-options":[5,10,25],"current-page-report-template":"Showing {first} to {last} of {totalRecords} data","responsive-layout":"scroll",class:"p-datatable-sm p-datatable-no-wrap","select-all":v.value,onPage:s[3]||(s[3]=i=>Q(i)),onSort:s[4]||(s[4]=i=>X(i)),onFilter:s[5]||(s[5]=i=>Z()),onSelectAllChange:ae,onRowSelect:ee,onRowUnselect:te},{header:r(()=>[d("div",Ce,[d("span",De,[d("h5",Se,U(D.value),1),a(h,{label:"New",icon:"pi pi-plus",class:"p-button-success ml-2 mr-2 p-button-sm",onClick:le}),a(h,{label:"Delete",icon:"pi pi-trash",class:"p-button-danger p-button-sm",disabled:!l.value||!l.value.length,onClick:ie},null,8,["disabled"]),a(h,{label:"Refresh",type:"button",icon:"pi pi-refresh",class:"p-button-sm p-button-info ml-3",loading:_.value,onClick:V},null,8,["loading"])]),d("span",Ne,[d("span",Ue,[Re,a(P,{modelValue:f.value.global.value,"onUpdate:modelValue":s[0]||(s[0]=i=>f.value.global.value=i),class:"p-inputtext-sm",placeholder:"Search..."},null,8,["modelValue"])])])])]),default:r(()=>[a(x,{"selection-mode":"multiple",style:{width:"3rem"},exportable:!1}),a(x,{field:"name",header:"Name",sortable:!0,style:{"min-width":"16rem"}}),a(x,{field:"description",header:"Description",sortable:!0,style:{"min-width":"8rem"}}),a(x,{field:"guard_name",header:"Guard",sortable:!0,style:{"min-width":"10rem"}}),a(x,{exportable:!1,style:{"min-width":"8rem"}},{body:r(i=>[a(re,{label:"Edit",icon:"pi pi-pencil",model:e(i.data),class:"p-button-sm p-button-success",onClick:Ee=>ne(i.data)},null,8,["model","onClick"])]),_:1})]),_:1},8,["filters","selection","value","total-records","loading","select-all"])]),a(L,{visible:b.value,"onUpdate:visible":s[8]||(s[8]=i=>b.value=i),style:{width:"450px"},header:S.value+D.value,modal:!0,class:"p-fluid"},{footer:r(()=>[a(h,{label:"Save",icon:"pi pi-check",class:"p-button-sm p-button-success",onClick:se})]),default:r(()=>[d("div",Pe,[Te,a(P,{id:"name",modelValue:o.value.name,"onUpdate:modelValue":s[6]||(s[6]=i=>o.value.name=i),modelModifiers:{trim:!0},required:"true",autofocus:"",class:ve({"p-invalid":w.value&&!o.value.name}+" p-inputtext-sm")},null,8,["modelValue","class"]),w.value&&!o.value.name?(T(),$("small",$e,"Name is required.")):A("",!0)]),d("div",Me,[ze,a(ce,{id:"description",modelValue:o.value.description,"onUpdate:modelValue":s[7]||(s[7]=i=>o.value.description=i),required:"true",rows:"3",class:"p-inputtext-sm",cols:"20"},null,8,["modelValue"])])]),_:1},8,["visible","header"]),a(L,{visible:N.value,"onUpdate:visible":s[9]||(s[9]=i=>N.value=i),style:{width:"450px"},header:"Confirm",modal:!0},{footer:r(()=>[a(h,{label:"Yes",icon:"pi pi-check",class:"p-button-sm p-button-success",onClick:Y})]),default:r(()=>[d("div",Ie,[Le,o.value?(T(),$("span",Ae,[E("Are you sure you want to delete "),d("b",null,U(o.value.name),1),E("?")])):A("",!0)])]),_:1},8,["visible"]),a(L,{visible:k.value,"onUpdate:visible":s[10]||(s[10]=i=>k.value=i),style:{width:"450px"},header:"Confirm",modal:!0},{footer:r(()=>[a(h,{label:"Yes",icon:"pi pi-check",class:"p-button-sm p-button-success",onClick:Y})]),default:r(()=>[d("div",Oe,[Ye,o.value?(T(),$("span",Be,"Are you sure you want to delete the selected data?")):A("",!0)])]),_:1},8,["visible"])])}}});export{mt as default};
