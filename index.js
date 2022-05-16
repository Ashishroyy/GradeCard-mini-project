const Gradecal = () => {
    let prog = document.getElementById('prog').value;
    let Math = document.getElementById('math').value;
    let Comp = document.getElementById('comp').value;
    let Sc = document.getElementById('sc').value;
    let grades = '';

    let totalmarks = parseFloat(prog) + parseFloat(Math) + parseFloat(Comp) + parseFloat(Sc);
    alert(totalmarks);

    let percent = totalmarks / 4;
    alert(percent);

    if (percent <= 100 && percent >= 80) {
        grades = ('A');
    } else if (percent <= 79 && percent >= 60) {
        grades = ('B');
    } else if (percent <= 59 && percent >= 40) {
        grades = ('C');
    } else {
        grades = ('F');
    }
    //

    if (percent >= 40) {
        document.getElementById('grade').innerHTML = ` Grade is: ${grades} and percantage is: ${percent}%. 
          <br> Congratulation you are pass.`
    } else {
        document.getElementById('grade').innerHTML = ` Grade is: ${grades} and percantage is: ${percent}%. 
          <br>  you are fail.`
    }

}