(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t){e.exports={items:["Home","My days","Notes"],heading:"Calendar"}},21:function(e,t,a){e.exports=a(61)},28:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},53:function(e,t){e.exports={confirmationModalConfig:{content:{"border-radius":"15px",padding:"10px 15px",width:"30%",height:"25%",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}}}},54:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),i=a.n(n),s=a(9),r=a.n(s);a(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(2),c=a(3),l=a(5),u=a(4),h=a(6),m=(a(30),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("li",{className:this.props.isActive,onClick:function(){return e.props.click(e)}},this.props.name)}}]),t}(n.Component)),d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={links:a.props.config.items,totalLinks:a.props.config.items.length,linksStatus:Array(a.props.config.items.length).fill("")},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleLinkClick",value:function(e){var t=Array(this.state.totalLinks).fill("");t[e]="nav-link-active",this.setState({linksStatus:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("nav",{className:"navigation-bar"},i.a.createElement("div",{className:"logo-container"},i.a.createElement("h2",null,this.props.config.heading)),i.a.createElement("div",{className:"url-container"},i.a.createElement("ul",null,this.props.config.items.map(function(t,a){return i.a.createElement(m,{key:a,name:t,click:e.handleLinkClick.bind(e,a),isActive:e.state.linksStatus[a]})}))))}}]),t}(n.Component),p=a(18),v=a.n(p),f=(a(32),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"day-block ".concat(this.props.className),onClick:function(){return e.props.clickHandler(e)}},this.props.value)}}]),t}(i.a.Component)),g=a(8),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={currentMonth:a.props.currentMonth},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){JSON.stringify(this.props.currentMonth)!==JSON.stringify(e.currentMonth)&&this.setState({currentMonth:e.currentMonth})}},{key:"renderBlock",value:function(e,t,a){return i.a.createElement(f,{key:a,id:a,value:e,className:t,clickHandler:this.props.clickHandler})}},{key:"renderHeader",value:function(){for(var e=[],t=0;t<7;t++)e.push(this.renderBlock(g.DAYS_MAP[t],"block-heading","h-".concat(t)));return e}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"calendar-body"},this.renderHeader(),this.state.currentMonth.map(function(t,a){return e.renderBlock(t.dayValue,t.dayClass,"d-"+a)}))}}]),t}(i.a.Component),b=(a(35),a(37),function(e){return e.getFullYear()+"-"+e.getMonth()+"-"+e.getDate()}),k=function(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()},E=a(7),O=a.n(E),j="https://baas.kinvey.com/",N="kid_r1ynbbg6Q",C=(btoa(N+":33903aebaffd4a3b944250b832bd81f3"),{Authorization:"Basic "+btoa(N+":f55dd3810f61465c98c4fec7525a6ba9")}),D=function(e){return O.a.ajax({method:"GET",url:j+"appdata/"+N+'/notes/?query={"dayId":"'.concat(e,'"}'),headers:C})},M=function(e){return O.a.ajax({method:"POST",url:j+"appdata/"+N+"/notes",headers:C,data:e})},S=function(e,t){var a={dayId:e,noteId:t};return O.a.ajax({method:"POST",url:j+"appdata/"+N+"/days-notes",headers:C,data:a})},w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={note:""},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"submitNote",value:function(e){var t=this;if(e.preventDefault(),""!==this.state.note){var a={},n=b(this.props.activeDate);a.dayId=n,a.noteContent=this.state.note,M(a).then(function(e){S(n,e._id),t.setState({note:""})},function(e){console.log("Failed "+e)})}}},{key:"updateNote",value:function(e){this.setState({note:e.target.value})}},{key:"render",value:function(){var e=this;return i.a.createElement("form",{className:"add-note-form"},i.a.createElement("div",{className:"form-group"},i.a.createElement("textarea",{value:this.state.note,rows:"3",className:"form-control",onChange:function(t){return e.updateNote(t)}})),i.a.createElement("button",{onClick:function(t){return e.submitNote(t)},className:"btn btn-primary"},"Add note"))}}]),t}(i.a.Component),P=a(10),A=(a(39),a(41),a(19)),x=a.n(A),T=(a(53),a(20)),I=(a(54),a(11)),F=a(13),Y=a(14);I.b.add(Y.a,Y.b);var H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={pager:{}},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.props.items&&this.props.items.length&&this.resetPage()}},{key:"componentDidUpdate",value:function(e,t){this.props.items!==e.items&&this.resetPage()}},{key:"resetPage",value:function(){this.setPage(this.props.initialPage)}},{key:"setPage",value:function(e){var t=this.props,a=t.items,n=t.pageSize,i=this.state.pager;if(!(e<1||e>i.totalPages)){var s=this.state.pager.currentPage<e?"animate-left":"animate-right";i=this.getPager(a.length,e,n);var r=a.slice(i.startIndex,i.endIndex+1);this.setState({pager:i}),this.props.onChangePage(r,s)}}},{key:"getPager",value:function(e,t,a){t=t||1,a=a||10;var n,i,s=Math.ceil(e/a);s<=10?(n=1,i=s):t<=6?(n=1,i=10):t+4>=s?(n=s-9,i=s):(n=t-5,i=t+4);var r=(t-1)*a,o=Math.min(r+a-1,e-1),c=Object(T.a)(Array(i+1-n).keys()).map(function(e){return n+e});return{totalItems:e,currentPage:t,pageSize:a,totalPages:s,startPage:n,endPage:i,startIndex:r,endIndex:o,pages:c}}},{key:"render",value:function(){var e=this,t=this.state.pager;return!t.pages||t.pages.length<=1?null:i.a.createElement("ul",{className:"pagination"},i.a.createElement("div",{className:"pag-wrapper"},i.a.createElement("li",{className:1===t.currentPage?"disabled":""},i.a.createElement("a",{href:"#",onClick:function(){return e.setPage(t.currentPage-1)}},i.a.createElement(F.a,{icon:"angle-left"}))),t.pages.map(function(a,n){return i.a.createElement("li",{key:n,className:t.currentPage===a?"active":""},i.a.createElement("a",{href:"#",onClick:function(){return e.setPage(a)}},a))}),i.a.createElement("li",{className:t.currentPage===t.totalPages?"disabled":""},i.a.createElement("a",{href:"#",onClick:function(){return e.setPage(t.currentPage+1)}},i.a.createElement(F.a,{icon:"angle-right"})))))}}]),t}(i.a.Component);H.defaultProps={initialPage:1,pageSize:10};var W=H,B=(a(57),document.getElementById("root")),U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={isShown:!1,animationClass:"",transitionEnded:!1},a.modal=document.createElement("div"),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){B.appendChild(this.modal)}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.isOpen?(this.setState({isShown:!0}),setTimeout(function(){t.setState({animationClass:"show"})},10)):(this.setState({animationClass:"hide"}),setTimeout(function(){t.setState({isShown:!1})},500))}},{key:"componentWillUnmount",value:function(){alert("maam se")}},{key:"onTransitionEnd",value:function(){alert("dada")}},{key:"render",value:function(){return r.a.createPortal(i.a.createElement("div",{className:"modal-box-background ".concat(this.state.isShown?"shown":"")},i.a.createElement("div",{className:"message-box-content ".concat(this.state.animationClass)},this.props.children)),this.modal)}}]),t}(i.a.Component);x.a.setAppElement("#root");var _=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={currentNotesPage:[],notesAnimation:"",modalData:{isOpen:!1,idToDelete:"",animateClass:""}},a.handlePageChange=a.handlePageChange.bind(Object(P.a)(Object(P.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;""!==this.state.notesAnimation&&setTimeout(function(){return e.setState({notesAnimation:""})},550)}},{key:"renderNotes",value:function(){var e=this;if(this.props.notes){if(this.props.notes.length>0){var t=[];t.push(i.a.createElement(W,{items:this.props.notes,onChangePage:this.handlePageChange,pageSize:5}));var a=[i.a.createElement("div",{className:"note-anim "+this.state.notesAnimation},this.state.currentNotesPage.map(function(t){return i.a.createElement("li",{key:t._id},t.noteContent,i.a.createElement("span",{onClick:function(){return e.openModal(t._id)}},i.a.createElement("span",{className:"tooltip"},"Delete this note"),i.a.createElement("a",null,"X")))}))];return t.push(a),t}return"No notes for this day"}}},{key:"deleteNote",value:function(e){alert("Successfully deleted "+e),this.closeModal()}},{key:"openModal",value:function(e){var t=this.state.modalData;t.isOpen=!0,t.idToDelete=e,t.animateClass="show",this.setState({modalData:t})}},{key:"closeModal",value:function(){var e=this.state.modalData;e.isOpen=!1,e.animateClass="hide",this.setState({modalData:e})}},{key:"handlePageChange",value:function(e,t){this.setState({currentNotesPage:e,notesAnimation:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("ul",{className:"notes-list"},this.renderNotes(),i.a.createElement(U,{isOpen:this.state.modalData.isOpen,closeFunction:function(){return e.closeModal()}},i.a.createElement("div",null,i.a.createElement("span",null,i.a.createElement("a",{onClick:function(){return e.closeModal()},href:"#"},"X")),i.a.createElement("div",{className:"message-box-header"},"Are you sure"),i.a.createElement("hr",null),i.a.createElement("p",null,"This will delete the note"),i.a.createElement("div",{className:"message-box-footer"},i.a.createElement("button",{onClick:function(){return e.deleteNote(e.state.modalData.idToDelete)}},"Yes"),i.a.createElement("button",{onClick:function(){return e.closeModal()}},"No")),";",i.a.createElement("div",{className:"message-box-message"},this.props.text))))}}]),t}(i.a.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getCurrentMonth",value:function(){return this.props.activeDate.getMonth()}},{key:"render",value:function(){return i.a.createElement("div",{className:this.props.currentClass},i.a.createElement("h3",null,g.MONTHS_MAP[this.getCurrentMonth()].toString().substr(0,3)),i.a.createElement("p",{className:"day-paragraph"},this.props.activeDate.getDate()))}}]),t}(i.a.Component),V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={animateClass:"",oldDate:new Date,display:{isFlipped:""}},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillUpdate",value:function(e){var t=this;if(e.activeDate!==this.props.activeDate){this.setState({animateClass:"calendar-block-animate"});setTimeout(function(){t.setState({animateClass:""}),t.setState({oldDate:e.activeDate})},950)}}},{key:"switchView",value:function(){var e=this.state.display;""===e.isFlipped?e.isFlipped="flipped":e.isFlipped="",this.setState({display:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"status-container"},i.a.createElement("div",{className:"block-container"},i.a.createElement(J,{currentClass:"calendar-block old-calendar-block",activeDate:this.props.activeDate}),i.a.createElement(J,{currentClass:"calendar-block "+this.state.animateClass,activeDate:this.state.oldDate})),i.a.createElement("div",{className:"notes-container"},i.a.createElement("button",{className:"switch-view ",onClick:function(){return e.switchView()}}," ","Switch"," "),i.a.createElement("div",{className:"view-note-container "+this.state.display.isFlipped},i.a.createElement("div",{className:"notes-view"},i.a.createElement(_,{notes:this.props.notes})),i.a.createElement("div",{className:"save-note back"},i.a.createElement(w,{activeDate:this.props.activeDate}),i.a.createElement("button",{className:"btn btn-primary"},"Save day to my days")))))}}]),t}(i.a.Component),z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={activeDate:new Date,daysInCurrentMonth:{},notes:a.fetchNotes(new Date),year:(new Date).getFullYear(),month:(new Date).getMonth(),animation:{moveYear:"",moveMonth:""}},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.setState({daysInCurrentMonth:this.createCurrentMonthObject()})}},{key:"componentDidUpdate",value:function(){var e=this,t=this.state.animation;""!==t.moveYear&&setTimeout(function(){t.moveYear="",e.setState({animation:t})},1e3),""!==t.moveMonth&&setTimeout(function(){t.moveMonth="",e.setState({animation:t})},1e3)}},{key:"updateYear",value:function(e){var t=this.state.animation;t.moveYear=e<0?"year-left":"year-right",this.setState({year:this.state.year+e,currentMonth:this.createCurrentMonthObject(),animation:t})}},{key:"updateMonth",value:function(e){var t=this.state.animation;t.moveMonth=e<0?"month-left":"month-right";var a,n=this.state.year;0===this.state.month&&-1===e?(a=11,n=this.state.year-1):11===this.state.month&&1===e?(a=0,n=this.state.year+1):a=this.state.month+e,this.setState({month:a,year:n})}},{key:"createCurrentMonthObject",value:function(){for(var e=[],t=6-new Date(this.state.year,this.state.month,this.getDaysInMonth()-1).getDay(),a=this.getDaysInMonth(this.state.month-1),n=a-this.getFirstDayOfMonth()+1;n<=a;n++)e.push({dayValue:n,dayClass:"last-month"});for(var i=1;i<=this.getDaysInMonth();i++){var s=new Date,r=new Date(this.state.year,this.state.month,i),o="current-month";i===s.getDate()&&this.state.month===s.getMonth()&&this.state.year===s.getFullYear()&&(o+=" today"),k(this.state.activeDate,r)&&(o+=" active"),e.push({dayValue:i,dayClass:o})}for(var c=1;c<=t;c++)e.push({dayValue:c,dayClass:"next-month"});return e}},{key:"getDaysInMonth",value:function(e){return null!=e?(-1===e&&(e=11),new Date(this.state.year,e+1,0).getDate()):new Date(this.state.year,this.state.month+1,0).getDate()}},{key:"getFirstDayOfMonth",value:function(){return new Date(this.state.year,this.state.month,0).getDay()}},{key:"fetchNotes",value:function(e){var t=this;D(b(e)).then(function(e){t.setState({notes:e})},function(e){console.log("Failed "+e)})}},{key:"handleDayBlockClicked",value:function(e){if(e.props.id.startsWith("d-")&&e.props.className.includes("current-month")){var t=new Date(this.state.year,this.state.month,e.props.value);this.setState({activeDate:t}),this.fetchNotes(t)}}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"calendar-container"},i.a.createElement("div",{className:"body-container"},i.a.createElement("div",{className:"calendar-header"},i.a.createElement("div",{className:"year"},i.a.createElement("button",{onClick:function(){return e.updateYear(-1)}}),i.a.createElement("p",{className:this.state.animation.moveYear},this.state.year),i.a.createElement("button",{onClick:function(){return e.updateYear(1)}})),i.a.createElement("div",{className:"month"},i.a.createElement("button",{onClick:function(){return e.updateMonth(-1)}}),i.a.createElement("p",{className:this.state.animation.moveMonth},g.MONTHS_MAP[this.state.month]),i.a.createElement("button",{onClick:function(){return e.updateMonth(1)}}))),i.a.createElement(y,{clickHandler:this.handleDayBlockClicked.bind(this),currentMonth:this.createCurrentMonthObject()})),i.a.createElement(V,{activeDate:this.state.activeDate,notes:this.state.notes}))}}]),t}(i.a.Component),L=(a(59),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"app-container"},i.a.createElement(d,{config:v.a}),i.a.createElement(z,null))}}]),t}(n.Component));r.a.render(i.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t){e.exports={MONTHS_MAP:{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"Semptember",9:"October",10:"November",11:"December"},DAYS_MAP:{0:"MON",1:"TUE",2:"WED",3:"THU",4:"FRI",5:"SAT",6:"SUN",7:"SUN"}}}},[[21,2,1]]]);
//# sourceMappingURL=main.3e88f1e6.chunk.js.map