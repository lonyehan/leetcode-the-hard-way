"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[24880],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),c=o(a),u=r,d=c["".concat(p,".").concat(u)]||c[u]||k[u]||s;return a?n.createElement(d,i(i({ref:t},l),{},{components:a})):n.createElement(d,i({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=c;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var o=2;o<s;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},46827:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var n,r=a(87462),s=a(63366),i=(a(67294),a(3905)),m=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/campus-bikes-ii/"},o="1066 - Campus Bikes II (Medium)",l={unversionedId:"1000-1099/campus-bikes-ii-medium",id:"1000-1099/campus-bikes-ii-medium",title:"1066 - Campus Bikes II (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/campus-bikes-ii/",source:"@site/solutions/1000-1099/1066-campus-bikes-ii-medium.md",sourceDirName:"1000-1099",slug:"/1000-1099/campus-bikes-ii-medium",permalink:"/leetcode-the-hard-way/solutions/1000-1099/campus-bikes-ii-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1000-1099/1066-campus-bikes-ii-medium.md",tags:[],version:"current",sidebarPosition:1066,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/campus-bikes-ii/"},sidebar:"tutorialSidebar",previous:{title:"1029 - Two City Scheduling (Medium)",permalink:"/leetcode-the-hard-way/solutions/1000-1099/two-city-scheduling-medium"},next:{title:"1100 - 1199",permalink:"/leetcode-the-hard-way/solutions/category/1100---1199"}},k={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1:  DP Bit Masking",id:"approach-1--dp-bit-masking",level:2}],u=(n="SolutionAuthor",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),d={toc:c};function h(e){var t=e.components,a=(0,s.Z)(e,m);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1066---campus-bikes-ii-medium"},"1066 - Campus Bikes II (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/campus-bikes-ii/"},"https://leetcode.com/problems/campus-bikes-ii/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"On a campus represented as a 2D grid, there are ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," workers and ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," bikes, with ",(0,i.kt)("inlineCode",{parentName:"p"},"n <= m"),". Each worker and bike is a 2D coordinate on this grid."),(0,i.kt)("p",null,"We assign one unique bike to each worker so that the sum of the ",(0,i.kt)("strong",{parentName:"p"},"Manhattan distances")," between each worker and their assigned bike is minimized."),(0,i.kt)("p",null,"Return ",(0,i.kt)("inlineCode",{parentName:"p"},"the minimum possible sum of Manhattan distances between each worker and their assigned bike"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Manhattan distance")," between two points ",(0,i.kt)("inlineCode",{parentName:"p"},"p1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"p2")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"Manhattan(p1, p2) = |p1.x - p2.x| + |p1.y - p2.y|"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/03/06/1261_example_1_v2.png",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: workers = [[0,0],[2,1]], bikes = [[1,2],[3,3]]\nOutput: 6\nExplanation: \nWe assign bike 0 to worker 0, bike 1 to worker 1. The Manhattan distance of both assignments is 3, so the output is 6.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/03/06/1261_example_2_v2.png",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: workers = [[0,0],[1,1],[2,0]], bikes = [[1,0],[2,2],[2,1]]\nOutput: 4\nExplanation: \nWe first assign bike 0 to worker 0, then assign bike 1 to worker 1 or worker 2, bike 2 to worker 2 or worker 1. Both assignments lead to sum of the Manhattan distances as 4.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: workers = [[0,0],[1,0],[2,0],[3,0],[4,0]], bikes = [[0,999],[1,999],[2,999],[3,999],[4,999]]\nOutput: 4995\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n == workers.length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"m == bikes.length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= n <= m <= 10")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"workers[i].length == 2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bikes[i].length == 2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= workers[i][0], workers[i][1], bikes[i][0], bikes[i][1] < 1000")),(0,i.kt)("li",{parentName:"ul"},"All the workers and the bikes locations are ",(0,i.kt)("strong",{parentName:"li"},"unique"),".")),(0,i.kt)("h2",{id:"approach-1--dp-bit-masking"},"Approach 1:  DP Bit Masking"),(0,i.kt)("p",null,"Iterate each mask from ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"0")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"0")))))," to ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"m")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"m")))))," where ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"m")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"m")))))," is the size of ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"b"),(0,i.kt)("mi",{parentName:"mrow"},"i"),(0,i.kt)("mi",{parentName:"mrow"},"k"),(0,i.kt)("mi",{parentName:"mrow"},"e"),(0,i.kt)("mi",{parentName:"mrow"},"s")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"bikes")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"bik"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"es"))))),". For each mask, we try to find each bike that is not in use and calculate the Manhattan distance and try the next ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"w"),(0,i.kt)("mi",{parentName:"mrow"},"o"),(0,i.kt)("mi",{parentName:"mrow"},"r"),(0,i.kt)("mi",{parentName:"mrow"},"k"),(0,i.kt)("mi",{parentName:"mrow"},"e"),(0,i.kt)("mi",{parentName:"mrow"},"r"),(0,i.kt)("mi",{parentName:"mrow"},"I"),(0,i.kt)("mi",{parentName:"mrow"},"d"),(0,i.kt)("mi",{parentName:"mrow"},"x")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"workerIdx")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"or"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),". We memorise the result to speed up the whole process."),(0,i.kt)(u,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> dp;\n    int n, m;\n    int dfs(vector<vector<int>>& workers, vector<vector<int>>& bikes, int workerIdx, int mask) {\n        // worker idx out of range\n        if (workerIdx >= n) return 0;\n        // calculated before, return immediately\n        if (dp[mask] != -1) return dp[mask];\n        // init res\n        int res = INT_MAX;\n        // iterate each mask\n        for (int bikeIdx = 0; bikeIdx < m; bikeIdx++) {\n            // this bike is not in use\n            if (!(mask & (1 << bikeIdx))) {\n                // calculate the Manhattan distance\n                int dist = abs(workers[workerIdx][0] - bikes[bikeIdx][0]) + abs(workers[workerIdx][1] - bikes[bikeIdx][1]);\n                res = min(res, dist + dfs(workers, bikes, workerIdx + 1, mask | (1 << bikeIdx)));\n            }\n        }\n        // memoize the smallest distance sum for this mask\n        return dp[mask] = res;\n    }\n    int assignBikes(vector<vector<int>>& workers, vector<vector<int>>& bikes) {\n        n = workers.size(), m = bikes.size();\n        dp = vector<int>(1 << m, -1);\n        return dfs(workers, bikes, 0, 0);\n    }\n};\n")),(0,i.kt)("p",null,"We can also write like this."),(0,i.kt)(u,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int assignBikes(vector<vector<int>>& workers, vector<vector<int>>& bikes) {\n        int n = workers.size(), m = bikes.size(), ans = 1e9;\n        vector<int> dp(1 << m, 1e9);\n        dp[0] = 0;\n        // iterate each mask\n        for (int mask = 0; mask < (1 << m); mask++) {\n            // worker idx\n            int workerIdx = __builtin_popcount(mask);\n            // all workers got the bikes\n            // update the answer\n            if (workerIdx >= n) {\n                ans = min(ans, dp[mask]);\n                continue;\n            }\n            // iterate each bike\n            for (int bikeIdx = 0; bikeIdx < m; bikeIdx++) {\n                // this bike is not in use\n                if (!(mask & (1 << bikeIdx))) {\n                    // calculate the Manhattan distance\n                    int dist = abs(workers[workerIdx][0] - bikes[bikeIdx][0]) + abs(workers[workerIdx][1] - bikes[bikeIdx][1]);\n                    // new mask = current mask + this bike\n                    int newMask = mask | (1 << bikeIdx);\n                    // update distance sum\n                    dp[newMask] = min(dp[newMask], dist + dp[mask]);\n                }\n            }\n        }\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0}}]);