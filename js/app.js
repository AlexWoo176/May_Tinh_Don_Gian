function result(value) {
    document.getElementById("result").value += value;
}
function actionok() {
    let result = document.getElementById("result").value;
    if (result == "" || result == " ") {
        document.getElementById("result").value = "";
    } else{
        let actionok = eval(result);
        document.getElementById("result").value = actionok;
    }
}

function clearoutput(value) {
    document.getElementById("result").value ="";
}