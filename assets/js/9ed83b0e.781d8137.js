"use strict";(self.webpackChunkdocs_react_plot=self.webpackChunkdocs_react_plot||[]).push([[378],{3412:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return B},default:function(){return A},frontMatter:function(){return D},metadata:function(){return Z},toc:function(){return F}});var r=n(7462),a=n(3366),i=n(7294),o=n(3905),l=n(1059),s=n(1736),c=n(1119),m="import React from 'react';\nimport { LineSeries, Plot } from 'react-plot';\n\nexport default function Series() {\n  return (\n    <Plot width={300} height={300}>\n      <LineSeries\n        data={[\n          { x: 1, y: 1 },\n          { x: 2, y: 2 },\n          { x: 3, y: 3 },\n          { x: 4, y: 2 },\n          { x: 5, y: 1 },\n        ]}\n        lineStyle={{ stroke: 'blue' }}\n        displayMarker={true}\n        markerShape=\"circle\"\n        markerSize={8}\n        markerStyle={{ fill: 'yellow' }}\n      />\n      <LineSeries\n        data={[\n          { x: 1, y: 2 },\n          { x: 2, y: 1 },\n          { x: 3, y: 2 },\n          { x: 4, y: 1 },\n          { x: 5, y: 2 },\n        ]}\n        lineStyle={{ stroke: 'green' }}\n      />\n    </Plot>\n  );\n}\n",u=function(){return i.createElement(l.XN,{width:300,height:300},i.createElement(l.eh,{data:[{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:2},{x:5,y:1}],lineStyle:{stroke:"blue"},displayMarker:!0,markerShape:"circle",markerSize:8,markerStyle:{fill:"yellow"}}),i.createElement(l.eh,{data:[{x:1,y:2},{x:2,y:1},{x:3,y:2},{x:4,y:1},{x:5,y:2}],lineStyle:{stroke:"green"}}))};function d(e){var t=(0,i.useState)(!1),n=t[0],r=t[1];return i.createElement(i.Fragment,null,i.createElement("div",{className:"demo-example-wrapper"},i.createElement(u,null),i.createElement("div",{className:"demo-example-buttons"},i.createElement("button",{onClick:function(){return r((function(e){return!e}))},type:"button",style:{backgroundColor:n?"#dbeafe":void 0}},"Code"),e.noCodesandbox?null:i.createElement(c.Z,{name:"series",source:m,dependencies:{react:"^17.0.2","react-plot":"^0.16.0"}},(function(){return i.createElement("button",{type:"submit"},"Open sandbox")})))),n&&i.createElement(s.Z,{className:"language-jsx"},m))}var x="import React from 'react';\nimport { Axis, LineSeries, Plot } from 'react-plot';\n\nexport default function Series() {\n  return (\n    <Plot width={300} height={300}>\n      <LineSeries\n        data={[\n          { x: 1, y: 1, xError: 0.2 },\n          { x: 2, y: 2, yError: 0.05 },\n          { x: 3, y: 3, xError: [0.1, 0.2], yError: [0.2, 0.3] },\n          { x: 4, y: 2 },\n          { x: 5, y: 1 },\n        ]}\n        lineStyle={{ stroke: 'blue' }}\n        displayErrorBars={true}\n        errorBarsCapSize={5}\n        errorBarsStyle={{ strokeWidth: 1 }}\n        errorBarsCapStyle={{ stroke: 'blue' }}\n      />\n      <Axis min={0} max={6} id=\"x\" position=\"bottom\" />\n      <Axis min={0} max={4} id=\"y\" position=\"left\" />\n    </Plot>\n  );\n}\n",y=function(){return i.createElement(l.XN,{width:300,height:300},i.createElement(l.eh,{data:[{x:1,y:1,xError:.2},{x:2,y:2,yError:.05},{x:3,y:3,xError:[.1,.2],yError:[.2,.3]},{x:4,y:2},{x:5,y:1}],lineStyle:{stroke:"blue"},displayErrorBars:!0,errorBarsCapSize:5,errorBarsStyle:{strokeWidth:1},errorBarsCapStyle:{stroke:"blue"}}),i.createElement(l.RD,{min:0,max:6,id:"x",position:"bottom"}),i.createElement(l.RD,{min:0,max:4,id:"y",position:"left"}))};function p(e){var t=(0,i.useState)(!1),n=t[0],r=t[1];return i.createElement(i.Fragment,null,i.createElement("div",{className:"demo-example-wrapper"},i.createElement(y,null),i.createElement("div",{className:"demo-example-buttons"},i.createElement("button",{onClick:function(){return r((function(e){return!e}))},type:"button",style:{backgroundColor:n?"#dbeafe":void 0}},"Code"),e.noCodesandbox?null:i.createElement(c.Z,{name:"series",source:x,dependencies:{react:"^17.0.2","react-plot":"^0.16.0"}},(function(){return i.createElement("button",{type:"submit"},"Open sandbox")})))),n&&i.createElement(s.Z,{className:"language-jsx"},x))}var f="import React from 'react';\nimport { Plot, ScatterSeries } from 'react-plot';\n\nexport default function Series() {\n  return (\n    <Plot width={300} height={300}>\n      <ScatterSeries\n        data={[\n          { x: 1, y: 1 },\n          { x: 2, y: 2 },\n          { x: 3, y: 3 },\n          { x: 4, y: 2 },\n          { x: 5, y: 1 },\n        ]}\n      />\n      <ScatterSeries\n        data={[\n          { x: 1, y: 2 },\n          { x: 2, y: 1 },\n          { x: 3, y: 2 },\n          { x: 4, y: 1 },\n          { x: 5, y: 2 },\n        ]}\n      />\n    </Plot>\n  );\n}\n",S=function(){return i.createElement(l.XN,{width:300,height:300},i.createElement(l.nC,{data:[{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:2},{x:5,y:1}]}),i.createElement(l.nC,{data:[{x:1,y:2},{x:2,y:1},{x:3,y:2},{x:4,y:1},{x:5,y:2}]}))};function b(e){var t=(0,i.useState)(!1),n=t[0],r=t[1];return i.createElement(i.Fragment,null,i.createElement("div",{className:"demo-example-wrapper"},i.createElement(S,null),i.createElement("div",{className:"demo-example-buttons"},i.createElement("button",{onClick:function(){return r((function(e){return!e}))},type:"button",style:{backgroundColor:n?"#dbeafe":void 0}},"Code"),e.noCodesandbox?null:i.createElement(c.Z,{name:"series",source:f,dependencies:{react:"^17.0.2","react-plot":"^0.16.0"}},(function(){return i.createElement("button",{type:"submit"},"Open sandbox")})))),n&&i.createElement(s.Z,{className:"language-jsx"},f))}var h='import React from \'react\';\nimport { Axis, FunctionSeries, Legend, Plot } from \'react-plot\';\n\nexport default function Series() {\n  return (\n    <Plot width={800} height={300}>\n      <FunctionSeries\n        getY={(x) => Math.sin(x)}\n        label="y=4*sin(x)"\n        lineStyle={{ stroke: \'blue\' }}\n      />\n      <FunctionSeries\n        getY={(x) => Math.cos(x)}\n        label="y=4*cos(x)"\n        lineStyle={{ stroke: \'red\' }}\n      />\n      <Legend position="embedded" />\n      <Axis min={0} max={20} id="x" position="bottom" />\n      <Axis min={-2} max={2} id="y" position="left" />\n    </Plot>\n  );\n}\n',E=function(){return i.createElement(l.XN,{width:800,height:300},i.createElement(l.xN,{getY:function(e){return Math.sin(e)},label:"y=4*sin(x)",lineStyle:{stroke:"blue"}}),i.createElement(l.xN,{getY:function(e){return Math.cos(e)},label:"y=4*cos(x)",lineStyle:{stroke:"red"}}),i.createElement(l.De,{position:"embedded"}),i.createElement(l.RD,{min:0,max:20,id:"x",position:"bottom"}),i.createElement(l.RD,{min:-2,max:2,id:"y",position:"left"}))};function k(e){var t=(0,i.useState)(!1),n=t[0],r=t[1];return i.createElement(i.Fragment,null,i.createElement("div",{className:"demo-example-wrapper"},i.createElement(E,null),i.createElement("div",{className:"demo-example-buttons"},i.createElement("button",{onClick:function(){return r((function(e){return!e}))},type:"button",style:{backgroundColor:n?"#dbeafe":void 0}},"Code"),e.noCodesandbox?null:i.createElement(c.Z,{name:"series",source:h,dependencies:{react:"^17.0.2","react-plot":"^0.16.0"}},(function(){return i.createElement("button",{type:"submit"},"Open sandbox")})))),n&&i.createElement(s.Z,{className:"language-jsx"},h))}var g="import React from 'react';\nimport { Axis, BarSeries, Plot } from 'react-plot';\n\nexport default function Series() {\n  return (\n    <Plot width={300} height={300}>\n      <BarSeries\n        data={[\n          { x: 1, y: 1 },\n          { x: 2, y: 2 },\n          { x: 3, y: 3 },\n          { x: 4, y: 2 },\n          { x: 5, y: 1 },\n        ]}\n        lineStyle={{ stroke: 'rgba(255,0,0,0.5)', strokeWidth: '10' }}\n      />\n      <BarSeries\n        data={[\n          { x: 1, y: 2 },\n          { x: 2, y: 1 },\n          { x: 3, y: 2 },\n          { x: 4, y: 1 },\n          { x: 5, y: 2 },\n        ]}\n        lineStyle={{ stroke: 'rgba(0,255,0,0.5)', strokeWidth: '30' }}\n      />\n      <Axis min={0} max={6} id=\"x\" position=\"bottom\" />\n      <Axis min={0} id=\"y\" position=\"left\" />\n    </Plot>\n  );\n}\n",v=function(){return i.createElement(l.XN,{width:300,height:300},i.createElement(l.QG,{data:[{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:2},{x:5,y:1}],lineStyle:{stroke:"rgba(255,0,0,0.5)",strokeWidth:"10"}}),i.createElement(l.QG,{data:[{x:1,y:2},{x:2,y:1},{x:3,y:2},{x:4,y:1},{x:5,y:2}],lineStyle:{stroke:"rgba(0,255,0,0.5)",strokeWidth:"30"}}),i.createElement(l.RD,{min:0,max:6,id:"x",position:"bottom"}),i.createElement(l.RD,{min:0,id:"y",position:"left"}))};function C(e){var t=(0,i.useState)(!1),n=t[0],r=t[1];return i.createElement(i.Fragment,null,i.createElement("div",{className:"demo-example-wrapper"},i.createElement(v,null),i.createElement("div",{className:"demo-example-buttons"},i.createElement("button",{onClick:function(){return r((function(e){return!e}))},type:"button",style:{backgroundColor:n?"#dbeafe":void 0}},"Code"),e.noCodesandbox?null:i.createElement(c.Z,{name:"series",source:g,dependencies:{react:"^17.0.2","react-plot":"^0.16.0"}},(function(){return i.createElement("button",{type:"submit"},"Open sandbox")})))),n&&i.createElement(s.Z,{className:"language-jsx"},g))}var N="import React from 'react';\nimport { Plot, RangeSeries } from 'react-plot';\n\nexport default function Series() {\n  return (\n    <Plot width={300} height={300}>\n      <RangeSeries\n        data={[\n          { x: 1, y1: 1, y2: 5 },\n          { x: 2, y1: 2, y2: 4 },\n          { x: 3, y1: 3, y2: 4 },\n          { x: 4, y1: 2, y2: 4 },\n          { x: 5, y1: 1, y2: 5 },\n        ]}\n        lineStyle={{ stroke: 'red', strokeWidth: '3', fill: 'green' }}\n      />\n    </Plot>\n  );\n}\n",w=function(){return i.createElement(l.XN,{width:300,height:300},i.createElement(l.sD,{data:[{x:1,y1:1,y2:5},{x:2,y1:2,y2:4},{x:3,y1:3,y2:4},{x:4,y1:2,y2:4},{x:5,y1:1,y2:5}],lineStyle:{stroke:"red",strokeWidth:"3",fill:"green"}}))};function P(e){var t=(0,i.useState)(!1),n=t[0],r=t[1];return i.createElement(i.Fragment,null,i.createElement("div",{className:"demo-example-wrapper"},i.createElement(w,null),i.createElement("div",{className:"demo-example-buttons"},i.createElement("button",{onClick:function(){return r((function(e){return!e}))},type:"button",style:{backgroundColor:n?"#dbeafe":void 0}},"Code"),e.noCodesandbox?null:i.createElement(c.Z,{name:"series",source:N,dependencies:{react:"^17.0.2","react-plot":"^0.16.0"}},(function(){return i.createElement("button",{type:"submit"},"Open sandbox")})))),n&&i.createElement(s.Z,{className:"language-jsx"},N))}var R=["components"],D={},B="Series",Z={unversionedId:"series/intro",id:"series/intro",title:"Series",description:"There are currently 5 different kind of series that can be added in a plot:",source:"@site/docs/100_series/intro.md",sourceDirName:"100_series",slug:"/series/intro",permalink:"/series/intro",editUrl:"https://github.com/zakodium/react-plot-docs/tree/main/docs/100_series/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Heading",permalink:"/plot/heading"},next:{title:"Axis",permalink:"/axis/intro"}},F=[{value:"LineSeries",id:"lineseries",children:[],level:2},{value:"LineSeries with error bars",id:"lineseries-with-error-bars",children:[],level:2},{value:"ScatterSeries",id:"scatterseries",children:[],level:2},{value:"FunctionSeries",id:"functionseries",children:[],level:2},{value:"BarSeries",id:"barseries",children:[],level:2},{value:"RangeSeries",id:"rangeseries",children:[],level:2}],L={toc:F};function A(e){var t=e.components,n=(0,a.Z)(e,R);return(0,o.kt)("wrapper",(0,r.Z)({},L,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"series"},"Series"),(0,o.kt)("p",null,"There are currently 5 different kind of series that can be added in a plot:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"LineSeries"),(0,o.kt)("li",{parentName:"ul"},"ScatterSeries"),(0,o.kt)("li",{parentName:"ul"},"FunctionSeries"),(0,o.kt)("li",{parentName:"ul"},"BarSeries"),(0,o.kt)("li",{parentName:"ul"},"RangeSeries")),(0,o.kt)("p",null,"Series are direct children of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Plot")," component and you may have as many Series as you which on the same plot."),(0,o.kt)("h2",{id:"lineseries"},"LineSeries"),(0,o.kt)(d,{mdxType:"SeriesDemo"}),(0,o.kt)("h2",{id:"lineseries-with-error-bars"},"LineSeries with error bars"),(0,o.kt)(p,{mdxType:"SeriesWithErrorDemo"}),(0,o.kt)("h2",{id:"scatterseries"},"ScatterSeries"),(0,o.kt)(b,{mdxType:"ScatterSeriesDemo"}),(0,o.kt)("h2",{id:"functionseries"},"FunctionSeries"),(0,o.kt)(k,{mdxType:"FunctionSeriesDemo"}),(0,o.kt)("h2",{id:"barseries"},"BarSeries"),(0,o.kt)(C,{mdxType:"BarSeriesDemo"}),(0,o.kt)("h2",{id:"rangeseries"},"RangeSeries"),(0,o.kt)(P,{mdxType:"RangeSeriesDemo"}))}A.isMDXComponent=!0}}]);