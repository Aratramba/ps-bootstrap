# Setup photoshop guides ##

...

## Simple install ##

copy `build/guides.jsx` to your photoshop scripts folder:

Windows: `C:\Program Files\Adobe\Adobe Photoshop CS5\Presets\Scripts`   
Mac OS: `Applications\Adobe Photoshop CS5\Presets\Scripts`

If you have copied the .jsx file to the right directory, the script should appear in Photoshop under `file › scripts › guides` when you have restarted it.

## Usage ##

...

---

#### Contribute / modify ####
You must have [node](http://nodejs.org/), [npm](https://npmjs.org/), [coffeescript](http://www.coffeescript.org) and [grunt](http://www.gruntjs.com) installed. 

##### Install node modules #####
Run `npm link` to create a local install of the grunt packages.

##### Edit code #####
Run `grunt` to continually compile coffeescript and move the .jsx file to the photoshop directory. Set the proper directory in the grunt.js file.