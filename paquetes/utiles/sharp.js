const sharp = require('sharp');

sharp('cv small.jpg')
.resize(80)
.grayscale()
.toFile('resized.png');