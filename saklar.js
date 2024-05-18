function saklar() {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let toggle4 = document.getElementById("default-toggle4");
    let toggle5 = document.getElementById("default-toggle5");
    let toggle6 = document.getElementById("default-toggle6");
    let toggle7 = document.getElementById("default-toggle7");
    let toggle8 = document.getElementById("default-toggle8");
    let toggle9 = document.getElementById("default-toggle9");
    let toggle10 = document.getElementById("default-toggle10");
    let toggle11 = document.getElementById("default-toggle11");

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");
    let lampu5 = document.getElementById("lampu5");
    let lampu6 = document.getElementById("lampu6");
    let lampu7 = document.getElementById("lampu7");
    let lampu8 = document.getElementById("lampu8");
    let lampu9 = document.getElementById("lampu9");
    let lampu10 = document.getElementById("lampu10");



    if (toggle1.checked) {
        lampu1.src = "assets/images/on.png"
    } else {
        lampu1.src = "assets/images/off.png"
    }

    if (toggle2.checked) {
        lampu2.src = "assets/images/on.png"
    } else {
        lampu2.src = "assets/images/off.png"
    }

    if (toggle3.checked) {
        lampu3.src = "assets/images/on.png"
    } else {
        lampu3.src = "assets/images/off.png"
    }

    if (toggle4.checked) {
        lampu4.src = "assets/images/on.png"
    } else {
        lampu4.src = "assets/images/off.png"
    }

    if (toggle5.checked) {
        lampu5.src = "assets/images/on.png"
    } else {
        lampu5.src = "assets/images/off.png"
    }

    if (toggle6.checked) {
        lampu6.src = "assets/images/on.png"
    } else {
        lampu6.src = "assets/images/off.png"
    }

    if (toggle7.checked) {
        lampu7.src = "assets/images/on.png"
    } else {
        lampu7.src = "assets/images/off.png"
    }

    if (toggle8.checked) {
        lampu8.src = "assets/images/on.png"
    } else {
        lampu8.src = "assets/images/off.png"
    }

    if (toggle9.checked) {
        lampu9.src = "assets/images/on.png"
    } else {
        lampu9.src = "assets/images/off.png"
    }

    if (toggle10.checked) {
        lampu10.src = "assets/images/on.png"
    } else {
        lampu10.src = "assets/images/off.png"
    }

    if (toggle1.checked && toggle2.checked && toggle3.checked) {
        toggle11.checked = true
    } else {
        toggle11.checked = false        
    }

    if (toggle4.checked) {
        lampu4.src = "assets/images/on.png"
        toggle12.checked = true
    } else {
        lampu4.src = "assets/images/off.png"
        toggle12.checked = false        
    }
}

function saklarruang() {

    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let toggle4 = document.getElementById("default-toggle4");
    let toggle5 = document.getElementById("default-toggle5");
    let toggle6 = document.getElementById("default-toggle6");
    let toggle7 = document.getElementById("default-toggle7");
    let toggle8 = document.getElementById("default-toggle8");
    let toggle9 = document.getElementById("default-toggle9");
    let toggle10 = document.getElementById("default-toggle10");
    let toggle11 = document.getElementById("default-toggle11");
    let toggle12 = document.getElementById("default-toggle12");
    let toggle13 = document.getElementById("default-toggle13");
    let toggle14 = document.getElementById("default-toggle14");

    if (toggle11.checked) {
        toggle1.checked = true
        toggle2.checked = true
        toggle3.checked = true
        lampu1.src = "assets/images/on.png"
        lampu2.src = "assets/images/on.png"
        lampu3.src = "assets/images/on.png"
    } else {
        toggle1.checked = false
        toggle2.checked = false
        toggle3.checked = false
        lampu1.src = "assets/images/off.png"
        lampu2.src = "assets/images/off.png"
        lampu3.src = "assets/images/off.png"
    }

    if (toggle12.checked) {
        lampu4.src = "assets/images/on.png"
        toggle4.checked = true
    } else {        
        lampu4.src = "assets/images/off.png"
        toggle4.checked = false
    }

    if (toggle13.checked) {
        lampu5.src = "assets/images/on.png"
        lampu6.src = "assets/images/on.png"
    } else {
        lampu5.src = "assets/images/off.png"
        lampu6.src = "assets/images/off.png"
    }

    if (toggle14.checked) {
        lampu7.src = "assets/images/on.png"
        lampu8.src = "assets/images/on.png"
        lampu9.src = "assets/images/on.png"
        lampu10.src = "assets/images/on.png"
    } else {
        lampu7.src = "assets/images/off.png"
        lampu8.src = "assets/images/off.png"
        lampu9.src = "assets/images/off.png"
        lampu10.src = "assets/images/off.png"
    }

}
