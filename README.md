# Configurator Framework

The Configurator Framework is a javascript library for building 3D configurators with Sketchfab Viewer API.
Configurators are described by a JSON file that are consummed by the framework.

## Supported option types

### Color

The `visible` option allows the user to change the color of a material.
The selected color is applied to Diffuse, Diffuse (PBR) and Albedo (PBR) channels.

```json
{
    "name": "Plastic color",
    "type": "color",
    "material": "white_plastic",
    "default": "#1CAAD9"
},
```

You can also include a list of predefined colors:

```json
{
    "name": "Seat color",
    "type": "color",
    "material": ["leather_1", "leather_2"],
    "options": [
        {
            "color": "#333333",
            "name": "Black"
        },
        {
            "color": "#FFFFFF",
            "name": "White"
        },
        {
            "color": "#803A00",
            "name": "Brown"
        }
    ],
    "default": "#803A00"
}
```

### Visible

The `visible` option allows the user to show and hide an object.

```json
{
    "name": "Arms",
    "type": "visible",
    "selector": "[name=\"g_arm\"]",
    "default": false
},
```

### Select

The `select` option allows the user to select an object among a list of objects.
Only the selected object will be visible.

```javascript
{
    "name": "Antenna side",
    "type": "select",
    "options": [
        {
            "selector": "",
            "name": "No antenna"
        },
        {
            "selector": "[name=\"g_head_LEFT\"] [name=\"g_aerial\"]",
            "name": "Left"
        },
        {
            "selector": "[name=\"g_head_RIGHT\"] [name=\"g_aerial\"]",
            "name": "Right"
        }
    ],
    "default": 0
}
```

### Texture

The `texture` option allows the user to change the texture of selected channels of a material.
Images must be CORS-enabled.

```javascript
{
    "name": "Face",
    "type": "texture",
    "material": "face",
    "channels": ["AlbedoPBR", "EmitColor"],
    "options": [
        {
            "name": "Default",
            "url": "https://example.com/face-default.png"
        },
        {
            "name": "Happy",
            "url": "https://example.com/face-happy.jpg"
        },
        {
            "name": "Sleepy",
            "url": "https://example.com/face-sleepy.jpg"
        }
    ],
    "default": 0
}
```

## API Documentation

* `npm run docs` to generate the docs
* Doc will be generated in `docs/`

## Development

* `npm install` to install dependencies
* `npm run watch` to build/watch for dev

## Building for production / Release

* `git checkout master`
* `npm install` to install dependencies.
* `npm version x.x.x` where `x.x.x` is [a valid version](https://docs.npmjs.com/cli/version).
    * this will update the version in `package.json`
    * build the library for production (`npm run build`)
    * create a new commit
    * tag the commit with the new version
* Push the tag to github

## Todo

* [ ] Use material values as default values
* [ ] Support textures or full materials
* [ ] Support scale/translation/rotation
* [ ] Custom color picker
* [ ] UI Customization
* [ ] Add presets for changing multiple properties at once
* [ ] Interactivity? (trigger animation, move camera)
