"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[34506],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return N}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),i=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},l=function(e){var a=i(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),k=i(t),N=r,u=k["".concat(o,".").concat(N)]||k[N]||c[N]||s;return t?n.createElement(u,p(p({ref:a},l),{},{components:t})):n.createElement(u,p({ref:a},l))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,p=new Array(s);p[0]=k;var m={};for(var o in a)hasOwnProperty.call(a,o)&&(m[o]=a[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,p[1]=m;for(var i=2;i<s;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},40974:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return k}});var n,r=t(87462),s=t(63366),p=(t(67294),t(3905)),m=["components"],o={description:"Author: @wingkwong | https://leetcode.com/problems/power-of-two/"},i="0231 - Power of Two (Easy)",l={unversionedId:"0200-0299/power-of-two-easy",id:"0200-0299/power-of-two-easy",title:"0231 - Power of Two (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/power-of-two/",source:"@site/solutions/0200-0299/0231-power-of-two-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/power-of-two-easy",permalink:"/leetcode-the-hard-way/solutions/0200-0299/power-of-two-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0231-power-of-two-easy.md",tags:[],version:"current",sidebarPosition:231,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/power-of-two/"},sidebar:"tutorialSidebar",previous:{title:"0228 - Summary Ranges (Easy)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/summary-ranges-easy"},next:{title:"0234 - Palindrome Linked List (Easy)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/palindrome-linked-list-easy"}},c={},k=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Bit Manipulation",id:"approach-1-bit-manipulation",level:2}],N=(n="SolutionAuthor",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",e)}),u={toc:k};function h(e){var a=e.components,t=(0,s.Z)(e,m);return(0,p.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"0231---power-of-two-easy"},"0231 - Power of Two (Easy)"),(0,p.kt)("h2",{id:"problem-link"},"Problem Link"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/power-of-two/"},"https://leetcode.com/problems/power-of-two/")),(0,p.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,p.kt)("p",null,"Given an integer ",(0,p.kt)("inlineCode",{parentName:"p"},"n"),", return ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"em"},"true")," if it is a power of two. Otherwise, return ",(0,p.kt)("inlineCode",{parentName:"em"},"false")),"."),(0,p.kt)("p",null,"An integer ",(0,p.kt)("inlineCode",{parentName:"p"},"n")," is a power of two, if there exists an integer ",(0,p.kt)("inlineCode",{parentName:"p"},"x")," such that ",(0,p.kt)("inlineCode",{parentName:"p"},"n == 2^x"),"."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example 1:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Input: n = 1\nOutput: true\nExplanation: 2^0 = 1\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example 2:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Input: n = 16\nOutput: true\nExplanation: 2^4 = 16\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example 3:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Input: n = 3\nOutput: false\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Constraints:")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"-2^31 <= n <= 2^31 - 1"))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Follow up:")," Could you solve it without loops/recursion?"),(0,p.kt)("h2",{id:"approach-1-bit-manipulation"},"Approach 1: Bit Manipulation"),(0,p.kt)("p",null,"It's obvious to see that the answer is ",(0,p.kt)("inlineCode",{parentName:"p"},"false")," if ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"n"),(0,p.kt)("mo",{parentName:"mrow"},"<"),(0,p.kt)("mo",{parentName:"mrow"},"="),(0,p.kt)("mn",{parentName:"mrow"},"0")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n <= 0")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,p.kt)("span",{parentName:"span",className:"mrel"},"<="),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"0"))))),". If ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"n")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," is positive, a power of two would only have ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mn",{parentName:"mrow"},"1")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"1")))))," bit set. We can use ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"n"),(0,p.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"&"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,p.kt)("mi",{parentName:"mrow"},"n"),(0,p.kt)("mo",{parentName:"mrow"},"\u2212"),(0,p.kt)("mn",{parentName:"mrow"},"1"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n \\& (n-1)")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,p.kt)("span",{parentName:"span",className:"mord"},"&"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"("),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,p.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"1"),(0,p.kt)("span",{parentName:"span",className:"mclose"},")")))))," which is a common trick to remove the rightmost set bit. If it's a power of 2, the only set bit would be removed, hence the result would be ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mn",{parentName:"mrow"},"0")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"0"))))),". Otherwise, even we remove the rightmost set bit, the value wont be ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mn",{parentName:"mrow"},"0")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"0"))))),"."),(0,p.kt)(N,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool isPowerOfTwo(int n) {\n        // 1. check if it is a positive number\n        // 2. check the value is 0 after removing the rightmost bit\n        return n > 0 && !(n & (n - 1));\n    }\n};\n")))}h.isMDXComponent=!0}}]);