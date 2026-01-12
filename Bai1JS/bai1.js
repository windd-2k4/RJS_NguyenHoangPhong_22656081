function calculateBMI() {
  
  const markMass = Number(document.getElementById("markMass").value);
  const markHeight = Number(document.getElementById("markHeight").value);
  const johnMass = Number(document.getElementById("johnMass").value);
  const johnHeight = Number(document.getElementById("johnHeight").value);

  
  const markBMI = markMass / (markHeight ** 2);
  const johnBMI = johnMass / (johnHeight ** 2);

  const markHigherBMI = markBMI > johnBMI;

  document.getElementById("result").innerHTML = `
    Mark BMI: ${markBMI.toFixed(2)} <br>
    John BMI: ${johnBMI.toFixed(2)} <br>
    Mark co BMI cao hon John: ${markHigherBMI}
  `;
  console.log("MarkBMI: ",markBMI.toFixed(2));
  console.log("JohnBMI: ",johnBMI.toFixed(2));
  console.log("Mark co BMI cao hon John: ",markHigherBMI);
}

function checkWinner(){
    const d1= Number(document.getElementById("d1").value);
    const d2= Number(document.getElementById("d2").value);
    const d3= Number(document.getElementById("d3").value);

    const k1= Number(document.getElementById("k1").value);
    const k2= Number(document.getElementById("k2").value);
    const k3= Number(document.getElementById("k3").value);

    const d= (d1+d2+d3)/3;
    const k= (k1+k2+k3)/3;

    document.getElementById("result2").innerHTML = `
    Dolphin: ${d}
    Koala: ${k}
  `;
  console.log("Dolphin: ",d);
  console.log("Koala: ",k);
}