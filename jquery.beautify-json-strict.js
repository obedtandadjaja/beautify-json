(function($) {

	var text = "";
	var s_html = [];

	function peek(stack) {
		var val = stack.pop();
		stack.push(val);
		return val;
	}

	function iterateObject(object) {
		$.each(object, function(index, element) {
			if(element == null) {
				text += "<li><div class='hoverable'><span class='property'>"+index+"</span>: <span class='type-null'>"+element+"</span></div></li>";
			} else if(element instanceof Array) {
				text += "<li><div class='hoverable'><span class='property'>"+index+"</span>: "+"[<span class='ellipsis'></span><span class='collapser'></span>";
				text += "<ul class='array collapsible'>";
				s_html.push("</li>");
				s_html.push("</div>");
				s_html.push("</ul>");
				iterateArray(element);
			} else if(typeof element == 'object') {
				text += "<li><div class='hoverable'><span class='property'>"+index+"</span>: "+"{<span class='ellipsis'></span><span class='collapser'></span>";
				text += "<ul class='obj collapsible'>";
				s_html.push("</li>");
				s_html.push("</div>");
				s_html.push("</ul>");
				iterateObject(element);
			} else {
				if(typeof element == "number") {
					text += "<li><div class='hoverable'><span class='property'>"+index+"</span>: <span class='type-number'>"+element+"</span></div></li>";
				} else if(typeof element == "string") {
					text += "<li><div class='hoverable'><span class='property'>"+index+"</span>: <span class='type-string'>\""+element+"\"</span></div></li>";
				} else if(typeof element == "boolean") {
					text += "<li><div class='hoverable'><span class='property'>"+index+"</span>: <span class='type-boolean'>"+element+"</span></div></li>";
				} else {
					text += "<li><div class='hoverable'><span class='property'>"+index+"</span>: "+element+"</div></li>";
				}
			}
		});
		text += s_html.pop()+"}"+s_html.pop()+s_html.pop();
	}

	function iterateArray(array) {
		$.each(array, function(index, element) {
			if(element == null) {
				text += "<li><div class='hoverable'><span class='property'>"+index+"</span>: <span class='type-null'>"+element+"</span></div></li>";
			} else if(element instanceof Array) {
				text += "<li><div class='hoverable'>[<span class='ellipsis'></span><span class='collapser'></span>";
				text += "<ul class='array collapsible'>";
				s_html.push("</li>");
				s_html.push("</div>");
				s_html.push("</ul>");
				iterateArray(element);
			} else if(typeof element == 'object') {
				text += "<li><div class='hoverable'>{<span class='ellipsis'></span><span class='collapser'></span>";
				text += "<ul class='obj collapsible'>";
				s_html.push("</li>");
				s_html.push("</div>");
				s_html.push("</ul>");
				iterateObject(element);
			} else {
				if(typeof element == "number") {
					text += "<li><div class='hoverable'><span class='property'>"+index+"</span>: <span class='type-number'>"+element+"</span></div></li>";
				} else if(typeof element == "string") {
					text += "<li><div class='hoverable'><span class='property'>"+index+"</span>: <span class='type-string'>\""+element+"\"</span></div></li>";
				} else if(typeof element == "boolean") {
					text += "<li><div class='hoverable'><span class='property'>"+index+"</span>: <span class='type-boolean'>"+element+"</span></div></li>";
				} else {
					text += "<li><div class='hoverable'><span class='property'>"+index+"</span>: "+element+"</div></li>";
				}
			}
		});
		text += s_html.pop()+"]"+s_html.pop()+s_html.pop();
	}

    $.fn.beautifyJSON = function() {

    	this.each( function() {
			var input = this.innerHTML;
			var json = jQuery.parseJSON(input);
			text = "";
			text += "<div id='json'>";
			text += "<div class='hoverable'>{<span class='ellipsis'></span><span class='collapser'></span>";
			text += "<ul class='obj collapsible'>";
			s_html.push("");
			s_html.push("</div>");
			s_html.push("</ul>")
			console.log(json);
			iterateObject(json);
			text += "</ul></div></div>";

			this.innerHTML = text;

		    $('.hoverable').hover(function(event) {
		    	event.stopPropagation();
		    	$('.hoverable').removeClass('hovered');
		        $(this).addClass('hovered');
		    }, function(event) {
		    	event.stopPropagation();
		        // $('.hoverable').removeClass('hovered');
		        $(this).addClass('hovered');
		    });

		    $('.collapser').off().click(function(event) {
		    	$(this).parent('.hoverable').toggleClass('collapsed');
		    });
    	});
    }

}(jQuery));