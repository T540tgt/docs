"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[9874],{6074:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var i=r(4848),s=r(8453),t=r(5965),o=r(6116);const a={},d="Remote Signer for Oasis Node Keys",c={id:"node/run-your-node/advanced/remote-signer",title:"Remote Signer for Oasis Node Keys",description:"The Oasis remote signer is an application that",source:"@site/docs/node/run-your-node/advanced/remote-signer.mdx",sourceDirName:"node/run-your-node/advanced",slug:"/node/run-your-node/advanced/remote-signer",permalink:"/node/run-your-node/advanced/remote-signer",draft:!1,unlisted:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/run-your-node/advanced/remote-signer.mdx",tags:[],version:"current",lastUpdatedAt:1723018842e3,frontMatter:{},sidebar:"operators",previous:{title:"Copy State from One Node to the Other",permalink:"/node/run-your-node/advanced/copy-state-from-one-node-to-the-other"},next:{title:"Troubleshooting",permalink:"/node/run-your-node/troubleshooting"}},l={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Oasis Remote Signer Binary",id:"install-oasis-remote-signer-binary",level:2},{value:"Downloading a Binary Release",id:"downloading-a-binary-release",level:3},{value:"Building From Source",id:"building-from-source",level:3},{value:"Adding <code>oasis-remote-signer</code> Binary to <code>PATH</code>",id:"adding-oasis-remote-signer-binary-to-path",level:3},{value:"Set Up Remote Signer System",id:"set-up-remote-signer-system",level:2},{value:"Initialize Remote Signer",id:"initialize-remote-signer",level:3},{value:"Run Remote Signer",id:"run-remote-signer",level:3},{value:"Copy Remote Signer Certificate, Client Key and Certificate",id:"copy-remote-signer-certificate-client-key-and-certificate",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Starting the Oasis node",id:"starting-the-oasis-node",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"remote-signer-for-oasis-node-keys",children:"Remote Signer for Oasis Node Keys"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/oasisprotocol/oasis-core/tree/master/go/oasis-remote-signer",children:"Oasis remote signer"})," is an application that\ncontains logic for various Oasis Core signers. Currently, only the file-based\nsigner is implemented, but support for hardware signers is in the works. Access\nto the remote signer is provided via a gRPC service through which the Oasis node\ncan connect to it and request signatures."]}),"\n",(0,i.jsx)(n.p,{children:"This chapter will describe how to install the Oasis remote signer and then\nconfigure your Oasis node to use it. We will use two separate physical machines\nfor deployment:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["a ",(0,i.jsx)(n.code,{children:"server"})," which will function as a system running the Oasis node,"]}),"\n",(0,i.jsxs)(n.li,{children:["a ",(0,i.jsx)(n.code,{children:"signer-server"})," which will run the Oasis remote signer and store the node\nkeys."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"These are advanced instructions intended for node operators that want to\nincrease the security of their validator nodes."})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["This chapter describes a tool to remotely access the ",(0,i.jsx)(n.a,{href:"/node/run-your-node/validator-node#node-keys",children:"node keys"})," (i.e.\n",(0,i.jsx)(n.code,{children:"beacon.pem"}),", ",(0,i.jsx)(n.code,{children:"consensus.pem"}),", ",(0,i.jsx)(n.code,{children:"identity.pem"}),", ",(0,i.jsx)(n.code,{children:"p2p.pem"}),"...). There is another\n",(0,i.jsx)(n.a,{href:"/general/manage-tokens/cli/wallet#remote-signer",children:(0,i.jsx)(n.code,{children:"oasis wallet remote-signer"})})," Oasis CLI command which enables remote access to\nyour ",(0,i.jsx)(n.a,{href:"/node/run-your-node/validator-node#initialize-entity",children:"entity key"})," and should not be confused with."]})}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.p,{children:["Before we continue, make sure you've followed the ",(0,i.jsx)(n.a,{href:"/node/run-your-node/prerequisites/oasis-node",children:"Install Oasis Node Binary"}),"\nchapter and have the Oasis node binary installed on your system."]}),"\n",(0,i.jsx)(n.h2,{id:"install-oasis-remote-signer-binary",children:"Install Oasis Remote Signer Binary"}),"\n",(0,i.jsxs)(n.p,{children:["The Oasis remote signer is part of the ",(0,i.jsx)(n.a,{href:"https://github.com/oasisprotocol/oasis-core/tree/master/go/oasis-remote-signer",children:"Oasis Core"}),".\nYou can either download the binary or compile it from source and then copy it\nover to your ",(0,i.jsx)(n.code,{children:"signer-server"})," system."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The Oasis remote signer is currently only supported on x86_64 Linux systems."})}),"\n",(0,i.jsx)(n.h3,{id:"downloading-a-binary-release",children:"Downloading a Binary Release"}),"\n",(0,i.jsxs)(n.p,{children:["The Oasis remote signer binary is part of the ",(0,i.jsx)(n.strong,{children:"Oasis Core release bundle"}),".\nLinks to the latest releases are on the Network Parameters page (",(0,i.jsx)(n.a,{href:"/node/mainnet/",children:"Mainnet"}),",\n",(0,i.jsx)(n.a,{href:"/node/testnet/",children:"Testnet"}),"). The Oasis remote signer binary inside the release bundle is called\n",(0,i.jsx)(n.code,{children:"oasis-remote-signer"}),". You should always use the version of the remote signer\nmatching the version of your Oasis node."]}),"\n",(0,i.jsx)(n.h3,{id:"building-from-source",children:"Building From Source"}),"\n",(0,i.jsxs)(n.p,{children:["Follow the ",(0,i.jsx)(n.a,{href:"../../../core/development-setup/build-environment-setup-and-building",children:"Oasis Core's Build Environment Setup and Building"}),"\nchapter. After the Oasis Core is compiled, the ",(0,i.jsx)(n.code,{children:"oasis-remote-signer"})," binary\nshould be located in the ",(0,i.jsx)(n.code,{children:"go/oasis-remote-signer"})," subdirectory."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["The code in the current ",(0,i.jsx)(n.a,{href:"https://github.com/oasisprotocol/oasis-core/tree/master/",children:(0,i.jsx)(n.code,{children:"master"})})," branch may be incompatible with the code used\nby other nodes on the network. Make sure to use the version specified on the\nNetwork Parameters page (",(0,i.jsx)(n.a,{href:"/node/mainnet/",children:"Mainnet"}),", ",(0,i.jsx)(n.a,{href:"/node/testnet/",children:"Testnet"}),")."]})}),"\n",(0,i.jsxs)(n.h3,{id:"adding-oasis-remote-signer-binary-to-path",children:["Adding ",(0,i.jsx)(n.code,{children:"oasis-remote-signer"})," Binary to ",(0,i.jsx)(n.code,{children:"PATH"})]}),"\n",(0,i.jsxs)(n.p,{children:["To install the ",(0,i.jsx)(n.code,{children:"oasis-remote-signer"})," binary for the current user, copy/symlink\nit to ",(0,i.jsx)(n.code,{children:"~/.local/bin"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To install the ",(0,i.jsx)(n.code,{children:"oasis-remote-signer"})," binary for all users of the system, copy\nit to ",(0,i.jsx)(n.code,{children:"/usr/local/bin"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"set-up-remote-signer-system",children:"Set Up Remote Signer System"}),"\n",(0,i.jsx)(n.h3,{id:"initialize-remote-signer",children:"Initialize Remote Signer"}),"\n",(0,i.jsxs)(n.p,{children:["On ",(0,i.jsx)(n.code,{children:"signer-server"}),", create a directory for the remote signer, e.g.\n",(0,i.jsx)(n.code,{children:"remote-signer"}),", by running:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mkdir --mode=700 remote-signer\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then, generate the ",(0,i.jsx)(n.a,{href:"/node/run-your-node/validator-node#node-keys",children:"node keys"})," and the server certificate by running:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"oasis-remote-signer init --datadir remote-signer/\n"})}),"\n",(0,i.jsx)(n.p,{children:"Also, generate the remote signer's client certificate which will be used by\nthe Oasis node to connect to the remote signer:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"oasis-remote-signer init_client --datadir remote-signer/\n"})}),"\n",(0,i.jsx)(n.h3,{id:"run-remote-signer",children:"Run Remote Signer"}),"\n",(0,i.jsx)(n.p,{children:"Choose the gRPC port on which the remote signer will listen for client requests\nand run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"oasis-remote-signer \\\n--datadir remote-signer \\\n--client.certificate remote-signer/remote_signer_client_cert.pem \\\n--grpc.port <REMOTE-SIGNER-PORT> \\\n--log.level DEBUG\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"The Oasis Remote Signer is configured to run in the foreground by default."}),(0,i.jsxs)(n.p,{children:["We recommend you configure and use it with a process manager like ",(0,i.jsx)(n.a,{href:"https://github.com/systemd/systemd",children:"systemd"})," or\n",(0,i.jsx)(n.a,{href:"http://supervisord.org",children:"Supervisor"}),".  Check out the ",(0,i.jsx)(n.a,{href:"/node/run-your-node/prerequisites/system-configuration#create-a-user",children:"System Configuration"})," page for examples."]})]}),"\n",(0,i.jsx)(n.h3,{id:"copy-remote-signer-certificate-client-key-and-certificate",children:"Copy Remote Signer Certificate, Client Key and Certificate"}),"\n",(0,i.jsxs)(n.p,{children:["In order for the Oasis node to securely connect to the Oasis remote signer and\nbe able to demonstrate its authenticity, you need to copy the following files\nfrom ",(0,i.jsx)(n.code,{children:"signer-server"})," to ",(0,i.jsx)(n.code,{children:"server"})," inside the ",(0,i.jsx)(n.code,{children:"/node/data/remote-signer"}),"\ndirectory:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"remote-signer/remote_signer_server_cert.pem"}),": The remote signer's\ncertificate. This certificate ensures the Oasis node system is connecting to\nthe trusted remote signer system."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"remote-signer/remote_signer_client_key.pem"}),": The remote signer's client key.\nThis key enables the Oasis node system to demonstrate its authenticity when it\nis requesting signatures from the remote signer system."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"remote-signer/remote_signer_client_cert.pem"}),": The remote signer's client\ncertificate. This certificate is the counterpart of the remote signer's client\nkey."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.a,{href:"/node/run-your-node/validator-node#configuration",children:"configuring your Oasis Node"}),"\non ",(0,i.jsx)(n.code,{children:"server"}),", you need to add the appropriate ",(0,i.jsx)(n.code,{children:"signer"})," section to configure the\n",(0,i.jsx)(n.strong,{children:"composite"})," and ",(0,i.jsx)(n.strong,{children:"remote"})," signers. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# Signer.\nsigner:\n  backend: composite\n  # Use file-based signer for entity, node and P2P keys and remote signer for the\n  # consensus key.\n  composite:\n    backends: entity:file,node:file,p2p:file,consensus:remote\n  # Configure how to connect to the Oasis Remote Signer.\n  remote:\n    address: <YOUR-REMOTE-SIGNER-IP>:<YOUR-REMOTE-SIGNER-PORT>\n    server:\n      certificate: /node/data/remote-signer/remote_signer_server_cert.pem\n    client:\n      key: /node/data/remote-signer/remote_signer_client_key.pem\n      certificate: /node/data/remote-signer/remote_signer_client_cert.pem\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This assumes you've copied the remote signer's certificate and remote signer's\nclient key and certificate to the ",(0,i.jsx)(n.code,{children:"/node/data/remote-signer/"})," directory."]}),"\n",(0,i.jsx)(n.h2,{id:"starting-the-oasis-node",children:"Starting the Oasis node"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/node/run-your-node/validator-node#starting-the-oasis-node",children:"Start the Oasis node"})," using the modified config above. To ensure that your\nOasis node will be able to sign consensus transactions, check that the Oasis\nremote signer is running and accepting remote client connections via the\ndesignated port."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"/node/data"})," directory on ",(0,i.jsx)(n.code,{children:"server"})," will only have ",(0,i.jsx)(n.code,{children:"consensus_pub.pem"})," and no\n",(0,i.jsx)(n.code,{children:"consensus.pem"})," since the consensus key is backed by the Oasis remote signer."]})}),"\n",(0,i.jsx)(n.h1,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(t.A,{item:(0,o.$)("/node/run-your-node/validator-node")}),"\n",(0,i.jsx)(t.A,{item:(0,o.$)("/general/manage-tokens/cli/wallet")})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5965:(e,n,r)=>{r.d(n,{A:()=>f});r(6540);var i=r(4164),s=r(8774),t=r(4142),o=r(5846),a=r(6654),d=r(1312),c=r(1107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=r(4848);function u(e){let{href:n,children:r}=e;return(0,h.jsx)(s.A,{href:n,className:(0,i.A)("card padding--lg",l.cardContainer),children:r})}function m(e){let{href:n,icon:r,title:s,description:t}=e;return(0,h.jsxs)(u,{href:n,children:[(0,h.jsxs)(c.A,{as:"h2",className:(0,i.A)("text--truncate",l.cardTitle),title:s,children:[r," ",s]}),t&&(0,h.jsx)("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:t,children:t})]})}function g(e){let{item:n}=e;const r=(0,t.Nr)(n),i=function(){const{selectMessage:e}=(0,o.W)();return n=>e(n,(0,d.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return r?(0,h.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??i(n.items.length)}):null}function p(e){let{item:n}=e;const r=(0,a.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,t.cC)(n.docId??void 0);return(0,h.jsx)(m,{href:n.href,icon:r,title:n.label,description:n.description??i?.description})}function f(e){let{item:n}=e;switch(n.type){case"link":return(0,h.jsx)(p,{item:n});case"category":return(0,h.jsx)(g,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}},5846:(e,n,r)=>{r.d(n,{W:()=>c});var i=r(6540),s=r(4586);const t=["zero","one","two","few","many","other"];function o(e){return t.filter((n=>e.includes(n)))}const a={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,i.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:o(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),a}}),[e])}function c(){const e=d();return{selectMessage:(n,r)=>function(e,n,r){const i=e.split("|");if(1===i.length)return i[0];i.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const s=r.select(n),t=r.pluralForms.indexOf(s);return i[Math.min(t,i.length-1)]}(r,n,e)}}},6116:(e,n,r)=>{r.d(n,{$:()=>t});var i=r(2252);function s(e){for(const n of e){const e=n.href;e&&void 0===globalThis.sidebarItemsMap[e]&&(globalThis.sidebarItemsMap[e]=n),"category"===n.type&&s(n.items)}}function t(e){const n=(0,i.r)();if(!n)throw new Error("Unexpected: cant find docsVersion in current context");if(void 0===globalThis.sidebarItemsMap){globalThis.sidebarItemsMap={};for(const e in n.docsSidebars)s(n.docsSidebars[e])}if(void 0===globalThis.sidebarItemsMap[e])throw console.log("Registered sidebar items:"),console.log(globalThis.sidebarItemsMap),new Error("Unexpected: sidebar item with href "+e+" does not exist.");return globalThis.sidebarItemsMap[e]}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var i=r(6540);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);