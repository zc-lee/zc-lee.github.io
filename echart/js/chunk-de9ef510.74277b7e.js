(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de9ef510"],{"03c3":function(t,s,n){},"05ed":function(t,s,n){"use strict";var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"card"},[n("div",{staticClass:"title"},[t._v(t._s(t.title))]),n("div",{staticClass:"content"},[n("span",{staticClass:"left"},[t._t("left")],2),n("span",{staticClass:"right"},[t._t("right")],2)])])},c=[],e={props:["title"]},r=e,i=(n("4536"),n("2877")),o=Object(i["a"])(r,a,c,!1,null,"0d3ca414",null);s["a"]=o.exports},"1a0b":function(t,s,n){},"1fb9":function(t,s,n){},"279e":function(t,s,n){"use strict";var a=n("1fb9"),c=n.n(a);c.a},4536:function(t,s,n){"use strict";var a=n("1a0b"),c=n.n(a);c.a},6151:function(t,s,n){"use strict";n.r(s);var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("l-layout",{staticClass:"box"},[n("div",{staticClass:"nav"},[n("span",{staticStyle:{"font-size":"16px",color:"#000"}},[t._v(" 停机损失分析 "),n("a-month-picker",{attrs:{defaultValue:t.moment("2020/01",t.monthFormat),format:t.monthFormat}}),n("a-select",{staticStyle:{width:"120px",margin:"0 20px"},attrs:{defaultValue:"全部"}},t._l(t.filter2,(function(s,a){return n("a-select-option",{key:a,attrs:{value:s}},[t._v(t._s(s))])})),1)],1)]),n("charts"),n("form-table"),n("form-table2")],1)},c=[],e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("div",{staticClass:"cards-line"},[n("chart-card",{attrs:{title:"设备停机总时长"}},[n("div",{staticClass:"left",attrs:{slot:"left"},slot:"left"},[n("div",{staticClass:"left-item",staticStyle:{"align-items":"flex-start"}},[n("b",{staticClass:"text-right",staticStyle:{color:"#00aaee"}},[t._v("1605.6")]),n("span",{staticClass:"text-left",staticStyle:{"font-size":"14px"}},[t._v("天")])]),n("div",{staticClass:"left-item"},[n("div",{staticClass:"text-left"},[n("a-icon",{staticStyle:{color:"#ee3124"},attrs:{type:"caret-up"}}),t._v("34.93% ")],1)])]),n("div",{staticStyle:{"text-align":"center"},attrs:{slot:"right"},slot:"right"},[n("chart",{attrs:{options:t.options[0]}}),n("span",{staticStyle:{color:"#9b9b9b"}},[t._v("连续12个月变化")])],1)]),n("chart-card",{attrs:{title:"停机次数"}},[n("div",{staticClass:"left",attrs:{slot:"left"},slot:"left"},[n("div",{staticClass:"left-item",staticStyle:{"align-items":"flex-start"}},[n("b",{staticClass:"text-right",staticStyle:{color:"#00aaee"}},[t._v("27")]),n("span",{staticClass:"text-left",staticStyle:{"font-size":"14px"}},[t._v("次")])]),n("div",{staticClass:"left-item"},[n("div",{staticClass:"text-left"},[n("a-icon",{staticStyle:{color:"#ee3124"},attrs:{type:"caret-up"}}),t._v("125% ")],1)])]),n("div",{staticStyle:{"text-align":"center"},attrs:{slot:"right"},slot:"right"},[n("chart",{attrs:{options:t.options[1]}}),n("span",{staticStyle:{color:"#9b9b9b"}},[t._v("连续12个月变化")])],1)]),n("chart-card",{attrs:{title:"停机设备数"}},[n("div",{staticClass:"left",attrs:{slot:"left"},slot:"left"},[n("div",{staticClass:"left-item",staticStyle:{"align-items":"flex-start"}},[n("b",{staticClass:"text-right",staticStyle:{color:"#00aaee"}},[t._v("10")]),n("span",{staticClass:"text-left",staticStyle:{"font-size":"14px"}},[t._v("台")])]),n("div",{staticClass:"left-item"},[n("div",{staticClass:"text-left"},[n("a-icon",{staticStyle:{color:"#ee3124"},attrs:{type:"caret-up"}}),t._v("25% ")],1)])]),n("div",{staticStyle:{"text-align":"center"},attrs:{slot:"right"},slot:"right"},[n("chart",{attrs:{options:t.options[2]}}),n("span",{staticStyle:{color:"#9b9b9b"}},[t._v("连续12个月变化")])],1)])],1)])},r=[],i=n("e9b1"),o=n("05ed"),l={components:{chart:i["a"],ChartCard:o["a"]},data:function(){return{options:[{title:{show:!1},grid:{top:0,bottom:30},xAxis:{data:[],max:6,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0}},yAxis:{show:!1,max:4,min:0},series:[{type:"scatter",data:[[0,0],[1,1],[2,1.5],[3,2],[4,3],[5,3.5]],itemStyle:{color:"#00aaee"}},{type:"line",data:[0,1,1.5,2,3,3.5],lineStyle:{color:"#00aaee"}}],color:["#f5222d"]},{title:{show:!1},grid:{top:0,bottom:30},xAxis:{data:[],max:6,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0}},yAxis:{show:!1,max:4,min:-2},series:[{type:"scatter",data:[[0,0],[1,1],[2,1.5],[3,3.5],[4,-1],[5,0]],itemStyle:{color:"#00aaee"}},{type:"line",data:[0,1,1.5,3.5,-1,0],lineStyle:{color:"#00aaee"}}],color:["#f5222d"]},{title:{show:!1},grid:{top:0,bottom:30},xAxis:{data:[],max:6,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0}},yAxis:{show:!1,max:4,min:-2},series:[{type:"scatter",data:[[0,2.5],[1,1],[2,2.5],[3,-1],[4,3.5],[5,0]],itemStyle:{color:"#00aaee"}},{type:"line",data:[2.5,1,2.5,-1,3.5,0],lineStyle:{color:"#00aaee"}}],color:["#f5222d"]}]}}},g=l,_=(n("279e"),n("2877")),d=Object(_["a"])(g,e,r,!1,null,"a4858164",null),u=d.exports,x=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"cards-container"},[n("a-row",{staticClass:"mini-chart-row"},[n("a-col",{staticClass:"mid-chart",attrs:{span:12,"_nghost-fuj-c48":"","_ngcontent-fuj-c44":""}},[n("div",{staticClass:"mini-chart-header"},[n("h2",{attrs:{"_ngcontent-usx-c56":""}},[t._v("停机时间分析")]),n("ul",{staticClass:"filters",attrs:{"_ngcontent-usx-c56":""}},[n("li",{staticClass:"active ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[t._v(" 按问题类型 ")]),n("li",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[t._v("按产线")]),n("li",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[t._v("按设备")])])]),n("section",{staticClass:"ng-star-inserted"},[n("table",{staticClass:"chart-table",attrs:{"_ngcontent-usx-c56":""}},[n("thead",{attrs:{"_ngcontent-usx-c56":""}},[n("tr",{attrs:{"_ngcontent-usx-c56":""}},[n("th",{staticClass:"spare-name",attrs:{"_ngcontent-usx-c56":""}}),n("th",{staticClass:"spare-amount",attrs:{"_ngcontent-usx-c56":""}},[t._v("总时长")]),n("th",{staticClass:"spare-ratio",attrs:{"_ngcontent-usx-c56":""}}),n("th",{staticClass:"spare-last",attrs:{"_ngcontent-usx-c56":""}},[t._v("环比")]),n("th",{staticClass:"spare-compare",attrs:{"_ngcontent-usx-c56":""}},[t._v("环比变化")])])]),n("tbody",{attrs:{"_ngcontent-usx-c56":""}},[n("tr",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("回流炉备件")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("17")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar ng-star-inserted",staticStyle:{width:"80%"},attrs:{"_ngcontent-usx-c59":""}},[t._v(" 74% ")])])]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("a-icon",{staticStyle:{color:"#ee3124"},attrs:{type:"caret-up"}}),t._v("42% ")],1),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar2 ng-star-inserted",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"left",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"separator first",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"right",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"right-bar ng-star-inserted",staticStyle:{width:"26%"},attrs:{"_ngcontent-usx-c59":""}})])])])])]),n("tr",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("空气阀")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("17")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar ng-star-inserted",staticStyle:{width:"13%"},attrs:{"_ngcontent-usx-c59":""}},[t._v(" 12% ")])])]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("a-icon",{staticStyle:{color:"#7eb338"},attrs:{type:"caret-down"}}),t._v("15% ")],1),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar2 ng-star-inserted",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"left",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"left-bar ng-star-inserted",staticStyle:{width:"9%"},attrs:{"_ngcontent-usx-c59":""}})]),n("div",{staticClass:"separator",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"right",attrs:{"_ngcontent-usx-c59":""}})])])])]),n("tr",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("冷干机备件")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("13")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar ng-star-inserted",staticStyle:{width:"9%"},attrs:{"_ngcontent-usx-c59":""}},[t._v(" 8% ")])])]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("a-icon",{staticStyle:{color:"#ee3124"},attrs:{type:"caret-up"}}),t._v("63% ")],1),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar2 ng-star-inserted",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"left",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"separator",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"right",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"right-bar ng-star-inserted",staticStyle:{width:"38%"},attrs:{"_ngcontent-usx-c59":""}})])])])])]),n("tr",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("空压机备件")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("30")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar ng-star-inserted",staticStyle:{width:"4%"},attrs:{"_ngcontent-usx-c59":""}},[t._v(" 4% ")])])]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("a-icon",{staticStyle:{color:"#ee3124"},attrs:{type:"caret-up"}}),t._v("131% ")],1),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar2 ng-star-inserted",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"left",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"separator",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"right",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"right-bar ng-star-inserted",staticStyle:{width:"80%"},attrs:{"_ngcontent-usx-c59":""}})])])])])]),n("tr",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("阀门")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("21")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar ng-star-inserted",staticStyle:{width:"2%"},attrs:{"_ngcontent-usx-c59":""}},[t._v(" 2% ")])])]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("a-icon",{staticStyle:{color:"#ee3124"},attrs:{type:"caret-up"}}),t._v("75% ")],1),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar2 ng-star-inserted",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"left",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"separator",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"right",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"right-bar ng-star-inserted",staticStyle:{width:"46%"},attrs:{"_ngcontent-usx-c59":""}})])])])])]),n("tr",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("垫片")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("30")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar ng-star-inserted",staticStyle:{width:"0%"},attrs:{"_ngcontent-usx-c59":""}},[t._v(" 0% ")])])]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("a-icon",{staticStyle:{color:"#ee3124"},attrs:{type:"caret-up"}}),t._v("76% ")],1),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar2 ng-star-inserted",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"left",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"separator",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"right",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"right-bar ng-star-inserted",staticStyle:{width:"46%"},attrs:{"_ngcontent-usx-c59":""}})])])])])]),n("tr",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("推板机备件")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("21")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar ng-star-inserted",staticStyle:{width:"0%"},attrs:{"_ngcontent-usx-c59":""}},[t._v(" 0% ")])])]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v(" 0% ")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar2 ng-star-inserted",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"left",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"separator",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"right",attrs:{"_ngcontent-usx-c59":""}})])])])]),n("tr",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("液晶显示器")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("33")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar ng-star-inserted",staticStyle:{width:"0%"},attrs:{"_ngcontent-usx-c59":""}},[t._v(" 0% ")])])]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v(" 0% ")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar2 ng-star-inserted",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"left",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"separator last",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"right",attrs:{"_ngcontent-usx-c59":""}})])])])])])])])]),n("div",{staticClass:"mini-chart-rightbox"},[n("div",{staticClass:"mini-chart2",staticStyle:{"margin-bottom":"20px"},attrs:{"_ngcontent-fuj-c44":""}},[n("div",{staticClass:"chart-top",attrs:{"_ngcontent-fuj-c44":"","_nghost-fuj-c49":""}},[n("header",{attrs:{"_ngcontent-fuj-c49":""}},[n("h2",{attrs:{"_ngcontent-fuj-c49":""}},[t._v("停机次数分析")]),n("ul",{staticClass:"filters",attrs:{"_ngcontent-fuj-c49":""}},[n("li",{staticClass:"active ng-star-inserted",attrs:{"_ngcontent-fuj-c49":""}},[t._v(" 按问题类型 ")]),n("li",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-fuj-c49":""}},[t._v("按设备")]),n("li",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-fuj-c49":""}},[t._v("按时段")])])]),n("section",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-fuj-c49":""}},[n("table",{staticClass:"chart-table",attrs:{"_ngcontent-fuj-c49":"",width:"100%"}},[n("thead",{attrs:{"_ngcontent-fuj-c49":""}},[n("tr",{attrs:{"_ngcontent-fuj-c49":""}},[n("th",{staticClass:"spare-name",attrs:{"_ngcontent-fuj-c49":""}}),n("th",{staticClass:"spare-amount",attrs:{"_ngcontent-fuj-c49":""}},[t._v(" 次数 ")]),n("th",{staticClass:"spare-ratio",attrs:{"_ngcontent-fuj-c49":""}}),n("th",{staticClass:"spare-last",attrs:{"_ngcontent-fuj-c49":""}},[t._v("环比")])])]),n("tbody",{attrs:{"_ngcontent-fuj-c49":""}},[n("tr",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-fuj-c49":""}},[n("td",{attrs:{"_ngcontent-fuj-c49":""}},[t._v("关键备件")]),n("td",{attrs:{"_ngcontent-fuj-c49":""}},[t._v("11181")]),n("td",{attrs:{"_ngcontent-fuj-c49":""}},[n("div",{attrs:{"_ngcontent-fuj-c49":"","_nghost-fuj-c51":""}},[n("div",{staticClass:"ratio-bar ng-star-inserted",staticStyle:{width:"80%"},attrs:{"_ngcontent-fuj-c51":""}},[t._v(" 98% ")])])]),n("td",{attrs:{"_ngcontent-fuj-c49":""}},[n("a-icon",{staticStyle:{color:"#ee3124"},attrs:{type:"caret-up"}}),t._v("34% ")],1)]),n("tr",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-fuj-c49":""}},[n("td",{attrs:{"_ngcontent-fuj-c49":""}},[t._v("损耗件")]),n("td",{attrs:{"_ngcontent-fuj-c49":""}},[t._v("240")]),n("td",{attrs:{"_ngcontent-fuj-c49":""}},[n("div",{attrs:{"_ngcontent-fuj-c49":"","_nghost-fuj-c51":""}},[n("div",{staticClass:"ratio-bar ng-star-inserted",staticStyle:{width:"2%"},attrs:{"_ngcontent-fuj-c51":""}},[t._v(" 2% ")])])]),n("td",{attrs:{"_ngcontent-fuj-c49":""}},[n("a-icon",{staticStyle:{color:"#ee3124"},attrs:{type:"caret-up"}}),t._v("75% ")],1)]),n("tr",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-fuj-c49":""}},[n("td",{attrs:{"_ngcontent-fuj-c49":""}},[t._v("常用件")]),n("td",{attrs:{"_ngcontent-fuj-c49":""}},[t._v("0")]),n("td",{attrs:{"_ngcontent-fuj-c49":""}},[n("div",{attrs:{"_ngcontent-fuj-c49":"","_nghost-fuj-c51":""}},[n("div",{staticClass:"ratio-bar ng-star-inserted",staticStyle:{width:"0%"},attrs:{"_ngcontent-fuj-c51":""}},[t._v(" 0% ")])])]),n("td",{attrs:{"_ngcontent-fuj-c49":""}},[t._v(" 0% ")])])])])])])])])],1)],1)},v=[],h=(n("dcc6"),{}),f=Object(_["a"])(h,x,v,!1,null,"a63c0908",null),C=f.exports,p=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"cards-container"},[n("a-row",{staticClass:"mini-chart-row"},[n("a-col",{staticClass:"mid-chart",attrs:{span:12,"_nghost-fuj-c48":"","_ngcontent-fuj-c44":""}},[n("div",{staticClass:"mini-chart-header"},[n("h2",{attrs:{"_ngcontent-usx-c56":""}},[t._v("主要设备停机事件")]),n("ul",{staticClass:"filters",attrs:{"_ngcontent-usx-c56":""}},[n("li",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[t._v("查看全部(73)")])])]),n("section",{staticClass:"ng-star-inserted"},[n("table",{staticClass:"chart-table",attrs:{"_ngcontent-usx-c56":""}},[n("thead",{attrs:{"_ngcontent-usx-c56":""}},[n("tr",{attrs:{"_ngcontent-usx-c56":""}},[n("th",{staticClass:"spare-name",attrs:{"_ngcontent-usx-c56":""}}),n("th",{staticClass:"spare-amount",attrs:{"_ngcontent-usx-c56":""}},[t._v("总时长")]),n("th",{staticClass:"spare-ratio",attrs:{"_ngcontent-usx-c56":""}}),n("th",{staticClass:"spare-last",attrs:{"_ngcontent-usx-c56":""}},[t._v("环比")]),n("th",{staticClass:"spare-compare",attrs:{"_ngcontent-usx-c56":""}},[t._v("环比变化")])])]),n("tbody",{attrs:{"_ngcontent-usx-c56":""}},[n("tr",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("回流炉备件")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("17")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar ng-star-inserted",staticStyle:{width:"80%"},attrs:{"_ngcontent-usx-c59":""}},[t._v(" 74% ")])])]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("a-icon",{staticStyle:{color:"#ee3124"},attrs:{type:"caret-up"}}),t._v("42% ")],1),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar2 ng-star-inserted",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"left",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"separator first",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"right",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"right-bar ng-star-inserted",staticStyle:{width:"26%"},attrs:{"_ngcontent-usx-c59":""}})])])])])]),n("tr",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("空气阀")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("17")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar ng-star-inserted",staticStyle:{width:"13%"},attrs:{"_ngcontent-usx-c59":""}},[t._v(" 12% ")])])]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("a-icon",{staticStyle:{color:"#7eb338"},attrs:{type:"caret-down"}}),t._v("15% ")],1),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar2 ng-star-inserted",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"left",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"left-bar ng-star-inserted",staticStyle:{width:"9%"},attrs:{"_ngcontent-usx-c59":""}})]),n("div",{staticClass:"separator",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"right",attrs:{"_ngcontent-usx-c59":""}})])])])]),n("tr",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("冷干机备件")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("13")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar ng-star-inserted",staticStyle:{width:"9%"},attrs:{"_ngcontent-usx-c59":""}},[t._v(" 8% ")])])]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("a-icon",{staticStyle:{color:"#ee3124"},attrs:{type:"caret-up"}}),t._v("63% ")],1),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar2 ng-star-inserted",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"left",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"separator",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"right",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"right-bar ng-star-inserted",staticStyle:{width:"38%"},attrs:{"_ngcontent-usx-c59":""}})])])])])]),n("tr",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("空压机备件")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("30")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar ng-star-inserted",staticStyle:{width:"4%"},attrs:{"_ngcontent-usx-c59":""}},[t._v(" 4% ")])])]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("a-icon",{staticStyle:{color:"#ee3124"},attrs:{type:"caret-up"}}),t._v("131% ")],1),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar2 ng-star-inserted",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"left",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"separator",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"right",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"right-bar ng-star-inserted",staticStyle:{width:"80%"},attrs:{"_ngcontent-usx-c59":""}})])])])])]),n("tr",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("阀门")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("21")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar ng-star-inserted",staticStyle:{width:"2%"},attrs:{"_ngcontent-usx-c59":""}},[t._v(" 2% ")])])]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("a-icon",{staticStyle:{color:"#ee3124"},attrs:{type:"caret-up"}}),t._v("75% ")],1),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar2 ng-star-inserted",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"left",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"separator",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"right",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"right-bar ng-star-inserted",staticStyle:{width:"46%"},attrs:{"_ngcontent-usx-c59":""}})])])])])]),n("tr",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("垫片")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("30")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar ng-star-inserted",staticStyle:{width:"0%"},attrs:{"_ngcontent-usx-c59":""}},[t._v(" 0% ")])])]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("a-icon",{staticStyle:{color:"#ee3124"},attrs:{type:"caret-up"}}),t._v("76% ")],1),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar2 ng-star-inserted",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"left",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"separator",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"right",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"right-bar ng-star-inserted",staticStyle:{width:"46%"},attrs:{"_ngcontent-usx-c59":""}})])])])])]),n("tr",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("推板机备件")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("21")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar ng-star-inserted",staticStyle:{width:"0%"},attrs:{"_ngcontent-usx-c59":""}},[t._v(" 0% ")])])]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v(" 0% ")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar2 ng-star-inserted",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"left",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"separator",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"right",attrs:{"_ngcontent-usx-c59":""}})])])])]),n("tr",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-usx-c56":""}},[n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("液晶显示器")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v("33")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar ng-star-inserted",staticStyle:{width:"0%"},attrs:{"_ngcontent-usx-c59":""}},[t._v(" 0% ")])])]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[t._v(" 0% ")]),n("td",{attrs:{"_ngcontent-usx-c56":""}},[n("div",{attrs:{"_ngcontent-usx-c56":"","_nghost-usx-c59":""}},[n("div",{staticClass:"ratio-bar2 ng-star-inserted",attrs:{"_ngcontent-usx-c59":""}},[n("div",{staticClass:"left",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"separator last",attrs:{"_ngcontent-usx-c59":""}}),n("div",{staticClass:"right",attrs:{"_ngcontent-usx-c59":""}})])])])])])])])]),n("div",{staticClass:"mini-chart-rightbox"},[n("div",{staticClass:"mini-chart2",staticStyle:{"margin-bottom":"20px"},attrs:{"_ngcontent-fuj-c44":""}},[n("div",{staticClass:"chart-top",attrs:{"_ngcontent-fuj-c44":"","_nghost-fuj-c49":""}},[n("header",{attrs:{"_ngcontent-fuj-c49":""}},[n("h2",{attrs:{"_ngcontent-fuj-c49":""}},[t._v("停机时长分布")]),n("ul",{staticClass:"filters",attrs:{"_ngcontent-fuj-c49":""}},[n("li",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-fuj-c49":""}},[t._v("按日期")])])]),n("section",{staticClass:"ng-star-inserted",attrs:{"_ngcontent-fuj-c49":""}},[n("chart",{attrs:{options:t.options,height:"300"}})],1)])])])],1)],1)},b=[],y=(n("cb29"),{components:{chart:i["a"]},data:function(){return{options:{title:{show:!1},grid:{top:0,bottom:30},xAxis:{data:Array(20).fill(""),axisTick:{show:!1},z:10},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#999"}}},dataZoom:[{type:"inside"}],series:[{type:"bar",itemStyle:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])},emphasis:{itemStyle:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#2378f7"},{offset:.7,color:"#2378f7"},{offset:1,color:"#83bff6"}])}},data:[220,182,191,234,290,330,310,123,442,321,90,149,210,122,133,334,198,123,125,220]}],color:["#00aaee"]}}}}),m=y,S=(n("b9ec"),Object(_["a"])(m,p,b,!1,null,"7b8ba81c",null)),w=S.exports,j=n("6bf2"),k=n.n(j),A={components:{charts:u,FormTable:C,FormTable2:w},data:function(){return{monthFormat:"YYYY/MM",filter2:["全部","切割机","备用设备","注塑机","生产设备","空压机","贴片机","锅炉设备"]}},methods:{moment:k.a}},L=A,$=(n("9fcf"),Object(_["a"])(L,a,c,!1,null,"77bc9976",null));s["default"]=$.exports},"81d56":function(t,s,n){"use strict";var a=n("7b0b"),c=n("23cb"),e=n("50c4");t.exports=function(t){var s=a(this),n=e(s.length),r=arguments.length,i=c(r>1?arguments[1]:void 0,n),o=r>2?arguments[2]:void 0,l=void 0===o?n:c(o,n);while(l>i)s[i++]=t;return s}},"9fcf":function(t,s,n){"use strict";var a=n("f0fc"),c=n.n(a);c.a},a07e:function(t,s,n){"use strict";var a=n("df27"),c=n.n(a);c.a},b9ec:function(t,s,n){"use strict";var a=n("bf42"),c=n.n(a);c.a},bf42:function(t,s,n){},cb29:function(t,s,n){var a=n("23e7"),c=n("81d56"),e=n("44d2");a({target:"Array",proto:!0},{fill:c}),e("fill")},dcc6:function(t,s,n){"use strict";var a=n("03c3"),c=n.n(a);c.a},df27:function(t,s,n){},e9b1:function(t,s,n){"use strict";var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"chart-box",style:{height:t.height+"px",width:t.width+"px"}})},c=[],e={props:{height:{type:String,default:""},width:{type:String,default:""},options:{type:Object,default:function(){return{}}}},mounted:function(){this.draw()},methods:{draw:function(){var t=this.$echarts.init(this.$el);t.setOption(this.options)}}},r=e,i=(n("a07e"),n("2877")),o=Object(i["a"])(r,a,c,!1,null,"26cf09ef",null);s["a"]=o.exports},f0fc:function(t,s,n){}}]);
//# sourceMappingURL=chunk-de9ef510.74277b7e.js.map