var Canvas = document.getElementById('canvas');
var ctx = Canvas.getContext('2d');

var resize = function() {
    Canvas.width = Canvas.clientWidth;
    Canvas.height = Canvas.clientHeight;
};

window.addEventListener('resize', resize);
resize();

var elements = [];
var presets = {};
var color = { r: 41, g: 187, b: 216 };
var colorBg = { r: 0, g: 96, b: 100 };

document.querySelector('#item-menu').style.setProperty('--after-or-before-item-menu', `rgb(${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(color.b)})`)

presets.o = function(x, y, s, dx, dy) {
    return {
        x: x,
        y: y,
        r: 12 * s,
        w: 5 * s,
        dx: dx,
        dy: dy,
        draw: function(ctx, t) {
            this.x += this.dx;
            this.y += this.dy;

            ctx.beginPath();
            ctx.arc(this.x + +Math.sin((50 + x + (t / 10)) / 100) * 3, this.y + +Math.sin((45 + x + (t / 10)) / 100) * 4, this.r, 0, 2 * Math.PI, false);
            ctx.lineWidth = this.w;
            ctx.strokeStyle = getColorString();
            ctx.stroke();
        }
    };
};

presets.x = function(x, y, s, dx, dy, dr, r) {
    r = r || 0;
    return {
        x: x,
        y: y,
        s: 20 * s,
        w: 5 * s,
        r: r,
        dx: dx,
        dy: dy,
        dr: dr,
        draw: function(ctx, t) {
            this.x += this.dx;
            this.y += this.dy;
            this.r += this.dr;

            var _this = this;
            var line = function(x, y, tx, ty, o) {
                o = o || 0;
                ctx.beginPath();
                ctx.moveTo(-o + ((_this.s / 2) * x), o + ((_this.s / 2) * y));
                ctx.lineTo(-o + ((_this.s / 2) * tx), o + ((_this.s / 2) * ty));
                ctx.lineWidth = _this.w;
                ctx.strokeStyle = getColorString();
                ctx.stroke();
            };

            ctx.save();

            ctx.translate(this.x + Math.sin((x + (t / 10)) / 100) * 5, this.y + Math.sin((10 + x + (t / 10)) / 100) * 2);
            ctx.rotate(this.r * Math.PI / 180);

            line(-1, -1, 1, 1);
            line(1, -1, -1, 1);

            ctx.restore();
        }
    };
};

presets.triangle = function(x, y, s, dx, dy, dr, r) {
    r = r || 0;
    return {
        x: x,
        y: y,
        s: 20 * s,
        w: 5 * s,
        r: r,
        dx: dx,
        dy: dy,
        dr: dr,
        draw: function(ctx, t) {
            this.x += this.dx;
            this.y += this.dy;
            this.r += this.dr;

            var _this = this;
            var line = function(x, y, tx, ty, o) {
                o = o || 0;
                ctx.beginPath();
                ctx.moveTo(-o + ((_this.s / 2) * x), o + ((_this.s / 2) * y));
                ctx.lineTo(-o + ((_this.s / 2) * tx), o + ((_this.s / 2) * ty));
                ctx.lineWidth = _this.w;
                ctx.strokeStyle = getColorString();
                ctx.stroke();
            };

            ctx.save();

            ctx.translate(this.x + Math.sin((x + (t / 10)) / 100) * 5, this.y + Math.sin((10 + x + (t / 10)) / 100) * 2);
            ctx.rotate(this.r * Math.PI / 180);

            line(0, -1, 1, 1);
            line(1, 1, -1, 1);
            line(-1, 1, 0, -1);

            ctx.restore();
        }
    };
};

presets.square = function(x, y, s, dx, dy, dr, r) {
    return {
        x: x,
        y: y,
        r: r,
        s: 20 * s,
        w: 5 * s,
        dx: dx,
        dy: dy,
        dr: dr,
        draw: function(ctx, t) {
            this.x += this.dx;
            this.y += this.dy;
            this.r += this.dr;

            var _this = this;
            var line = function(x, y, tx, ty, o) {
                o = o || 0;
                ctx.beginPath();
                ctx.moveTo(-o + ((_this.s / 2) * x), o + ((_this.s / 2) * y));
                ctx.lineTo(-o + ((_this.s / 2) * tx), o + ((_this.s / 2) * ty));
                ctx.lineWidth = _this.w;
                ctx.strokeStyle = getColorString();
                ctx.stroke();
            };

            ctx.save();

            ctx.translate(this.x + Math.sin((x + (t / 10)) / 100) * 5, this.y + Math.sin((10 + x + (t / 10)) / 100) * 2);
            ctx.rotate(this.r * Math.PI / 180);

            line(1, 1, 1, -1);
            line(1, -1, -1, -1);
            line(-1, -1, -1, 1);
            line(-1, 1, 1, 1);

            ctx.restore();
        }
    };
};

function getColorString() {
    var red = Math.round(color.r);
    var green = Math.round(color.g);
    var blue = Math.round(color.b);

    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

var colorList_500_HEX = [
    'F44336',
    'E91E63',
    '9C27B0',
    '673AB7',
    '3F51B5',
    '2196F3',
    '03A9F4',
    '00BCD4',
    '009688',
    '4CAF50',
    '8BC34A',
    'CDDC39',
    'FFEB3B',
    'FF9800',
    'FF5722',
];

var colorList_900_HEX = [
    'B71C1C', 
    '880E4F', 
    '4A148C', 
    '311B92', 
    '1A237E', 
    '0D47A1', 
    '01579B', 
    '006064', 
    '004D40', 
    '1B5E20', 
    '33691E', 
    '827717', 
    'F57F17', 
    'FF6F00', 
    'BF360C', 
];

var colorList_500_RGB = [
    { r: 244, g: 67, b: 54 },
    { r: 233, g: 30, b: 99 },
    { r: 156, g: 39, b: 176 },
    { r: 103, g: 58, b: 183 },
    { r: 63, g: 81, b: 181 },
    { r: 33, g: 150, b: 243 },
    { r: 3, g: 169, b: 244 },
    { r: 0, g: 188, b: 212 },
    { r: 0, g: 150, b: 136 },
    { r: 76, g: 175, b: 80 },
    { r: 139, g: 195, b: 74 },
    { r: 205, g: 220, b: 57 },
    { r: 255, g: 235, b: 59 },
    { r: 255, g: 152, b: 0 },
    { r: 255, g: 87, b: 34 },
];

var colorList_900_RGB = [
    { r: 183, g: 28, b: 28 },
    { r: 136, g: 14, b: 79 },
    { r: 74, g: 20, b: 140 },
    { r: 49, g: 27, b: 146 },
    { r: 26, g: 35, b: 126 },
    { r: 13, g: 71, b: 161 },
    { r: 1, g: 87, b: 155 },
    { r: 0, g: 96, b: 100 },
    { r: 0, g: 77, b: 64 },
    { r: 27, g: 94, b: 32 },
    { r: 51, g: 105, b: 30 },
    { r: 130, g: 119, b: 23 },
    { r: 245, g: 127, b: 23 },
    { r: 255, g: 111, b: 0 },
    { r: 191, g: 54, b: 12 },
];
  
function updateColor() {
    var randomColorIndex = Math.floor(Math.random() * colorList_500_HEX.length);
    var targetColor = colorList_500_RGB[randomColorIndex];
    var targetBgColor = colorList_900_RGB[randomColorIndex];
    
    var duration = 5000;
    var startTime = new Date().getTime();

    function animate() {
        var currentTime = new Date().getTime();
        var elapsedTime = currentTime - startTime;

        if (elapsedTime >= duration) {
            color = targetColor;
            colorBg = targetBgColor;
        } else {
            var progress = elapsedTime / duration;

            color.r = interpolate(color.r, targetColor.r, progress);
            color.g = interpolate(color.g, targetColor.g, progress);
            color.b = interpolate(color.b, targetColor.b, progress);

            colorBg.r = interpolate(colorBg.r, targetBgColor.r, progress);
            colorBg.g = interpolate(colorBg.g, targetBgColor.g, progress);
            colorBg.b = interpolate(colorBg.b, targetBgColor.b, progress);

            setBodyBackgroundColor(colorBg);
            setColorHtml(color);
            requestAnimationFrame(animate);
        }
    }

    animate();
}

function setBodyBackgroundColor(color) {
    var rgb = `rgb(${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(color.b)})`;

    var body = document.querySelector('body');
    var html = document.querySelector('html');
    var canvas = document.querySelector('#canvas');

    body.style.backgroundColor = rgb;
    html.style.backgroundColor = rgb;
    canvas.style.backgroundColor = rgb;
}

function restartAnimationAvatar() {
    var gif = document.querySelector('#avatar img');
    var src = gif.getAttribute('src');

    gif.setAttribute('src', '');
    gif.setAttribute('src', src);
}

function setColorHtml(color) {
    var rgb = `rgb(${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(color.b)})`;

    var avatar = document.querySelector('#avatar');
    var h3 = document.querySelectorAll('h3');
    var h4 = document.querySelectorAll('h4');
    var h5 = document.querySelectorAll('h5');
    var h6 = document.querySelectorAll('h6');
    var i = document.querySelectorAll('i');
    var profile = document.querySelector('.profile');
    var itemMenu = document.querySelector('#item-menu');
    var avatarImg = document.querySelector('#avatar img');

    h3.forEach(function(item) {
        item.style.color = rgb
    });

    h4.forEach(function(item) {
        item.style.color = rgb
    });

    h5.forEach(function(item) {
        item.style.color = rgb
    });

    h6.forEach(function(item) {
        item.style.color = rgb
    });

    i.forEach(function(item) {
        item.style.color = rgb
    });

    avatar.style.border = '5px solid ' + rgb;
    avatar.style.backgroundColor = rgb;
    profile.style.backgroundColor = rgb;
    itemMenu.style.backgroundColor = rgb;
    itemMenu.style.setProperty('--after-or-before-item-menu', rgb);
    avatarImg.style.filter = `hue-rotate(${rgbToHueRotate(color, { r: 41, g: 187, b: 216 })}deg)`;
}

function rgbToHueRotate(color, startPoint) {
    const startR = startPoint.r / 255;
    const startG = startPoint.g / 255;
    const startB = startPoint.b / 255;
  
    const r = color.r / 255;
    const g = color.g / 255;
    const b = color.b / 255;
  
    const startHSV = rgbToHSV(startR, startG, startB);
    const hsv = rgbToHSV(r, g, b);
  
    let hueDiff = hsv.hue - startHSV.hue;
  
    if (hueDiff < 0) {
        hueDiff += 360;
    }
  
    return hueDiff;
}
  
function rgbToHSV(r, g, b) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
  
    let hue = 0;

    if (delta === 0) {
        hue = 0;
    } else if (max === r) {
        hue = ((g - b) / delta) % 6;
    } else if (max === g) {
        hue = (b - r) / delta + 2;
    } else {
        hue = (r - g) / delta + 4;
    }
  
    hue *= 60;
  
    const saturation = max === 0 ? 0 : delta / max;
    const value = max;
  
    return { hue, saturation, value };
}

function interpolate(start, end, progress) {
    return start + (end - start) * progress;
}

for (var x = 0; x < Canvas.width; x++) {
    for (var y = 0; y < Canvas.height; y++) {
        if (Math.round(Math.random() * 8000) === 1) {
            var s = ((Math.random() * 5) + 1) / 10;
            var randomShape = Math.round(Math.random() * 3);

            if (randomShape === 0)
                elements.push(presets.o(x, y, s, 0, 0));
            else if (randomShape === 1)
                elements.push(presets.x(x, y, s, 0, 0, ((Math.random() * 3) - 1) / 10, (Math.random() * 360)));
            else if (randomShape === 2)
                elements.push(presets.triangle(x, y, s, 0, 0, ((Math.random() * 3) - 1) / 10, (Math.random() * 360)));
            else if (randomShape === 3)
                elements.push(presets.square(x, y, s, 0, 0, ((Math.random() * 3) - 1) / 10, (Math.random() * 360)));
        }
    }
}

setInterval(function() {
    ctx.clearRect(0, 0, Canvas.width, Canvas.height);

    var time = new Date().getTime();

    for (var e in elements)
        elements[e].draw(ctx, time);
}, 10);

restartAnimationAvatar();

setInterval(updateColor, 5130);
