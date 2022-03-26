(function($) {
$(document).ready(function () {
$('.myClass').addClass('doCode');
// jquery code goes here



	function Wave(id) {
		this.id = id;
	
	
		this.getId = function() {
			console.log("Wave ");
		}
	}
	
	var wavyMan = new Wave("wavyMan");
	
	wavyMan.getId();

})
})(jQuery);
