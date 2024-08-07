"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[7943],{6176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=n(4848),o=n(8453);const i={},a="ADR 0020: Governance Support for Delegator Votes",r={id:"adrs/0020-governance-delegator-votes",title:"ADR 0020: Governance Support for Delegator Votes",description:"Component",source:"@site/docs/adrs/0020-governance-delegator-votes.md",sourceDirName:"adrs",slug:"/adrs/0020-governance-delegator-votes",permalink:"/adrs/0020-governance-delegator-votes",draft:!1,unlisted:!1,editUrl:"https://github.com/oasisprotocol/adrs/edit/main/0020-governance-delegator-votes.md",tags:[],version:"current",lastUpdatedAt:1710755515e3,frontMatter:{},sidebar:"adrs",previous:{title:"ADR 0017: ParaTime Application Standard Proposal Process",permalink:"/adrs/0017-app-standards"},next:{title:"ADR 0021: Forward-Secret Ephemeral Secrets",permalink:"/adrs/0021-keymanager-ephemeral-secrets"}},l={},d=[{value:"Component",id:"component",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Casting Votes",id:"casting-votes",level:3},{value:"Alternative solutions",id:"alternative-solutions",level:4},{value:"Vote tallying",id:"vote-tallying",level:3},{value:"Alternative Vote Tallying procedures",id:"alternative-vote-tallying-procedures",level:4},{value:"Implementations in other chains",id:"implementations-in-other-chains",level:4},{value:"Benchmarks",id:"benchmarks",level:4},{value:"Pruning",id:"pruning",level:3},{value:"Voting via messages",id:"voting-via-messages",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"adr-0020-governance-support-for-delegator-votes",children:"ADR 0020: Governance Support for Delegator Votes"}),"\n",(0,s.jsx)(t.h2,{id:"component",children:"Component"}),"\n",(0,s.jsx)(t.p,{children:"Oasis Core"}),"\n",(0,s.jsx)(t.h2,{id:"changelog",children:"Changelog"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"2022-11-07: Minor updates. Added Cosmos-SDK implementation note."}),"\n",(0,s.jsx)(t.li,{children:"2022-11-03: Added benchmarks, minor updates."}),"\n",(0,s.jsx)(t.li,{children:"2022-11-02: Initial draft."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"status",children:"Status"}),"\n",(0,s.jsx)(t.p,{children:"Accepted"}),"\n",(0,s.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,s.jsxs)(t.p,{children:["With the current governance voting mechanism (",(0,s.jsx)(t.a,{href:"/adrs/0004-runtime-governance",children:"ADR 04"}),"), only the active\nvalidator set is participating in voting. This means that the validators are\nvoting on behalf of all their delegators. This ADR proposes a change so that\neach delegator is able to vote with its own stake. The delegators vote acts as\nan override of the validator vote."]}),"\n",(0,s.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,s.jsx)(t.h3,{id:"casting-votes",children:"Casting Votes"}),"\n",(0,s.jsx)(t.p,{children:"In the current implementation the submitter of a vote needs to be a part of the\nactive validator committee at the time the vote is cast. This requirement is\nrelaxed so that additionally anyone with a delegation to an active validator\ncommittee entity can vote."}),"\n",(0,s.jsxs)(t.p,{children:["This change requires an efficient ",(0,s.jsx)(t.code,{children:"staking.DelegationsFor"})," query to obtain a\nlist of accounts the submitter is delegating to. Staking state is updated with:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"// delegationKeyReverseFmt is the key format used for reverse mapping of\n// delegations (delegator address, escrow address).\n//\n// Value is CBOR-serialized delegation.\ndelegationKeyReverseFmt = keyformat.New(0x5A, &staking.Address{}, &staking.Address{})\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"state.SetDelegation"})," function is updated to store both ",(0,s.jsx)(t.code,{children:"delegationKeyFmt"})," and\nthe reverse ",(0,s.jsx)(t.code,{children:"delegationKeyReverseFmt"}),". ",(0,s.jsx)(t.code,{children:"DelegationsFor"})," query function is\nupdated to use the added reverse mapping."]}),"\n",(0,s.jsx)(t.p,{children:"For completeness the same can be done for debonding delegations, although not\nnecessary for the governance changes proposed in this ADR."}),"\n",(0,s.jsx)(t.h4,{id:"alternative-solutions",children:"Alternative solutions"}),"\n",(0,s.jsx)(t.p,{children:"Possible alternatives that would avoid adding the reverse mapping are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Querying ",(0,s.jsx)(t.code,{children:"DelegationsTo"})," for each validator. This results in ",(0,s.jsx)(t.code,{children:"num_validators"}),"\nqueries per cast vote transaction which is still too much."]}),"\n",(0,s.jsx)(t.li,{children:"Allowing anyone to cast votes. Potentially a viable solution, but this could\nresult in the number of voters growing uncontrollably large. This might be ok,\nif the vote tallying procedure would ignore those votes. However the votes\nstate could still grow problematically big."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"vote-tallying",children:"Vote tallying"}),"\n",(0,s.jsx)(t.p,{children:"When a proposal closes, the vote tallying procedure changes to:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"# Two-pass over votes approach.\n1  Tally up the validator votes (as it is already implemented) # First pass.\n2  For each of the voters do:                                  # Second pass.\n3    For each of the entities voter delegates to:\n4      Skip non validator entities\n5      Skip if voter's vote matches the delegation entity vote\n6      Compute stake from the delegation shares\n4      If delegation entity voted, subtract the stake from the delegation entity vote tally\n5      Add computed stake to the voter's vote tally\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Possbile variant: instead of using ",(0,s.jsx)(t.code,{children:"DelegationsFor"})," query in step 3), a map of\nall validator delegators could be prebuild, by using ",(0,s.jsx)(t.code,{children:"DelegationTo"})," for each\nof the validators. Even with the efficient ",(0,s.jsx)(t.code,{children:"DelegationsFor"})," query, this can be\nbeneficial IF the number of voters is large."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This procedure iterates over all voters and can be beneficial if the number of\nvoters is relatively low compared to the number of all validator delegators."}),"\n",(0,s.jsx)(t.h4,{id:"alternative-vote-tallying-procedures",children:"Alternative Vote Tallying procedures"}),"\n",(0,s.jsx)(t.p,{children:"A possible alternative would be to iterate over the delegators-validator sets:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"# Delegators-validator pass approach.\n1 Precompute stakes for all delegators to validators from shares.\n2 For each validator\n3   For each delegator to the validator\n4     IF validator and delegators votes match (or delegator didn't vote)\n5       Add delegator stake to the validator's vote (or nothing if validator didn't vote)\n6     IF validator and delegator vote don't match\n7       Add delegator stake to the delegator's vote (or nothing if delegator didn't vote)\n"})}),"\n",(0,s.jsx)(t.p,{children:"The voting procedure now iterates over all delegators of the active validator\nset. The amount of work is somewhat predictable as it doesn't depend on the\nnumber of voters but on the delegators-to-validator sets. However the number of\nvotes is bound by the size of the delegators-to-validator set and in realistic\nscenario likely much smaller."}),"\n",(0,s.jsx)(t.h4,{id:"implementations-in-other-chains",children:"Implementations in other chains"}),"\n",(0,s.jsxs)(t.p,{children:["Cosmos-SDK uses a similar approach to the proposed solution in the ADR. The\ntallying iterates over voters, their delegations and validators. For detailed\nimplementation see: ",(0,s.jsx)(t.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/dc004c85f2e8b8fb4f66caac2703228c5bf544cf/x/gov/keeper/tally.go#L37-L90",children:"Cosmos-SDK Vote Tallying Code"}),". The voting itself is\nlimited to delegators (similar as proposed in this document)."]}),"\n",(0,s.jsx)(t.h4,{id:"benchmarks",children:"Benchmarks"}),"\n",(0,s.jsx)(t.p,{children:"The Vote Tallying procedure variants were benchmarked on mainnet data."}),"\n",(0,s.jsx)(t.p,{children:"Some basic stats from mainnet:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"120 validators"}),"\n",(0,s.jsx)(t.li,{children:"~49500 eligible voters (unique delegators to validators)"}),"\n",(0,s.jsx)(t.li,{children:"average number of delegations-to per account is 1"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The variants were benchmarked in scenarios with different number of voters. In\nall scenarios the mainnet consensus state was used, only the number of\n(simulated) voters varied. All votes were eligible (had at least one delegation\nto an active validator) and all of the delegator votes did override the\nvalidator votes."}),"\n",(0,s.jsx)(t.p,{children:"The three tested variants were:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:['"Two pass over voters (optimized DelegationsFor)" - as described in the\nproposed Vote tallying solution. Reverse mapping key is used for the\n',(0,s.jsx)(t.code,{children:"DelegationsFor"})," queries (described in Casting Votes section)."]}),"\n",(0,s.jsx)(t.li,{children:'"Two pass over voters (pre-build validator escrow)" - as described in the\nproposed Vote tallying solution with modification of prebuilding a map of all\nvalidator delegators (mentioned in the "Possible variant" section).'}),"\n",(0,s.jsx)(t.li,{children:'"Validator-delegators" - as described in the alternatives section.'}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Two pass over voters (optimized DelegationsFor)",src:n(8543).A+"",width:"720",height:"576"}),"\n",(0,s.jsx)(t.img,{alt:"Two pass over voters (pre-build validators escrow)",src:n(3892).A+"",width:"720",height:"576"}),"\n",(0,s.jsx)(t.img,{alt:"Validator-delegators",src:n(3837).A+"",width:"720",height:"576"})]}),"\n",(0,s.jsx)(t.p,{children:"The above results show that:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Two-pass approach (querying ",(0,s.jsx)(t.code,{children:"DelegationsFor"})," for every voter) is fastest up to\nabout 25000 voters for a proposal. In the worst case (every eligible voter\nvoted) it is about twice as slow as the alternatives. In that case the\ntallying took about 3 seconds."]}),"\n",(0,s.jsx)(t.li,{children:'The two-pass approach using pre-built map of all validator delegators is\ncomparable to the "Validator-delegators" procedure. This makes sense as in\nboth cases the main work is done in querying the delegators of validators.'}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["In reality, the number of voters will likely be small compared to the eligible\nset of all delegators, so the two-pass approach (with querying ",(0,s.jsx)(t.code,{children:"DelegationsFor"}),"\nfor every voter) seems to make the most sense."]}),"\n",(0,s.jsx)(t.p,{children:"If number of voters ever becomes problematic, the method could also implement a\nheuristic to use the prebuilt validator-delegators map when the number of voters\nis large (e.g. number of voters > 1/2 eligible delegators), but at the moment\nthere is no efficient way to query the number of all delegators."}),"\n",(0,s.jsx)(t.h3,{id:"pruning",children:"Pruning"}),"\n",(0,s.jsxs)(t.p,{children:["With the possibility of increased number of votes per proposal a pruning of\nvotes can be implemented. Votes for a proposal can be pruned as soon as the\nfirst block after the proposal is closed. Because proposal is closed in the\n",(0,s.jsx)(t.code,{children:"EndBlock"})," state (which includes votes received in this last block), the pruning\nshould not be done before the block after, so that the exact state at the time\nof the closing can be queried."]}),"\n",(0,s.jsx)(t.h3,{id:"voting-via-messages",children:"Voting via messages"}),"\n",(0,s.jsx)(t.p,{children:"Delegator can also be a runtime. For enabling runtimes to vote, casting votes\nshould also be supported via runtime messages."}),"\n",(0,s.jsx)(t.p,{children:"Roothash message type is updated to include governance message field:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'type Message struct {\n  Staking    *StakingMessage    `json:"staking,omitempty"`\n  Registry   *RegistryMessage   `json:"registry,omitempty"`\n  Governance *GovernanceMessage `json:"governance,omitempty"`\n}\n\n// GovernanceMessage is a governance message that allows a runtime to perform governance operations.\ntype GovernanceMessage struct {\n  cbor.Versioned\n\n  CastVote *governance.ProposalVote `json:"cast_vote,omitempty"`\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Governance backend is updated to handle the cast vote message."}),"\n",(0,s.jsx)(t.p,{children:"For completeness, support for submitting proposals via runtime messages can also\nbe implemented."}),"\n",(0,s.jsx)(t.h2,{id:"consequences",children:"Consequences"}),"\n",(0,s.jsx)(t.h3,{id:"positive",children:"Positive"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Delegators are able to override validators vote. In the case of unresponsive\nvalidators this increases the voting participation."}),"\n",(0,s.jsx)(t.li,{children:"Delegators are able to vote with their own stake."}),"\n",(0,s.jsxs)(t.li,{children:["(if implemented) Staking ",(0,s.jsx)(t.code,{children:"DelegationsFor"})," queries are now efficient and don't\nrequire scanning the full delegations state."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"negative",children:"Negative"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"This increases the complexity of the vote tallying procedure."}),"\n",(0,s.jsx)(t.li,{children:"This increases the size of the governance votes state."}),"\n",(0,s.jsxs)(t.li,{children:["This increases the complexity and size of the consensus staking state if the\n",(0,s.jsx)(t.code,{children:"DelegationsFor"})," reverse mapping is implemented."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"neutral",children:"Neutral"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8543:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/0020-bench1-b406915bd71a67020495939d2c89075b.png"},3892:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/0020-bench2-1cc7812d2c015e4a03288cc6f165bb4e.png"},3837:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/0020-bench3-8741906103d267c9119ac66826d39bd1.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(6540);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);