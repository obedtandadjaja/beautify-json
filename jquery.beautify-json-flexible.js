(function($) {

	function peek(stack)
	{
		var val = stack.pop();
		stack.push(val);
		return val;
	}

    $.fn.beautifyJSON = function() {

    	this.each( function() {
    		var s = [];
    		var s_html = [];
			var input = this.innerHTML;
			var text = "";
			text += "<div id='json'>";
			s_html.push("</div>");

			for(i = 0; i < input.length; i++) {
				if(input.charAt(i) == '{') {
					s.push(input.charAt(i));
					text += input.charAt(i);
					text += "<span class='ellipsis'></span>";
					text += "<div class='collapser'></div>";
					text += "<ul class='obj collapsible'>";
					s_html.push("</ul>");
					text += "<li><div class='hoverable'>";
					s_html.push("</div></li>");
				} else if(input.charAt(i) == '\"' && peek(s) != '\"') {
					text += input.charAt(i);
					s.push(input.charAt(i));
				} else if(input.charAt(i) == '[' && input.charAt(i+1) == ']') {
					s.push(input.charAt(i));
					text += input.charAt(i);
					text += "<span class='ellipsis'></span>";
					text += "<div class='collapser'></div>";
					text += "<ul class='array collapsible'>";
					s_html.push("</ul>");
					text += "<li><div class='hoverable'>";
					s_html.push("</div></li>");
				} else if(input.charAt(i) == '[') {
					s.push(input.charAt(i));
					text += input.charAt(i);
					text += "<span class='ellipsis'></span>";
					text += "<div class='collapser'></div>";
					text += "<ul class='array collapsible'>";
					s_html.push("</ul>");
					text += "<li><div class='hoverable'>";
					s_html.push("</div></li>");
				} else if(input.charAt(i) == ']') {
					text += s_html.pop()+s_html.pop();
					text += input.charAt(i);
					// text += s_html.pop();
					s.pop();
				} else if(input.charAt(i) == '}') {
					text += s_html.pop()+s_html.pop();
					text += input.charAt(i);
					s.pop();
					if(s.length != 0)
						if(peek(s) != '[' && peek(s) != '{') {
							text += s_html.pop();
						}
				} else if(input.charAt(i) == '\"' && peek(s) == '\"') {
					text += input.charAt(i)
					s.pop();
				} else if(input.charAt(i) == ',' && peek(s) != '\"') {
					text += input.charAt(i);
					text += s_html.pop();
					text += "<li><div class='hoverable'>";
					s_html.push("</div></li>");
				} else if(input.charAt(i) == '\n') {
				} else if(input.charAt(i) == ' ' && peek(s) != '\"') {
				} else {
					text += input.charAt(i)
				}
			}
			this.innerHTML = text;

		    $('.hoverable').hover(function(event)
		    {
		    	event.stopPropagation();
		    	$('.hoverable').removeClass('hovered');
		        $(this).addClass('hovered');
		    }, function(event) {
		    	event.stopPropagation();
		        // $('.hoverable').removeClass('hovered');
		        $(this).addClass('hovered');
		    });

		    $('.collapser').off().click(function()
		    {
		    	$(this).parent('.hoverable').toggleClass('collapsed');
		    });

    	});
    }

}(jQuery));