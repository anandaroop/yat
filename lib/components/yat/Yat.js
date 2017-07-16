'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Yat = function (_Component) {
  _inherits(Yat, _Component);

  function Yat(props) {
    _classCallCheck(this, Yat);

    var _this = _possibleConstructorReturn(this, (Yat.__proto__ || Object.getPrototypeOf(Yat)).call(this, props));

    _this.state = {
      isLocated: false,
      longitude: null,
      latitude: null
    };
    return _this;
  }

  _createClass(Yat, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      navigator.geolocation.getCurrentPosition(function (position) {
        var _position$coords = position.coords,
            longitude = _position$coords.longitude,
            latitude = _position$coords.latitude;

        _this2.setState({
          isLocated: true,
          longitude: longitude,
          latitude: latitude
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isLocated = _state.isLocated,
          longitude = _state.longitude,
          latitude = _state.latitude;

      return _react2.default.createElement(
        'div',
        null,
        isLocated ? longitude + ', ' + latitude : 'locating…'
      );
    }
  }]);

  return Yat;
}(_react.Component);

exports.default = Yat;