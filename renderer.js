// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

(function() {
    const script = document.createElement('script');
    script.async = true;
    script.src = process.env.ENV === 'dev' ? 'http://localhost:9000/dist/bundle.js' : './dist/bundle.js';
    document.write(script.outerHTML);
}());
