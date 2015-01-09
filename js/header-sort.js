$(document).ready(function() {
	function comparer(index) {
		return function(a, b) {
			var valA = getCellValue(a, index), valB = getCellValue(b, index);
			console.log(valA);
			return $.isNumeric(valA) && $.isNumeric(valB) ?Â valA - valBÂ : valA.localeCompare(valB);
		}
	}
	function getCellValue(row, index){ 
		return $(row).children('td').eq(index).html(); 
	}
			
	$('#tab').on("click", "th", function(){
		var table = $(this).parents("table").eq(0);
		// var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()));
		var rows = table.find('tr').toArray();
		rows.shift(); //remove first element which has th

		this.asc = !this.asc;
		if (!this.asc){
			rows = rows.reverse();
		}
		for (var i = 0; i < rows.length; i++){
			table.append(rows[i]);	
		}
	});
});