$(document).ready(function () {

	$.getJSON("../json/emp.json", function(getdetails) {

		//adding headers
		var fields = getdetails.tabheader;
		var row = $("<tr />");
		$("#tab").append(row);
		for(var i=0; i<fields.length; i++) {
			row.append($("<th>" + fields[i].header + "</th>"));
		}
		$.each(getdetails.employees , function(key,value) {
			var row = $("<tr />");
			console.log(value);
			$("#tab").append(row);
			row.append ($("<td>" + value.Name + "</td>" ));
			row.append($("<td>" + value.Age + "</td>"));
			row.append($("<td>" + value.DOB + "</td>"));
			row.append($("<td>" + value.Designation + "</td>"));
			row.append($("<td>" + value.Salary + "</td>"));
		});
	
		var namearray 	= new Array();
		var agearray	= new Array();
		var salaryarray	= new Array();
		var desigarray 	= new Array();
		var dobarray	= new Array();		
		var table 		= document.getElementById('tab');
		var count = table.rows.length;
		var j;
		var k;
	    var temp;
    

		function initializeArrays() {
			for (var i = 1,row;i < count; i++) {
				row=table.rows[i];
				namearray[i-1]=row.cells[0].innerHTML;
				namearray[i-1]= namearray[i-1].toLowerCase();
				agearray[i-1]=parseInt(row.cells[1].innerHTML);
		        salaryarray[i-1]=parseInt(row.cells[4].innerHTML);
		        desigarray[i-1]=row.cells[3].innerHTML;
			    dobarray[i-1]= row.cells[2].innerHTML;
			}
		}
		initializeArrays();
       
		$("#select").on("click", function() {
			
			var e=document.getElementById('select');
			var strUser=e.options[e.selectedIndex].value;
			initializeArrays();
			if(strUser == "1")
			sortName();
			else if(strUser== "2")
			sortAge();
			else if(strUser== "3")
			sortDob();
			else if(strUser== "4")
			sortDesig();
			else if(strUser== "5")
			sortSalary();
		});
   
	 
		function sortName(){
			for (k=0;k<(count-1);k++) {  
		       for (j=0;j<(count-k-1);j++) {
		          if(namearray[j]>namearray[j+1]) { 
		          
			            temp=namearray[j];
			            namearray[j]=namearray[j+1];
			            namearray[j+1]=temp;

			            temp=agearray[j];
			            agearray[j]=agearray[j+1];
			            agearray[j+1]=temp;
			                             
			            temp=desigarray[j];
			            desigarray[j]=desigarray[j+1];
			            desigarray[j+1]=temp;

			            temp=salaryarray[j];
			            salaryarray[j]=salaryarray[j+1];
			           	salaryarray[j+1]=temp;

			           	temp=dobarray[j];
			            dobarray[j]=dobarray[j+1];
			            dobarray[j+1]=temp;
		        	}
		    	}

			}
		    
		    for(var i=1;i<=(count-1);i++) {
			    table.rows[i].cells[0].innerHTML=namearray[i-1];
				table.rows[i].cells[1].innerHTML=agearray[i-1];
				table.rows[i].cells[2].innerHTML=dobarray[i-1];
				table.rows[i].cells[3].innerHTML=desigarray[i-1];
				table.rows[i].cells[4].innerHTML=salaryarray[i-1];
			}
		}	

	
	function sortAge(){
		
	for (var k=0;k<(count-1);k++)
    {    
       for (var j=0;j<(count-k-1);j++)
       {
          if(agearray[j]>agearray[j+1])
          { 
            temp=namearray[j];
            namearray[j]=namearray[j+1];
            namearray[j+1]=temp;

            temp=agearray[j];
            agearray[j]=agearray[j+1];
            agearray[j+1]=temp;
                             
            temp=desigarray[j];
            desigarray[j]=desigarray[j+1];
            desigarray[j+1]=temp;

            temp=salaryarray[j];
            salaryarray[j]=salaryarray[j+1];
           	salaryarray[j+1]=temp;

           	temp=dobarray[j];
            dobarray[j]=dobarray[j+1];
            dobarray[j+1]=temp;
                 

          }
       }

     }

for(var i=1;i<=(count-1);i++)
    {
    table.rows[i].cells[0].innerHTML=namearray[i-1];
	table.rows[i].cells[1].innerHTML=agearray[i-1];
	table.rows[i].cells[2].innerHTML=dobarray[i-1];
	table.rows[i].cells[3].innerHTML=desigarray[i-1];
	table.rows[i].cells[4].innerHTML=salaryarray[i-1];
	}
}

	function sortSalary()
	{
		
	for (var k=0;k<(count-1);k++)
    {    
       for (var j=0;j<(count-k-1);j++)
       {
          if(salaryarray[j]>salaryarray[j+1])
          { 
            temp=namearray[j];
            namearray[j]=namearray[j+1];
            namearray[j+1]=temp;

            temp=agearray[j];
            agearray[j]=agearray[j+1];
            agearray[j+1]=temp;
                             
            temp=desigarray[j];
            desigarray[j]=desigarray[j+1];
            desigarray[j+1]=temp;

            temp=salaryarray[j];
            salaryarray[j]=salaryarray[j+1];
           	salaryarray[j+1]=temp;

           	temp=dobarray[j];
            dobarray[j]=dobarray[j+1];
            dobarray[j+1]=temp;
                 

          }
       }

     }

for(var i=1;i<=(count-1);i++)
    {
    table.rows[i].cells[0].innerHTML=namearray[i-1];
	table.rows[i].cells[1].innerHTML=agearray[i-1];
	table.rows[i].cells[2].innerHTML=dobarray[i-1];
	table.rows[i].cells[3].innerHTML=desigarray[i-1];
	table.rows[i].cells[4].innerHTML=salaryarray[i-1];
	}
}
function sortDesig(){

	for (var k=0;k<(count-1);k++)
    {    
       for (var j=0;j<(count-k-1);j++)
       {
       	// if( sortingTwoDates( desigarray[j], desigarray[j+1] ) ) {}
          if(desigarray[j]>desigarray[j+1])
          { 
            temp=namearray[j];
            namearray[j]=namearray[j+1];
            namearray[j+1]=temp;

            temp=agearray[j];
            agearray[j]=agearray[j+1];
            agearray[j+1]=temp;
                             
            temp=desigarray[j];
            desigarray[j]=desigarray[j+1];
            desigarray[j+1]=temp;

            temp=salaryarray[j];
            salaryarray[j]=salaryarray[j+1];
           	salaryarray[j+1]=temp;

           	temp=dobarray[j];
            dobarray[j]=dobarray[j+1];
            dobarray[j+1]=temp;
                 

          }
       }

     }

for(var i=1;i<=(count-1);i++)
    {
    table.rows[i].cells[0].innerHTML=namearray[i-1];
	table.rows[i].cells[1].innerHTML=agearray[i-1];
	table.rows[i].cells[2].innerHTML=dobarray[i-1];
	table.rows[i].cells[3].innerHTML=desigarray[i-1];
	table.rows[i].cells[4].innerHTML=salaryarray[i-1];
	}

}
function sortDob(){

// 	array.sort(function (dobarray[0], dobarray[1]) {
//   function parseDate(dobarray) {
//     var parts = dobarray.match(/(\d+)/g);
//     // assumes M/D/Y date format
//     return new Date(parts[2], parts[0]-1, parts[1]); // months are 0-based
//   }
//   return parseDate(dobarray[0]) - parseDate(dobarray[1]);
// });

	for (var k=0;k<(count-1);k++)
    {    
       for (var j=0;j<(count-k-1);j++)
       {
       	if(dobarray[j+1]) {

       		var date1 = dobarray[j].split("/")[1]+"/"+dobarray[j].split("/")[0]+"/"+dobarray[j].split("/")[2];
       		var date2 = dobarray[j+1].split("/")[1]+"/"+dobarray[j+1].split("/")[0]+"/"+dobarray[j+1].split("/")[2];

	       	if(new Date(date1) > new Date(date2))
	          { 
	            temp=namearray[j];
	            namearray[j]=namearray[j+1];
	            namearray[j+1]=temp;

	            temp=agearray[j];
	            agearray[j]=agearray[j+1];
	            agearray[j+1]=temp;
	                             
	            temp=desigarray[j];
	            desigarray[j]=desigarray[j+1];
	            desigarray[j+1]=temp;

	            temp=salaryarray[j];
	            salaryarray[j]=salaryarray[j+1];
	           	salaryarray[j+1]=temp;

	           	temp=dobarray[j];
	            dobarray[j]=dobarray[j+1];
	            dobarray[j+1]=temp;
	                 

	          }
	      }
       }

     }

for(var i=1;i<=(count-1);i++)
    {
    table.rows[i].cells[0].innerHTML=namearray[i-1];
	table.rows[i].cells[1].innerHTML=agearray[i-1];
	table.rows[i].cells[2].innerHTML=dobarray[i-1];
	table.rows[i].cells[3].innerHTML=desigarray[i-1];
	table.rows[i].cells[4].innerHTML=salaryarray[i-1];
	}
}
	});

});