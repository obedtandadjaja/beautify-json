(function($) {

	function peek(stack)
	{
		var val = stack.pop();
		stack.push(val);
		return val;
	}

	function JSONObject()
	{
		var attributes_array = [];
		var values_array = [];
	}

    $.fn.beautifyJSON = function() {

    	this.each( function() {
    		var INCREMENT = "&ensp;&ensp;&ensp;";
    		var s = [];
	    	var indent = "";
			var input = this.innerHTML;
			var output = input.split('"').map(function(v,i){
			   return i%2 ? v : v.replace(/\s/g, "");
			}).join('"');

			var json = [];
			var text = "";
			for(i = 0; i < input.length; i++) {
				if(input.charAt(i) == '{' || input.charAt(i) == '[')
					text += input.charAt(i)+"<br>";
				else if(input.charAt(i) == '}' || input.charAt(i) == ']')
					text += "<br>"+input.charAt(i)+"<br>";
				else
					text += input.charAt(i);
			}
			this.innerHTML = text;

    	});
    }

}(jQuery));