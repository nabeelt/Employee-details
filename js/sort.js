    
function sortBy(){
	
	var e=document.getElementById('select');
	var strUser=e.options[e.selectedIndex].value;
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
}

function sortName(){		
	
	var namearray 	= new Array(20);
	var agearray	= new Array(20);
	var salaryarray	= new Array(20);
	var desigarray 	= new Array(20);
	var dobarray	= new Array(20);		
	var table 		= document.getElementById('tab');
	var count 		= table.rows.length;
    var temp;
	
	for (var i = 1,row;row=table.rows[i],i < count; i++) {
		namearray[i-1]=row.cells[0].innerHTML;
		namearray[i-1]= namearray[i-1].toLowerCase();
		agearray[i-1]=parseInt(row.cells[1].innerHTML);
        salaryarray[i-1]=parseInt(row.cells[4].innerHTML);
        desigarray[i-1]=row.cells[3].innerHTML;
	    dobarray[i-1]= row.cells[2].innerHTML;
	}
	 
    
	for (var k=0;k<(count-1);k++)
    {    
       for (var j=0;j<(count-k-1);j++)
       {
          if(namearray[j]>namearray[j+1])
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

	
	function sortAge(){
		
		var namearray 	= new Array(20);
		var agearray	= new Array(20);
		var salaryarray	= new Array(20);
		var desigarray 	= new Array(20);
		var dobarray	= new Array(20);		
		var table 		= document.getElementById('tab');
		var count 		= table.rows.length;
		var temp;
		for (var i = 1,row;row=table.rows[i],i < count; i++) {
		namearray[i-1]=row.cells[0].innerHTML;
		agearray[i-1]=parseInt(row.cells[1].innerHTML);
		salaryarray[i-1]=parseInt(row.cells[4].innerHTML);
		desigarray[i-1]=row.cells[3].innerHTML;
		dobarray[i-1]= row.cells[2].innerHTML;
	}
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
		var namearray 	= new Array(20);
	var agearray	= new Array(20);
	var salaryarray	= new Array(20);
	var desigarray 	= new Array(20);
	var dobarray	= new Array(20);		
	var table 		= document.getElementById('tab');
	var count 		= table.rows.length;
    var temp=0;
		for (var i = 1,row;row=table.rows[i],i < count; i++) {
		namearray[i-1]=row.cells[0].innerHTML;
		agearray[i-1]=parseInt(row.cells[1].innerHTML);
        salaryarray[i-1]=row.cells[4].innerHTML;
        desigarray[i-1]=row.cells[3].innerHTML;
	    dobarray[i-1]= row.cells[2].innerHTML;
	}
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
	var namearray 	= new Array(20);
	var agearray	= new Array(20);
	var salaryarray	= new Array(20);
	var desigarray 	= new Array(20);
	var dobarray	= new Array(20);		
	var table 		= document.getElementById('tab');
	var count 		= table.rows.length;
    var temp=0;
		for (var i = 1,row;row=table.rows[i],i < count; i++) {
		namearray[i-1]=row.cells[0].innerHTML;
		agearray[i-1]=parseInt(row.cells[1].innerHTML);
        salaryarray[i-1]=row.cells[4].innerHTML;
        desigarray[i-1]=row.cells[3].innerHTML;
	    dobarray[i-1]= row.cells[2].innerHTML;
	}
	for (var k=0;k<(count-1);k++)
    {    
       for (var j=0;j<(count-k-1);j++)
       {
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
	var namearray 	= new Array(20);
	var agearray	= new Array(20);
	var salaryarray	= new Array(20);
	var desigarray 	= new Array(20);
	var dobarray	= new Date(20);		
	var table 		= document.getElementById('tab');
	var count 		= table.rows.length;
    var temp=0;
		for (var i = 1,row;row=table.rows[i],i < count; i++) {
		namearray[i-1]=row.cells[0].innerHTML;
		agearray[i-1]=parseInt(row.cells[1].innerHTML);
        salaryarray[i-1]=row.cells[4].innerHTML;
        desigarray[i-1]=row.cells[3].innerHTML;
	    dobarray[i-1]= row.cells[2].innerHTML;
	}
	for (var k=0;k<(count-1);k++)
    {    
       for (var j=0;j<(count-k-1);j++)
       {
          if(dobarray[j]>dobarray[j+1])
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