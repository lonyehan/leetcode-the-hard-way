"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[45520],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return N}});var n=t(67294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,r=a.originalType,l=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),u=i(t),N=m,k=u["".concat(l,".").concat(N)]||u[N]||c[N]||r;return t?n.createElement(k,s(s({ref:e},o),{},{components:t})):n.createElement(k,s({ref:e},o))}));function N(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var r=t.length,s=new Array(r);s[0]=u;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p.mdxType="string"==typeof a?a:m,s[1]=p;for(var i=2;i<r;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3470:function(a,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u}});var n,m=t(87462),r=t(63366),s=(t(67294),t(3905)),p=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/"},i="1491 - Average Salary Excluding the Minimum and Maximum Salary (Easy)",o={unversionedId:"1400-1499/average-salary-excluding-the-minimum-and-maximum-salary-easy",id:"1400-1499/average-salary-excluding-the-minimum-and-maximum-salary-easy",title:"1491 - Average Salary Excluding the Minimum and Maximum Salary (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/",source:"@site/solutions/1400-1499/1491-average-salary-excluding-the-minimum-and-maximum-salary-easy.md",sourceDirName:"1400-1499",slug:"/1400-1499/average-salary-excluding-the-minimum-and-maximum-salary-easy",permalink:"/leetcode-the-hard-way/solutions/1400-1499/average-salary-excluding-the-minimum-and-maximum-salary-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1400-1499/1491-average-salary-excluding-the-minimum-and-maximum-salary-easy.md",tags:[],version:"current",sidebarPosition:1491,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/"},sidebar:"tutorialSidebar",previous:{title:"1480 - Running Sum of 1d Array (Easy)",permalink:"/leetcode-the-hard-way/solutions/1400-1499/running-sum-of-1d-array-easy"},next:{title:"1494 - Parallel Courses II (Hard)",permalink:"/leetcode-the-hard-way/solutions/1400-1499/parallel-courses-ii-hard"}},c={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: One Pass",id:"approach-1-one-pass",level:2}],N=(n="SolutionAuthor",function(a){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",a)}),k={toc:u};function h(a){var e=a.components,t=(0,r.Z)(a,p);return(0,s.kt)("wrapper",(0,m.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"1491---average-salary-excluding-the-minimum-and-maximum-salary-easy"},"1491 - Average Salary Excluding the Minimum and Maximum Salary (Easy)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/"},"https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"You are given an array of ",(0,s.kt)("strong",{parentName:"p"},"unique")," integers ",(0,s.kt)("inlineCode",{parentName:"p"},"salary")," where ",(0,s.kt)("inlineCode",{parentName:"p"},"salary[i]")," is the salary of the ",(0,s.kt)("inlineCode",{parentName:"p"},"ith")," employee."),(0,s.kt)("p",null,"Return ",(0,s.kt)("em",{parentName:"p"},"the average salary of employees excluding the minimum and maximum salary"),". Answers within ",(0,s.kt)("inlineCode",{parentName:"p"},"10-5")," of the actual answer will be accepted."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: salary = [4000,3000,1000,2000]\nOutput: 2500.00000\nExplanation: Minimum salary and maximum salary are 1000 and 4000 respectively.\nAverage salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: salary = [1000,2000,3000]\nOutput: 2000.00000\nExplanation: Minimum salary and maximum salary are 1000 and 3000 respectively.\nAverage salary excluding minimum and maximum salary is (2000) / 1 = 2000\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"3 <= salary.length <= 100")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1000 <= salary[i] <= 10^6")),(0,s.kt)("li",{parentName:"ul"},"All the integers of ",(0,s.kt)("inlineCode",{parentName:"li"},"salary")," are ",(0,s.kt)("strong",{parentName:"li"},"unique"),".")),(0,s.kt)("h2",{id:"approach-1-one-pass"},"Approach 1: One Pass"),(0,s.kt)("p",null,"We iterate ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"y")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"salary")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"ry")))))," and calculate the total sum ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sum")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"))))),", the minimum value ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"i")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"mi")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"mi")))))," and the maximum value ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"mx")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),". The average salary of employees excluding the minimum and maximum salary would be ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sum - mi - mx")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"mi"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),". Since we exclude two items, we just need to divide by ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"len(salary) - 2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"ry"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"))))),"."),(0,s.kt)(N,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"func average(salary []int) float64 {\n    sum, n := 0, len(salary)\n    mi, mx := 100005, 0\n    for _, x := range salary {\n        // calculate the total sum\n        sum += x\n        // find the minimum value\n        if x < mi { mi = x }\n        // find the maximum value\n        if x > mx { mx = x }\n    }\n    // exclude mi & mx and get the avg \n    return float64(sum - mi - mx) / float64(n - 2)\n}\n")),(0,s.kt)(N,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rs"},"use std::cmp;\n\nimpl Solution {\n    pub fn average(salary: Vec<i32>) -> f64 {\n        let mut sum = 0;\n        let mut mx = 0;\n        let mut mi = 100005;\n        let n = salary.len() as f64;\n        for x in salary {\n            sum += x;\n            mx = cmp::max(mx, x);\n            mi = cmp::min(mi, x);\n        }\n        return ((sum - mx - mi) as f64 / (n - 2.0)); \n    }\n}\n")))}h.isMDXComponent=!0}}]);