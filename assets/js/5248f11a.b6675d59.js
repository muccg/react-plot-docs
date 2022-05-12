"use strict";(self.webpackChunkdocs_react_plot=self.webpackChunkdocs_react_plot||[]).push([[747],{1112:function(t,e,n){n.r(e),n.d(e,{assets:function(){return b},contentTitle:function(){return x},default:function(){return v},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return h}});var o=n(7462),a=n(3366),i=n(7294),l=n(3905),r=n(1465),s=n(1736),p=n(1119),u='import React from \'react\';\nimport { Annotations, Annotation, LineSeries, Plot, Axis } from \'react-plot\';\nexport default function PlotAnnotations() {\n  return (\n    <Plot width={300} height={100}>\n      <Annotations>\n        <Annotation.Text\n          x="150"\n          y={5}\n          color="orange"\n          // text svg props\n          fontSize="30"\n          fontFamily="monospace"\n          fontWeight="bold"\n          textAnchor="middle"\n        >\n          Hello world\n        </Annotation.Text>\n      </Annotations>\n      <Axis min={0} max={10} position="bottom" />\n      <Axis min={0} max={10} position="left" />\n    </Plot>\n  );\n}\n',c=function(){return i.createElement(r.XN,{width:300,height:100},i.createElement(r.uN,null,i.createElement(r.q6.Text,{x:"150",y:5,color:"orange",fontSize:"30",fontFamily:"monospace",fontWeight:"bold",textAnchor:"middle"},"Hello world")),i.createElement(r.RD,{min:0,max:10,position:"bottom"}),i.createElement(r.RD,{min:0,max:10,position:"left"}))};function m(t){var e=(0,i.useState)(!1),n=e[0],o=e[1];return i.createElement(i.Fragment,null,i.createElement("div",{className:"demo-example-wrapper"},i.createElement(c,null),i.createElement("div",{className:"demo-example-buttons"},i.createElement("button",{onClick:function(){return o((function(t){return!t}))},type:"button",style:{backgroundColor:n?"#dbeafe":void 0}},"Code"),t.noCodesandbox?null:i.createElement(p.Z,{name:"plot-annotations",source:u,dependencies:{react:"^17.0.2","react-plot":"^0.17.1"}},(function(){return i.createElement("button",{type:"submit"},"Open sandbox")})))),n&&i.createElement(s.Z,{className:"language-jsx"},u))}var d=["components"],k={},x="Text",f={unversionedId:"annotations/text",id:"annotations/text",title:"Text",description:"Text annotation allows adding personlized text to plot in a specifique position",source:"@site/docs/300_annotations/100_text.md",sourceDirName:"300_annotations",slug:"/annotations/text",permalink:"/annotations/text",editUrl:"https://github.com/zakodium-oss/react-plot-docs/tree/main/docs/300_annotations/100_text.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/annotations/intro"},next:{title:"Filled shapes",permalink:"/annotations/filledShapes"}},b={},h=[{value:"Props",id:"props",level:2},{value:"Mandatory",id:"mandatory",level:3},{value:"Optional",id:"optional",level:3}],g={toc:h};function v(t){var e=t.components,n=(0,a.Z)(t,d);return(0,l.kt)("wrapper",(0,o.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"text"},"Text"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Text")," annotation allows adding personlized text to plot in a specifique position"),(0,l.kt)(m,{mdxType:"TextDemo"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"mandatory"},"Mandatory"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"x:")," horizontal coordinate",(0,l.kt)("br",null),"\ntype: ",(0,l.kt)("a",{parentName:"li",href:"/types/scalarValue"},(0,l.kt)("inlineCode",{parentName:"a"},"ScalarValue")),(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"y:")," vertical coordinate",(0,l.kt)("br",null),"\ntype: ",(0,l.kt)("a",{parentName:"li",href:"/types/scalarValue"},(0,l.kt)("inlineCode",{parentName:"a"},"ScalarValue")),(0,l.kt)("br",null))),(0,l.kt)("h3",{id:"optional"},"Optional"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"color:")," content color",(0,l.kt)("br",null),"\ntype: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("br",null),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"li"},'"black"'))),(0,l.kt)("p",null,"all ",(0,l.kt)("inlineCode",{parentName:"p"},"<text>")," svg props are supported for more information visit ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text"},"the documentation")))}v.isMDXComponent=!0}}]);