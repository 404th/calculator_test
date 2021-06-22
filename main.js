let is_summarized = false;

function getInput(n) {
    let inp = document.getElementById("input");

    if ((inp.innerText !== "0" || n === ".") && !is_summarized) {
        is_summarized = false;
        inp.innerText = inp.innerText + n;
    } else {
        is_summarized = false;
        inp.innerText = n;
    }
}

function clearInput() {
    let inp = document.getElementById("input");
    let sign = document.getElementById("sign_span");
    let first_num = document.getElementById("first_num_span");
    inp.innerText = "0";
    sign.innerText = "";
    first_num.innerText = "";
}

function backInput() {}

function calculate(type) {
    let first_num = document.getElementById("first_num_span");
    let input = document.getElementById("input");
    let sign = document.getElementById("sign_span");

    switch (type) {
        case "root":
            input.innerText = String(Math.sqrt(Number(input.innerText)));
            break;
        case "multiply":
            sign.innerText = "×";
            first_num.innerText = input.innerText;
            input.innerText = "0";
            break;
        case "plus":
            sign.innerText = "+";
            first_num.innerText = input.innerText;
            input.innerText = "0";
            break;
        case "minus":
            sign.innerText = "-";
            first_num.innerText = input.innerText;
            input.innerText = "0";
            break;
        default:
            console.log("Error");
    }
}

function summarize() {
    let first_num = document.getElementById("first_num_span");
    let second_num = document.getElementById("input");
    let sign = document.getElementById("sign_span");

    switch (sign.innerText) {
        case "+":
            second_num.innerText = String(
                Number(first_num.innerText) + Number(second_num.innerText)
            );
            first_num.innerText = "";
            sign.innerText = "";
            is_summarized = true;
            break;
        case "-":
            second_num.innerText = String(
                Number(first_num.innerText) - Number(second_num.innerText)
            );
            first_num.innerText = "";
            sign.innerText = "";
            is_summarized = true;
            break;
        case "×":
            second_num.innerText = String(
                Number(first_num.innerText) * Number(second_num.innerText)
            );
            first_num.innerText = "";
            sign.innerText = "";
            is_summarized = true;
            break;
        case "√":
            second_num.innerText = Math.sqrt(Number(second_num.innerText));
            first_num.innerText = "";
            sign.innerText = "";
            is_summarized = true;
            break;
        default:
            alert("error");
            is_summarized = true;
            break;
    }
}
