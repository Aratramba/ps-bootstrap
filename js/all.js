var Dialog;

Dialog = (function() {

  function Dialog() {
    new Guides();
  }

  return Dialog;

})();

var Guides;

Guides = (function() {

  function Guides() {
    this.createDocument();
    app.activeDocument.suspendHistory("Bootstrapping", "this.setup()");
  }

  Guides.prototype.setup = function() {
    this.createGuides(settings.guides);
    return this.createLayers(settings.layers);
  };

  Guides.prototype.createDocument = function() {
    if (!app.documents.length) {
      app.documents.add(settings.width, settings.height, 72, "", NewDocumentMode.RGB);
    }
    return this.doc = app.activeDocument;
  };

  Guides.prototype.createGuides = function(guides) {
    var pos, _i, _j, _len, _len1, _ref, _ref1, _results;
    _ref = guides.horizontal;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      pos = _ref[_i];
      this.doc.guides.add(Direction.HORIZONTAL, UnitValue("" + (Math.round(pos)) + " pixels"));
    }
    _ref1 = guides.vertical;
    _results = [];
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      pos = _ref1[_j];
      _results.push(this.doc.guides.add(Direction.VERTICAL, UnitValue("" + (Math.round(pos)) + " pixels")));
    }
    return _results;
  };

  Guides.prototype.createLayers = function(layers, parent) {
    var layer, obj, set, _i, _len, _ref, _results;
    if (!parent) {
      parent = this.doc;
    }
    _ref = layers.reverse();
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      obj = _ref[_i];
      if (obj.layers != null) {
        set = parent.layerSets.add();
        set.name = obj.name;
        _results.push(this.createLayers(obj.layers, set));
      } else {
        layer = parent.artLayers.add();
        _results.push(layer.name = obj.name);
      }
    }
    return _results;
  };

  return Guides;

})();

var dialog;

dialog = new Dialog();
