$(document).ready(function () {
			$.getJSON("../json/employee.json", function(getdetails) {
				$.each(getdetails.employees , function(i,item) {
					var row = $("<tr />");
					$("#tab").append(row);
					row.append ($("<td>" + item.Name + "</td>" ));
					row.append($("<td>" + item.Age + "</td>"));
					row.append($("<td>" + item.DOB + "</td>"));
					row.append($("<td>" + item.Designation + "</td>"));
					row.append($("<td>" + item.Salary + "</td>"));
				});
			});
		});