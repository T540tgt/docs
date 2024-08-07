"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[1117],{9328:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var i=s(4848),c=s(8453);const r={},o="Staking",t={id:"core/consensus/services/staking",title:"Staking",description:"The staking service is responsible for managing the staking ledger in the",source:"@site/docs/core/consensus/services/staking.md",sourceDirName:"core/consensus/services",slug:"/core/consensus/services/staking",permalink:"/core/consensus/services/staking",draft:!1,unlisted:!1,editUrl:"https://github.com/oasisprotocol/oasis-core/edit/stable/22.2.x/docs/consensus/services/staking.md",tags:[],version:"current",lastUpdatedAt:1715584634e3,frontMatter:{},sidebar:"oasisCore",previous:{title:"Random Beacon",permalink:"/core/consensus/services/beacon"},next:{title:"Registry",permalink:"/core/consensus/services/registry"}},a={},d=[{value:"Tokens and Base Units",id:"tokens-and-base-units",level:2},{value:"Accounts",id:"accounts",level:2},{value:"User Accounts",id:"user-accounts",level:3},{value:"Runtime Accounts",id:"runtime-accounts",level:3},{value:"Reserved Addresses",id:"reserved-addresses",level:3},{value:"General",id:"general",level:3},{value:"Escrow",id:"escrow",level:3},{value:"Delegation",id:"delegation",level:4},{value:"Commission Schedule",id:"commission-schedule",level:4},{value:"Methods",id:"methods",level:2},{value:"Transfer",id:"transfer",level:3},{value:"Burn",id:"burn",level:3},{value:"Add Escrow",id:"add-escrow",level:3},{value:"Reclaim Escrow",id:"reclaim-escrow",level:3},{value:"Amend Commission Schedule",id:"amend-commission-schedule",level:3},{value:"Allow",id:"allow",level:3},{value:"Withdraw",id:"withdraw",level:3},{value:"Events",id:"events",level:2},{value:"Transfer Event",id:"transfer-event",level:3},{value:"Burn Event",id:"burn-event",level:3},{value:"Escrow Event",id:"escrow-event",level:3},{value:"Add Escrow Event",id:"add-escrow-event",level:4},{value:"Take Escrow Event",id:"take-escrow-event",level:4},{value:"Reclaim Escrow Event",id:"reclaim-escrow-event",level:4},{value:"Allowance Change Event",id:"allowance-change-event",level:3},{value:"Consensus Parameters",id:"consensus-parameters",level:2},{value:"Test Vectors",id:"test-vectors",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"staking",children:"Staking"}),"\n",(0,i.jsx)(n.p,{children:"The staking service is responsible for managing the staking ledger in the\nconsensus layer. It enables operations like transferring stake between accounts\nand escrowing stake for specific needs (e.g., operating nodes)."}),"\n",(0,i.jsxs)(n.p,{children:["The service interface definition lives in ",(0,i.jsx)(n.a,{href:"https://github.com/oasisprotocol/oasis-core/tree/master/go/staking/api/api.go",children:(0,i.jsx)(n.code,{children:"go/staking/api"})}),". It defines the\nsupported queries and transactions. For more information you can also check out\nthe ",(0,i.jsx)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc",children:"consensus service API documentation"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"tokens-and-base-units",children:"Tokens and Base Units"}),"\n",(0,i.jsx)(n.p,{children:"Stake amounts can be denominated in tokens and base units."}),"\n",(0,i.jsxs)(n.p,{children:["Tokens are used in user-facing scenarios (e.g. CLI commands) where the token\namount is prefixed with the token's ticker symbol as defined by the ",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#Genesis",children:[(0,i.jsx)(n.code,{children:"Genesis"}),"'\n",(0,i.jsx)(n.code,{children:"TokenSymbol"})," field"]}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Another ",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#Genesis",children:[(0,i.jsx)(n.code,{children:"Genesis"}),"' field, ",(0,i.jsx)(n.code,{children:"TokenValueExponent"})]}),", defines the\ntoken's value base-10 exponent.\nFor example, if ",(0,i.jsx)(n.code,{children:"TokenValueExponent"})," is 6, then 1 token equals 10^6 (i.e. one\nmillion) base units."]}),"\n",(0,i.jsx)(n.p,{children:"Internally, base units are used for all stake calculation and processing."}),"\n",(0,i.jsx)(n.h2,{id:"accounts",children:"Accounts"}),"\n",(0,i.jsx)(n.p,{children:"A staking account is an entry in the staking ledger. It can hold both general\nand escrow accounts."}),"\n",(0,i.jsx)(n.p,{children:"Each staking account has an address which is derived from the corresponding\npublic key as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[ 1 byte <ctx-version> ][ first 20 bytes of SHA512-256(<ctx-identifier> || <ctx-version> || <data>) ]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Where ",(0,i.jsx)(n.code,{children:"<ctx-version>"})," and ",(0,i.jsx)(n.code,{children:"<ctx-identifier>"})," represent the staking account\naddress' context version and identifier and ",(0,i.jsx)(n.code,{children:"<data>"})," represents the data\nspecific to the address kind."]}),"\n",(0,i.jsx)(n.p,{children:"There are two kinds of accounts:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"User accounts linked to a specific public key."}),"\n",(0,i.jsxs)(n.li,{children:["Runtime accounts linked to a specific ",(0,i.jsx)(n.a,{href:"/core/runtime/identifiers",children:"runtime identifier"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Addresses use ",(0,i.jsx)(n.a,{href:"https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki#bech32",children:"Bech32 encoding"})," for text serialization with ",(0,i.jsx)(n.code,{children:"oasis"})," as its human\nreadable part (HRP) prefix (for both kinds of accounts)."]}),"\n",(0,i.jsx)(n.h3,{id:"user-accounts",children:"User Accounts"}),"\n",(0,i.jsxs)(n.p,{children:["In case of user accounts, the ",(0,i.jsx)(n.code,{children:"<ctx-version>"})," and ",(0,i.jsx)(n.code,{children:"<ctx-identifier>"})," are as\ndefined by the ",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#pkg-variables",children:[(0,i.jsx)(n.code,{children:"AddressV0Context"})," variable"]}),", and ",(0,i.jsx)(n.code,{children:"<data>"})," represents the\naccount signer's public key (e.g. entity id)."]}),"\n",(0,i.jsxs)(n.p,{children:["For more details, see the ",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#NewAddress",children:[(0,i.jsx)(n.code,{children:"NewAddress"})," function"]}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["When generating an account's private/public key pair, follow ",(0,i.jsx)(n.a,{href:"/adrs/0008-standard-account-key-generation",children:"ADR 0008:\nStandard Account Key Generation"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"runtime-accounts",children:"Runtime Accounts"}),"\n",(0,i.jsxs)(n.p,{children:["In case of runtime accounts, the ",(0,i.jsx)(n.code,{children:"<ctx-version>"})," and ",(0,i.jsx)(n.code,{children:"<ctx-identifier>"})," are as\ndefined by the ",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#pkg-variables",children:[(0,i.jsx)(n.code,{children:"AddressRuntimeV0Context"})," variable"]}),", and ",(0,i.jsx)(n.code,{children:"<data>"})," represents the\n",(0,i.jsx)(n.a,{href:"/core/runtime/identifiers",children:"runtime identifier"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For more details, see the ",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#NewRuntimeAddress",children:[(0,i.jsx)(n.code,{children:"NewRuntimeAddress"})," function"]}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The runtime accounts belong to runtimes and can only be manipulated by the\nruntime by ",(0,i.jsx)(n.a,{href:"/core/runtime/messages",children:"emitting messages"})," to the consensus layer."]}),"\n",(0,i.jsx)(n.h3,{id:"reserved-addresses",children:"Reserved Addresses"}),"\n",(0,i.jsx)(n.p,{children:"Some staking account addresses are reserved to prevent them from being\naccidentally used in the actual ledger."}),"\n",(0,i.jsx)(n.p,{children:"Currently, they are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"oasis1qrmufhkkyyf79s5za2r8yga9gnk4t446dcy3a5zm"}),": common pool address\n(defined by ",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#pkg-variables",children:[(0,i.jsx)(n.code,{children:"CommonPoolAddress"})," variable"]}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"oasis1qqnv3peudzvekhulf8v3ht29z4cthkhy7gkxmph5"}),": per-block fee accumulator\naddress (defined by ",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#pkg-variables",children:[(0,i.jsx)(n.code,{children:"FeeAccumulatorAddress"})," variable"]}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"oasis1qp65laz8zsa9a305wxeslpnkh9x4dv2h2qhjz0ec"}),": governance deposits address\n(defined by the ",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#pkg-variables",children:[(0,i.jsx)(n.code,{children:"GovernanceDeposits"})," variable"]}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,i.jsx)(n.p,{children:"General accounts store account's general balance and nonce.\nNonce is the incremental number that must be unique for each account's\ntransaction."}),"\n",(0,i.jsx)(n.h3,{id:"escrow",children:"Escrow"}),"\n",(0,i.jsx)(n.p,{children:"Escrow accounts are used to hold stake delegated for specific consensus-layer\noperations (e.g., registering and running nodes).\nTheir balance is subject to special delegation provisions and a debonding\nperiod."}),"\n",(0,i.jsxs)(n.p,{children:["Delegation provisions, also called commissions, are specified by the\n",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#CommissionSchedule",children:[(0,i.jsx)(n.code,{children:"CommissionSchedule"})," field"]}),"."]}),"\n",(0,i.jsx)(n.p,{children:"An escrow account also has a corresponding stake accumulator.\nIt stores stake claims for an escrow account and ensures all claims are\nsatisfied at any given point.\nAdding a new claim is only possible if all of the existing claims plus the new\nclaim can be satisfied."}),"\n",(0,i.jsx)(n.h4,{id:"delegation",children:"Delegation"}),"\n",(0,i.jsxs)(n.p,{children:["When a delegator wants to delegate some of amount of stake to a staking account,\nhe needs to escrow stake using ",(0,i.jsx)(n.a,{href:"#add-escrow",children:"Add Escrow method"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Similarly, when a delegator wants to reclaim some amount of escrowed stake back\nto his general account, he needs to reclaim stake using ",(0,i.jsx)(n.a,{href:"#reclaim-escrow",children:"Reclaim Escrow method"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"To simplify accounting, each escrow results in the delegator account being\nissued shares which can be converted back to stake during the reclaim escrow\noperation."}),"\n",(0,i.jsxs)(n.p,{children:["When a delegator delegates some amount of stake to an escrow account, the\ndelegator receives the number of shares proportional to the current\n",(0,i.jsx)(n.em,{children:"share price"})," (in base units) calculated from the total number of stake\ndelegated to an escrow account so far and the number of shares issued so far:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"shares_per_base_unit = account_issued_shares / account_delegated_base_units\n"})}),"\n",(0,i.jsx)(n.p,{children:"For example, if an escrow account has the following state:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"escrow": {\n    "active": {\n        "balance": "250",\n        "total_shares": "1000"\n    },\n    ...\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["then the current share price (i.e. ",(0,i.jsx)(n.code,{children:"shares_per_base_unit"}),") is 1000 / 250 = 4."]}),"\n",(0,i.jsx)(n.p,{children:"Delegating 500 base units to this escrow account would result in 500 * 4 = 2000\nnewly issued shares."}),"\n",(0,i.jsx)(n.p,{children:"Thus, the escrow account would have the following state afterwards:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"escrow": {\n    "active": {\n        "balance": "750",\n        "total_shares": "3000"\n    },\n    ...\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When a delegator wants to reclaim a certain number of escrowed stake, the\n",(0,i.jsx)(n.em,{children:"base unit price"})," (in shares) must be calculated based on the escrow account's\ncurrent active balance and the number of issued shares:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"base_units_per_share = account_delegated_base_units / account_issued_shares\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Returning to our example escrow account, the current base unit price (i.e.\n",(0,i.jsx)(n.code,{children:"base_units_per_share"}),") is 750 / 3000 = 0.25."]}),"\n",(0,i.jsx)(n.p,{children:"Reclaiming 1200 shares would result in 1200 * 0.25 = 300 base units being\nreclaimed."}),"\n",(0,i.jsx)(n.p,{children:"The escrow account would have the following state afterwards:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"escrow": {\n    "active": {\n        "balance": "450",\n        "total_shares": "1800"\n    },\n    ...\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Reclaiming escrow does not complete immediately, but may be subject to a\ndebonding period during in which the stake still remains escrowed."}),"\n",(0,i.jsx)(n.h4,{id:"commission-schedule",children:"Commission Schedule"}),"\n",(0,i.jsxs)(n.p,{children:["A staking account can be configured to take a commission on staking rewards\ngiven to its node(s). They are defined by the ",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#CommissionRateStep",children:[(0,i.jsx)(n.code,{children:"CommissionRateStep"})," type"]}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The commission rate must be within bounds, which the staking account can also\nspecify using the ",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#CommissionRateBoundStep",children:[(0,i.jsx)(n.code,{children:"CommissionRateBoundStep"})," type"]}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The commission rates and rate bounds can change over time which is defined\nby the ",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#CommissionSchedule",children:[(0,i.jsx)(n.code,{children:"CommissionSchedule"})," type"]}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To prevent unexpected changes in commission rates and rate bounds, they must\nbe specified a number of epochs in the future, controlled by the\n",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#CommissionScheduleRules",children:[(0,i.jsx)(n.code,{children:"CommissionScheduleRules"})," consensus parameter"]}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.p,{children:"The following sections describe the methods supported by the consensus staking\nservice."}),"\n",(0,i.jsx)(n.h3,{id:"transfer",children:"Transfer"}),"\n",(0,i.jsxs)(n.p,{children:["Transfer enables stake transfer between different accounts in the staking\nledger. A new transfer transaction can be generated using\n",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#NewTransferTx",children:[(0,i.jsx)(n.code,{children:"NewTransferTx"})," function"]}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Method name:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"staking.Transfer\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Body:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-golang",children:'type Transfer struct {\n    To     Address           `json:"to"`\n    Amount quantity.Quantity `json:"amount"`\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"to"})," specifies the destination account's address."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"amount"})," specifies the amount of base units to transfer."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The transaction signer implicitly specifies the source account."}),"\n",(0,i.jsx)(n.h3,{id:"burn",children:"Burn"}),"\n",(0,i.jsxs)(n.p,{children:["Burn destroys some stake in the caller's account. A new burn transaction can be\ngenerated using ",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#NewBurnTx",children:[(0,i.jsx)(n.code,{children:"NewBurnTx"})," function"]}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Method name:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"staking.Burn\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Body:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-golang",children:'type Burn struct {\n    Amount quantity.Quantity `json:"amount"`\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"amount"})," specifies the amount of base units to burn."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The transaction signer implicitly specifies the caller's account."}),"\n",(0,i.jsx)(n.h3,{id:"add-escrow",children:"Add Escrow"}),"\n",(0,i.jsxs)(n.p,{children:["Escrow transfers stake into an escrow account.\nFor more details, see the ",(0,i.jsx)(n.a,{href:"#delegation",children:"Delegation section"})," of this document.\nA new add escrow transaction can be generated using ",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#NewAddEscrowTx",children:[(0,i.jsx)(n.code,{children:"NewAddEscrowTx"})," function"]}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Method name:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"staking.AddEscrow\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Body:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-golang",children:'type Escrow struct {\n    Account Address           `json:"account"`\n    Amount  quantity.Quantity `json:"amount"`\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"account"})," specifies the destination escrow account's address."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"amount"})," specifies the amount of base units to transfer."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The transaction signer implicitly specifies the source account."}),"\n",(0,i.jsx)(n.h3,{id:"reclaim-escrow",children:"Reclaim Escrow"}),"\n",(0,i.jsxs)(n.p,{children:["Reclaim escrow starts the escrow reclamation process.\nFor more details, see the ",(0,i.jsx)(n.a,{href:"#delegation",children:"Delegation section"})," of this document.\nA new reclaim escrow transaction can be generated using\n",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#NewReclaimEscrowTx",children:[(0,i.jsx)(n.code,{children:"NewReclaimEscrowTx"})," function"]}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Method name:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"staking.ReclaimEscrow\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Body:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-golang",children:'type ReclaimEscrow struct {\n    Account Address           `json:"account"`\n    Shares  quantity.Quantity `json:"shares"`\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"account"})," specifies the source escrow account's address."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"shares"})," specifies the number of shares to reclaim."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The transaction signer implicitly specifies the destination account."}),"\n",(0,i.jsx)(n.h3,{id:"amend-commission-schedule",children:"Amend Commission Schedule"}),"\n",(0,i.jsxs)(n.p,{children:["Amend commission schedule updates the commission schedule specified for the\ngiven escrow account.\nFor more details, see the ",(0,i.jsx)(n.a,{href:"#commission-schedule",children:"Commission Schedule section"})," of this document.\nA new amend commission schedule transaction can be\ngenerated using ",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#NewAmendCommissionScheduleTx",children:[(0,i.jsx)(n.code,{children:"NewAmendCommissionScheduleTx"})," function"]}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Method name:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"staking.AmendCommissionSchedule\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Body:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-golang",children:'type AmendCommissionSchedule struct {\n    Amendment CommissionSchedule `json:"amendment"`\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"amendment"})," defines the amended commission schedule."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The transaction signer implicitly specifies the escrow account."}),"\n",(0,i.jsx)(n.h3,{id:"allow",children:"Allow"}),"\n",(0,i.jsxs)(n.p,{children:["Allow enables an account holder to set an allowance for a beneficiary. A new\nallow transaction can be generated using ",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#NewAllowTx",children:[(0,i.jsx)(n.code,{children:"NewAllowTx"})," function"]}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Method name:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"staking.Allow\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Body:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-golang",children:'type Allow struct {\n    Beneficiary  Address           `json:"beneficiary"`\n    Negative     bool              `json:"negative,omitempty"`\n    AmountChange quantity.Quantity `json:"amount_change"`\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"beneficiary"})," specifies the beneficiary account address."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"amount_change"})," specifies the absolute value of the amount of base units to\nchange the allowance for."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"negative"})," specifies whether the ",(0,i.jsx)(n.code,{children:"amount_change"})," should be subtracted instead\nof added."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The transaction signer implicitly specifies the general account. Upon executing\nthe allow the following actions are performed:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If either the ",(0,i.jsx)(n.code,{children:"disable_transfers"})," staking consensus parameter is set to ",(0,i.jsx)(n.code,{children:"true"}),"\nor the ",(0,i.jsx)(n.code,{children:"max_allowances"})," staking consensus parameter is set to zero, the method\nfails with ",(0,i.jsx)(n.code,{children:"ErrForbidden"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["It is checked whether either the transaction signer address or the\n",(0,i.jsx)(n.code,{children:"beneficiary"})," address are reserved. If any are reserved, the method fails with\n",(0,i.jsx)(n.code,{children:"ErrForbidden"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Address specified by ",(0,i.jsx)(n.code,{children:"beneficiary"})," is compared with the transaction signer\naddress. If the addresses are the same, the method fails with\n",(0,i.jsx)(n.code,{children:"ErrInvalidArgument"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The account indicated by the signer is loaded."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the allow would create a new allowance and the maximum number of allowances\nfor an account has been reached, the method fails with ",(0,i.jsx)(n.code,{children:"ErrTooManyAllowances"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The set of allowances is updated so that the allowance is updated as specified\nby ",(0,i.jsx)(n.code,{children:"amount_change"}),"/",(0,i.jsx)(n.code,{children:"negative"}),". In case the change would cause the allowance to\nbe equal to zero or negative, the allowance is removed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The account is saved."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The corresponding ",(0,i.jsx)(n.a,{href:"#allowance-change-event",children:(0,i.jsx)(n.code,{children:"AllowanceChangeEvent"})})," is emitted."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"withdraw",children:"Withdraw"}),"\n",(0,i.jsxs)(n.p,{children:["Withdraw enables a beneficiary to withdraw from the given account. A new\nwithdraw transaction can be generated using ",(0,i.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#NewWithdrawTx",children:[(0,i.jsx)(n.code,{children:"NewWithdrawTx"})," function"]}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Method name:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"staking.Withdraw\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Body:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-golang",children:'type Withdraw struct {\n    From   Address           `json:"from"`\n    Amount quantity.Quantity `json:"amount"`\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"from"})," specifies the account address to withdraw from."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"amount"})," specifies the amount of base units to withdraw."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The transaction signer implicitly specifies the destination general account.\nUpon executing the withdrawal the following actions are performed:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If either the ",(0,i.jsx)(n.code,{children:"disable_transfers"})," staking consensus parameter is set to ",(0,i.jsx)(n.code,{children:"true"}),"\nor the ",(0,i.jsx)(n.code,{children:"max_allowances"})," staking consensus parameter is set to zero, the method\nfails with ",(0,i.jsx)(n.code,{children:"ErrForbidden"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["It is checked whether either the transaction signer address or the\n",(0,i.jsx)(n.code,{children:"from"})," address are reserved. If any are reserved, the method fails with\n",(0,i.jsx)(n.code,{children:"ErrForbidden"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Address specified by ",(0,i.jsx)(n.code,{children:"from"})," is compared with the transaction signer address.\nIf the addresses are the same, the method fails with ",(0,i.jsx)(n.code,{children:"ErrInvalidArgument"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The source account indicated by ",(0,i.jsx)(n.code,{children:"from"})," is loaded."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The destination account indicated by the transaction signer is loaded."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"amount"})," is deducted from the corresponding allowance in the source account.\nIf this would cause the allowance to go negative, the method fails with\n",(0,i.jsx)(n.code,{children:"ErrForbidden"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"amount"})," is deducted from the source general account balance. If this would\ncause the balance to go negative, the method fails with\n",(0,i.jsx)(n.code,{children:"ErrInsufficientBalance"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"amount"})," is added to the destination general account balance."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Both source and destination accounts are saved."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The corresponding ",(0,i.jsx)(n.a,{href:"#transfer-event",children:(0,i.jsx)(n.code,{children:"TransferEvent"})})," is emitted."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The corresponding ",(0,i.jsx)(n.a,{href:"#allowance-change-event",children:(0,i.jsx)(n.code,{children:"AllowanceChangeEvent"})})," is emitted with the updated\nallowance."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(n.h3,{id:"transfer-event",children:"Transfer Event"}),"\n",(0,i.jsx)(n.p,{children:"The transfer event is emitted when tokens are transferred from a source account\nto a destination account."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Body:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-golang",children:'type TransferEvent struct {\n  From   Address           `json:"from"`\n  To     Address           `json:"to"`\n  Amount quantity.Quantity `json:"amount"`\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"from"})," contains the address of the source account."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"to"})," contains the address of the destination account."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"amount"})," contains the amount (in base units) transferred."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"burn-event",children:"Burn Event"}),"\n",(0,i.jsx)(n.p,{children:"The burn event is emitted when tokens are burned."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Body:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-golang",children:'type BurnEvent struct {\n  Owner  Address           `json:"owner"`\n  Amount quantity.Quantity `json:"amount"`\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"owner"})," contains the address of the account that burned tokens."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"amount"})," contains the amount (in base units) burned."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"escrow-event",children:"Escrow Event"}),"\n",(0,i.jsx)(n.p,{children:"Escrow events are emitted when tokens are escrowed, taken from escrow by the\nprotocol or reclaimed from escrow by the account owner."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Body:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-golang",children:'type EscrowEvent struct {\n  Add     *AddEscrowEvent     `json:"add,omitempty"`\n  Take    *TakeEscrowEvent    `json:"take,omitempty"`\n  Reclaim *ReclaimEscrowEvent `json:"reclaim,omitempty"`\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"add"})," is set if the emitted event is an ",(0,i.jsx)(n.em,{children:"Add Escrow"})," event."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"take"})," is set if the emitted event is a ",(0,i.jsx)(n.em,{children:"Take Escrow"})," event."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"reclaim"})," is set if the emitted event is a ",(0,i.jsx)(n.em,{children:"Reclaim Escrow"})," event."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"add-escrow-event",children:"Add Escrow Event"}),"\n",(0,i.jsx)(n.p,{children:"The add escrow event is emitted when funds are escrowed."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Body:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-golang",children:'type AddEscrowEvent struct {\n  Owner     Address           `json:"owner"`\n  Escrow    Address           `json:"escrow"`\n  Amount    quantity.Quantity `json:"amount"`\n  NewShares quantity.Quantity `json:"new_shares"`\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"owner"})," contains the address of the source account."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"escrow"})," contains the address of the destination account the tokens are being\nescrowed to."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"amount"})," contains the amount (in base units) escrowed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"new_shares"})," contains the amount of shares created as a result of the added\nescrow event. Can be zero in case of (non-commissioned) rewards, where stake\nis added without new shares to increase share price."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"take-escrow-event",children:"Take Escrow Event"}),"\n",(0,i.jsx)(n.p,{children:"The take escrow event is emitted by the protocol when escrowed funds are\nslashed for whatever reason."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Body:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-golang",children:'type TakeEscrowEvent struct {\n  Owner  Address                    `json:"owner"`\n  Amount quantity.Quantity          `json:"amount"`\n  DebondingAmount quantity.Quantity `json:"debonding_amount"`\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"owner"})," contains the address of the account escrow has been taken from."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"amount"})," contains the total amount (in base units) taken. The debonding and\nactive escrow balances are slashed in equal proportions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"debonding_amount"})," contains the amount (in base units) taken from just the\ndebonding escrow balance."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"reclaim-escrow-event",children:"Reclaim Escrow Event"}),"\n",(0,i.jsx)(n.p,{children:"The reclaim escrow event is emitted when a reclaim escrow operation completes\nsuccessfully (after the debonding period has passed)."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Body:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-golang",children:'type ReclaimEscrowEvent struct {\n  Owner  Address           `json:"owner"`\n  Escrow Address           `json:"escrow"`\n  Amount quantity.Quantity `json:"amount"`\n  Shares quantity.Quantity `json:"shares"`\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"owner"})," contains the address of the account that reclaimed tokens from escrow."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"escrow"})," contains the address of the account escrow has been reclaimed from."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"amount"})," contains the amount (in base units) reclaimed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"shares"})," contains the amount of shares reclaimed."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"allowance-change-event",children:"Allowance Change Event"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Body:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-golang",children:'type AllowanceChangeEvent struct {\n    Owner        Address           `json:"owner"`\n    Beneficiary  Address           `json:"beneficiary"`\n    Allowance    quantity.Quantity `json:"allowance"`\n    Negative     bool              `json:"negative,omitempty"`\n    AmountChange quantity.Quantity `json:"amount_change"`\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"owner"})," contains the address of the account owner where allowance has been\nchanged."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"beneficiary"})," contains the address of the beneficiary."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"allowance"})," contains the new total allowance."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"amount_change"})," contains the absolute amount the allowance has changed for."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"negative"})," specifies whether the allowance has been reduced rather than\nincreased."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The event is emitted even if the new allowance is zero."}),"\n",(0,i.jsx)(n.h2,{id:"consensus-parameters",children:"Consensus Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"max_allowances"})," (uint32) specifies the maximum number of ",(0,i.jsx)(n.a,{href:"#allow",children:"allowances"})," an\naccount can store. Zero means that allowance functionality is disabled."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"test-vectors",children:"Test Vectors"}),"\n",(0,i.jsxs)(n.p,{children:["To generate test vectors for various staking ",(0,i.jsx)(n.a,{href:"/core/consensus/transactions",children:"transactions"}),", run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"make -C go staking/gen_vectors\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more information about the structure of the test vectors see the section\non ",(0,i.jsx)(n.a,{href:"/core/consensus/test-vectors",children:"Transaction Test Vectors"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>t});var i=s(6540);const c={},r=i.createContext(c);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);