require("source-map-support").install(),exports.ids=[3],exports.modules={18:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LOAD_POSTS_REQUEST="LOAD_POSTS_REQUEST",t.LOAD_POSTS_SUCCESS="LOAD_POSTS_SUCCESS",t.LOAD_POSTS_FAILURE="LOAD_POSTS_FAILURE",t.LOAD_POST_REQUEST="LOAD_POST_REQUEST",t.LOAD_POST_SUCCESS="LOAD_POST_SUCCESS",t.LOAD_POST_FAILURE="LOAD_POST_FAILURE"},32:function(e,t,r){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1];switch(t.type){case l.LOAD_POST_REQUEST:return a({},e,{isLoading:!0,error:null});case l.LOAD_POST_SUCCESS:return a({},e,{title:t.payload.title,content:t.payload.content,lastFetched:t.meta.lastFetched,isLoading:!1});case l.LOAD_POST_FAILURE:return a({},e,{error:t.payload});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.selectCurrentPost=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};t.default=n;var i=r(18),l=o(i),u={lastFetched:null,isLoading:!1,error:null,title:"",content:""};t.selectCurrentPost=function(e){return e.currentPost}},63:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,o,n){var a=t&&t.defaultProps,i=arguments.length-3;if(r||0===i||(r={}),r&&a)for(var l in a)void 0===r[l]&&(r[l]=a[l]);else r||(r=a||{});if(1===i)r.children=n;else if(i>1){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+3];r.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}}(),a=r(60),i=r(7),l=(o(i),r(59)),u=r(103),c=r(17),s=r(27),S=o(s),d=r(61),_=o(d),f=r(32),O={fetch:function(e){var t=e.dispatch,r=e.params.slug;return t((0,u.loadPost)(r))}},p=function(e){return(0,f.selectCurrentPost)(e)},v=n(_.default,{}),P=function(e){var t=e.title,r=e.content,o=e.isLoading,a=e.error;return a?v:n("div",{},void 0,n(S.default,{title:t}),o&&n("div",{},void 0,n("h2",{className:(0,c.css)(L.loading)},void 0,"Loading....")),!o&&n("div",{},void 0,n("h2",{className:(0,c.css)(L.title)},void 0,t),n("p",{className:(0,c.css)(L.content)},void 0,r)))},L=c.StyleSheet.create({content:{fontSize:"1rem",lineHeight:"1.5",margin:"1rem 0",color:"#555"},title:{fontSize:28,margin:"0 auto 1.5rem",color:"#000"},loading:{fontSize:28,margin:"0 auto 1.5rem",color:"#b7b7b7"}});t.default=(0,a.provideHooks)(O)((0,l.connect)(p)(P))},103:function(e,t,r){"use strict";function o(e){return function(t,r,o){var a=o.axios,i=r().sourceRequest,l=i.protocol,u=i.host;return t({type:n.LOAD_POST_REQUEST}),a.get(l+"://"+u+"/api/v0/posts/"+e).then(function(e){t({type:n.LOAD_POST_SUCCESS,payload:e.data,meta:{lastFetched:Date.now()}})}).catch(function(e){console.error("Error in reducer that handles "+n.LOAD_POST_SUCCESS+": ",e),t({type:n.LOAD_POST_FAILURE,payload:e,error:!0})})}}Object.defineProperty(t,"__esModule",{value:!0}),t.loadPost=o;var n=r(18)}};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vMy5zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbnN0YW50cy5qcz9lMTRiIiwid2VicGFjazovLy8uL2NvbW1vbi9yb3V0ZXMvUG9zdC9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2NvbW1vbi9yb3V0ZXMvUG9zdC9jb250YWluZXJzL1Bvc3RQYWdlLmpzIiwid2VicGFjazovLy8uL2NvbW1vbi9yb3V0ZXMvUG9zdC9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJpbnN0YWxsIiwiZXhwb3J0cyIsImlkcyIsIm1vZHVsZXMiLCIxOCIsIm1vZHVsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCIzMiIsIl9fd2VicGFja19yZXF1aXJlX18iLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJuZXdPYmoiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZWZhdWx0IiwiY3VycmVudFBvc3QiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImluaXRpYWxTdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0eXBlcyIsIl9leHRlbmRzIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJ0aXRsZSIsInBheWxvYWQiLCJjb250ZW50IiwibGFzdEZldGNoZWQiLCJtZXRhIiwic2VsZWN0Q3VycmVudFBvc3QiLCJhc3NpZ24iLCJ0YXJnZXQiLCJpIiwic291cmNlIiwiX2NvbnN0YW50cyIsIjYzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9qc3giLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJTeW1ib2wiLCJmb3IiLCJwcm9wcyIsImNoaWxkcmVuIiwiZGVmYXVsdFByb3BzIiwiY2hpbGRyZW5MZW5ndGgiLCJwcm9wTmFtZSIsImNoaWxkQXJyYXkiLCJBcnJheSIsIiQkdHlwZW9mIiwicmVmIiwiX293bmVyIiwiX3JlZGlhbCIsIl9yZWFjdCIsIl9yZWFjdFJlZHV4IiwiX2FjdGlvbnMiLCJfYXBocm9kaXRlIiwiX3JlYWN0SGVsbWV0IiwiX3JlYWN0SGVsbWV0MiIsIl9Ob3RGb3VuZCIsIl9Ob3RGb3VuZDIiLCJfcmVkdWNlciIsInJlZGlhbCIsImZldGNoIiwiX3JlZiIsImRpc3BhdGNoIiwic2x1ZyIsInBhcmFtcyIsImxvYWRQb3N0IiwibWFwU3RhdGVUb1Byb3BzIiwiX3JlZjMiLCJQb3N0UGFnZSIsIl9yZWYyIiwiY2xhc3NOYW1lIiwiY3NzIiwic3R5bGVzIiwibG9hZGluZyIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJtYXJnaW4iLCJjb2xvciIsInByb3ZpZGVIb29rcyIsImNvbm5lY3QiLCIxMDMiLCJnZXRTdGF0ZSIsImF4aW9zIiwiX2dldFN0YXRlJHNvdXJjZVJlcXVlIiwic291cmNlUmVxdWVzdCIsInByb3RvY29sIiwiaG9zdCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiRGF0ZSIsIm5vdyIsImNhdGNoIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsc0JBQXNCQyxVQUM5QkMsUUFBUUMsS0FBTyxHQUNmRCxRQUFRRSxTQUVGQyxHQUNBLFNBQVNDLEVBQVFKLEdBRXRCLFlBRUFLLFFBQU9DLGVBQWVOLEVBQVMsY0FDN0JPLFdDVFVDLHFCQUFxQixxQkFDckJDLHFCQUFxQixxQkFDckJDLHFCQUFxQixxQkFHckJDLG9CQUFvQixvQkFDcEJDLG9CQUFvQixvQkFDcEJDLG9CQUFvQixxQkRnQjNCQyxHQUNBLFNBQVNWLEVBQVFKLEVBQVNlLEdBRS9CLFlBZUEsU0FBU0MsR0FBd0JDLEdBQU8sR0FBSUEsR0FBT0EsRUFBSUMs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U0FBU2lFLEdBQVVGLEdBQ3hCLE1BQU8sVUFBQ0QsRUFBVXFCLEVBQVh0QixHQUFtQyxHQUFadUIsR0FBWXZCLEVBQVp1QixNQUFZQyxFQUNiRixJQUFXRyxjQUE5QkMsRUFEZ0NGLEVBQ2hDRSxTQUFVQyxFQURzQkgsRUFDdEJHLElBRWxCLE9BREExQixJQUFXN0MsMkJBQ0ptRSxFQUFNSyxJQUFPRixFQUFiLE1BQTJCQyxFQUEzQixpQkFBZ0R6QixHQUNwRDJCLEtBQUssU0FBQUMsR0FDSjdCLEdBQ0U3Qyx5QkFDQU0sUUFBU29FLEVBQUlDLEtBQ2JsRSxNQUNFRCxZQUFhb0UsS0FBS0MsV0FJdkJDLE1BQU0sU0FBQTFFLEdBQ0wyRSxRQUFRM0UsTUFBUixpQ0FBQVcsRUFBQW5DLGtCQUFBLEtBQXNFd0IsR0FDdEV5QyxHQUNFN0MseUJBQ0FNLFFBQVNGLEVBQ1RBLGNKZ0tUL0IsT0FBT0MsZUFBZU4sRUFBUyxjQUM3Qk8sV0FFRlAsRUl0TGVnRixVQUZoQixJQUFBakMsR0FBQWhDLEVBQUEiLCJmaWxlIjoiMy5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKFwic291cmNlLW1hcC1zdXBwb3J0XCIpLmluc3RhbGwoKTtcbmV4cG9ydHMuaWRzID0gWzNdO1xuZXhwb3J0cy5tb2R1bGVzID0ge1xuXG4vKioqLyAxODpcbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHQvLyBQb3N0c1xuXHR2YXIgTE9BRF9QT1NUU19SRVFVRVNUID0gZXhwb3J0cy5MT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcblx0dmFyIExPQURfUE9TVFNfU1VDQ0VTUyA9IGV4cG9ydHMuTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XG5cdHZhciBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBleHBvcnRzLkxPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xuXHRcblx0Ly8gU2luZ2xlIFBvc3Rcblx0dmFyIExPQURfUE9TVF9SRVFVRVNUID0gZXhwb3J0cy5MT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XG5cdHZhciBMT0FEX1BPU1RfU1VDQ0VTUyA9IGV4cG9ydHMuTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnO1xuXHR2YXIgTE9BRF9QT1NUX0ZBSUxVUkUgPSBleHBvcnRzLkxPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJztcblxuLyoqKi8gfSxcblxuLyoqKi8gMzI6XG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0ZXhwb3J0cy5zZWxlY3RDdXJyZW50UG9zdCA9IHVuZGVmaW5lZDtcblx0XG5cdHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBjdXJyZW50UG9zdDtcblx0XG5cdHZhciBfY29uc3RhbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG5cdFxuXHR2YXIgdHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY29uc3RhbnRzKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cdFxuXHR2YXIgaW5pdGlhbFN0YXRlID0ge1xuXHQgIGxhc3RGZXRjaGVkOiBudWxsLFxuXHQgIGlzTG9hZGluZzogZmFsc2UsXG5cdCAgZXJyb3I6IG51bGwsXG5cdCAgdGl0bGU6ICcnLFxuXHQgIGNvbnRlbnQ6ICcnXG5cdH07XG5cdFxuXHRmdW5jdGlvbiBjdXJyZW50UG9zdCgpIHtcblx0ICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGluaXRpYWxTdGF0ZTtcblx0ICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXHRcblx0ICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdCAgICBjYXNlIHR5cGVzLkxPQURfUE9TVF9SRVFVRVNUOlxuXHQgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG5cdCAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuXHQgICAgICAgIGVycm9yOiBudWxsIH0pO1xuXHQgICAgY2FzZSB0eXBlcy5MT0FEX1BPU1RfU1VDQ0VTUzpcblx0ICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuXHQgICAgICAgIHRpdGxlOiBhY3Rpb24ucGF5bG9hZC50aXRsZSxcblx0ICAgICAgICBjb250ZW50OiBhY3Rpb24ucGF5bG9hZC5jb250ZW50LFxuXHQgICAgICAgIGxhc3RGZXRjaGVkOiBhY3Rpb24ubWV0YS5sYXN0RmV0Y2hlZCxcblx0ICAgICAgICBpc0xvYWRpbmc6IGZhbHNlIH0pO1xuXHQgICAgY2FzZSB0eXBlcy5MT0FEX1BPU1RfRkFJTFVSRTpcblx0ICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuXHQgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZCB9KTtcblx0ICAgIGRlZmF1bHQ6XG5cdCAgICAgIHJldHVybiBzdGF0ZTtcblx0ICB9XG5cdH1cblx0XG5cdC8vIEV4YW1wbGUgb2YgYSBjby1sb2NhdGVkIHNlbGVjdG9yXG5cdHZhciBzZWxlY3RDdXJyZW50UG9zdCA9IGV4cG9ydHMuc2VsZWN0Q3VycmVudFBvc3QgPSBmdW5jdGlvbiBzZWxlY3RDdXJyZW50UG9zdChzdGF0ZSkge1xuXHQgIHJldHVybiBzdGF0ZS5jdXJyZW50UG9zdDtcblx0fTtcblxuLyoqKi8gfSxcblxuLyoqKi8gNjM6XG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfanN4ID0gZnVuY3Rpb24gKCkgeyB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5mb3IgJiYgU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIikgfHwgMHhlYWM3OyByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUmF3UmVhY3RFbGVtZW50KHR5cGUsIHByb3BzLCBrZXksIGNoaWxkcmVuKSB7IHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzOyB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMzsgaWYgKCFwcm9wcyAmJiBjaGlsZHJlbkxlbmd0aCAhPT0gMCkgeyBwcm9wcyA9IHt9OyB9IGlmIChwcm9wcyAmJiBkZWZhdWx0UHJvcHMpIHsgZm9yICh2YXIgcHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7IGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHZvaWQgMCkgeyBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdOyB9IH0gfSBlbHNlIGlmICghcHJvcHMpIHsgcHJvcHMgPSBkZWZhdWx0UHJvcHMgfHwge307IH0gaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7IHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47IH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7IHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpOyBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHsgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgM107IH0gcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5OyB9IHJldHVybiB7ICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsIHR5cGU6IHR5cGUsIGtleToga2V5ID09PSB1bmRlZmluZWQgPyBudWxsIDogJycgKyBrZXksIHJlZjogbnVsbCwgcHJvcHM6IHByb3BzLCBfb3duZXI6IG51bGwgfTsgfTsgfSgpO1xuXHRcblx0dmFyIF9yZWRpYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYwKTtcblx0XG5cdHZhciBfcmVhY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXHRcblx0dmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cdFxuXHR2YXIgX3JlYWN0UmVkdXggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU5KTtcblx0XG5cdHZhciBfYWN0aW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oMTAzKTtcblx0XG5cdHZhciBfYXBocm9kaXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5cdFxuXHR2YXIgX3JlYWN0SGVsbWV0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNyk7XG5cdFxuXHR2YXIgX3JlYWN0SGVsbWV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SGVsbWV0KTtcblx0XG5cdHZhciBfTm90Rm91bmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYxKTtcblx0XG5cdHZhciBfTm90Rm91bmQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm90Rm91bmQpO1xuXHRcblx0dmFyIF9yZWR1Y2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMik7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0dmFyIHJlZGlhbCA9IHtcblx0ICBmZXRjaDogZnVuY3Rpb24gZmV0Y2goX3JlZikge1xuXHQgICAgdmFyIGRpc3BhdGNoID0gX3JlZi5kaXNwYXRjaCxcblx0ICAgICAgICBzbHVnID0gX3JlZi5wYXJhbXMuc2x1Zztcblx0ICAgIHJldHVybiBkaXNwYXRjaCgoMCwgX2FjdGlvbnMubG9hZFBvc3QpKHNsdWcpKTtcblx0ICB9XG5cdH07XG5cdFxuXHR2YXIgbWFwU3RhdGVUb1Byb3BzID0gZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG5cdCAgcmV0dXJuICgwLCBfcmVkdWNlci5zZWxlY3RDdXJyZW50UG9zdCkoc3RhdGUpO1xuXHR9O1xuXHRcblx0dmFyIF9yZWYzID0gX2pzeChfTm90Rm91bmQyLmRlZmF1bHQsIHt9KTtcblx0XG5cdHZhciBQb3N0UGFnZSA9IGZ1bmN0aW9uIFBvc3RQYWdlKF9yZWYyKSB7XG5cdCAgdmFyIHRpdGxlID0gX3JlZjIudGl0bGUsXG5cdCAgICAgIGNvbnRlbnQgPSBfcmVmMi5jb250ZW50LFxuXHQgICAgICBpc0xvYWRpbmcgPSBfcmVmMi5pc0xvYWRpbmcsXG5cdCAgICAgIGVycm9yID0gX3JlZjIuZXJyb3I7XG5cdFxuXHQgIGlmICghZXJyb3IpIHtcblx0ICAgIHJldHVybiBfanN4KCdkaXYnLCB7fSwgdm9pZCAwLCBfanN4KF9yZWFjdEhlbG1ldDIuZGVmYXVsdCwge1xuXHQgICAgICB0aXRsZTogdGl0bGVcblx0ICAgIH0pLCBpc0xvYWRpbmcgJiYgX2pzeCgnZGl2Jywge30sIHZvaWQgMCwgX2pzeCgnaDInLCB7XG5cdCAgICAgIGNsYXNzTmFtZTogKDAsIF9hcGhyb2RpdGUuY3NzKShzdHlsZXMubG9hZGluZylcblx0ICAgIH0sIHZvaWQgMCwgJ0xvYWRpbmcuLi4uJykpLCAhaXNMb2FkaW5nICYmIF9qc3goJ2RpdicsIHt9LCB2b2lkIDAsIF9qc3goJ2gyJywge1xuXHQgICAgICBjbGFzc05hbWU6ICgwLCBfYXBocm9kaXRlLmNzcykoc3R5bGVzLnRpdGxlKVxuXHQgICAgfSwgdm9pZCAwLCB0aXRsZSksIF9qc3goJ3AnLCB7XG5cdCAgICAgIGNsYXNzTmFtZTogKDAsIF9hcGhyb2RpdGUuY3NzKShzdHlsZXMuY29udGVudClcblx0ICAgIH0sIHZvaWQgMCwgY29udGVudCkpKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgLy8gbWF5YmUgY2hlY2sgZm9yIGRpZmZlcmVudCB0eXBlcyBvZiBlcnJvcnMgYW5kIGRpc3BsYXkgYXBwcm9wcmlhdGVseVxuXHQgICAgcmV0dXJuIF9yZWYzO1xuXHQgIH1cblx0fTtcblx0XG5cdHZhciBzdHlsZXMgPSBfYXBocm9kaXRlLlN0eWxlU2hlZXQuY3JlYXRlKHtcblx0ICBjb250ZW50OiB7XG5cdCAgICBmb250U2l6ZTogJzFyZW0nLFxuXHQgICAgbGluZUhlaWdodDogJzEuNScsXG5cdCAgICBtYXJnaW46ICcxcmVtIDAnLFxuXHQgICAgY29sb3I6ICcjNTU1J1xuXHQgIH0sXG5cdCAgdGl0bGU6IHtcblx0ICAgIGZvbnRTaXplOiAyOCxcblx0ICAgIG1hcmdpbjogJzAgYXV0byAxLjVyZW0nLFxuXHQgICAgY29sb3I6ICcjMDAwJ1xuXHQgIH0sXG5cdCAgbG9hZGluZzoge1xuXHQgICAgZm9udFNpemU6IDI4LFxuXHQgICAgbWFyZ2luOiAnMCBhdXRvIDEuNXJlbScsXG5cdCAgICBjb2xvcjogJyNiN2I3YjcnXG5cdCAgfVxuXHR9KTtcblx0XG5cdGV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfcmVkaWFsLnByb3ZpZGVIb29rcykocmVkaWFsKSgoMCwgX3JlYWN0UmVkdXguY29ubmVjdCkobWFwU3RhdGVUb1Byb3BzKShQb3N0UGFnZSkpO1xuXG4vKioqLyB9LFxuXG4vKioqLyAxMDM6XG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0ZXhwb3J0cy5sb2FkUG9zdCA9IGxvYWRQb3N0O1xuXHRcblx0dmFyIF9jb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcblx0XG5cdGZ1bmN0aW9uIGxvYWRQb3N0KHNsdWcpIHtcblx0ICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgX3JlZikge1xuXHQgICAgdmFyIGF4aW9zID0gX3JlZi5heGlvcztcblx0ICAgIHZhciBfZ2V0U3RhdGUkc291cmNlUmVxdWUgPSBnZXRTdGF0ZSgpLnNvdXJjZVJlcXVlc3QsXG5cdCAgICAgICAgcHJvdG9jb2wgPSBfZ2V0U3RhdGUkc291cmNlUmVxdWUucHJvdG9jb2wsXG5cdCAgICAgICAgaG9zdCA9IF9nZXRTdGF0ZSRzb3VyY2VSZXF1ZS5ob3N0O1xuXHRcblx0ICAgIGRpc3BhdGNoKHsgdHlwZTogX2NvbnN0YW50cy5MT0FEX1BPU1RfUkVRVUVTVCB9KTtcblx0ICAgIHJldHVybiBheGlvcy5nZXQocHJvdG9jb2wgKyAnOi8vJyArIGhvc3QgKyAnL2FwaS92MC9wb3N0cy8nICsgc2x1ZykudGhlbihmdW5jdGlvbiAocmVzKSB7XG5cdCAgICAgIGRpc3BhdGNoKHtcblx0ICAgICAgICB0eXBlOiBfY29uc3RhbnRzLkxPQURfUE9TVF9TVUNDRVNTLFxuXHQgICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxuXHQgICAgICAgIG1ldGE6IHtcblx0ICAgICAgICAgIGxhc3RGZXRjaGVkOiBEYXRlLm5vdygpXG5cdCAgICAgICAgfVxuXHQgICAgICB9KTtcblx0ICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHQgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiByZWR1Y2VyIHRoYXQgaGFuZGxlcyAnICsgX2NvbnN0YW50cy5MT0FEX1BPU1RfU1VDQ0VTUyArICc6ICcsIGVycm9yKTtcblx0ICAgICAgZGlzcGF0Y2goe1xuXHQgICAgICAgIHR5cGU6IF9jb25zdGFudHMuTE9BRF9QT1NUX0ZBSUxVUkUsXG5cdCAgICAgICAgcGF5bG9hZDogZXJyb3IsXG5cdCAgICAgICAgZXJyb3I6IHRydWVcblx0ICAgICAgfSk7XG5cdCAgICB9KTtcblx0ICB9O1xuXHR9XG5cbi8qKiovIH1cblxufTs7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIDMuc2VydmVyLmpzIiwiLy8gUG9zdHNcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSdcblxuLy8gU2luZ2xlIFBvc3RcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCdcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSdcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb25zdGFudHMuanMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbGFzdEZldGNoZWQ6IG51bGwsXG4gIGlzTG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiBudWxsLFxuICB0aXRsZTogJycsXG4gIGNvbnRlbnQ6ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJlbnRQb3N0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLkxPQURfUE9TVF9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgZXJyb3I6IG51bGx9XG4gICAgY2FzZSB0eXBlcy5MT0FEX1BPU1RfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLFxuICAgICAgICB0aXRsZTogYWN0aW9uLnBheWxvYWQudGl0bGUsXG4gICAgICAgIGNvbnRlbnQ6IGFjdGlvbi5wYXlsb2FkLmNvbnRlbnQsXG4gICAgICAgIGxhc3RGZXRjaGVkOiBhY3Rpb24ubWV0YS5sYXN0RmV0Y2hlZCxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZX1cbiAgICBjYXNlIHR5cGVzLkxPQURfUE9TVF9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsXG4gICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZCB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbi8vIEV4YW1wbGUgb2YgYSBjby1sb2NhdGVkIHNlbGVjdG9yXG5leHBvcnQgY29uc3Qgc2VsZWN0Q3VycmVudFBvc3QgPSBzdGF0ZSA9PiBzdGF0ZS5jdXJyZW50UG9zdFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tbW9uL3JvdXRlcy9Qb3N0L3JlZHVjZXIuanMiLCJpbXBvcnQgeyBwcm92aWRlSG9va3MgfSBmcm9tICdyZWRpYWwnXG5pbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBsb2FkUG9zdCB9IGZyb20gJy4uL2FjdGlvbnMnXG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBjc3MgfSBmcm9tICdhcGhyb2RpdGUnXG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCdcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL05vdEZvdW5kJ1xuaW1wb3J0IHsgc2VsZWN0Q3VycmVudFBvc3QgfSBmcm9tICcuLi9yZWR1Y2VyJ1xuXG5jb25zdCByZWRpYWwgPSB7XG4gIGZldGNoOiAoeyBkaXNwYXRjaCwgcGFyYW1zOiB7IHNsdWcgfSB9KSA9PiBkaXNwYXRjaChsb2FkUG9zdChzbHVnKSlcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gc2VsZWN0Q3VycmVudFBvc3Qoc3RhdGUpXG5cbmNvbnN0IFBvc3RQYWdlID0gKHsgdGl0bGUsIGNvbnRlbnQsIGlzTG9hZGluZywgZXJyb3IgfSkgPT4ge1xuICBpZiAoIWVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWxtZXQgdGl0bGU9e3RpdGxlfSAvPlxuICAgICAgICB7aXNMb2FkaW5nICYmXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NzcyhzdHlsZXMubG9hZGluZyl9PkxvYWRpbmcuLi4uPC9oMj5cbiAgICAgICAgICA8L2Rpdj59XG4gICAgICAgIHshaXNMb2FkaW5nICYmXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NzcyhzdHlsZXMudGl0bGUpfT57dGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5jb250ZW50KX0+e2NvbnRlbnR9PC9wPlxuICAgICAgICAgIDwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICAvLyBtYXliZSBjaGVjayBmb3IgZGlmZmVyZW50IHR5cGVzIG9mIGVycm9ycyBhbmQgZGlzcGxheSBhcHByb3ByaWF0ZWx5XG4gICAgcmV0dXJuIDxOb3RGb3VuZCAvPlxuICB9XG59XG5cblBvc3RQYWdlLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgY29udGVudDoge1xuICAgIGZvbnRTaXplOiAnMXJlbScsXG4gICAgbGluZUhlaWdodDogJzEuNScsXG4gICAgbWFyZ2luOiAnMXJlbSAwJyxcbiAgICBjb2xvcjogJyM1NTUnXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IDI4LFxuICAgIG1hcmdpbjogJzAgYXV0byAxLjVyZW0nLFxuICAgIGNvbG9yOiAnIzAwMCdcbiAgfSxcbiAgbG9hZGluZzoge1xuICAgIGZvbnRTaXplOiAyOCxcbiAgICBtYXJnaW46ICcwIGF1dG8gMS41cmVtJyxcbiAgICBjb2xvcjogJyNiN2I3YjcnXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHByb3ZpZGVIb29rcyhyZWRpYWwpKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQb3N0UGFnZSkpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vcm91dGVzL1Bvc3QvY29udGFpbmVycy9Qb3N0UGFnZS5qcyIsImltcG9ydCB7IExPQURfUE9TVF9SRVFVRVNULCBMT0FEX1BPU1RfU1VDQ0VTUywgTE9BRF9QT1NUX0ZBSUxVUkUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkUG9zdCAoc2x1Zykge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBheGlvcyB9KSA9PiB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdCB9ID0gZ2V0U3RhdGUoKS5zb3VyY2VSZXF1ZXN0XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBMT0FEX1BPU1RfUkVRVUVTVCB9KVxuICAgIHJldHVybiBheGlvcy5nZXQoYCR7cHJvdG9jb2x9Oi8vJHtob3N0fS9hcGkvdjAvcG9zdHMvJHtzbHVnfWApXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXG4gICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgbGFzdEZldGNoZWQ6IERhdGUubm93KClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgaW4gcmVkdWNlciB0aGF0IGhhbmRsZXMgJHtMT0FEX1BPU1RfU1VDQ0VTU306IGAsIGVycm9yKVxuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXG4gICAgICAgICAgcGF5bG9hZDogZXJyb3IsXG4gICAgICAgICAgZXJyb3I6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9yb3V0ZXMvUG9zdC9hY3Rpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==