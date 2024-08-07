"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[4139],{5806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>h,toc:()=>u});var r=n(4848),a=n(8453),i=n(1470),s=n(9365),o=n(5965),l=n(6116);const c={},d="Quickstart",h={id:"dapp/sapphire/quickstart",title:"Quickstart",description:"In this tutorial, you will build and deploy a unique dApp that requires",source:"@site/docs/dapp/sapphire/quickstart.mdx",sourceDirName:"dapp/sapphire",slug:"/dapp/sapphire/quickstart",permalink:"/dapp/sapphire/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/oasisprotocol/sapphire-paratime/edit/main/docs/quickstart.mdx",tags:[],version:"current",lastUpdatedAt:1723018842e3,frontMatter:{},sidebar:"developers",previous:{title:"Sapphire ParaTime",permalink:"/dapp/sapphire/"},next:{title:"Guide",permalink:"/dapp/sapphire/guide"}},p={},u=[{value:"Create a Sapphire-Native dApp",id:"create-a-sapphire-native-dapp",level:2},{value:"Init a new Hardhat project",id:"init-a-new-hardhat-project",level:3},{value:"Add the Sapphire Testnet to Hardhat",id:"add-the-sapphire-testnet-to-hardhat",level:3},{value:"Get some Sapphire Testnet tokens",id:"get-some-sapphire-testnet-tokens",level:3},{value:"Get the Contract",id:"get-the-contract",level:3},{value:"Vigil.sol, the interesting parts",id:"vigilsol-the-interesting-parts",level:4},{value:"Run the Contract",id:"run-the-contract",level:3},{value:"All done!",id:"all-done",level:2},{value:"See also",id:"see-also",level:2}];function f(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,r.jsx)("p",{style:{width:"100%"},children:(0,r.jsx)("iframe",{style:{margin:"auto",display:"block"},width:"560",height:"315",src:"https://www.youtube.com/embed/LDLz06X_KNY?si=tS1-b1hncG6wo9oL",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,r.jsx)(t.p,{children:"In this tutorial, you will build and deploy a unique dApp that requires\nconfidentiality to work. By the end of the tutorial, you should feel\ncomfortable setting up your Eth development environment to target Sapphire,\nand know how and when to use confidentiality."}),"\n",(0,r.jsx)(t.p,{children:"The expected completion time of this tutorial is 15 minutes."}),"\n",(0,r.jsx)(t.admonition,{title:"Sunsetting Truffle",type:"info",children:(0,r.jsxs)(t.p,{children:["Per Consensys ",(0,r.jsx)(t.a,{href:"https://consensys.io/blog/consensys-announces-the-sunset-of-truffle-and-ganache-and-new-hardhat",children:"announcement"}),", Oasis will no longer support Truffle as of\n2023-10-05 and encourage immediate ",(0,r.jsx)(t.a,{href:"https://trufflesuite.com/docs/truffle/how-to/migrate-to-hardhat/",children:"migration"})," to Hardhat. Please see our\nrepository for the archived Truffle ",(0,r.jsx)(t.a,{href:"https://github.com/oasisprotocol/docs/blob/2f4a1a3c217b82687ab9440bf051762ae369ed45/docs/dapp/sapphire/quickstart.mdx",children:"tutorial"})," and the deprecated ",(0,r.jsx)(t.a,{href:"https://github.com/oasisprotocol/sapphire-paratime/tree/3a85e42e6c1cc090c28a521cf7df6353aa8a30c8/examples/truffle",children:"example"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"create-a-sapphire-native-dapp",children:"Create a Sapphire-Native dApp"}),"\n",(0,r.jsxs)(t.p,{children:["Porting an existing Eth app is cool, and will provide benefits such as\nprotection against MEV.\nHowever, starting from scratch with confidentiality in mind can unlock some\nreally novel dApps and provide a ",(0,r.jsx)(t.a,{href:"/dapp/sapphire/guide#writing-secure-dapps",children:"higher level of security"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["One simple-but-useful dApp that takes advantage of confidentiality is a\n",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Dead_man%27s_switch",children:"dead person's switch"})," that reveals a secret (let's say the encryption key to a\ndata trove) if the operator fails to re-up before too long.\nLet's make it happen!"]}),"\n",(0,r.jsx)(t.h3,{id:"init-a-new-hardhat-project",children:"Init a new Hardhat project"}),"\n",(0,r.jsx)(t.p,{children:"We're going to use Hardhat, but Sapphire should be compatible with your dev\nenvironment of choice. Let us know if things are not as expected!"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Make & enter a new directory"}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"npx hardhat@~2.19.2 init"})," then create a TypeScript project."]}),"\n",(0,r.jsxs)(t.li,{children:["Add ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@oasisprotocol/sapphire-hardhat",children:(0,r.jsx)(t.code,{children:"@oasisprotocol/sapphire-hardhat"})})," as dependency:"]}),"\n"]}),"\n",(0,r.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,r.jsx)(s.A,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"npm install -D @oasisprotocol/sapphire-hardhat\n"})})}),(0,r.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"pnpm add -D @oasisprotocol/sapphire-hardhat\n"})})}),(0,r.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"yarn add --dev @oasisprotocol/sapphire-hardhat\n"})})})]}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsxs)(t.li,{children:["Install ",(0,r.jsx)(t.code,{children:"@nomicfoundation/hardhat-toolbox"}),", TypeScript and other peer\ndependencies required by HardHat."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"add-the-sapphire-testnet-to-hardhat",children:"Add the Sapphire Testnet to Hardhat"}),"\n",(0,r.jsxs)(t.p,{children:["Open up your ",(0,r.jsx)(t.code,{children:"hardhat.config.ts"})," and drop in these lines."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",children:'diff --git a/hardhat.config.ts b/hardhat.config.ts\nindex 414e974..49c95f9 100644\n--- a/hardhat.config.ts\n+++ b/hardhat.config.ts\n@@ -1,8 +1,19 @@\n import { HardhatUserConfig } from "hardhat/config";\n+import \'@oasisprotocol/sapphire-hardhat\';\n import "@nomicfoundation/hardhat-toolbox";\n\n const config: HardhatUserConfig = {\n   solidity: "0.8.17",\n+  networks: {\n+    \'sapphire-testnet\': {\n+      // This is Testnet! If you want Mainnet, add a new network config item.\n+      url: "https://testnet.sapphire.oasis.io",\n+      accounts: process.env.PRIVATE_KEY\n+        ? [process.env.PRIVATE_KEY]\n+        : [],\n+      chainId: 0x5aff,\n+    },\n+  },\n };\n\n export default config;\n'})}),"\n",(0,r.jsxs)(t.p,{children:["By importing ",(0,r.jsx)(t.code,{children:"@oasisprotocol/sapphire-hardhat"})," at the top of the config file,\n",(0,r.jsx)(t.strong,{children:"any network config entry corresponding to the Sapphire's chain ID will\nautomatically be wrapped with Sapphire specifics for encrypting and signing the\ntransactions"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"get-some-sapphire-testnet-tokens",children:"Get some Sapphire Testnet tokens"}),"\n",(0,r.jsxs)(t.p,{children:["Now for the fun part. We need to configure the Sapphire network and get some tokens.\nHit up the one and only ",(0,r.jsx)(t.a,{href:"https://faucet.testnet.oasis.io",children:"Oasis Testnet faucet"}),' and select "Sapphire".\nSubmit the form and be on your way.']}),"\n",(0,r.jsx)(t.h3,{id:"get-the-contract",children:"Get the Contract"}),"\n",(0,r.jsxs)(t.p,{children:["This is a Sapphire tutorial and you're already a Solidity expert, so let's not\nbore you with explaining the gritty details of the contract.\nStart by pasting ",(0,r.jsx)(t.a,{href:"https://github.com/oasisprotocol/sapphire-paratime/blob/main/examples/hardhat/contracts/Vigil.sol",children:"Vigil.sol"})," into ",(0,r.jsx)(t.code,{children:"contracts/Vigil.sol"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["While you're there, also place ",(0,r.jsx)(t.a,{href:"https://github.com/oasisprotocol/sapphire-paratime/blob/main/examples/hardhat/scripts/run-vigil.ts",children:"run-vigil.ts"})," into ",(0,r.jsx)(t.code,{children:"scripts/run-vigil.ts"}),".\nWe'll need that later."]}),"\n",(0,r.jsx)(t.h4,{id:"vigilsol-the-interesting-parts",children:"Vigil.sol, the interesting parts"}),"\n",(0,r.jsx)(t.p,{children:"The key state variables are:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-solidity",children:"    SecretMetadata[] public _metas;\n    bytes[] private _secrets;\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"_metas"})," is marked with ",(0,r.jsx)(t.code,{children:"public"})," visibility, so despite the state itself being\nencrypted and not readable directly, Solidity will generate a getter that will\ndo the decryption for you."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"_secrets"})," is ",(0,r.jsx)(t.code,{children:"private"})," and therefore truly secret; only the contract can\naccess the data contained in this mapping."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"And the methods we'll care most about are"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"createSecret"}),", which adds an entry to both ",(0,r.jsx)(t.code,{children:"_metas"})," and ",(0,r.jsx)(t.code,{children:"_secrets"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"revealSecret"}),", which acts as an access-controlled getter for the data\ncontained with ",(0,r.jsx)(t.code,{children:"_secrets"}),". Due to trusted execution and confidentiality, the\nonly way that the secret will get revealed is if execution proceeds all the\nway to the end of the function and does not revert."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The rest of the methods are useful if you actually intended to use the contract,\nbut they demonstrate that developing for Sapphire is essentially the same as for\nEthereum.\nYou can even write tests against the Hardhat network and use Hardhat plugins."}),"\n",(0,r.jsx)(t.h3,{id:"run-the-contract",children:"Run the Contract"}),"\n",(0,r.jsxs)(t.p,{children:["And to wrap things up, we'll put ",(0,r.jsx)(t.code,{children:"Vigil"})," through its paces.\nFirst, let's see what's actually going on."]}),"\n",(0,r.jsx)(t.p,{children:"After deploying the contract, we can create a secret, check that it's not\nreadable, wait a bit, and then check that it has become readable.\nPretty cool if you ask me!"}),"\n",(0,r.jsx)(t.p,{children:"Anyway, make it happen by running"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'PRIVATE_KEY="0x..." npx hardhat run scripts/run-vigil.ts --network sapphire-testnet\n'})}),"\n",(0,r.jsx)(t.p,{children:"And if you see something like the following, you'll know you're well on the road\nto deploying confidential dApps on Sapphire."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Vigil deployed to: 0x74dC4879B152FDD1DDe834E9ba187b3e14f462f1\nStoring a secret in 0x13125d868f5fb3cbc501466df26055ea063a90014b5ccc8dfd5164dc1dd67543\nChecking the secret\nfailed to fetch secret: reverted: not expired\nWaiting...\nChecking the secret again\nThe secret ingredient is brussels sprouts\n"})}),"\n",(0,r.jsx)(t.h2,{id:"all-done",children:"All done!"}),"\n",(0,r.jsxs)(t.p,{children:["Congratulations, you made it through the Sapphire tutorial! If you have any\nquestions, please check out the ",(0,r.jsx)(t.a,{href:"/dapp/sapphire/guide",children:"guide"})," and join the discussion on the\n",(0,r.jsx)(t.a,{href:"/get-involved/#social-media-channels",children:"#sapphire-paratime Discord channel"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Best of luck on your future forays into confidentiality!"}),"\n",(0,r.jsx)(t.admonition,{title:"Example",type:"info",children:(0,r.jsxs)(t.p,{children:["Visit the Sapphire ParaTime repository to download the ",(0,r.jsx)(t.a,{href:"https://github.com/oasisprotocol/sapphire-paratime/tree/main/examples/hardhat",children:"Hardhat"}),"\nexample of this quickstart."]})}),"\n",(0,r.jsx)(t.admonition,{title:"Example",type:"info",children:(0,r.jsxs)(t.p,{children:["If your project involves building a web frontend, we recommend that you check\nout the official ",(0,r.jsx)(t.a,{href:"https://github.com/oasisprotocol/demo-starter",children:"Oasis starter"})," files."]})}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(o.A,{item:(0,l.$)("/dapp/sapphire/browser")}),"\n",(0,r.jsx)(o.A,{item:(0,l.$)("/node/run-your-node/paratime-client-node")}),"\n",(0,r.jsx)(o.A,{item:(0,l.$)("/node/web3")})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},5965:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var r=n(4164),a=n(8774),i=n(4142),s=n(5846),o=n(6654),l=n(1312),c=n(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=n(4848);function p(e){let{href:t,children:n}=e;return(0,h.jsx)(a.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function u(e){let{href:t,icon:n,title:a,description:i}=e;return(0,h.jsxs)(p,{href:t,children:[(0,h.jsxs)(c.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:a,children:[n," ",a]}),i&&(0,h.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function f(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,h.jsx)(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function m(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,h.jsx)(u,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,h.jsx)(m,{item:t});case"category":return(0,h.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var i=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),a=n(4164),i=n(3104),s=n(6347),o=n(205),l=n(7485),c=n(1682),d=n(9466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,h]=f({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),x=(()=>{const e=c??m;return u({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,i]),tabValues:i}}var g=n(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(c(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...i,className:(0,a.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,b.jsx)(y,{...t,...e}),(0,b.jsx)(j,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(t))}},5846:(e,t,n)=>{n.d(t,{W:()=>c});var r=n(6540),a=n(4586);const i=["zero","one","two","few","many","other"];function s(e){return i.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=n.select(t),i=n.pluralForms.indexOf(a);return r[Math.min(i,r.length-1)]}(n,t,e)}}},6116:(e,t,n)=>{n.d(t,{$:()=>i});var r=n(2252);function a(e){for(const t of e){const e=t.href;e&&void 0===globalThis.sidebarItemsMap[e]&&(globalThis.sidebarItemsMap[e]=t),"category"===t.type&&a(t.items)}}function i(e){const t=(0,r.r)();if(!t)throw new Error("Unexpected: cant find docsVersion in current context");if(void 0===globalThis.sidebarItemsMap){globalThis.sidebarItemsMap={};for(const e in t.docsSidebars)a(t.docsSidebars[e])}if(void 0===globalThis.sidebarItemsMap[e])throw console.log("Registered sidebar items:"),console.log(globalThis.sidebarItemsMap),new Error("Unexpected: sidebar item with href "+e+" does not exist.");return globalThis.sidebarItemsMap[e]}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(6540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);