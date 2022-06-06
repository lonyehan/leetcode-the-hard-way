"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4103],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(n),h=r,f=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var m=2;m<i;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58906:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return m},metadata:function(){return c},suggestedProblems:function(){return f},toc:function(){return h}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=n(78735),o=n(11182),l=["components"],m={title:"Sieve of Eratosthenes",description:"Sieve of Eratosthenes is a way of finding all prime numbers up to N (inclusive).",hide_table_of_contents:!0,keywords:["leetcode","tutorial","sieve of eratosthenes","algorithm"]},p=void 0,c={unversionedId:"math/number-theory/sieve-of-eratosthenes",id:"math/number-theory/sieve-of-eratosthenes",title:"Sieve of Eratosthenes",description:"Sieve of Eratosthenes is a way of finding all prime numbers up to N (inclusive).",source:"@site/tutorials/math/number-theory/sieve-of-eratosthenes.md",sourceDirName:"math/number-theory",slug:"/math/number-theory/sieve-of-eratosthenes",permalink:"/leetcode-the-hard-way/tutorials/math/number-theory/sieve-of-eratosthenes",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tutorials/math/number-theory/sieve-of-eratosthenes.md",tags:[],version:"current",frontMatter:{title:"Sieve of Eratosthenes",description:"Sieve of Eratosthenes is a way of finding all prime numbers up to N (inclusive).",hide_table_of_contents:!0,keywords:["leetcode","tutorial","sieve of eratosthenes","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Binary Exponentiation",permalink:"/leetcode-the-hard-way/tutorials/math/number-theory/binary-exponentiation"}},u={},h=[{value:"C++ Implementation",id:"c-implementation",level:3}],f=[{problemName:"0204 - Count Primes",difficulty:"Medium",LeetCodeLink:"https://leetcode.com/problems/count-primes/",SolutionLink:"../../../solutions/0200-0299/count-primes"}],d={toc:h,suggestedProblems:f};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{names:"@wingkwong",mdxType:"TutorialAuthors"}),(0,i.kt)("p",null,"Sieve of Eratosthenes is a way of finding all prime numbers up to ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"n")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," (inclusive)."),(0,i.kt)("p",null,"First we mark all integers as true except 0 and 1. Then starting from 2, we mark out all multiples of 2 that are bigger than itself because they are composite. The next integer that is not marked out is 3 and it is prime. We mark out all multiples of 3 that are bigger than itself. Similarly, we search for the next integer ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"k")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))," that is not marked out and is prime, then mark out all multiples of ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"k")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"))))),"."),(0,i.kt)("h3",{id:"c-implementation"},"C++ Implementation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'vector<bool> sieveOfEratosthenes(const int n) {\n  assert(n >= 2 && "N must be greater or equal to 2");\n  vector<bool> isPrime(n + 1, true);\n  isPrime[0] = isPrime[1] = false;\n  for (int i = 2; i * i <= n; i++) {\n    if (isPrime[i]) {\n      for (int j = i * i; j <= n; j += i) {\n        isPrime[j] = false;\n      }\n    }\n  }\n  return isPrime;\n}\n')),(0,i.kt)(o.Z,{title:"Suggested Problems",data:f,mdxType:"Table"}))}k.isMDXComponent=!0},11182:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294);function r(e){var t=e.names;if(!t)return null;var n=t.split(",");return a.createElement("div",{className:"tag-wrapper"},n.map((function(e,t){return a.createElement("span",{key:t,className:"topic-tag"},e)})))}function i(e){var t=e.title,n=e.collectionLink,i=e.isSorted,s=void 0===i||i,o=e.data,l=o.some((function(e){return e.tags})),m={Easy:0,Medium:1,Hard:2},p=(s?o.sort((function(e,t){return m[e.difficulty]-m[t.difficulty]})):o).map((function(e,t){return a.createElement("tr",{key:t},a.createElement("td",null,a.createElement("a",{href:e.leetCodeLink,target:"_blank"},e.problemName)),a.createElement("td",null,e.difficulty),a.createElement("td",null,e.solutionLink&&a.createElement("a",{href:e.solutionLink,target:"_blank"},"View Solutions")),l&&a.createElement("td",null,a.createElement(r,{names:e.tags})))}));return a.createElement(a.Fragment,null,a.createElement("h3",null,t),n&&a.createElement("h4",null,"Start Practicing: ",a.createElement("a",{href:n,target:"_blank"},n)),a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Problem Name"),a.createElement("th",null,"Difficulty"),a.createElement("th",null,"Solution Link"),l&&a.createElement("th",null,"Topic"))),a.createElement("tbody",null,p)))}},78735:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.names.split(",");return a.createElement("div",{className:"tutorial-author-wrapper"},"This tutorial is written by",t.map((function(e,t){return a.createElement("span",{key:t,className:"author-tag"},e)})))}}}]);