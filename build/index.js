/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./src/00-dashboard/index.js":
/*!***********************************!*\
  !*** ./src/00-dashboard/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates.js */ "./src/00-dashboard/templates.js");



/**
 *  NHS Panel Group Element
 *  @reference: https://nhsuk.github.io/nhsuk-frontend/components/panel/index.html
 *  @author Tony Blacker, NHS Leadership Academy
 *  @version 1.0 22nd July 2019
 */
var _wp$element = wp.element,
    useState = _wp$element.useState,
    setState = _wp$element.setState;
var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    createBlock = _wp$blocks.createBlock;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    URLInputButton = _wp$blockEditor.URLInputButton,
    ColorPalette = _wp$blockEditor.ColorPalette,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    BlockControls = _wp$blockEditor.BlockControls,
    __experimentalBlockVariationPicker = _wp$blockEditor.__experimentalBlockVariationPicker;
var _wp$data = wp.data,
    useDispatch = _wp$data.useDispatch,
    useSelect = _wp$data.useSelect;


registerBlockType("nhsblocks/dashboardnav", {
  title: __("Dashboard Navigation", "nhsblocks"),
  category: "nhsblocks",
  icon: 'tagcloud',
  attributes: {
    template: {
      type: "array"
    }
  },
  edit: function edit(props) {
    var clientId = props.clientId,
        name = props.name;
    var template = props.attributes.template,
        setAttributes = props.setAttributes;

    var _useDispatch = useDispatch('core/block-editor'),
        replaceInnerBlocks = _useDispatch.replaceInnerBlocks;

    var ALLOWED_BLOCKS = ['nhsblocks/dashpanel'];

    var _useSelect = useSelect(function (select) {
      var _select = select('core/blocks'),
          __experimentalGetBlockVariations = _select.__experimentalGetBlockVariations,
          getBlockType = _select.getBlockType,
          __experimentalGetDefaultBlockVariation = _select.__experimentalGetDefaultBlockVariation;

      return {
        blockType: getBlockType(name),
        defaultVariation: __experimentalGetDefaultBlockVariation(name, 'block'),
        hasInnerBlocks: select('core/block-editor').getBlocks(clientId).length > 0,
        variations: __experimentalGetBlockVariations(name, 'block')
      };
    }, [clientId, name]),
        blockType = _useSelect.blockType,
        defaultVariation = _useSelect.defaultVariation,
        hasInnerBlocks = _useSelect.hasInnerBlocks,
        variations = _useSelect.variations;

    var onChangeLayout = function onChangeLayout(nextVariation, registry) {
      if (nextVariation.attributes) {
        props.setAttributes(nextVariation.attributes);
      }

      if (nextVariation.innerBlocks) {
        replaceInnerBlocks(props.clientId, createBlocksFromInnerBlocksTemplate(nextVariation.innerBlocks));
      }
    };

    var createBlocksFromInnerBlocksTemplate = function createBlocksFromInnerBlocksTemplate(innerBlocksTemplate) {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(innerBlocksTemplate, function (_ref) {
        var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 3),
            name = _ref2[0],
            attributes = _ref2[1],
            _ref2$ = _ref2[2],
            innerBlocks = _ref2$ === void 0 ? [] : _ref2$;

        return createBlock(name, attributes, createBlocksFromInnerBlocksTemplate(innerBlocks));
      });
    };

    if (hasInnerBlocks) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "nhsuk-grid-row"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "nhsuk-panel-group nhsuk-grid-column-full nhsuk-dashboard"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
        template: _templates_js__WEBPACK_IMPORTED_MODULE_3__["GRID_OPTIONS"]
      })));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nhsuk-grid-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nhsuk-panel-group nhsuk-grid-column-full nhsuk-dashboard"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(__experimentalBlockVariationPicker, {
      variations: _templates_js__WEBPACK_IMPORTED_MODULE_3__["GRID_OPTIONS"],
      onSelect: function onSelect(nextVariation) {
        if (nextVariation.attributes) {
          props.setAttributes(nextVariation.attributes);
        }

        if (nextVariation.innerBlocks) {
          replaceInnerBlocks(props.clientId, createBlocksFromInnerBlocksTemplate(nextVariation.innerBlocks));
        }
      }
    })));
  },
  save: function save(props) {
    var template = props.attributes.template;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nhsuk-grid-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nhsuk-panel-group nhsuk-dashboard"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null)));
  }
});
registerBlockType("nhsblocks/dashpanel", {
  title: __("Dashboard Region", "nhsblocks"),
  description: __("Simple image background with text and link to give Dashboard navigation panel"),
  icon: "feedback",
  category: "nhsblocks",
  parent: ["nhsblocks/dashboardnav"],
  attributes: {
    panelTitle: {
      type: "string",
      source: "html",
      selector: "h3"
    },
    panelLink: {
      type: "string",
      source: "attribute",
      selector: ".nhsuk-promo__link-wrapper",
      attribute: "href"
    },
    backgroundImage: {
      type: 'string',
      default: '/wp-content/plugins/nhsblocks/assets/pixel_trans.png'
    },
    overlayColor: {
      type: 'string',
      default: '#ffffff'
    }
  },
  edit: function edit(props) {
    // Lift info from props and populate various constants.
    var setAttributes = props.setAttributes,
        attributes = props.attributes,
        className = props.className;
    var overlayColor = attributes.overlayColor,
        backgroundImage = attributes.backgroundImage,
        panelTitle = attributes.panelTitle,
        panelLink = attributes.panelLink; // Grab newPanelLink, set the value of panelLink to newPanelLink.

    var onChangePanelLink = function onChangePanelLink(newPanelLink) {
      setAttributes({
        panelLink: newPanelLink
      });
    };

    function onOverlayColorChange(changes) {
      setAttributes({
        overlayColor: changes
      });
    }

    function onImageSelect(imageObject) {
      setAttributes({
        backgroundImage: imageObject.sizes.full.url
      });
    } // Grab newPanelTitle, set the value of panelTitle to newPanelTitle.


    var onChangePanelTitle = function onChangePanelTitle(newPanelTitle) {
      setAttributes({
        panelTitle: newPanelTitle
      });
    };

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, "Add a link for this panel"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(URLInputButton, {
      className: "nhsblocks-dropdown__input",
      label: __("Dashboard Link", "nhsblocks"),
      onChange: onChangePanelLink,
      url: panelLink
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, "Select a background image:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      onSelect: onImageSelect,
      type: "image",
      value: backgroundImage,
      render: function render(_ref3) {
        var open = _ref3.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
          className: "button button-primary button-hero",
          onClick: open
        }, "Upload Image!");
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, "OR"), " Select a background color: ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", null, "(this will be ignored if you choose an image above)"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorPalette, {
      value: overlayColor,
      onChange: onOverlayColorChange
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "".concat(className, " nhsuk-panel-group__item")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "nhsuk-panel-with-label",
      style: {
        backgroundColor: overlayColor,
        backgroundImage: "url(".concat(backgroundImage, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", {
      class: "nhsuk-panel-with-label__label"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
      placeholder: __("Panel Title", "nhsblocks"),
      value: panelTitle,
      onChange: onChangePanelTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: "/wp-content/plugins/nhsblocks/assets/pixel_trans.png",
      class: "nhsuk-dashboard__image",
      alt: ""
    })))];
  },
  save: function save(props) {
    // console.info(props);
    var _props$attributes = props.attributes,
        overlayColor = _props$attributes.overlayColor,
        backgroundImage = _props$attributes.backgroundImage,
        panelTitle = _props$attributes.panelTitle,
        panelLink = _props$attributes.panelLink;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nhsuk-panel-group__item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: panelLink,
      className: "nhsuk-promo__link-wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "nhsuk-panel-with-label",
      style: {
        backgroundImage: "url(".concat(backgroundImage, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: overlayColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", {
      class: "nhsuk-panel-with-label__label"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      value: panelTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: "/wp-content/plugins/nhsblocks/assets/pixel_trans.png",
      class: "nhsuk-dashboard__image",
      alt: panelTitle
    }))));
  },
  deprecated: [{
    save: function save(props) {
      var _props$attributes2 = props.attributes,
          overlayColor = _props$attributes2.overlayColor,
          backgroundImage = _props$attributes2.backgroundImage,
          panelTitle = _props$attributes2.panelTitle,
          panelLink = _props$attributes2.panelLink;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "nhsuk-panel-group__item"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
        href: panelLink,
        className: "nhsuk-promo__link-wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "nhsuk-panel-with-label",
        style: {
          backgroundImage: "url(".concat(backgroundImage, ")"),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: overlayColor
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", {
        class: "nhsuk-panel-with-label__label"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
        value: panelTitle
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        src: "/wp-content/themes/nightingale-2-0/assets/pixel_trans.png",
        class: "nhsuk-dashboard__image",
        alt: ""
      }))));
    }
  }]
});

/***/ }),

/***/ "./src/00-dashboard/templates.js":
/*!***************************************!*\
  !*** ./src/00-dashboard/templates.js ***!
  \***************************************/
/*! exports provided: GRID_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_OPTIONS", function() { return GRID_OPTIONS; });
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons.js */ "./src/icons.js");
/**
 *  NHS Dashboard Template definement
 *  @author Tony Blacker, NHS Leadership Academy
 *  @version 1.0 6th February 2020
 */
var __ = wp.i18n.__;

var GRID_OPTIONS = [{
  name: 'fullwidth',
  label: __('Full Width', 'nhsblocks'),
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_0__["onecolsIcon"],
  innerBlocks: [['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-full'
  }]]
}, {
  name: 'twocols',
  label: __('Two Columns', 'nhsblocks'),
  isDefault: true,
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_0__["twocolsIcon"],
  innerBlocks: [['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-half'
  }], ['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-half'
  }]]
}, {
  name: 'threecols',
  label: __('Three Columns', 'nhsblocks'),
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_0__["threecolsIcon"],
  innerBlocks: [['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-third'
  }], ['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-third'
  }], ['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-third'
  }]]
}, {
  name: 'twothreecols',
  label: __('Two Columns Then Three Columns', 'nhsblocks'),
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_0__["twothreecolstworowsIcon"],
  innerBlocks: [['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-half'
  }], ['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-half'
  }], ['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-third'
  }], ['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-third'
  }], ['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-third'
  }]]
}, {
  name: 'threetwocols',
  label: __('Three Columns then Two Columns', 'nhsblocks'),
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_0__["threetwocolstworowsIcon"],
  innerBlocks: [['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-third'
  }], ['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-third'
  }], ['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-third'
  }], ['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-half'
  }], ['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-half'
  }]]
}, {
  name: 'threethreecols',
  label: __('Three Columns on Two Rows', 'nhsblocks'),
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_0__["threecolstworowsIcon"],
  innerBlocks: [['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-third'
  }], ['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-third'
  }], ['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-third'
  }], ['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-third'
  }], ['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-third'
  }], ['nhsblocks/dashpanel', {
    className: 'nhsuk-grid-column-one-third'
  }]]
}];

/***/ }),

/***/ "./src/01-dodont/index.js":
/*!********************************!*\
  !*** ./src/01-dodont/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Do / Dont listing
 *  @reference: https://nhsuk.github.io/nhsuk-frontend/components/do-dont-list/index.html
 *  @author Tony Blacker, NHS Leadership Academy
 *  @version 1.0 22nd July 2019
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
registerBlockType("nhsblocks/dodont", {
  title: __("Do and Don't List", "nhsblocks"),
  category: "nhsblocks",
  icon: "yes-alt",
  attributes: {
    panelTitle: {
      type: "string",
      source: "html",
      selector: "h3"
    }
  },
  edit: function edit(props) {
    // Lift info from props and populate various constants.
    var panelTitle = props.attributes.panelTitle,
        className = props.className,
        setAttributes = props.setAttributes; // Grab newPanelTitle, set the value of panelTitle to newPanelTitle.

    var onChangePanelTitle = function onChangePanelTitle(newPanelTitle) {
      setAttributes({
        panelTitle: newPanelTitle
      });
    };

    var ALLOWED_BLOCKS = [];
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-do-dont-list"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "nhsuk-do-dont-list__label"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Panel Title", "nhsblocks"),
      value: panelTitle,
      onChange: onChangePanelTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
      className: "nhsuk-list nhsuk-list--cross"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS
    })));
  },
  save: function save(props) {
    // console.info(props);
    var _props$attributes = props.attributes,
        panelTitle = _props$attributes.panelTitle,
        panelText = _props$attributes.panelText;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-do-dont-list"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "nhsuk-do-dont-list__label"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: panelTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
      className: "nhsuk-list nhsuk-list--cross"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null)));
  }
});
registerBlockType("nhsblocks/doitem", {
  title: __("List Item with Tick", "nhsblocks"),
  category: "nhsblocks",
  icon: "yes",
  parent: ["nhsblocks/dodont"],
  attributes: {
    panelText: {
      type: "string",
      source: "html",
      selector: "span"
    }
  },
  edit: function edit(props) {
    // Lift info from props and populate various constants.
    var panelText = props.attributes.panelText,
        setAttributes = props.setAttributes; // Grab newPanelText, set the value of panelText to newPanelText.

    var onChangePanelText = function onChangePanelText(newPanelText) {
      setAttributes({
        panelText: newPanelText
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      class: "nhsuk-icon nhsuk-icon__tick",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      "stroke-width": "4",
      "stroke-linecap": "round",
      d: "M18.4 7.8l-8.5 8.4L5.6 12"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Text", "nhsblocks"),
      value: panelText,
      onChange: onChangePanelText
    })));
  },
  save: function save(props) {
    // console.info(props);
    var panelText = props.attributes.panelText;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      class: "nhsuk-icon nhsuk-icon__tick",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      "stroke-width": "4",
      "stroke-linecap": "round",
      d: "M18.4 7.8l-8.5 8.4L5.6 12"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: panelText
    })));
  }
});
registerBlockType("nhsblocks/dontitem", {
  title: __("List Item with Cross", "nhsblocks"),
  category: "nhsblocks",
  icon: "no-alt",
  parent: ["nhsblocks/dodont"],
  attributes: {
    panelText: {
      type: "string",
      source: "html",
      selector: "span"
    }
  },
  edit: function edit(props) {
    // Lift info from props and populate various constants.
    var panelText = props.attributes.panelText,
        setAttributes = props.setAttributes; // Grab newPanelText, set the value of panelText to newPanelText.

    var onChangePanelText = function onChangePanelText(newPanelText) {
      setAttributes({
        panelText: newPanelText
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      class: "nhsuk-icon nhsuk-icon__cross",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Text", "nhsblocks"),
      value: panelText,
      onChange: onChangePanelText
    })));
  },
  save: function save(props) {
    // console.info(props);
    var panelText = props.attributes.panelText;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      class: "nhsuk-icon nhsuk-icon__cross",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: panelText
    })));
  }
});

/***/ }),

/***/ "./src/02-button/index.js":
/*!********************************!*\
  !*** ./src/02-button/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * NHS Styled Buttons
 *  @reference: https://nhsuk.github.io/nhsuk-frontend/components/button/index.html
 *  @author Tony Blacker, NHS Leadership Academy
 *  @version 1.0 22nd July 2019
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    BlockVerticalAlignmentToolbar = _wp$blockEditor.BlockVerticalAlignmentToolbar,
    URLInputButton = _wp$blockEditor.URLInputButton; //@todo align
//@todo extended classes

registerBlockType("nhsblocks/nhsbutton", {
  title: __("Button", "nhsblocks"),
  category: "nhsblocks",
  icon: "admin-links",
  styles: [{
    name: "green",
    label: __("Standard (Green)"),
    isDefault: true
  }, {
    name: "secondary",
    label: __("Secondary (Grey)")
  }, {
    name: "reverse",
    label: __("Reverse (White)")
  }],
  supports: {
    align: true
  },
  attributes: {
    buttonLabel: {
      type: "string",
      source: "html",
      selector: ".nhsuk-button"
    },
    buttonLink: {
      type: "string",
      source: "attribute",
      selector: "a.nhsuk-button",
      attribute: "href"
    },
    verticalAlignment: {
      type: 'string'
    }
  },
  // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
  edit: function edit(props) {
    // Props parameter holds all the info.
    //console.info(props);
    // Lift info from props and populate various constants.
    var _props$attributes = props.attributes,
        buttonLabel = _props$attributes.buttonLabel,
        buttonLink = _props$attributes.buttonLink,
        verticalAlignment = _props$attributes.verticalAlignment,
        className = props.className,
        setAttributes = props.setAttributes; // Grab newButtonLabel, set the value of buttonLabel to newButtonLabel.

    var onChangeButtonLabel = function onChangeButtonLabel(newButtonLabel) {
      setAttributes({
        buttonLabel: newButtonLabel
      });
    }; // Grab newButtonLink, set the value of buttonLink to newButtonLink.


    var onChangeButtonLink = function onChangeButtonLink(newButtonLink) {
      setAttributes({
        buttonLink: newButtonLink
      });
    }; // Change handler to set Block `attributes`


    var onChangeAlignment = function onChangeAlignment(alignment) {
      setAttributes({
        verticalAlignment: alignment
      });
    };

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Add a link for this button"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
      className: "nhsblocks-dropdown__input",
      label: __("Button URL", "nhsblocks"),
      onChange: onChangeButtonLink,
      url: buttonLink
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockVerticalAlignmentToolbar, {
      onChange: onChangeAlignment,
      value: verticalAlignment
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, " nhsuk-button")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      value: buttonLabel,
      onChange: onChangeButtonLabel,
      placeholder: "Button label"
    }))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        buttonLabel = _props$attributes2.buttonLabel,
        buttonLink = _props$attributes2.buttonLink; // console.info(props);

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: buttonLink,
      className: "nhsuk-button"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: buttonLabel
    }));
  }
});

/***/ }),

/***/ "./src/03-reveal/index.js":
/*!********************************!*\
  !*** ./src/03-reveal/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 *  Reveal / Expander Element
 *  @reference: https://nhsuk.github.io/nhsuk-frontend/components/details/expander.html
 *  @author Tony Blacker, NHS Leadership Academy
 *  @version 1.0 22nd July 2019
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.blockEditor.RichText; //@todo add in Expander class option
//console.info(wp.components);

registerBlockType("nhsblocks/reveal1", {
  title: __("Simple Reveal", "nhsblocks"),
  category: "nhsblocks",
  icon: "plus-alt",
  styles: [{
    name: "downarrow",
    label: __("Down Arrow"),
    isDefault: true
  }, {
    name: "expander",
    label: __("Plus Icon")
  }],
  attributes: {
    revealTitle: {
      type: "string",
      source: "html",
      selector: ".nhsuk-details__summary-text"
    },
    revealText: {
      type: "string",
      source: "html",
      selector: ".nhsuk-details__text"
    },
    expanderBox: {
      type: "string"
    }
  },
  edit: function edit(props) {
    // Lift info from props and populate various constants.
    var _props$attributes = props.attributes,
        revealTitle = _props$attributes.revealTitle,
        revealText = _props$attributes.revealText,
        className = props.className,
        setAttributes = props.setAttributes; // Grab newRevealTitle, set the value of revealTitle to newRevealTitle.

    var onChangeRevealTitle = function onChangeRevealTitle(newRevealTitle) {
      setAttributes({
        revealTitle: newRevealTitle
      });
    }; // Grab revealText, set the value of revealText to newRevealtext


    var onChangeRevealText = function onChangeRevealText(newRevealText) {
      setAttributes({
        revealText: newRevealText
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("details", {
      className: "".concat(className, " nhsuk-details newstyle"),
      open: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("summary", {
      className: "nhsuk-details__summary",
      role: "button",
      "aria-controls": "details-content-",
      "aria-expanded": "true"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "nhsuk-details__summary-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Reveal Title", "nhsblocks"),
      value: revealTitle,
      onChange: onChangeRevealTitle
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-details__text",
      id: "details-content-",
      "aria-hidden": "false"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      multiline: "p",
      placeholder: __("Reveal Contents", "nhsblocks"),
      onChange: onChangeRevealText,
      value: revealText
    })));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        revealTitle = _props$attributes2.revealTitle,
        revealText = _props$attributes2.revealText;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("details", {
      className: "nhsuk-details"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("summary", {
      className: "nhsuk-details__summary",
      role: "button",
      "aria-controls": "details-content-",
      "aria-expanded": "false"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "nhsuk-details__summary-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: revealTitle
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-details__text",
      id: "details-content-",
      "aria-hidden": "false"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      multiline: "p",
      value: revealText
    })));
  }
});

/***/ }),

/***/ "./src/04-panel/index.js":
/*!*******************************!*\
  !*** ./src/04-panel/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 *  NHS Panel Element
 *  @reference: https://nhsuk.github.io/nhsuk-frontend/components/panel/index.html
 *  @author Tony Blacker, NHS Leadership Academy
 *  @version 1.0 22nd July 2019
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InnerBlocks = _wp$blockEditor.InnerBlocks; //@todo add in Panel class variations
//@todo add in width variations

var TEMPLATE_OPTIONS = [['core/paragraph', {
  placeholder: 'Panel Text'
}], ['nhsblocks/nhsbutton', {
  align: 'right'
}]];
registerBlockType("nhsblocks/panel1", {
  title: __("Panel Region", "nhsblocks"),
  description: __("By default this block includes a title, block of text and button link. You can remove the button" + " if you wish by clicking it then clicking three dots on the navigation bar at the top of the page then the" + " bin", "nhsblocks"),
  icon: "feedback",
  category: "nhsblocks",
  styles: [{
    name: "default",
    label: __("Plain white panel"),
    isDefault: true
  }, {
    name: "panel-grey",
    label: __("Grey")
  }, {
    name: "panel-with-label",
    label: __("With Label")
  }],
  attributes: {
    panelTitle: {
      type: "string",
      source: "html",
      selector: "h3"
    }
  },
  edit: function edit(props) {
    // Lift info from props and populate various constants.
    var panelTitle = props.attributes.panelTitle,
        className = props.className,
        setAttributes = props.setAttributes; // Grab newPanelTitle, set the value of panelTitle to newPanelTitle.

    var onChangePanelTitle = function onChangePanelTitle(newPanelTitle) {
      setAttributes({
        panelTitle: newPanelTitle
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, " nhsuk-panel")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Panel Title", "nhsblocks"),
      value: panelTitle,
      onChange: onChangePanelTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "paneltext"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      template: TEMPLATE_OPTIONS
    })));
  },
  save: function save(props) {
    // console.info(props);
    var panelTitle = props.attributes.panelTitle;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-panel"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: panelTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "paneltext"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./src/06-promo/index.js":
/*!*******************************!*\
  !*** ./src/06-promo/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 *  NHS Promo / Call out  Element
 *  @reference: https://nhsuk.github.io/nhsuk-frontend/components/promo/index.html
 *  @author Tony Blacker, NHS Leadership Academy
 *  @version 1.0 22nd July 2019
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    URLInputButton = _wp$blockEditor.URLInputButton,
    RichText = _wp$blockEditor.RichText,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InspectorControls = _wp$blockEditor.InspectorControls; //@todo add in Promo class variations
//@todo add in width variations

registerBlockType("nhsblocks/promo1", {
  title: __("Promo Region", "nhsblocks"),
  category: "nhsblocks",
  icon: "megaphone",
  styles: [{
    name: "default",
    label: __("Standard"),
    isDefault: true
  }, {
    name: "promo-small",
    label: __("Smaller Text")
  }],
  attributes: {
    promoTitle: {
      type: "string",
      source: "html",
      selector: ".nhsuk-promo__heading"
    },
    promoText: {
      type: "string",
      source: "html",
      selector: ".nhsuk-promo__description"
    },
    promoLink: {
      type: "string",
      source: "attribute",
      selector: ".nhsuk-promo a",
      attribute: "href"
    }
  },
  edit: function edit(props) {
    // Lift info from props and populate various constants.
    var _props$attributes = props.attributes,
        promoTitle = _props$attributes.promoTitle,
        promoText = _props$attributes.promoText,
        promoLink = _props$attributes.promoLink,
        className = props.className,
        setAttributes = props.setAttributes; // Grab newPromoTitle, set the value of promoTitle to newPromoTitle.

    var onChangePromoTitle = function onChangePromoTitle(newPromoTitle) {
      setAttributes({
        promoTitle: newPromoTitle
      });
    }; // Grab newPromoText, set the value of promoText to newPromoText.


    var onChangePromoText = function onChangePromoText(newPromoText) {
      setAttributes({
        promoText: newPromoText
      });
    }; // Grab newPromoLink, set the value of promoLink to newPromoLink.


    var onChangePromoLink = function onChangePromoLink(newPromoLink) {
      setAttributes({
        promoLink: newPromoLink
      });
    };

    var onChangeColumnWidth = function onChangeColumnWidth(newColumnWidth) {
      setAttributes({
        columnWidth: newColumnWidth
      });
    };

    var onImageSelect = function onImageSelect(imageObject) {
      setAttributes({
        promoImg: imageObject.sizes.podkitFeatImg.url
      });
    };

    var ALLOWED_BLOCKS = ['core/image'];
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, " nhsuk-promo")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "nhsuk-promo__content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
      className: "nhsblocks-dropdown__input",
      label: __("Panel Link", "nhsblocks"),
      onChange: onChangePromoLink,
      url: promoLink
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      class: "nhsuk-promo__heading"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Promo Title", "nhsblocks"),
      value: promoTitle,
      onChange: onChangePromoTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-promo__description"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      multiline: "p",
      placeholder: __("Promo Contents", "nhsblocks"),
      onChange: onChangePromoText,
      value: promoText
    }))));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        promoTitle = _props$attributes2.promoTitle,
        promoText = _props$attributes2.promoText,
        promoLink = _props$attributes2.promoLink;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-promo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: promoLink,
      className: "nhsuk-promo__link-wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "nhsuk-promo__content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      class: "nhsuk-promo__heading"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: promoTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-promo__description"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      multiline: "p",
      value: promoText
    })))));
  }
});

/***/ }),

/***/ "./src/07-testimonial/index.js":
/*!*************************************!*\
  !*** ./src/07-testimonial/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 *  NHS Testimonial / Quote Element
 *  @reference: https://nhsuk.github.io/nhsuk-frontend/components/inset-text/index.html
 *  @author Tony Blacker, NHS Leadership Academy
 *  @version 1.0 22nd July 2019
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.blockEditor.RichText; //@todo add in Expander class option
//console.info(wp.components);

registerBlockType("nhsblocks/quote1", {
  title: __("Simple Quote", "nhsblocks"),
  category: "nhsblocks",
  icon: "format-quote",
  styles: [{
    name: "standard",
    label: __("Standard"),
    isDefault: true
  }, {
    name: "quote-reverse",
    label: __("Inverse")
  }],
  attributes: {
    quoteName: {
      type: "string",
      source: "html",
      selector: ".nhsuk-inset-text__quote-attribution"
    },
    quoteText: {
      type: "array",
      source: "children",
      multiline: "p",
      selector: ".nhsuk-inset-text__quote"
    }
  },
  edit: function edit(props) {
    // Lift info from props and populate various constants.
    var _props$attributes = props.attributes,
        quoteName = _props$attributes.quoteName,
        quoteText = _props$attributes.quoteText,
        className = props.className,
        setAttributes = props.setAttributes; // Grab newQuoteName, set the value of quoteName to newQuoteName.

    var onChangeQuoteName = function onChangeQuoteName(newQuoteName) {
      setAttributes({
        quoteName: newQuoteName
      });
    }; // Grab quoteText, set the value of quoteText to newQuotetext


    var onChangeQuoteText = function onChangeQuoteText(newQuoteText) {
      setAttributes({
        quoteText: newQuoteText
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, " nhsuk-inset-text")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "nhsuk-u-visually-hidden"
    }, "Quote / Testimonial: "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-inset-text__quote"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      multiline: "p",
      placeholder: __("Quote", "nhsblocks"),
      onChange: onChangeQuoteText,
      value: quoteText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "nhsuk-inset-text__quote-attribution"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Quote Name", "nhsblocks"),
      value: quoteName,
      onChange: onChangeQuoteName
    })));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        quoteName = _props$attributes2.quoteName,
        quoteText = _props$attributes2.quoteText;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-inset-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "nhsuk-u-visually-hidden"
    }, "Quote / Testimonial: "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-inset-text__quote"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      multiline: "p",
      value: quoteText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "nhsuk-inset-text__quote-attribution"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: quoteName
    })));
  }
});

/***/ }),

/***/ "./src/08-card/index.js":
/*!******************************!*\
  !*** ./src/08-card/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 *  NHS Care Card Element
 *  @reference: https://nhsuk.github.io/nhsuk-frontend/components/care-card/care-card-non-urgent.html
 *  @author Tony Blacker, NHS Leadership Academy
 *  @version 1.0 22nd July 2019
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.blockEditor.RichText; //@todo add in Card class variations
//@todo add in width variations

registerBlockType("nhsblocks/card1", {
  title: __("Card Region", "nhsblocks"),
  category: "nhsblocks",
  icon: "category",
  attributes: {
    cardTitle: {
      type: "string",
      source: "html",
      selector: ".nhsuk-care-card__heading-text"
    },
    cardText: {
      type: "array",
      source: "children",
      multiline: "p",
      selector: ".nhsuk-care-card__content"
    }
  },
  edit: function edit(props) {
    // Lift info from props and populate various constants.
    var _props$attributes = props.attributes,
        cardTitle = _props$attributes.cardTitle,
        cardText = _props$attributes.cardText,
        className = props.className,
        setAttributes = props.setAttributes; // Grab newCardTitle, set the value of cardTitle to newCardTitle.

    var onChangeCardTitle = function onChangeCardTitle(newCardTitle) {
      setAttributes({
        cardTitle: newCardTitle
      });
    }; // Grab newCardText, set the value of cardText to newCardText.


    var onChangeCardText = function onChangeCardText(newCardText) {
      setAttributes({
        cardText: newCardText
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, " nhsuk-care-card")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-care-card__heading-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "nhsuk-care-card__heading"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      role: "text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "nhsuk-u-visually-hidden"
    }, "Non-urgent advice: "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "nhsuk-care-card__heading-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Card Title", "nhsblocks"),
      value: cardTitle,
      onChange: onChangeCardTitle
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "nhsuk-care-card__arrow",
      "aria-hidden": "true"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-care-card__content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      multiline: "p",
      placeholder: __("Card Contents", "nhsblocks"),
      onChange: onChangeCardText,
      value: cardText
    })));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        cardTitle = _props$attributes2.cardTitle,
        cardText = _props$attributes2.cardText;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-grid-column-width nhsuk-care-card nhsuk-care-card--type"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-care-card__heading-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "nhsuk-care-card__heading"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      role: "text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "nhsuk-u-visually-hidden"
    }, "Non-urgent advice: "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "nhsuk-care-card__heading-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: cardTitle
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "nhsuk-care-card__arrow",
      "aria-hidden": "true"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-care-card__content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      multiline: "p",
      value: cardText
    })));
  }
}); // card variations

wp.blocks.registerBlockStyle('nhsblocks/card1', {
  name: 'default',
  label: 'Standard Blue',
  isDefault: true
});
wp.blocks.registerBlockStyle('nhsblocks/card1', {
  name: 'urgent',
  label: 'Urgent (Red)'
});
wp.blocks.registerBlockStyle('nhsblocks/card1', {
  name: 'immediate',
  label: 'Immediate (Red and Black)'
});

/***/ }),

/***/ "./src/09-row-group/index.js":
/*!***********************************!*\
  !*** ./src/09-row-group/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates.js */ "./src/09-row-group/templates.js");



/**
 *  NHS Panel Group Element
 *  @reference: https://nhsuk.github.io/nhsuk-frontend/components/panel/index.html
 *  @author Tony Blacker, NHS Leadership Academy
 *  @version 1.0 22nd July 2019
 */
var _wp$element = wp.element,
    useState = _wp$element.useState,
    setState = _wp$element.setState;
var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    createBlock = _wp$blocks.createBlock;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    BlockControls = _wp$blockEditor.BlockControls,
    __experimentalBlockVariationPicker = _wp$blockEditor.__experimentalBlockVariationPicker;
var _wp$data = wp.data,
    useDispatch = _wp$data.useDispatch,
    useSelect = _wp$data.useSelect;
 //@todo add in Panel class variations
//@todo add in width variations


registerBlockType("nhsblocks/rowgroup", {
  title: __("Grouped Items", "nhsblocks"),
  category: "nhsblocks",
  icon: 'layout',
  attributes: {
    template: {
      type: "array"
    }
  },
  edit: function edit(props) {
    var clientId = props.clientId,
        name = props.name;
    var template = props.attributes.template,
        setAttributes = props.setAttributes;

    var _useDispatch = useDispatch('core/block-editor'),
        replaceInnerBlocks = _useDispatch.replaceInnerBlocks;

    var _useSelect = useSelect(function (select) {
      var _select = select('core/blocks'),
          __experimentalGetBlockVariations = _select.__experimentalGetBlockVariations,
          getBlockType = _select.getBlockType,
          __experimentalGetDefaultBlockVariation = _select.__experimentalGetDefaultBlockVariation;

      return {
        blockType: getBlockType(name),
        defaultVariation: __experimentalGetDefaultBlockVariation(name, 'block'),
        hasInnerBlocks: select('core/block-editor').getBlocks(clientId).length > 0,
        variations: __experimentalGetBlockVariations(name, 'block')
      };
    }, [clientId, name]),
        blockType = _useSelect.blockType,
        defaultVariation = _useSelect.defaultVariation,
        hasInnerBlocks = _useSelect.hasInnerBlocks,
        variations = _useSelect.variations;

    var onChangeLayout = function onChangeLayout(nextVariation, registry) {
      if (nextVariation.attributes) {
        props.setAttributes(nextVariation.attributes);
      }

      if (nextVariation.innerBlocks) {
        replaceInnerBlocks(props.clientId, createBlocksFromInnerBlocksTemplate(nextVariation.innerBlocks));
      }
    };

    var createBlocksFromInnerBlocksTemplate = function createBlocksFromInnerBlocksTemplate(innerBlocksTemplate) {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(innerBlocksTemplate, function (_ref) {
        var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 3),
            name = _ref2[0],
            attributes = _ref2[1],
            _ref2$ = _ref2[2],
            innerBlocks = _ref2$ === void 0 ? [] : _ref2$;

        return createBlock(name, attributes, createBlocksFromInnerBlocksTemplate(innerBlocks));
      });
    };

    if (hasInnerBlocks) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "nhsuk-grid-row"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "nhsuk-panel-group nhsuk-grid-column-full"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
        template: _templates_js__WEBPACK_IMPORTED_MODULE_3__["GRID_OPTIONS"]
      })));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nhsuk-grid-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nhsuk-panel-group nhsuk-grid-column-full"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(__experimentalBlockVariationPicker, {
      variations: _templates_js__WEBPACK_IMPORTED_MODULE_3__["GRID_OPTIONS"],
      onSelect: function onSelect(nextVariation) {
        if (nextVariation.attributes) {
          props.setAttributes(nextVariation.attributes);
        }

        if (nextVariation.innerBlocks) {
          replaceInnerBlocks(props.clientId, createBlocksFromInnerBlocksTemplate(nextVariation.innerBlocks));
        }
      }
    })));
  },
  save: function save(props) {
    var template = props.attributes.template;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nhsuk-grid-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nhsuk-panel-group nhsuk-grid-column-full"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null)));
  }
});
registerBlockType("nhsblocks/onehalf", {
  title: __("One Half Width", "nhsblocks"),
  category: "nhsblocks",
  parent: ["nhsblocks/rowgroup"],
  attributes: {
    template: {
      type: "array"
    }
  },
  edit: function edit(props) {
    var template = props.attributes.template,
        setAttributes = props.setAttributes;

    var onChangetemplate = function onChangetemplate(newTemplate) {
      setAttributes({
        template: newTemplate
      });
    };

    var showTemplateSelector = template === null || !template;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nhsuk-grid-column-one-half"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      template: showTemplateSelector ? null : template
    }));
  },
  save: function save(props) {
    var template = props.attributes.template;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nhsuk-grid-column-one-half"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
  }
});
registerBlockType("nhsblocks/onethird", {
  title: __("One Third Width", "nhsblocks"),
  category: "nhsblocks",
  parent: ["nhsblocks/rowgroup"],
  attributes: {
    template: {
      type: "array"
    }
  },
  edit: function edit(props) {
    var template = props.attributes.template,
        setAttributes = props.setAttributes;

    var onChangetemplate = function onChangetemplate(newTemplate) {
      setAttributes({
        template: newTemplate
      });
    };

    var showTemplateSelector = template === null || !template;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nhsuk-grid-column-one-third"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      template: showTemplateSelector ? null : template
    }));
  },
  save: function save(props) {
    var template = props.attributes.template;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nhsuk-grid-column-one-third"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
  }
});
registerBlockType("nhsblocks/onequarter", {
  title: __("One Quarter Width", "nhsblocks"),
  category: "nhsblocks",
  parent: ["nhsblocks/rowgroup"],
  attributes: {
    template: {
      type: "array"
    }
  },
  edit: function edit(props) {
    var template = props.attributes.template,
        setAttributes = props.setAttributes;

    var onChangetemplate = function onChangetemplate(newTemplate) {
      setAttributes({
        template: newTemplate
      });
    };

    var showTemplateSelector = template === null || !template;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nhsuk-grid-column-one-quarter"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      template: showTemplateSelector ? null : template
    }));
  },
  save: function save(props) {
    var template = props.attributes.template;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nhsuk-grid-column-one-quarter"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
  }
});
registerBlockType("nhsblocks/twothirds", {
  title: __("Two Thirds Width", "nhsblocks"),
  category: "nhsblocks",
  parent: ["nhsblocks/rowgroup"],
  attributes: {
    template: {
      type: "array"
    }
  },
  edit: function edit(props) {
    var template = props.attributes.template,
        setAttributes = props.setAttributes;

    var onChangetemplate = function onChangetemplate(newTemplate) {
      setAttributes({
        template: newTemplate
      });
    };

    var showTemplateSelector = template === null || !template;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nhsuk-grid-column-two-thirds"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      template: showTemplateSelector ? null : template
    }));
  },
  save: function save(props) {
    var template = props.attributes.template;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nhsuk-grid-column-two-thirds"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
  }
});
registerBlockType("nhsblocks/threequarters", {
  title: __("Three Quarter Width", "nhsblocks"),
  category: "nhsblocks",
  parent: ["nhsblocks/rowgroup"],
  attributes: {
    template: {
      type: "array"
    }
  },
  edit: function edit(props) {
    var template = props.attributes.template,
        setAttributes = props.setAttributes;

    var onChangetemplate = function onChangetemplate(newTemplate) {
      setAttributes({
        template: newTemplate
      });
    };

    var showTemplateSelector = template === null || !template;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nhsuk-grid-column-three-quarters"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      template: showTemplateSelector ? null : template
    }));
  },
  save: function save(props) {
    var template = props.attributes.template;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nhsuk-grid-column-three-quarters"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/09-row-group/templates.js":
/*!***************************************!*\
  !*** ./src/09-row-group/templates.js ***!
  \***************************************/
/*! exports provided: GRID_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_OPTIONS", function() { return GRID_OPTIONS; });
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons.js */ "./src/icons.js");
/**
 *  NHS Group Template definement
 *  @author Tony Blacker, NHS Leadership Academy
 *  @version 1.0 6th February 2020
 */
var __ = wp.i18n.__;

var GRID_OPTIONS = [{
  name: 'twocols',
  label: ('Two Columns', 'nhsblocks'),
  isDefault: true,
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_0__["twocolsIcon"],
  innerBlocks: [['nhsblocks/onehalf'], ['nhsblocks/onehalf']]
}, {
  name: 'threecols',
  label: __('Three Columns', 'nhsblocks'),
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_0__["threecolsIcon"],
  innerBlocks: [['nhsblocks/onethird'], ['nhsblocks/onethird'], ['nhsblocks/onethird']]
}, {
  name: 'one3two3',
  label: __('One Third / Two Thirds Columns', 'nhsblocks'),
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_0__["twoleftthirdIcon"],
  innerBlocks: [['nhsblocks/onethird'], ['nhsblocks/twothirds']]
}, {
  name: 'two3one3',
  label: __('Two Thirds / One Third Columns', 'nhsblocks'),
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_0__["tworightthirdIcon"],
  innerBlocks: [['nhsblocks/twothirds'], ['nhsblocks/onethird']]
}, {
  name: 'one4one2one4',
  label: __('One Quarter / One Half / One Quarter Columns', 'nhsblocks'),
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_0__["fourtwofourIcon"],
  innerBlocks: [['nhsblocks/onequarter'], ['nhsblocks/onehalf'], ['nhsblocks/onequarter']]
}, {
  name: 'one4one4one2',
  label: __('One Quarter / One Quarter / One Half Columns', 'nhsblocks'),
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_0__["fourfourtwoIcon"],
  innerBlocks: [['nhsblocks/onequarter'], ['nhsblocks/onequarter'], ['nhsblocks/onehalf']]
}, {
  name: 'one2one4one4',
  label: __('One Half / One Quarter / One Quarter Columns', 'nhsblocks'),
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_0__["twofourfourIcon"],
  innerBlocks: [['nhsblocks/onehalf'], ['nhsblocks/onequarter'], ['nhsblocks/onequarter']]
}];

/***/ }),

/***/ "./src/10-hero-block/index.js":
/*!************************************!*\
  !*** ./src/10-hero-block/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 *  NHS Hero  Element
 *  @reference: https://nhsuk.github.io/nhsuk-frontend/components/promo/index.html
 *  @author Tony Blacker, NHS Leadership Academy
 *  @version 1.0 22nd July 2019
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    ColorPalette = _wp$blockEditor.ColorPalette,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
registerBlockType("nhsblocks/heroblock", {
  title: __("Hero Block", "nhsblocks"),
  description: __("Full width zone, designed to go at the top of your page with an optional image background," + " texta area and call to action", "nhsblocks"),
  category: "nhsblocks",
  icon: "schedule",
  attributes: {
    overlayColor: {
      type: 'string',
      default: '#005eb8'
    },
    backgroundImage: {
      type: 'string',
      default: '/wp-content/plugins/nhsblocks/assets/pixel_trans.png'
    }
  },
  edit: function edit(props) {
    var TEMPLATE_OPTIONS = [['nhsblocks/heroinner', {}]];
    var setAttributes = props.setAttributes,
        attributes = props.attributes,
        className = props.className;
    var overlayColor = attributes.overlayColor,
        backgroundImage = attributes.backgroundImage;

    function onOverlayColorChange(changes) {
      setAttributes({
        overlayColor: changes
      });
    }

    function onImageSelect(imageObject) {
      setAttributes({
        backgroundImage: imageObject.sizes.full.url
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Select a background image:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onImageSelect,
      type: "image",
      value: backgroundImage,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
          className: "button button-primary button-hero",
          onClick: open
        }, "Upload Image!");
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "OR"), " Select a background color: ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", null, "(this will be ignored if you chose an image above)"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: overlayColor,
      onChange: onOverlayColorChange
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "".concat(className, "  nhsuk-hero nhsuk-hero--image nhsuk-hero--image-description"),
      style: {
        backgroundColor: overlayColor,
        backgroundImage: "url(".concat(backgroundImage, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-hero__overlay"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-width-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-grid-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-grid-column-two-thirds"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      template: TEMPLATE_OPTIONS
    }))))))];
  },
  save: function save(props) {
    var attributes = props.attributes,
        className = props.className;
    var overlayColor = attributes.overlayColor,
        backgroundImage = attributes.backgroundImage;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "nhsuk-hero nhsuk-hero--image nhsuk-hero--image-description",
      style: {
        backgroundImage: "url(".concat(backgroundImage, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: overlayColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-hero__overlay"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-width-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-grid-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-grid-column-two-thirds"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null))))));
  }
});
registerBlockType("nhsblocks/heroinner", {
  title: __("Hero Block Inner Text", "nhsblocks"),
  description: __("Add some text to the header", "nhsblocks"),
  category: "nhsblocks",
  parent: ["nhsblocks/heroblock"],
  icon: "nametag",
  attributes: {
    texttitle: {
      type: 'array',
      source: 'children',
      selector: 'h1'
    },
    texttext: {
      type: 'array',
      source: 'children',
      selector: 'p'
    },
    fontColor: {
      type: 'string',
      default: '#ffffff'
    }
  },
  edit: function edit(props) {
    var setAttributes = props.setAttributes,
        attributes = props.attributes,
        className = props.className;
    var fontColor = attributes.fontColor;

    function onTitleChange(changes) {
      setAttributes({
        texttitle: changes
      });
    }

    function onTextChange(changes) {
      setAttributes({
        texttext: changes
      });
    }

    function onTextColorChange(changes) {
      setAttributes({
        fontColor: changes
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Select a font color:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: fontColor,
      onChange: onTextColorChange
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-hero-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "h1",
      className: "nhsuk-u-margin-bottom-3",
      value: attributes.texttitle,
      onChange: onTitleChange,
      placeholder: "Enter your text here!",
      style: {
        color: fontColor
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "p",
      className: "nhsuk-body-l nhsuk-u-margin-bottom-0",
      value: attributes.texttext,
      onChange: onTextChange,
      placeholder: "Enter your text here!",
      style: {
        color: fontColor
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "nhsuk-hero__arrow",
      "aria-hidden": "true"
    }))];
  },
  save: function save(props) {
    var attributes = props.attributes,
        className = props.className;
    var fontColor = attributes.fontColor;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-hero-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "h1",
      className: "nhsuk-u-margin-bottom-3",
      style: {
        color: fontColor
      },
      value: attributes.texttitle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "p",
      className: "nhsuk-body-l nhsuk-u-margin-bottom-0",
      style: {
        color: fontColor
      },
      value: attributes.texttext
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "nhsuk-hero__arrow",
      "aria-hidden": "true"
    }));
  }
});

/***/ }),

/***/ "./src/16-action-back-link/action-link.js":
/*!************************************************!*\
  !*** ./src/16-action-back-link/action-link.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _arrows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrows */ "./src/16-action-back-link/arrows.js");


/**
 *  Action Link
 *  @reference: https://nhsuk.github.io/nhsuk-frontend/components/action-link/index.html
 *  @author VeryTwisty, NHS Leadership Academy
 *  @version Feb 2020
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var URLInput = wp.editor.URLInput;
var Fragment = wp.element.Fragment;
var TextControl = wp.components.TextControl;

registerBlockType("nhsblocks/actionlink", {
  title: __("Action Link", "nhsblocks"),
  description: "Use action links to help users get to the next stage of a journey quickly by signposting the start of a digital service.",
  category: "nhsblocks",
  icon: _arrows__WEBPACK_IMPORTED_MODULE_1__["default"].action,
  keywords: [__('signpost start', 'nhsblocks'), __('transactional services multi-page forms', 'nhsblocks')],
  attributes: {
    actionText: {
      type: "string",
      source: "html",
      selector: ".nhsuk-action-link__text",
      default: "Action Link Text"
    },
    actionLink: {
      type: "string",
      source: "attribute",
      attribute: "href",
      selector: "a.nhsuk-action-link__link"
    }
  },
  edit: function edit(props) {
    var className = props.className,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected,
        _props$attributes = props.attributes,
        actionText = _props$attributes.actionText,
        actionLink = _props$attributes.actionLink;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-action-link"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "nhsuk-action-link__link"
    }, _arrows__WEBPACK_IMPORTED_MODULE_1__["default"].action, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "nhsuk-action-link__text"
    }, actionText)), isSelected ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: __('Action Link Text', 'nhsblocks'),
      value: actionText,
      onChange: function onChange(actionText) {
        return setAttributes({
          actionText: actionText
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInput, {
      value: actionLink,
      onChange: function onChange(actionLink) {
        return setAttributes({
          actionLink: actionLink
        });
      }
    })) : null);
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        actionText = _props$attributes2.actionText,
        actionLink = _props$attributes2.actionLink;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-action-link"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "nhsuk-action-link__link",
      href: actionLink
    }, _arrows__WEBPACK_IMPORTED_MODULE_1__["default"].action, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "nhsuk-action-link__text"
    }, actionText)));
  }
});

/***/ }),

/***/ "./src/16-action-back-link/arrows.js":
/*!*******************************************!*\
  !*** ./src/16-action-back-link/arrows.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var arrows = {};
arrows.action = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: "nhsuk-icon nhsuk-icon__arrow-right-circle",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M12 2a10 10 0 00-9.95 9h11.64L9.74 7.05a1 1 0 011.41-1.41l5.66 5.65a1 1 0 010 1.42l-5.66 5.65a1 1 0 01-1.41 0 1 1 0 010-1.41L13.69 13H2.05A10 10 0 1012 2z"
}));
arrows.back = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: "nhsuk-icon nhsuk-icon__chevron-left",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (arrows);

/***/ }),

/***/ "./src/16-action-back-link/back-link.js":
/*!**********************************************!*\
  !*** ./src/16-action-back-link/back-link.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _arrows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrows */ "./src/16-action-back-link/arrows.js");


/**
 *  Back Link
 *  @reference: https://nhsuk.github.io/nhsuk-frontend/components/back-link/index.html
 *  @author VeryTwisty, NHS Leadership Academy
 *  @version Feb 2020
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var URLInput = wp.editor.URLInput;
var Fragment = wp.element.Fragment;
var TextControl = wp.components.TextControl;

registerBlockType("nhsblocks/backlink", {
  title: __("Back Link", "nhsblocks"),
  description: "Use back links to help users go back to the previous page in a multi-page transaction.",
  category: "nhsblocks",
  icon: _arrows__WEBPACK_IMPORTED_MODULE_1__["default"].back,
  keywords: [__('Back Link previous question pages', 'nhsblocks'), __('transactional services multi-page forms', 'nhsblocks')],
  attributes: {
    backText: {
      type: "string",
      source: "html",
      selector: ".nhsuk-back-link span",
      default: "Go back"
    }
  },
  edit: function edit(props) {
    var className = props.className,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected,
        backText = props.attributes.backText;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-back-link"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "nhsuk-back-link__link js-back-link"
    }, _arrows__WEBPACK_IMPORTED_MODULE_1__["default"].back, backText), isSelected ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: __('Action Link Text', 'nhsblocks'),
      value: backText,
      onChange: function onChange(backText) {
        return setAttributes({
          backText: backText
        });
      }
    }) : null);
  },
  save: function save(props) {
    var backText = props.attributes.backText;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-back-link"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "nhsuk-back-link__link js-back-link",
      onclick: "window.history.back()",
      href: "#"
    }, _arrows__WEBPACK_IMPORTED_MODULE_1__["default"].back, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, backText)));
  }
});

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/*! exports provided: onecolsIcon, twocolsIcon, threecolsIcon, threetwocolstworowsIcon, threecolstworowsIcon, twothreecolstworowsIcon, twoleftthirdIcon, tworightthirdIcon, twofourfourIcon, fourtwofourIcon, fourfourtwoIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onecolsIcon", function() { return onecolsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twocolsIcon", function() { return twocolsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "threecolsIcon", function() { return threecolsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "threetwocolstworowsIcon", function() { return threetwocolstworowsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "threecolstworowsIcon", function() { return threecolstworowsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twothreecolstworowsIcon", function() { return twothreecolstworowsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twoleftthirdIcon", function() { return twoleftthirdIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tworightthirdIcon", function() { return tworightthirdIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twofourfourIcon", function() { return twofourfourIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fourtwofourIcon", function() { return fourtwofourIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fourfourtwoIcon", function() { return fourfourtwoIcon; });
/**
 *  NHS Layout icon definement
 *  @author Tony Blacker, NHS Leadership Academy
 *  @version 1.0 6th February 2020
 */
var onecolsIcon = wp.element.createElement('svg', {
  width: 60,
  height: 30
}, wp.element.createElement('rect', {
  x: "0.000",
  y: "0.000",
  width: "59.000",
  height: "30"
}));
var twocolsIcon = wp.element.createElement('svg', {
  width: 60,
  height: 30
}, wp.element.createElement('rect', {
  x: "31.000",
  y: "0.000",
  width: "29.000",
  height: "30"
}), wp.element.createElement('rect', {
  x: "0.000",
  y: "0.000",
  width: "29.000",
  height: "30"
}));
var threecolsIcon = wp.element.createElement('svg', {
  width: 60,
  height: 30
}, wp.element.createElement('rect', {
  x: "41.000",
  y: "0.000",
  width: "19.000",
  height: "30"
}), wp.element.createElement('rect', {
  x: "21.000",
  y: "0.000",
  width: "19.000",
  height: "30"
}), wp.element.createElement('rect', {
  x: "0.000",
  y: "0.000",
  width: "19.000",
  height: "30"
}));
var threetwocolstworowsIcon = wp.element.createElement('svg', {
  width: 60,
  height: 40
}, wp.element.createElement('rect', {
  x: "41.000",
  y: "0.000",
  width: "19.000",
  height: "19"
}), wp.element.createElement('rect', {
  x: "21.000",
  y: "0.000",
  width: "19.000",
  height: "19"
}), wp.element.createElement('rect', {
  x: "0.000",
  y: "0.000",
  width: "19.000",
  height: "19"
}), wp.element.createElement('rect', {
  x: "31.000",
  y: "20.000",
  width: "29.000",
  height: "19"
}), wp.element.createElement('rect', {
  x: "0.000",
  y: "20.000",
  width: "29.000",
  height: "19"
}));
var threecolstworowsIcon = wp.element.createElement('svg', {
  width: 60,
  height: 40
}, wp.element.createElement('rect', {
  x: "41.000",
  y: "0.000",
  width: "19.000",
  height: "19"
}), wp.element.createElement('rect', {
  x: "21.000",
  y: "0.000",
  width: "19.000",
  height: "19"
}), wp.element.createElement('rect', {
  x: "0.000",
  y: "0.000",
  width: "19.000",
  height: "19"
}), wp.element.createElement('rect', {
  x: "41.000",
  y: "20.000",
  width: "19.000",
  height: "19"
}), wp.element.createElement('rect', {
  x: "21.000",
  y: "20.000",
  width: "19.000",
  height: "19"
}), wp.element.createElement('rect', {
  x: "0.000",
  y: "20.000",
  width: "19.000",
  height: "19"
}));
var twothreecolstworowsIcon = wp.element.createElement('svg', {
  width: 60,
  height: 40
}, wp.element.createElement('rect', {
  x: "31.000",
  y: "0.000",
  width: "29.000",
  height: "19"
}), wp.element.createElement('rect', {
  x: "0.000",
  y: "0.000",
  width: "29.000",
  height: "19"
}), wp.element.createElement('rect', {
  x: "41.000",
  y: "20.000",
  width: "19.000",
  height: "19"
}), wp.element.createElement('rect', {
  x: "21.000",
  y: "20.000",
  width: "19.000",
  height: "19"
}), wp.element.createElement('rect', {
  x: "0.000",
  y: "20.000",
  width: "19.000",
  height: "19"
}));
var twoleftthirdIcon = wp.element.createElement('svg', {
  width: 60,
  height: 30
}, wp.element.createElement('rect', {
  x: "21.000",
  y: "0.000",
  width: "39.000",
  height: "30"
}), wp.element.createElement('rect', {
  x: "0.000",
  y: "0.000",
  width: "19.000",
  height: "30"
}));
var tworightthirdIcon = wp.element.createElement('svg', {
  width: 60,
  height: 30
}, wp.element.createElement('rect', {
  x: "41.000",
  y: "0.000",
  width: "19.000",
  height: "30"
}), wp.element.createElement('rect', {
  x: "0.000",
  y: "0.000",
  width: "39.000",
  height: "30"
}));
var twofourfourIcon = wp.element.createElement('svg', {
  width: 60,
  height: 30
}, wp.element.createElement('rect', {
  x: "46.000",
  y: "0.000",
  width: "14.000",
  height: "30"
}), wp.element.createElement('rect', {
  x: "31.000",
  y: "0.000",
  width: "14.000",
  height: "30"
}), wp.element.createElement('rect', {
  x: "0.000",
  y: "0.000",
  width: "29.000",
  height: "30"
}));
var fourtwofourIcon = wp.element.createElement('svg', {
  width: 60,
  height: 30
}, wp.element.createElement('rect', {
  x: "46.000",
  y: "0.000",
  width: "14.000",
  height: "30"
}), wp.element.createElement('rect', {
  x: "16.000",
  y: "0.000",
  width: "29.000",
  height: "30"
}), wp.element.createElement('rect', {
  x: "0.000",
  y: "0.000",
  width: "14.000",
  height: "30"
}));
var fourfourtwoIcon = wp.element.createElement('svg', {
  width: 60,
  height: 30
}, wp.element.createElement('rect', {
  x: "31.000",
  y: "0.000",
  width: "29.000",
  height: "30"
}), wp.element.createElement('rect', {
  x: "16.000",
  y: "0.000",
  width: "14.000",
  height: "30"
}), wp.element.createElement('rect', {
  x: "0.000",
  y: "0.000",
  width: "14.000",
  height: "30"
}));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _00_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./00-dashboard */ "./src/00-dashboard/index.js");
/* harmony import */ var _01_dodont__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./01-dodont */ "./src/01-dodont/index.js");
/* harmony import */ var _02_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./02-button */ "./src/02-button/index.js");
/* harmony import */ var _03_reveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./03-reveal */ "./src/03-reveal/index.js");
/* harmony import */ var _04_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./04-panel */ "./src/04-panel/index.js");
/* harmony import */ var _06_promo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./06-promo */ "./src/06-promo/index.js");
/* harmony import */ var _07_testimonial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./07-testimonial */ "./src/07-testimonial/index.js");
/* harmony import */ var _08_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./08-card */ "./src/08-card/index.js");
/* harmony import */ var _09_row_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./09-row-group */ "./src/09-row-group/index.js");
/* harmony import */ var _10_hero_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./10-hero-block */ "./src/10-hero-block/index.js");
/* harmony import */ var _16_action_back_link_action_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./16-action-back-link/action-link */ "./src/16-action-back-link/action-link.js");
/* harmony import */ var _16_action_back_link_back_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./16-action-back-link/back-link */ "./src/16-action-back-link/back-link.js");
/**
 * Import blocks as components.
 * variations to styling required for gutenberg native blocks
 *  @author Tony Blacker, NHS Leadership Academy
 *  @version 1.1 19th August 2019
 */













/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map