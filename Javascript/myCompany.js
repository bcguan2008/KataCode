var myCompany = myCompany ||{};

myCompany.createClass = myCompany.createClass || function(arg){
	var $this = function(){};
	if(arg){
		for(var method in arg){
			$this[method]=arg[method];
		}
    }
    return $this;
}


var Person = myCompany.createClass({
	find:function(id){
		return 'new person object';
	}
})


var o = Person.find(20150214);