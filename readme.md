# Photoshop bootstrap ##
Create your own predefined set of layers, layergroups and guides so you won't have to manually set these up every time you need a new psd.

## Install ##

copy `build/bootstrap.jsx` to your photoshop scripts folder:

Windows: `C:\Program Files\Adobe\Adobe Photoshop CS5\Presets\Scripts`   
Mac OS: `Applications\Adobe Photoshop CS5\Presets\Scripts`

If you have copied the .jsx file to the right directory, the script should appear in Photoshop under `file › scripts › guides` when you have restarted it.

## Usage ##

Edit the settings object at the top of the bootstrap.jsx. Default setup creates a document of 1200x1200, with guides that center 978px horizontally and one vertical guide at 100px. Also a couple of layergroups are created, namely HEADER, BODY, FOOTER, and an extra layergroup + layer for the logo.

```javascript
var height, margin, settings, width;

width = 1200;
height = 1200;
margin = (width - 978) / 2;

settings = {
  width: width,
  height: height,
  guides: {
    horizontal: [100],
    vertical: [margin, width - margin]
  },
  layers: [
    {
      name: 'HEADER',
      layers: [
        {
          name: 'logo',
          layers: [
            {
              name: 'logo'
            }
          ]
        }
      ]
    }, {
      name: 'BODY',
      layers: []
    }, {
      name: 'FOOTER',
      layers: []
    }, {
      name: 'BACKGROUND',
      layers: [
        {
          name: 'background'
        }
      ]
    }
  ]
};

``` 

<table>
<thead>
    <th>name</th>
    <th>type</th>
    <th>example</th>
</thead>
<tbody>
    <tr>
        <td>width</td>
        <td>number</td>
        <td>1200</td>
    </tr>
    <tr>
        <td>height</td>
        <td>number</td>
        <td>1200</td>
    </tr>
    <tr>
        <td>guides</td>
        <td>object</td>
        <td>{ horizontal: [], vertical: [] }</td>
    </tr>
    <tr>
        <td>guides.horizontal</td>
        <td>array</td>
        <td>[100,200,300]</td>
    </tr>
    <tr>
        <td>guides.vertical</td>
        <td>array</td>
        <td>[100,200,300]</td>
    </tr>
    <tr>
        <td>layers</td>
        <td>array containing objects</td>
        <td>[{ name: 'layer 1' }]</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>Layers can be nested. If a layer contains another layers array, a layergroup is created. Every layer must be an object</td>
    </tr>
    <tr>
        <td>layer.name</td>
        <td>string</td>
        <td>layername</td>
    </tr>
</tbody>
</table>


---

#### Contribute / modify ####
You must have [node](http://nodejs.org/), [npm](https://npmjs.org/), [coffeescript](http://www.coffeescript.org) and [grunt](http://www.gruntjs.com) installed. 

##### Install node modules #####
Run `npm link` to create a local install of the grunt packages.

##### Edit code #####
Run `grunt` to continually compile coffeescript and move the .jsx file to the photoshop directory. Set the proper directory in the grunt.js file.