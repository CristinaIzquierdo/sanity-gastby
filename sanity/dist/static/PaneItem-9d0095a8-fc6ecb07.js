import{t as b,a9 as D,y as x,bO as _,r as o,cL as L,j as e,cM as M,cN as k,a2 as R,cO as T,cP as j,cQ as F,cR as O,q as p,ac as E}from"./sanity-d37f1276.js";const N=(t,n)=>({title:p("em",{children:["No schema found for type ",e("code",{children:n})]}),subtitle:p("em",{children:["Document: ",e("code",{children:t})]}),media:()=>e(E,{})});function W(t){const{layout:n,value:a}=t;return e(k,{...N(a._id,a._type),layout:n})}function P(t,n,a){return t===!1?!1:t||n&&n.icon||a||!1}function Q(t){const{icon:n,id:a,layout:i="default",pressed:y,schemaType:c,selected:r,title:u,value:s}=t,v=b(),l=D(),{ChildLink:d}=x(),m=_(a),f=!!(c&&c.name&&v.get(c.name)),[I,h]=o.useState(!1),g=o.useMemo(()=>s&&L(s)?!c||!f?e(W,{value:s}):e(M,{documentPreviewStore:l,icon:P(n,c,F),layout:i,schemaType:c,value:s,presence:m}):e(k,{status:e(R,{muted:!0,children:e(T,{})}),icon:P(n,c,O),layout:i,title:u}),[l,f,n,i,c,u,s,m]),C=o.useMemo(()=>function(w){return e(d,{...w,childId:a})},[d,a]),S=o.useCallback(()=>h(!0),[]);return o.useEffect(()=>h(!1),[r]),e(j,{__unstable_focusRing:!0,as:C,"data-as":"a","data-ui":"PaneItem",padding:2,radius:2,onClick:S,pressed:y,selected:r||I,tone:"inherit",children:g})}export{Q as P};
