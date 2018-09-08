(function(e){function t(t){for(var o,i,l=t[0],s=t[1],d=t[2],u=0,p=[];u<l.length;u++)i=l[u],r[i]&&p.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/interactive-syntax-tree/dist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var c=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2375:function(e){e.exports={type:"root",children:[{type:"order",name:"ask_venue_root",children:[{type:"order",name:"search_node",children:[{type:"content",from_file:!1,dropout:.2,content:["给我","想找","想要","想要找","查","查询","检索","显示","展示","查找"]},{type:"content",from_file:!1,dropout:.3,content:["一些","一组","一批","几个"]}]},{type:"pickone",name:"ex_keyword_node",children:[{type:"order",children:[{type:"content",from_file:!1,content:["有关","关于"]},{type:"content",from_file:!0,filename:"aminer_keywords_zh.txt",entity:"KEY",name:"keyword_node"},{type:"content",from_file:!1,content:["方面","方向","领域"]},{type:"content",from_file:!1,content:["的"]}]},{type:"order",children:[{type:"content",from_file:!1,content:["和","与"]},{type:"content",from_file:!0,filename:"aminer_keywords_zh.txt",entity:"KEY",name:"keyword_node"},{type:"content",from_file:!1,content:["相关","有关"]},{type:"content",from_file:!1,content:["的"]}]}]},{type:"content",from_file:!1,content:["期刊","会议"]}]}]}},"25a8":function(e,t,n){"use strict";var o=n("befc"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("router-view")],1)},a=[],i=n("2877"),l={},s=Object(i["a"])(l,r,a,!1,null,null,null);s.options.__file="App.vue";var d=s.exports,c=n("8c4f"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("InteractiveSyntaxTree")],1)},p=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-main",[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:18}},[n("svg",{attrs:{height:"90vh",width:"100%"}})]),n("el-col",{attrs:{span:6}},[n("el-tabs",{attrs:{type:"border-card"}},[n("el-tab-pane",{attrs:{label:"Interactive Syntax Tree"}},[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("Generate Syntax Tree JSON"),n("i",{staticClass:"el-icon-download el-icon--right"})])],1)],1),n("el-tab-pane",{attrs:{label:"Property Page"}},[e.nodeProp?n("el-form",{attrs:{model:e.nodeProp.data,"label-width":"80px"}},[n("el-collapse",{attrs:{value:["common","advanced"]}},[n("el-collapse-item",{attrs:{name:"common",title:"Common Properties"}},[e.nodeProp.data.type in{order:1,pickone:2,exchangeable:3}?n("el-form-item",{attrs:{label:"Type"}},[n("el-radio-group",{model:{value:e.nodeProp.data.type,callback:function(t){e.$set(e.nodeProp.data,"type",t)},expression:"nodeProp.data.type"}},[n("el-radio",{attrs:{label:"order"}}),n("el-radio",{attrs:{label:"pickone"}}),n("el-radio",{attrs:{label:"exchangeable"}})],1)],1):e._e(),"content"==e.nodeProp.data.type?n("el-form-item",{attrs:{label:"Type"}},[n("el-tag",[e._v(e._s(e.nodeProp.data.type))])],1):e._e(),n("el-form-item",{attrs:{label:"Name"}},[n("el-input",{attrs:{placeholder:"Name",clearable:""},model:{value:e.nodeProp.data.name,callback:function(t){e.$set(e.nodeProp.data,"name",t)},expression:"nodeProp.data.name"}})],1),n("el-form-item",{attrs:{label:"Dropout"}},[n("el-slider",{attrs:{min:0,max:1,step:.01,"show-input":""},model:{value:e.nodeProp.data.dropout,callback:function(t){e.$set(e.nodeProp.data,"dropout",t)},expression:"nodeProp.data.dropout"}})],1)],1),n("el-collapse-item",{attrs:{name:"advanced",title:"Advanced Properties"}},[e.nodeProp.data.type in{order:1,pickone:2,exchangeable:3}?n("el-form-item",{attrs:{label:"Weight"}},[n("el-input-number",{attrs:{precision:2,step:.01,min:0},model:{value:e.nodeProp.data.weight,callback:function(t){e.$set(e.nodeProp.data,"weight",t)},expression:"nodeProp.data.weight"}})],1):e._e(),"content"===e.nodeProp.data.type?n("el-row",[n("el-form-item",{attrs:{label:"FromFile"}},[n("el-switch",{model:{value:e.nodeProp.data.from_file,callback:function(t){e.$set(e.nodeProp.data,"from_file",t)},expression:"nodeProp.data.from_file"}})],1),e.nodeProp.data.from_file?n("el-form-item",{attrs:{label:"Filename"}},[n("el-input",{attrs:{placeholder:"Filename",clearable:""},model:{value:e.nodeProp.data.filename,callback:function(t){e.$set(e.nodeProp.data,"filename",t)},expression:"nodeProp.data.filename"}})],1):n("el-form-item",{attrs:{label:"Content"}},[e._l(e.nodeProp.data.content,function(t){return n("el-tag",{key:t,attrs:{"disable-transitions":!1,closable:""},on:{close:function(n){e.removeFromContent(t)}}},[e._v("\n                        "+e._s(t)+"\n                      ")])}),e.contentTagVisible?n("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",on:{blur:e.addToContent},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.addToContent(t):null}},model:{value:e.contentTag,callback:function(t){e.contentTag=t},expression:"contentTag"}}):n("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:e.showContentTagInput}},[e._v("+ New Tag")])],2),e.nodeProp.data.entity?n("el-form-item",{attrs:{label:"Entity"}},[n("el-input",{attrs:{placeholder:"Entity",clearable:""},model:{value:e.nodeProp.data.entity,callback:function(t){e.$set(e.nodeProp.data,"entity",t)},expression:"nodeProp.data.entity"}})],1):e._e(),n("el-form-item",{attrs:{label:"Cut"}},[n("el-slider",{attrs:{min:0,max:1,step:.01,"show-input":""},model:{value:e.nodeProp.data.cut,callback:function(t){e.$set(e.nodeProp.data,"cut",t)},expression:"nodeProp.data.cut"}})],1),e.nodeProp.data.cut&&e.nodeProp.data.cut>0?n("el-form-item",{attrs:{label:"WordCut"}},[n("el-slider",{attrs:{min:0,max:1,step:.01,"show-input":""},model:{value:e.nodeProp.data.word_cut,callback:function(t){e.$set(e.nodeProp.data,"word_cut",t)},expression:"nodeProp.data.word_cut"}})],1):e._e()],1):e._e()],1)],1)],1):e._e()],1)],1)],1)],1)],1)],1)},f=[],g=n("5698"),m=n("1157"),y=n.n(m);const v=n("2375");var b={name:"InteractiveSyntaxTree",data:function(){return{data:null,root:null,index:0,dragListener:null,dragStarted:null,dragNodes:null,draggingNode:null,selectedNode:null,panBoundary:50,panTimer:null,baseSvg:null,svgGroup:null,zoomListener:null,linkGenerator:null,duration:750,nodeProp:null,contentTagVisible:!1,contentTag:null}},watch:{nodeProp:{handler:function(e){this.update(this.root),this.centerNode(e)},deep:!0}},mounted:function(){const e=this;this.zoomListener=g["k"]().scaleExtent([.5,4]).on("zoom",this.zoom),this.baseSvg=g["h"]("svg").attr("class","overlay").call(this.zoomListener).on("dblclick.zoom",null),this.linkGenerator=g["d"]().x(function(e){return e.y}).y(function(e){return e.x}),this.dragListener=g["a"]().on("start",function(t){t!==e.root&&(e.dragStarted=!0,e.dragNodes=t.descendants(),g["b"].sourceEvent.stopPropagation())}).on("drag",function(t){if(t===e.root)return;e.dragStarted&&e.dragStart(t,this);const n=g["g"](y()("svg").get(0));let o=null,r=null;n[0]<e.panBoundary?(o="left",r=e.panBoundary-n[0]):n[0]>y()("svg").width()-e.panBoundary?(o="right",r=n[0]-y()("svg").width()+e.panBoundary):n[1]<e.panBoundary?(o="up",r=e.panBoundary-n[1]):n[1]>y()("svg").height()-e.panBoundary?(o="down",r=n[1]-y()("svg").height()+e.panBoundary):clearTimeout(e.panTimer),null!==o&&(r=g["f"]([1e3,r]),e.pan(o,r/10)),t.x0+=g["b"].dy,t.y0+=g["b"].dx;const a=g["h"](this);a.attr("transform",`translate(${t.y0}, ${t.x0})`),e.updateTempConnector()}).on("end",function(t){if(t!==e.root&&null!==e.draggingNode){if(e.selectedNode){const t=e.draggingNode.parent.children.indexOf(e.draggingNode);t>-1&&(e.draggingNode.parent.children.splice(t,1),e.draggingNode.parent.children.length||delete e.draggingNode.parent.children),e.selectedNode.children?e.selectedNode.children.push(e.draggingNode):e.selectedNode._children?e.selectedNode._children.push(e.draggingNode):(e.selectedNode.children=[],e.selectedNode.children.push(e.draggingNode)),e.draggingNode.parent=e.selectedNode,e.updateHierarchy(),e.expand(e.selectedNode),e.sortTree()}clearTimeout(e.panTimer),e.dragEnd(e.draggingNode.parent,this)}}),this.svgGroup=this.baseSvg.append("g"),this.data=v,this.hierarchy(),this.update(this.root),this.centerNode(this.root)},methods:{removeFromContent:function(e){this.nodeProp.data.content.splice(this.nodeProp.data.content.indexOf(e),1)},showContentTagInput:function(){this.contentTagVisible=!0,this.$nextTick(()=>{this.$refs.saveTagInput.$refs.input.focus()})},addToContent:function(){const e=this.contentTag;e&&this.nodeProp.data.content.push(e),this.contentTagVisible=!1,this.contentTag=null},updateHierarchy:function(){const e=function(t,n){t.depth=n;const o=t.children||t._children;return o&&o.length?t.height=g["e"](o.map(function(t){return e(t,n+1)}))+1:t.height=0,t.height};e(this.root,0)},sortTree:function(){this.root.sort(function(e,t){const n=e.x0-e.parent.x0,o=Math.abs(e.y0-e.parent.y0),r=t.x0-t.parent.x0,a=Math.abs(t.y0-t.parent.y0);return n/o-r/a})},pan:function(e,t){clearTimeout(this.panTimer);const n=this;let o=0,r=0;switch(e){case"left":o=+t;break;case"right":o=-t;break;case"up":r=+t;break;case"down":r=-t;break;default:break}this.zoomListener.translateBy(this.baseSvg.transition().duration(50),o,r),this.panTimer=setTimeout(function(){n.pan(e,t)},50)},updateTempConnector:function(){let e=[];null!==this.draggingNode&&null!==this.selectedNode&&(e=[{source:{x:this.selectedNode.x0,y:this.selectedNode.y0},target:{x:this.draggingNode.x0,y:this.draggingNode.y0}}]);const t=this.svgGroup.selectAll(".tempLink").data(e);t.enter().append("path").attr("class","tempLink").attr("d",this.linkGenerator).attr("pointer-events","none"),t.attr("d",this.linkGenerator),t.exit().remove()},hierarchy:function(){this.root=g["c"](this.data),this.root.x0=0,this.root.y0=y()(this.baseSvg.node()).width()/2},expand:function(e){e._children&&(e.children=e._children,delete e._children)},dragStart:function(e,t){const n=this;if(this.draggingNode=e,g["h"](t).select(".ghostCircle").attr("pointer-events","none"),g["i"](".ghostCircle").attr("class","ghostCircle show"),t.classList.add("activeDrag"),this.svgGroup.selectAll("g.node").sort(function(e){return e.id!==n.draggingNode.id?1:-1}),this.dragNodes.length>1){const t=e.links();this.svgGroup.selectAll("path.link").data(t,function(e){return e.target.id}).remove(),this.svgGroup.selectAll("g.node").data(this.dragNodes.slice(1),function(e){return e.id}).remove()}this.svgGroup.selectAll("path.link").filter(function(e){return e.target.id===n.draggingNode.id}).remove(),this.dragStarted=null},dragEnd:function(e,t){this.selectedNode=null,g["i"](".ghostCircle").attr("class","ghostCircle"),t.classList.remove("activeDrag"),g["h"](t).select(".ghostCircle").attr("pointer-events",""),this.updateTempConnector(),null!==this.draggingNode&&(this.update(e),this.centerNode(this.draggingNode),this.draggingNode=null)},nodeClick:function(e){g["b"].defaultPrevented||this.$set(this,"nodeProp",e)},nodeDblClick:function(e){g["b"].defaultPrevented||(e.children||e._children)&&(e.children?(e._children=e.children,delete e.children):(e.children=e._children,delete e._children),this.update(e),this.centerNode(e))},ghostOver:function(e){this.selectedNode=e,this.updateTempConnector()},ghostOut:function(){this.selectedNode=null,this.updateTempConnector()},updateData:function(){this.data=this.generateJSON(this.root),this.hierarchy()},update:function(e){const t=this,n=t.root.descendants(),o=t.root.links(),r=[];n.forEach(function(e){r.push((e.data.name||e.data.type).length)});const a=g["e"](r),i=g["j"]().nodeSize([25,8*a]);this.root=i(this.root),this.svgGroup.selectAll("g.node .selectCircle").remove();const l=this.svgGroup.selectAll("g.node").data(n,function(e){return e.id||(e.id=++t.index)}),s=l.enter().append("g").call(this.dragListener).attr("transform",function(){return`translate(${e.y0}, ${e.x0})`}).on("click",this.nodeClick).on("dblclick",this.nodeDblClick);s.append("circle").attr("r",0),s.append("text").style("fill-opacity",0),s.filter(function(e){return"content"!==e.data.type}).append("circle").attr("class","ghostCircle").attr("r",40).attr("pointer-events","mouseover").on("mouseover",this.ghostOver).on("mouseout",this.ghostOut);let d=s.merge(l).attr("class",function(e){return`node ${e.data.type}${e._children?" collapsed":""}`});d.filter(function(e){return e===t.nodeProp}).append("circle").attr("class","selectCircle").attr("r",.75),d.select("text").text(function(e){return e.data.name||e.data.type}).attr("x",function(e){return e.children||e._children?-8:8}).attr("dy",function(e){return e.children||e._children?-3.5:8.5}).attr("class",function(e){return e.children||e._children?"internal":"leaf"}),d=d.transition().duration(this.duration).attr("transform",function(e){return`translate(${e.y}, ${e.x})`}),d.select("circle").attr("r",5),d.select("text").style("fill-opacity",1);const c=l.exit().transition().duration(this.duration).attr("transform",function(){return`translate(${e.y}, ${e.x})`}).remove();c.select("circle").attr("r",0),c.select("text").style("fill-opacity",0);const u=this.svgGroup.selectAll("path.link").data(o,function(e){return e.target.id}),p=u.enter().insert("path","g").attr("class","link").attr("d",function(){const n={x:e.x0,y:e.y0};return t.linkGenerator({source:n,target:n})});p.merge(u).transition().duration(this.duration).attr("d",this.linkGenerator),u.exit().transition().duration(this.duration).attr("d",function(){const n={x:e.x,y:e.y};return t.linkGenerator({source:n,target:n})}).remove(),n.forEach(function(e){e.x0=e.x,e.y0=e.y})},centerNode:function(e){this.baseSvg.transition().duration(this.duration).call(this.zoomListener.translateTo,e.y0,e.x0).transition().call(this.zoomListener.scaleTo,2)},zoom:function(){this.svgGroup.attr("transform",g["b"].transform)},generateJSON:function(e){const t=this,n={};Object.assign(n,e.data);for(const r in n)null!==n[r]&&void 0!==n[r]&&""!==n[r]||delete n[r];const o=e.children||e._children;return o&&(n.children=[],o.forEach(function(e){n.children.push(t.generateJSON(e))})),n},save:function(){const e=this.generateJSON(this.root),t=document.createElement("a");t.download="syntaxTree.json",t.href=URL.createObjectURL(new Blob([JSON.stringify(e)])),document.body.appendChild(t),t.click(),document.body.removeChild(t)}}},x=b,_=(n("25a8"),Object(i["a"])(x,h,f,!1,null,null,null));_.options.__file="InteractiveSyntaxTree.vue";var k=_.exports,P={name:"Home",components:{InteractiveSyntaxTree:k}},N=P,T=Object(i["a"])(N,u,p,!1,null,null,null);T.options.__file="Home.vue";var w=T.exports;o["default"].use(c["a"]);var C=new c["a"]({routes:[{path:"/",name:"home",component:w}]}),S=n("5c96"),O=n.n(S);n("0fae");o["default"].use(O.a),o["default"].config.productionTip=!1,new o["default"]({router:C,render:e=>e(d)}).$mount("#app")},befc:function(e,t,n){}});
//# sourceMappingURL=app.6d7ea863.js.map