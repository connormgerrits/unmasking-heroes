function revealSecretIdentity(realName) {
  document.getElementById('secretidentity').innerHTML = realName;
}

function hideSecretIdentity() {
  document.getElementById('secretidentity').innerHTML = '';
}

function createHeroBlock(hero) {
  var heroBlock = document.createElement('div')

  heroBlock.id = hero.id
  heroBlock.className = "hero"
  heroBlock.style.backgroundColor = hero.primaryColor
  heroBlock.style.color = hero.secondaryColor
  heroBlock.innerHTML = hero.codeName

  return heroBlock
}

function setupHeroReveal() {
  for (var i = 0; i < heroes.length; i++) {
    let hero = heroes[i]

    document.getElementById(hero.id).onmouseover = function () {
      revealSecretIdentity(hero.realName);
    }

    document.getElementById(hero.id).onmouseout = function () {
      hideSecretIdentity();
    }
  }
}

function setUpHeroBlocks() {
  var allHeroes = document.getElementById('heroes')

  heroes.forEach(function (hero) {
    var heroBlock = createHeroBlock(hero)
    allHeroes.appendChild(heroBlock)
  });
}

function loadHeroes() {
  setUpHeroBlocks()
  setupHeroReveal()
}
