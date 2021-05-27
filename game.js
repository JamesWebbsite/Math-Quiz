function send(){
    Number_1 = document.getElementById("Number_1").value;
    Number_2 = document.getElementById("Number_2").value;
    answer = parseInt(Number_1) * parseInt(Number_2);
    console.log("The answer is: " + answer);
    question = "<br><h3 style='color: chartreuse;'>" + Number_1 + "*" + Number_2 + "</h4>"
    input = "<br><input type='text' id='User_input' class='form-control' style='width: 10%'>"
    button = "<br><br><button class='btn btn-info' style='width: 5%; margin-bottom: 20px;' onclick='send();'>Check</button>"
    Answer_div = question + input + button;
    document.getElementById("Output").innerHTML = Answer_div;
    document.getElementById("Number_1").value = ""
    document.getElementById("Number_2").value = ""
};