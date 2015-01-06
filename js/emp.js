$(document).ready(function () {

	$.getJSON("../json/emp.json", function(getdetails) {
		$.each(getdetails.tabheader , function(key,value) {
			var row = $("<tr />");
			console.log(value);
			$("#tab").append(row);
			row.append ($("<th>" + value.h1 + "</th>" ));
			row.append($("<th>" + value.h2 + "</th>"));
			row.append($("<th>" + value.h3 + "</th>"));
			row.append($("<th>" + value.h4 + "</th>"));
			row.append($("<th>" + value.h5 + "</th>"));
		});
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
	});
});