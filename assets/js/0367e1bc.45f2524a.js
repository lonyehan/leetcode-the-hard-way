"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5066],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=a.createContext({}),l=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=i,h=u["".concat(m,".").concat(d)]||u[d]||p[d]||r;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},36370:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return m},metadata:function(){return c},toc:function(){return u}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=t(8539),s=["components"],m={description:"Author: @wingkwong | https://leetcode.com/problems/connecting-cities-with-minimum-cost/"},l="1135 - Connecting Cities With Minimum Cost (Medium)",c={unversionedId:"1100-1199/connecting-cities-with-minimum-cost-medium",id:"1100-1199/connecting-cities-with-minimum-cost-medium",title:"1135 - Connecting Cities With Minimum Cost (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/connecting-cities-with-minimum-cost/",source:"@site/solutions/1100-1199/1135-connecting-cities-with-minimum-cost-medium.md",sourceDirName:"1100-1199",slug:"/1100-1199/connecting-cities-with-minimum-cost-medium",permalink:"/leetcode-the-hard-way/solutions/1100-1199/connecting-cities-with-minimum-cost-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1100-1199/1135-connecting-cities-with-minimum-cost-medium.md",tags:[],version:"current",sidebarPosition:1135,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/connecting-cities-with-minimum-cost/"},sidebar:"tutorialSidebar",previous:{title:"1125 - Smallest Sufficient Team (Hard)",permalink:"/leetcode-the-hard-way/solutions/1100-1199/smallest-sufficient-team-hard"},next:{title:"1140 - Stone Game II (Medium)",permalink:"/leetcode-the-hard-way/solutions/1100-1199/stone-game-ii-medium"}},p={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: <strong>Kruskal&#39;s Algorithm</strong>",id:"approach-1-kruskals-algorithm",level:2}],d={toc:u};function h(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1135---connecting-cities-with-minimum-cost-medium"},"1135 - Connecting Cities With Minimum Cost (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/connecting-cities-with-minimum-cost/"},"https://leetcode.com/problems/connecting-cities-with-minimum-cost/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"There are ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," cities labeled from ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),". You are given the integer ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," and an array ",(0,r.kt)("inlineCode",{parentName:"p"},"connections")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"connections[i] = [xi, yi, costi]")," indicates that the cost of connecting city ",(0,r.kt)("inlineCode",{parentName:"p"},"xi")," and city ",(0,r.kt)("inlineCode",{parentName:"p"},"yi")," (bidirectional connection) is ",(0,r.kt)("inlineCode",{parentName:"p"},"costi"),"."),(0,r.kt)("p",null,"Return ",(0,r.kt)("em",{parentName:"p"},"the minimum ",(0,r.kt)("strong",{parentName:"em"},"cost")," to connect all the")," ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," ",(0,r.kt)("em",{parentName:"p"},"cities such that there is at least one path between each pair of cities"),". If it is impossible to connect all the ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," cities, return ",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),","),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"cost")," is the sum of the connections' costs used."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/04/20/1314_ex2.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: n = 3, connections = [[1,2,5],[1,3,6],[2,3,1]]\nOutput: 6\nExplanation: Choosing any 2 edges will connect all cities so we choose the minimum 2.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/04/20/1314_ex1.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: n = 4, connections = [[1,2,3],[3,4,4]]\nOutput: -1\nExplanation: There is no way to connect all cities even if all edges are used. \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= connections.length <= 10^4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connections[i].length == 3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= xi, yi <= n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"xi != yi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= costi <= 10^5"))),(0,r.kt)("h2",{id:"approach-1-kruskals-algorithm"},"Approach 1: ",(0,r.kt)("strong",{parentName:"h2"},"Kruskal's Algorithm")),(0,r.kt)("p",null,"If we treat it as a graph problem, it is actually same as finding Minimum Spanning Tree. Hence, we can use Kruskal's Algorithm with DSU to solve it."),(0,r.kt)("p",null,"In order to get the MST, we sort the edges based on the weights in an increasing order. Then we iterate them one by one, and greedily pick edges which does not result in cycle with the previous edges. At the end, we should have ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mn",{parentName:"mrow"},"1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"N - 1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"))))),"edges in MST. Otherwise, we return ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mn",{parentName:"mrow"},"1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"-1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"))))),"."),(0,r.kt)(o.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class dsu {\n public:\n  vector<int> root, rank;\n  int n;\n  int cnt;\n\n  dsu(int _n) : n(_n) {\n    root.resize(n);\n    rank.resize(n);\n    for(int i = 0; i < n; i++) {\n        root[i] = i;\n        rank[i] = 1;\n    }\n    cnt = n;\n  }\n\n  inline int getCount() { return cnt; }\n\n  inline int get(int x) { return (x == root[x] ? x : (root[x] = get(root[x]))); }\n\n  inline bool unite(int x, int y) {\n    x = get(x);\n    y = get(y);\n    if (x != y) {\n        if (rank[x] > rank[y]) {\n            root[y] = x;\n        } else if (rank[x] < rank[y]) {\n            root[x] = y;\n        } else {\n            root[y] = x;\n            rank[x] += 1;\n        }\n        cnt--;\n      return true;\n    }\n    return false;\n  }\n};\n\nclass Solution {\npublic:\n    int minimumCost(int n, vector<vector<int>>& connections) {\n        vector<array<int, 3>> edges;\n        for (auto x : connections) {\n            edges.push_back({x[2], x[0], x[1]});\n        }\n        sort(edges.begin(), edges.end());\n        dsu d(n + 1);\n        int ans = 0, cnt = 0;\n        for (auto x : edges) {\n            if (d.unite(x[1], x[2])) {\n                ans += x[0];\n                cnt += 1;\n            }\n        }\n        return cnt == n - 1 ? ans : -1;\n    }\n};\n")))}h.isMDXComponent=!0},8539:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(67294);function i(e){var n=e.name;return a.createElement("div",{className:"solution-author-wrapper"},a.createElement("span",null,"This solution is written by ",n))}}}]);