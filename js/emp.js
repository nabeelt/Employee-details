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
			$("#tab").append(row);
			$.each(value ,function(k,v) {

				row.append ($("<td>" + v + "</td>" ));
			});

		});
		for(var i=0;i<fields.length;i++) {
			var opt = $("<option />")
			$("#select").append(opt);
			opt.append($("<option>" + fields[i].header + "</option>"));
		}
	
		var namearray 	= new Array();
		var ageArray	= new Array();
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
				ageArray[i-1]=parseInt(row.cells[1].innerHTML);
		        salaryarray[i-1]=parseInt(row.cells[4].innerHTML);
		        desigarray[i-1]=row.cells[3].innerHTML;
			    dobarray[i-1]= row.cells[2].innerHTML;
			}
		}
		initializeArrays();
       
		$("th").on("click", function() {

			console.log($(this).index());
			var headerindx = $(this).index();

			$.each(getdetails.tabheader , function(key,value) {
				if(key == headerindx){
					var headertype = value.type;
					console.log(headertype);
					if(headertype == "number"){
						sortByNumber(headerindx);
					}
				}
			});
		
			// var e=document.getElementById('select');
			// var strUser=e.options[e.selectedIndex].value;
			initializeArrays();
			// if(strUser == "1")
			// sortName();
			// else if(strUser== "2")
			// sortAge();
			// else if(strUser== "3")
			// sortDob();
			// else if(strUser== "4")
			// sortDesig();
			// else if(strUser== "5")
			// sortSalary();
			
		});

	function sortByNumber(index){
		var count = table.rows.length;
		for (var i = 1,row;i < count; i++) {
			row=table.rows[i];
			console.log(row);
			ageArray[i-1]=row.cells[index].innerHTML;
		}
			console.log(ageArray , "gghj");
		for (var k=0;k<(count-1);k++)
	    {    
	       for (var j=0;j<(count-k-1);j++)
	       {
	          if(ageArray[j]>ageArray[j+1])
	          { 
		           temp=table.rows[j];
		           table.rows[j]=table.rows[j+1];
		           table.rows[j+1]=temp;
		           console.log(table.rows[j] , "row");
					$("#tab").append ($("<tr>" + v + "</tr>" ));

                }
       		}
		}
		// for(var i=1;i<=(count-1);i++)
	 //    {
		//     table.rows[i].innerHTML=table.rows[i-1];
		// 	table.rows[i].cells[index].innerHTML=ageArray[i-1];
		// 	table.rows[i].cells[2].innerHTML=dobarray[i-1];
		// 	table.rows[i].cells[3].innerHTML=desigarray[i-1];
		// 	table.rows[i].cells[4].innerHTML=salaryarray[i-1];
		 // }
	}
   
	 
// 		function sortName(){
// 			for (k=0;k<(count-1);k++) {  
// 		       for (j=0;j<(count-k-1);j++) {
// 		          if(namearray[j]>namearray[j+1]) { 
		          
// 			            temp=namearray[j];
// 			            namearray[j]=namearray[j+1];
// 			            namearray[j+1]=temp;

// 			            temp=agearray[j];
// 			            agearray[j]=agearray[j+1];
// 			            agearray[j+1]=temp;
			                             
// 			            temp=desigarray[j];
// 			            desigarray[j]=desigarray[j+1];
// 			            desigarray[j+1]=temp;

// 			            temp=salaryarray[j];
// 			            salaryarray[j]=salaryarray[j+1];
// 			           	salaryarray[j+1]=temp;

// 			           	temp=dobarray[j];
// 			            dobarray[j]=dobarray[j+1];
// 			            dobarray[j+1]=temp;
// 		        	}
// 		    	}

// 			}
		    
// 		    for(var i=1;i<=(count-1);i++) {
// 			    table.rows[i].cells[0].innerHTML=namearray[i-1];
// 				table.rows[i].cells[1].innerHTML=agearray[i-1];
// 				table.rows[i].cells[2].innerHTML=dobarray[i-1];
// 				table.rows[i].cells[3].innerHTML=desigarray[i-1];
// 				table.rows[i].cells[4].innerHTML=salaryarray[i-1];
// 			}
// 		}	



// 	function sortSalary()
// 	{
		
// 	for (var k=0;k<(count-1);k++)
//     {    
//        for (var j=0;j<(count-k-1);j++)
//        {
//           if(salaryarray[j]>salaryarray[j+1])
//           { 
//             temp=namearray[j];
//             namearray[j]=namearray[j+1];
//             namearray[j+1]=temp;

//             temp=agearray[j];
//             agearray[j]=agearray[j+1];
//             agearray[j+1]=temp;
                             
//             temp=desigarray[j];
//             desigarray[j]=desigarray[j+1];
//             desigarray[j+1]=temp;

//             temp=salaryarray[j];
//             salaryarray[j]=salaryarray[j+1];
//            	salaryarray[j+1]=temp;

//            	temp=dobarray[j];
//             dobarray[j]=dobarray[j+1];
//             dobarray[j+1]=temp;
                 

//           }
//        }

//      }

// for(var i=1;i<=(count-1);i++)
//     {
//     table.rows[i].cells[0].innerHTML=namearray[i-1];
// 	table.rows[i].cells[1].innerHTML=agearray[i-1];
// 	table.rows[i].cells[2].innerHTML=dobarray[i-1];
// 	table.rows[i].cells[3].innerHTML=desigarray[i-1];
// 	table.rows[i].cells[4].innerHTML=salaryarray[i-1];
// 	}
// }
// function sortDesig(){

// 	for (var k=0;k<(count-1);k++)
//     {    
//        for (var j=0;j<(count-k-1);j++)
//        {
//        	// if( sortingTwoDates( desigarray[j], desigarray[j+1] ) ) {}
//           if(desigarray[j]>desigarray[j+1])
//           { 
//             temp=namearray[j];
//             namearray[j]=namearray[j+1];
//             namearray[j+1]=temp;

//             temp=agearray[j];
//             agearray[j]=agearray[j+1];
//             agearray[j+1]=temp;
                             
//             temp=desigarray[j];
//             desigarray[j]=desigarray[j+1];
//             desigarray[j+1]=temp;

//             temp=salaryarray[j];
//             salaryarray[j]=salaryarray[j+1];
//            	salaryarray[j+1]=temp;

//            	temp=dobarray[j];
//             dobarray[j]=dobarray[j+1];
//             dobarray[j+1]=temp;
                 

//           }
//        }

//      }

// for(var i=1;i<=(count-1);i++)
//     {
//     table.rows[i].cells[0].innerHTML=namearray[i-1];
// 	table.rows[i].cells[1].innerHTML=agearray[i-1];
// 	table.rows[i].cells[2].innerHTML=dobarray[i-1];
// 	table.rows[i].cells[3].innerHTML=desigarray[i-1];
// 	table.rows[i].cells[4].innerHTML=salaryarray[i-1];
// 	}

// }
// function sortDob(){

// 	for (var k=0;k<(count-1);k++)
//     {    
//        for (var j=0;j<(count-k-1);j++)
//        {
//        	if(dobarray[j+1]) {

//        		var date1 = dobarray[j].split("/")[1]+"/"+dobarray[j].split("/")[0]+"/"+dobarray[j].split("/")[2];
//        		var date2 = dobarray[j+1].split("/")[1]+"/"+dobarray[j+1].split("/")[0]+"/"+dobarray[j+1].split("/")[2];

// 	       	if(new Date(date1) > new Date(date2))
// 	          { 
// 	            temp=namearray[j];
// 	            namearray[j]=namearray[j+1];
// 	            namearray[j+1]=temp;

// 	            temp=agearray[j];
// 	            agearray[j]=agearray[j+1];
// 	            agearray[j+1]=temp;
	                             
// 	            temp=desigarray[j];
// 	            desigarray[j]=desigarray[j+1];
// 	            desigarray[j+1]=temp;

// 	            temp=salaryarray[j];
// 	            salaryarray[j]=salaryarray[j+1];
// 	           	salaryarray[j+1]=temp;

// 	           	temp=dobarray[j];
// 	            dobarray[j]=dobarray[j+1];
// 	            dobarray[j+1]=temp;
	                 

// 	          }
// 	      }
//        }

//      }

// for(var i=1;i<=(count-1);i++)
//     {
//     table.rows[i].cells[0].innerHTML=namearray[i-1];
// 	table.rows[i].cells[1].innerHTML=agearray[i-1];
// 	table.rows[i].cells[2].innerHTML=dobarray[i-1];
// 	table.rows[i].cells[3].innerHTML=desigarray[i-1];
// 	table.rows[i].cells[4].innerHTML=salaryarray[i-1];
// 	}
// }
	});

});