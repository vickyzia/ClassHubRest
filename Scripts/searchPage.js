$(document).ready(function () {

	var searchFunc = function () {

	    var data = jQuery("#searchBox").val();
	    if (data) {
	        $.ajax({
	            type: "POST",
	            async: false,
	            url: "/Class/searchClasses", // script to validate in server side
	            data: "searchquery=" + data,
	            success: function (data) {
	                $('#searchList').empty();
	                if (!$.trim(data)) {
	                    document.getElementById("results").innerHTML = " ";
	                }
	                var d = jQuery("#searchBox").val();
	                var v = JSON.parse(data);
	                var text = "";
	                var html = "";
	                var h = "";
	                if (v.length > 0) {
	                    for (var i = 0; i < v.length; i++) {

	                        if (v[i].joined == 1) {
	                            var x = "View";
	                            h = "<a type=\"button\"class=\"pull-right btn btn-default joinButton\" href=\"/Class/ClassPage?classId="+ v[i].classId+"\">" + x + "</a>";

	                        }
	                        else if (v[i].joined == 2) {
	                            x = "Send Request";
	                            h =  "<a type=\"button\"class=\"pull-right btn btn-default joinButton\" href=\"/Class/RequestToJoin?classId="+ v[i].classId+"&searchquery="+d+"\">" + x + "</a>";
	                        } else {
	                            x = "Request Sent";
	                            h = "<p type=\"button\"class=\"pull-right btn btn-default joinButton\">" + x + "</p>";
	                        }
	                        html = "<li class=\"listItem list-group-item\">" +


                        "<div class=\"row\">" +
                            "<h3 class=\"list-group-item-heading col-md-8\">" + v[i].className + "</h3>" + h+

                            

                        "</div>" +
                        "<div class=\"row\">" +
                            "<p class=\"col-xs-12\">" + v[i].classDesc + "</p>" +

                        "</div>" +
                        "<div class=\"row\">" +

                            "<small class=\"pull-right\">Created By:" + v[i].classCreator + "</small>" +
                        "</div>" +


                    "</li>";
	                    }

	                }
	                else {
	                    html = "<h3> No Results To Show</h3>"
	                }
	                $('#searchList').append(html);


	            }

	        });
	    }

	};
	$('#searchBox').keyup(searchFunc);
	searchFunc();
});

