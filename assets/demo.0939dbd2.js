import{c as e}from"./mobile.26ea9aac.js";import{k as l,r as n,o as s,c as a,f as r,i as t}from"./vendor.6c8f51ae.js";import"./index.5ad10c44.js";const{createDemo:u}=e("price");var c=u({setup(){const e=l(0);return setInterval((()=>{e.value=1e7*Math.random()}),1e3),{price:e}}});const i={class:"demo"},o=r("h2",null,"基本用法",-1),d=r("h2",null,"有人民币符号，无千位分隔",-1),p=r("h2",null,"带人民币符号，有千位分隔，保留小数点后三位",-1),m=r("h2",null,"异步随机变更",-1);c.render=function(e,l,u,c,f,h){const b=n("nut-price"),v=n("nut-cell");return s(),a("div",i,[o,r(v,null,{default:t((()=>[r(b,{price:0,"need-symbol":!1,thousands:!0})])),_:1}),d,r(v,null,{default:t((()=>[r(b,{price:10010.01,"need-symbol":!0,thousands:!1},null,8,["price"])])),_:1}),p,r(v,null,{default:t((()=>[r(b,{price:15213.123,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1}),m,r(v,null,{default:t((()=>[r(b,{price:e.price,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1})])};export default c;
