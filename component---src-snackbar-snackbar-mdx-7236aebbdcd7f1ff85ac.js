(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"4zeL":function(n,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return k})),t.d(a,"default",(function(){return d}));var e=t("Fcif"),o=t("+I+c"),c=t("mXGw"),r=t("/FXl"),b=t("TjRS"),s=t("ZFoC"),i=t("LXYK"),u=t("rxZx"),l=t("/t70"),k=(t("aD51"),{});void 0!==k&&k&&k===Object(k)&&Object.isExtensible(k)&&!k.hasOwnProperty("__filemeta")&&Object.defineProperty(k,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Snackbar/Snackbar.mdx"}});var p={_frontmatter:k},m=b.a;function d(n){var a,t,d,h=n.components,S=Object(o.a)(n,["components"]);return Object(r.b)(m,Object(e.a)({},p,S,{components:h,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"snackbar"},"Snackbar"),Object(r.b)("p",null,"Base on ",Object(r.b)("a",{parentName:"p",href:"https://iamhosseindhv.com/notistack"},"https://iamhosseindhv.com/notistack")," ",Object(r.b)("br",null),"\nand ",Object(r.b)("a",{parentName:"p",href:"https://material-ui.com/components/snackbars/#snackbar"},"https://material-ui.com/components/snackbars/#snackbar")),Object(r.b)("h3",{id:"note"},"Note"),Object(r.b)("p",null,"autoHideDuration default value was calculated base on length of message"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"autoHideDuration = Math.min(Math.max(message?.length * 50, 2000), 10000);\n")),Object(r.b)("h2",{id:"basic-usage"},"Basic usage"),Object(r.b)("p",null,"In root, add ",Object(r.b)("inlineCode",{parentName:"p"},"Snackbar")," component"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import { Snackbar } from '@doopage/react-ui-kit';\n\nconst App = () => (\n  <>\n    {/*your root component*/}\n    <Snackbar />\n  </>\n);\n\nexport default App;\n")),Object(r.b)("p",null,"And any where you need, call ",Object(r.b)("inlineCode",{parentName:"p"},"showSnackbar")," func to show your snackbar"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import { closeSnackbar, showSnackbar } from '@doopage/react-ui-kit';\nconst id = showSnackbar('My Snack bar')\ncloseSnackbar(id)\n")),Object(r.b)("h2",{id:"playground"},"Playground"),Object(r.b)("h3",{id:"basic"},"Basic"),Object(r.b)(s.c,{__position:0,__code:"<div>Click button to show snack bar</div>\n<Snackbar />\n<Button onClick={() => showSnackbar('Hi, I am snackbar')} color=\"gray\">\n  Default\n</Button>\n<Button\n  onClick={() => showSuccessSnackbar('Hi, I am snackbar', { persist: true })}\n  color=\"success\"\n>\n  Success\n</Button>\n<Button onClick={() => showInfoSnackbar('Hi, I am snackbar')} color=\"info\">\n  Info\n</Button>\n<Button\n  onClick={() => showWarningSnackbar('Hi, I am snackbar')}\n  color=\"warning\"\n>\n  Warning\n</Button>\n<Button onClick={() => showErrorSnackbar('Hi, I am snackbar')} color=\"danger\">\n  Error\n</Button>",__scope:(a={props:S,DefaultLayout:b.a,Playground:s.c,Props:s.d,useState:c.useState,Snackbar:i.b,Button:u.a,showSuccessSnackbar:i.g,showInfoSnackbar:i.d,showWarningSnackbar:i.h,showErrorSnackbar:i.c,showSnackbar:i.f,showPrimarySnackbar:i.e,closeSnackbar:i.a,Checkbox:l.a},a.DefaultLayout=b.a,a._frontmatter=k,a),mdxType:"Playground"},Object(r.b)("div",null,"Click button to show snack bar"),Object(r.b)(i.b,{mdxType:"Snackbar"}),Object(r.b)(u.a,{onClick:function(){return Object(i.f)("Hi, I am snackbar")},color:"gray",mdxType:"Button"},"Default"),Object(r.b)(u.a,{onClick:function(){return Object(i.g)("Hi, I am snackbar",{persist:!0})},color:"success",mdxType:"Button"},"Success"),Object(r.b)(u.a,{onClick:function(){return Object(i.d)("Hi, I am snackbar")},color:"info",mdxType:"Button"},"Info"),Object(r.b)(u.a,{onClick:function(){return Object(i.h)("Hi, I am snackbar")},color:"warning",mdxType:"Button"},"Warning"),Object(r.b)(u.a,{onClick:function(){return Object(i.c)("Hi, I am snackbar")},color:"danger",mdxType:"Button"},"Error")),Object(r.b)("h3",{id:"persist"},"Persist"),Object(r.b)(s.c,{__position:1,__code:'() => {\n  const [id, setId] = useState()\n  return (\n    <>\n      <Button\n        onClick={() =>\n          setId(showPrimarySnackbar(\'Hi, I am snackbar\', { persist: true }))\n        }\n        color="primary"\n      >\n        Persist snackbar\n      </Button>\n      <Button onClick={() => closeSnackbar(id)} color="gray">\n        Close snackbar\n      </Button>\n    </>\n  )\n}',__scope:(t={props:S,DefaultLayout:b.a,Playground:s.c,Props:s.d,useState:c.useState,Snackbar:i.b,Button:u.a,showSuccessSnackbar:i.g,showInfoSnackbar:i.d,showWarningSnackbar:i.h,showErrorSnackbar:i.c,showSnackbar:i.f,showPrimarySnackbar:i.e,closeSnackbar:i.a,Checkbox:l.a},t.DefaultLayout=b.a,t._frontmatter=k,t),mdxType:"Playground"},(function(){var n=Object(c.useState)(),a=n[0],t=n[1];return Object(r.b)(c.Fragment,null,Object(r.b)(u.a,{onClick:function(){return t(Object(i.e)("Hi, I am snackbar",{persist:!0}))},color:"primary",mdxType:"Button"},"Persist snackbar"),Object(r.b)(u.a,{onClick:function(){return Object(i.a)(a)},color:"gray",mdxType:"Button"},"Close snackbar"))})),Object(r.b)("h3",{id:"advanced"},"Advanced"),Object(r.b)("p",null,"You can pass any material-ui snackbar props to either ",Object(r.b)(i.b,{mdxType:"Snackbar"})," component or ",Object(r.b)("inlineCode",{parentName:"p"},"showSnackbar")," prop."),Object(r.b)(s.c,{__position:2,__code:"() => {\n  const [enable, setEnable] = useState(false)\n  return (\n    <>\n      <Checkbox\n        label={'Enable custom snackbar'}\n        onChange={event => setEnable(event.target.checked)}\n      />\n      {enable ? (\n        <>\n          <Snackbar\n            autoHideDuration={2000}\n            anchorOrigin={{\n              vertical: 'bottom',\n              horizontal: 'left',\n            }}\n            maxSnack={2}\n            action={key => (\n              <>\n                <Button\n                  onClick={() => closeSnackbar(key)}\n                  simple\n                  color=\"transparent\"\n                >\n                  Close\n                </Button>\n                <Button onClick={() => closeSnackbar(key)} color=\"primary\">\n                  Action\n                </Button>\n              </>\n            )}\n          />\n        </>\n      ) : (\n        <Snackbar />\n      )}\n      <Button\n        onClick={() => {\n          showPrimarySnackbar('Hi, I am snackbar', { autoHideDuration: 1000 })\n        }}\n        color=\"primary\"\n      >\n        Show custom snackbar\n      </Button>\n      <Button\n        onClick={() => {\n          showPrimarySnackbar('Hi, I am snackbar', {\n            anchorOrigin: { vertical: 'top', horizontal: 'left' },\n          })\n        }}\n        color=\"info\"\n      >\n        Show custom position\n      </Button>\n    </>\n  )\n}",__scope:(d={props:S,DefaultLayout:b.a,Playground:s.c,Props:s.d,useState:c.useState,Snackbar:i.b,Button:u.a,showSuccessSnackbar:i.g,showInfoSnackbar:i.d,showWarningSnackbar:i.h,showErrorSnackbar:i.c,showSnackbar:i.f,showPrimarySnackbar:i.e,closeSnackbar:i.a,Checkbox:l.a},d.DefaultLayout=b.a,d._frontmatter=k,d),mdxType:"Playground"},(function(){var n=Object(c.useState)(!1),a=n[0],t=n[1];return Object(r.b)(c.Fragment,null,Object(r.b)(l.a,{label:"Enable custom snackbar",onChange:function(n){return t(n.target.checked)},mdxType:"Checkbox"}),a?Object(r.b)(c.Fragment,null,Object(r.b)(i.b,{autoHideDuration:2e3,anchorOrigin:{vertical:"bottom",horizontal:"left"},maxSnack:2,action:function(n){return Object(r.b)(c.Fragment,null,Object(r.b)(u.a,{onClick:function(){return Object(i.a)(n)},simple:!0,color:"transparent",mdxType:"Button"},"Close"),Object(r.b)(u.a,{onClick:function(){return Object(i.a)(n)},color:"primary",mdxType:"Button"},"Action"))},mdxType:"Snackbar"})):Object(r.b)(i.b,{mdxType:"Snackbar"}),Object(r.b)(u.a,{onClick:function(){Object(i.e)("Hi, I am snackbar",{autoHideDuration:1e3})},color:"primary",mdxType:"Button"},"Show custom snackbar"),Object(r.b)(u.a,{onClick:function(){Object(i.e)("Hi, I am snackbar",{anchorOrigin:{vertical:"top",horizontal:"left"}})},color:"info",mdxType:"Button"},"Show custom position"))})),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)(s.d,{of:i.b,table:!0,mdxType:"Props"}))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Snackbar/Snackbar.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-snackbar-snackbar-mdx-7236aebbdcd7f1ff85ac.js.map