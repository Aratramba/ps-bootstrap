class Guides

  constructor: () ->
    @setup()


  # setup guides
  setup: () ->
    @createDocument()
    @createGuides(settings.guides)
    @createLayers(settings.layers)


  # create document
  createDocument: ->

    # create new document
    if not app.documents.length
      app.documents.add(settings.width, settings.height, 72, "", NewDocumentMode.RGB)

    # reference document
    @doc = app.activeDocument

    

  # create guides
  createGuides: (guides) ->

    for pos in guides.horizontal
      @doc.guides.add(Direction.HORIZONTAL, UnitValue("#{Math.round(pos)} pixels"))

    for pos in guides.vertical
      @doc.guides.add(Direction.VERTICAL, UnitValue("#{Math.round(pos)} pixels"))



  # create layers
  createLayers: (layers, parent) ->

    parent = @doc if not parent

    for obj in layers.reverse()

      # if it's a set
      if obj.layers?

        set = parent.layerSets.add()
        set.name = obj.name

        @createLayers(obj.layers, set)

      # art layers
      else
        layer = parent.artLayers.add()
        layer.name = obj.name
