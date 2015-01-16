var calaverita = angular.module('calaverita', []);

//Fill with data
//TODO: Replace this with a http service?
calaverita.factory('Elements', function() {
  var Elements = {};

  Elements.colors = [
    { id: 1, code: { r: 0, g: 0, b: 0, a: 0.8 }, name: 'black' },
    { id: 2, code: { r: 255, g: 255, b: 255, a: 0.8 }, name: 'white' },
    { id: 3, code: { r: 134, g: 1, b: 175, a: 0.8 }, name: 'purple' },
    { id: 4, code: { r: 2, g: 71, b: 254, a: 0.8 }, name: 'blue' },
    { id: 5, code: { r: 102, g: 176, b: 50, a: 0.8 }, name: 'green' },
    { id: 6, code: { r: 254, g: 254, b: 51, a: 0.8 }, name: 'yellow' },
    { id: 7, code: { r: 251, g: 153, b: 2, a: 0.8 }, name: 'orange' },
    { id: 8, code: { r: 254, g: 39, b: 18, a: 0.8 }, name: 'red' }
  ];

  Elements.backgrounds = [
    { id: 1, src: 'background_1.jpg' },
    { id: 2, src: 'background_2.jpg' },
    { id: 3, src: 'background_3.jpg' },
    { id: 4, src: 'background_4.jpg' },
    { id: 5, src: 'background_5.jpg' }
  ];

  Elements.haircuts = [
    { id: 1, src: 'haircut_1.png' },
    { id: 2, src: 'haircut_2.png' },
    { id: 3, src: 'haircut_3.png' },
    { id: 4, src: 'haircut_4.png' },
    { id: 5, src: 'haircut_5.png' }
  ];

  Elements.ornaments = [
    { id: 1, src: 'ornament_1.png' },
    { id: 2, src: 'ornament_2.png' },
    { id: 3, src: 'ornament_3.png' },
    { id: 4, src: 'ornament_4.png' },
    { id: 5, src: 'ornament_5.png' }
  ];

  return Elements;
});

calaverita.controller('ElementsCtrl', function($scope, Elements) {
  $scope.elements = Elements;
  $scope.editable = false;
  $scope.selectedElement = 0;
  $scope.showColor = false;
  $scope.myCalaverita = {
    background: 1,
    haircut: { hairID: 1, colorID: 1 },
    ornaments: []
  };

  //Click edit button
  $scope.toggleEdit = function() {
    $scope.editable = !this.editable;
  };

  //Click element button
  $scope.selectElement = function(numElement) {
    $scope.selectedElement = numElement;
    $scope.showColor = false;
  };

  //Click item button
  $scope.selectBackground = function(id) {
    $scope.showColor = false;
    $scope.myCalaverita.background = id;

    //Update canvas
    $scope.updateCanvas();
  };

  $scope.selectHaircut = function(id) {
    $scope.showColor = true;
    $scope.myCalaverita.haircut.hairID = id;

    //Update canvas
    $scope.updateCanvas();
  };

  $scope.selectOrnament = function(id) {
    $scope.showColor = false;

    var ornamentIndex = $.inArray(id, $scope.myCalaverita.ornaments);
    if (ornamentIndex < 0) {
      $scope.myCalaverita.ornaments.push(id);
    } else {
      $scope.myCalaverita.ornaments.splice(ornamentIndex, 1);
    }

    //Update canvas
    $scope.updateCanvas();
  };

  $scope.selectedOrnament = function(id) {
    return $.inArray(id, $scope.myCalaverita.ornaments) >= 0;
  };

  //Click color button
  $scope.selectHairColor = function(id) {
    $scope.myCalaverita.haircut.colorID = id;

    //Update canvas
    $scope.updateCanvas();
  };

  //Facebook button
  //Save button

  //Init canvas
  $scope.initCanvas = function() {
    $scope.stage = new createjs.Stage("image-editor-canvas");

    //TODO: change ticker with onload to avoid calls
    createjs.Ticker.addEventListener("tick", $scope.updateCanvas);
    createjs.Ticker.setFPS(10);
  };

  //Update canvas
  $scope.updateCanvas = function() {
    $scope.stage.removeAllChildren();

    $scope.stage.addChild(getBackground());
    $scope.stage.addChild(getSkull());
    $scope.stage.addChild(getHaircut());
    $scope.stage.addChild(getOrnaments());

    $scope.stage.update();
  };

  //Get the background image
  function getBackground() {
    var obj = searchInObject($scope.myCalaverita.background, $scope.elements.backgrounds);
    return new createjs.Bitmap('assets/resources/normal/backgrounds/' + obj.src);
  }

  //Get the skull image
  function getSkull() {
    return new createjs.Bitmap('assets/resources/skull_1.png');
  }

  //Get the haircut image
  function getHaircut() {
    if ($scope.myCalaverita.haircut.hairID > 1) {
      obj = searchInObject($scope.myCalaverita.haircut.hairID, $scope.elements.haircuts);
      var rgbObject = searchInObject($scope.myCalaverita.haircut.colorID, $scope.elements.colors).code;
      var tint = new createjs.ColorFilter(0, 0, 0, 1, rgbObject.r, rgbObject.g, rgbObject.b);
      var img = new createjs.Bitmap('assets/resources/normal/haircuts/' + obj.src);
      img.filters = [tint];
      img.cache(0, 0, 350, 400);
      return img;
    }

    return new createjs.Shape();
  }

  //Get the ornaments image
  function getOrnaments() {
    var objects = new createjs.Container();

    for (var i = 0; i < $scope.myCalaverita.ornaments.length; i++) {
      obj = searchInObject($scope.myCalaverita.ornaments[i], $scope.elements.ornaments);
      objects.addChild(new createjs.Bitmap('assets/resources/normal/ornaments/' + obj.src));
    }

    return objects;
  }

  //Get the object images
  function searchInObject(id, myObject) {
    for(var i = 0; i < myObject.length; i++) {
      if (myObject[i].id == id) {
        return(myObject[i]);
      }
    }
  }
});