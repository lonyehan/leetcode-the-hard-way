"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1298],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2646:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(8539),l=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/check-if-n-and-its-double-exist/"},u="1346 - Check If N and Its Double Exist (Easy)",c={unversionedId:"1300-1399/check-if-n-and-its-double-exist-easy",id:"1300-1399/check-if-n-and-its-double-exist-easy",title:"1346 - Check If N and Its Double Exist (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/check-if-n-and-its-double-exist/",source:"@site/solutions/1300-1399/1346-check-if-n-and-its-double-exist-easy.md",sourceDirName:"1300-1399",slug:"/1300-1399/check-if-n-and-its-double-exist-easy",permalink:"/leetcode-the-hard-way/solutions/1300-1399/check-if-n-and-its-double-exist-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/1300-1399/1346-check-if-n-and-its-double-exist-easy.md",tags:[],version:"current",sidebarPosition:1346,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/check-if-n-and-its-double-exist/"},sidebar:"tutorialSidebar",previous:{title:"1337 - The K Weakest Rows in a Matrix (Easy)",permalink:"/leetcode-the-hard-way/solutions/1300-1399/the-k-weakest-rows-in-a-matrix-easy"},next:{title:"1347 - Minimum Number of Steps to Make Two Strings Anagram (Easy)",permalink:"/leetcode-the-hard-way/solutions/1300-1399/minimum-number-of-steps-to-make-two-strings-anagram-medium"}},p={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2}],d={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1346---check-if-n-and-its-double-exist-easy"},"1346 - Check If N and Its Double Exist (Easy)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/check-if-n-and-its-double-exist/"},"https://leetcode.com/problems/check-if-n-and-its-double-exist/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given an array ",(0,i.kt)("inlineCode",{parentName:"p"},"arr")," of integers, check if there exists two integers ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"M")," such that ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," is the double of ",(0,i.kt)("inlineCode",{parentName:"p"},"M")," ( i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"N = 2 * M"),")."),(0,i.kt)("p",null,"More formally check if there exists two indices ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"j")," such that :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"i != j")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= i, j < arr.length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"arr[i] == 2 * arr[j]"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: arr = [10,2,5,3]\nOutput: true\nExplanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: arr = [7,1,14,11]\nOutput: true\nExplanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: arr = [3,1,7,11]\nOutput: false\nExplanation: In this case does not exist N and M, such that N = 2 * M.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2 <= arr.length <= 500")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-10^3 <= arr[i] <= 10^3"))),(0,i.kt)("h2",{id:"approach-1-binary-search"},"Approach 1: Binary Search"),(0,i.kt)("p",null,"Prerequisite: ",(0,i.kt)("a",{parentName:"p",href:"../../tutorials/basic-topics/binary-search"},"Binary Search")),(0,i.kt)("p",null,"First we sort the input, and we iterate each element and look for its double using binary search. For the binary search function, we can use the same solution as ",(0,i.kt)("a",{parentName:"p",href:"../0700-0799/binary-search-easy"},"0704 - Binary Search (Easy)"),"."),(0,i.kt)(o.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    // 0704 - Binary Search (Easy)\n    int search(vector<int>& nums, int target) {\n        // init possible boundary\n        int n = nums.size(), l = 0, r = n - 1;\n        while (l < r) {\n            // get the middle one\n            // for even number of elements, take the lower one\n            int m = l + (r - l) / 2;\n            // exclude m\n            if (target > nums[m]) l = m + 1;\n            // include m\n            else r = m;\n        }\n        return nums[l] == target ? l : -1;\n    }\n    \n    bool checkIfExist(vector<int>& arr) {\n        sort(arr.begin(), arr.end());\n        for (int i = 0; i < arr.size(); i++) {\n            int res = search(arr, arr[i] * 2);\n            if (res != -1 && res != i) {\n                return true;\n            }\n        }\n        return false;\n    }\n};\n")))}h.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",t))}}}]);