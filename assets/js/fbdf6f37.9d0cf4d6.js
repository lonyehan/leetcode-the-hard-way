"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[92310],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10151:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r,o=n(87462),i=n(63366),a=(n(67294),n(3905)),s=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/find-closest-number-to-zero/"},u="2239 - Find Closest Number to Zero (Easy)",p={unversionedId:"2200-2299/find-closest-number-to-zero-easy",id:"2200-2299/find-closest-number-to-zero-easy",title:"2239 - Find Closest Number to Zero (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/find-closest-number-to-zero/",source:"@site/solutions/2200-2299/2239-find-closest-number-to-zero-easy.md",sourceDirName:"2200-2299",slug:"/2200-2299/find-closest-number-to-zero-easy",permalink:"/leetcode-the-hard-way/solutions/2200-2299/find-closest-number-to-zero-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2239-find-closest-number-to-zero-easy.md",tags:[],version:"current",sidebarPosition:2239,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-closest-number-to-zero/"},sidebar:"tutorialSidebar",previous:{title:"2237 - Count Positions on Street With Required Brightness (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/count-positions-on-street-with-required-brightness-medium"},next:{title:"2240 - Number of Ways to Buy Pens and Pencils (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/number-of-ways-to-buy-pens-and-pencils-medium"}},c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1:",id:"approach-1",level:2}],d=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),f={toc:m};function b(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2239---find-closest-number-to-zero-easy"},"2239 - Find Closest Number to Zero (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-closest-number-to-zero/"},"https://leetcode.com/problems/find-closest-number-to-zero/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given an integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," of size ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),", return ",(0,a.kt)("em",{parentName:"p"},"the number with the value ",(0,a.kt)("strong",{parentName:"em"},"closest")," to")," ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," ",(0,a.kt)("em",{parentName:"p"},"in")," ",(0,a.kt)("inlineCode",{parentName:"p"},"nums"),". If there are multiple answers, return ",(0,a.kt)("em",{parentName:"p"},"the number with the ",(0,a.kt)("strong",{parentName:"em"},"largest")," value"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [-4,-2,1,4,8]\nOutput: 1\nExplanation:\nThe distance from -4 to 0 is |-4| = 4.\nThe distance from -2 to 0 is |-2| = 2.\nThe distance from 1 to 0 is |1| = 1.\nThe distance from 4 to 0 is |4| = 4.\nThe distance from 8 to 0 is |8| = 8.\nThus, the closest number to 0 in the array is 1.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [2,-1,1]\nOutput: 1\nExplanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= n <= 1000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-105 <= nums[i] <= 10^5"))),(0,a.kt)("h2",{id:"approach-1"},"Approach 1:"),(0,a.kt)("p",null,"If we sort the input and check if the absolute value is minimal, the answer would be found in the last round. However, it is not necessary to sort it here. We just need to check if the number is greater that answer or not."),(0,a.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int findClosestNumber(vector<int>& nums) {\n        int ans = INT_MAX, mi = INT_MAX;\n        for (auto x : nums) {\n            int d = abs(x);\n            if (d < mi || (d == mi && x > ans)) {\n                mi = d;\n                ans = x;\n            }\n        }\n        return ans;\n    }\n};\n")))}b.isMDXComponent=!0}}]);