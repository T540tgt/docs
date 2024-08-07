"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[367],{2296:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=s(4848),r=s(8453);const o={},t="Oasis Core Developer Documentation",c={id:"core/README",title:"Oasis Core Developer Documentation",description:"Architecture",source:"@site/docs/core/README.md",sourceDirName:"core",slug:"/core/",permalink:"/core/",draft:!1,unlisted:!1,editUrl:"https://github.com/oasisprotocol/oasis-core/edit/stable/22.2.x/docs/README.md",tags:[],version:"current",lastUpdatedAt:1715584634e3,frontMatter:{},sidebar:"oasisCore",next:{title:"Development Setup",permalink:"/core/development-setup"}},l={},d=[{value:"Development Setup",id:"development-setup",level:2},{value:"High-Level Components",id:"high-level-components",level:2},{value:"Common Functionality",id:"common-functionality",level:2},{value:"Processes",id:"processes",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"oasis-core-developer-documentation",children:"Oasis Core Developer Documentation"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Architecture",src:s(5405).A+""})}),"\n",(0,i.jsx)(n.h2,{id:"development-setup",children:"Development Setup"}),"\n",(0,i.jsx)(n.p,{children:"Here are instructions on how to set up the local build environment, run the\ntests and some examples on how to prepare test networks for local development of\nOasis Core components."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Build Environment Setup and Building","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/development-setup/prerequisites",children:"Prerequisites"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/development-setup/building",children:"Building"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Running Tests and Development Networks","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/development-setup/running-tests",children:"Running Tests"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/development-setup/oasis-net-runner",children:"Local Network Runner With a Simple Runtime"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/development-setup/single-validator-node-network",children:"Single Validator Node Network"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/development-setup/deploying-a-runtime",children:"Deploying a Runtime"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"high-level-components",children:"High-Level Components"}),"\n",(0,i.jsxs)(n.p,{children:["At the highest level, Oasis Core is divided into two major layers: the\n",(0,i.jsx)(n.em,{children:"consensus layer"})," and the ",(0,i.jsx)(n.em,{children:"runtime layer"})," as shown on the figure above."]}),"\n",(0,i.jsx)(n.p,{children:"The idea behind the consensus layer is to provide a minimal set of features\nrequired to securely operate independent runtimes running in the runtime layer.\nIt provides the following services:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Epoch-based time keeping and a random beacon."}),"\n",(0,i.jsx)(n.li,{children:"Basic staking operations required to operate a PoS blockchain."}),"\n",(0,i.jsx)(n.li,{children:"An entity, node and runtime registry that distributes public keys and\nmetadata."}),"\n",(0,i.jsx)(n.li,{children:"Runtime committee scheduling, commitment processing and minimal state keeping."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"On the other side, each runtime defines its own state and state transitions\nindependent from the consensus layer, submitting only short proofs that\ncomputations were performed and results were stored. This means that runtime\nstate and logic are completely decoupled from the consensus layer, and the\nconsensus layer only provides information on what state (summarized by a\ncryptographic hash of a Merklized data structure) is considered canonical at any\ngiven point in time."}),"\n",(0,i.jsx)(n.p,{children:"See the following chapters for more details on specific components and their\nimplementations."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/core/consensus/",children:"Consensus Layer"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/consensus/transactions",children:"Transactions"})}),"\n",(0,i.jsxs)(n.li,{children:["Services","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/consensus/services/epochtime",children:"Epoch Time"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/consensus/services/beacon",children:"Random Beacon"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/consensus/services/staking",children:"Staking"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/consensus/services/registry",children:"Registry"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/consensus/services/scheduler",children:"Committee Scheduler"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/consensus/services/governance",children:"Governance"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/consensus/services/roothash",children:"Root Hash"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/consensus/services/keymanager",children:"Key Manager"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/consensus/genesis",children:"Genesis Document"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/consensus/test-vectors",children:"Transaction Test Vectors"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/core/runtime/",children:"Runtime Layer"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/runtime/#operation-model",children:"Operation Model"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/runtime/runtime-host-protocol",children:"Runtime Host Protocol"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/runtime/identifiers",children:"Identifiers"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/runtime/messages",children:"Messages"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Oasis Node (",(0,i.jsx)(n.code,{children:"oasis-node"}),")","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/oasis-node/rpc",children:"RPC"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/oasis-node/metrics",children:"Metrics"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/oasis-node/cli",children:"CLI"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"common-functionality",children:"Common Functionality"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/encoding",children:"Serialization"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/crypto",children:"Cryptography"})}),"\n",(0,i.jsxs)(n.li,{children:["Protocols","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/authenticated-grpc",children:"Authenticated gRPC"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/mkvs",children:"Merklized Key-Value Store (MKVS)"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"processes",children:"Processes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/oasisprotocol/adrs",children:"Architectural Decision Records"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/release-process",children:"Release Process"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/versioning",children:"Versioning"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/core/SECURITY",children:"Security"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},5405:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/oasis-core-high-level-4dd19f00411531fadd7a32ea1d596e6f.svg"},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(6540);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);