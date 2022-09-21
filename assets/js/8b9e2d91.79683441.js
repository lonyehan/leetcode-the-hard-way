"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[28515],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2413:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],i={description:"Author: @TBC | https://leetcode.com/problems/sort-list/"},p="0148 - Sort List (Medium)",s={unversionedId:"0100-0199/sort-list-medium",id:"0100-0199/sort-list-medium",title:"0148 - Sort List (Medium)",description:"Author: @TBC | https://leetcode.com/problems/sort-list/",source:"@site/solutions/0100-0199/0148-sort-list-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/sort-list-medium",permalink:"/leetcode-the-hard-way/solutions/0100-0199/sort-list-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0148-sort-list-medium.md",tags:[],version:"current",sidebarPosition:148,frontMatter:{description:"Author: @TBC | https://leetcode.com/problems/sort-list/"},sidebar:"tutorialSidebar",previous:{title:"0144 - Binary Tree Preorder Traversal (Easy)",permalink:"/leetcode-the-hard-way/solutions/0100-0199/binary-tree-preorder-traversal-easy"},next:{title:"0155 - Min Stack (Easy)",permalink:"/leetcode-the-hard-way/solutions/0100-0199/min-stack-easy"}},u={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: TBC",id:"approach-1-tbc",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0148---sort-list-medium"},"0148 - Sort List (Medium)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sort-list/"},"https://leetcode.com/problems/sort-list/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given the ",(0,a.kt)("inlineCode",{parentName:"p"},"head")," of a linked list, return ",(0,a.kt)("em",{parentName:"p"},"the list after sorting it in ",(0,a.kt)("strong",{parentName:"em"},"ascending order")),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: head = [4,2,1,3]\nOutput: [1,2,3,4]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/09/14/sort_list_2.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: head = [-1,5,3,4,0]\nOutput: [-1,0,3,4,5]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: head = []\nOutput: []\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of nodes in the list is in the range ",(0,a.kt)("inlineCode",{parentName:"li"},"[0, 5 * 10^4]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-10^5 <= Node.val <= 10^5"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Follow up:")," Can you sort the linked list in ",(0,a.kt)("inlineCode",{parentName:"p"},"O(n logn)")," time and ",(0,a.kt)("inlineCode",{parentName:"p"},"O(1)")," memory (i.e. constant space)?"),(0,a.kt)("h2",{id:"approach-1-tbc"},"Approach 1: TBC"))}d.isMDXComponent=!0}}]);