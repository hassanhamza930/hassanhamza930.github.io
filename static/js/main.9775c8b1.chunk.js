(this.webpackJsonpreactflow=this.webpackJsonpreactflow||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),u=n.n(o),h=n(3),s=n(4),c=n(6),l=n(5),i=n(7),f=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(c.a)(this,Object(l.a)(t).call(this))).handleChange=function(t){var n=t.target.value;fetch("http://freakh2o.pythonanywhere.com/get?hook="+t.target.value).then((function(e){return e.json()})).then((function(t){return e.setState({hook:n,user1:t.user1,user2:t.user2})}))},e.handleUp1=function(t){fetch("http://freakh2o.pythonanywhere.com/set?hook="+e.state.hook+"&u1val="+t.target.value+"&u2val="+e.state.user2),e.setState({user1:t.target.value}),fetch("http://freakh2o.pythonanywhere.com/get?hook="+e.state.hook).then((function(e){return e.json()})).then((function(t){return e.setState({user1:t.user1,user2:t.user2})}))},e.handleUp2=function(t){fetch("http://freakh2o.pythonanywhere.com/set?hook="+e.state.hook+"&u2val="+t.target.value+"&u1val="+e.state.user1),e.setState({user2:t.target.value}),fetch("http://freakh2o.pythonanywhere.com/get?hook="+e.state.hook).then((function(e){return e.json()})).then((function(t){return e.setState({user1:t.user1,user2:t.user2})}))},e.update=function(){fetch("http://freakh2o.pythonanywhere.com/get?hook="+e.state.hook).then((function(e){return e.json()})).then((function(t){return e.setState({user1:t.user1,user2:t.user2})}))},e.state={},e}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return setTimeout(this.update,1e3),r.a.createElement("div",null,"ENTER YOUR HOOK NUMBER",r.a.createElement("input",{onChange:this.handleChange}),r.a.createElement("br",null),"User1",r.a.createElement("textarea",{onChange:this.handleUp1}),r.a.createElement("br",null),"User2",r.a.createElement("textarea",{onChange:this.handleUp2}),r.a.createElement("div",null,this.state.user1),r.a.createElement("div",null,this.state.user2))}}]),t}(r.a.Component);u.a.render(r.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.9775c8b1.chunk.js.map