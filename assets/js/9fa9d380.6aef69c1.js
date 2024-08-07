"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[9051],{1025:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var t=o(4848),i=o(8453),r=o(5965),s=o(6116);const d={},a="Non-validator Node",l={id:"node/run-your-node/non-validator-node",title:"Non-validator Node",description:"These instructions are for setting up a non-validator node. If you want to run a validator node instead, see the instructions for running a validator node. Similarly, if you want to run a ParaTime node instead, see the instructions for running a ParaTime node.",source:"@site/docs/node/run-your-node/non-validator-node.mdx",sourceDirName:"node/run-your-node",slug:"/node/run-your-node/non-validator-node",permalink:"/node/run-your-node/non-validator-node",draft:!1,unlisted:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/run-your-node/non-validator-node.mdx",tags:[],version:"current",lastUpdatedAt:1723018842e3,frontMatter:{},sidebar:"operators",previous:{title:"Validator Node",permalink:"/node/run-your-node/validator-node"},next:{title:"Seed Node",permalink:"/node/run-your-node/seed-node"}},c={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a Working Directory",id:"creating-a-working-directory",level:3},{value:"Copying the Genesis File",id:"copying-the-genesis-file",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Starting the Oasis Node",id:"starting-the-oasis-node",level:2},{value:"Checking Node Status",id:"checking-node-status",level:2},{value:"See also",id:"see-also",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"non-validator-node",children:"Non-validator Node"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["These instructions are for setting up a ",(0,t.jsx)(n.em,{children:"non-validator"})," node. If you want to run a ",(0,t.jsx)(n.em,{children:"validator"})," node instead, see the ",(0,t.jsx)(n.a,{href:"/node/run-your-node/validator-node",children:"instructions for running a validator node"}),". Similarly, if you want to run a ",(0,t.jsx)(n.em,{children:"ParaTime"})," node instead, see the ",(0,t.jsx)(n.a,{href:"/node/run-your-node/paratime-node",children:"instructions for running a ParaTime node"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"This guide will cover setting up your non-validator node for the Oasis Network. This guide assumes some basic knowledge on the use of command line tools."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["Before following this guide, make sure you've followed the ",(0,t.jsx)(n.a,{href:"prerequisites",children:"Prerequisites"})," chapter and have the Oasis Node binary installed on your systems."]}),"\n",(0,t.jsx)(n.h3,{id:"creating-a-working-directory",children:"Creating a Working Directory"}),"\n",(0,t.jsxs)(n.p,{children:["We will be creating the following directory structure inside a chosen top-level ",(0,t.jsx)(n.code,{children:"/node"})," (feel free to name your directories however you wish) directory:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"etc"}),": This will store the node configuration and genesis file."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"data"}),": This will store the data directory needed by the running ",(0,t.jsx)(n.code,{children:"oasis-node"})," binary, including the complete blockchain state."]}),"\n",(0,t.jsxs)(n.p,{children:["The directory permissions should be ",(0,t.jsx)(n.code,{children:"rwx------"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To create the directory structure, use the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir -m700 -p /node/{etc,data}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"copying-the-genesis-file",children:"Copying the Genesis File"}),"\n",(0,t.jsxs)(n.p,{children:["The latest genesis file can be found in the Network Parameters page (",(0,t.jsx)(n.a,{href:"/node/mainnet/",children:"Mainnet"}),", ",(0,t.jsx)(n.a,{href:"/node/testnet/",children:"Testnet"}),"). You should download the latest ",(0,t.jsx)(n.code,{children:"genesis.json"})," file and copy it to the ",(0,t.jsx)(n.code,{children:"/node/etc"})," directory we just created."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"This will configure the given node to only follow the consensus layer."})}),"\n",(0,t.jsxs)(n.p,{children:["In order to configure the node create the ",(0,t.jsx)(n.code,{children:"/node/etc/config.yml"})," file with the following content:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"mode: client\ncommon:\n    data_dir: /node/data\n    log:\n        format: JSON\n        level:\n            cometbft: info\n            cometbft/context: error\n            default: info\n\ngenesis:\n    file: /node/etc/genesis.json\np2p:\n    # List of seed nodes to connect to.\n    # NOTE: You can add additional seed nodes to this list if you want.\n    seeds:\n        - {{ seed_node_address }}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Before using this configuration you should collect the following information to replace the  variables present in the configuration file:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"{{ seed_node_address }}"}),": The seed node address in the form ",(0,t.jsx)(n.code,{children:"ID@IP:port"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You can find the current Oasis Seed Node address in the Network Parameters page (",(0,t.jsx)(n.a,{href:"/node/mainnet/",children:"Mainnet"}),", ",(0,t.jsx)(n.a,{href:"/node/testnet/",children:"Testnet"}),")."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Make sure the ",(0,t.jsx)(n.code,{children:"consensus"})," port (default: ",(0,t.jsx)(n.code,{children:"26656"}),") and ",(0,t.jsx)(n.code,{children:"p2p.port"})," (default: ",(0,t.jsx)(n.code,{children:"9200"}),") are exposed and publicly\naccessible on the internet (for ",(0,t.jsx)(n.code,{children:"TCP"})," and ",(0,t.jsx)(n.code,{children:"UDP"})," traffic)."]})}),"\n",(0,t.jsx)(n.h2,{id:"starting-the-oasis-node",children:"Starting the Oasis Node"}),"\n",(0,t.jsx)(n.p,{children:"You can start the node by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"oasis-node --config /node/etc/config.yml\n"})}),"\n",(0,t.jsx)(n.h2,{id:"checking-node-status",children:"Checking Node Status"}),"\n",(0,t.jsx)(n.p,{children:"To ensure that your node is properly connected with the network, you can run the following command after the node has started:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"oasis-node control status -a unix:/node/data/internal.sock\n"})}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(r.A,{item:(0,s.$)("/node/grpc")})]})}function f(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},5965:(e,n,o)=>{o.d(n,{A:()=>g});o(6540);var t=o(4164),i=o(8774),r=o(4142),s=o(5846),d=o(6654),a=o(1312),l=o(1107);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=o(4848);function u(e){let{href:n,children:o}=e;return(0,h.jsx)(i.A,{href:n,className:(0,t.A)("card padding--lg",c.cardContainer),children:o})}function f(e){let{href:n,icon:o,title:i,description:r}=e;return(0,h.jsxs)(u,{href:n,children:[(0,h.jsxs)(l.A,{as:"h2",className:(0,t.A)("text--truncate",c.cardTitle),title:i,children:[o," ",i]}),r&&(0,h.jsx)("p",{className:(0,t.A)("text--truncate",c.cardDescription),title:r,children:r})]})}function p(e){let{item:n}=e;const o=(0,r.Nr)(n),t=function(){const{selectMessage:e}=(0,s.W)();return n=>e(n,(0,a.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return o?(0,h.jsx)(f,{href:o,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??t(n.items.length)}):null}function m(e){let{item:n}=e;const o=(0,d.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,r.cC)(n.docId??void 0);return(0,h.jsx)(f,{href:n.href,icon:o,title:n.label,description:n.description??t?.description})}function g(e){let{item:n}=e;switch(n.type){case"link":return(0,h.jsx)(m,{item:n});case"category":return(0,h.jsx)(p,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}},5846:(e,n,o)=>{o.d(n,{W:()=>l});var t=o(6540),i=o(4586);const r=["zero","one","two","few","many","other"];function s(e){return r.filter((n=>e.includes(n)))}const d={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,t.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:s(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),d}}),[e])}function l(){const e=a();return{selectMessage:(n,o)=>function(e,n,o){const t=e.split("|");if(1===t.length)return t[0];t.length>o.pluralForms.length&&console.error(`For locale=${o.locale}, a maximum of ${o.pluralForms.length} plural forms are expected (${o.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const i=o.select(n),r=o.pluralForms.indexOf(i);return t[Math.min(r,t.length-1)]}(o,n,e)}}},6116:(e,n,o)=>{o.d(n,{$:()=>r});var t=o(2252);function i(e){for(const n of e){const e=n.href;e&&void 0===globalThis.sidebarItemsMap[e]&&(globalThis.sidebarItemsMap[e]=n),"category"===n.type&&i(n.items)}}function r(e){const n=(0,t.r)();if(!n)throw new Error("Unexpected: cant find docsVersion in current context");if(void 0===globalThis.sidebarItemsMap){globalThis.sidebarItemsMap={};for(const e in n.docsSidebars)i(n.docsSidebars[e])}if(void 0===globalThis.sidebarItemsMap[e])throw console.log("Registered sidebar items:"),console.log(globalThis.sidebarItemsMap),new Error("Unexpected: sidebar item with href "+e+" does not exist.");return globalThis.sidebarItemsMap[e]}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>d});var t=o(6540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);