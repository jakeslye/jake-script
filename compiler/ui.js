$("#run").click(function() {
    $("#console").text("");
    $("#debug").text("");
    run($("#code").val());
});
