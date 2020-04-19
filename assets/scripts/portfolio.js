$(".box").hover(
    function (event) {
        $("#nameText").text(`PROJECT NAME: ${$(this).attr("data-projectName")}`);
    },
    function (event) {
        $("#nameText").text(`PROJECT NAME: `);
    });