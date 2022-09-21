"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[32362],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,y=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(y,o(o({ref:n},p),{},{components:t})):r.createElement(y,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},87401:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r,a=t(87462),i=t(63366),o=(t(67294),t(3905)),l=["components"],u={description:"Author: @wingkwong | https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/"},s="2176 - Count Equal and Divisible Pairs in an Array (Easy)",p={unversionedId:"2100-2199/count-equal-and-divisible-pairs-in-an-array-easy",id:"2100-2199/count-equal-and-divisible-pairs-in-an-array-easy",title:"2176 - Count Equal and Divisible Pairs in an Array (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/",source:"@site/solutions/2100-2199/2176-count-equal-and-divisible-pairs-in-an-array-easy.md",sourceDirName:"2100-2199",slug:"/2100-2199/count-equal-and-divisible-pairs-in-an-array-easy",permalink:"/leetcode-the-hard-way/solutions/2100-2199/count-equal-and-divisible-pairs-in-an-array-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2176-count-equal-and-divisible-pairs-in-an-array-easy.md",tags:[],version:"current",sidebarPosition:2176,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/"},sidebar:"tutorialSidebar",previous:{title:"2172 - Maximum AND Sum of Array (Hard)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/maximum-and-sum-of-array-hard"},next:{title:"2177 - Find Three Consecutive Integers That Sum to a Given Number (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/find-three-consecutive-integers-that-sum-to-a-given-number-medium"}},c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2}],d=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),y={toc:m};function b(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2176---count-equal-and-divisible-pairs-in-an-array-easy"},"2176 - Count Equal and Divisible Pairs in an Array (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/"},"https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given a ",(0,o.kt)("strong",{parentName:"p"},"0-indexed")," integer array ",(0,o.kt)("inlineCode",{parentName:"p"},"nums")," of length ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," and an integer ",(0,o.kt)("inlineCode",{parentName:"p"},"k"),", return ",(0,o.kt)("em",{parentName:"p"},"the ",(0,o.kt)("strong",{parentName:"em"},"number of pairs"))," ",(0,o.kt)("inlineCode",{parentName:"p"},"(i, j)")," ",(0,o.kt)("em",{parentName:"p"},"where")," ",(0,o.kt)("inlineCode",{parentName:"p"},"0 <= i < j < n"),", ",(0,o.kt)("em",{parentName:"p"},"such that")," ",(0,o.kt)("inlineCode",{parentName:"p"},"nums[i] == nums[j]")," ",(0,o.kt)("em",{parentName:"p"},"and")," ",(0,o.kt)("inlineCode",{parentName:"p"},"(i * j)")," ",(0,o.kt)("em",{parentName:"p"},"is divisible by")," ",(0,o.kt)("inlineCode",{parentName:"p"},"k"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [3,1,2,2,2,1,3], k = 2\nOutput: 4\nExplanation:\nThere are 4 pairs that meet all the requirements:\n- nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.\n- nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.\n- nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.\n- nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3,4], k = 1\nOutput: 0\nExplanation: Since no value in nums is repeated, there are no pairs (i,j) that meet all the requirements.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 100")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums[i], k <= 100"))),(0,o.kt)("h2",{id:"approach-1-brute-force"},"Approach 1: Brute Force"),(0,o.kt)("p",null,"Just do what it says."),(0,o.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int countPairs(vector<int>& nums, int k) {\n        int n = nums.size(), ans = 0;\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                ans += nums[i] == nums[j] && (i * j) % k == 0;\n            }\n        }\n        return ans;\n    }\n};\n")))}b.isMDXComponent=!0}}]);