/*
var $ = function(selector){
	var doc = document,el ={};
	el = doc.querySelector(selector);
	el.hide= function(){
		this.style.display='none';
	}
	el.show = function(){
		this.style.display='block';
	}
	return el;g
}
*/

var merge = function(a) {
    for (var b = 1; b < arguments.length; b++) {
        var c = arguments[b],
            d;
        for (d in c) a[d] = c[d]
    }
    return a
}

var $ = function(selector){
	var doc = document,el ={};
	var self = doc.querySelector(selector);

	var o =[];
	o.push(self);

	var obj  = {
		hide : function(){
			self.style.display='none';
		},
		show : function(){
			self.style.display='block';
		},
		css:function(name){
			var style = document.defaultView.getComputedStyle(self);
			return style[name];
		}
	};
	
	o = merge(o,obj);

	return o;
}

