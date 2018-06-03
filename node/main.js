const ffi = require('ffi');

// Load shared Go server.{so,dylib,dll} library.
const server = ffi.Library(__dirname + '/../server', {
    'colorprint': ['void', ['string']],
    'play': ['void', ['string']],
});

// テスト出力
//server.colorprint('Hello,go! from Node.js');

// 音の再生
server.play('./sample.mp3');
