$(document).ready(function () {

	$.getJSON("../json/emp.json", function(getdetails) {

		//adding headers
		var i = 0;
		var fields = getdetails.tabheader;
		var row = $("<tr />");
		$("#tab").append(row);
		for(i=0; i<fields.length; i++) {
			row.append($("<th>" + fields[i].header + "<i class='icon-down-dir'></i><i class='icon-up-dir'></i></th>"));
		    $(".icon-up-dir").hide();
		
		}

		//adding employee details

		$.each(getdetails.employees , function(key,value) {
			var row = $("<tr />");
			$("#tab").append(row);
			$.each(value ,function(k,v) {

				row.append ($("<td>" + v + "</td>" ));
			});

		});

		//adding label and input fields to the form

		for(i=0;i<fields.length;i++) {
			$("#labelDiv").append($("<label>" + fields[i].header + "</label>" +"<br />"));
			$("#inputDiv").append($("<input id = " +fields[i].name + " " + "type=" + fields[i].type +  " " + "name=" + fields[i].name + ">" ));
		}

		//appending localStorage data to the table
		
		var row = $("<tr />");
		$("#tab").append(row);
		var values = {};
		for (var i = 0; i < fields.length; i++){
    		for(var j=0; j < localStorage.length ; j++) {
    			if(fields[i].name == localStorage.key(j)) {
    				var newf = localStorage.getItem(localStorage.key(j));
					row.append ($("<td>" + newf + "</td>"));
					console.log(newf);
					//localStorage.removeItem(localStorage.key(j));
				}
    		}

		}

		//sorting

	    $('#tab').on("click", "th", function(){
			$(".icon-up-dir").toggle();
		    $(".icon-down-dir").toggle();
			var table = $(this).parents("table").eq(0);
			var rows = table.find('tr').toArray();
			rows.shift(); //remove first element which has th
			console.log($(this).index());
			var index=$(this).index();
			$.each(getdetails.tabheader , function(key,header) {
				if(index == key){

					var headertype = header.type;
				}
		
				if(headertype == "date") {
					var temp = new Array();

					for (var k=0;k<(rows.length-1);k++) {  
 		      
 		       			for (var j=0;j<(rows.length-k-1);j++) {
 		       	
 		       console.log(rows[j].cells[index].innerHTML,rows[j+1].cells[index].innerHTML ,"cmpre" );

 		       	var date1 = rows[j].cells[index].innerHTML.split("/")[1]+"/"+rows[j].cells[index].innerHTML.split("/")[0]+"/"+rows[j].cells[index].innerHTML.split("/")[2];
       		var date2 = rows[j+1].cells[index].innerHTML .split("/")[1]+"/"+rows[j+1].cells[index].innerHTML.split("/")[0]+"/"+rows[j+1].cells[index].innerHTML.split("/")[2];
 		       	if(new Date(date1)> new Date(date2)) {

 		       		 temp = rows[j];
 		       		rows[j] = rows[j+1];
 		       		rows[j+1] = temp;
 		       		console.log(rows[j],"sorting")
                 }
 		     
 		       }
 		      }
		this.asc = !this.asc;
		if (!this.asc){
			rows = rows.reverse();
		}
		for (i = 0; i < rows.length; i++){
			table.append(rows[i]);	
		}
		}
		
	if((headertype=="number") || (headertype=="string")) {
		
		var temp = new Array();
		
		for (var k=0;k<(rows.length-1);k++) {  
 		      
 		       for (var j=0;j<(rows.length-k-1);j++) {
 		       	
 		       console.log(rows[j].cells[index].innerHTML,rows[j+1].cells[index].innerHTML ,"cmpre" );
 		       	if(rows[j].cells[index].innerHTML.toLowerCase() > rows[j+1].cells[index].innerHTML.toLowerCase()) {

 		       		 temp = rows[j];
 		       		rows[j] = rows[j+1];
 		       		rows[j+1] = temp;
 		       		console.log(rows[j],"sorting")
                 }
 		     
 		       }
 		      }
		this.asc = !this.asc;
		if (!this.asc){
			rows = rows.reverse();
		}
		for (i = 0; i < rows.length; i++){
			table.append(rows[i]);	
		}
	}
    });
	});
    
	
	});
});