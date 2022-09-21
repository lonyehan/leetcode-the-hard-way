"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[80566],{3905:function(a,e,t){t.d(e,{Zo:function(){return N},kt:function(){return c}});var s=t(67294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},m=Object.keys(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var i=s.createContext({}),l=function(a){var e=s.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},N=function(a){var e=l(a.components);return s.createElement(i.Provider,{value:e},a.children)},o={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},k=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,m=a.originalType,i=a.parentName,N=r(a,["components","mdxType","originalType","parentName"]),k=l(t),c=n,h=k["".concat(i,".").concat(c)]||k[c]||o[c]||m;return t?s.createElement(h,p(p({ref:e},N),{},{components:t})):s.createElement(h,p({ref:e},N))}));function c(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=t.length,p=new Array(m);p[0]=k;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=a,r.mdxType="string"==typeof a?a:n,p[1]=r;for(var l=2;l<m;l++)p[l]=t[l];return s.createElement.apply(null,p)}return s.createElement.apply(null,t)}k.displayName="MDXCreateElement"},11266:function(a,e,t){t.r(e),t.d(e,{assets:function(){return o},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return N},toc:function(){return k}});var s,n=t(87462),m=t(63366),p=(t(67294),t(3905)),r=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/continuous-subarray-sum/"},l="0523 - Continuous Subarray Sum (Medium)",N={unversionedId:"0500-0599/continuous-subarray-sum-medium",id:"0500-0599/continuous-subarray-sum-medium",title:"0523 - Continuous Subarray Sum (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/continuous-subarray-sum/",source:"@site/solutions/0500-0599/0523-continuous-subarray-sum-medium.md",sourceDirName:"0500-0599",slug:"/0500-0599/continuous-subarray-sum-medium",permalink:"/leetcode-the-hard-way/solutions/0500-0599/continuous-subarray-sum-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0500-0599/0523-continuous-subarray-sum-medium.md",tags:[],version:"current",sidebarPosition:523,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/continuous-subarray-sum/"},sidebar:"tutorialSidebar",previous:{title:"0520 - Detect Capital (Easy)",permalink:"/leetcode-the-hard-way/solutions/0500-0599/detect-capital-easy"},next:{title:"0525 - Contiguous Array (Medium)",permalink:"/leetcode-the-hard-way/solutions/0500-0599/contiguous-array-medium"}},o={},k=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash + Prefix Sum",id:"approach-1-hash--prefix-sum",level:2}],c=(s="SolutionAuthor",function(a){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",a)}),h={toc:k};function u(a){var e=a.components,t=(0,m.Z)(a,r);return(0,p.kt)("wrapper",(0,n.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"0523---continuous-subarray-sum-medium"},"0523 - Continuous Subarray Sum (Medium)"),(0,p.kt)("h2",{id:"problem-link"},"Problem Link"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/continuous-subarray-sum/"},"https://leetcode.com/problems/continuous-subarray-sum/")),(0,p.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,p.kt)("p",null,"Given an integer array ",(0,p.kt)("inlineCode",{parentName:"p"},"nums")," and an integer ",(0,p.kt)("inlineCode",{parentName:"p"},"k"),", return ",(0,p.kt)("inlineCode",{parentName:"p"},"true")," ",(0,p.kt)("em",{parentName:"p"},"if")," ",(0,p.kt)("inlineCode",{parentName:"p"},"nums")," ",(0,p.kt)("em",{parentName:"p"},"has a continuous subarray of size ",(0,p.kt)("strong",{parentName:"em"},"at least two")," whose elements sum up to a multiple of")," ",(0,p.kt)("inlineCode",{parentName:"p"},"k"),(0,p.kt)("em",{parentName:"p"},", or")," ",(0,p.kt)("inlineCode",{parentName:"p"},"false")," ",(0,p.kt)("em",{parentName:"p"},"otherwise"),"."),(0,p.kt)("p",null,"An integer ",(0,p.kt)("inlineCode",{parentName:"p"},"x")," is a multiple of ",(0,p.kt)("inlineCode",{parentName:"p"},"k")," if there exists an integer ",(0,p.kt)("inlineCode",{parentName:"p"},"n")," such that ",(0,p.kt)("inlineCode",{parentName:"p"},"x = n * k"),". ",(0,p.kt)("inlineCode",{parentName:"p"},"0")," is ",(0,p.kt)("strong",{parentName:"p"},"always")," a multiple of ",(0,p.kt)("inlineCode",{parentName:"p"},"k"),"."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example 1:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Input: nums = [23,2,4,6,7], k = 6\nOutput: true\nExplanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example 2:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Input: nums = [23,2,6,4,7], k = 6\nOutput: true\nExplanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.\n42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example 3:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Input: nums = [23,2,6,4,7], k = 13\nOutput: false\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Constraints:")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"0 <= nums[i] <= 10^9")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"0 <= sum(nums[i]) <= 2^31 - 1")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"1 <= k <= 2^31 - 1"))),(0,p.kt)("h2",{id:"approach-1-hash--prefix-sum"},"Approach 1: Hash + Prefix Sum"),(0,p.kt)("p",null,"A continuous subarray sum can be represented as ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"s"),(0,p.kt)("mi",{parentName:"mrow"},"u"),(0,p.kt)("msub",{parentName:"mrow"},(0,p.kt)("mi",{parentName:"msub"},"m"),(0,p.kt)("mi",{parentName:"msub"},"j")),(0,p.kt)("mo",{parentName:"mrow"},"\u2212"),(0,p.kt)("mi",{parentName:"mrow"},"s"),(0,p.kt)("mi",{parentName:"mrow"},"u"),(0,p.kt)("msub",{parentName:"mrow"},(0,p.kt)("mi",{parentName:"msub"},"m"),(0,p.kt)("mi",{parentName:"msub"},"i"))),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sum_j - sum_i")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8694em",verticalAlign:"-0.2861em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,p.kt)("span",{parentName:"span"})))))),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,p.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,p.kt)("span",{parentName:"span"}))))))))))," where ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"s"),(0,p.kt)("mi",{parentName:"mrow"},"u"),(0,p.kt)("msub",{parentName:"mrow"},(0,p.kt)("mi",{parentName:"msub"},"m"),(0,p.kt)("mi",{parentName:"msub"},"j"))),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sum_j")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7167em",verticalAlign:"-0.2861em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,p.kt)("span",{parentName:"span"}))))))))))," is the prefix sum till index ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"j")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j")))))," and ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"s"),(0,p.kt)("mi",{parentName:"mrow"},"u"),(0,p.kt)("msub",{parentName:"mrow"},(0,p.kt)("mi",{parentName:"msub"},"m"),(0,p.kt)("mi",{parentName:"msub"},"i"))),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sum_i")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,p.kt)("span",{parentName:"span"}))))))))))," is the prefix sum till index ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"i")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"))))),". We are looking for the subarray sum which can be divisible by ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"k")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"))))),". That means ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,p.kt)("mi",{parentName:"mrow"},"s"),(0,p.kt)("mi",{parentName:"mrow"},"u"),(0,p.kt)("msub",{parentName:"mrow"},(0,p.kt)("mi",{parentName:"msub"},"m"),(0,p.kt)("mi",{parentName:"msub"},"j")),(0,p.kt)("mo",{parentName:"mrow"},"\u2212"),(0,p.kt)("mi",{parentName:"mrow"},"s"),(0,p.kt)("mi",{parentName:"mrow"},"u"),(0,p.kt)("msub",{parentName:"mrow"},(0,p.kt)("mi",{parentName:"msub"},"m"),(0,p.kt)("mi",{parentName:"msub"},"i")),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,p.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"%"),(0,p.kt)("mi",{parentName:"mrow"},"k"),(0,p.kt)("mo",{parentName:"mrow"},"="),(0,p.kt)("mo",{parentName:"mrow"},"="),(0,p.kt)("mn",{parentName:"mrow"},"0")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(sum_j - sum_i) \\% k == 0")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0361em",verticalAlign:"-0.2861em"}}),(0,p.kt)("span",{parentName:"span",className:"mopen"},"("),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,p.kt)("span",{parentName:"span"})))))),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,p.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,p.kt)("span",{parentName:"span"})))))),(0,p.kt)("span",{parentName:"span",className:"mclose"},")"),(0,p.kt)("span",{parentName:"span",className:"mord"},"%"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,p.kt)("span",{parentName:"span",className:"mrel"},"=="),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"0"))))),". We can further rewrite as ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"s"),(0,p.kt)("mi",{parentName:"mrow"},"u"),(0,p.kt)("msub",{parentName:"mrow"},(0,p.kt)("mi",{parentName:"msub"},"m"),(0,p.kt)("mi",{parentName:"msub"},"j")),(0,p.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"%"),(0,p.kt)("mi",{parentName:"mrow"},"k"),(0,p.kt)("mo",{parentName:"mrow"},"\u2212"),(0,p.kt)("mi",{parentName:"mrow"},"s"),(0,p.kt)("mi",{parentName:"mrow"},"u"),(0,p.kt)("msub",{parentName:"mrow"},(0,p.kt)("mi",{parentName:"msub"},"m"),(0,p.kt)("mi",{parentName:"msub"},"i")),(0,p.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"%"),(0,p.kt)("mi",{parentName:"mrow"},"k"),(0,p.kt)("mo",{parentName:"mrow"},"="),(0,p.kt)("mo",{parentName:"mrow"},"="),(0,p.kt)("mn",{parentName:"mrow"},"0")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sum_j \\% k - sum_i \\% k== 0")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0361em",verticalAlign:"-0.2861em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,p.kt)("span",{parentName:"span"})))))),(0,p.kt)("span",{parentName:"span",className:"mord"},"%"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,p.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9em",verticalAlign:"-0.15em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,p.kt)("span",{parentName:"span"})))))),(0,p.kt)("span",{parentName:"span",className:"mord"},"%"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,p.kt)("span",{parentName:"span",className:"mrel"},"=="),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"0")))))," and got ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"s"),(0,p.kt)("mi",{parentName:"mrow"},"u"),(0,p.kt)("msub",{parentName:"mrow"},(0,p.kt)("mi",{parentName:"msub"},"m"),(0,p.kt)("mi",{parentName:"msub"},"j")),(0,p.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"%"),(0,p.kt)("mi",{parentName:"mrow"},"k"),(0,p.kt)("mo",{parentName:"mrow"},"="),(0,p.kt)("mo",{parentName:"mrow"},"="),(0,p.kt)("mi",{parentName:"mrow"},"s"),(0,p.kt)("mi",{parentName:"mrow"},"u"),(0,p.kt)("msub",{parentName:"mrow"},(0,p.kt)("mi",{parentName:"msub"},"m"),(0,p.kt)("mi",{parentName:"msub"},"i")),(0,p.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"%"),(0,p.kt)("mi",{parentName:"mrow"},"k")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sum_j \\% k == sum_i \\% k")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0361em",verticalAlign:"-0.2861em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,p.kt)("span",{parentName:"span"})))))),(0,p.kt)("span",{parentName:"span",className:"mord"},"%"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,p.kt)("span",{parentName:"span",className:"mrel"},"=="),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9em",verticalAlign:"-0.15em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,p.kt)("span",{parentName:"span"})))))),(0,p.kt)("span",{parentName:"span",className:"mord"},"%"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"))))),"."),(0,p.kt)("p",null,"Therefore, we can calculate the prefix sum and store its remainder to a hash map. If we see the same remainder in the hash map, we need to make sure that the length is at least ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mn",{parentName:"mrow"},"2")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"2"))))),". If so, we can return true."),(0,p.kt)(c,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool checkSubarraySum(vector<int>& nums, int k) {\n        int n = nums.size();\n        if (n == 1) return false;\n        // hash map to store the remainders\n        unordered_map<int, int> mod {{0, -1}};\n        int sum = 0, remainder;\n        for (int i = 0; i < n; i++) {\n            // prefix sum\n            sum += nums[i];\n            // calculate the remainder\n            remainder = sum % k; \n            if (mod.count(remainder)) {\n                // if remainder exists in hash map\n                // check the length\n                if (i - mod[remainder] >= 2) return true;\n            } else {\n                // mark the current index to hash map\n                mod[remainder] = i;\n            }\n        }\n        return false;\n    }\n};\n")))}u.isMDXComponent=!0}}]);