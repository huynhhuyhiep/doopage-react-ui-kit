(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{DJZx:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return g}));var n=t("Fcif"),o=t("+I+c"),l=t("mXGw"),c=t("/FXl"),r=t("TjRS"),u=t("rx0e"),d=t("ZFoC"),s=t("exv6"),p=(t("aD51"),{});void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/DateRangeInput/DateRangeInput.mdx"}});var b={_frontmatter:p},i=r.a;function g(e){var a,t,g,D,m=e.components,y=Object(o.a)(e,["components"]);return Object(c.b)(i,Object(n.a)({},b,y,{components:m,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"menu"},"Menu"),Object(c.b)("p",null,"Base on ",Object(c.b)("a",{parentName:"p",href:"https://hypeserver.github.io/react-date-range/#daterangepicker"},"https://hypeserver.github.io/react-date-range/#daterangepicker")),Object(c.b)("p",null,"Related component"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://huynhhuyhiep.github.io/doopage-react-ui-kit/popup"},"Popup")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://huynhhuyhiep.github.io/doopage-react-ui-kit/input"},"Input"))),Object(c.b)("h2",{id:"basic-usage"},"Basic usage"),Object(c.b)("p",null,"Install ",Object(c.b)("inlineCode",{parentName:"p"},"date-fns")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"npm install date-fns --save\nor\nyarn add date-fns\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import { DateRangeInput } from '@doopage/react-ui-kit'\nimport { addDays } from \"date-fns\";\n\nconst Example = () => {\n    return (\n      <DateRangeInput\n        label={'select date range'}\n        onChange={(values) => console.log(values)}\n        minDate={addDays(new Date(), -30)}\n        maxDate={addDays(new Date(), 30)}\n      />\n    );\n}\n\nexport default Example;\n")),Object(c.b)("h2",{id:"playground"},"Playground"),Object(c.b)("h3",{id:"basic"},"Basic"),Object(c.b)(d.c,{__position:0,__code:"<DateRangeInput\n  label={'Select Date Range'}\n  onChange={values => console.log(values)}\n/>",__scope:(a={props:y,DefaultLayout:r.a,addDays:u.a,Playground:d.c,Props:d.d,useState:l.useState,DateRangeInput:s.a},a.DefaultLayout=r.a,a._frontmatter=p,a),mdxType:"Playground"},Object(c.b)(s.a,{label:"Select Date Range",onChange:function(e){return console.log(e)},mdxType:"DateRangeInput"})),Object(c.b)("h3",{id:"advanced"},"Advanced"),Object(c.b)("h4",{id:"one-month"},"One month"),Object(c.b)(d.c,{__position:1,__code:"<DateRangeInput\n  months={1}\n  label={'Select Date Range'}\n  onChange={values => console.log(values)}\n/>",__scope:(t={props:y,DefaultLayout:r.a,addDays:u.a,Playground:d.c,Props:d.d,useState:l.useState,DateRangeInput:s.a},t.DefaultLayout=r.a,t._frontmatter=p,t),mdxType:"Playground"},Object(c.b)(s.a,{months:1,label:"Select Date Range",onChange:function(e){return console.log(e)},mdxType:"DateRangeInput"})),Object(c.b)("h4",{id:"hide-defined-range"},"Hide defined range"),Object(c.b)(d.c,{__position:2,__code:"<DateRangeInput\n  months={1}\n  minDate={addDays(new Date(), -30)}\n  maxDate={addDays(new Date(), 30)}\n  hideDefinedRange\n  label={'Select Date Range'}\n  onChange={values => console.log(values)}\n/>",__scope:(g={props:y,DefaultLayout:r.a,addDays:u.a,Playground:d.c,Props:d.d,useState:l.useState,DateRangeInput:s.a},g.DefaultLayout=r.a,g._frontmatter=p,g),mdxType:"Playground"},Object(c.b)(s.a,{months:1,minDate:Object(u.a)(new Date,-30),maxDate:Object(u.a)(new Date,30),hideDefinedRange:!0,label:"Select Date Range",onChange:function(e){return console.log(e)},mdxType:"DateRangeInput"})),Object(c.b)("h4",{id:"control"},"Control"),Object(c.b)(d.c,{__position:3,__code:"() => {\n  const [range, setRange] = useState([1606755600000, 1609347600000])\n  console.log('select range ', range)\n  return (\n    <DateRangeInput\n      value={range}\n      months={1}\n      dateFormat=\"dd/MM/yyyy\"\n      minDate={addDays(new Date(), -30)}\n      maxDate={addDays(new Date(), 30)}\n      hideDefinedRange\n      label={'Select Date Range'}\n      onChange={setRange}\n    />\n  )\n}",__scope:(D={props:y,DefaultLayout:r.a,addDays:u.a,Playground:d.c,Props:d.d,useState:l.useState,DateRangeInput:s.a},D.DefaultLayout=r.a,D._frontmatter=p,D),mdxType:"Playground"},(function(){var e=Object(l.useState)([16067556e5,16093476e5]),a=e[0],t=e[1];return console.log("select range ",a),Object(c.b)(s.a,{value:a,months:1,dateFormat:"dd/MM/yyyy",minDate:Object(u.a)(new Date,-30),maxDate:Object(u.a)(new Date,30),hideDefinedRange:!0,label:"Select Date Range",onChange:t,mdxType:"DateRangeInput"})})),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)(d.d,{of:s.a,table:!0,mdxType:"Props"}))}void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/DateRangeInput/DateRangeInput.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-date-range-input-date-range-input-mdx-772c14f051d212646d30.js.map