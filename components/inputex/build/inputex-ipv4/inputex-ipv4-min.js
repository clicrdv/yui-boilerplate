YUI.add("inputex-ipv4",function(e,t){var n=e.Lang,r=e.inputEx;r.IPv4Field=function(e){r.IPv4Field.superclass.constructor.call(this,e)},e.extend(r.IPv4Field,r.StringField,{setOptions:function(t){r.IPv4Field.superclass.setOptions.call(this,t),this.messages=e.mix(this.messages,e.Intl.get("inputex-ipv4")),this.messages.invalid=this.messages.invalidIPv4,this.options.regexp=/^(?:1\d?\d?|2(?:[0-4]\d?|[6789]|5[0-5]?)?|[3-9]\d?|0)(?:\.(?:1\d?\d?|2(?:[0-4]\d?|[6789]|5[0-5]?)?|[3-9]\d?|0)){3}$/}}),r.registerType("IPv4",r.IPv4Field,[])},"@VERSION@",{requires:["inputex-string"],ix_provides:"ipv4",lang:["en","fr","de","ca","es","fr","it","nl"]});