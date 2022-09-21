"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[78288],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12171:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var r,a=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],p={description:"Author: @DoubleSpicy | https://leetcode.com/problems/add-binary/"},s="0067 - Add Binary (easy)",u={unversionedId:"0000-0099/add-binary-easy",id:"0000-0099/add-binary-easy",title:"0067 - Add Binary (easy)",description:"Author: @DoubleSpicy | https://leetcode.com/problems/add-binary/",source:"@site/solutions/0000-0099/0067-add-binary-easy.md",sourceDirName:"0000-0099",slug:"/0000-0099/add-binary-easy",permalink:"/leetcode-the-hard-way/solutions/0000-0099/add-binary-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0067-add-binary-easy.md",tags:[],version:"current",sidebarPosition:67,frontMatter:{description:"Author: @DoubleSpicy | https://leetcode.com/problems/add-binary/"},sidebar:"tutorialSidebar",previous:{title:"0062 - Unique Paths (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/unique-paths-medium"},next:{title:"0069 - Sqrt(x) (Easy)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/sqrt-x-easy"}},c={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Adding Digits One By One",id:"approach-1-adding-digits-one-by-one",level:2}],m=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),y={toc:d};function b(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0067---add-binary-easy"},"0067 - Add Binary (easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/add-binary/"},"https://leetcode.com/problems/add-binary/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given two binary strings ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"b"),", return their sum as a binary string."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: a = "11", b = "1"\nOutput: "100"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: a = "1010", b = "1011"\nOutput: "10101"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: num = "10", k = 2\nOutput: "0"\nExplanation: Remove all the digits from the number and it is left with nothing which is 0.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 <= a.length, b.length <= 104"),(0,o.kt)("li",{parentName:"ul"},"a and b consist only of '0' or '1' characters."),(0,o.kt)("li",{parentName:"ul"},"Each string does not contain leading zeros except for the zero itself.")),(0,o.kt)("h2",{id:"approach-1-adding-digits-one-by-one"},"Approach 1: Adding Digits One By One"),(0,o.kt)("p",null,"For each digit, start from least significant ones, calculate the sum of digits and the carry. If the value > 1 then carry to the next digit."),(0,o.kt)("p",null,"The annoying part of this problem is taking care about index out-of-bound."),(0,o.kt)(m,{name:"@DoubleSpicy",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    string addBinary(string a, string b) {\n        // preallocate a long string, no copying is needed in iteration.\n        string ans(max(a.size(), b.size()), '0'); \n        int i = a.size()-1, j = b.size()-1, k = ans.size()-1, carry = 0;\n        while(i >= 0 || j >= 0){\n            // if all digits are used up for one of the string, give 0 for that part.\n            int digit = (i >= 0 ? a[i] - '0': 0) + (j >= 0 ? b[j] - '0': 0) + carry;\n            ans[k] = (digit % 2) + '0';\n            carry = digit / 2;\n            i--;\n            j--;\n            k--;\n        }\n        if(carry){\n            return to_string(carry) + ans;\n        }\n        return ans;\n    }\n};\n")))}b.isMDXComponent=!0}}]);