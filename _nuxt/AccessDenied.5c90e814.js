import{_ as l}from"./nuxt-link.84e6c211.js";import{d,o as _,b as g,j as e,h as n,t as o,al as r,e as m,w as u,f as p}from"./entry.497c887e.js";import"./entry.b871eb40.js";const f={class:"surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},h={class:"grid justify-content-center p-2 lg:p-0",style:{"min-width":"80%"}},x={class:"col-12 mt-5 xl:mt-0 text-center"},b=["src"],v={class:"col-12 xl:col-6",style:{"border-radius":"56px",padding:"0.3rem",background:`linear-gradient(\r
            180deg,\r
            rgba(247, 149, 48, 0.4) 10%,\r
            rgba(247, 149, 48, 0) 30%\r
          )`}},w={class:"h-full w-full m-0 py-7 px-4",style:{"border-radius":"53px",background:`linear-gradient(\r
              180deg,\r
              var(--surface-50) 38.9%,\r
              var(--surface-0)\r
            )`}},y={class:"grid flex flex-column align-items-center"},k=e("div",{class:"flex justify-content-center align-items-center bg-orange-500 border-circle",style:{width:"3.2rem",height:"3.2rem"}},[e("i",{class:"pi pi-fw pi-lock text-2xl text-50"})],-1),C={class:"text-900 font-bold text-4xl lg:text-5xl mb-2"},j={class:"text-600 text-center"},D=["src"],N={class:"col-12 mt-5 text-center"},A=e("i",{class:"pi pi-fw pi-arrow-left text-blue-500 mr-2",style:{"vertical-align":"center"}},null,-1),U=d({__name:"AccessDenied",props:{error:null},setup(i){const t=i,c=r();return(s,B)=>{const a=l;return _(),g("div",f,[e("div",h,[e("div",x,[e("img",{src:n(c).public.baseUrl+"/images/logo-orange.svg",alt:"Sakai logo",class:"mb-5",style:{width:"81px",height:"60px"}},null,8,b)]),e("div",v,[e("div",w,[e("div",y,[k,e("h1",C,o(t.error.statusMessage||"Access Denied"),1),e("span",j,o(t.error.message),1),e("img",{src:("useRuntimeConfig"in s?s.useRuntimeConfig:n(r))().public.baseUrl+"/images/asset-access.svg",alt:"Access denied",class:"mt-5",width:"80%"},null,8,D),e("div",N,[A,m(a,{to:"/",class:"text-blue-500"},{default:u(()=>[p(" Go to Dashboard ")]),_:1})])])])])])])}}});export{U as default};