"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[34963],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61989:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},suggestedProblems:function(){return h},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=n(78735),o=n(11182),l=["components"],c={title:"Queue & Stack",description:"Stack is the data structure The first item that comes in will be the first to go out.",keywords:["leetcode","tutorial","queue","stack","data structure"]},u=void 0,p={unversionedId:"basic-topics/queue-and-stack",id:"basic-topics/queue-and-stack",title:"Queue & Stack",description:"Stack is the data structure The first item that comes in will be the first to go out.",source:"@site/tutorials/basic-topics/queue-and-stack.md",sourceDirName:"basic-topics",slug:"/basic-topics/queue-and-stack",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/queue-and-stack",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/basic-topics/queue-and-stack.md",tags:[],version:"current",frontMatter:{title:"Queue & Stack",description:"Stack is the data structure The first item that comes in will be the first to go out.",keywords:["leetcode","tutorial","queue","stack","data structure"]},sidebar:"tutorialSidebar",previous:{title:"Prefix Sum",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/prefix-sum"},next:{title:"Sliding Window",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/sliding-window"}},m={},d=[{value:"Stack",id:"stack",level:3},{value:"Queue",id:"queue",level:3}],h=[{problemName:"0155 - Min Stack",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/min-stack/",solutionLink:"../../solutions/0100-0199/min-stack-easy"},{problemName:"0496 - Next Greater Element I",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/next-greater-element-i/",solutionLink:"../../solutions/0400-0499/next-greater-element-i-easy"},{problemName:"1475 - Final Prices With a Special Discount in a Shop",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/",solutionLink:"../../solutions/1400-1499/final-prices-with-a-special-discount-in-a-shop-easy"}],k={toc:d,suggestedProblems:h};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{names:"@heiheihang",mdxType:"TutorialAuthors"}),(0,i.kt)("h3",{id:"stack"},"Stack"),(0,i.kt)("p",null,"Stack is the data structure The first item that comes in will be the first to go out. Let's look at this question (",(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/valid-parentheses/"},"LeetCode Link"),")"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Given a string ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," containing just the characters ",(0,i.kt)("inlineCode",{parentName:"p"},"'('"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"')'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'{'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'}'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'['")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"']'"),", determine if the input string is valid."),(0,i.kt)("p",{parentName:"blockquote"},"An input string is valid if:"),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"Open brackets must be closed by the same type of brackets."),(0,i.kt)("li",{parentName:"ol"},"Open brackets must be closed in the correct order."))),(0,i.kt)("p",null,"To validate a string of parentheses is valid, we must have a corresponding opening bracket when we see a closing bracket. Lets look at some examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'valid_string_1 = "([])"\n')),(0,i.kt)("p",null,"We can process the string in the following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'#1st character from valid_string_1\nvalid_string_1_step_1 = ["("] \n')),(0,i.kt)("p",null,"We have the first character first. We do not need to do anything if it is an opening bracket."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'#2nd character from valid_string_1\nvalid_string_1_step_2 = ["(", "["] \n')),(0,i.kt)("p",null,"We have the second character now. Again, we do not need to do anything if it is an opening bracket."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'#3rd character from valid_string_1 \nvalid_string_1_step_3a = ["(", "[", "]"] \n')),(0,i.kt)("p",null,"Here, we see a matching pair ",(0,i.kt)("inlineCode",{parentName:"p"},'"["')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"]"'),", so we can cancel them out."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'#3rd character from valid_string_1 (removing valid pair)\nvalid_string_1_step_3b = ["("] \n')),(0,i.kt)("p",null,"We have removed the two last seen elements form the stack."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'#4th character from valid_string_1 (after removing 2nd and 3rd)\nvalid_string_1_step_4a = ["(", ")"] \n')),(0,i.kt)("p",null,"After adding the fourth character, we see a matching pair between the 1st character and the 4th character. We can remove it now."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"#4th character from valid_string_1 (after removing 1st and 4th)\nvalid_string_1_step_4a = [] \n")),(0,i.kt)("p",null,"With no more character to process and with an empty stack, we know that there are no remaining opening and closing brackets. Hence, we can validate this string."),(0,i.kt)("p",null,"Now let's look at a counter example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'invalid_string_1 = "[()}"\n')),(0,i.kt)("p",null,"Similar to the scenario above, we can skip the first two characters and have:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'invalid_string_1_step3a = ["[", "(", ")"]\n')),(0,i.kt)("p",null,"We see a matching pair in the 2nd character and the 3rd character, so we can remove them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'invalid_string_1_step3b = ["["]\n')),(0,i.kt)("p",null,"Now we look at the 4th character:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'invalid_string_1_step4 = ["[", "}"]\n')),(0,i.kt)("p",null,"We have a closing bracket, and it is not matching its corresponding opening bracket (",(0,i.kt)("inlineCode",{parentName:"p"},'"{"'),"), so we know that this string is invalid."),(0,i.kt)("p",null,"Are you able to code the solution out after looking at these two examples?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def isValid(self, s: str) -> bool:\n        \n        #we use a stack to keep track of brackets\n        stack = []\n        \n        #iterate the characters in the string\n        for c in s:\n        \n            #we store the character in the stack if it is an opening bracket\n            if(c == "(" or c == "[" or c == "{"):\n                stack.append(c)\n                \n            #we check if there is a matching opening bracket \n            #when we see a closing bracket\n            elif(c == ")"):\n                if(len(stack) == 0 or stack[-1] != "("):\n                    return False\n                else:\n                    stack.pop()\n                    \n            #we check if there is a matching opening bracket \n            #when we see a closing bracket\n            elif(c == "]"):\n                if(len(stack) == 0 or stack[-1] != "["):\n                    return False\n                else:\n                    stack.pop()\n                    \n            #we check if there is a matching opening bracket \n            #when we see a closing bracket\n            elif(c == "}"):\n                if(len(stack) == 0 or stack[-1] != "{"):\n                    return False\n                else:\n                    stack.pop()\n                    \n        #if the stack is not empty, there are some unmatched opening brackets\n        #this suggests it is not valid\n        if(len(stack) != 0):\n            return False\n        return True\n')),(0,i.kt)("h3",{id:"queue"},"Queue"),(0,i.kt)("p",null,"Queue is the data structure that is First-In-First-Out. The first person who enters the queue should be the first person to leave the queue."),(0,i.kt)("p",null,"We can look at the following problem (",(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/time-needed-to-buy-tickets/"},"LeetCode Link"),")"),(0,i.kt)("p",null,"As the problem statement and examples are quite long, we kindly ask you to read them on LeetCode."),(0,i.kt)("p",null,"To implement a Queue, we must have a data structure that handles adding element on the left in ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mn",{parentName:"mrow"},"1"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")")))))," ","_","_"," time. These are the options in different languages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Python: ",(0,i.kt)("inlineCode",{parentName:"li"},"queue = deque([]) # queue.appendleft(x) , queue.pop()")),(0,i.kt)("li",{parentName:"ul"},"C++: ",(0,i.kt)("inlineCode",{parentName:"li"},"queue<int> q; // q.push(x), q.pop()"))),(0,i.kt)("p",null,"We can use these data structures to simulate this problem"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:\n        \n        \n        queue = deque([])\n        \n        #we initialize the queue first\n        #as we need to keep track of the kth person, we add the index as well\n        for i in range(len(tickets)):\n            ticket_needed = tickets[i]\n            queue.appendleft([i,ticket_needed])\n        \n        #keep track of overall time\n        time = 0\n        \n        #we continue until queue is empty\n        while(queue):\n            \n            #each person spends one second for purchase\n            time += 1\n\n            #access the first person and her ticket needed from the queue\n            first_person_in_queue, tickets_remaining = queue[-1]\n            \n            #the first person buys one ticket , so she needs one less ticket\n            tickets_remaining -= 1\n            \n            #we remove the first person from the queue\n            queue.pop()\n            \n            #if the first person still needs to buy more tickets, we move her back to the end of the queue\n            if(tickets_remaining != 0):\n                queue.appendleft([first_person_in_queue, tickets_remaining])\n            #if the first person is the target and she has bought all the tickets, we return the time\n            else:\n                if(first_person_in_queue == k):\n                    return time\n            \n        return time\n")),(0,i.kt)(o.Z,{title:"Suggested Problems",data:h,mdxType:"Table"}))}f.isMDXComponent=!0},11182:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294);function r(e){var t=e.names;if(!t)return null;var n=t.split(",");return a.createElement("div",{className:"tag-wrapper"},n.map((function(e,t){return a.createElement("span",{key:t,className:"topic-tag"},e)})))}function i(e){var t=e.title,n=e.collectionLink,i=e.isSorted,s=void 0===i||i,o=e.data,l=o.some((function(e){return e.tags})),c={Easy:0,Medium:1,Hard:2},u=(s?o.sort((function(e,t){return c[e.difficulty]-c[t.difficulty]})):o).map((function(e,t){return a.createElement("tr",{key:t},a.createElement("td",null,a.createElement("a",{href:e.leetCodeLink,target:"_blank"},e.problemName)),a.createElement("td",null,e.difficulty),a.createElement("td",{style:{textAlign:"center"}},e.solutionLink&&a.createElement("a",{href:e.solutionLink,target:"_blank"},"View Solutions"),!e.solutionLink&&a.createElement("span",null,"N/A")),l&&a.createElement("td",null,a.createElement(r,{names:e.tags})))}));return a.createElement(a.Fragment,null,a.createElement("h3",null,t),n&&a.createElement("h4",null,"Start Practicing: ",a.createElement("a",{href:n,target:"_blank"},n)),a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Problem Name"),a.createElement("th",null,"Difficulty"),a.createElement("th",null,"Solution Link"),l&&a.createElement("th",null,"Topic"))),a.createElement("tbody",null,u)))}},78735:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.names.split(",");return a.createElement("div",{className:"tutorial-author-wrapper"},"This tutorial is written by",t.map((function(e,t){return a.createElement("span",{key:t,className:"author-tag"},e)})))}}}]);