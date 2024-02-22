function showSelected (){
    let h3 = document.getElementById("myh3");
    let r1 = document.getElementById("rad1");
    let r2 = document.getElementById("rad2");

    let container = [document.getElementById("cb1"),
                    document.getElementById("cb2"),
                    document.getElementById("cb3"),
                    document.getElementById("cb4")];
    //paglalagyan ng checked items ni user
    let newCont= [];

    //iterate sa array para malaman kung sino yung checked
    for(let i = 0; i < container.length; i++){
        if (container[i].checked){
          //push sa newCont array yung checked pero value malalagay
            newCont.push(container[i].value);
        }
    }

  //setting condition para malaman kung ano sex: male or female
    if (r1.checked){
      //output lalabas through h3
        h3.textContent = `Man you picked ${newCont.join(",")}`;
    }
    else if (r2.checked){
       //output lalabas through h3
        h3.textContent = `Ma'am you picked ${newCont.join(",")}`;
    }
    else {
        h3.textContent = `Please pick a sex`    
    }
}
