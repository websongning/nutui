import{c as _}from"./mobile.60e843a7.js";import{_ as c}from"./index.8673f28e.js";import{a as v,r as u,e as m,j as s,k as n,B as f,C as h,g as a,o as C,l as p}from"./vendor.d721e0a0.js";const{createDemo:w}=_("overlay"),b=w({props:{},setup(){return{state:v({show:!1,show2:!1})}}}),l=e=>(f("data-v-3325d30e"),e=e(),h(),e),B={class:"demo"},y=l(()=>a("h2",null,"\u57FA\u7840\u7528\u6CD5",-1)),$=p("\u663E\u793A\u906E\u7F69\u5C42"),k=l(()=>a("h2",null,"\u5D4C\u5957\u5185\u5BB9",-1)),D=p("\u5D4C\u5957\u5185\u5BB9"),j=l(()=>a("div",{class:"wrapper"},[a("div",{class:"content"},"\u8FD9\u91CC\u662F\u6B63\u6587")],-1));function F(e,t,I,x,E,N){const d=u("nut-button"),r=u("nut-overlay"),i=u("nut-cell");return C(),m("div",B,[y,s(i,null,{default:n(()=>[s(d,{type:"primary",onClick:t[0]||(t[0]=o=>e.state.show=!0)},{default:n(()=>[$]),_:1}),s(r,{visible:e.state.show,"onUpdate:visible":t[1]||(t[1]=o=>e.state.show=o),"z-index":2e3},null,8,["visible"])]),_:1}),k,s(i,null,{default:n(()=>[s(d,{type:"success",onClick:t[2]||(t[2]=o=>e.state.show2=!0)},{default:n(()=>[D]),_:1}),s(r,{visible:e.state.show2,"onUpdate:visible":t[3]||(t[3]=o=>e.state.show2=o),"z-index":2e3},{default:n(()=>[j]),_:1},8,["visible"])]),_:1})])}var z=c(b,[["render",F],["__scopeId","data-v-3325d30e"]]);export{z as default};