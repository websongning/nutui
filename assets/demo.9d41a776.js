var n=Object.assign;import{b as e,c as o}from"./mobile.508ee667.js";import{d as l,f as t,Y as s,s as i,x as c,r as a,o as u,c as d,q as r}from"./vendor.f15f1bef.js";import"./index.22dc1396.js";const m=l(e),f={type:"base",showPopup:!1,msg:"",color:void 0,background:void 0,duration:3e3,className:"",onClosed:null,onClick:null,onOpened:null,textTimer:null,unmount:null};let p=[],y=[];const g=n=>{if(n){const e=document.getElementById(n);y=y.filter((e=>e.id!==n)),p=p.filter((e=>e!==n)),e&&document.body.removeChild(e)}else p.forEach((n=>{const e=document.getElementById(n);e&&document.body.removeChild(e)})),y=[],p=[]},h=e=>{let o;if(e.unmount=g,e.id){if(o=e.id,p.find((n=>n===e.id)))return(e=>{const o=document.getElementById(e.id);if(o){const l=y.find((n=>n.id===e.id));e=n(l?n(n({},f),l):n({},f),e);const i=t(m,e);return s(i,o),i.component.ctx}})(e)}else o=(new Date).getTime()+"";(e=n(n({},f),e)).id=o,p.push(e.id),y.push(e);const l=document.createElement("div");l.id=e.id;const i=t(m,e);return s(i,l),document.body.appendChild(l),console.log(i.component),setTimeout((()=>{i.showPopup=!0,console.log(i.component,"====")}),0),i.component.ctx},b=n=>{n||console.warn("[NutUI Notify]: msg不能为空")},k={text:(e,o={})=>(b(e),h(n(n({},o),{msg:e}))),primary:(e,o={})=>(b(e),h(n(n({},o),{msg:e,type:"primary"}))),success:(e,o={})=>(b(e),h(n(n({},o),{msg:e,type:"success"}))),danger:(e,o={})=>(b(e),h(n(n({},o),{msg:e,type:"danger"}))),warn:(e,o={})=>(b(e),h(n(n({},o),{msg:e,type:"warning"}))),hide(){g()}},{createDemo:N}=o("notify");var w=N({setup:()=>({baseNotify:n=>{k.text(n,{onClose:()=>{console.log("close")},onClick:()=>{console.log("click")}})},primaryNotify:n=>{k.primary(n)},successNotify:n=>{k.success(n)},errorNotify:n=>{k.danger(n)},warningNotify:n=>{k.warn(n)},cusBgNotify:n=>{k.text(n,{color:"#ad0000",background:"#ffe1e1"})},timeNotify:n=>{k.text(n,{duration:1e4})}})});const C=r("data-v-314ae48c");i("data-v-314ae48c");const v={class:"demo"},I=t("h2",null,"基础用法",-1),x=t("span",null,[t("label",null,"基础用法")],-1),_=t("h2",null,"通知类型",-1),L=t("span",null,[t("label",null,"主要通知")],-1),B=t("span",null,[t("label",null,"成功通知")],-1),E=t("span",null,[t("label",null,"危险通知")],-1),j=t("span",null,[t("label",null,"警告通知")],-1),T=t("h2",null,"自定义样式",-1),D=t("span",null,[t("label",null,"自定义背景色和字体颜色")],-1),O=t("h2",null,"自定义时长",-1),P=t("span",null,[t("label",null,"自定义时长")],-1);c();const q=C(((n,e,o,l,s,i)=>{const c=a("nut-cell");return u(),d("div",v,[I,t(c,{showIcon:!0,isLink:!0,onClick:e[1]||(e[1]=e=>n.baseNotify("基础用法"))},{default:C((()=>[x])),_:1}),_,t(c,{showIcon:!0,isLink:!0,onClick:e[2]||(e[2]=e=>n.primaryNotify("主要通知"))},{default:C((()=>[L])),_:1}),t(c,{showIcon:!0,isLink:!0,onClick:e[3]||(e[3]=e=>n.successNotify("成功通知"))},{default:C((()=>[B])),_:1}),t(c,{showIcon:!0,isLink:!0,onClick:e[4]||(e[4]=e=>n.errorNotify("危险通知"))},{default:C((()=>[E])),_:1}),t(c,{showIcon:!0,isLink:!0,onClick:e[5]||(e[5]=e=>n.warningNotify("警告通知"))},{default:C((()=>[j])),_:1}),T,t(c,{showIcon:!0,isLink:!0,onClick:e[6]||(e[6]=e=>n.cusBgNotify("自定义背景色和字体颜色"))},{default:C((()=>[D])),_:1}),O,t(c,{showIcon:!0,isLink:!0,onClick:e[7]||(e[7]=e=>n.timeNotify("自定义时长"))},{default:C((()=>[P])),_:1})])}));w.render=q,w.__scopeId="data-v-314ae48c";export default w;
