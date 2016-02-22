(function($) {

	function peek(stack)
	{
		var val = stack.pop();
		stack.push(val);
		return val;
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
			var text = "";
			for(i = 0; i < input.length; i++) {
				if(input.charAt(i) == '{') {
					s.push(input.charAt(i));
					text += input.charAt(i)+'<br>';
					indent += INCREMENT;
					text += indent;
				} else if(input.charAt(i) == '\"' && peek(s) != '\"') {
					text += input.charAt(i);
					s.push(input.charAt(i));
				} else if(input.charAt(i) == '[' && input.charAt(i+1) == ']') {
					s.push(input.charAt(i));
					text += input.charAt(i);
					indent += INCREMENT;
				} else if(input.charAt(i) == '[') {
					s.push(input.charAt(i));
					text += input.charAt(i)+'<br>';
					indent += INCREMENT;
					text += indent;
				} else if(input.charAt(i) == ']') {
					indent = indent.substring(0,(indent.length-18));
					text += '<br>'+indent;
					text += input.charAt(i)
					s.pop();
				} else if(input.charAt(i) == '}') {
					indent = indent.substring(0,(indent.length-18));
					text += '<br>'+indent+input.charAt(i);
					s.pop();
					if(s.length != 0)
						if(peek(s) != '[' && peek(s) != '{') {
							text += indent;
						}
				} else if(input.charAt(i) == '\"' && peek(s) == '\"') {
					text += input.charAt(i)
					s.pop();
				} else if(input.charAt(i) == ',' && peek(s) != '\"') {
					text += input.charAt(i)+'<br>';
					text += indent;
				} else if(input.charAt(i) == '\n') {
				} else if(input.charAt(i) == ' ' && peek(s) != '\"') {
				} else {
					text += input.charAt(i)
				}
			}
			this.innerHTML = text;

    	});
    }

}(jQuery));