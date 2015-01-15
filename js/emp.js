$(document).ready(function () {

	$.getJSON("../json/emp.json", function(getdetails) {
    
	//adding headers
		var i = 0;
		var fields = getdetails.tabheader;
		var row = $("<tr />");
		$("#tab").append(row);
		row.append($("<th>" + "select" +"</th>" ));
		for(i=1; i<fields.length; i++) {
			
			row.append($("<th>" + fields[i].header + "<i class='icon-down-dir'></i><i class='icon-up-dir'></i></th>"));
		    $(".icon-up-dir").hide();
        }
		

         
    //adding employee details
		$.each(getdetails.employees , function(key,value) {
			var row = $("<tr />");
			$("#tab").append(row);
			row.append($("<td>" + "<input type=checkbox>" +"</td>" ));
			$.each(value ,function(k,v) {
				
				row.append ($("<td>" + v + "</td>" ));
			});
		});
		
	//adding label and input fields to the form

	for(i=1;i<fields.length;i++) {

	$("#label_div").append($("<label>" + fields[i].header + ":</label>" +"<br />"));

	if(fields[i].type == "date(dd/mm/yyyy)"){
	$("#input_div").append($("<input id = " +fields[i].name + " " + "type=" + fields[i].type +  " " + "placeholder=" + "DD/MM/YYYY" + " " + "name=" + fields[i].name +" " + "required>" ));
	}
	else{
	$("#input_div").append($("<input id = " +fields[i].name + " " + "type=" + fields[i].type +  " " + "name=" + fields[i].name + " " + "required>" ));
	}
	}

	// adding data to localStorage	and appending it to the table
		
		var s = 0;
		if( typeof(Storage) != "undefined") {

			$("#addEmpBtn").click(function() {
				var values = {};
				$("#formfields input").each(function() {
					var getInputName = $(this).attr('name');
					values[getInputName] = $(this).val();
				});
        		var data = localStorage.getItem("index");
		        if( data === undefined || data === null )
		        {
		            localStorage.setItem(s,JSON.stringify(values));          // first time saving.
		        }
		        else
		        {
		        	s = parseInt(localStorage.getItem("index"));
		            localStorage.setItem(s,JSON.stringify(values));
		            
		        }
		        s = s + 1;
		        localStorage.setItem("index" , s);

			});
		    for( var i=0; i < (parseInt(localStorage.getItem("index"))); i++ ) {
		        	var row = $("<tr />");
					
					$("#tab").append(row);
					formData = localStorage.getItem(i);
					// row.append($("<td>" + "<input type=checkbox>" +"</td>" ));
					$.each(JSON.parse(formData) , function (k,v) {
					row.append ($("<td>" + v + "</td>" ));
					})
		    }   	
		}
		else {
		    document.getElementById("tablemain").innerHTML = "Sorry, your browser does not support web storage...";
		}
						
	// Adding ROWS
$('#adddetails').on("click", function(){
	   
        var row = $("<tr />");
     	$("#tab").append(row);
	         if($(this).val()){
	         $("#field input").each(function() {
		         row.append ($("<td>" + $(this).val() + "</td>" ));
			});
	   	  }
	   	});

	//clear row

$("#Age").focusout(function() {

			var getInputValue = $(this).val();
			if(getInputValue < 1) {
				alert("invalid Age");
				$(this).val("");
			}
		});
$("#DOB").focusout(function() {
	var d=new Date();
	var year = d.getFullYear();
    
    
	var getvalue = $(this).val();
	var dataLength = getvalue.length;
	dataLength = dataLength-4;
	var datepattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
	var checkpattern = getvalue.match(datepattern); 
	if(checkpattern == null){


		dd= getvalue.substr(0,2);
		mm = getvalue.substr(2,2);
		y  = getvalue.substr(4,dataLength)
		if (mm < 1 || mm > 12) {
			alert("invalid date");
			$(this).val("");
		}

		else if (dd < 1 || dd> 31) 
			{alert("invalid date");$(this).val("");}

		else  if(y>year || y.length != 4)
			{alert("invalid date") ;$(this).val("");}
		else if ((mm==4 || mm==6 || mm==9 || mm==11) && dd ==31) 
			{
				alert("invalid date");$(this).val("");
			}

		else if (mm == 2) 
		{  
		var isleap = (y % 4 == 0 && (y % 100 != 0 || y % 400 == 0));
		if (dd> 29 || (dd ==29 && !isleap)) 
			alert("invalid");$(this).val("");
		}      

		else{
			$(this).val(dd+"/"+mm+"/"+y);

		}
	}
	else{
		dd= getvalue.split("/")[0];
		mm = getvalue.split("/")[1];
		y  = getvalue.split("/")[2];
		if(dd.length < 2)
		{
			dd="0"+dd;
		}
		if(mm.length < 2){
			mm="0"+mm;
		}
		
		if (mm < 1 || mm > 12) {
		alert("invalid date");
		$(this).val("");
		}

		else if (dd < 1 || dd> 31) {
			alert("invalid date");$(this).val("");
		}

		else  if(y>year || y.length < 4)
		{
			alert("invalid date") ;$(this).val("");
		}
		else if ((mm==4 || mm==6 || mm==9 || mm==11) && dd ==31) 
		{  
			alert("invalid date");$(this).val("");
		}

		else if (mm == 2) 
		{  
		var isleap = (y % 4 == 0 && (y % 100 != 0 || y % 400 == 0));
		if (dd> 29 || (dd ==29 && !isleap)) 
		
		{
			alert("invalid date");
	        $(this).val("");
	     }
		}      

		if($(this).val()!="") {
			alert("mm");
		$(this).val(dd+"/"+mm+"/"+y);
		}
	}

	});
	$('#clearrow').on("click", function(){

	if($('#tab tr').size()>1){
	$('#tab tr:last-child').remove();
	var d = parseInt(localStorage.getItem("index"));
	if(d){
	d = d-1; 
	localStorage.removeItem(d);
	localStorage.setItem("index" , d);
	}
	}
	else{
	alert('One row should be present in table');
	}
});


	//sorting
         // $('#tab td:firsts-child').remove();
	    $('#tab').on("click", "th", function(){
			$(".icon-up-dir").toggle();

		    $(".icon-down-dir").toggle();

			
			var table = $(this).parents("table").eq(0);
			var rows = table.find('tr').toArray();
			rows.shift(); //remove first element which has th
			var index=$(this).index();
			alert(index);

			$.each(getdetails.tabheader , function(key,header) {
				if(index == key){

					var headertype = header.type;

				}
		
				if(headertype == "date(dd/mm/yyyy)") {
					
					var temp = new Array();
					for (var k=0;k<(rows.length-1);k++) {   		      
 		       			for (var j=0;j<(rows.length-k-1);j++) {
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
			 		       	if(rows[j].cells[index].innerHTML.toLowerCase() > rows[j+1].cells[index].innerHTML.toLowerCase()) {
			 		       		alert(rows[j].cells[index].innerHTML);
			 		       		alert(rows[j+1].cells[index].innerHTML);
			 		       		 temp = rows[j];
			 		       		rows[j] = rows[j+1];
			 		       		rows[j+1] = temp;
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
	function deleteRow() {
	var table=document.getElementById("tab");
	var rowCount=table.rows.length;
	for(var i=0;i<rowCount;i++){
		var row=table.rows[i];
		var chkbox=row.cells[0].childNodes[0];
		if(null!=chkbox&&true==chkbox.checked){
			if(rowCount<1){
				alert("Cannot delete all the rows.");
				break;
			}
            table.deleteRow(i);
            rowCount--;
            i--;
        }
    }
}	
	});
});
       