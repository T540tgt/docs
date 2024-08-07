"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[7373],{8056:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var t=a(4848),s=a(8453),i=a(2550),r=a(6116);const o={description:"Web3 gateway for Emerald and Sapphire ParaTimes"},l="Oasis Web3 Gateway for your EVM ParaTime",d={id:"node/web3",title:"Oasis Web3 Gateway for your EVM ParaTime",description:"Web3 gateway for Emerald and Sapphire ParaTimes",source:"@site/docs/node/web3.mdx",sourceDirName:"node",slug:"/node/web3",permalink:"/node/web3",draft:!1,unlisted:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/web3.mdx",tags:[],version:"current",lastUpdatedAt:1723018842e3,frontMatter:{description:"Web3 gateway for Emerald and Sapphire ParaTimes"},sidebar:"operators",previous:{title:"Troubleshooting",permalink:"/node/run-your-node/troubleshooting"},next:{title:"gRPC Proxy",permalink:"/node/grpc"}},c={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Oasis ParaTime Client Node",id:"oasis-paratime-client-node",level:3},{value:"PostgreSQL",id:"postgresql",level:3},{value:"Download Oasis Web3 Gateway",id:"download-oasis-web3-gateway",level:2},{value:"Running the Web3 Gateway",id:"running-the-web3-gateway",level:2},{value:"Archive Web3 Gateway",id:"archive-web3-gateway",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Wipe state to force a complete reindex",id:"wipe-state-to-force-a-complete-reindex",level:3},{value:"See also",id:"see-also",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"oasis-web3-gateway-for-your-evm-paratime",children:"Oasis Web3 Gateway for your EVM ParaTime"}),"\n",(0,t.jsxs)(n.p,{children:["This guide will walk you through the steps needed to set up the Oasis Web3\ngateway for EVM-compatible ParaTimes, such as ",(0,t.jsx)(n.a,{href:"/dapp/emerald/",children:"Emerald"})," and ",(0,t.jsx)(n.a,{href:"/dapp/sapphire/",children:"Sapphire"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Each ParaTime requires its own instance of the Web3 gateway!"})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.h3,{id:"hardware",children:"Hardware"}),"\n",(0,t.jsx)(n.p,{children:"In addition to the minimum hardware requirements for running the Oasis node,\nthe following should be added for running the Web3 gateway:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["CPU:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Minimum: 2.0 GHz x86-64 CPU"}),"\n",(0,t.jsx)(n.li,{children:"Recommended: 2.0 GHz x86-64 CPU with 2 cores/vCPUs"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Memory:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Minimum: 4 GB of ECC RAM"}),"\n",(0,t.jsx)(n.li,{children:"Recommended: 8 GB of ECC RAM"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Storage:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Minimum: 300 GB of SSD or NVMe fast storage"}),"\n",(0,t.jsx)(n.li,{children:"Recommended: 500 GB of SSD or NVMe fast storage"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["To put the figures above into perspective, the Web3 gateway for Emerald with\nPostgreSQL encountered ",(0,t.jsx)(n.strong,{children:"210 GB"})," of database growth in ~5 months between\nNov 18, 2021 and Apr 11, 2022 (since the ",(0,t.jsx)(n.a,{href:"https://medium.com/oasis-protocol-project/oasis-emerald-evm-paratime-is-live-on-mainnet-13afe953a4c9",children:"Emerald Mainnet launch"}),")."]})}),"\n",(0,t.jsx)(n.h3,{id:"oasis-paratime-client-node",children:"Oasis ParaTime Client Node"}),"\n",(0,t.jsxs)(n.p,{children:["The Web3 gateway requires a locally deployed ParaTime-enabled Oasis Node.\nFirst, follow the\n",(0,t.jsx)(n.a,{href:"/node/run-your-node/paratime-client-node",children:"Oasis ParaTime client node"}),"\nguide on how to configure the Oasis client node with one or more ParaTimes.\nAlways use the exact combination of the Oasis node/ParaTime versions as\npublished on the Network Parameters page (",(0,t.jsx)(n.a,{href:"/node/mainnet/",children:"Mainnet"}),", ",(0,t.jsx)(n.a,{href:"/node/testnet/",children:"Testnet"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["Apart from the transactions that happen on-chain and produce some effects,\nthere are also a number of read-only queries implemented in the Oasis protocol\nand EVM. Some of them may be quite resource-hungry such as simulating EVM calls\nand are disabled by default to avoid DDOS attacks. If your Oasis node instance\nwill only be used by you and your Web3 gateway(s), you can safely enable\n",(0,t.jsx)(n.em,{children:"expensive"})," transactions by adding the following to your Oasis node config:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"title='config.yml'",children:'# ... sections not relevant are omitted ...\nruntime:\n  mode: client\n  paths:\n    - {{ emerald_bundle_path }}\n    - {{ sapphire_bundle_path }}\n\n  config:\n    "{{ emerald_paratime_id }}":\n      estimate_gas_by_simulating_contracts: true\n      allowed_queries:\n        - all_expensive: true\n    "{{ sapphire_paratime_id }}":\n      estimate_gas_by_simulating_contracts: true\n      allowed_queries:\n        - all_expensive: true\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In the config above replace ",(0,t.jsx)(n.code,{children:"{{ ... }}"})," placeholders with actual ParaTime IDs:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"{{ emerald_paratime_id }}"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Emerald on ",(0,t.jsx)(n.a,{href:"/node/mainnet/#emerald",children:"Mainnet"}),": ",(0,t.jsx)(n.code,{children:"000000000000000000000000000000000000000000000000e2eaa99fc008f87f"})]}),"\n",(0,t.jsxs)(n.li,{children:["Emerald on ",(0,t.jsx)(n.a,{href:"/node/testnet/#emerald",children:"Testnet"}),": ",(0,t.jsx)(n.code,{children:"00000000000000000000000000000000000000000000000072c8215e60d5bca7"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"{{ sapphire_paratime_id }}"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Sapphire on ",(0,t.jsx)(n.a,{href:"/node/mainnet/#sapphire",children:"Mainnet"}),": ",(0,t.jsx)(n.code,{children:"000000000000000000000000000000000000000000000000f80306c9858e7279"})]}),"\n",(0,t.jsxs)(n.li,{children:["Sapphire on ",(0,t.jsx)(n.a,{href:"/node/testnet/#sapphire",children:"Testnet"}),": ",(0,t.jsx)(n.code,{children:"000000000000000000000000000000000000000000000000a6d1e3ebf60dff6c"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"postgresql",children:"PostgreSQL"}),"\n",(0,t.jsxs)(n.p,{children:["The Web3 gateway stores blockchain data in a\n",(0,t.jsx)(n.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"})," database version ",(0,t.jsx)(n.strong,{children:"13.3"})," or higher.\nInstall it by following instructions specific to your operating system and\nenvironment."]}),"\n",(0,t.jsx)(n.p,{children:"Because each ParaTime requires its own instance of the Web3 gateway, you will\nhave to create a separate database and a separate user for each Web3 instance."}),"\n",(0,t.jsx)(n.h2,{id:"download-oasis-web3-gateway",children:"Download Oasis Web3 Gateway"}),"\n",(0,t.jsxs)(n.p,{children:["Check the required version of the Web3 gateway for the network you will be\ndeploying it to: ",(0,t.jsx)(n.a,{href:"/node/mainnet/",children:"Mainnet"}),", ",(0,t.jsx)(n.a,{href:"/node/testnet/",children:"Testnet"}),". Next, download the Oasis-provided\nbinaries from the ",(0,t.jsx)(n.a,{href:"https://github.com/oasisprotocol/oasis-web3-gateway/releases",children:"official GitHub repository"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, you can download the source release and compile it yourself.\nConsult the ",(0,t.jsx)(n.a,{href:"https://github.com/oasisprotocol/oasis-web3-gateway/blob/main/README.md#building-and-testing",children:"README.md"})," file for more information."]}),"\n",(0,t.jsx)(n.h2,{id:"running-the-web3-gateway",children:"Running the Web3 Gateway"}),"\n",(0,t.jsx)(n.p,{children:"Copy the content below to the config file of your Web3 gateway."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"title='gateway.yml'",children:'# Uncomment the runtime_id below.\nruntime_id: {{ paratime_id }}\n# Path to your internal.sock file in the root Oasis node datadir.\nnode_address: "unix:{{ oasis_node_unix_socket }}"\n\n# By default, we index the entire blockchain history.\n# If you are low on disk space or you use the gateway just for submitting transactions, enable\n# pruning below.\nenable_pruning: false\npruning_step: 100000\nindexing_start: 0\n\nlog:\n  level: debug\n  format: json\n\ndatabase:\n  # Change host and port, if PostgreSQL is running somewhere else.\n  host: "127.0.0.1"\n  port: 5432\n  # Enter your database name, username and password.\n  db: {{ postgresql_db }}\n  user: {{ postgresql_user }}\n  password: {{ postgresql_password }}\n  dial_timeout: 5\n  read_timeout: 10\n  write_timeout: 5\n  max_open_conns: 0\n\ngateway:\n  chain_id: {{ chain_id }}\n  http:\n    # Change host to your external IP address if you have users accessing Web3 from the outside.\n    host: "localhost"\n    # Use different port for each Web3 gateway instance, if all run locally.\n    port: 8545\n    cors: ["*"]\n  ws:\n    # Change host to your external IP address if you have users accessing Web3 from the outside.\n    host: "localhost"\n    # Use different port for each Web3 gateway instance, if all run locally.\n    port: 8546\n    origins: ["*"]\n  method_limits:\n    get_logs_max_rounds: 100\n'})}),"\n",(0,t.jsx)(n.p,{children:"Use the following placeholder values:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"{{ paratime_id }}"}),": The ID of the Emerald or Sapphire ParaTime which you are\nconfiguring the Web3 gateway for (see ",(0,t.jsx)(n.a,{href:"#oasis-paratime-client-node",children:"above"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"{{ oasis_node_unix_socket }}"}),": Path to the ",(0,t.jsx)(n.code,{children:"internal.sock"})," file created by\nthe Oasis node."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"{{ postgresql_db }}"}),", ",(0,t.jsx)(n.code,{children:"{{ postgresql_user }}"}),", ",(0,t.jsx)(n.code,{children:"{{ postgresql_password }}"}),":\nDatabase name and credentials for your PostgreSQL database."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"{{ chain_id }}"}),": The chain ID of your EVM network:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Emerald on ",(0,t.jsx)(n.a,{href:"/dapp/emerald/#mainnet",children:"Mainnet"}),": ",(0,t.jsx)(n.code,{children:"42262"})]}),"\n",(0,t.jsxs)(n.li,{children:["Emerald on ",(0,t.jsx)(n.a,{href:"/dapp/emerald/#testnet",children:"Testnet"}),": ",(0,t.jsx)(n.code,{children:"42261"})]}),"\n",(0,t.jsxs)(n.li,{children:["Sapphire on ",(0,t.jsx)(n.a,{href:"/dapp/sapphire/#mainnet",children:"Mainnet"}),": ",(0,t.jsx)(n.code,{children:"23294"})]}),"\n",(0,t.jsxs)(n.li,{children:["Sapphire on ",(0,t.jsx)(n.a,{href:"/dapp/sapphire/#testnet",children:"Testnet"}),": ",(0,t.jsx)(n.code,{children:"23295"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"All configuration settings can also be set via environment variables. For\nexample, instead of setting up the database password in the config file above\nyou can export:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"DATABASE__PASSWORD=your_password_here\n"})})]}),"\n",(0,t.jsx)(n.p,{children:"To start the Web3 gateway invoke:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"./oasis-web3-gateway --config gateway.yml\n"})}),"\n",(0,t.jsx)(n.p,{children:"The Web3 gateway will connect to your Oasis node and start indexing available\nblocks (i.e. from the last network upgrade). This may \u2014 depending on your\nhardware and the size of the blockchain \u2014 take hours."}),"\n",(0,t.jsx)(n.p,{children:"If your database contains any tables populated by the previous version of the\nWeb3 gateway, migration scripts will automatically be applied upon startup."}),"\n",(0,t.jsx)(n.p,{children:"If you want to migrate the database separately, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"./oasis-web3-gateway migrate-db --config gateway.yml\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Above, we are invoking the ",(0,t.jsx)(n.code,{children:"oasis-web3-gateway"})," process directly from the\nshell, so you can quickly start using it. If you are setting up a production\nenvironment, you should ",(0,t.jsx)(n.a,{href:"/node/run-your-node/prerequisites/system-configuration#create-a-user",children:"configure the Web3 gateway as a system service"})," and register it in the service manager for your platform."]})}),"\n",(0,t.jsx)(n.h2,{id:"archive-web3-gateway",children:"Archive Web3 Gateway"}),"\n",(0,t.jsx)(n.p,{children:"Each Oasis Web3 gateway can only connect to and synchronize blocks from a\nsingle Oasis node instance. To enable access to older EVM blocks, you can\nconfigure the Web3 gateway to behave as a proxy to another \u2014 archive \u2014 instance\nof the Web3 gateway."}),"\n",(0,t.jsxs)(n.p,{children:["First, set up an instance of the ",(0,t.jsx)(n.a,{href:"/node/run-your-node/archive-node",children:"Oasis archive node"}),". Then, repeat the similar\nprocess of setting up a Web3 gateway as you would normally do, but configure it\nto use the newly set up Oasis archive node."]}),"\n",(0,t.jsxs)(n.p,{children:["Suppose the archive instances of the Web3 gateway and Oasis nodes are up\nand running and the archive Web3 gateway is listening on the local port ",(0,t.jsx)(n.code,{children:"8543"}),".\nEnable the proxy for historical blocks by adding the following to your (live)\nWeb3 gateway config and restart it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"title='gateway.yml'",children:"# URI of an archive web3 gateway instance for servicing historical queries.\narchive_uri: 'http://localhost:8543'\n"})}),"\n",(0,t.jsx)(n.p,{children:"If a query requires information on the block which isn't stored in the\nlive version of the Web3 gateway, the gateway will pass the query to the\nconfigured archive instance and return the obtained result."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Historical estimate gas calls are not supported."})}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.h3,{id:"wipe-state-to-force-a-complete-reindex",children:"Wipe state to force a complete reindex"}),"\n",(0,t.jsxs)(n.p,{children:["If you encounter database or hardware issues, you may need to wipe the\ndatabase and reindex all blocks. First, run the ",(0,t.jsx)(n.code,{children:"truncate-db"})," subcommand:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"oasis-web3-gateway truncate-db --config gateway.yml --unsafe\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then, execute the ",(0,t.jsx)(n.code,{children:"oasis-web3-gateway"})," normally to start reindexing the\nblocks."]}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"This will wipe all existing state in the PostgreSQL database and can lead to\nextended downtime while the Web3 Gateway is reindexing the blocks."})}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(i.A,{items:[(0,r.$)("/node/run-your-node"),(0,r.$)("/node/grpc")]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},5965:(e,n,a)=>{a.d(n,{A:()=>f});a(6540);var t=a(4164),s=a(8774),i=a(4142),r=a(5846),o=a(6654),l=a(1312),d=a(1107);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=a(4848);function u(e){let{href:n,children:a}=e;return(0,h.jsx)(s.A,{href:n,className:(0,t.A)("card padding--lg",c.cardContainer),children:a})}function p(e){let{href:n,icon:a,title:s,description:i}=e;return(0,h.jsxs)(u,{href:n,children:[(0,h.jsxs)(d.A,{as:"h2",className:(0,t.A)("text--truncate",c.cardTitle),title:s,children:[a," ",s]}),i&&(0,h.jsx)("p",{className:(0,t.A)("text--truncate",c.cardDescription),title:i,children:i})]})}function m(e){let{item:n}=e;const a=(0,i.Nr)(n),t=function(){const{selectMessage:e}=(0,r.W)();return n=>e(n,(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return a?(0,h.jsx)(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??t(n.items.length)}):null}function g(e){let{item:n}=e;const a=(0,o.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,i.cC)(n.docId??void 0);return(0,h.jsx)(p,{href:n.href,icon:a,title:n.label,description:n.description??t?.description})}function f(e){let{item:n}=e;switch(n.type){case"link":return(0,h.jsx)(g,{item:n});case"category":return(0,h.jsx)(m,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}},2550:(e,n,a)=>{a.d(n,{A:()=>l});a(6540);var t=a(4164),s=a(4142),i=a(5965),r=a(4848);function o(e){let{className:n}=e;const a=(0,s.$S)();return(0,r.jsx)(l,{items:a.items,className:n})}function l(e){const{items:n,className:a}=e;if(!n)return(0,r.jsx)(o,{...e});const l=(0,s.d1)(n);return(0,r.jsx)("section",{className:(0,t.A)("row",a),children:l.map(((e,n)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(i.A,{item:e})},n)))})}},5846:(e,n,a)=>{a.d(n,{W:()=>d});var t=a(6540),s=a(4586);const i=["zero","one","two","few","many","other"];function r(e){return i.filter((n=>e.includes(n)))}const o={locale:"en",pluralForms:r(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,t.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:r(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),o}}),[e])}function d(){const e=l();return{selectMessage:(n,a)=>function(e,n,a){const t=e.split("|");if(1===t.length)return t[0];t.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const s=a.select(n),i=a.pluralForms.indexOf(s);return t[Math.min(i,t.length-1)]}(a,n,e)}}},6116:(e,n,a)=>{a.d(n,{$:()=>i});var t=a(2252);function s(e){for(const n of e){const e=n.href;e&&void 0===globalThis.sidebarItemsMap[e]&&(globalThis.sidebarItemsMap[e]=n),"category"===n.type&&s(n.items)}}function i(e){const n=(0,t.r)();if(!n)throw new Error("Unexpected: cant find docsVersion in current context");if(void 0===globalThis.sidebarItemsMap){globalThis.sidebarItemsMap={};for(const e in n.docsSidebars)s(n.docsSidebars[e])}if(void 0===globalThis.sidebarItemsMap[e])throw console.log("Registered sidebar items:"),console.log(globalThis.sidebarItemsMap),new Error("Unexpected: sidebar item with href "+e+" does not exist.");return globalThis.sidebarItemsMap[e]}},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var t=a(6540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);