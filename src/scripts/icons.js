function moreIcons(num) {
    for (i = 0; i < num; i++) {
        var div = document.createElement("DIV");
        var location = document.querySelector(".icons-row");

        div.classList = "div";

        for (j = 0; j < 6; j++) {
            var img = document.createElement("IMG");
            img.setAttribute("src", "/src/svg/optimized-svg.svg");
            img.classList = "icon"

            div.appendChild(img);
        }

        location.append(div);
    }
}

moreIcons(20);