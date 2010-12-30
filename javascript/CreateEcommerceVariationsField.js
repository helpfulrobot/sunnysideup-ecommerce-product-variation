


;(function($) {
	$(document).ready(
		function() {
			CreateEcommerceVariationsField.init();
		}
	);
	var CreateEcommerceVariationsField = {

		getDataFromServer: function() {
			jQuery.get(
				url
				function(data) {
					CreateEcommerceVariationsField.parseNodes(data);
				}
			);
		}

		parseNodes: function(nodes) { // takes a nodes array and turns it into a <ol>
				var ol = document.createElement("ol");
				for(var i=0; i<nodes.length; i++) {
					ol.appendChild(CreateEcommerceVariationsField.parseNode(nodes[i]));
				}
				return ol;
		},

		parseNode: function(node) { // takes a node object and turns it into a <li>
			var li = document.createElement("li");
			li.innerHTML = node.title;
			li.className = node.class;
			if(node.nodes) li.appendChild(parseNodes(node.nodes));
			return li;
		}


	}
})(jQuery);

