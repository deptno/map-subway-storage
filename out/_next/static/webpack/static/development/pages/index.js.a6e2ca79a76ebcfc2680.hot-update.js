webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/next-seo/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/next-seo/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js"),_interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"),_Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),_Object$defineProperty(exports,"DefaultSeo",{enumerable:!0,get:function get(){return _defaultSEO["default"]}}),_Object$defineProperty(exports,"NextSeo",{enumerable:!0,get:function get(){return _nextSEO["default"]}}),_Object$defineProperty(exports,"ArticleJsonLd",{enumerable:!0,get:function get(){return _article["default"]}}),_Object$defineProperty(exports,"ArticleJsonLdProps",{enumerable:!0,get:function get(){return _article.ArticleJsonLdProps}}),_Object$defineProperty(exports,"BreadcrumbJsonLd",{enumerable:!0,get:function get(){return _breadcrumb["default"]}}),_Object$defineProperty(exports,"BreadCrumbJsonLdProps",{enumerable:!0,get:function get(){return _breadcrumb.BreadCrumbJsonLdProps}}),_Object$defineProperty(exports,"FAQPageJsonLd",{enumerable:!0,get:function get(){return _faqPage["default"]}}),_Object$defineProperty(exports,"FAQPageJsonLdProps",{enumerable:!0,get:function get(){return _faqPage.FAQPageJsonLdProps}}),_Object$defineProperty(exports,"JobPostingJsonLd",{enumerable:!0,get:function get(){return _jobPosting["default"]}}),_Object$defineProperty(exports,"JobPostingJsonLdProps",{enumerable:!0,get:function get(){return _jobPosting.JobPostingJsonLdProps}}),_Object$defineProperty(exports,"BlogJsonLd",{enumerable:!0,get:function get(){return _blog["default"]}}),_Object$defineProperty(exports,"BlogJsonLdProps",{enumerable:!0,get:function get(){return _blog.BlogJsonLdProps}}),_Object$defineProperty(exports,"CourseJsonLd",{enumerable:!0,get:function get(){return _course["default"]}}),_Object$defineProperty(exports,"CourseJsonLdProps",{enumerable:!0,get:function get(){return _course.CourseJsonLdProps}}),_Object$defineProperty(exports,"LocalBusinessJsonLd",{enumerable:!0,get:function get(){return _localBusiness["default"]}}),_Object$defineProperty(exports,"LocalBusinessJsonLdProps",{enumerable:!0,get:function get(){return _localBusiness.LocalBusinessJsonLdProps}}),_Object$defineProperty(exports,"LogoJsonLd",{enumerable:!0,get:function get(){return _logo["default"]}}),_Object$defineProperty(exports,"LogoJsonLdProps",{enumerable:!0,get:function get(){return _logo.LogoJsonLdProps}}),_Object$defineProperty(exports,"ProductJsonLd",{enumerable:!0,get:function get(){return _product["default"]}}),_Object$defineProperty(exports,"ProductJsonLdProps",{enumerable:!0,get:function get(){return _product.ProductJsonLdProps}}),_Object$defineProperty(exports,"SocialProfileJsonLd",{enumerable:!0,get:function get(){return _socialProfile["default"]}}),_Object$defineProperty(exports,"SocialProfileJsonLdProps",{enumerable:!0,get:function get(){return _socialProfile.SocialProfileJsonLdProps}}),_Object$defineProperty(exports,"CorporateContactJsonLd",{enumerable:!0,get:function get(){return _corporateContact["default"]}}),_Object$defineProperty(exports,"CorporateContactJsonLdProps",{enumerable:!0,get:function get(){return _corporateContact.CorporateContactJsonLdProps}}),_Object$defineProperty(exports,"NewsArticleJsonLd",{enumerable:!0,get:function get(){return _newsarticle["default"]}}),_Object$defineProperty(exports,"NewsArticleJsonLdProps",{enumerable:!0,get:function get(){return _newsarticle.NewsArticleJsonLdProps}}),_Object$defineProperty(exports,"EventJsonLd",{enumerable:!0,get:function get(){return _event["default"]}}),_Object$defineProperty(exports,"EventJsonLdProps",{enumerable:!0,get:function get(){return _event.EventJsonLdProps}}),_Object$defineProperty(exports,"DefaultSeoProps",{enumerable:!0,get:function get(){return _types.DefaultSeoProps}}),_Object$defineProperty(exports,"NextSeoProps",{enumerable:!0,get:function get(){return _types.NextSeoProps}});var _defaultSEO=_interopRequireDefault(__webpack_require__(/*! ./meta/defaultSEO */ "./node_modules/next-seo/lib/meta/defaultSEO.js")),_nextSEO=_interopRequireDefault(__webpack_require__(/*! ./meta/nextSEO */ "./node_modules/next-seo/lib/meta/nextSEO.js")),_article=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/article */ "./node_modules/next-seo/lib/jsonld/article.js")),_breadcrumb=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/breadcrumb */ "./node_modules/next-seo/lib/jsonld/breadcrumb.js")),_faqPage=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/faqPage */ "./node_modules/next-seo/lib/jsonld/faqPage.js")),_jobPosting=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/jobPosting */ "./node_modules/next-seo/lib/jsonld/jobPosting.js")),_blog=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/blog */ "./node_modules/next-seo/lib/jsonld/blog.js")),_course=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/course */ "./node_modules/next-seo/lib/jsonld/course.js")),_localBusiness=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/localBusiness */ "./node_modules/next-seo/lib/jsonld/localBusiness.js")),_logo=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/logo */ "./node_modules/next-seo/lib/jsonld/logo.js")),_product=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/product */ "./node_modules/next-seo/lib/jsonld/product.js")),_socialProfile=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/socialProfile */ "./node_modules/next-seo/lib/jsonld/socialProfile.js")),_corporateContact=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/corporateContact */ "./node_modules/next-seo/lib/jsonld/corporateContact.js")),_newsarticle=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/newsarticle */ "./node_modules/next-seo/lib/jsonld/newsarticle.js")),_event=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/event */ "./node_modules/next-seo/lib/jsonld/event.js")),_types=__webpack_require__(/*! ./types */ "./node_modules/next-seo/lib/types.js");

/***/ }),

/***/ "./node_modules/next-seo/lib/jsonld/article.js":
/*!*****************************************************!*\
  !*** ./node_modules/next-seo/lib/jsonld/article.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"),_Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "./node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,ArticleJsonLd=function(a){var b=a.url,c=a.title,d=a.images,e=void 0===d?[]:d,f=a.datePublished,g=a.dateModified,h=void 0===g?null:g,i=a.authorName,j=a.description,k=a.publisherName,l=a.publisherLogo,m="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Article\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"".concat(b,"\"\n    },\n    \"headline\": \"").concat(c,"\",\n    \"image\": [\n      ").concat(e.map(function(a){return"\"".concat(a,"\"")}),"\n     ],\n    \"datePublished\": \"").concat(f,"\",\n    \"dateModified\": \"").concat(h||f,"\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"").concat(i,"\"\n    },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"").concat(k,"\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"").concat(l,"\"\n      }\n    },\n    \"description\": \"").concat(j,"\"\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(m),key:"jsonld-article"}))},_default=ArticleJsonLd;exports["default"]=_default;

/***/ }),

/***/ "./node_modules/next-seo/lib/jsonld/blog.js":
/*!**************************************************!*\
  !*** ./node_modules/next-seo/lib/jsonld/blog.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"),_Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "./node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,BlogJsonLd=function(a){var b=a.url,c=a.title,d=a.images,e=void 0===d?[]:d,f=a.datePublished,g=a.dateModified,h=void 0===g?null:g,i=a.authorName,j=a.description,k="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Blog\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"".concat(b,"\"\n    },\n    \"headline\": \"").concat(c,"\",\n    \"image\": [\n      ").concat(e.map(function(a){return"\"".concat(a,"\"")}),"\n     ],\n    \"datePublished\": \"").concat(f,"\",\n    \"dateModified\": \"").concat(h||f,"\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"").concat(i,"\"\n    },\n    \"description\": \"").concat(j,"\"\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(k),key:"jsonld-blog"}))},_default=BlogJsonLd;exports["default"]=_default;

/***/ }),

/***/ "./node_modules/next-seo/lib/jsonld/breadcrumb.js":
/*!********************************************************!*\
  !*** ./node_modules/next-seo/lib/jsonld/breadcrumb.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"),_Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "./node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,BreadCrumbJsonLd=function(a){var b=a.itemListElements,c=void 0===b?[]:b,d="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"BreadcrumbList\",\n    \"itemListElement\": [\n      ".concat(c.map(function(a){return"{\n        \"@type\": \"ListItem\",\n        \"position\": ".concat(a.position,",\n        \"item\": {\n          \"@id\": \"").concat(a.item,"\",\n          \"name\": \"").concat(a.name,"\"\n        }\n      }")}),"\n     ]\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(d),key:"jsonld-breadcrumb"}))},_default=BreadCrumbJsonLd;exports["default"]=_default;

/***/ }),

/***/ "./node_modules/next-seo/lib/jsonld/corporateContact.js":
/*!**************************************************************!*\
  !*** ./node_modules/next-seo/lib/jsonld/corporateContact.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"),_Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _isArray=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js")),_react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "./node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,formatIfArray=function(a){return(0,_isArray["default"])(a)?"[".concat(a.map(function(a){return"\"".concat(a,"\"")}),"]"):"\"".concat(a,"\"")},buildContactPoint=function(a){return a.map(function(a){return"{\n    \"@type\": \"ContactPoint\",\n    \"telephone\": \"".concat(a.telephone,"\",\n    \"contactType\": \"").concat(a.contactType,"\"").concat(a.areaServed?",\n    \"areaServed\": ".concat(formatIfArray(a.areaServed)):"").concat(a.availableLanguage?",\n    \"availableLanguage\": ".concat(formatIfArray(a.availableLanguage)):"").concat(a.contactOption?",\n    \"contactOption\": \"".concat(a.contactOption,"\""):"","\n    }")})},CorporateContactJsonLd=function(a){var b=a.url,c=a.logo,d=a.contactPoint,e="{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Organization\",\n    \"url\": \"".concat(b,"\",\n    ").concat(c?"\"logo\": \"".concat(c,"\","):"","\n    \"contactPoint\": [").concat(buildContactPoint(d),"]\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(e),key:"jsonld-corporate-contact"}))},_default=CorporateContactJsonLd;exports["default"]=_default;

/***/ }),

/***/ "./node_modules/next-seo/lib/jsonld/course.js":
/*!****************************************************!*\
  !*** ./node_modules/next-seo/lib/jsonld/course.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"),_Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "./node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,CourseJsonLd=function(a){var b=a.courseName,c=a.description,d=a.providerName,e=a.providerUrl,f="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Course\",\n    \"name\": \"".concat(b,"\",\n    \"description\": \"").concat(c,"\",\n    \"provider\": {\n      \"@type\": \"Organization\",\n      \"name\": \"").concat(d,"\"").concat(e?",\n      \"sameAs\": \"".concat(e,"\""):"","\n    }\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(f),key:"jsonld-course"}))},_default=CourseJsonLd;exports["default"]=_default;

/***/ }),

/***/ "./node_modules/next-seo/lib/jsonld/event.js":
/*!***************************************************!*\
  !*** ./node_modules/next-seo/lib/jsonld/event.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"),_Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "./node_modules/next-seo/lib/utils/markup.js")),_formatIfArray=_interopRequireDefault(__webpack_require__(/*! ../utils/formatIfArray */ "./node_modules/next-seo/lib/utils/formatIfArray.js")),_buildAddress=_interopRequireDefault(__webpack_require__(/*! ../utils/buildAddress */ "./node_modules/next-seo/lib/utils/buildAddress.js")),__jsx=_react["default"].createElement,buildLocation=function(a){return"\n  \"location\": {\n    \"@type\": \"Place\",\n    ".concat((0,_buildAddress["default"])(a.address),"\n    ").concat(a.sameAs?"\"sameAs\": \"".concat(a.sameAs,"\","):"","\n    \"name\": \"").concat(a.name,"\"\n  },\n")},EventJsonLd=function(a){var b=a.name,c=a.startDate,d=a.endDate,e=a.location,f=a.url,g=a.description,h=a.images,i="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Event\",\n    \"startDate\": \"".concat(c,"\",\n    \"endDate\": \"").concat(d,"\",\n    ").concat(buildLocation(e),"\n    ").concat(h?"\"image\":".concat((0,_formatIfArray["default"])(h),","):"","\n    ").concat(f?"\"url\": \"".concat(f,"\","):"","\n    ").concat(g?"\"description\": \"".concat(g,"\","):"","\n    \"name\": \"").concat(b,"\"\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(i),key:"jsonld-event"}))},_default=EventJsonLd;exports["default"]=_default;

/***/ }),

/***/ "./node_modules/next-seo/lib/jsonld/faqPage.js":
/*!*****************************************************!*\
  !*** ./node_modules/next-seo/lib/jsonld/faqPage.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"),_Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "./node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,buildQuestions=function(a){return"\n  ".concat(a.map(function(a){return"{\n      \"@type\": \"Question\",\n      \"name\": \"".concat(a.questionName,"\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"").concat(a.acceptedAnswerText,"\"\n      }\n  }")}))},FAQPageJsonLd=function(a){var b=a.mainEntity,c=void 0===b?[]:b,d="{\n    \"@context\": \"http://schema.org/\",\n    \"@type\": \"FAQPage\",\n    \"mainEntity\": [".concat(buildQuestions(c),"]\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(d),key:"jsonld-faq-page"}))},_default=FAQPageJsonLd;exports["default"]=_default;

/***/ }),

/***/ "./node_modules/next-seo/lib/jsonld/jobPosting.js":
/*!********************************************************!*\
  !*** ./node_modules/next-seo/lib/jsonld/jobPosting.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"),_Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "./node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,buildBaseSalary=function(a){return"\n  \"baseSalary\": {\n    \"@type\": \"MonetaryAmount\",\n    ".concat(a.currency?"\"currency\": \"".concat(a.currency,"\","):"","\n    \"value\": {\n      \"@type\": \"QuantitativeValue\",\n      ").concat(a.value?"\"value\": \"".concat(a.value,"\","):"","\n      ").concat(a.unitText?"\"unitText\": \"".concat(a.unitText,"\""):"","\n    }\n  },\n")},JobPostingJsonLd=function(a){var b=a.baseSalary,c=a.datePosted,d=a.description,e=a.employmentType,f=a.hiringOrganization,g=a.jobLocation,h=a.applicantLocationRequirements,i=a.jobLocationType,j=a.title,k=a.validThrough,l="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"JobPosting\",\n    ".concat(b?buildBaseSalary(b):"","\n    \"datePosted\": \"").concat(c,"\",\n    \"description\": \"").concat(d,"\",\n    ").concat(e?"\"employmentType\": \"".concat(e,"\","):"","\n    \"hiringOrganization\" : {\n      \"@type\" : \"Organization\",\n      \"name\" : \"").concat(f.name,"\",\n      \"sameAs\" : \"").concat(f.sameAs,"\"\n    },\n    \n    \"jobLocation\": {\n      \"@type\": \"Place\",\n      \"address\": {\n        \"@type\": \"PostalAddress\",\n        \"addressLocality\": \"").concat(g.addressLocality,"\",\n        \"addressRegion\": \"").concat(g.addressRegion,"\",\n        \"postalCode\" : \"").concat(g.postalCode,"\",\n        \"streetAddress\" : \"").concat(g.streetAddress,"\",\n        \"addressCountry\" : \"").concat(g.addressCountry,"\"\n      }\n    },\n    ").concat(h?" \"applicantLocationRequirements\": {\n        \"@type\": \"Country\",\n        \"name\": \"".concat(h,"\"\n    },"):"","\n    ").concat(i?"\"jobLocationType\": \"".concat(i,"\","):"","\n    ").concat(k?"\"validThrough\": \"".concat(k,"\","):"","\n    \"title\": \"").concat(j,"\"\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(l),key:"jsonld-jobPosting"}))},_default=JobPostingJsonLd;exports["default"]=_default;

/***/ }),

/***/ "./node_modules/next-seo/lib/jsonld/localBusiness.js":
/*!***********************************************************!*\
  !*** ./node_modules/next-seo/lib/jsonld/localBusiness.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"),_Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _isArray=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js")),_react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "./node_modules/next-seo/lib/utils/markup.js")),_formatIfArray=_interopRequireDefault(__webpack_require__(/*! ../utils/formatIfArray */ "./node_modules/next-seo/lib/utils/formatIfArray.js")),_buildAddress=_interopRequireDefault(__webpack_require__(/*! ../utils/buildAddress */ "./node_modules/next-seo/lib/utils/buildAddress.js")),__jsx=_react["default"].createElement,buildGeo=function(a){return"\n  \"geo\": {\n    \"@type\": \"GeoCoordinates\",\n    \"latitude\": \"".concat(a.latitude,"\",\n    \"longitude\": \"").concat(a.longitude,"\"\n  },\n")},buildRating=function(a){return"\n  \"aggregateRating\": {\n    \"@type\": \"AggregateRating\",\n    \"ratingValue\": \"".concat(a.ratingValue,"\",\n    \"ratingCount\": \"").concat(a.ratingCount,"\"\n  },\n")},buildOpeningHours=function(a){return"\n  {\n    \"@type\": \"OpeningHoursSpecification\",\n    \"opens\": \"".concat(a.opens,"\",\n    \"closes\": \"").concat(a.closes,"\",\n    ").concat(a.dayOfWeek?"\"dayOfWeek\": ".concat((0,_formatIfArray["default"])(a.dayOfWeek),","):"","\n    ").concat(a.validFrom?"\"validFrom\": \"".concat(a.validFrom,"\","):"","\n    ").concat(a.validThrough?"\"validThrough\": \"".concat(a.validThrough,"\""):"","\n  }\n")},LocalBusinessJsonLd=function(a){var b=a.type,c=a.id,d=a.name,e=a.description,f=a.url,g=a.telephone,h=a.address,i=a.geo,j=a.images,k=a.rating,l=a.priceRange,m=a.sameAs,n=a.openingHours,o="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"".concat(b,"\",\n    \"@id\": \"").concat(c,"\",\n    ").concat(e?"\"description\": \"".concat(e,"\","):"","\n    ").concat(f?"\"url\": \"".concat(f,"\","):"","\n    ").concat(g?"\"telephone\": \"".concat(g,"\","):"","\n    ").concat((0,_buildAddress["default"])(h),"\n    ").concat(i?"".concat(buildGeo(i)):"","\n    ").concat(k?"".concat(buildRating(k)):"","\n    ").concat(l?"\"priceRange\": \"".concat(l,"\","):"","\n    \"image\":").concat((0,_formatIfArray["default"])(j),",\n    ").concat(m?"\"sameAs\": [".concat(m.map(function(a){return"\"".concat(a,"\"")}),"],"):"","\n    ").concat(n?"\"openingHoursSpecification\": ".concat((0,_isArray["default"])(n)?"[".concat(n.map(function(a){return"".concat(buildOpeningHours(a))}),"]"):buildOpeningHours(n),","):"","\n    \"name\": \"").concat(d,"\"\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(o),key:"jsonld-local-business"}))},_default=LocalBusinessJsonLd;exports["default"]=_default;

/***/ }),

/***/ "./node_modules/next-seo/lib/jsonld/logo.js":
/*!**************************************************!*\
  !*** ./node_modules/next-seo/lib/jsonld/logo.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"),_Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "./node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,LogoJsonLd=function(a){var b=a.url,c=a.logo,d="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Organization\",\n    \"url\": \"".concat(b,"\",\n    \"logo\": \"").concat(c,"\"\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(d),key:"jsonld-logo"}))},_default=LogoJsonLd;exports["default"]=_default;

/***/ }),

/***/ "./node_modules/next-seo/lib/jsonld/newsarticle.js":
/*!*********************************************************!*\
  !*** ./node_modules/next-seo/lib/jsonld/newsarticle.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"),_Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "./node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,NewsArticleJsonLd=function(a){var b=a.url,c=a.title,d=a.images,e=void 0===d?[]:d,f=a.section,g=a.keywords,h=a.datePublished,i=a.dateCreated,j=void 0===i?null:i,k=a.dateModified,l=void 0===k?null:k,m=a.authorName,n=a.description,o=a.body,p=a.publisherName,q=a.publisherLogo,r="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"NewsArticle\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"".concat(b,"\"\n    },\n    \"headline\": \"").concat(c,"\",\n    \"image\": [\n      ").concat(e.map(function(a){return"\"".concat(a,"\"")}),"\n     ],\n    \"articleSection\":\"").concat(f,"\",\n    \"keywords\": \"").concat(g,"\",    \n    \"datePublished\": \"").concat(h,"\",\n    \"dateCreated\": \"").concat(j||h,"\",\n    \"dateModified\": \"").concat(l||h,"\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"").concat(m,"\"\n    },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"").concat(p,"\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"").concat(q,"\"\n      }\n    },\n    \"description\": \"").concat(n,"\",\n    \"articleBody\": \"").concat(o,"\"\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(r),key:"jsonld-newsarticle"}))},_default=NewsArticleJsonLd;exports["default"]=_default;

/***/ }),

/***/ "./node_modules/next-seo/lib/jsonld/product.js":
/*!*****************************************************!*\
  !*** ./node_modules/next-seo/lib/jsonld/product.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"),_Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "./node_modules/next-seo/lib/utils/markup.js")),_formatIfArray=_interopRequireDefault(__webpack_require__(/*! ../utils/formatIfArray */ "./node_modules/next-seo/lib/utils/formatIfArray.js")),__jsx=_react["default"].createElement,buildBrand=function(a){return"\n  \"brand\": {\n      \"@type\": \"Thing\",\n      \"name\": \"".concat(a,"\"\n    },\n")},buildReviewRating=function(a){return a?"\"reviewRating\": {\n          \"@type\": \"Rating\",\n          ".concat(a.bestRating?"\"bestRating\": \"".concat(a.bestRating,"\","):"","\n          ").concat(a.worstRating?"\"worstRating\": \"".concat(a.worstRating,"\","):"","\n          \"ratingValue\": \"").concat(a.ratingValue,"\"\n        }"):""},buildAuthor=function(a){return"\n  \"author\": {\n      \"@type\": \"".concat(a.type,"\",\n      \"name\": \"").concat(a.name,"\"\n  },\n")},buildPublisher=function(a){return"\n  \"publisher\": {\n      \"@type\": \"".concat(a.type,"\",\n      \"name\": \"").concat(a.name,"\"\n  },\n")},buildReviews=function(a){return"\n\"review\": [\n  ".concat(a.map(function(a){return"{\n      \"@type\": \"Review\",\n      ".concat(a.author?buildAuthor(a.author):"","\n      ").concat(a.publisher?buildPublisher(a.publisher):"","\n      ").concat(a.datePublished?"\"datePublished\": \"".concat(a.datePublished,"\","):"","\n      ").concat(a.reviewBody?"\"reviewBody\": \"".concat(a.reviewBody,"\","):"","\n      ").concat(a.name?"\"name\": \"".concat(a.name,"\","):"","\n      ").concat(buildReviewRating(a.reviewRating),"\n  }")}),"],")},buildAggregateRating=function(a){return"\n  \"aggregateRating\": {\n      \"@type\": \"AggregateRating\",\n      \"ratingValue\": \"".concat(a.ratingValue,"\",\n      \"reviewCount\": \"").concat(a.reviewCount,"\"\n    },\n")},buildOffers=function(a){return"\n  \"offers\": {\n    \"@type\": \"Offer\",\n    \"priceCurrency\": \"".concat(a.priceCurrency,"\",\n    ").concat(a.priceValidUntil?"\"priceValidUntil\": \"".concat(a.priceValidUntil,"\","):"","\n    ").concat(a.itemCondition?"\"itemCondition\": \"".concat(a.itemCondition,"\","):"","\n    ").concat(a.availability?"\"availability\": \"".concat(a.availability,"\","):"","\n    ").concat(a.url?"\"url\": \"".concat(a.url,"\","):"","\n    ").concat(a.seller?"\n      \"seller\": {\n      \"@type\": \"Organization\",\n      \"name\": \"".concat(a.seller.name,"\"\n    },\n    "):"","\n    \"price\": \"").concat(a.price,"\"\n  },\n")},ProductJsonLd=function(a){var b=a.productName,c=a.images,d=void 0===c?[]:c,e=a.description,f=a.sku,g=a.gtin8,h=a.gtin13,i=a.gtin14,j=a.mpn,k=a.brand,l=a.reviews,m=void 0===l?[]:l,n=a.aggregateRating,o=a.offers,p="{\n    \"@context\": \"http://schema.org/\",\n    \"@type\": \"Product\",\n    \"image\":".concat((0,_formatIfArray["default"])(d),",\n    ").concat(e?"\"description\": \"".concat(e,"\","):"","\n    ").concat(j?"\"mpn\": \"".concat(j,"\","):"","\n    ").concat(f?"\"sku\": \"".concat(f,"\","):"","\n    ").concat(g?"\"gtin8\": \"".concat(g,"\","):"","\n    ").concat(h?"\"gtin13\": \"".concat(h,"\","):"","\n    ").concat(i?"\"gtin14\": \"".concat(i,"\","):"","\n    ").concat(k?buildBrand(k):"","\n    ").concat(m.length?buildReviews(m):"","\n    ").concat(n?buildAggregateRating(n):"","\n    ").concat(o?buildOffers(o):"","\n    \"name\": \"").concat(b,"\"\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(p),key:"jsonld-product"}))},_default=ProductJsonLd;exports["default"]=_default;

/***/ }),

/***/ "./node_modules/next-seo/lib/jsonld/socialProfile.js":
/*!***********************************************************!*\
  !*** ./node_modules/next-seo/lib/jsonld/socialProfile.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"),_Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "./node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,SocialProfileJsonLd=function(a){var b=a.type,c=a.name,d=a.url,e=a.sameAs,f=void 0===e?[]:e,g="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"".concat(b,"\",\n    \"name\": \"").concat(c,"\",\n    \"url\": \"").concat(d,"\",\n    \"sameAs\": [\n      ").concat(f.map(function(a){return"\"".concat(a,"\"")}),"\n     ]\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(g),key:"jsonld-social"}))},_default=SocialProfileJsonLd;exports["default"]=_default;

/***/ }),

/***/ "./node_modules/next-seo/lib/meta/buildTags.js":
/*!*****************************************************!*\
  !*** ./node_modules/next-seo/lib/meta/buildTags.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"),_Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js")),_react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),__jsx=_react["default"].createElement,defaults={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},buildTags=function(a){var b=[];a.titleTemplate&&(defaults.templateTitle=a.titleTemplate);var c="";a.title&&(c=a.title,defaults.templateTitle&&(c=defaults.templateTitle.replace(/%s/g,function(){return c})),b.push(_react["default"].createElement("title",{key:"title"},c)));var d=a.noindex||defaults.noindex||a.dangerouslySetAllPagesToNoIndex,e=a.nofollow||defaults.nofollow||a.dangerouslySetAllPagesToNoFollow;if(d||e?(a.dangerouslySetAllPagesToNoIndex&&(defaults.noindex=!0),a.dangerouslySetAllPagesToNoFollow&&(defaults.nofollow=!0),b.push(_react["default"].createElement("meta",{key:"robots",name:"robots",content:"".concat(d?"noindex":"index",",").concat(e?"nofollow":"follow")})),b.push(_react["default"].createElement("meta",{key:"googlebot",name:"googlebot",content:"".concat(d?"noindex":"index",",").concat(e?"nofollow":"follow")}))):(b.push(_react["default"].createElement("meta",{key:"robots",name:"robots",content:"index,follow"})),b.push(_react["default"].createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"}))),a.description&&b.push(_react["default"].createElement("meta",{key:"description",name:"description",content:a.description})),a.mobileAlternate&&b.push(_react["default"].createElement("link",{rel:"alternate",key:"mobileAlternate",media:a.mobileAlternate.media,href:a.mobileAlternate.href})),a.languageAlternates&&0<a.languageAlternates.length&&a.languageAlternates.forEach(function(a){b.push(_react["default"].createElement("link",{rel:"alternate",key:"languageAlternate-".concat(a.hrefLang),hrefLang:a.hrefLang,href:a.href}))}),a.twitter&&(a.twitter.cardType&&b.push(_react["default"].createElement("meta",{key:"twitter:card",name:"twitter:card",content:a.twitter.cardType})),a.twitter.site&&b.push(_react["default"].createElement("meta",{key:"twitter:site",name:"twitter:site",content:a.twitter.site})),a.twitter.handle&&b.push(_react["default"].createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:a.twitter.handle}))),a.facebook&&a.facebook.appId&&b.push(_react["default"].createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:a.facebook.appId})),a.openGraph){if((a.openGraph.url||a.canonical)&&b.push(_react["default"].createElement("meta",{key:"og:url",property:"og:url",content:a.openGraph.url||a.canonical})),a.openGraph.type){var f=a.openGraph.type.toLowerCase();b.push(_react["default"].createElement("meta",{key:"og:type",property:"og:type",content:f})),"profile"===f&&a.openGraph.profile?(a.openGraph.profile.firstName&&b.push(_react["default"].createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:a.openGraph.profile.firstName})),a.openGraph.profile.lastName&&b.push(_react["default"].createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:a.openGraph.profile.lastName})),a.openGraph.profile.username&&b.push(_react["default"].createElement("meta",{key:"profile:username",property:"profile:username",content:a.openGraph.profile.username})),a.openGraph.profile.gender&&b.push(_react["default"].createElement("meta",{key:"profile:gender",property:"profile:gender",content:a.openGraph.profile.gender}))):"book"===f&&a.openGraph.book?(a.openGraph.book.authors&&a.openGraph.book.authors.length&&a.openGraph.book.authors.forEach(function(a,c){b.push(_react["default"].createElement("meta",{key:"book:author:0".concat(c),property:"book:author",content:a}))}),a.openGraph.book.isbn&&b.push(_react["default"].createElement("meta",{key:"book:isbn",property:"book:isbn",content:a.openGraph.book.isbn})),a.openGraph.book.releaseDate&&b.push(_react["default"].createElement("meta",{key:"book:release_date",property:"book:release_date",content:a.openGraph.book.releaseDate})),a.openGraph.book.tags&&a.openGraph.book.tags.length&&a.openGraph.book.tags.forEach(function(a,c){b.push(_react["default"].createElement("meta",{key:"book:tag:0".concat(c),property:"book:tag",content:a}))})):"article"===f&&a.openGraph.article?(a.openGraph.article.publishedTime&&b.push(_react["default"].createElement("meta",{key:"article:published_time",property:"article:published_time",content:a.openGraph.article.publishedTime})),a.openGraph.article.modifiedTime&&b.push(_react["default"].createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:a.openGraph.article.modifiedTime})),a.openGraph.article.expirationTime&&b.push(_react["default"].createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:a.openGraph.article.expirationTime})),a.openGraph.article.authors&&a.openGraph.article.authors.length&&a.openGraph.article.authors.forEach(function(a,c){b.push(_react["default"].createElement("meta",{key:"article:author:0".concat(c),property:"article:author",content:a}))}),a.openGraph.article.section&&b.push(_react["default"].createElement("meta",{key:"article:section",property:"article:section",content:a.openGraph.article.section})),a.openGraph.article.tags&&a.openGraph.article.tags.length&&a.openGraph.article.tags.forEach(function(a,c){b.push(_react["default"].createElement("meta",{key:"article:tag:0".concat(c),property:"article:tag",content:a}))})):("video.movie"===f||"video.episode"===f||"video.tv_show"===f||"video.other"===f)&&a.openGraph.video&&(a.openGraph.video.actors&&a.openGraph.video.actors.length&&a.openGraph.video.actors.forEach(function(a,c){a.profile&&b.push(_react["default"].createElement("meta",{key:"video:actor:0".concat(c),property:"video:actor",content:a.profile})),a.role&&b.push(_react["default"].createElement("meta",{key:"video:actor:role:0".concat(c),property:"video:actor:role",content:a.role}))}),a.openGraph.video.directors&&a.openGraph.video.directors.length&&a.openGraph.video.directors.forEach(function(a,c){b.push(_react["default"].createElement("meta",{key:"video:director:0".concat(c),property:"video:director",content:a}))}),a.openGraph.video.writers&&a.openGraph.video.writers.length&&a.openGraph.video.writers.forEach(function(a,c){b.push(_react["default"].createElement("meta",{key:"video:writer:0".concat(c),property:"video:writer",content:a}))}),a.openGraph.video.duration&&b.push(_react["default"].createElement("meta",{key:"video:duration",property:"video:duration",content:a.openGraph.video.duration.toString()})),a.openGraph.video.releaseDate&&b.push(_react["default"].createElement("meta",{key:"video:release_date",property:"video:release_date",content:a.openGraph.video.releaseDate})),a.openGraph.video.tags&&a.openGraph.video.tags.length&&a.openGraph.video.tags.forEach(function(a,c){b.push(_react["default"].createElement("meta",{key:"video:tag:0".concat(c),property:"video:tag",content:a}))}),a.openGraph.video.series&&b.push(_react["default"].createElement("meta",{key:"video:series",property:"video:series",content:a.openGraph.video.series})))}(a.openGraph.title||a.title)&&b.push(_react["default"].createElement("meta",{key:"og:title",property:"og:title",content:a.openGraph.title||c})),(a.openGraph.description||a.description)&&b.push(_react["default"].createElement("meta",{key:"og:description",property:"og:description",content:a.openGraph.description||a.description})),a.defaultOpenGraphImageWidth&&(defaults.defaultOpenGraphImageWidth=a.defaultOpenGraphImageWidth),a.defaultOpenGraphImageHeight&&(defaults.defaultOpenGraphImageHeight=a.defaultOpenGraphImageHeight),a.openGraph.images&&a.openGraph.images.length&&a.openGraph.images.forEach(function(a,c){b.push(_react["default"].createElement("meta",{key:"og:image:0".concat(c),property:"og:image",content:a.url})),a.alt&&b.push(_react["default"].createElement("meta",{key:"og:image:alt0".concat(c),property:"og:image:alt",content:a.alt})),a.width?b.push(_react["default"].createElement("meta",{key:"og:image:width0".concat(c),property:"og:image:width",content:a.width.toString()})):defaults.defaultOpenGraphImageWidth&&b.push(_react["default"].createElement("meta",{key:"og:image:width0".concat(c),property:"og:image:width",content:defaults.defaultOpenGraphImageWidth.toString()})),a.height?b.push(_react["default"].createElement("meta",{key:"og:image:height".concat(c),property:"og:image:height",content:a.height.toString()})):defaults.defaultOpenGraphImageHeight&&b.push(_react["default"].createElement("meta",{key:"og:image:height".concat(c),property:"og:image:height",content:defaults.defaultOpenGraphImageHeight.toString()}))}),a.defaultOpenGraphVideoWidth&&(defaults.defaultOpenGraphVideoWidth=a.defaultOpenGraphVideoWidth),a.defaultOpenGraphVideoHeight&&(defaults.defaultOpenGraphVideoHeight=a.defaultOpenGraphVideoHeight),a.openGraph.videos&&a.openGraph.videos.length&&a.openGraph.videos.forEach(function(a,c){b.push(_react["default"].createElement("meta",{key:"og:video:0".concat(c),property:"og:video",content:a.url})),a.alt&&b.push(_react["default"].createElement("meta",{key:"og:video:alt0".concat(c),property:"og:video:alt",content:a.alt})),a.width?b.push(_react["default"].createElement("meta",{key:"og:video:width0".concat(c),property:"og:video:width",content:a.width.toString()})):defaults.defaultOpenGraphVideoWidth&&b.push(_react["default"].createElement("meta",{key:"og:video:width0".concat(c),property:"og:video:width",content:defaults.defaultOpenGraphVideoWidth.toString()})),a.height?b.push(_react["default"].createElement("meta",{key:"og:video:height".concat(c),property:"og:video:height",content:a.height.toString()})):defaults.defaultOpenGraphVideoHeight&&b.push(_react["default"].createElement("meta",{key:"og:video:height".concat(c),property:"og:video:height",content:defaults.defaultOpenGraphVideoHeight.toString()}))}),a.openGraph.locale&&b.push(_react["default"].createElement("meta",{key:"og:locale",property:"og:locale",content:a.openGraph.locale})),a.openGraph.site_name&&b.push(_react["default"].createElement("meta",{key:"og:site_name",property:"og:site_name",content:a.openGraph.site_name}))}return a.canonical&&b.push(_react["default"].createElement("link",{rel:"canonical",href:a.canonical,key:"canonical"})),a.additionalMetaTags&&0<a.additionalMetaTags.length&&a.additionalMetaTags.forEach(function(a){b.push(_react["default"].createElement("meta",(0,_extends2["default"])({key:a.name?a.name:a.property},a)))}),b},_default=buildTags;exports["default"]=_default;

/***/ }),

/***/ "./node_modules/next-seo/lib/meta/defaultSEO.js":
/*!******************************************************!*\
  !*** ./node_modules/next-seo/lib/meta/defaultSEO.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js"),_interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"),_Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js")),_createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js")),_inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js")),_react=_interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js")),_buildTags=_interopRequireDefault(__webpack_require__(/*! ./buildTags */ "./node_modules/next-seo/lib/meta/buildTags.js")),__jsx=_react["default"].createElement,_default=/*#__PURE__*/function(a){function b(){return(0,_classCallCheck2["default"])(this,b),(0,_possibleConstructorReturn2["default"])(this,(0,_getPrototypeOf2["default"])(b).apply(this,arguments))}return(0,_inherits2["default"])(b,a),(0,_createClass2["default"])(b,[{key:"render",value:function render(){var a=this.props,b=a.title,c=a.titleTemplate,d=a.dangerouslySetAllPagesToNoIndex,e=a.dangerouslySetAllPagesToNoFollow,f=a.description,g=a.canonical,h=a.facebook,i=a.openGraph,j=a.additionalMetaTags,k=a.twitter,l=a.defaultOpenGraphImageWidth,m=a.defaultOpenGraphImageHeight,n=a.defaultOpenGraphVideoWidth,o=a.defaultOpenGraphVideoHeight,p=a.mobileAlternate,q=a.languageAlternates;return _react["default"].createElement(_head["default"],null,(0,_buildTags["default"])({title:b,titleTemplate:c,dangerouslySetAllPagesToNoIndex:void 0!==d&&d,dangerouslySetAllPagesToNoFollow:void 0!==e&&e,description:f,canonical:g,facebook:h,openGraph:i,additionalMetaTags:j,twitter:k,defaultOpenGraphImageWidth:l,defaultOpenGraphImageHeight:m,defaultOpenGraphVideoWidth:n,defaultOpenGraphVideoHeight:o,mobileAlternate:p,languageAlternates:q}))}}]),b}(_react.Component);exports["default"]=_default;

/***/ }),

/***/ "./node_modules/next-seo/lib/meta/nextSEO.js":
/*!***************************************************!*\
  !*** ./node_modules/next-seo/lib/meta/nextSEO.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js"),_interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"),_Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js")),_createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js")),_inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js")),_react=_interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js")),_buildTags=_interopRequireDefault(__webpack_require__(/*! ./buildTags */ "./node_modules/next-seo/lib/meta/buildTags.js")),__jsx=_react["default"].createElement,_default=/*#__PURE__*/function(a){function b(){return(0,_classCallCheck2["default"])(this,b),(0,_possibleConstructorReturn2["default"])(this,(0,_getPrototypeOf2["default"])(b).apply(this,arguments))}return(0,_inherits2["default"])(b,a),(0,_createClass2["default"])(b,[{key:"render",value:function render(){var a=this.props,b=a.title,c=a.noindex,d=a.nofollow,e=a.description,f=a.canonical,g=a.openGraph,h=a.facebook,i=a.twitter,j=a.additionalMetaTags,k=a.titleTemplate,l=a.mobileAlternate,m=a.languageAlternates;return _react["default"].createElement(_head["default"],null,(0,_buildTags["default"])({title:b,noindex:void 0!==c&&c,nofollow:d,description:e,canonical:f,facebook:h,openGraph:g,additionalMetaTags:j,twitter:i,titleTemplate:k,mobileAlternate:l,languageAlternates:m}))}}]),b}(_react.Component);exports["default"]=_default;

/***/ }),

/***/ "./node_modules/next-seo/lib/types.js":
/*!********************************************!*\
  !*** ./node_modules/next-seo/lib/types.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/next-seo/lib/utils/buildAddress.js":
/*!*********************************************************!*\
  !*** ./node_modules/next-seo/lib/utils/buildAddress.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _default=function(a){return"\n  \"address\": {\n    \"@type\": \"PostalAddress\",\n    \"streetAddress\": \"".concat(a.streetAddress,"\",\n    \"addressLocality\": \"").concat(a.addressLocality,"\",\n    ").concat(a.addressRegion?"\"addressRegion\": \"".concat(a.addressRegion,"\","):"","\n    \"postalCode\": \"").concat(a.postalCode,"\",\n    \"addressCountry\": \"").concat(a.addressCountry,"\"\n  },\n")};exports["default"]=_default;

/***/ }),

/***/ "./node_modules/next-seo/lib/utils/formatIfArray.js":
/*!**********************************************************!*\
  !*** ./node_modules/next-seo/lib/utils/formatIfArray.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"),_Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _isArray=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js")),formatIfArray=function(a){return(0,_isArray["default"])(a)?"[".concat(a.map(function(a){return"\"".concat(a,"\"")}),"]"):"\"".concat(a,"\"")},_default=formatIfArray;exports["default"]=_default;

/***/ }),

/***/ "./node_modules/next-seo/lib/utils/markup.js":
/*!***************************************************!*\
  !*** ./node_modules/next-seo/lib/utils/markup.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");_Object$defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var markup=function(a){return{__html:a}},_default=markup;exports["default"]=_default;

/***/ }),

/***/ "./src/constant.ts":
/*!*************************!*\
  !*** ./src/constant.ts ***!
  \*************************/
/*! exports provided: const_site_url, const_site_title, const_site_description, seo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "const_site_url", function() { return const_site_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "const_site_title", function() { return const_site_title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "const_site_description", function() { return const_site_description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seo", function() { return seo; });
var const_site_url = 'https://deptno.github.io/map-subway-storage';
var const_site_title = '지하철 물품보관소(해피박스) 위치';
var const_site_description = "".concat(const_site_title, " \uCC3E\uAE30, \uC870\uD68C \uC11C\uBE44\uC2A4");
var seo = {
  title: const_site_title,
  description: const_site_description,
  canonical: const_site_url,
  openGraph: {
    url: const_site_url,
    title: const_site_title,
    description: const_site_description,
    images: [{
      url: [const_site_url, 'screenshot.png'].join('/'),
      width: 748,
      height: 1620,
      alt: const_site_url
    }],
    site_name: const_site_title
  }
};

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ul_UlHappyBoxes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ul/UlHappyBoxes */ "./src/components/ul/UlHappyBoxes.tsx");
/* harmony import */ var _context_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/map */ "./src/context/map.ts");
/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header/Header */ "./src/components/header/Header.tsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/bglee/workspace/src/github.com/deptno/map-subway-storage/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      boxes = _useState[0],
      setBoxes = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      mount = _useState2[0],
      setMount = _useState2[1];

  var map = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    if (mount) {
      return new kakao.maps.Map(document.getElementById('map'), {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      });
    }
  }, [mount]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch(location.pathname + 'static/json/storage.json').then(function (response) {
      return response.json();
    }).then(setBoxes);
    setMount(true);
  }, []);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('역을 선택하세요.'),
      station = _useState3[0],
      select = _useState3[1];

  return __jsx(_context_map__WEBPACK_IMPORTED_MODULE_3__["MapContext"].Provider, {
    value: map,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_6__["NextSeo"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _constant__WEBPACK_IMPORTED_MODULE_5__["seo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx("div", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "fixed ph3-ns w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_components_header_Header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("div", {
    className: "flex",
    style: {
      height: '300px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    id: "map",
    style: {
      width: '100%',
      height: '300px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx("div", {
    className: "ph3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("p", {
    className: "ph2 pv1 br2 bg-black white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, station))), __jsx("div", {
    className: "absolute overflow-scroll w-100 ph3",
    style: {
      height: 'calc(100vh - 350px)',
      top: '420px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_components_ul_UlHappyBoxes__WEBPACK_IMPORTED_MODULE_2__["UlHappyBoxes"], {
    data: boxes,
    station: station,
    onClick: select,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.a6e2ca79a76ebcfc2680.hot-update.js.map