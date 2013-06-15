YUI.add("node-menunav-improved",function(e,t){var n=null,r,i;r=function(){if(n===null){var e=document.createElement("div");e.style.width=e.style.height="100px",e.style.overflow="scroll",e.style.position="absolute",e.style.top=e.style.left="0",e.style.visibility="hidden",document.body.appendChild(e),n=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return n},i=function(){i.superclass.constructor.apply(this,arguments)},i.NAME="nodeMenuNavImproved",i.NS="menuNav",i.ATTRS={viewportPadding:{value:10}},e.extend(i,e.Plugin.NodeMenuNav,{initializer:function(){this.constrained=this.get("host").hasClass("yui3-menu-constrained")},_showMenu:function(t){var n=this.get("host"),r;i.superclass._showMenu.call(this,t),this.constrained&&(this._onWindowResize(null,t),e.one("win").on("windowresize",this._onWindowResize,this,t)),t.ancestor(".yui3-menu").hasClass("yui3-menu-horizontal")&&(r=n.get("region").width,t.get("children").item(0).setStyle("minWidth",r-2))},_hideMenu:function(t,n){this.constrained&&(e.one("win").detach("windowresize",this._onWindowResize),this.revertStyle(t.one(".yui3-menu-content"))),i.superclass._hideMenu.call(this,t,n)},_onWindowResize:function(t,n){var s=e.DOM.viewportRegion(),o=s.height,u=s.width,a=this.get("viewportPadding"),f=n.one(".yui3-menu-content"),l=f.get("region"),c=o-a*2,h=u-a*2,p=Math.min(l.width,h);l.height>=c?(p=Math.min(p+r(),h),f.set("isConstrained",!0),f.setStyles({height:c,overflowY:"scroll"}),n.setY(s.bottom-a-c)):(f.get("isConstrained")&&(n.set("isConstrained",!1),this.revertStyle(f),i.superclass._showMenu.call(this,n)),l.bottom-s.top>o-a&&n.setY(s.bottom-a-l.height)),p!==l.width&&f.setStyles({width:p+"px"}),l.left<0&&n.setX(a),l.right>u-a&&n.setX(u-a-p)},revertStyle:function(e){e.setStyles({overflowY:"visible",height:"",width:""})},_onActiveDescendantChange:function(){return!1},_onMenuLabelMouseOut:function(){var e=this,t=e._hoverTimer;t&&t.cancel(),e._clearActiveItem()}}),e.namespace("Plugin"),e.Plugin.NodeMenuNavImproved=i},"@VERSION@",{requires:["event-resize","node-menunav"]});