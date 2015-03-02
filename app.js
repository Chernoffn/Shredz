// Create a PlayCanvas application
var canvas = document.getElementById("application-canvas");
canvas.focus();

var app = new pc.fw.Application(canvas, {
    mouse: new pc.input.Mouse(canvas),
    keyboard: new pc.input.Keyboard(canvas),
    touch: new pc.input.TouchDevice(canvas)
});

app.context.loader._handlers['texture'].crossOrigin = 'anonymous';
app.context.loader._handlers['model'].crossOrigin = 'anonymous';

app.start();

// Fill the available space at full resolution
//app.setCanvasFillMode(pc.fw.FillMode.FILL_WINDOW);
//app.setCanvasResolution(pc.fw.ResolutionMode.AUTO);

app.systems.rigidbody.setGravity(0, -10, 0);

// load all textures
var textures = [
];

var assets_json = [
];

var promises = [];

for (var i = 0; i < textures.length; i++) {
    promises.push(app.context.assets.loadFromUrl(textures[i], "texture"));
}

for (var i = 0; i < assets_json.length; i++)
    promises.push(app.context.assets.loadFromUrl(assets_json[i], "json"));

// check for all assets to load then create skybox
pc.promise.all(promises).then(function (results) {

});


// Add to hierarchy
