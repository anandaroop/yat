'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _Yat = require('./Yat');

var _Yat2 = _interopRequireDefault(_Yat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

beforeEach(function () {});

it('renders a placeholder while waiting', function () {
  navigator.geolocation = {
    getCurrentPosition: jest.fn()
  };
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Yat2.default, null)).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the returned coordinates', function () {
  var response = {
    coords: { longitude: -90, latitude: 30 }
  };
  navigator.geolocation = {
    getCurrentPosition: jest.fn(function (cb) {
      return cb(response);
    })
  };
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Yat2.default, null)).toJSON();
  expect(tree).toMatchSnapshot();
});