"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[51868],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=s(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},14840:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var i,r=n(87462),a=n(63366),o=(n(67294),n(3905)),p=["components"],l={description:"Author: @heiheihang | https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/"},s="1475 - Final Prices With a Special Discount in a Shop (Easy)",c={unversionedId:"1400-1499/final-prices-with-a-special-discount-in-a-shop-easy",id:"1400-1499/final-prices-with-a-special-discount-in-a-shop-easy",title:"1475 - Final Prices With a Special Discount in a Shop (Easy)",description:"Author: @heiheihang | https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/",source:"@site/solutions/1400-1499/1475-final-prices-with-a-special-discount-in-a-shop-easy.md",sourceDirName:"1400-1499",slug:"/1400-1499/final-prices-with-a-special-discount-in-a-shop-easy",permalink:"/leetcode-the-hard-way/solutions/1400-1499/final-prices-with-a-special-discount-in-a-shop-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1400-1499/1475-final-prices-with-a-special-discount-in-a-shop-easy.md",tags:[],version:"current",sidebarPosition:1475,frontMatter:{description:"Author: @heiheihang | https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/"},sidebar:"tutorialSidebar",previous:{title:"1457 - Pseudo-Palindromic Paths in a Binary Tree (Medium)",permalink:"/leetcode-the-hard-way/solutions/1400-1499/pseudo-palindromic-paths-in-a-binary-tree-medium"},next:{title:"1480 - Running Sum of 1d Array (Easy)",permalink:"/leetcode-the-hard-way/solutions/1400-1499/running-sum-of-1d-array-easy"}},u={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Stack",id:"approach-1-stack",level:2}],d=(i="SolutionAuthor",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),m={toc:h};function f(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1475---final-prices-with-a-special-discount-in-a-shop-easy"},"1475 - Final Prices With a Special Discount in a Shop (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/"},"https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given the array ",(0,o.kt)("inlineCode",{parentName:"p"},"prices")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"prices[i]")," is the price of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ith")," item in a shop. There is a special discount for items in the shop, if you buy the ",(0,o.kt)("inlineCode",{parentName:"p"},"ith")," item, then you will receive a discount equivalent to ",(0,o.kt)("inlineCode",{parentName:"p"},"prices[j]")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"j")," is the ",(0,o.kt)("strong",{parentName:"p"},"minimum")," index such that ",(0,o.kt)("inlineCode",{parentName:"p"},"j > i")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"prices[j] <= prices[i]"),", otherwise, you will not receive any discount at all."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Return an array where the ",(0,o.kt)("inlineCode",{parentName:"em"},"ith")," element is the final price you will pay for the ",(0,o.kt)("inlineCode",{parentName:"em"},"ith")," item of the shop considering the special discount.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: prices = [8,4,6,2,3]\nOutput: [4,2,4,2,3]\nExplanation: \nFor item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4. \nFor item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2. \nFor item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4. \nFor items 3 and 4 you will not receive any discount at all.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: prices = [1,2,3,4,5]\nOutput: [1,2,3,4,5]\nExplanation: In this case, for all items, you will not receive any discount at all.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: prices = [10,1,1,6]\nOutput: [9,0,1,6]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= prices.length <= 500")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= prices[i] <= 10^3"))),(0,o.kt)("h2",{id:"approach-1-stack"},"Approach 1: Stack"),(0,o.kt)("p",null,"We first initialize the ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," list to be a copy of ",(0,o.kt)("inlineCode",{parentName:"p"},"prices"),". The reason of choosing to copy ",(0,o.kt)("inlineCode",{parentName:"p"},"prices")," is that it is convenient to not change anything if an item does not have a discount."),(0,o.kt)("p",null,"Then we initalize a stack and iterate ",(0,o.kt)("inlineCode",{parentName:"p"},"prices"),". If the last element of the stack if greater than or equal to the ",(0,o.kt)("inlineCode",{parentName:"p"},"current_price")," , we have found a discount for the last element of the stack. We calculate the discounted price, and put it in the result array (its index is stored as the second element). We ",(0,o.kt)("inlineCode",{parentName:"p"},"pop")," that element from the ",(0,o.kt)("inlineCode",{parentName:"p"},"stack"),"."),(0,o.kt)("p",null,"We then add the new item to the stack with its value and its index."),(0,o.kt)(d,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def finalPrices(self, prices: List[int]) -> List[int]:\n        \n        #initialize the result list to be a copy of prices\n        result = prices.copy()\n        \n        #initialize stack\n        stack = []\n        \n        #iterate prices\n        for i in range(len(prices)):\n            \n            #declare current_price\n            current_price = prices[i]\n            \n            #identify the prices that have not found a discount yet\n            while(stack and stack[-1][0] >= current_price):\n                \n                #get the item's index\n                item_index = stack[-1][1]\n                \n                #set its discounted price\n                result[item_index] = stack[-1][0] - current_price\n                \n                #remove the item as it has found a discount\n                stack.pop()\n            \n            #add the current item to the stack\n            stack.append([current_price, i])\n        \n        #return result\n        return result\n")))}f.isMDXComponent=!0}}]);