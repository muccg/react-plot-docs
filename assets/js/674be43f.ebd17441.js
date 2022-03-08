"use strict";(self.webpackChunkdocs_react_plot=self.webpackChunkdocs_react_plot||[]).push([[87],{9016:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(412);function o(){if(a.Z.canUseDOM)return n(4576).O}},222:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return v},default:function(){return w},frontMatter:function(){return E},metadata:function(){return k},toc:function(){return P}});var a=n(7462),o=n(3366),r=n(7294),i=n(3905),l=n(1059),s=n(1736),c=n(1119),m='import React from \'react\';\nimport { Axis, LineSeries, Plot } from \'react-plot\';\n\nexport default function DrainVoltage() {\n  return (\n    <Plot width={300} height={300}>\n      <LineSeries\n        data={[\n          { x: 1, y: 1 },\n          { x: 2, y: 2 },\n          { x: 3, y: 3 },\n          { x: 4, y: 2 },\n          { x: 5, y: 1 },\n        ]}\n        xAxis="x"\n        yAxis="y"\n      />\n      <Axis\n        id="x"\n        position="bottom"\n        label="Drain voltage [V]"\n        displayPrimaryGridLines\n      />\n      <Axis\n        id="y"\n        position="left"\n        label="Drain current [mA]"\n        displayPrimaryGridLines\n      />\n    </Plot>\n  );\n}\n',u=function(){return r.createElement(l.XN,{width:300,height:300},r.createElement(l.eh,{data:[{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:2},{x:5,y:1}],xAxis:"x",yAxis:"y"}),r.createElement(l.RD,{id:"x",position:"bottom",label:"Drain voltage [V]",displayPrimaryGridLines:!0}),r.createElement(l.RD,{id:"y",position:"left",label:"Drain current [mA]",displayPrimaryGridLines:!0}))};function d(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return r.createElement(r.Fragment,null,r.createElement("div",{className:"demo-example-wrapper"},r.createElement(u,null),r.createElement("div",{className:"demo-example-buttons"},r.createElement("button",{onClick:function(){return n((function(e){return!e}))},type:"button",style:{backgroundColor:t?"#dbeafe":void 0}},"Code"),r.createElement(c.Z,{name:"drain-voltage",source:m,dependencies:{react:"^17.0.2","react-plot":"^0.16.0"}},(function(){return r.createElement("button",{type:"submit"},"Open sandbox")})))),t&&r.createElement(s.Z,{className:"language-jsx"},m))}var p=n(4100),f=n(9016);function x(){var e=(0,r.useState)([]),t=e[0],n=e[1];(0,r.useEffect)((function(){fetch("/data/ir.jdx").then((function(e){e.text().then((function(e){var t=(0,p.G0)((0,f.Z)()(e).flatten[0].spectra[0].data).map((function(e){return{x:e.x,y:100*e.y}}));n(t)}))}))}),[]);var a=(0,l.NU)();return r.createElement(l.XN,{width:800,height:300},r.createElement(l.eh,{data:t,xAxis:"x",yAxis:"y"}),r.createElement(l.RD,{id:"x",position:"bottom",label:"Wavenumber (cm-1)",displayPrimaryGridLines:!0,flip:!0}),r.createElement(l.RD,{id:"y",position:"left",label:"Transmitance (%)",displayPrimaryGridLines:!0}),r.createElement(l.uN,null,a.annotations))}var y='import { xyToXYObject } from \'ml-spectra-processing\';\nimport React, { useEffect, useState } from \'react\';\nimport {\n  Annotations,\n  Axis,\n  LineSeries,\n  Plot,\n  PlotController,\n  SeriesPoint,\n  useRectangularZoom,\n} from \'react-plot\';\nimport getConvertJcamp from \'../src/util/getConvertJcamp\';\n\nfunction ZoomablePlot() {\n  const [data, setData] = useState<SeriesPoint[]>([]);\n\n  useEffect(() => {\n    fetch(\'/data/ir.jdx\').then((response) => {\n      response.text().then((jcamp) => {\n        const data = xyToXYObject(\n          getConvertJcamp()(jcamp).flatten[0].spectra[0].data,\n        ).map((point) => ({ x: point.x, y: point.y * 100 }));\n        setData(data);\n      });\n    });\n  }, []);\n  const zoom = useRectangularZoom();\n  return (\n    <Plot width={800} height={300}>\n      <LineSeries data={data} xAxis="x" yAxis="y" />\n      <Axis\n        id="x"\n        position="bottom"\n        label="Wavenumber (cm-1)"\n        displayPrimaryGridLines\n        flip={true}\n      />\n      <Axis\n        id="y"\n        position="left"\n        label="Transmitance (%)"\n        displayPrimaryGridLines\n      />\n      <Annotations>{zoom.annotations}</Annotations>\n    </Plot>\n  );\n}\n\nexport default function ZoomableInfraredSpectrum() {\n  return (\n    <PlotController>\n      <ZoomablePlot />\n    </PlotController>\n  );\n}\n',b=function(){return r.createElement(l.aE,null,r.createElement(x,null))};function g(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return r.createElement(r.Fragment,null,r.createElement("div",{className:"demo-example-wrapper"},r.createElement(b,null),r.createElement("div",{className:"demo-example-buttons"},r.createElement("button",{onClick:function(){return n((function(e){return!e}))},type:"button",style:{backgroundColor:t?"#dbeafe":void 0}},"Code"),r.createElement(c.Z,{name:"zoomable-infrared-spectrum",source:y,dependencies:{"ml-spectra-processing":"^9.1.0",react:"^17.0.2","react-plot":"^0.16.0"}},(function(){return r.createElement("button",{type:"submit"},"Open sandbox")})))),t&&r.createElement(s.Z,{className:"language-jsx"},y))}var h=["components"],E={slug:"/"},v="Introduction",k={unversionedId:"intro",id:"intro",title:"Introduction",description:"React-plot is a react component specially designed to display scientific information like spectra or measurements. It allows to display large amount of data as well as annotations like ellipse, text or the result of a peak picking.",source:"@site/docs/000_intro.md",sourceDirName:".",slug:"/",permalink:"/",editUrl:"https://github.com/zakodium/react-plot-docs/tree/main/docs/000_intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:"/"},sidebar:"tutorialSidebar",next:{title:"Heading",permalink:"/plot/heading"}},P=[],A={toc:P};function w(e){var t=e.components,n=(0,o.Z)(e,h);return(0,i.kt)("wrapper",(0,a.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"React-plot is a react component specially designed to display scientific information like spectra or measurements. It allows to display large amount of data as well as annotations like ellipse, text or the result of a peak picking."),(0,i.kt)(d,{mdxType:"DrainVoltage"}),(0,i.kt)("p",null,"Interactivity with the plot is achieved Using ",(0,i.kt)("inlineCode",{parentName:"p"},"hooks"),". In the following example it is possible to draw a rectangle to zoom and click twice to reset the original zoom."),(0,i.kt)(g,{mdxType:"ZoomableInfrared"}))}w.isMDXComponent=!0}}]);