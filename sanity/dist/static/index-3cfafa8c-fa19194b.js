import{s as b,a1 as x,r as l,q as d,P as j,j as o,bZ as v,ah as H,ct as I,a0 as k,aK as B,ai as E,b0 as y}from"./sanity-d37f1276.js";import{useDeskTool as C}from"./index-56aa5cc3-56026681.js";import"./index-8a3328a5.js";var u;function O(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function g(t){const{actionHandlers:e,index:s,menuItems:n,menuItemGroups:r,title:i}=t,{features:a}=C();return!(n!=null&&n.length)&&!i?null:o(H,{actions:o(I,{menuItems:n,menuItemGroups:r,actionHandlers:e}),backButton:a.backButton&&s>0&&o(k,{as:B,"data-as":"a",icon:E,mode:"bleed"}),title:i})}const L=b(x)(u||(u=O([`
  position: relative;
`])));function T(t){const{children:e}=t,{collapsed:s}=y();return o(L,{hidden:s,height:"fill",overflow:"auto",children:e})}function G(t){const{index:e,pane:s,paneKey:n,...r}=t,{child:i,component:a,menuItems:m,menuItemGroups:p,title:f="",type:U,...P}=s,[c,h]=l.useState(null);return d(j,{id:n,minWidth:320,selected:r.isSelected,children:[o(g,{actionHandlers:c==null?void 0:c.actionHandlers,index:e,menuItems:m,menuItemGroups:p,title:f}),d(T,{children:[v.isValidElementType(a)&&l.createElement(a,{...r,...P,ref:h,child:i,paneKey:n}),l.isValidElement(a)&&a]})]})}export{G as default};
