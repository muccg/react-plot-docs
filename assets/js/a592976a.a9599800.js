"use strict";(self.webpackChunkdocs_react_plot=self.webpackChunkdocs_react_plot||[]).push([[888],{1058:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return h},default:function(){return E},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return g}});var a=n(7462),i=n(3366),r=n(7294),l=n(3905),o=n(1465),s=n(1736),p=n(1119),u="import React from 'react';\nimport { Plot, LineSeries } from 'react-plot';\n\nexport default function Series() {\n  return (\n    <Plot width={300} height={300}>\n      <LineSeries\n        data={[\n          { x: 1, y: 0 },\n          { x: 2, y: 1 },\n          { x: 3, y: 2 },\n          { x: 4, y: 1 },\n          { x: 5, y: 2 },\n          { x: 6, y: 3 },\n        ]}\n      />\n    </Plot>\n  );\n}\n",m=function(){return r.createElement(o.XN,{width:300,height:300},r.createElement(o.eh,{data:[{x:1,y:0},{x:2,y:1},{x:3,y:2},{x:4,y:1},{x:5,y:2},{x:6,y:3}]}))};function d(e){var t=(0,r.useState)(!1),n=t[0],a=t[1];return r.createElement(r.Fragment,null,r.createElement("div",{className:"demo-example-wrapper"},r.createElement(m,null),r.createElement("div",{className:"demo-example-buttons"},r.createElement("button",{onClick:function(){return a((function(e){return!e}))},type:"button",style:{backgroundColor:n?"#dbeafe":void 0}},"Code"),e.noCodesandbox?null:r.createElement(p.Z,{name:"series",source:u,dependencies:{react:"^17.0.2","react-plot":"^0.17.1"}},(function(){return r.createElement("button",{type:"submit"},"Open sandbox")})))),n&&r.createElement(s.Z,{className:"language-jsx"},u))}var c="import React from 'react';\nimport { Plot, RangeSeries } from 'react-plot';\n\nexport default function Series() {\n  return (\n    <Plot width={300} height={300}>\n      <RangeSeries\n        data={[\n          { x: 1, y1: 0, y2: 2 },\n          { x: 2, y1: 2, y2: 3 },\n          { x: 3, y1: 3, y2: 4 },\n          { x: 4, y1: 2, y2: 4 },\n          { x: 5, y1: 1, y2: 5 },\n        ]}\n      />\n    </Plot>\n  );\n}\n",y=function(){return r.createElement(o.XN,{width:300,height:300},r.createElement(o.sD,{data:[{x:1,y1:0,y2:2},{x:2,y1:2,y2:3},{x:3,y1:3,y2:4},{x:4,y1:2,y2:4},{x:5,y1:1,y2:5}]}))};function x(e){var t=(0,r.useState)(!1),n=t[0],a=t[1];return r.createElement(r.Fragment,null,r.createElement("div",{className:"demo-example-wrapper"},r.createElement(y,null),r.createElement("div",{className:"demo-example-buttons"},r.createElement("button",{onClick:function(){return a((function(e){return!e}))},type:"button",style:{backgroundColor:n?"#dbeafe":void 0}},"Code"),e.noCodesandbox?null:r.createElement(p.Z,{name:"series",source:c,dependencies:{react:"^17.0.2","react-plot":"^0.17.1"}},(function(){return r.createElement("button",{type:"submit"},"Open sandbox")})))),n&&r.createElement(s.Z,{className:"language-jsx"},c))}var k=["components"],f={},h="Data",b={unversionedId:"types/data",id:"types/data",title:"Data",description:"this type is used to define Series data type",source:"@site/docs/500_types/data.md",sourceDirName:"500_types",slug:"/types/data",permalink:"/types/data",editUrl:"https://github.com/zakodium-oss/react-plot-docs/tree/main/docs/500_types/data.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Legend",permalink:"/illusrations/legend"},next:{title:"ScalarValue",permalink:"/types/scalarValue"}},v={},g=[{value:"1. SeriesPoint",id:"1-seriespoint",level:2},{value:"Definition",id:"definition",level:3},{value:"Utilities",id:"utilities",level:3},{value:"Example",id:"example",level:3},{value:"2. RangeSeriesPoint",id:"2-rangeseriespoint",level:2},{value:"Definition",id:"definition-1",level:3},{value:"Utilities",id:"utilities-1",level:3},{value:"Example",id:"example-1",level:3}],N={toc:g};function E(e){var t=e.components,n=(0,i.Z)(e,k);return(0,l.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"data"},"Data"),(0,l.kt)("p",null,"this type is used to define ",(0,l.kt)("a",{parentName:"p",href:"/series/intro"},"Series")," data type"),(0,l.kt)("p",null,"The used data must be extands from the following types:"),(0,l.kt)("h2",{id:"1-seriespoint"},"1. SeriesPoint"),(0,l.kt)("h3",{id:"definition"},"Definition"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"In typescript :")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Array<{x:number,y:number}>"),(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Explication :")," Array of point, each point must have the two coordinates as a ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),", x in for horizantal ",(0,l.kt)("a",{parentName:"p",href:"/axes/intro"},"Axis")," and y for vertical ",(0,l.kt)("a",{parentName:"p",href:"/axes/intro"},"Axis"),(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Example :"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"[ { x: 1, y: 1 }, { x: 2, y: 5 }, { x: 3, y: 3 }, { x: 4, y: 2 }, { x: 5, y: 1 } ] ")),(0,l.kt)("h3",{id:"utilities"},"Utilities"),(0,l.kt)("p",null,"This type is used in :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/series/scatterSeries"},"ScatterSeries")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/series/lineSeries"},"LineSeries")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/series/barSeries"},"BarSeries"))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)(d,{mdxType:"DataSeriesPoint"}),(0,l.kt)("h2",{id:"2-rangeseriespoint"},"2. RangeSeriesPoint"),(0,l.kt)("h3",{id:"definition-1"},"Definition"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"In typescript :")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Array<{x:number,y1:number,y2:number}>"),(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Explication :")," Array of point, each point must have the three coordinates as a ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),", x in for horizantal ",(0,l.kt)("a",{parentName:"p",href:"/axes/intro"},"Axis")," and y1,y2 to speficie the range for vertical ",(0,l.kt)("a",{parentName:"p",href:"/axes/intro"},"Axis"),(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Example :"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"[ { x: 1, y1: 0, y2: 2 }, { x: 2, y1: 2, y2: 3 }, { x: 3, y1: 3, y2: 4 } ]")),(0,l.kt)("h3",{id:"utilities-1"},"Utilities"),(0,l.kt)("p",null,"This type is used in :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/series/rangeSeries"},"RangeSeries"))),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)(x,{mdxType:"DataRangeSeriesPoint"}))}E.isMDXComponent=!0}}]);