"use strict";(self.webpackChunkdocs_react_plot=self.webpackChunkdocs_react_plot||[]).push([[52],{7957:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return E}});var o=n(7462),r=n(3366),c=n(7294),a=n(3905),u=n(1736),s=n(1119),i="import React, { useEffect, useState } from 'react';\n\nexport default function Fetch() {\n  const [data, setData] = useState({ version: '' });\n\n  useEffect(() => {\n    fetch('https://data.cheminfo.org/temp/test.nmrium')\n      .then((response) => {\n        return response.json().then(setData);\n      })\n      .catch((e) => {\n        setData({ version: 'ERROR' });\n      });\n  }, []);\n\n  return (\n    <div>\n      <h2>Version of file is {data.version}</h2>\n    </div>\n  );\n}\n",m=function(){var e=(0,c.useState)({version:""}),t=e[0],n=e[1];return(0,c.useEffect)((function(){fetch("https://data.cheminfo.org/temp/test.nmrium").then((function(e){return e.json().then(n)})).catch((function(e){n({version:"ERROR"})}))}),[]),c.createElement("div",null,c.createElement("h2",null,"Version of file is ",t.version))};function d(e){var t=(0,c.useState)(!1),n=t[0],o=t[1];return c.createElement(c.Fragment,null,c.createElement("div",{className:"demo-example-wrapper"},c.createElement(m,null),c.createElement("div",{className:"demo-example-buttons"},c.createElement("button",{onClick:function(){return o((function(e){return!e}))},type:"button",style:{backgroundColor:n?"#dbeafe":void 0}},"Code"),e.noCodesandbox?null:c.createElement(s.Z,{name:"fetch",source:i,dependencies:{react:"^17.0.2"}},(function(){return c.createElement("button",{type:"submit"},"Open sandbox")})))),n&&c.createElement(u.Z,{className:"language-jsx"},i))}var f=["components"],l={},p="Fetch",h={unversionedId:"documentation/fetch",id:"documentation/fetch",title:"Fetch",description:"",source:"@site/docs/900_documentation/fetch.md",sourceDirName:"900_documentation",slug:"/documentation/fetch",permalink:"/documentation/fetch",editUrl:"https://github.com/zakodium-oss/react-plot-docs/tree/main/docs/900_documentation/fetch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NMR spectra",permalink:"/experimental/nmr"}},v={},E=[],b={toc:E};function k(e){var t=e.components,n=(0,r.Z)(e,f);return(0,a.kt)("wrapper",(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fetch"},"Fetch"),(0,a.kt)(d,{mdxType:"FetchDemo"}))}k.isMDXComponent=!0}}]);