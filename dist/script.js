$(function () {
  $("#btnClone").bind("click", function () {
    var index = $("#container select").length + 1;

    //Clone the DropDownList
    var ddl = $("#ddlFruits").clone();
    var ddl2 = $("#ddlFruits2").clone();

    //Set the ID and Name
    ddl.attr("id", "ddlFruits_" + index);
    ddl.attr("name", "ddlFruits_" + index);

    ddl2.attr("id", "ddlFruits_" + index);
    ddl2.attr("name", "ddlFruits_" + index);

    //[OPTIONAL] Copy the selected value
    var selectedValue = $("#ddlFruits option:selected").val();
    ddl.
    find("option[value = '" + selectedValue + "']").
    attr("selected", "selected");
    var selectedValue2 = $("#ddlFruits2 option:selected").val();
    ddl2.
    find("option[value = '" + selectedValue2 + "']").
    attr("selected", "selected");

    //Append to the DIV.
    $("#container").append(ddl, ddl2);
    // $("#container").append("<br />");
  });
});