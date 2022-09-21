"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[44832],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18844:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r,i=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/count-lattice-points-inside-a-circle/"},s="2249 - Count Lattice Points Inside a Circle (Medium)",p={unversionedId:"2200-2299/count-lattice-points-inside-a-circle-medium",id:"2200-2299/count-lattice-points-inside-a-circle-medium",title:"2249 - Count Lattice Points Inside a Circle (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/count-lattice-points-inside-a-circle/",source:"@site/solutions/2200-2299/2249-count-lattice-points-inside-a-circle-medium.md",sourceDirName:"2200-2299",slug:"/2200-2299/count-lattice-points-inside-a-circle-medium",permalink:"/leetcode-the-hard-way/solutions/2200-2299/count-lattice-points-inside-a-circle-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2249-count-lattice-points-inside-a-circle-medium.md",tags:[],version:"current",sidebarPosition:2249,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/count-lattice-points-inside-a-circle/"},sidebar:"tutorialSidebar",previous:{title:"2248 - Intersection of Multiple Arrays (Easy)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/intersection-of-multiple-arrays-easy"},next:{title:"2250 - Count Number of Rectangles Containing Each Point (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/count-number-of-rectangles-containing-each-point-medium"}},u={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2}],d=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),h={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2249---count-lattice-points-inside-a-circle-medium"},"2249 - Count Lattice Points Inside a Circle (Medium)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/count-lattice-points-inside-a-circle/"},"https://leetcode.com/problems/count-lattice-points-inside-a-circle/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given a 2D integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"circles")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"circles[i] = [xi, yi, ri]")," represents the center ",(0,a.kt)("inlineCode",{parentName:"p"},"(xi, yi)")," and radius ",(0,a.kt)("inlineCode",{parentName:"p"},"ri")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ith")," circle drawn on a grid, return ",(0,a.kt)("em",{parentName:"p"},"the ",(0,a.kt)("strong",{parentName:"em"},"number of lattice points")," that are present inside ",(0,a.kt)("strong",{parentName:"em"},"at least one")," circle"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"lattice point")," is a point with integer coordinates."),(0,a.kt)("li",{parentName:"ul"},"Points that lie ",(0,a.kt)("strong",{parentName:"li"},"on the circumference of a circle")," are also considered to be inside it.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/03/02/exa-11.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: circles = [[2,2,1]]\nOutput: 5\nExplanation:\nThe figure above shows the given circle.\nThe lattice points present inside the circle are (1, 2), (2, 1), (2, 2), (2, 3), and (3, 2) and are shown in green.\nOther points such as (1, 1) and (1, 3), which are shown in red, are not considered inside the circle.\nHence, the number of lattice points present inside at least one circle is 5.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/03/02/exa-22.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: circles = [[2,2,2],[3,4,1]]\nOutput: 16\nExplanation:\nThe figure above shows the given circles.\nThere are exactly 16 lattice points which are present inside at least one circle. \nSome of them are (0, 2), (2, 0), (2, 4), (3, 2), and (4, 4).\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= circles.length <= 200")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"circles[i].length == 3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= xi, yi <= 100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= ri <= min(xi, yi)"))),(0,a.kt)("h2",{id:"approach-1-brute-force"},"Approach 1: Brute Force"),(0,a.kt)("p",null,"Iterate each point, check if the distance between the center point and the target point is less than or equal to the radius. If so, that means the target point is within the circle."),(0,a.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int countLatticePoints(vector<vector<int>>& circles) {\n        int ans = 0, mxL = 200;\n        // iterate each possible points\n        for (int i = 0; i <= mxL; i++) {\n            for (int j = 0; j <= mxL; j++) {\n                // without & - it will give TLE\n                for (auto& circle : circles) {\n                    int x = circle[0], y = circle[1], r = circle[2];\n                    // distance formula\n                    if ( (x - i) * (x - i) + (y - j) * (y - j) <= r * r ) {\n                        ans += 1;\n                        // we only need to include once\n                        break;\n                    }\n                }\n            }\n        }\n        return ans;\n    }\n};\n")))}f.isMDXComponent=!0}}]);