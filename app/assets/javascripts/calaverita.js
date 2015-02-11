var calaverita = angular.module('calaverita', []);

//Fill with data
//TODO: Replace this with a http service?
calaverita.factory('Elements', function() {
  var Elements = {};

  Elements.colors = [
    { id: 1, light: { r: 194, g: 194, b: 194 }, normal: { r: 128, g: 128, b: 128 }, dark: { r: 36, g: 36, b: 36 } }, //Black
    { id: 2, light: { r: 255, g: 167, b: 122 }, normal: { r: 191, g: 99, b: 54 }, dark: { r: 145, g: 52, b: 6 } }, // Orange
    { id: 3, light: { r: 237, g: 121, b: 121 }, normal: { r: 173, g: 26, b: 26 }, dark: { r: 99, g: 12, b: 12 } }, //Red
    { id: 4, light: { r: 224, g: 114, b: 224 }, normal: { r: 171, g: 44, b: 171 }, dark: { r: 84, g: 8, b: 84 } }, //Purple
    { id: 5, light: { r: 120, g: 125, b: 235 }, normal: { r: 44, g: 51, b: 176 }, dark: { r: 14, g: 18, b: 87 } }, //Blue
    { id: 6, light: { r: 144, g: 225, b: 240 }, normal: { r: 51, g: 175, b: 196 }, dark: { r: 11, g: 73, b: 84 } }, //Ugly blue-green
    { id: 7, light: { r: 138, g: 222, b: 138 }, normal: { r: 69, g: 135, b: 69 }, dark: { r: 13, g: 79, b: 13 } }, //Green
    { id: 8, light: { r: 250, g: 250, b: 22 }, normal: { r: 153, g: 153, b: 18 }, dark: { r: 66, g: 66, b: 9 } }, //Yellow
    { id: 9, light: { r: 240, g: 186, b: 115 }, normal: { r: 168, g: 114, b: 42 }, dark: { r: 69, g: 40, b: 2 }} // Brown
  ];

  Elements.backgrounds = [
    { id: 1, src: 'background0001.png', color: true },
    { id: 2, src: 'background0002.png', color: false },
    { id: 3, src: 'background0003.png', color: false }
  ];

  Elements.haircuts = [
    { id: 1, src: 'haircut0001.png', color: false },
    { id: 2, src: 'haircut0002.png', color: true },
    { id: 3, src: 'haircut0003.png', color: true },
    { id: 4, src: 'haircut0004.png', color: true },
    { id: 5, src: 'haircut0005.png', color: true },
    { id: 6, src: 'haircut0006.png', color: true },
    { id: 7, src: 'haircut0007.png', color: true },
    { id: 8, src: 'haircut0008.png', color: true },
    { id: 9, src: 'haircut0009.png', color: true },
    { id: 10, src: 'haircut0010.png', color: true },
    { id: 11, src: 'haircut0011.png', color: true },
    { id: 12, src: 'haircut0012.png', color: true },
    { id: 13, src: 'haircut0013.png', color: true },
    { id: 14, src: 'haircut0014.png', color: true },
    { id: 15, src: 'haircut0015.png', color: true },
    { id: 16, src: 'haircut0016.png', color: true },
    { id: 17, src: 'haircut0017.png', color: true },
    { id: 18, src: 'haircut0018.png', color: true },
    { id: 19, src: 'haircut0019.png', color: true },
    { id: 20, src: 'haircut0020.png', color: true },
    { id: 21, src: 'haircut0021.png', color: true },
    { id: 22, src: 'haircut0022.png', color: true },
    { id: 23, src: 'haircut0023.png', color: true },
    { id: 24, src: 'haircut0024.png', color: true },
    { id: 25, src: 'haircut0025.png', color: true },
    { id: 26, src: 'haircut0026.png', color: true },
    { id: 27, src: 'haircut0027.png', color: true },
    { id: 28, src: 'haircut0028.png', color: true },
    { id: 29, src: 'haircut0029.png', color: true },
    { id: 30, src: 'haircut0030.png', color: true },
    { id: 31, src: 'haircut0031.png', color: true },
    { id: 32, src: 'haircut0032.png', color: true },
    { id: 33, src: 'haircut0033.png', color: true },
    { id: 34, src: 'haircut0034.png', color: true },
    { id: 35, src: 'haircut0035.png', color: true },
    { id: 36, src: 'haircut0036.png', color: true },
    { id: 37, src: 'haircut0037.png', color: true },
    { id: 38, src: 'haircut0038.png', color: true },
    { id: 39, src: 'haircut0039.png', color: true },
    { id: 40, src: 'haircut0040.png', color: true },
    { id: 41, src: 'haircut0041.png', color: true },
    { id: 42, src: 'haircut0042.png', color: true },
    { id: 43, src: 'haircut0043.png', color: true },
    { id: 44, src: 'haircut0044.png', color: true },
    { id: 45, src: 'haircut0045.png', color: true },
    { id: 46, src: 'haircut0046.png', color: true },
    { id: 47, src: 'haircut0047.png', color: true },
    { id: 48, src: 'haircut0048.png', color: true },
    { id: 49, src: 'haircut0049.png', color: true },
    { id: 50, src: 'haircut0050.png', color: true },
    { id: 51, src: 'haircut0051.png', color: true },
    { id: 52, src: 'haircut0052.png', color: true },
    { id: 53, src: 'haircut0053.png', color: true },
    { id: 54, src: 'haircut0054.png', color: true },
    { id: 55, src: 'haircut0055.png', color: true },
    { id: 56, src: 'haircut0056.png', color: true },
    { id: 57, src: 'haircut0057.png', color: true },
    { id: 58, src: 'haircut0058.png', color: true },
    { id: 59, src: 'haircut0059.png', color: true },
    { id: 60, src: 'haircut0060.png', color: true },
    { id: 61, src: 'haircut0061.png', color: true },
    { id: 62, src: 'haircut0062.png', color: true },
    { id: 63, src: 'haircut0063.png', color: true },
    { id: 64, src: 'haircut0064.png', color: true },
    { id: 65, src: 'haircut0065.png', color: true }
  ];

  Elements.ornaments = [
    { id: 1, src: 'ornaments0001.png', color: true },
    { id: 2, src: 'ornaments0002.png', color: true },
    { id: 3, src: 'ornaments0003.png', color: true },
    { id: 4, src: 'ornaments0004.png', color: true },
    { id: 5, src: 'ornaments0005.png', color: true },
    { id: 6, src: 'ornaments0006.png', color: true },
    { id: 7, src: 'ornaments0007.png', color: false },
    { id: 8, src: 'ornaments0008.png', color: true },
    { id: 9, src: 'ornaments0009.png', color: true },
    { id: 10, src: 'ornaments0010.png', color: true }
  ];

  return Elements;
});

calaverita.controller('ElementsCtrl', function($scope, Elements) {
  $scope.elements = Elements;
  $scope.selectedElement = 0;
  $scope.focusedElement = -1;
  $scope.myCalaverita = {
    background: { backgroundID: 1, color: { r: 13, g: 79, b: 13 } },
    haircut: { hairID: 1, color: { r: 36, g: 36, b: 36 } },
    ornaments: []
  };

  //Click layer button
  $scope.selectElement = function(numElement) {
    $scope.selectedElement = numElement;
    $scope.focusedElement = -1;
  };

  //Click object button
  $scope.selectBackground = function(id) {
    $scope.myCalaverita.background.backgroundID = id;
    $scope.focusedElement = 1000; // 999 is Background

    $scope.updateCanvas(); //Update canvas
  };

  $scope.selectHaircut = function(id) {
    $scope.myCalaverita.haircut.hairID = id;
    $scope.focusedElement = 999; // 999 is Hair because there is no 999 ornaments

    $scope.updateCanvas(); //Update canvas
  };

  $scope.selectOrnament = function(id) {
    if (!$scope.selectedOrnament(id)) {
      $scope.myCalaverita.ornaments.push({ id: id, color: { r: 36, g: 36, b: 36 } });
    }

    $scope.focusedElement = id; //Set the focus to that element
    $scope.updateCanvas(); //Update canvas
  };

  $scope.removeOrnament = function(id) {
    for (var i = 0; i < $scope.myCalaverita.ornaments.length; i++) {
      if ($scope.myCalaverita.ornaments[i].id == id) {
        $scope.myCalaverita.ornaments.splice(i, 1);
      }
    }

    $scope.updateCanvas(); //Update canvas
  };

  $scope.selectedOrnament = function(id) {
    for (var i = 0; i < $scope.myCalaverita.ornaments.length; i++) {
      if ($scope.myCalaverita.ornaments[i].id == id) {
        return true;
      }
    }

    return false;
  };

  //Click color button
  $scope.selectColor = function(color) {
    if ($scope.focusedElement == 999) {
      $scope.myCalaverita.haircut.color = color;
    } else if ($scope.focusedElement == 1000) {
      $scope.myCalaverita.background.color = color;
    } else if ($scope.focusedElement >= 0) {
      updateOrnamentColor($scope.focusedElement, color);
    }

    $scope.updateCanvas(); //Update canvas
  };

  $scope.canApplyColor = function() {
    if ($scope.focusedElement < 0) {
      return false;
    } else if ($scope.focusedElement == 999) {
      return $scope.myCalaverita.haircut.hairID != 1;
    } else if ($scope.focusedElement == 1000) {
      return searchInObject($scope.myCalaverita.background.backgroundID, $scope.elements.backgrounds).color;
    } else {
      return searchInObject($scope.focusedElement, $scope.elements.ornaments).color;
    }
  }

  //Facebook button

  //Save button
  $scope.saveCanvas = function() {
    var dataURL = $scope.stage.toDataURL( "image/png" );
    var buttonSave = $('.image-editor-save-canvas')
    buttonSave.attr('href', dataURL);
    buttonSave.get('0').click();
  };

  //CONFIGURE CANVAS

  //Init canvas
  $scope.initCanvas = function() {
    $scope.stage = new createjs.Stage("image-editor-canvas");

    //To ensure layers are created correctly and printed in order
    $scope.stage.addChildAt(new createjs.Container()); //Background
    $scope.stage.addChildAt(new createjs.Container()); //Skull
    $scope.stage.addChildAt(new createjs.Container()); //Hair
    $scope.stage.addChildAt(new createjs.Container()); //Ornaments

    $scope.updateCanvas(); //Update canvas
  };

  //Update canvas
  $scope.updateCanvas = function() {
    //Remove all from the canvas to print from 0
    $scope.stage.getChildAt(0).removeAllChildren(); //Background
    $scope.stage.getChildAt(1).removeAllChildren(); //Skull
    $scope.stage.getChildAt(2).removeAllChildren(); //Hair
    $scope.stage.getChildAt(3).removeAllChildren(); //Ornaments

    getBackground(); //Add background
    getSkull(); //Add skull
    getHaircut(); //Add haircut
    getOrnaments(); //Add ornaments

    $scope.stage.update(); //Print everything
  };

  //Get the background image
  function getBackground() {
    var obj = searchInObject($scope.myCalaverita.background.backgroundID, $scope.elements.backgrounds);
    if (obj.color) {
      getImageWithColor($scope.stage.getChildAt(0), 'assets/resources/normal/backgrounds/' + obj.src, $scope.myCalaverita.background.color);
    } else {
      getImage($scope.stage.getChildAt(0), 'assets/resources/normal/backgrounds/' + obj.src);
    }
  }

  //Get the skull image
  function getSkull() {
    getImage($scope.stage.getChildAt(1), 'assets/resources/skull_1.png');
  }

  //Get the haircut image
  function getHaircut() {
    var hairCutObj = $scope.myCalaverita.haircut;

    if (hairCutObj.hairID > 1) {
      var obj = searchInObject(hairCutObj.hairID, $scope.elements.haircuts);
      if (obj.color) {
        getImageWithColor($scope.stage.getChildAt(2), 'assets/resources/normal/haircuts/' + obj.src, hairCutObj.color);
      } else {
        getImage($scope.stage.getChildAt(2), 'assets/resources/normal/haircuts/' + obj.src);
      }
    }
  }

  //Get the ornaments image
  function getOrnaments() {
    var objects = new createjs.Container();

    for (var i = 0; i < $scope.myCalaverita.ornaments.length; i++) {
      var obj = searchInObject($scope.myCalaverita.ornaments[i].id, $scope.elements.ornaments);
      if (obj.color) {
        getImageWithColor(objects, 'assets/resources/normal/ornaments/' + obj.src, $scope.myCalaverita.ornaments[i].color);
      } else {
        getImage(objects, 'assets/resources/normal/ornaments/' + obj.src);
      }
    }

    $scope.stage.getChildAt(3).addChild(objects);
  }

  //HELPERS
  //Get the object images
  function searchInObject(id, myObject) {
    for(var i = 0; i < myObject.length; i++) {
      if (myObject[i].id == id) {
        return(myObject[i]);
      }
    }
  }

  function updateOrnamentColor(id, color) {
    for (var i = 0; i < $scope.myCalaverita.ornaments.length; i++) {
      if ($scope.myCalaverita.ornaments[i].id == id) {
        $scope.myCalaverita.ornaments[i].color = color;
        return true;
      }
    }
  }

  //IMAGE LOADER

  //Get image
  function getImage(container, src) {
    var img = new createjs.Bitmap(src);
    container.addChild(img);

    img.image.onload = function() {
      $scope.stage.update();
    };
  }

  //Get image with color
  function getImageWithColor(container, src, colorObject) {
    var tint = new createjs.ColorFilter(0.4, 0.4, 0.4, 1, colorObject.r, colorObject.g, colorObject.b, 1);
    var img = new createjs.Bitmap(src);

    img.filters = [ tint ];

    img.image.onload = function() {
      img.cache(0, 0, 350, 400);
      container.addChild(img);

      $scope.stage.update();
    };
  }
});