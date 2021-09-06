const sampleArray = [
  469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848,
  179, 535, 940, 472,
];

const main = document.getElementById("main-container");

/* ----------- Funcão que adiciona o resultado ---------- */
function showResults(value) {
  const addNewParagraph = document.createElement("p");

  addNewParagraph.innerText = "(" + value + ")";

  main.appendChild(addNewParagraph);
}

// implemente o código do kata 1 aqui

function kata1() {
  const kataResult = [];

  for (let i = 1; i <= 25; i++) {
    kataResult.push(i);
  }

  const addNewTitle = document.createElement("h1");

  addNewTitle.innerText = "1. Exibir os números de 1 a 25:";

  main.appendChild(addNewTitle);

  return showResults(kataResult.join(", "));
}

kata1();

// implemente o código do kata 2 aqui
function kata2() {
  const kataResult = [];

  for (let i = 25; i >= 1; i--) {
    kataResult.push(i);
  }

  const addNewTitle = document.createElement("h1");

  addNewTitle.innerText = "2. Exibir os números de 25 a 1:";

  main.appendChild(addNewTitle);

  return showResults(kataResult.join(", "));
}

kata2();

// implemente o código do kata 3 aqui
function kata3() {
  const kataResult = [];

  for (let i = -1; i >= -25; i--) {
    kataResult.push(i);
  }

  const addNewTitle = document.createElement("h1");

  addNewTitle.innerText = "3. Exibir os números de -1 a -25:";

  main.appendChild(addNewTitle);

  return showResults(kataResult.join(", "));
}
kata3();

// implemente o código do kata 4 aqui
function kata4() {
  const kataResult = [];

  for (let i = -25; i <= -1; i++) {
    kataResult.push(i);
  }

  const addNewTitle = document.createElement("h1");

  addNewTitle.innerText = "4. Exibir os números de -25 a -1:";

  main.appendChild(addNewTitle);

  return showResults(kataResult.join(", "));
}

// implemente o código do kata 5 aqui
function kata5() {
  const kataResult = [];

  for (let i = 25; i >= -25; i--) {
    if (i % 5 === 0) {
      kataResult.push(i);
    }
  }

  const addNewTitle = document.createElement("h1");

  addNewTitle.innerText = "5. Exibir os números ímpares de 25 a -25:";

  main.appendChild(addNewTitle);

  return showResults(kataResult.join(", "));
}
kata5();

// implemente o código do kata 6 aqui
function kata6() {
  const kataResult = [];

  for (let i = 3; i <= 100; i++) {
    if (i % 3 === 0) {
      kataResult.push(i);
    }
  }

  const addNewTitle = document.createElement("h1");

  addNewTitle.innerText = "6. Exibir os números divisíveis por 3 até o 100:";

  main.appendChild(addNewTitle);

  return showResults(kataResult.join(", "));
}
kata6();

// implemente o código do kata 7 aqui
function kata7() {
  const kataResult = [];

  for (let i = 7; i <= 100; i++) {
    if (i % 7 === 0) {
      kataResult.push(i);
    }
  }

  const addNewTitle = document.createElement("h1");

  addNewTitle.innerText = "7. Exibir os números divisíveis por 7 até o 100:";

  main.appendChild(addNewTitle);

  return showResults(kataResult.join(", "));
}
kata7();

// implemente o código do kata 8 aqui
function kata8() {
  const kataResult = [];

  for (let i = 100; i >= 1; i--) {
    if (i % 7 === 0 || i % 3 === 0) {
      kataResult.push(i);
    }
  }

  const addNewTitle = document.createElement("h1");

  addNewTitle.innerText =
    "8. Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100:";

  main.appendChild(addNewTitle);

  return showResults(kataResult.join(", "));
}
kata8();

// implemente o código do kata 9 aqui
function kata9() {
  const kataResult = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0 && i % 5 === 0) {
      kataResult.push(i);
    }
  }

  const addNewTitle = document.createElement("h1");

  addNewTitle.innerText =
    "9. Exibir os números ímpares divisíveis por 5 até o 100";

  main.appendChild(addNewTitle);

  return showResults(kataResult.join(", "));
}
kata9();

// implemente o código do kata 10 aqui
function kata10() {
  const addNewTitle = document.createElement("h1");

  addNewTitle.innerText = "10. Exibir os 20 elementos de sampleArray:";

  main.appendChild(addNewTitle);

  return showResults(sampleArray.join(", "));
}
kata10();

// implemente o código do kata 11 aqui
function kata11() {
  const kataResult = [];
  for (let i = 0; i <= sampleArray.length - 1; i++) {
    if (sampleArray[i] % 2 === 0) {
      kataResult.push(sampleArray[i]);
    }
  }

  const addNewTitle = document.createElement("h1");

  addNewTitle.innerText =
    "11. Exibir todos os números pares contidos em sampleArray:";

  main.appendChild(addNewTitle);

  return showResults(kataResult.join(", "));
}
kata11();

// implemente o código do kata 12 aqui
function kata12() {
  const kataResult = [];
  for (let i = 0; i <= sampleArray.length - 1; i++) {
    if (sampleArray[i] % 2 !== 0) {
      kataResult.push(sampleArray[i]);
    }
  }

  const addNewTitle = document.createElement("h1");

  addNewTitle.innerText =
    "12. Exibir todos os números ímpares contidos em sampleArray:";

  main.appendChild(addNewTitle);

  return showResults(kataResult.join(", "));
}
kata12();

// implemente o código do kata 13 aqui
function kata13() {
  const kataResult = [];
  for (let i = 0; i <= sampleArray.length - 1; i++) {
    if (sampleArray[i] % 8 === 0) {
      kataResult.push(sampleArray[i]);
    }
  }

  const addNewTitle = document.createElement("h1");

  addNewTitle.innerText =
    "13. Exibir os números divisíveis por 8 em sampleArray:";

  main.appendChild(addNewTitle);

  return showResults(kataResult.join(", "));
}
kata13();

// implemente o código do kata 14 aqui
function kata14() {
  const kataResult = [];
  for (let i = 0; i <= sampleArray.length - 1; i++) {
    kataResult.push(sampleArray[i] * sampleArray[i]);
  }

  const addNewTitle = document.createElement("h1");

  addNewTitle.innerText =
    "14. Exibir o quadrado de cada elemento de sampleArray:";

  main.appendChild(addNewTitle);

  return showResults(kataResult.join(", "));
}
kata14();

// implemente o código do kata 15 aqui
function kata15() {
  let kataResult = 0;

  for (let i = 1; i <= 20; i++) {
    kataResult += i;
  }

  const addNewTitle = document.createElement("h1");

  addNewTitle.innerText = "15. Exibir a soma de todos os números de 1 a 20:";

  main.appendChild(addNewTitle);

  return showResults(kataResult);
}
kata15();

// implemente o código do kata 16 aqui
function kata16() {
  let kataResult = 0;

  for (let i = 0; i <= sampleArray.length - 1; i++) {
    kataResult += sampleArray[i];
  }

  const addNewTitle = document.createElement("h1");

  addNewTitle.innerText =
    "16. Exibir a soma de todos os elementos de sampleArray:";

  main.appendChild(addNewTitle);

  return showResults(kataResult);
}
kata16();

// implemente o código do kata 17 aqui
function kata17() {
  let kataResult = sampleArray[0];

  for (let i = 0; i <= sampleArray.length - 1; i++) {
    if (sampleArray[i] < kataResult) {
      kataResult = sampleArray[i];
    }
  }

  const addNewTitle = document.createElement("h1");

  addNewTitle.innerText = "17. Exibir o menor elemento de sampleArray:";

  main.appendChild(addNewTitle);

  return showResults(kataResult);
}
kata17();

// implemente o código do kata 18 aqui
function kata18() {
  let kataResult = sampleArray[0];

  for (let i = 0; i <= sampleArray.length - 1; i++) {
    if (sampleArray[i] > kataResult) {
      kataResult = sampleArray[i];
    }
  }

  const addNewTitle = document.createElement("h1");

  addNewTitle.innerText = "18. Exibir o maior elemento de sampleArray:";

  main.appendChild(addNewTitle);

  return showResults(kataResult);
}
kata18();

/* ------------------ ATIVIDADES BONUS ------------------ */

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */
const sectionBonus = document.getElementById("bonus");

// implemente o código do kata bonus 1 aqui
function kataBonus1(n) {
  const addNewTitle = document.createElement("h1");
  addNewTitle.innerText =
    "1. Exibir 20 retângulos cinza sólido, cada um com 20px de altura e 100px de largura:";
  sectionBonus.appendChild(addNewTitle);
  const retangleBonus1Wrap = document.createElement("div");
  sectionBonus.appendChild(retangleBonus1Wrap);
  retangleBonus1Wrap.style.display = "flex";
  retangleBonus1Wrap.style.flexWrap = "wrap";

  for (let i = 1; i <= n; i++) {
    const retangleBonus1 = document.createElement("div");
    retangleBonus1Wrap.appendChild(retangleBonus1);

    retangleBonus1.style.background = "grey";
    retangleBonus1.style.height = "20px";
    retangleBonus1.style.width = "100px";
    retangleBonus1.style.margin = "10px";
  }
}
kataBonus1(20);

// implemente o código do kata bonus 2 aqui
function kataBonus2(n) {
  const addNewTitle = document.createElement("h1");
  addNewTitle.innerText =
    "2. Exibir 20 retângulos cinza sólido, cada um com 20px de altura e larguras variando uniformemente de 105px a 200px, com o intervalo de 5px entre cada retangulo:";
  sectionBonus.appendChild(addNewTitle);
  const retangleBonus1Wrap = document.createElement("div");
  sectionBonus.appendChild(retangleBonus1Wrap);

  for (let i = 105; i <= n; i += 5) {
    console.log(i);
    const retangleBonus1 = document.createElement("div");
    retangleBonus1Wrap.appendChild(retangleBonus1);

    retangleBonus1.style.background = "grey";
    retangleBonus1.style.height = "20px";
    retangleBonus1.style.width = i + "px";
    retangleBonus1.style.margin = "10px";
  }
}
kataBonus2(200);

// implemente o código do kata bonus 3 aqui
function kataBonus3() {
  const addNewTitle = document.createElement("h1");
  addNewTitle.innerText =
    "3. Exibir 20 retângulos cinza sólido, cada um com 20px de altura e com larguras em pixels determinadas pelos 20 elementos do sampleArray:";
  sectionBonus.appendChild(addNewTitle);
  const retangleBonus1Wrap = document.createElement("div");
  sectionBonus.appendChild(retangleBonus1Wrap);

  for (let i = 0; i <= sampleArray.length - 1; i++) {
    console.log(i);
    const retangleBonus1 = document.createElement("div");
    retangleBonus1Wrap.appendChild(retangleBonus1);

    retangleBonus1.style.background = "grey";
    retangleBonus1.style.height = "20px";
    retangleBonus1.style.width = sampleArray[i] + "px";
    retangleBonus1.style.margin = "10px";
  }
}
kataBonus3();

// implemente o código do kata bonus 4 aqui
function kataBonus4() {
  const addNewTitle = document.createElement("h1");
  addNewTitle.innerText =
    "4. Como no Item #3, mas alternando cores para que retângulo sim, retângulo não seja vermelho:";
  sectionBonus.appendChild(addNewTitle);
  const retangleBonus1Wrap = document.createElement("div");
  sectionBonus.appendChild(retangleBonus1Wrap);

  for (let i = 0; i <= sampleArray.length - 1; i++) {
    console.log(i);
    const retangleBonus1 = document.createElement("div");
    retangleBonus1Wrap.appendChild(retangleBonus1);

    retangleBonus1.style.background = "grey";
    retangleBonus1.style.height = "20px";
    retangleBonus1.style.width = sampleArray[i] + "px";
    retangleBonus1.style.margin = "10px";

    if (i % 2 === 0) {
      retangleBonus1.style.background = "red";
    }
  }
}
kataBonus4();

// implemente o código do kata bonus 5 aqui
function kataBonus5() {
  const addNewTitle = document.createElement("h1");
  addNewTitle.innerText =
    "5. Como no Item #3, mas pinte os retângulos de largura par de vermelho:";
  sectionBonus.appendChild(addNewTitle);
  const retangleBonus1Wrap = document.createElement("div");
  sectionBonus.appendChild(retangleBonus1Wrap);

  for (let i = 0; i <= sampleArray.length - 1; i++) {
    console.log(i);
    const retangleBonus1 = document.createElement("div");
    retangleBonus1Wrap.appendChild(retangleBonus1);

    retangleBonus1.style.background = "grey";
    retangleBonus1.style.height = "20px";
    retangleBonus1.style.width = sampleArray[i] + "px";
    retangleBonus1.style.margin = "10px";

    if (sampleArray[i] % 2 === 0) {
      retangleBonus1.style.background = "red";
    }
  }
}
kataBonus5();
