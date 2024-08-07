"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[8905],{3963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(4848),i=n(8453);const r={},o="Runtime IDs",c={id:"core/runtime/identifiers",title:"Runtime IDs",description:"Identifiers for runtimes are represented by the [common.Namespace] type.",source:"@site/docs/core/runtime/identifiers.md",sourceDirName:"core/runtime",slug:"/core/runtime/identifiers",permalink:"/core/runtime/identifiers",draft:!1,unlisted:!1,editUrl:"https://github.com/oasisprotocol/oasis-core/edit/stable/22.2.x/docs/runtime/identifiers.md",tags:[],version:"current",lastUpdatedAt:1715584634e3,frontMatter:{},sidebar:"oasisCore",previous:{title:"Runtime Host Protocol",permalink:"/core/runtime/runtime-host-protocol"},next:{title:"Runtime Messages",permalink:"/core/runtime/messages"}},a={},d=[];function u(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"runtime-ids",children:"Runtime IDs"}),"\n",(0,s.jsxs)(t.p,{children:["Identifiers for runtimes are represented by the ",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/common?tab=doc#Namespace",children:(0,s.jsx)(t.code,{children:"common.Namespace"})})," type."]}),"\n",(0,s.jsx)(t.p,{children:"The first 64 bits are reserved for specifying flags expressing various\nproperties of the runtime, and the last 192 bits are used as the runtime\nidentifier."}),"\n",(0,s.jsx)(t.p,{children:"Currently the following flags are defined (bit positions assume the flags\nvector is interpreted as an unsigned 64 bit big endian integer):"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Bit 63: The runtime is a test runtime and not for production networks."}),"\n",(0,s.jsx)(t.li,{children:"Bit 62: The runtime is a key manager runtime."}),"\n",(0,s.jsx)(t.li,{children:"Bits 61-0: Reserved for future expansion and MUST be set to 0."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Note: Unless the registry consensus parameter ",(0,s.jsx)(t.code,{children:"DebugAllowTestRuntimes"})," is\nset, attempts to register a test runtime will be rejected."]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);