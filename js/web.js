function playerAdd(name) {
    const li = document.createElement('li');
    li.innerText = document.getElementById(name).innerText;
    const ul = document.getElementById('inp-fld-ply');
    const line = ul.childElementCount;
    if (line > 4) {
        alert('Not more than 5')
    }
    else {
        ul.appendChild(li);
    }
}
document.getElementById('but-1').addEventListener('click', function () {
    playerAdd('ply-1');
    document.getElementById('but-1').disabled = true;
})
document.getElementById('but-2').addEventListener('click', function () {
    playerAdd('ply-2');
    document.getElementById('but-2').disabled = true;
})
document.getElementById('but-3').addEventListener('click', function () {
    playerAdd('ply-3');
    document.getElementById('but-3').disabled = true;
})
document.getElementById('but-4').addEventListener('click', function () {
    playerAdd('ply-4');
    document.getElementById('but-4').disabled = true;
})
document.getElementById('but-5').addEventListener('click', function () {
    playerAdd('ply-5');
    document.getElementById('but-5').disabled = true;
})
document.getElementById('but-6').addEventListener('click', function () {
    playerAdd('ply-6');
    document.getElementById('but-6').disabled = true;
})

document.getElementById('btn-cal').addEventListener('click', function () {
    const inpTxt = document.getElementById('inp-play-cal');
    const inpTxtVal = inpTxt.value;
    const inpNumVal = parseFloat(inpTxtVal);
    const cal = inpNumVal * 5;
    if (isNaN(cal)) {
        alert('Please Enter Budget in Number');
    }
    else {
        document.getElementById('play-cal').innerText = cal;
    }
})