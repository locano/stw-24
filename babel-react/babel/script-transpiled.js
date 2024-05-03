"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Obtener referencia al botón
var fetchButton = document.getElementById('fetchButton');

// Agregar evento click al botón
fetchButton.addEventListener('click', function () {
  // Realizar solicitud Fetch
  fetch('https://jsonplaceholder.typicode.com/posts/1').then(function (response) {
    return response.json();
  }).then(function (data) {
    // Mostrar los datos en la consola
    console.log(data);
  })["catch"](function (error) {
    // Manejar errores
    console.error('Error en la solicitud Fetch:', error);
  });
});

// Código original
var Rectangle = /*#__PURE__*/function () {
  function Rectangle(height, width) {
    _classCallCheck(this, Rectangle);
    this.height = height;
    this.width = width;
  }
  _createClass(Rectangle, [{
    key: "area",
    value: function area() {
      return this.height * this.width;
    }
  }]);
  return Rectangle;
}();
