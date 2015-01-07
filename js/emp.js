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
			row.append ($("<td>" + value.Name + "</td>" ));
			row.append($("<td>" + value.Age + "</td>"));
			row.append($("<td>" + value.DOB + "</td>"));
			row.append($("<td>" + value.Designation + "</td>"));
			row.append($("<td>" + value.Salary + "</td>"));
		});
	});

});