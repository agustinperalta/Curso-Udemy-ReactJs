(this.webpackJsonpudemy=this.webpackJsonpudemy||[]).push([[0],[,,,,,,,,function(e,t,r){e.exports=r(16)},,,,,function(e,t,r){},function(e,t,r){e.exports=r.p+"static/media/logo.ee7cd8ed.svg"},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(7),c=r.n(a),i=(r(13),r(1)),l=r(2),s=r(4),u=r(3),h=r(5),d=(r(14),r(15),function(e){function t(){var e,r;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={throwError:!1},r}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;if(this.state.throwError)throw new Error("Se ha lanzado un error");return o.a.createElement("button",{onClick:function(){e.setState({throwError:!0})}},"Lanzar Error")}}]),t}(n.Component)),m=function(e){function t(){var e,r;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={hasError:!1,errorMsg:""},r}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log("componentDidCatch"),console.log({error:e,info:t}),this.setState({hasError:!0,errorMsg:e.toString()})}},{key:"render",value:function(){var e=this;return this.state.hasError?o.a.createElement("div",null,o.a.createElement("h1",{style:{color:"red",fontSize:14}},"Error en el Componente: ",this.state.errorMsg),o.a.createElement("button",{style:{color:"green",backgroundColor:"blue"},onClick:function(){e.setState({hasError:!1})}},"Volver a la aplicaci\xf3n")):o.a.createElement("div",null,o.a.createElement("h4",null,"Ejemplo de Ciclo de error"),o.a.createElement("p",null,"Error"),o.a.createElement(d,null))}}]),t}(n.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{border:"1px solid #09f",margin:5,padding:5}},this.props.children)}}]),t}(n.Component),f=(n.Component,function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h2",null,"Ciclo de vida"),o.a.createElement(m,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.99365311.chunk.js.map