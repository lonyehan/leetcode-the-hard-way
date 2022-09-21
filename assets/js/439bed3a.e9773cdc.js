"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[14232],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,m=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),k=o(a),u=r,d=k["".concat(p,".").concat(u)]||k[u]||c[u]||m;return a?n.createElement(d,s(s({ref:t},l),{},{components:a})):n.createElement(d,s({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=a.length,s=new Array(m);s[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var o=2;o<m;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},23637:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return N},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return k}});var n,r=a(87462),m=a(63366),s=(a(67294),a(3905)),i=["components"],p={description:"Author: @DoubleSpicy | https://leetcode.com/problems/remove-k-digits/"},o="0402 - Remove K Digits (Medium)",l={unversionedId:"0400-0499/remove-k-digits-medium",id:"0400-0499/remove-k-digits-medium",title:"0402 - Remove K Digits (Medium)",description:"Author: @DoubleSpicy | https://leetcode.com/problems/remove-k-digits/",source:"@site/solutions/0400-0499/0402-remove-k-digits-medium.md",sourceDirName:"0400-0499",slug:"/0400-0499/remove-k-digits-medium",permalink:"/leetcode-the-hard-way/solutions/0400-0499/remove-k-digits-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0402-remove-k-digits-medium.md",tags:[],version:"current",sidebarPosition:402,frontMatter:{description:"Author: @DoubleSpicy | https://leetcode.com/problems/remove-k-digits/"},sidebar:"tutorialSidebar",previous:{title:"0400 - 0499",permalink:"/leetcode-the-hard-way/solutions/category/0400---0499"},next:{title:"0404 - Sum of Left Leaves (Easy)",permalink:"/leetcode-the-hard-way/solutions/0400-0499/sum-of-left-leaves-easy"}},c={},k=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Monotonic Stack",id:"approach-1-monotonic-stack",level:2}],u=(n="SolutionAuthor",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),d={toc:k};function N(e){var t=e.components,a=(0,m.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0402---remove-k-digits-medium"},"0402 - Remove K Digits (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/remove-k-digits/"},"https://leetcode.com/problems/remove-k-digits/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Given string num representing a non-negative integer ",(0,s.kt)("inlineCode",{parentName:"p"},"num"),", and an integer ",(0,s.kt)("inlineCode",{parentName:"p"},"k"),", return ",(0,s.kt)("em",{parentName:"p"},"the smallest possible integer after removing")," ",(0,s.kt)("inlineCode",{parentName:"p"},"k")," ",(0,s.kt)("em",{parentName:"p"},"digits from")," ",(0,s.kt)("inlineCode",{parentName:"p"},"num"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: num = "1432219", k = 3\nOutput: "1219"\nExplanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: num = "10200", k = 1\nOutput: "200"\nExplanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: num = "10", k = 2\nOutput: "0"\nExplanation: Remove all the digits from the number and it is left with nothing which is 0.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= k <= num.length <= 10^5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"num")," consists of only digits."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"num")," does not have any leading zeros except for the zero itself.")),(0,s.kt)("h2",{id:"approach-1-monotonic-stack"},"Approach 1: Monotonic Stack"),(0,s.kt)("p",null,"Only a (local) monotonically increasing stack is allowed. i.e. ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"\u2265"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"num[i] \\geq num[j]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2265"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," for any ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow"},">"),(0,s.kt)("mi",{parentName:"mrow"},"j")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i > j")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6986em",verticalAlign:"-0.0391em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},">"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"))))),"."),(0,s.kt)("p",null,"For example: ",(0,s.kt)("inlineCode",{parentName:"p"},"142"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"k = 1"),", smallest value possible is 12 because 12 is the smallest among 42, 12 and 14 (removing 1st, 2nd and 3rd digit respectively)."),(0,s.kt)("p",null,"Explanation: we only care for the local monotonicity because when we have a number split into two part, ab ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u21d2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\rArr")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.3669em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u21d2")))))," a, b, when each of digit inside a and b is monotonically increasing, ab is also smallest. This is true no matter is the input number ab itself is monotonic or not."),(0,s.kt)("p",null,"After that, if k > 0, i.e. some more digits need to be removed, we remove the trailing k digits. This is true because in such case the remaining digits must be monotonically increasing. Remove the least significant digits gives the smallest value."),(0,s.kt)("p",null,"The time and space complexity is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"N"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(N)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,s.kt)("p",null,"p.s. ",(0,s.kt)("inlineCode",{parentName:"p"},"vector<char>")," is used instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"stack<char>")," because we can get iterator ",(0,s.kt)("inlineCode",{parentName:"p"},"vector<char>::begin()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"vector<char>::end()")," while stack doesn't have iterators. One line conversion to string could be done by ",(0,s.kt)("inlineCode",{parentName:"p"},"string ansStr(ans.begin()+idx, ans.end());"),"."),(0,s.kt)(u,{name:"@DoubleSpicy",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    string removeKdigits(string num, int k) {\n        vector<char> ans = {num[0]};\n        // do the monotoically increasing thing\n        for (int i = 1; i < num.length(); i++){\n            while(k > 0 && ans.size() > 0 && num[i] < ans.back()){\n                ans.pop_back();\n                k--;\n            }\n            ans.push_back(num[i]);\n        }\n\n        // if there are still some more digits that need to be removed, \n        // remove k more trailing digits\n        while(k--){\n            ans.pop_back();\n        }\n\n        // remove leading zeroes\n        int idx = 0;\n        while(idx < ans.size()){\n            if (ans[idx] == '0'){\n                idx++;\n            }\n            else{\n                break;\n            }\n        }\n\n        string ansStr(ans.begin()+idx, ans.end());\n        \n        if (ansStr.length() == 0){\n          // if everything is popped, give it back a 0.\n          // e.g. 12, k = 2\n            ansStr += '0';\n        }\n        return ansStr;\n    }\n};\n")))}N.isMDXComponent=!0}}]);