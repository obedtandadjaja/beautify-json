(function($) {

    $.fn.beautifyJSON = function(options) {
    	var defaults = {
    		type: "strict",
    		hoverable: true,
    		collapsible: true,
    		color: true
    	};
  		var settings = jQuery.extend({}, defaults, options);
  		console.log(settings);
    	this.each( function() {
    		if(settings.type == "plain") {
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
			} else if(settings.type == "flexible") {
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
			} else {
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
			}
    	});
    }

}(jQuery));