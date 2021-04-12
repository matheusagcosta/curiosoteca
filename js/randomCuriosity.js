export function randomCuriosity() {
  var backColor = ["#833E3E","#3E4D83","#50833E","#793E83","#3E8383","#837C3E"]
  var fontColor = ["#D6DDA8","#DDA8B2","#A8D0DD","#BFDDA8","#D6A8DD","#FFAAAA"]
  var contents =
  [
    "A palavra <span class='container__name'>Banguela</span> surgiu dos escravos africanos que vinham da região de Benguela na Angola e arrancavam os seus dentes para identificação na hora da venda.",
    "O <span class='container__name'>Riso</span> até o século XVII, era considerado um dom divino, do qual só o homem tinha acesso: através do riso se espantava os maus espíritos. Para o filósofo grego Aristóteles, a criança só se tornava um ser humano depois que aprendia a rir.",
    "<span class='container__name'>Baderna</span> era sobrenome de uma bailarina italiana que conhecia passos de danças africanas. Ao chegar no Brasil e se apresentar em espetáculos, chocou a elite com sua dança e seu sobrenome passou a ser sinônimo de desordem.",
    "O apelido <span class='container__name'>Colorado</span> do time gaúcho Internacional foi pejorativamente usado na época por ter sido um dos primeiros a aceitarem africanos. Apesar de serem chamados assim por conta do tom escuro da pele dos jogadores, o clube adotou e transformou em motivo de orgulho.",
    "<span class='container__name'>Nostalgia</span> era considerada uma doença física no século XVII e o sintoma principal era uma enorme vontade de voltar para a terra natal. Somente em 1940 ela passou a ser compreendida como algo psicológico.",
    "<span class='container__name'>Ketchup</span> assim como o leite condensado, foram vendidos como medicamentos nos seus lançamentos.",
    "O <span class='container__name'>Horário Oficial</span> surgiu a partir dos relógios das estações ferroviárias."
  ]

  var totalCalc = parseInt(Math.random() * contents.length)
  var backColorCalc = backColor[totalCalc]
  var fontColorCalc = fontColor[totalCalc]
  var contentCalc = contents[totalCalc]

  document.getElementById("textDesc").innerHTML=`${contentCalc}`
  document.getElementById("container").style.backgroundColor=`${backColorCalc}`
  document.getElementById("textDesc").style.color=`${fontColorCalc}`

  return;
}
window.onload = randomCuriosity()
