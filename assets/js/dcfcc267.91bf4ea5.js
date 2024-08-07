"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[223],{6545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(4848),o=t(8453);const r={},i="Running Tests",l={id:"core/development-setup/running-tests",title:"Running Tests",description:"Before proceeding, make sure to look at the [prerequisites] required for running",source:"@site/docs/core/development-setup/running-tests.md",sourceDirName:"core/development-setup",slug:"/core/development-setup/running-tests",permalink:"/core/development-setup/running-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/oasisprotocol/oasis-core/edit/stable/22.2.x/docs/development-setup/running-tests.md",tags:[],version:"current",lastUpdatedAt:1715584634e3,frontMatter:{},sidebar:"oasisCore",previous:{title:"Running Tests and Development Networks",permalink:"/core/development-setup/running-tests-and-development-networks"},next:{title:"Local Network Runner",permalink:"/core/development-setup/oasis-net-runner"}},c={},d=[{value:"Tests",id:"tests",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"running-tests",children:"Running Tests"}),"\n",(0,s.jsxs)(n.p,{children:["Before proceeding, make sure to look at the ",(0,s.jsx)(n.a,{href:"/core/development-setup/prerequisites",children:"prerequisites"})," required for running\nan Oasis Core environment followed by ",(0,s.jsx)(n.a,{href:"/core/development-setup/building",children:"build instructions"})," for the respective\nenvironment (non-SGX or SGX). The following sections assume that you have\nsuccessfully completed the required build steps."]}),"\n",(0,s.jsx)(n.h2,{id:"tests",children:"Tests"}),"\n",(0,s.jsx)(n.p,{children:"After you've built everything, you can use the following commands to run tests."}),"\n",(0,s.jsx)(n.p,{children:"To run all unit tests:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"make test-unit\n"})}),"\n",(0,s.jsx)(n.p,{children:"To run end-to-end tests locally:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"make test-e2e\n"})}),"\n",(0,s.jsx)(n.p,{children:"To run all tests:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"make test\n"})}),"\n",(0,s.jsx)(n.p,{children:"To execute tests using SGX set the following environmental variable before\nrunning the tests:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"export OASIS_TEE_HARDWARE=intel-sgx\n"})}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsxs)(n.p,{children:["Check the console output for mentions of a path of the form\n",(0,s.jsx)(n.code,{children:"/tmp/oasis-test-runnerXXXXXXXXX"})," (where each ",(0,s.jsx)(n.code,{children:"X"})," is a digit).\nThat's the log directory. Start with coarsest-level debug output in\n",(0,s.jsx)(n.code,{children:"console.log"})," files:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cat $(find /tmp/oasis-test-runnerXXXXXXXXX -name console.log) | less\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For even more output, check the other ",(0,s.jsx)(n.code,{children:"*.log"})," files."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(6540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);