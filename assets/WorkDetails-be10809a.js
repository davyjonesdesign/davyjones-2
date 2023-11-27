import{_ as u,o,c as t,a as s,T as k,F as y,d as V,r as w,h as l,t as a,f as v,b as r,e as n,g as L}from"./index-bc09f855.js";const b={},I={xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",fill:"var(--text-link)",class:"nav-link-icon"},$=s("path",{d:"M12.5996 22.7353C12.209 23.1258 11.5759 23.1258 11.1854 22.7353L4.82139 16.3713L4.11428 15.6642C3.72376 15.2737 3.72376 14.6405 4.11428 14.25L4.82139 13.5429L11.1853 7.17893C11.5759 6.7884 12.209 6.7884 12.5996 7.17893L13.3067 7.88604C13.6972 8.27656 13.6972 8.90973 13.3067 9.30025L9.60693 13L24.1357 13C24.688 13 25.1357 13.4477 25.1357 14L25.1357 16C25.1357 16.5523 24.688 17 24.1357 17L9.6927 17L13.3067 20.614C13.6972 21.0045 13.6972 21.6376 13.3067 22.0282L12.5996 22.7353Z"},null,-1),D=[$];function P(e,c){return o(),t("svg",I,D)}const g=u(b,[["render",P]]),B={},F={xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",fill:"var(--text-link)",class:"nav-link-icon"},H=s("path",{d:"M4 9C3.44772 9 3 9.44772 3 10V24V26C3 26.5523 3.44772 27 4 27H6H20C20.5523 27 21 26.5523 21 26V24C21 23.4477 20.5523 23 20 23H7V10C7 9.44772 6.55228 9 6 9H4Z"},null,-1),O=s("path",{d:"M15 4C15 3.44772 15.4477 3 16 3H25H26C26.5522 3 27 3.44772 27 4V5V14C27 14.5523 26.5522 15 26 15H25C24.4477 15 24 14.5523 24 14V8.65685L15.2207 17.4361C14.8302 17.8266 14.197 17.8266 13.8065 17.4361L12.3923 16.0219C12.0017 15.6314 12.0017 14.9982 12.3923 14.6077L21 6H16C15.4477 6 15 5.55228 15 5V4Z"},null,-1),S=[H,O];function j(e,c){return o(),t("svg",F,S)}const m=u(B,[["render",j]]),M={components:{TextLink:k,BackIcon:g,LinkIcon:m,FooterSection:y},data(){return{TextLink:k,BackIcon:g,LinkIcon:m}},name:"WorkDetails",props:["alias"],created(){const e=this.$route.params.alias,c=V.find(d=>d.alias===e);if(!c)return this.$router.push("404");this.work=c},beforeRouteUpdate(e,c,d){const _=e.path.split("/").length,h=c.path.split("/").length;this.transitionName=_<h?"slide-down":"slide-up",d()}},W={class:"page-wrap"},K={class:"content-wrap details-wrapper"},N={class:"details-header"},A={class:"visual-wrapper"},T=["src","alt"],Z=["src","alt"],R={class:"details-header-content"},E={class:"details-body"},G={class:"details-grid-wrapper"},U={class:"grid-col-wrapper"},q=s("h6",{class:"grid-col-head"},"Role",-1),z={class:"row-2 role-p"},J={class:"grid-col-wrapper"},Q=s("h6",{class:"grid-col-head"},"Target Audience",-1),X={class:"row-2 target-p"},Y={class:"grid-col-wrapper grid-col-wrapper-links"},x=s("h6",{class:"grid-col-head"}," Project Links ",-1),ss={class:"row-2 project-links-links"},es={class:"details-section"},os={class:"details-section_content"},ts=s("h3",{class:"details-section-header"},"Overview",-1),is=s("h5",{class:"details-section-subheader"},"Problem",-1),as=s("h5",{class:"details-section-subheader"},"Solution",-1),ls={class:"details-section_visual"},rs={class:"details-visual-img-wrap"},ns=["alt","src"],cs=["src"],ds={class:"details-visiual_caption"},hs={class:"details-section"},us={class:"details-section_content"},_s=s("h3",{class:"details-section-header"},"Goal",-1),ps=s("h5",{class:"details-section-subheader"},"Objective",-1),ks={class:"details-section_visual"},ws={class:"details-visual-img-wrap"},vs=["alt","src"],gs=["src"],ms={class:"details-visiual_caption"},fs={class:"details-section"},Cs={class:"details-section_content"},ys=s("h3",{class:"details-section-header"},"Approach",-1),Vs=s("h5",{class:"details-section-subheader"},"Method",-1),Ls=s("h5",{class:"details-section-subheader"},"Design",-1),bs={key:0,class:"details-section-subheader"},Is={key:1,class:"details-kf_list"},$s={class:"details-section_visual"},Ds={class:"details-visual-img-wrap"},Ps=["alt","src"],Bs=["src"],Fs={class:"details-visiual_caption"},Hs={class:"details-section"},Os={class:"details-section_content"},Ss=s("h3",{class:"details-section-header"},"Outcome",-1),js=s("h5",{class:"details-section-subheader"},"Future Work",-1),Ms=s("h5",{class:"details-section-subheader"},"Ongoing Work",-1),Ws={class:"details-section_visual"},Ks={class:"details-visual-img-wrap"},Ns=["alt","src"],As=["src"],Ts={class:"details-visiual_caption"};function Zs(e,c,d,_,h,Rs){const p=w("text-link"),f=w("FooterSection");return o(),t("div",null,[s("div",W,[s("div",K,[s("div",N,[s("div",A,[e.work.splashImg?(o(),t("img",{key:0,class:"workCard-visual",src:e.work.splashImg,alt:e.work.splashVisCap},null,8,T)):l("",!0),e.work.vid?(o(),t("video",{key:1,class:"workCard-visual",autoplay:"",loop:"",muted:"",src:e.work.vid,alt:e.work.title},null,8,Z)):l("",!0)]),s("div",R,[s("h2",null,a(e.work.title),1),s("h4",null,a(e.work.subtitle),1)])]),s("div",E,[v(p,{to:"/work",text:"Back to Work","show-icon":!0,icon:h.BackIcon},null,8,["icon"]),s("div",G,[s("div",U,[q,s("p",z,a(e.work.role),1)]),s("div",J,[Q,s("p",X,a(e.work.targAud),1)]),s("div",Y,[x,s("div",ss,[(o(!0),t(r,null,n(e.work.links,(i,C)=>(o(),L(p,{key:C,url:i.link,class:"project-links-link",text:i.linkDescription,"show-icon":!0,icon:h.LinkIcon},null,8,["url","text","icon"]))),128))])])]),s("div",es,[s("div",os,[ts,is,(o(!0),t(r,null,n(e.work.ovProb,i=>(o(),t("p",{key:i},a(i),1))),128)),as,(o(!0),t(r,null,n(e.work.ovSol,i=>(o(),t("p",{key:i},a(i),1))),128))]),s("div",ls,[s("div",rs,[e.work.ovImg?(o(),t("img",{key:0,class:"details-visual",alt:e.work.ovVisCap,src:e.work.ovImg},null,8,ns)):l("",!0)]),e.work.ovProto?(o(),t("iframe",{key:0,class:"details-visual iframe",src:e.work.ovProto+"%26hide-ui%3D1",allowfullscreen:""},null,8,cs)):l("",!0),s("p",ds,a(e.work.ovVisCap),1)])]),s("div",hs,[s("div",us,[_s,ps,(o(!0),t(r,null,n(e.work.goalObj,i=>(o(),t("p",{key:i},a(i),1))),128))]),s("div",ks,[s("div",ws,[e.work.goalImg?(o(),t("img",{key:0,class:"details-visual",alt:e.work.goalVisCap,src:e.work.goalImg},null,8,vs)):l("",!0)]),e.work.goalProto?(o(),t("iframe",{key:0,class:"details-visual iframe",src:e.work.goalProto+"%26hide-ui%3D1",allowfullscreen:""},null,8,gs)):l("",!0),s("p",ms,a(e.work.goalVisCap),1)])]),s("div",fs,[s("div",Cs,[ys,Vs,(o(!0),t(r,null,n(e.work.apprMeth,i=>(o(),t("p",{key:i},a(i),1))),128)),Ls,(o(!0),t(r,null,n(e.work.apprDes,i=>(o(),t("p",{key:i},a(i),1))),128)),e.work.apprKf?(o(),t("h5",bs,"Key Features")):l("",!0),e.work.apprKf?(o(),t("ul",Is,[(o(!0),t(r,null,n(e.work.apprKf,i=>(o(),t("li",{class:"details-kf_listItem",key:i},a(i),1))),128))])):l("",!0)]),s("div",$s,[s("div",Ds,[e.work.apprImg?(o(),t("img",{key:0,class:"details-visual",alt:e.work.apprVisCap,src:e.work.apprImg},null,8,Ps)):l("",!0)]),e.work.apprProto?(o(),t("iframe",{key:0,class:"details-visual iframe",src:e.work.apprProto+"%26hide-ui%3D1",allowfullscreen:""},null,8,Bs)):l("",!0),s("p",Fs,a(e.work.apprVisCap),1)])]),s("div",Hs,[s("div",Os,[Ss,js,(o(!0),t(r,null,n(e.work.outFut,i=>(o(),t("p",{key:i},a(i),1))),128)),Ms,(o(!0),t(r,null,n(e.work.outOn,i=>(o(),t("p",{key:i},a(i),1))),128))]),s("div",Ws,[s("div",Ks,[e.work.outImg?(o(),t("img",{key:0,class:"details-visual",alt:e.work.outVisCap,src:e.work.outImg},null,8,Ns)):l("",!0)]),e.work.outProto?(o(),t("iframe",{key:0,class:"details-visual iframe",src:e.work.outProto+"%26hide-ui%3D1",allowfullscreen:""},null,8,As)):l("",!0),s("p",Ts,a(e.work.outVisCap),1)])])])])]),v(f)])}const Gs=u(M,[["render",Zs]]);export{Gs as default};
