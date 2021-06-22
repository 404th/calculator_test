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

function backInput() {
    let input = document.getElementById("input");
    let arr = input.innerText.split("");
    arr = arr.slice(0, arr.length - 1);

    if (arr[arr.length - 1] === ".") {
        arr = arr.slice(0, arr.length - 1);
    }

    input.innerText = arr.join("");
}

function calculate(type) {
    let first_num = document.getElementById("first_num_span");
    let input = document.getElementById("input");
    let sign = document.getElementById("sign_span");

    if (first_num.innerText !== "") {
        switch (type) {
            case "root":
                let res = helperCalc(
                    first_num.innerText,
                    input.innerText,
                    sign.innerText
                );
                sign.innerText = "";
                first_num.innerText = "";
                input.innerText = String(Math.sqrt(Number(res)));
                break;
            case "multiply":
                first_num.innerText = helperCalc(
                    first_num.innerText,
                    input.innerText,
                    sign.innerText
                );
                sign.innerText = "×";
                input.innerText = "0";
                break;
            case "plus":
                first_num.innerText = helperCalc(
                    first_num.innerText,
                    input.innerText,
                    sign.innerText
                );
                sign.innerText = "+";
                input.innerText = "0";
                break;
            case "minus":
                first_num.innerText = helperCalc(
                    first_num.innerText,
                    input.innerText,
                    sign.innerText
                );
                sign.innerText = "-";
                input.innerText = "0";
                break;
            default:
                console.log("Error");
        }
    } else {
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
}

function helperCalc(x, y, type) {
    switch (type) {
        case "×":
            return String(Number(x) * Number(y));

        case "+":
            return String(Number(x) + Number(y));

        case "-":
            return String(Number(x) - Number(y));
        default:
            alert("error while calcing!");
            break;
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

function off() {
    let buttons = document.querySelectorAll("div");
    let inputs = document.querySelectorAll("input");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].pointerEvents = "none";
        buttons[i].disabled = true;
        console.log(buttons[i]);
    }

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].pointerEvents = "none";
        inputs[i].disabled = true;
        console.log(inputs[i]);
    }
}
