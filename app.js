var displayShow = document.getElementById("inputDisplay")
var displayShow1 = document.getElementById("inputDisplay1")
var startNotAllow = ["*", "+", "/"]
var operater = ["*", "+", "/", "-","."]
function buttonjan(num) {
    if(displayShow.value.replace("-","")===""){
        if(startNotAllow.includes(num)){
        }else{
            var lastindex = displayShow.value.slice(displayShow.value.length - 1)
            if(operater.includes(lastindex) && operater.includes(num)){
                displayShow.value = displayShow.value.replace(lastindex,num)
            }else{
                displayShow.value += num
            }
        }
    }else{
        var lastindex = displayShow.value.slice(displayShow.value.length - 1)
        if(operater.includes(lastindex) && operater.includes(num)){
            displayShow.value = displayShow.value.replace(lastindex,num)
        }else{displayShow.value += num}
    }
}

function allClear() {
    displayShow.value = ""
    displayShow1.value = ""
}
function calualt() {
    displayShow1.value = eval(displayShow.value)
}
function clear1() {
    var newNum = displayShow.value.slice(0, -1)
    displayShow.value = newNum
}
