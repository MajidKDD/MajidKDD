import{_ as _decorate,s,e,a as _get,b as _getPrototypeOf,C as Chart,c as _toConsumableArray,x,d as _taggedTemplateLiteral,f as e$1,g as _inherits,h as _createSuper,i as _createClass,j as _classCallCheck,k as _assertThisInitialized,r as registerables}from"./chart-48d074a4.js";var _templateObject,config={controlName:"chart-bar",groupName:"Charts",fallbackDisableSubmit:!1,description:"Creates a Bar chart",version:"1.0",properties:{chartData:{type:"string",title:"Data Array"},backgroundColor:{type:"string",title:"Background Color"}},events:["ntx-value-change"],standardProperties:{fieldLabel:!0,description:!0,defaultValue:!0,readOnly:!0,visibility:!0}},styles=[],BarChart=_decorate([e$1("chart-bar")],function(s,t){var a=function(){_inherits(o,t);var n=_createSuper(o);function o(){var t;_classCallCheck(this,o);for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return t=n.call.apply(n,[this].concat(a)),s(_assertThisInitialized(t)),t}return _createClass(o)}();return{F:a,d:[{kind:"field",static:!0,key:"getMetaConfig",value:function(){return function(){return config}}},{kind:"field",static:!0,key:"styles",value:function(){return styles}},{kind:"field",decorators:[e({type:String})],key:"chartData",value:void 0},{kind:"field",decorators:[e({type:String})],key:"backgroundColor",value:void 0},{kind:"field",decorators:[e({type:String})],key:"datasetLabel",value:void 0},{kind:"field",key:"chartContainer",value:void 0},{kind:"field",key:"chartInstance",value:void 0},{kind:"method",key:"updated",value:function(t){_get(_getPrototypeOf(a.prototype),"updated",this).call(this,t),(t.has("chartData")||t.has("backgroundColor"))&&this.updateChart()}},{kind:"method",key:"updateChart",value:function(){var t,e=this.parseChartData();e&&0!==e.length&&(this.chartInstance&&this.chartInstance.destroy(),this.chartContainer=document.createElement("canvas"),null!=(t=this.shadowRoot)&&t.appendChild(this.chartContainer),this.chartInstance?(this.chartInstance.data.labels=e.map(function(t){return t.label}),this.chartInstance.data.datasets=[{label:this.datasetLabel,data:e.map(function(t){return t.value}),backgroundColor:this.backgroundColor?this.getCustomColors(e.length):this.getDefaultColors(e.length),borderColor:this.backgroundColor?this.getCustomColors(e.length):this.getDefaultColors(e.length),borderWidth:1}],this.chartInstance.update()):(Chart.register.apply(Chart,_toConsumableArray(registerables)),this.chartInstance=new Chart(this.chartContainer.getContext("2d"),{type:"bar",data:{labels:e.map(function(t){return t.label}),datasets:[{label:"Dataset Label",data:e.map(function(t){return t.value}),backgroundColor:this.backgroundColor?this.getCustomColors(e.length):this.getDefaultColors(e.length),borderColor:this.backgroundColor?this.getCustomColors(e.length):this.getDefaultColors(e.length),borderWidth:1}]},options:{plugins:{legend:{display:!1}}}})))}},{kind:"method",key:"getDefaultColors",value:function(t){var a=["#FF0000","#00FF00","#FFFF00","#0000FF"];return Array.from({length:t},function(t,e){return a[e%a.length]})}},{kind:"method",key:"getCustomColors",value:function(t){var a=this.backgroundColor.split(",").map(function(t){return t.trim()});return Array.from({length:t},function(t,e){return a[e%a.length]})}},{kind:"method",key:"parseChartData",value:function(){var t;try{t=JSON.parse(this.chartData)}catch(t){return console.error("Error parsing JSON:",t),null}return Array.isArray(t)&&0!==t.length?t:null}},{kind:"method",key:"render",value:function(){return x(_templateObject=_templateObject||_taggedTemplateLiteral([""]))}}]}},s);export{BarChart};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtYmFyLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9jaGFydC1iYXIvY2hhcnQtYmFyLmNvbmZpZy50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0LWJhci9jaGFydC1iYXIuc3R5bGVzLnRzIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvY2hhcnQtYmFyL2NoYXJ0LWJhci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIFBsdWdpbkNvbnRyYWN0IH0gZnJvbSAnQG5pbnRleC9mb3JtLXBsdWdpbi1jb250cmFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnOiBQbHVnaW5Db250cmFjdCA9IHtcclxuXHRjb250cm9sTmFtZTogJ19fcGx1Z2luQ29udHJvbE5hbWVfXycsXHJcblx0Z3JvdXBOYW1lOiAnX19wbHVnaW5Hcm91cE5hbWVfXycsXHJcblx0ZmFsbGJhY2tEaXNhYmxlU3VibWl0OiBmYWxzZSxcclxuXHRkZXNjcmlwdGlvbjogJ0NyZWF0ZXMgYSBCYXIgY2hhcnQnLFxyXG5cdHZlcnNpb246ICcxLjAnLFxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdGNoYXJ0RGF0YToge1xyXG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcclxuXHRcdFx0dGl0bGU6ICdEYXRhIEFycmF5JyxcclxuXHRcdH0sXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHtcclxuXHRcdFx0dHlwZTogJ3N0cmluZycsXHJcblx0XHRcdHRpdGxlOiAnQmFja2dyb3VuZCBDb2xvcicsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0ZXZlbnRzOiBbJ250eC12YWx1ZS1jaGFuZ2UnXSxcclxuXHRzdGFuZGFyZFByb3BlcnRpZXM6IHtcclxuXHRcdGZpZWxkTGFiZWw6IHRydWUsXHJcblx0XHRkZXNjcmlwdGlvbjogdHJ1ZSxcclxuXHRcdGRlZmF1bHRWYWx1ZTogdHJ1ZSxcclxuXHRcdHJlYWRPbmx5OiB0cnVlLFxyXG5cdFx0dmlzaWJpbGl0eTogdHJ1ZSxcclxuXHR9LFxyXG59O1xyXG4iLCJleHBvcnQgY29uc3Qgc3R5bGVzID0gW107XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cclxuaW1wb3J0IHsgdHlwZSBQbHVnaW5Db250cmFjdCB9IGZyb20gJ0BuaW50ZXgvZm9ybS1wbHVnaW4tY29udHJhY3QnO1xyXG5pbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcbmltcG9ydCB7IENoYXJ0LCByZWdpc3RlcmFibGVzIH0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NoYXJ0LWJhci5jb25maWcnO1xyXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuL2NoYXJ0LWJhci5zdHlsZXMnO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ3BsdWdpbi1lbGVtZW50bmFtZScpXHJcbmV4cG9ydCBjbGFzcyBCYXJDaGFydCBleHRlbmRzIExpdEVsZW1lbnQge1xyXG5cdHN0YXRpYyBnZXRNZXRhQ29uZmlnID0gKCk6IFByb21pc2U8UGx1Z2luQ29udHJhY3Q+IHwgUGx1Z2luQ29udHJhY3QgPT4gY29uZmlnO1xyXG5cclxuXHRzdGF0aWMgb3ZlcnJpZGUgc3R5bGVzID0gc3R5bGVzO1xyXG5cclxuXHRAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcclxuXHRkZWNsYXJlIGNoYXJ0RGF0YTogc3RyaW5nO1xyXG5cclxuXHRAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcclxuXHRkZWNsYXJlIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG5cclxuXHRAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcclxuXHRkZWNsYXJlIGRhdGFzZXRMYWJlbDogc3RyaW5nO1xyXG5cclxuXHRwcml2YXRlIGNoYXJ0Q29udGFpbmVyPzogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG5cdHByaXZhdGUgY2hhcnRJbnN0YW5jZT86IENoYXJ0PCdiYXInLCBudW1iZXJbXSwgdW5rbm93bj47XHJcblxyXG5cdG92ZXJyaWRlIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IE1hcDxrZXlvZiB0aGlzLCB1bmtub3duPik6IHZvaWQge1xyXG5cdFx0c3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XHJcblxyXG5cdFx0aWYgKFxyXG5cdFx0XHRjaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2NoYXJ0RGF0YScpIHx8XHJcblx0XHRcdGNoYW5nZWRQcm9wZXJ0aWVzLmhhcygnYmFja2dyb3VuZENvbG9yJylcclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZUNoYXJ0KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHVwZGF0ZUNoYXJ0KCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMucGFyc2VDaGFydERhdGEoKTtcclxuXHRcdGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQ2xlYXIgZXhpc3RpbmcgY2hhcnRcclxuXHRcdGlmICh0aGlzLmNoYXJ0SW5zdGFuY2UpIHtcclxuXHRcdFx0dGhpcy5jaGFydEluc3RhbmNlLmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBDcmVhdGUgYSBjYW52YXMgZWxlbWVudCBmb3IgdGhlIGNoYXJ0XHJcblx0XHR0aGlzLmNoYXJ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcblx0XHR0aGlzLnNoYWRvd1Jvb3Q/LmFwcGVuZENoaWxkKHRoaXMuY2hhcnRDb250YWluZXIpO1xyXG5cclxuXHRcdC8vIEluaXRpYWxpemUgQ2hhcnQuanMgaWYgbm90IGFscmVhZHkgZG9uZVxyXG5cdFx0aWYgKCF0aGlzLmNoYXJ0SW5zdGFuY2UpIHtcclxuXHRcdFx0Q2hhcnQucmVnaXN0ZXIoLi4ucmVnaXN0ZXJhYmxlcyk7XHJcblx0XHRcdHRoaXMuY2hhcnRJbnN0YW5jZSA9IG5ldyBDaGFydDwnYmFyJywgbnVtYmVyW10sIHVua25vd24+KFxyXG5cdFx0XHRcdHRoaXMuY2hhcnRDb250YWluZXIuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dHlwZTogJ2JhcicsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdGxhYmVsczogZGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0ubGFiZWwpLFxyXG5cdFx0XHRcdFx0XHRkYXRhc2V0czogW1xyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRGF0YXNldCBMYWJlbCcsIC8vIEFkanVzdCB0aGlzIGxhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhOiBkYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSksXHJcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yXHJcblx0XHRcdFx0XHRcdFx0XHRcdD8gdGhpcy5nZXRDdXN0b21Db2xvcnMoZGF0YS5sZW5ndGgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdDogdGhpcy5nZXREZWZhdWx0Q29sb3JzKGRhdGEubGVuZ3RoKSxcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlckNvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvclxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IHRoaXMuZ2V0Q3VzdG9tQ29sb3JzKGRhdGEubGVuZ3RoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IHRoaXMuZ2V0RGVmYXVsdENvbG9ycyhkYXRhLmxlbmd0aCksXHJcblx0XHRcdFx0XHRcdFx0XHRib3JkZXJXaWR0aDogMSxcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRcdFx0cGx1Z2luczoge1xyXG5cdFx0XHRcdFx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdH0sIC8vIEFkZCBhbnkgYWRkaXRpb25hbCBvcHRpb25zIGhlcmVcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBVcGRhdGUgdGhlIGNoYXJ0IGRhdGFcclxuXHRcdFx0dGhpcy5jaGFydEluc3RhbmNlLmRhdGEubGFiZWxzID0gZGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0ubGFiZWwpO1xyXG5cdFx0XHR0aGlzLmNoYXJ0SW5zdGFuY2UuZGF0YS5kYXRhc2V0cyA9IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsYWJlbDogdGhpcy5kYXRhc2V0TGFiZWwsXHJcblx0XHRcdFx0XHRkYXRhOiBkYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSksXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yXHJcblx0XHRcdFx0XHRcdD8gdGhpcy5nZXRDdXN0b21Db2xvcnMoZGF0YS5sZW5ndGgpXHJcblx0XHRcdFx0XHRcdDogdGhpcy5nZXREZWZhdWx0Q29sb3JzKGRhdGEubGVuZ3RoKSxcclxuXHRcdFx0XHRcdGJvcmRlckNvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvclxyXG5cdFx0XHRcdFx0XHQ/IHRoaXMuZ2V0Q3VzdG9tQ29sb3JzKGRhdGEubGVuZ3RoKVxyXG5cdFx0XHRcdFx0XHQ6IHRoaXMuZ2V0RGVmYXVsdENvbG9ycyhkYXRhLmxlbmd0aCksXHJcblx0XHRcdFx0XHRib3JkZXJXaWR0aDogMSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdO1xyXG5cdFx0XHR0aGlzLmNoYXJ0SW5zdGFuY2UudXBkYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xyXG5cdHByaXZhdGUgZ2V0RGVmYXVsdENvbG9ycyhjb3VudDogbnVtYmVyKTogc3RyaW5nW10ge1xyXG5cdFx0Ly8gWW91IGNhbiBjdXN0b21pemUgdGhpcyBhcnJheSB3aXRoIHlvdXIgZGVmYXVsdCBjb2xvcnNcclxuXHRcdGNvbnN0IGRlZmF1bHRDb2xvcnMgPSBbJyNGRjAwMDAnLCAnIzAwRkYwMCcsICcjRkZGRjAwJywgJyMwMDAwRkYnXTtcclxuXHRcdC8vIFJlcGVhdCB0aGUgZGVmYXVsdCBjb2xvcnMgaWYgdGhlcmUgYXJlIG1vcmUgZGF0YSBwb2ludHMgdGhhbiBjb2xvcnNcclxuXHRcdHJldHVybiBBcnJheS5mcm9tKFxyXG5cdFx0XHR7IGxlbmd0aDogY291bnQgfSxcclxuXHRcdFx0KF8sIGluZGV4KSA9PiBkZWZhdWx0Q29sb3JzW2luZGV4ICUgZGVmYXVsdENvbG9ycy5sZW5ndGhdXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRDdXN0b21Db2xvcnMoY291bnQ6IG51bWJlcik6IHN0cmluZ1tdIHtcclxuXHRcdGNvbnN0IHRlbXAgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcclxuXHRcdGNvbnN0IGRlZmF1bHRDb2xvcnMgPSB0ZW1wLnNwbGl0KCcsJykubWFwKChjb2xvcikgPT4gY29sb3IudHJpbSgpKTtcclxuXHRcdC8vIFJlcGVhdCB0aGUgZGVmYXVsdCBjb2xvcnMgaWYgdGhlcmUgYXJlIG1vcmUgZGF0YSBwb2ludHMgdGhhbiBjb2xvcnNcclxuXHRcdHJldHVybiBBcnJheS5mcm9tKFxyXG5cdFx0XHR7IGxlbmd0aDogY291bnQgfSxcclxuXHRcdFx0KF8sIGluZGV4KSA9PiBkZWZhdWx0Q29sb3JzW2luZGV4ICUgZGVmYXVsdENvbG9ycy5sZW5ndGhdXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwYXJzZUNoYXJ0RGF0YSgpOiB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfVtdIHwgbnVsbCB7XHJcblx0XHRsZXQgZGF0YTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuY2hhcnREYXRhKTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBhcnNpbmcgSlNPTjonLCBlcnJvcik7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghQXJyYXkuaXNBcnJheShkYXRhKSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBBc3N1bWluZyB5b3VyIEpTT04gaGFzIGEgc3RydWN0dXJlIGxpa2UgW3sgbGFiZWw6ICdBJywgdmFsdWU6IDEwIH0sIHsgbGFiZWw6ICdCJywgdmFsdWU6IDIwIH0sIC4uLl1cclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH1cclxuXHJcblx0b3ZlcnJpZGUgcmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIGh0bWxgYDtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbmZpZyIsImNvbnRyb2xOYW1lIiwiZ3JvdXBOYW1lIiwiZmFsbGJhY2tEaXNhYmxlU3VibWl0IiwiZGVzY3JpcHRpb24iLCJ2ZXJzaW9uIiwicHJvcGVydGllcyIsImNoYXJ0RGF0YSIsInR5cGUiLCJ0aXRsZSIsImJhY2tncm91bmRDb2xvciIsImV2ZW50cyIsInN0YW5kYXJkUHJvcGVydGllcyIsImZpZWxkTGFiZWwiLCJkZWZhdWx0VmFsdWUiLCJyZWFkT25seSIsInZpc2liaWxpdHkiLCJzdHlsZXMiLCJCYXJDaGFydCIsIl9kZWNvcmF0ZSIsImN1c3RvbUVsZW1lbnQiLCJfaW5pdGlhbGl6ZSIsIl9MaXRFbGVtZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsInRoaXMiLCJjb25jYXQiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiX2NyZWF0ZUNsYXNzIiwiRiIsImQiLCJraW5kIiwic3RhdGljIiwia2V5IiwidmFsdWUiLCJkZWNvcmF0b3JzIiwicHJvcGVydHkiLCJTdHJpbmciLCJjaGFuZ2VkUHJvcGVydGllcyIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJoYXMiLCJ1cGRhdGVDaGFydCIsIl90aGlzJHNoYWRvd1Jvb3QiLCJkYXRhIiwicGFyc2VDaGFydERhdGEiLCJjaGFydEluc3RhbmNlIiwiZGVzdHJveSIsImNoYXJ0Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2hhZG93Um9vdCIsImFwcGVuZENoaWxkIiwibGFiZWxzIiwibWFwIiwiaXRlbSIsImxhYmVsIiwiZGF0YXNldHMiLCJkYXRhc2V0TGFiZWwiLCJnZXRDdXN0b21Db2xvcnMiLCJnZXREZWZhdWx0Q29sb3JzIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsInVwZGF0ZSIsIkNoYXJ0IiwicmVnaXN0ZXIiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJyZWdpc3RlcmFibGVzIiwiZ2V0Q29udGV4dCIsIm9wdGlvbnMiLCJwbHVnaW5zIiwibGVnZW5kIiwiZGlzcGxheSIsImNvdW50IiwiZGVmYXVsdENvbG9ycyIsImZyb20iLCJfIiwiaW5kZXgiLCJzcGxpdCIsImNvbG9yIiwidHJpbSIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwiY29uc29sZSIsImlzQXJyYXkiLCJodG1sIiwiX3RlbXBsYXRlT2JqZWN0IiwiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCIsIkxpdEVsZW1lbnQiXSwibWFwcGluZ3MiOiJvUkFFTyxvQkFBTUEsT0FBeUIsQ0FD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
