import{a as e,x as s,y as i,r as n,o as l,c as t,f as a,s as o}from"./vendor.96954379.js";var c={props:{},setup(){const s=e({isVisible1:!1,isVisible2:!1,isVisible3:!1,isVisible4:!1,isVisible5:!1,val1:"",val2:"",val3:"",val4:"",desc:"这是一段描述信息",chooseTagValue:"着色选项"});return{state:s,menuItemsOne:[{name:"选项一"},{name:"选项二"},{name:"选项三"}],menuItemsTwo:[{name:"选项一"},{name:"选项二"},{name:"选项三",subname:"描述信息"}],menuItemsThree:[{name:"着色选项"},{name:"禁用选项",disable:!0}],chooseItem:e=>{console.log(e,"itemParams"),s.val1=e.name},chooseItemTwo:function(e){s.val2=e.name},chooseItemThree:function(e){s.val3=e.name},switchActionSheet:e=>{s[e]=!s[e]}}}};const m=o();s("data-v-abf2808c");const u={class:"demo"},b=a("h2",null,"基本用法",-1),h=a("span",null,[a("label",null,"基础用法")],-1),v=a("span",null,[a("label",null,"展示取消按钮")],-1),d=a("span",null,[a("label",null,"展示描述信息")],-1),r=a("h2",null,"选项状态",-1),p=a("span",null,[a("label",null,"选项状态")],-1);i();const V=m(((e,s,i,o,c,V)=>{const T=n("nut-cell"),I=n("nut-actionsheet");return l(),t("div",u,[b,a(T,{"show-icon":!0,isLink:!0,onClick:s[1]||(s[1]=e=>o.switchActionSheet("isVisible1"))},{default:m((()=>[h,a("div",{class:"selected-option",innerHTML:o.state.val1},null,8,["innerHTML"])])),_:1}),a(T,{showIcon:!0,isLink:!0,onClick:s[2]||(s[2]=e=>o.switchActionSheet("isVisible2"))},{default:m((()=>[v,a("div",{class:"selected-option",innerHTML:o.state.val2},null,8,["innerHTML"])])),_:1}),a(T,{isLink:!0,onClick:s[3]||(s[3]=e=>o.switchActionSheet("isVisible3"))},{default:m((()=>[d,a("div",{class:"selected-option",innerHTML:o.state.val3},null,8,["innerHTML"])])),_:1}),r,a(T,{isLink:!0,onClick:s[4]||(s[4]=e=>o.switchActionSheet("isVisible4"))},{default:m((()=>[p])),_:1}),a(I,{visible:o.state.isVisible1,"onUpdate:visible":s[5]||(s[5]=e=>o.state.isVisible1=e),"menu-items":o.menuItemsOne,onChoose:o.chooseItem},null,8,["visible","menu-items","onChoose"]),a(I,{visible:o.state.isVisible2,"onUpdate:visible":s[6]||(s[6]=e=>o.state.isVisible2=e),"cancel-txt":"取消","menu-items":o.menuItemsOne,onChoose:o.chooseItemTwo},null,8,["visible","menu-items","onChoose"]),a(I,{visible:o.state.isVisible3,"onUpdate:visible":s[7]||(s[7]=e=>o.state.isVisible3=e),description:o.state.desc,"menu-items":o.menuItemsTwo,onChoose:o.chooseItemThree,"cancel-txt":"取消"},null,8,["visible","description","menu-items","onChoose"]),a(I,{visible:o.state.isVisible4,"onUpdate:visible":s[8]||(s[8]=e=>o.state.isVisible4=e),"cancel-txt":"取消","menu-items":o.menuItemsThree,"choose-tag-value":o.state.chooseTagValue},null,8,["visible","menu-items","choose-tag-value"])])}));c.render=V,c.__scopeId="data-v-abf2808c";export default c;
