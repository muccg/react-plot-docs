"use strict";(self.webpackChunkdocs_react_plot=self.webpackChunkdocs_react_plot||[]).push([[800],{2401:function(e,t,n){n.r(t),n.d(t,{assets:function(){return B},contentTitle:function(){return P},default:function(){return M},frontMatter:function(){return L},metadata:function(){return w},toc:function(){return Z}});var r=n(7462),a=n(3366),l=n(7294),i=n(3905),o=n(1465),s=n(1736),u=n(1119),p="import React from 'react';\nimport { Plot, LineSeries } from 'react-plot';\n\nexport default function Series() {\n  return (\n    <Plot width={300} height={300}>\n      <LineSeries\n        data={[\n          { x: 1, y: 1 },\n          { x: 2, y: 2 },\n          { x: 3, y: 3 },\n          { x: 4, y: 2 },\n          { x: 5, y: 1 },\n        ]}\n      />\n      <LineSeries\n        data={[\n          { x: 1, y: 0 },\n          { x: 2, y: 1 },\n          { x: 3, y: 2 },\n          { x: 4, y: 1 },\n          { x: 5, y: 2 },\n          { x: 6, y: 3 },\n        ]}\n      />\n    </Plot>\n  );\n}\n",m=function(){return l.createElement(o.XN,{width:300,height:300},l.createElement(o.eh,{data:[{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:2},{x:5,y:1}]}),l.createElement(o.eh,{data:[{x:1,y:0},{x:2,y:1},{x:3,y:2},{x:4,y:1},{x:5,y:2},{x:6,y:3}]}))};function d(e){var t=(0,l.useState)(!1),n=t[0],r=t[1];return l.createElement(l.Fragment,null,l.createElement("div",{className:"demo-example-wrapper"},l.createElement(m,null),l.createElement("div",{className:"demo-example-buttons"},l.createElement("button",{onClick:function(){return r((function(e){return!e}))},type:"button",style:{backgroundColor:n?"#dbeafe":void 0}},"Code"),e.noCodesandbox?null:l.createElement(u.Z,{name:"series",source:p,dependencies:{react:"^17.0.2","react-plot":"^0.17.1"}},(function(){return l.createElement("button",{type:"submit"},"Open sandbox")})))),n&&l.createElement(s.Z,{className:"language-jsx"},p))}var c="import React from 'react';\nimport { Plot, LineSeries } from 'react-plot';\n\nexport default function Series() {\n  return (\n    <Plot width={300} height={300}>\n      <LineSeries\n        displayMarkers\n        markerShape=\"diamond\"\n        markerSize={15}\n        markerStyle={{\n          fill: ({ x }) => (x > 3 ? 'blue' : 'red'),\n          stroke: 'black',\n        }}\n        data={[\n          { x: 1, y: 1 },\n          { x: 2, y: 2 },\n          { x: 3, y: 3 },\n          { x: 4, y: 2 },\n          { x: 5, y: 1 },\n        ]}\n      />\n    </Plot>\n  );\n}\n",y=function(){return l.createElement(o.XN,{width:300,height:300},l.createElement(o.eh,{displayMarkers:!0,markerShape:"diamond",markerSize:15,markerStyle:{fill:function(e){return e.x>3?"blue":"red"},stroke:"black"},data:[{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:2},{x:5,y:1}]}))};function k(e){var t=(0,l.useState)(!1),n=t[0],r=t[1];return l.createElement(l.Fragment,null,l.createElement("div",{className:"demo-example-wrapper"},l.createElement(y,null),l.createElement("div",{className:"demo-example-buttons"},l.createElement("button",{onClick:function(){return r((function(e){return!e}))},type:"button",style:{backgroundColor:n?"#dbeafe":void 0}},"Code"),e.noCodesandbox?null:l.createElement(u.Z,{name:"series",source:c,dependencies:{react:"^17.0.2","react-plot":"^0.17.1"}},(function(){return l.createElement("button",{type:"submit"},"Open sandbox")})))),n&&l.createElement(s.Z,{className:"language-jsx"},c))}var x="import React from 'react';\nimport { Plot, LineSeries } from 'react-plot';\n\nexport default function Series() {\n  return (\n    <Plot width={300} height={300}>\n      <LineSeries\n        pointLabel=\"5\"\n        pointLabelStyle={{\n          fill: ({ x }) => (x > 2 ? 'green' : 'blue'),\n          fontWeight: 'bolder',\n        }}\n        data={[\n          { x: 1, y: 1 },\n          { x: 2, y: 2 },\n          { x: 3, y: 3 },\n          { x: 4, y: 2 },\n          { x: 5, y: 1 },\n        ]}\n      />\n      <LineSeries\n        pointLabel={({ x, y }) => `(${x},${y})`}\n        pointLabelStyle={{\n          transform: 'translate(3px, -4px)',\n        }}\n        data={[\n          { x: 1, y: 0 },\n          { x: 2, y: 1 },\n          { x: 3, y: 2 },\n          { x: 4, y: 1 },\n          { x: 5, y: 2 },\n          { x: 6, y: 3 },\n        ]}\n      />\n    </Plot>\n  );\n}\n",b=function(){return l.createElement(o.XN,{width:300,height:300},l.createElement(o.eh,{pointLabel:"5",pointLabelStyle:{fill:function(e){return e.x>2?"green":"blue"},fontWeight:"bolder"},data:[{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:2},{x:5,y:1}]}),l.createElement(o.eh,{pointLabel:function(e){return"("+e.x+","+e.y+")"},pointLabelStyle:{transform:"translate(3px, -4px)"},data:[{x:1,y:0},{x:2,y:1},{x:3,y:2},{x:4,y:1},{x:5,y:2},{x:6,y:3}]}))};function f(e){var t=(0,l.useState)(!1),n=t[0],r=t[1];return l.createElement(l.Fragment,null,l.createElement("div",{className:"demo-example-wrapper"},l.createElement(b,null),l.createElement("div",{className:"demo-example-buttons"},l.createElement("button",{onClick:function(){return r((function(e){return!e}))},type:"button",style:{backgroundColor:n?"#dbeafe":void 0}},"Code"),e.noCodesandbox?null:l.createElement(u.Z,{name:"series",source:x,dependencies:{react:"^17.0.2","react-plot":"^0.17.1"}},(function(){return l.createElement("button",{type:"submit"},"Open sandbox")})))),n&&l.createElement(s.Z,{className:"language-jsx"},x))}var S="import React from 'react';\nimport { Plot, LineSeries } from 'react-plot';\n\nexport default function Series() {\n  return (\n    <Plot width={300} height={300}>\n      <LineSeries\n        displayErrorBars\n        errorBarsStyle={{ stroke: 'green', strokeWidth: '5px' }}\n        errorBarsCapSize={10}\n        errorBarsCapStyle={{ stroke: 'blue', strokeWidth: '2px' }}\n        data={[\n          { x: 1, y: 1, xError: 0.2 },\n          { x: 2, y: 2, yError: 0.05 },\n          { x: 3, y: 3, xError: [0.1, 0.2], yError: [0.2, 0.3] },\n          { x: 4, y: 2, xError: [0.6, 0.2], yError: [0.2, 0.3] },\n          { x: 5, y: 1 },\n        ]}\n      />\n    </Plot>\n  );\n}\n",h=function(){return l.createElement(o.XN,{width:300,height:300},l.createElement(o.eh,{displayErrorBars:!0,errorBarsStyle:{stroke:"green",strokeWidth:"5px"},errorBarsCapSize:10,errorBarsCapStyle:{stroke:"blue",strokeWidth:"2px"},data:[{x:1,y:1,xError:.2},{x:2,y:2,yError:.05},{x:3,y:3,xError:[.1,.2],yError:[.2,.3]},{x:4,y:2,xError:[.6,.2],yError:[.2,.3]},{x:5,y:1}]}))};function E(e){var t=(0,l.useState)(!1),n=t[0],r=t[1];return l.createElement(l.Fragment,null,l.createElement("div",{className:"demo-example-wrapper"},l.createElement(h,null),l.createElement("div",{className:"demo-example-buttons"},l.createElement("button",{onClick:function(){return r((function(e){return!e}))},type:"button",style:{backgroundColor:n?"#dbeafe":void 0}},"Code"),e.noCodesandbox?null:l.createElement(u.Z,{name:"series",source:S,dependencies:{react:"^17.0.2","react-plot":"^0.17.1"}},(function(){return l.createElement("button",{type:"submit"},"Open sandbox")})))),n&&l.createElement(s.Z,{className:"language-jsx"},S))}var N="import React from 'react';\nimport { Plot, LineSeries } from 'react-plot';\n\nexport default function Series() {\n  return (\n    <Plot width={300} height={300}>\n      <LineSeries\n        lineStyle={{ stroke: 'green' }}\n        data={[\n          { x: 1, y: 1 },\n          { x: 2, y: 2 },\n          { x: 3, y: 3 },\n          { x: 4, y: 2 },\n          { x: 5, y: 1 },\n        ]}\n      />\n    </Plot>\n  );\n}\n",g=function(){return l.createElement(o.XN,{width:300,height:300},l.createElement(o.eh,{lineStyle:{stroke:"green"},data:[{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:2},{x:5,y:1}]}))};function C(e){var t=(0,l.useState)(!1),n=t[0],r=t[1];return l.createElement(l.Fragment,null,l.createElement("div",{className:"demo-example-wrapper"},l.createElement(g,null),l.createElement("div",{className:"demo-example-buttons"},l.createElement("button",{onClick:function(){return r((function(e){return!e}))},type:"button",style:{backgroundColor:n?"#dbeafe":void 0}},"Code"),e.noCodesandbox?null:l.createElement(u.Z,{name:"series",source:N,dependencies:{react:"^17.0.2","react-plot":"^0.17.1"}},(function(){return l.createElement("button",{type:"submit"},"Open sandbox")})))),n&&l.createElement(s.Z,{className:"language-jsx"},N))}var v=["components"],L={},P="LineSeries",w={unversionedId:"series/lineSeries",id:"series/lineSeries",title:"LineSeries",description:"Display",source:"@site/docs/100_series/200_lineSeries.md",sourceDirName:"100_series",slug:"/series/lineSeries",permalink:"/series/lineSeries",editUrl:"https://github.com/zakodium-oss/react-plot-docs/tree/main/docs/100_series/200_lineSeries.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ScatterSeries",permalink:"/series/scatterSeries"},next:{title:"BarSeries",permalink:"/series/barSeries"}},B={},Z=[{value:"Display",id:"display",level:2},{value:"Data",id:"data",level:2},{value:"Props",id:"props",level:2},{value:"1. Markers",id:"1-markers",level:3},{value:"2. Point Label",id:"2-point-label",level:3},{value:"3. ErrorBars",id:"3-errorbars",level:3},{value:"4. Lines",id:"4-lines",level:3}],D={toc:Z};function M(e){var t=e.components,n=(0,a.Z)(e,v);return(0,i.kt)("wrapper",(0,r.Z)({},D,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lineseries"},"LineSeries"),(0,i.kt)("h2",{id:"display"},"Display"),(0,i.kt)(d,{mdxType:"LineSeriesDemo"}),(0,i.kt)("h2",{id:"data"},"Data"),(0,i.kt)("p",null,"point type must extand from ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/types/data#1-seriespoint"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesPoint")))),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("p",null,"Like all other series, scatter series have ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/series/intro/#base-props"},"Base props")),(0,i.kt)("br",null),"\nThey also have many other props that we can class into the following categories :"),(0,i.kt)("h3",{id:"1-markers"},"1. Markers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"displayMarkers:")," display scatter points markers",(0,i.kt)("br",null),"\ntype: ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),(0,i.kt)("br",null),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"markerShape:")," serie's markers shape",(0,i.kt)("br",null),"\ntype: ",(0,i.kt)("inlineCode",{parentName:"li"},"Shape"),(0,i.kt)("br",null),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"li"},"'circle'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"markerSize:")," serie's markers size",(0,i.kt)("br",null),"\ntype: ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),(0,i.kt)("br",null),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"li"},"8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"markerStyle:")," serie's markers style that can be dynamique or statique",(0,i.kt)("br",null),"\ntype: ",(0,i.kt)("inlineCode",{parentName:"li"},"CSSFuncProps"),(0,i.kt)("br",null),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"))),(0,i.kt)(k,{mdxType:"LineSeriesMarkerDemo"}),(0,i.kt)("h3",{id:"2-point-label"},"2. Point Label"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pointLabel:")," serie's point label that can be statique or dynamique depending points",(0,i.kt)("br",null),"\ntype: ",(0,i.kt)("inlineCode",{parentName:"li"},"LabelFuncProps<point>"),(0,i.kt)("br",null),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"li"},"''")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pointLabelStyle:")," serie's point label style, statique or dynamique depending points",(0,i.kt)("br",null),"\ntype: ",(0,i.kt)("inlineCode",{parentName:"li"},"CSSFuncProps<point>"),(0,i.kt)("br",null),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"))),(0,i.kt)(f,{mdxType:"LineSeriesPointLabel"}),(0,i.kt)("h3",{id:"3-errorbars"},"3. ErrorBars"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"displayErrorBars:")," display errors bars in the serie",(0,i.kt)("br",null),"\ntype: ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),(0,i.kt)("br",null),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"errorBarsStyle:")," change error bars style",(0,i.kt)("br",null),"\ntype: ",(0,i.kt)("inlineCode",{parentName:"li"},"SVGAttributes<SVGLineElement>"),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"errorBarsCapSize:")," size of error bars cap",(0,i.kt)("br",null),"\ntype: ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"errorBarsCapStyle:")," change error bars cap's style",(0,i.kt)("br",null),"\ntype: ",(0,i.kt)("inlineCode",{parentName:"li"},"SVGAttributes<SVGLineElement>"),(0,i.kt)("br",null))),(0,i.kt)(E,{mdxType:"LineSeriesError"}),(0,i.kt)("h3",{id:"4-lines"},"4. Lines"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"lineStyle:")," styling of the serie's path statique or dynamique that depend series id",(0,i.kt)("br",null),"\ntype: ",(0,i.kt)("inlineCode",{parentName:"li"},"CSSFuncProps<{id}>"),(0,i.kt)("br",null),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)(C,{mdxType:"LineSeriesLines"}))}M.isMDXComponent=!0}}]);