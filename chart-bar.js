import{_ as _decorate,s,e,a as _get,b as _getPrototypeOf,C as Chart,c as _toConsumableArray,x,d as _taggedTemplateLiteral,f as e$1,g as _inherits,h as _createSuper,i as _createClass,j as _classCallCheck,k as _assertThisInitialized,r as registerables}from"./chart-48d074a4.js";var _templateObject,config={controlName:"chart-bar",groupName:"Charts",fallbackDisableSubmit:!1,description:"Creates a Bar chart",version:"1.0",properties:{chartData:{type:"string",title:"Data Array"},backgroundColor:{type:"string",title:"Background Color in comma separated format"}},events:["ntx-value-change"],standardProperties:{fieldLabel:!0,description:!0,defaultValue:!0,readOnly:!0,visibility:!0}},styles=[],BarChart=_decorate([e$1("chart-bar")],function(s,t){var a=function(){_inherits(o,t);var n=_createSuper(o);function o(){var t;_classCallCheck(this,o);for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return t=n.call.apply(n,[this].concat(a)),s(_assertThisInitialized(t)),t}return _createClass(o)}();return{F:a,d:[{kind:"field",static:!0,key:"getMetaConfig",value:function(){return function(){return config}}},{kind:"field",static:!0,key:"styles",value:function(){return styles}},{kind:"field",decorators:[e({type:String})],key:"chartData",value:void 0},{kind:"field",decorators:[e({type:String})],key:"backgroundColor",value:void 0},{kind:"field",decorators:[e({type:String})],key:"datasetLabel",value:void 0},{kind:"field",key:"chartContainer",value:void 0},{kind:"field",key:"chartInstance",value:void 0},{kind:"method",key:"updated",value:function(t){_get(_getPrototypeOf(a.prototype),"updated",this).call(this,t),(t.has("chartData")||t.has("backgroundColor"))&&this.updateChart()}},{kind:"method",key:"updateChart",value:function(){var t,e=this.parseChartData();e&&0!==e.length&&(this.chartInstance&&this.chartInstance.destroy(),this.chartContainer=document.createElement("canvas"),null!=(t=this.shadowRoot)&&t.appendChild(this.chartContainer),this.chartInstance?(this.chartInstance.data.labels=e.map(function(t){return t.label}),this.chartInstance.data.datasets=[{label:this.datasetLabel,data:e.map(function(t){return t.value}),backgroundColor:this.backgroundColor?this.getCustomColors(e.length):this.getDefaultColors(e.length),borderColor:this.backgroundColor?this.getCustomColors(e.length):this.getDefaultColors(e.length),borderWidth:1}],this.chartInstance.update()):(Chart.register.apply(Chart,_toConsumableArray(registerables)),this.chartInstance=new Chart(this.chartContainer.getContext("2d"),{type:"bar",data:{labels:e.map(function(t){return t.label}),datasets:[{label:"Dataset Label",data:e.map(function(t){return t.value}),backgroundColor:this.backgroundColor?this.getCustomColors(e.length):this.getDefaultColors(e.length),borderColor:this.backgroundColor?this.getCustomColors(e.length):this.getDefaultColors(e.length),borderWidth:1}]},options:{plugins:{legend:{display:!1}}}})))}},{kind:"method",key:"getDefaultColors",value:function(t){var a=["#FF0000","#00FF00","#FFFF00","#0000FF"];return Array.from({length:t},function(t,e){return a[e%a.length]})}},{kind:"method",key:"getCustomColors",value:function(t){var a=this.backgroundColor.split(",").map(function(t){return t.trim()});return Array.from({length:t},function(t,e){return a[e%a.length]})}},{kind:"method",key:"parseChartData",value:function(){var t;try{t=JSON.parse(this.chartData)}catch(t){return console.error("Error parsing JSON:",t),null}return Array.isArray(t)&&0!==t.length?t:null}},{kind:"method",key:"render",value:function(){return x(_templateObject=_templateObject||_taggedTemplateLiteral([""]))}}]}},s);export{BarChart};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtYmFyLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9jaGFydC1iYXIvY2hhcnQtYmFyLmNvbmZpZy50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0LWJhci9jaGFydC1iYXIuc3R5bGVzLnRzIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvY2hhcnQtYmFyL2NoYXJ0LWJhci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIFBsdWdpbkNvbnRyYWN0IH0gZnJvbSAnQG5pbnRleC9mb3JtLXBsdWdpbi1jb250cmFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnOiBQbHVnaW5Db250cmFjdCA9IHtcclxuXHRjb250cm9sTmFtZTogJ19fcGx1Z2luQ29udHJvbE5hbWVfXycsXHJcblx0Z3JvdXBOYW1lOiAnX19wbHVnaW5Hcm91cE5hbWVfXycsXHJcblx0ZmFsbGJhY2tEaXNhYmxlU3VibWl0OiBmYWxzZSxcclxuXHRkZXNjcmlwdGlvbjogJ0NyZWF0ZXMgYSBCYXIgY2hhcnQnLFxyXG5cdHZlcnNpb246ICcxLjAnLFxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdGNoYXJ0RGF0YToge1xyXG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcclxuXHRcdFx0dGl0bGU6ICdEYXRhIEFycmF5JyxcclxuXHRcdH0sXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHtcclxuXHRcdFx0dHlwZTogJ3N0cmluZycsXHJcblx0XHRcdHRpdGxlOiAnQmFja2dyb3VuZCBDb2xvciBpbiBjb21tYSBzZXBhcmF0ZWQgZm9ybWF0JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRldmVudHM6IFsnbnR4LXZhbHVlLWNoYW5nZSddLFxyXG5cdHN0YW5kYXJkUHJvcGVydGllczoge1xyXG5cdFx0ZmllbGRMYWJlbDogdHJ1ZSxcclxuXHRcdGRlc2NyaXB0aW9uOiB0cnVlLFxyXG5cdFx0ZGVmYXVsdFZhbHVlOiB0cnVlLFxyXG5cdFx0cmVhZE9ubHk6IHRydWUsXHJcblx0XHR2aXNpYmlsaXR5OiB0cnVlLFxyXG5cdH0sXHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBzdHlsZXMgPSBbXTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcyAqL1xyXG5pbXBvcnQgeyB0eXBlIFBsdWdpbkNvbnRyYWN0IH0gZnJvbSAnQG5pbnRleC9mb3JtLXBsdWdpbi1jb250cmFjdCc7XHJcbmltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcclxuaW1wb3J0IHsgQ2hhcnQsIHJlZ2lzdGVyYWJsZXMgfSBmcm9tICdjaGFydC5qcyc7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY2hhcnQtYmFyLmNvbmZpZyc7XHJcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vY2hhcnQtYmFyLnN0eWxlcyc7XHJcblxyXG5AY3VzdG9tRWxlbWVudCgncGx1Z2luLWVsZW1lbnRuYW1lJylcclxuZXhwb3J0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcblx0c3RhdGljIGdldE1ldGFDb25maWcgPSAoKTogUHJvbWlzZTxQbHVnaW5Db250cmFjdD4gfCBQbHVnaW5Db250cmFjdCA9PiBjb25maWc7XHJcblxyXG5cdHN0YXRpYyBvdmVycmlkZSBzdHlsZXMgPSBzdHlsZXM7XHJcblxyXG5cdEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxyXG5cdGRlY2xhcmUgY2hhcnREYXRhOiBzdHJpbmc7XHJcblxyXG5cdEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxyXG5cdGRlY2xhcmUgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcblxyXG5cdEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxyXG5cdGRlY2xhcmUgZGF0YXNldExhYmVsOiBzdHJpbmc7XHJcblxyXG5cdHByaXZhdGUgY2hhcnRDb250YWluZXI/OiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcblx0cHJpdmF0ZSBjaGFydEluc3RhbmNlPzogQ2hhcnQ8J2JhcicsIG51bWJlcltdLCB1bmtub3duPjtcclxuXHJcblx0b3ZlcnJpZGUgdXBkYXRlZChjaGFuZ2VkUHJvcGVydGllczogTWFwPGtleW9mIHRoaXMsIHVua25vd24+KTogdm9pZCB7XHJcblx0XHRzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcclxuXHJcblx0XHRpZiAoXHJcblx0XHRcdGNoYW5nZWRQcm9wZXJ0aWVzLmhhcygnY2hhcnREYXRhJykgfHxcclxuXHRcdFx0Y2hhbmdlZFByb3BlcnRpZXMuaGFzKCdiYWNrZ3JvdW5kQ29sb3InKVxyXG5cdFx0KSB7XHJcblx0XHRcdHRoaXMudXBkYXRlQ2hhcnQoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgdXBkYXRlQ2hhcnQoKSB7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy5wYXJzZUNoYXJ0RGF0YSgpO1xyXG5cdFx0aWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBDbGVhciBleGlzdGluZyBjaGFydFxyXG5cdFx0aWYgKHRoaXMuY2hhcnRJbnN0YW5jZSkge1xyXG5cdFx0XHR0aGlzLmNoYXJ0SW5zdGFuY2UuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIENyZWF0ZSBhIGNhbnZhcyBlbGVtZW50IGZvciB0aGUgY2hhcnRcclxuXHRcdHRoaXMuY2hhcnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHRcdHRoaXMuc2hhZG93Um9vdD8uYXBwZW5kQ2hpbGQodGhpcy5jaGFydENvbnRhaW5lcik7XHJcblxyXG5cdFx0Ly8gSW5pdGlhbGl6ZSBDaGFydC5qcyBpZiBub3QgYWxyZWFkeSBkb25lXHJcblx0XHRpZiAoIXRoaXMuY2hhcnRJbnN0YW5jZSkge1xyXG5cdFx0XHRDaGFydC5yZWdpc3RlciguLi5yZWdpc3RlcmFibGVzKTtcclxuXHRcdFx0dGhpcy5jaGFydEluc3RhbmNlID0gbmV3IENoYXJ0PCdiYXInLCBudW1iZXJbXSwgdW5rbm93bj4oXHJcblx0XHRcdFx0dGhpcy5jaGFydENvbnRhaW5lci5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0eXBlOiAnYmFyJyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0bGFiZWxzOiBkYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5sYWJlbCksXHJcblx0XHRcdFx0XHRcdGRhdGFzZXRzOiBbXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdEYXRhc2V0IExhYmVsJywgLy8gQWRqdXN0IHRoaXMgbGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGE6IGRhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKSxcclxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3JcclxuXHRcdFx0XHRcdFx0XHRcdFx0PyB0aGlzLmdldEN1c3RvbUNvbG9ycyhkYXRhLmxlbmd0aClcclxuXHRcdFx0XHRcdFx0XHRcdFx0OiB0aGlzLmdldERlZmF1bHRDb2xvcnMoZGF0YS5sZW5ndGgpLFxyXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yXHJcblx0XHRcdFx0XHRcdFx0XHRcdD8gdGhpcy5nZXRDdXN0b21Db2xvcnMoZGF0YS5sZW5ndGgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdDogdGhpcy5nZXREZWZhdWx0Q29sb3JzKGRhdGEubGVuZ3RoKSxcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlcldpZHRoOiAxLFxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdFx0XHRwbHVnaW5zOiB7XHJcblx0XHRcdFx0XHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fSwgLy8gQWRkIGFueSBhZGRpdGlvbmFsIG9wdGlvbnMgaGVyZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIFVwZGF0ZSB0aGUgY2hhcnQgZGF0YVxyXG5cdFx0XHR0aGlzLmNoYXJ0SW5zdGFuY2UuZGF0YS5sYWJlbHMgPSBkYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5sYWJlbCk7XHJcblx0XHRcdHRoaXMuY2hhcnRJbnN0YW5jZS5kYXRhLmRhdGFzZXRzID0gW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxhYmVsOiB0aGlzLmRhdGFzZXRMYWJlbCxcclxuXHRcdFx0XHRcdGRhdGE6IGRhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKSxcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3JcclxuXHRcdFx0XHRcdFx0PyB0aGlzLmdldEN1c3RvbUNvbG9ycyhkYXRhLmxlbmd0aClcclxuXHRcdFx0XHRcdFx0OiB0aGlzLmdldERlZmF1bHRDb2xvcnMoZGF0YS5sZW5ndGgpLFxyXG5cdFx0XHRcdFx0Ym9yZGVyQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yXHJcblx0XHRcdFx0XHRcdD8gdGhpcy5nZXRDdXN0b21Db2xvcnMoZGF0YS5sZW5ndGgpXHJcblx0XHRcdFx0XHRcdDogdGhpcy5nZXREZWZhdWx0Q29sb3JzKGRhdGEubGVuZ3RoKSxcclxuXHRcdFx0XHRcdGJvcmRlcldpZHRoOiAxLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF07XHJcblx0XHRcdHRoaXMuY2hhcnRJbnN0YW5jZS51cGRhdGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXHJcblx0cHJpdmF0ZSBnZXREZWZhdWx0Q29sb3JzKGNvdW50OiBudW1iZXIpOiBzdHJpbmdbXSB7XHJcblx0XHQvLyBZb3UgY2FuIGN1c3RvbWl6ZSB0aGlzIGFycmF5IHdpdGggeW91ciBkZWZhdWx0IGNvbG9yc1xyXG5cdFx0Y29uc3QgZGVmYXVsdENvbG9ycyA9IFsnI0ZGMDAwMCcsICcjMDBGRjAwJywgJyNGRkZGMDAnLCAnIzAwMDBGRiddO1xyXG5cdFx0Ly8gUmVwZWF0IHRoZSBkZWZhdWx0IGNvbG9ycyBpZiB0aGVyZSBhcmUgbW9yZSBkYXRhIHBvaW50cyB0aGFuIGNvbG9yc1xyXG5cdFx0cmV0dXJuIEFycmF5LmZyb20oXHJcblx0XHRcdHsgbGVuZ3RoOiBjb3VudCB9LFxyXG5cdFx0XHQoXywgaW5kZXgpID0+IGRlZmF1bHRDb2xvcnNbaW5kZXggJSBkZWZhdWx0Q29sb3JzLmxlbmd0aF1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldEN1c3RvbUNvbG9ycyhjb3VudDogbnVtYmVyKTogc3RyaW5nW10ge1xyXG5cdFx0Y29uc3QgdGVtcCA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG5cdFx0Y29uc3QgZGVmYXVsdENvbG9ycyA9IHRlbXAuc3BsaXQoJywnKS5tYXAoKGNvbG9yKSA9PiBjb2xvci50cmltKCkpO1xyXG5cdFx0Ly8gUmVwZWF0IHRoZSBkZWZhdWx0IGNvbG9ycyBpZiB0aGVyZSBhcmUgbW9yZSBkYXRhIHBvaW50cyB0aGFuIGNvbG9yc1xyXG5cdFx0cmV0dXJuIEFycmF5LmZyb20oXHJcblx0XHRcdHsgbGVuZ3RoOiBjb3VudCB9LFxyXG5cdFx0XHQoXywgaW5kZXgpID0+IGRlZmF1bHRDb2xvcnNbaW5kZXggJSBkZWZhdWx0Q29sb3JzLmxlbmd0aF1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBhcnNlQ2hhcnREYXRhKCk6IHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9W10gfCBudWxsIHtcclxuXHRcdGxldCBkYXRhO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0ZGF0YSA9IEpTT04ucGFyc2UodGhpcy5jaGFydERhdGEpO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3IgcGFyc2luZyBKU09OOicsIGVycm9yKTtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGRhdGEpIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEFzc3VtaW5nIHlvdXIgSlNPTiBoYXMgYSBzdHJ1Y3R1cmUgbGlrZSBbeyBsYWJlbDogJ0EnLCB2YWx1ZTogMTAgfSwgeyBsYWJlbDogJ0InLCB2YWx1ZTogMjAgfSwgLi4uXVxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG5cclxuXHRvdmVycmlkZSByZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gaHRtbGBgO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsiY29uZmlnIiwiY29udHJvbE5hbWUiLCJncm91cE5hbWUiLCJmYWxsYmFja0Rpc2FibGVTdWJtaXQiLCJkZXNjcmlwdGlvbiIsInZlcnNpb24iLCJwcm9wZXJ0aWVzIiwiY2hhcnREYXRhIiwidHlwZSIsInRpdGxlIiwiYmFja2dyb3VuZENvbG9yIiwiZXZlbnRzIiwic3RhbmRhcmRQcm9wZXJ0aWVzIiwiZmllbGRMYWJlbCIsImRlZmF1bHRWYWx1ZSIsInJlYWRPbmx5IiwidmlzaWJpbGl0eSIsInN0eWxlcyIsIkJhckNoYXJ0IiwiX2RlY29yYXRlIiwiY3VzdG9tRWxlbWVudCIsIl9pbml0aWFsaXplIiwiX0xpdEVsZW1lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwidGhpcyIsImNvbmNhdCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJfY3JlYXRlQ2xhc3MiLCJGIiwiZCIsImtpbmQiLCJzdGF0aWMiLCJrZXkiLCJ2YWx1ZSIsImRlY29yYXRvcnMiLCJwcm9wZXJ0eSIsIlN0cmluZyIsImNoYW5nZWRQcm9wZXJ0aWVzIiwiX2dldCIsIl9nZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsImhhcyIsInVwZGF0ZUNoYXJ0IiwiX3RoaXMkc2hhZG93Um9vdCIsImRhdGEiLCJwYXJzZUNoYXJ0RGF0YSIsImNoYXJ0SW5zdGFuY2UiLCJkZXN0cm95IiwiY2hhcnRDb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzaGFkb3dSb290IiwiYXBwZW5kQ2hpbGQiLCJsYWJlbHMiLCJtYXAiLCJpdGVtIiwibGFiZWwiLCJkYXRhc2V0cyIsImRhdGFzZXRMYWJlbCIsImdldEN1c3RvbUNvbG9ycyIsImdldERlZmF1bHRDb2xvcnMiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwidXBkYXRlIiwiQ2hhcnQiLCJyZWdpc3RlciIsIl90b0NvbnN1bWFibGVBcnJheSIsInJlZ2lzdGVyYWJsZXMiLCJnZXRDb250ZXh0Iiwib3B0aW9ucyIsInBsdWdpbnMiLCJsZWdlbmQiLCJkaXNwbGF5IiwiY291bnQiLCJkZWZhdWx0Q29sb3JzIiwiZnJvbSIsIl8iLCJpbmRleCIsInNwbGl0IiwiY29sb3IiLCJ0cmltIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJjb25zb2xlIiwiaXNBcnJheSIsImh0bWwiLCJfdGVtcGxhdGVPYmplY3QiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwiTGl0RWxlbWVudCJdLCJtYXBwaW5n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
