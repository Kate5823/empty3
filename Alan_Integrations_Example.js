
// Android Integration
// - Java: https://alan.app/docs/client-api/android/android-api
// - Kotlin: https://alan.app/docs/client-api/android/android-api
//
// Web Integration
// - React: https://alan.app/docs/client-api/web/react
// - Angular: https://alan.app/docs/client-api/web/angular
// - Vue: https://alan.app/docs/client-api/web/vue
// - Ember: https://alan.app/docs/client-api/web/ember
// - JavaScript: https://alan.app/docs/client-api/web/vanilla
// - Electron: https://alan.app/docs/client-api/web/electron
// - Web Component: https://alan.app/docs/client-api/web/web-component

question('what is this', p =>  {
    p.play('This is an example app with voice capabilities. (Powered by Alan|Voice support is provided by Alan)');
});

question('what is Alan (AI|Platform|)', p => {
    p.play('Alan (AI|Platform) is a platform that will allow you to voice enable any application. Be it mobile app on iOS or Android, or a web page.');
});

question('what (platforms|SDK|frameworks) are supported', p => {
    p.play('Alan (AI|Platform) supports native iOS, Android, and Web applications. As well as Flutter, Ionic and many other popular frameworks.');
});