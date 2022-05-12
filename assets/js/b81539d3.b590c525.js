"use strict";(self.webpackChunkdocs_react_plot=self.webpackChunkdocs_react_plot||[]).push([[77],{6678:function(e,t,n){n.r(t),n.d(t,{assets:function(){return C},contentTitle:function(){return y},default:function(){return S},frontMatter:function(){return b},metadata:function(){return g},toc:function(){return P}});var o=n(7462),r=n(3366),a=n(7294),l=n(3905),s=n(2255),i=n(1465),c=n(1736),u=n(1119);function d(){var e=(0,a.useState)(),t=e[0],n=e[1];return(0,i.T1)({onStart:function(e){n({kind:"onStart",event:e})},onMove:function(e){n({kind:"onMove",event:e})},onEnd:function(e){n({kind:"onEnd",event:e})}}),a.createElement("div",{style:{display:"flex"}},a.createElement(i.XN,{width:300,height:300},a.createElement(i.eh,{data:[{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:2},{x:5,y:1}]})),a.createElement(s.vu,{data:t,expandLevel:2,expandPaths:["$.event.coordinates","$.event.clampedCoordinates"]}))}var m="import React from 'react';\nimport { useState } from 'react';\nimport { ObjectInspector } from 'react-inspector';\nimport { LineSeries, Plot, PlotController, useStartMoveEnd } from 'react-plot';\nimport { TrackingResult } from 'react-plot/lib-esm/components/Tracking';\n\nfunction TrackablePlot() {\n  const [currentEvent, setCurrentEvent] =\n    useState<{ kind: string; event: TrackingResult }>();\n  useStartMoveEnd({\n    onStart: (event) => {\n      setCurrentEvent({ kind: 'onStart', event });\n    },\n    onMove: (event) => {\n      setCurrentEvent({ kind: 'onMove', event });\n    },\n    onEnd: (event) => {\n      setCurrentEvent({ kind: 'onEnd', event });\n    },\n  });\n  return (\n    <div style={{ display: 'flex' }}>\n      <Plot width={300} height={300}>\n        <LineSeries\n          data={[\n            { x: 1, y: 1 },\n            { x: 2, y: 2 },\n            { x: 3, y: 3 },\n            { x: 4, y: 2 },\n            { x: 5, y: 1 },\n          ]}\n        />\n      </Plot>\n      <ObjectInspector\n        data={currentEvent}\n        expandLevel={2}\n        expandPaths={['$.event.coordinates', '$.event.clampedCoordinates']}\n      />\n    </div>\n  );\n}\n\nexport default function UseStartMoveEnd() {\n  return (\n    <PlotController>\n      <TrackablePlot />\n    </PlotController>\n  );\n}\n",p=function(){return a.createElement(i.aE,null,a.createElement(d,null))};function v(e){var t=(0,a.useState)(!1),n=t[0],o=t[1];return a.createElement(a.Fragment,null,a.createElement("div",{className:"demo-example-wrapper"},a.createElement(p,null),a.createElement("div",{className:"demo-example-buttons"},a.createElement("button",{onClick:function(){return o((function(e){return!e}))},type:"button",style:{backgroundColor:n?"#dbeafe":void 0}},"Code"),e.noCodesandbox?null:a.createElement(u.Z,{name:"use-start-move-end",source:m,dependencies:{react:"^17.0.2","react-inspector":"^5.1.1","react-plot":"^0.17.1"}},(function(){return a.createElement("button",{type:"submit"},"Open sandbox")})))),n&&a.createElement(c.Z,{className:"language-jsx"},m))}function x(){var e=(0,a.useState)(),t=e[0],n=e[1],o=(0,i.NU)(),r=(0,i.Dh)();return(0,a.useEffect)((function(){n(r)}),[r]),a.createElement("div",{style:{display:"flex"}},a.createElement(i.XN,{width:300,height:300},a.createElement(i.eh,{data:[{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:2},{x:5,y:1}]}),a.createElement(i.RD,{position:"left",id:"y"}),a.createElement(i.RD,{position:"bottom",id:"x"}),a.createElement(i.uN,null,o.annotations)),a.createElement(s.vu,{data:t,expandLevel:2}))}var k="import React, { useEffect } from 'react';\nimport { useState } from 'react';\nimport { ObjectInspector } from 'react-inspector';\nimport {\n  Annotations,\n  Axis,\n  LineSeries,\n  Plot,\n  PlotController,\n  usePlotControllerAxes,\n  useRectangularZoom,\n} from 'react-plot';\nimport { PlotAxesOverrides } from 'react-plot/lib-esm/contexts/plotController/usePlotOverrides';\n\nfunction TrackablePlot() {\n  const [axis, setAxis] = useState<PlotAxesOverrides>();\n  const zoom = useRectangularZoom();\n  const x = usePlotControllerAxes();\n  useEffect(() => {\n    setAxis(x);\n  }, [x]);\n  return (\n    <div style={{ display: 'flex' }}>\n      <Plot width={300} height={300}>\n        <LineSeries\n          data={[\n            { x: 1, y: 1 },\n            { x: 2, y: 2 },\n            { x: 3, y: 3 },\n            { x: 4, y: 2 },\n            { x: 5, y: 1 },\n          ]}\n        />\n        <Axis position=\"left\" id=\"y\" />\n        <Axis position=\"bottom\" id=\"x\" />\n        <Annotations>{zoom.annotations}</Annotations>\n      </Plot>\n      <ObjectInspector data={axis} expandLevel={2} />\n    </div>\n  );\n}\n\nexport default function UsePlotControllerAxes() {\n  return (\n    <PlotController>\n      <TrackablePlot />\n    </PlotController>\n  );\n}\n",f=function(){return a.createElement(i.aE,null,a.createElement(x,null))};function h(e){var t=(0,a.useState)(!1),n=t[0],o=t[1];return a.createElement(a.Fragment,null,a.createElement("div",{className:"demo-example-wrapper"},a.createElement(f,null),a.createElement("div",{className:"demo-example-buttons"},a.createElement("button",{onClick:function(){return o((function(e){return!e}))},type:"button",style:{backgroundColor:n?"#dbeafe":void 0}},"Code"),e.noCodesandbox?null:a.createElement(u.Z,{name:"use-plot-controller-axes",source:k,dependencies:{react:"^17.0.2","react-inspector":"^5.1.1","react-plot":"^0.17.1"}},(function(){return a.createElement("button",{type:"submit"},"Open sandbox")})))),n&&a.createElement(c.Z,{className:"language-jsx"},k))}var E=["components"],b={},y="Basic",g={unversionedId:"hooks/basic",id:"hooks/basic",title:"Basic",description:"Low level hooks used by other hooks but can also be used natively.",source:"@site/docs/400_hooks/100_basic.md",sourceDirName:"400_hooks",slug:"/hooks/basic",permalink:"/hooks/basic",editUrl:"https://github.com/zakodium-oss/react-plot-docs/tree/main/docs/400_hooks/100_basic.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/hooks/intro"},next:{title:"Draw",permalink:"/hooks/draw"}},C={},P=[{value:"useStartMoveEnd",id:"usestartmoveend",level:2},{value:"usePlotControllerAxes",id:"useplotcontrolleraxes",level:2}],w={toc:P};function S(e){var t=e.components,n=(0,r.Z)(e,E);return(0,l.kt)("wrapper",(0,o.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"basic"},"Basic"),(0,l.kt)("p",null,"Low level hooks used by other hooks but can also be used natively."),(0,l.kt)("p",null,"currently we support the following basic hooks:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/hooks/basic#usestartmoveend"},"useStartMoveEnd"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/hooks/basic#useplotcontrolleraxes"},"usePlotControllerAxes")))),(0,l.kt)("h2",{id:"usestartmoveend"},"useStartMoveEnd"),(0,l.kt)("p",null,"The low level hook ",(0,l.kt)("inlineCode",{parentName:"p"},"useStartMoveEnd")," allows to track the mouse."),(0,l.kt)("p",null,"It accepts 3 callbacks:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"onStart: the mouse was clicked"),(0,l.kt)("li",{parentName:"ul"},"onMove: the mouse was dragged"),(0,l.kt)("li",{parentName:"ul"},"onEnd: the mouse was released")),(0,l.kt)("p",null,"In the following example we simply log the different events."),(0,l.kt)(v,{mdxType:"UseStartMoveEndDemo"}),(0,l.kt)("h2",{id:"useplotcontrolleraxes"},"usePlotControllerAxes"),(0,l.kt)("p",null,"The low level hook ",(0,l.kt)("inlineCode",{parentName:"p"},"usePlotControllerAxes")," allows to track axis state (max, min) after any modification."),(0,l.kt)("p",null,"In the following example we simply log axes domain while using ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"/hooks/functional#userectangularzoom"},"UseRectangularZoom")),"."),(0,l.kt)(h,{mdxType:"UsePlotControllerAxes"}))}S.isMDXComponent=!0}}]);