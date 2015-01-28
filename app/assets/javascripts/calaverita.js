var calaverita = angular.module('calaverita', []);

//Fill with data
//TODO: Replace this with a http service?
calaverita.factory('Elements', function() {
  var Elements = {};

  Elements.backgrounds = [
    { id: 1, src: 'background_1.jpg' },
    { id: 2, src: 'background_2.jpg' },
    { id: 3, src: 'background_3.jpg' },
    { id: 4, src: 'background_4.jpg' },
    { id: 5, src: 'background_5.jpg' }
  ];

  Elements.haircuts = [
    { id: 1, src: 'haircut0001.png' },
    { id: 2, src: 'haircut0002.png' },
    { id: 3, src: 'haircut0003.png' },
    { id: 4, src: 'haircut0004.png' },
    { id: 5, src: 'haircut0005.png' },
    { id: 6, src: 'haircut0006.png' },
    { id: 7, src: 'haircut0007.png' },
    { id: 8, src: 'haircut0008.png' },
    { id: 9, src: 'haircut0009.png' },
    { id: 10, src: 'haircut0010.png' },
    { id: 11, src: 'haircut0011.png' },
    { id: 12, src: 'haircut0012.png' },
    { id: 13, src: 'haircut0013.png' },
    { id: 14, src: 'haircut0014.png' },
    { id: 15, src: 'haircut0015.png' },
    { id: 16, src: 'haircut0016.png' },
    { id: 17, src: 'haircut0017.png' },
    { id: 18, src: 'haircut0018.png' },
    { id: 19, src: 'haircut0019.png' },
    { id: 20, src: 'haircut0020.png' },
    { id: 21, src: 'haircut0021.png' },
    { id: 22, src: 'haircut0022.png' },
    { id: 23, src: 'haircut0023.png' },
    { id: 24, src: 'haircut0024.png' },
    { id: 25, src: 'haircut0025.png' },
    { id: 26, src: 'haircut0026.png' },
    { id: 27, src: 'haircut0027.png' },
    { id: 28, src: 'haircut0028.png' },
    { id: 29, src: 'haircut0029.png' },
    { id: 30, src: 'haircut0030.png' },
    { id: 31, src: 'haircut0031.png' },
    { id: 32, src: 'haircut0032.png' },
    { id: 33, src: 'haircut0033.png' },
    { id: 34, src: 'haircut0034.png' },
    { id: 35, src: 'haircut0035.png' },
    { id: 36, src: 'haircut0036.png' },
    { id: 37, src: 'haircut0037.png' },
    { id: 38, src: 'haircut0038.png' },
    { id: 39, src: 'haircut0039.png' },
    { id: 40, src: 'haircut0040.png' },
    { id: 41, src: 'haircut0041.png' },
    { id: 42, src: 'haircut0042.png' },
    { id: 43, src: 'haircut0043.png' },
    { id: 44, src: 'haircut0044.png' },
    { id: 45, src: 'haircut0045.png' },
    { id: 46, src: 'haircut0046.png' },
    { id: 47, src: 'haircut0047.png' },
    { id: 48, src: 'haircut0048.png' },
    { id: 49, src: 'haircut0049.png' },
    { id: 50, src: 'haircut0050.png' },
    { id: 51, src: 'haircut0051.png' },
    { id: 52, src: 'haircut0052.png' },
    { id: 53, src: 'haircut0053.png' },
    { id: 54, src: 'haircut0054.png' },
    { id: 55, src: 'haircut0055.png' },
    { id: 56, src: 'haircut0056.png' },
    { id: 57, src: 'haircut0057.png' },
    { id: 58, src: 'haircut0058.png' },
    { id: 59, src: 'haircut0059.png' },
    { id: 60, src: 'haircut0060.png' },
    { id: 61, src: 'haircut0061.png' },
    { id: 62, src: 'haircut0062.png' },
    { id: 63, src: 'haircut0063.png' },
    { id: 64, src: 'haircut0064.png' },
    { id: 65, src: 'haircut0065.png' }
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
  $scope.focusedElement = -1;
  $scope.myCalaverita = {
    background: { backgroundID: 1 },
    haircut: { hairID: 1, color: { h: 180, s: 100, l: 0, r: 128, g: 128, b: 128 } },
    ornaments: []
  };

  //Click edit button
  $scope.toggleEdit = function() {
    $scope.editable = !this.editable;
    $scope.focusedElement = -1;
  };

  //Click element button
  $scope.selectElement = function(numElement) {
    $scope.selectedElement = numElement;

    $scope.focusedElement = -1;
  };

  //Click item button
  $scope.selectBackground = function(id) {
    $scope.myCalaverita.background.backgroundID = id;

    //Update canvas
    $scope.updateCanvas();
  };

  $scope.selectHaircut = function(id) {
    $scope.myCalaverita.haircut.hairID = id;
    $scope.focusedElement = 999; // 999 is Hair because there is no 999 ornaments

    //Update canvas
    $scope.updateCanvas();
  };

  $scope.selectOrnament = function(id) {
    if (!$scope.selectedOrnament(id)) {
      $scope.myCalaverita.ornaments.push(
        {
          id: id,
          color: {
            h: 0, s: 0, l: 0, r: 128, g: 128, b: 128
          }
        });
    }

    //Set the focus to that element
    $scope.focusedElement = id;

    //Update canvas
    $scope.updateCanvas();
  };

  $scope.removeOrnament = function(id) {
    for (var i = 0; i < $scope.myCalaverita.ornaments.length; i++) {
      if ($scope.myCalaverita.ornaments[i].id == id) {
        $scope.myCalaverita.ornaments.splice(i, 1);
      }
    }

    //Update canvas
    $scope.updateCanvas();
  };

  $scope.selectedOrnament = function(id) {
    for (var i = 0; i < $scope.myCalaverita.ornaments.length; i++) {
      if ($scope.myCalaverita.ornaments[i].id == id) {
        return true;
      }
    }

    return false;
  };

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

    $('.image-editor-color-btn').colpick({
      submit: 0,
      color: { h:180, s:50, b:50 },
      onChange: function(hsb,hex,rgb,el,bySetColor) {
        setBackgroundColor(hex);
        //Change color on focused element
        var color = { h: hsb.h, s: hsb.s, l: hsb.b, r: rgb.r, g: rgb.g, b: rgb.b };
        if ($scope.focusedElement > 0) {
          if ($scope.focusedElement == 999) {
            $scope.myCalaverita.haircut.color = color;
          } else {
            updateOrnamentColor($scope.focusedElement, color);
          }
        }

        //Update canvas
        $scope.updateCanvas();
      },
      onShow: function() {
        //Set te color selected in the item selected
        //Get the actual color
        //var color = { h:180, s:50, b:50},
        //    colorObj = {};
        //if ($scope.focusedElement > 0) {
        //  if ($scope.focusedElement == 999) {
        //    colorObj = $scope.myCalaverita.haircut.color;
        //  } else {
        //    colorObj = getOrnamentFromArray($scope.focusedElement);
        //  }
        //  color = { h: colorObj.h, s: colorObj.s, b: colorObj.l }
        //}
        //
        //debugger;
        //$(this).colPickSetColor();
      }
    });

    $scope.updateCanvas();
  };

  //Update canvas
  $scope.updateCanvas = function() {
    $scope.stage.getChildAt(0).removeAllChildren();
    $scope.stage.getChildAt(1).removeAllChildren();
    $scope.stage.getChildAt(2).removeAllChildren();
    $scope.stage.getChildAt(3).removeAllChildren();

    getBackground();
    getSkull();
    getHaircut();
    getOrnaments();

    $scope.stage.update();
  };

  //Get the background image
  function getBackground() {
    var obj = searchInObject($scope.myCalaverita.background.backgroundID, $scope.elements.backgrounds);
    if ($scope.myCalaverita.background.colorID > 0) {
      var rgbObject = searchInObject($scope.myCalaverita.background.colorID, $scope.elements.colors).code;
      getImageWithColor($scope.stage.getChildAt(0), 'assets/resources/normal/backgrounds/' + obj.src, rgbObject);
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
      getImageWithColor($scope.stage.getChildAt(2), 'assets/resources/normal/haircuts/' + obj.src, hairCutObj.color);
    }
  }

  //Get the ornaments image
  function getOrnaments() {
    var objects = new createjs.Container();

    for (var i = 0; i < $scope.myCalaverita.ornaments.length; i++) {
      var obj = searchInObject($scope.myCalaverita.ornaments[i].id, $scope.elements.ornaments);
      getImageWithColor(objects, 'assets/resources/normal/ornaments/' + obj.src, $scope.myCalaverita.ornaments[i].color);
    }

    $scope.stage.getChildAt(3).addChild(objects);
  }

  //HELPERS

  function getOrnamentFromArray(id) {
    for (var i = 0; i < $scope.myCalaverita.ornaments.length; i++) {
      if ($scope.myCalaverita.ornaments[i].id == id) {
        return $scope.myCalaverita.ornaments[i];
      }
    }
  };

  function updateOrnamentColor(id, color) {
    for (var i = 0; i < $scope.myCalaverita.ornaments.length; i++) {
      if ($scope.myCalaverita.ornaments[i].id == id) {
        $scope.myCalaverita.ornaments[i].color = color;
        return true;
      }
    }
  };

  //Get the object images
  function searchInObject(id, myObject) {
    for(var i = 0; i < myObject.length; i++) {
      if (myObject[i].id == id) {
        return(myObject[i]);
      }
    }
  }

  function setBackgroundColor(hex) {
    $('.image-editor-color-selected').css('background-color', '#'+hex);
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
    var tint = new createjs.ColorFilter(0, 0, 0, 1, colorObject.r, colorObject.g, colorObject.b, 0);
    var img = new createjs.Bitmap(src);

    img.filters = [ tint ];

    img.image.onload = function() {
      img.cache(0, 0, 350, 400);
      container.addChild(img);

      $scope.stage.update();
    };
  }
});