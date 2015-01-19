$(document).ready(function () {

	$.getJSON("../json/emp.json", function(getdetails) {

	//adding headers
		
		
		var i = 0;
		var fields = getdetails.tabheader;
		var row = $("<tr />");
		$("#tab").append(row);
		 //row.append($("<th>" + " " +"</th>" ));
		for(i=0; i<fields.length; i++) {
			if(i == 0) {
				row.append($("<th>" + fields[i].header + "</th>"));;
			}else {
			row.append($("<th>" + fields[i].header + "<i class='icon-down-dir'></i><i class='icon-up-dir'></i></th>"));
		    $(".icon-up-dir").hide();
			}
        }
       
		
		for(i=1;i<fields.length;i++) {

			$("#label_div").append($("<label>" + fields[i].header + ":</label>" +"<br />"));

			if(fields[i].type == "date(dd/mm/yyyy)"){
				$("#input_div").append($("<input id = " +fields[i].name + " " + "type=" + fields[i].type +  " " + "placeholder=" + "DD/MM/YYYY" + " " + "name=" + fields[i].name +" " + "required>" ));
			}
			else{
				$("#input_div").append($("<input id = " +fields[i].name + " " + "type=" + fields[i].type +  " " + "name=" + fields[i].name + " " + "required>" ));
			}
		}
         
    //adding employee details
		$.each(getdetails.employees , function(key,value) {
			var row = $("<tr />");
			$("#tab").append(row);
			 //row.append($("<td>" + "<input type=checkbox>" +"</td>" ));
			$.each(value ,function(k,v) {
				row.append ($("<td>" + v + "</td>" ));
			});
			 // row.append($("<td>" + "<input type=checkbox>" +"</td>" ));
		});
		getlocaldata();
		
	//adding label and input fields to the form

		for(i=1;i<fields.length;i++) {

			$("#labelDiv").append($("<label>" + fields[i].header + ":</label>" +"<br />"));
			if(fields[i].type == "date(dd/mm/yyyy)"){
				$("#inputDiv").append($("<input id = " +fields[i].name + " " + "type=" + fields[i].type +  " " + "placeholder=" + "DD/MM/YYYY" + " " + "name=" + fields[i].name + " " + "required>" ));
			}
			else {
				$("#inputDiv").append($("<input id = " +fields[i].name +  " " + "type=" + fields[i].type +  " " + "name=" + fields[i].name + " " + "required>" ));
			}	
		}
	// adding data to localStorage	and appending it to the table
		
		var s = 0;
		if( typeof(Storage) != "undefined") {

			$("#addEmpForm").on("submit" , function(event) {
                event.preventDefault();   				
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
                getlocaldata();

			});
		  
		

		}
		else {
		    document.getElementById("tablemain").innerHTML = "Sorry, your browser does not support web storage...";
		}

		$("#DOB").focusout(function() {
			
			var d=new Date();
			var year = d.getFullYear();

			var month = d.getMonth();
			var date = d.getDate();

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

					alert("invalid ");
					$(this).val("");
				}

				else if (dd < 1 || dd> 31) {
					alert("invalid date");$(this).val("");
				}

				else  if(y>year || y.length != 4) {
					alert("invalid date") ;
					$(this).val("");
				}
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
				else if (y == year)  {
					if((mm-1) > month) {
						alert("invalid date");$(this).val("");
					}
					else if (dd > date) {
						alert("invalid date");$(this).val("");
					}
				}     

				else{
					$(this).val(dd+"/"+mm+"/"+y);

				}
			}
			else{

				if(getvalue.match(/^(\d{1,2})(\-)(\d{1,2})(\-)(\d{4})$/)) {
				dd= getvalue.split("-")[0];
				mm = getvalue.split("-")[1];
				y  = getvalue.split("-")[2];

				alert(dd,mm,y);
			}
				if(getvalue.match(/^(\d{1,2})(\/)(\d{1,2})(\/)(\d{4})$/)){
				dd= getvalue.split("/")[0];
				mm = getvalue.split("/")[1];
				y  = getvalue.split("/")[2];
			}
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
				else if (y == year)  {
					if((mm-1) > month) {
						alert("invalid date");$(this).val("");
					}
					else if (dd > date) {
						alert("invalid date");$(this).val("");
					}
				}   

			}
			
            //To display age...................//
			
			if($(this).val()!="") {
					$(this).val(dd+"/"+mm+"/"+y);
					console.log(dd , mm , y);
					console.log(date , month , year);
					ay = year - y;
					am = month - (mm-1);
					ad  = date - dd;
					console.log(ad , am , ay);
					if (am < 0 || (am == 0 && ad < 0)) {
						if((parseInt(ay)-1) > 0){
							document.getElementById("Age").value = parseInt(ay) - 1;
						} else {
							alert("Age must be greater than zero");
						}
					}
					else {
						if(parseInt(ay) > 0){
							document.getElementById("Age").value = parseInt(ay);
						} else {
							alert("Age must be greater than zero");
						}
					}
				}

			});
			
            //validate
			$("#Salary").focusout(function (){
				salary = $(this).val();
				if(salary < 0) {
					alert("invalid salary");
				}
			});

	//sorting

	    $('#tab').on("click", "th", function(){
			$(".icon-up-dir").toggle();

		    $(".icon-down-dir").toggle();

			
			var table = $(this).parents("table").eq(0);
			var rows = table.find('tr').toArray();
			rows.shift(); //remove first element which has th
			var index=$(this).index();
			if(index != 0) {
				//index = index -1;
			$.each(getdetails.tabheader , function(key,header) {
				if(index == (key)){

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
		
				if(headertype == "number") {					
					var temp;				
					for (var k=0;k<(rows.length-1);k++) {  			 		      
			 		    for (var j=0;j<(rows.length-k-1);j++) {	

			 		    	console.log (rows[j].cells[index].innerHTML , rows[j+1].cells[index].innerHTML,"compare");
			 		    	//if (rows[j+1].cells[index].innerHTML) {			 		    			 		       	
			 		       	if(parseInt(rows[j].cells[index].innerHTML) > parseInt(rows[j+1].cells[index].innerHTML)) {
			 		       		//console.log (rows[j].cells[index].innerHTML.toLowerCase() , rows[j+1].cells[index].innerHTML.toLowerCase());
			 		       		 console.log("true");
			 		       		 temp = rows[j];
			 		       		rows[j] = rows[j+1];
			 		       		rows[j+1] = temp;
			                }
			            	//}
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
				if(headertype == "string") {					
					var temp = new Array();				
					for (var k=0;k<(rows.length-1);k++) {  			 		      
			 		    for (var j=0;j<(rows.length-k-1);j++) {	
			 		    
			 		    	if (rows[j+1].cells[index].innerHTML) {			 		    			 		       	
			 		       	if(rows[j].cells[index].innerHTML.toLowerCase() > rows[j+1].cells[index].innerHTML.toLowerCase()) {
			 		       		console.log (rows[j].cells[index].innerHTML.toLowerCase() , rows[j+1].cells[index].innerHTML.toLowerCase());
			 		       		 temp = rows[j];
			 		       		rows[j] = rows[j+1];
			 		       		rows[j+1] = temp;
			                }
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
			}
    	
    	});
	
		   
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

  /*GETLOCALDATA*/
  function getlocaldata(){
  	         
			    
			    for( var i=0; i < (parseInt(localStorage.getItem("index"))); i++ ) {
			        var row = $("<tr />");
					$("#tab").append(row);
					row.append($("<td>" + "<input type=checkbox>" +"</td>" ));
					formData = localStorage.getItem(i);
					$.each(JSON.parse(formData) , function (k,v) {
						row.append ($("<td>" + v + "</td>" ));
					});
				}
				
		    }   
		    	