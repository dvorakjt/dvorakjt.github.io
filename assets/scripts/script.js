const boxClass = $(".box");
const boxes = [];
for (let i = 0; i <= 2; i++) {
    boxes.push($(`#box${i + 1}`));
}
const animateBoxes = function () {
    let frontBox;
    boxes.forEach((box, index) => {
        let pos = Number($(box).attr("data-pos"));
        //update the position data
        pos++
        if (pos > 3) pos = 1;
        $(box).attr("data-pos", pos);
        //animate the box moving
        if (pos === 1) {
            $(box).animate({
                top: "50px",
                right: "54%",
            }, 500);
            $(box).css("z-index", "-1");
            $(box).css("background-color", "#488178");
            $(box).css("color", "lightgrey");
        }
        else if (pos === 2) {
            console.log("2");
            $(box).animate({
                top: "50px",
                right: "24%",
            }, 500);
            $(box).css("z-index", "-1");
            $(box).css("background-color", "#488178");
            $(box).css("color", "lightgrey");
        }
        else {
            frontBox = index;
            $(box).animate({
                top: "150px",
                right: "39%",
            }, 500);
            $(box).css("z-index", "0");
            $(box).css("background-color", "#5dafa1");
            $(box).css("color", "white");
        }
    })
    $("#infoCol").empty();
    if (frontBox === 1) {
        const newHtml =
            $(`<div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
                <h5 style="text-align:center">...AND ROBUST FUNCTIONALITY, POWERED BY...</h5>
            </div>
            <div class="col-md-1"></div>
        </div>`);
        $("#infoCol").append(newHtml);
    }
    else if (frontBox === 2) {
        const newHtml =
            $(`<div class="row">
        <div class="col-md-1"><i class="fas fa-palette"></i></div>
        <div class="col-md-3">
            <h5>CREATIVE DESIGN</h5>
        </div>
        <div class="col-md-1"><i class="fas fa-mobile-alt"></i></div>
        <div class="col-md-3">
            <h5>RESPONSIVE UI</h5>
        </div>
        <div class="col-md-1">
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch1">
                <label class="custom-control-label" for="customSwitch1"></label>
            </div>
        </div>
        <div class="col-md-3">
            <h5>INTERACTIVE UX</h5>
        </div>
    </div>`);
        $("#infoCol").append(newHtml);
    }
    else {
        const newHtml =
            $(`<div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-1"><i class="fab fa-html5" style="padding-left:20px"></i></div>
            <div class="col-md-1"><h5>HTML</h5></div>
            <div class="col-md-1"><i class="fab fa-css3-alt" style="padding-left:20px"></i></div>
            <div class="col-md-1"><h5>CSS</h5></div>
            <div class="col-md-1"><i class="fab fa-js-square" style="padding-left:20px"></i></div>
            <div class="col-md-2"><h5>JAVASCRIPT</h5></div>
            <div class="col-md-1"><i class="fab fa-bootstrap" style="padding-left:20px"></i></div>
            <div class="col-md-2"><h5>BOOTSTRAP</h5></div>
            <div class="col-md-1"></div>
        </div>`);
        $("#infoCol").append(newHtml);
    }
}

////////
$(boxClass).on("click", event => {
    if ($(event.target).attr("id") === "toggleIcon") {
        const toggler = $(event.target);
        let onOrOff = $(toggler).attr("data-onOff");
        console.log(onOrOff);
        if (onOrOff === "on") {
            $(toggler).attr("class", "fas fa-toggle-off");
            $(toggler).attr("data-onOff", "off");
        }
        else {
            $(toggler).attr("class", "fas fa-toggle-on");
            $(toggler).attr("data-onOff", "on");
        }
    }
});
const timer = setInterval(() => { animateBoxes() }, 3000);