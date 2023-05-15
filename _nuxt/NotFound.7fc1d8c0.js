import{_ as r}from"./nuxt-link.5cf3f27f.js";import{d as a,o as l,b as c,j as e,h as i,t as s,e as d,w as _,f as u,a5 as m}from"./entry.600128a6.js";import"./entry.ea737ec0.js";const x={class:"surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},g={class:"grid justify-content-center p-2 lg:p-0",style:{"min-width":"80%"}},f={class:"col-12 mt-5 xl:mt-0 text-center"},p=["src"],h={class:"col-12 xl:col-6",style:{"border-radius":"56px",padding:"0.3rem",background:`linear-gradient(\r
            180deg,\r
            rgba(33, 150, 243, 0.4) 10%,\r
            rgba(33, 150, 243, 0) 30%\r
          )`}},b={class:"flex justify-content-center h-full w-full m-0 py-7 px-4",style:{"border-radius":"53px",background:`linear-gradient(\r
              180deg,\r
              var(--surface-50) 38.9%,\r
              var(--surface-0)\r
            )`}},v={class:"grid flex-column align-items-center"},y={class:"text-blue-500 font-bold text-3xl"},w=e("h1",{class:"text-900 font-bold text-3xl lg:text-5xl mb-2"}," Looks like you are lost ",-1),k={class:"text-gray-600"},N={class:"col-12 mt-5 text-center"},j=e("i",{class:"pi pi-fw pi-arrow-left text-blue-500 mr-2",style:{"vertical-align":"center"}},null,-1),R=a({__name:"NotFound",props:{error:null},setup(t){const o=m();return(B,C)=>{const n=r;return l(),c("div",x,[e("div",g,[e("div",f,[e("img",{src:i(o).public.baseUrl+"/images/logo-error.svg",alt:"Sakai logo",class:"mb-5",style:{width:"81px",height:"60px"}},null,8,p)]),e("div",h,[e("div",b,[e("div",v,[e("span",y,s(t.error.statusMessage||"404"),1),w,e("span",k,s(t.error.message||"Requested resource is not available."),1),e("div",N,[j,d(n,{to:"/",class:"text-blue-500"},{default:_(()=>[u(" Go to Dashboard ")]),_:1})])])])])])])}}});export{R as default};
