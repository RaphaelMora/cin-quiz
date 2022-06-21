function isMobileDevice() {
  let navigation = navigator.userAgent;
  if (
    navigation.match(/iPhone/i) ||
    navigation.match(/webOS/i) ||
    navigation.match(/Android/i) ||
    navigation.match(/iPad/i) ||
    navigation.match(/iPod/i) ||
    navigation.match(/BlackBerry/i) ||
    navigation.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

if (isMobileDevice()) {
  const jeu = document.getElementsByClassName("jeu");
  document.getElementsByClassName("css")[0].href = "./CSS/styleTel.css";
  //changer le liens du jeu
  if (jeu.length === 2) {
    jeu[0].href = "./jeuT.php?quiz=facile";
    jeu[1].href = "./jeuT.php?quiz=moyen";
  }
  if (jeu.length === 3) {
    jeu[0].href = "./jeuT.php?quiz=continu";
    jeu[1].href = "./jeuT.php?quiz=facile";
    jeu[2].href = "./jeuT.php?quiz=moyen";
  }
}