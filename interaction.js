
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  
  // position initiale
  this.initX = 0;
  this.iniY = 0;
  // position finale
  this.finX = 0;
  this.finY = 0;
  this.pressButton = false;

  // Developper les 3 fonctions gérant les événements
  this.pression = function(evt) {
    var res = getMousePosition(canvas,evt);
    this.pressButton = true;
    this.initX = res.x;
    this.iniY = res.y;
    console.log(this.initX, this.iniY)
  }.bind(this) ;

  this.deplacement = function(evt){
    var res = getMousePosition(canvas,evt);
    this.finX = res.x;
    this.finY = res.y;
    console.log(this.finX, this.finY)
  }.bind(this);

  this.relachement = function(evt){
    var res = getMousePosition(canvas,evt);
    this.finX = res.x;
    this.finY = res.y;
    this.pressButton = false;
    console.log(this.finX, this.finY);
  }.bind(this);

   // Associer les fonctions précédentes aux évènements du canvas.
   canvas.addEventListener('mousedown', this.pression, false);
   canvas.addEventListener('mousemove', this.deplacement, false);
   canvas.addEventListener('mouseup',   this.relachement, false);

};

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



