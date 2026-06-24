/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dayjs/dayjs.min.js"
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
(module) {

eval("{!function(t,e){ true?module.exports=e():0}(this,(function(){\"use strict\";var t=1e3,e=6e4,n=36e5,r=\"millisecond\",i=\"second\",s=\"minute\",u=\"hour\",a=\"day\",o=\"week\",c=\"month\",f=\"quarter\",h=\"year\",d=\"date\",l=\"Invalid Date\",$=/^(\\d{4})[-/]?(\\d{1,2})?[-/]?(\\d{0,2})[Tt\\s]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?[.:]?(\\d+)?$/,y=/\\[([^\\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:\"en\",weekdays:\"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),months:\"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\"),ordinal:function(t){var e=[\"th\",\"st\",\"nd\",\"rd\"],n=t%100;return\"[\"+t+(e[(n-20)%10]||e[n]||e[0])+\"]\"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:\"\"+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?\"+\":\"-\")+m(r,2,\"0\")+\":\"+m(i,2,\"0\")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||\"\").toLowerCase().replace(/s$/,\"\")},u:function(t){return void 0===t}},g=\"en\",D={};D[g]=M;var p=\"$isDayjsObject\",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if(\"string\"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split(\"-\");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n=\"object\"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if(\"string\"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||\"0\").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate(\"s\"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v=\"set\"+(this.$u?\"UTC\":\"\");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+\"Hours\",0);case u:return $(v+\"Minutes\",1);case s:return $(v+\"Seconds\",2);case i:return $(v+\"Milliseconds\",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f=\"set\"+(this.$u?\"UTC\":\"\"),l=(n={},n[a]=f+\"Date\",n[d]=f+\"Date\",n[c]=f+\"Month\",n[h]=f+\"FullYear\",n[u]=f+\"Hours\",n[s]=f+\"Minutes\",n[i]=f+\"Seconds\",n[r]=f+\"Milliseconds\",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||\"YYYY-MM-DDTHH:mm:ssZ\",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,\"0\")},$=f||function(t,e,n){var r=t<12?\"AM\":\"PM\";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case\"YY\":return String(e.$y).slice(-2);case\"YYYY\":return b.s(e.$y,4,\"0\");case\"M\":return a+1;case\"MM\":return b.s(a+1,2,\"0\");case\"MMM\":return h(n.monthsShort,a,c,3);case\"MMMM\":return h(c,a);case\"D\":return e.$D;case\"DD\":return b.s(e.$D,2,\"0\");case\"d\":return String(e.$W);case\"dd\":return h(n.weekdaysMin,e.$W,o,2);case\"ddd\":return h(n.weekdaysShort,e.$W,o,3);case\"dddd\":return o[e.$W];case\"H\":return String(s);case\"HH\":return b.s(s,2,\"0\");case\"h\":return d(1);case\"hh\":return d(2);case\"a\":return $(s,u,!0);case\"A\":return $(s,u,!1);case\"m\":return String(u);case\"mm\":return b.s(u,2,\"0\");case\"s\":return String(e.$s);case\"ss\":return b.s(e.$s,2,\"0\");case\"SSS\":return b.s(e.$ms,3,\"0\");case\"Z\":return i}return null}(t)||i.replace(\":\",\"\")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[[\"$ms\",r],[\"$s\",i],[\"$m\",s],[\"$H\",u],[\"$W\",a],[\"$M\",c],[\"$y\",h],[\"$D\",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));\n\n//# sourceURL=webpack:///./node_modules/dayjs/dayjs.min.js?\n}");

/***/ },

/***/ "./src/styles/index.css"
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles/index.css?\n}");

/***/ },

/***/ "./src/scripts/api/api-config.js"
/*!***************************************!*\
  !*** ./src/scripts/api/api-config.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiConfig: () => (/* binding */ apiConfig)\n/* harmony export */ });\nconst apiConfig = {\r\n    baseURL: 'http://localhost:3333'\r\n}\n\n//# sourceURL=webpack:///./src/scripts/api/api-config.js?\n}");

/***/ },

/***/ "./src/scripts/api/api-operations.js"
/*!*******************************************!*\
  !*** ./src/scripts/api/api-operations.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteAppointment: () => (/* binding */ deleteAppointment),\n/* harmony export */   getAppointments: () => (/* binding */ getAppointments),\n/* harmony export */   newAppointment: () => (/* binding */ newAppointment)\n/* harmony export */ });\n/* harmony import */ var _api_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-config.js */ \"./src/scripts/api/api-config.js\");\n/* harmony import */ var _toast_notification_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toast-notification.js */ \"./src/scripts/toast-notification.js\");\n\r\n\r\n\r\n// Inserir novo agendamento no servidor\r\nasync function newAppointment(appointment) {\r\n    try {\r\n        const response = await fetch(`${_api_config_js__WEBPACK_IMPORTED_MODULE_0__.apiConfig.baseURL}/appointments`, {\r\n            method: 'POST',\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            },\r\n            body: JSON.stringify(appointment)\r\n        });\r\n        (0,_toast_notification_js__WEBPACK_IMPORTED_MODULE_1__.toastMsg)('Agendamento realizado!')\r\n    } catch (error) {\r\n        console.log(\"Deu ruim demais:\", error)\r\n        ;(0,_toast_notification_js__WEBPACK_IMPORTED_MODULE_1__.toastMsg)('Erro ao realizar agendamento!')\r\n    }\r\n}\r\n\r\n// Obter todos os agendamentos realidados ou em uma data específica\r\nasync function getAppointments(date) { //argumento opcional\r\n    try {\r\n        const response = await fetch(`${_api_config_js__WEBPACK_IMPORTED_MODULE_0__.apiConfig.baseURL}/appointments`);\r\n        let data = await response.json();\r\n        if (date) {\r\n            data = data.filter(appointment => {\r\n                return appointment.date === date;\r\n            });\r\n        }\r\n        return data\r\n    } catch (error) {\r\n        console.log(\"Deu ruim demais:\", error);\r\n    }\r\n}\r\n\r\n// remoção de um agendamento\r\nasync function deleteAppointment(id) {\r\n    try {\r\n        const response = await fetch(`${_api_config_js__WEBPACK_IMPORTED_MODULE_0__.apiConfig.baseURL}/appointments/${id}`, {\r\n            method: 'DELETE'\r\n        });\r\n        (0,_toast_notification_js__WEBPACK_IMPORTED_MODULE_1__.toastMsg)('Agendamento cancelado!');\r\n    } catch (error) {\r\n        console.log('Deu ruim:'), error;\r\n        (0,_toast_notification_js__WEBPACK_IMPORTED_MODULE_1__.toastMsg)('Erro ao cancelar agendamento');\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/scripts/api/api-operations.js?\n}");

/***/ },

/***/ "./src/scripts/appointmentOperations/addAppointment.js"
/*!*************************************************************!*\
  !*** ./src/scripts/appointmentOperations/addAppointment.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAppointment: () => (/* binding */ addAppointment),\n/* harmony export */   dateSelectInput: () => (/* binding */ dateSelectInput)\n/* harmony export */ });\n/* harmony import */ var _api_api_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api-operations.js */ \"./src/scripts/api/api-operations.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deleteAppointment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteAppointment.js */ \"./src/scripts/appointmentOperations/deleteAppointment.js\");\n/* harmony import */ var _toast_notification_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toast-notification.js */ \"./src/scripts/toast-notification.js\");\n\r\n\r\n\r\n\r\n\r\nconst dateSelectInput = document.querySelector('#date-select');\r\nconst listMorning = document.querySelector('.list-morning');\r\nconst listAfternoon = document.querySelector('.list-afternoon');\r\nconst listNight = document.querySelector('.list-night');\r\n\r\ndateSelectInput.onchange = (event) => {\r\n    try {\r\n        addAppointment(event.target.value);\r\n    } catch(error) {\r\n        (0,_toast_notification_js__WEBPACK_IMPORTED_MODULE_3__.toastMsg)('Erro ao carregar agendamentos!');\r\n    }\r\n}\r\n\r\ndateSelectInput.value = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYY-MM-DD');\r\n\r\nasync function addAppointment(date) {\r\n    clearAppointmentDOM();\r\n    const appointments = await (0,_api_api_operations_js__WEBPACK_IMPORTED_MODULE_0__.getAppointments)(date);\r\n    console.log(appointments)\r\n    // ordenação dos agendamentos com base na propriedade hour\r\n    appointments.sort((appointmentA, appointmentB) => appointmentA.hour > appointmentB.hour ? 1 : -1);\r\n    console.log(appointments)\r\n    appointments.forEach(item => {\r\n        addAppointmentDOM(item);\r\n    });\r\n    (0,_deleteAppointment_js__WEBPACK_IMPORTED_MODULE_2__.addEventBtnDelete)();\r\n    checkMsgEMpty();\r\n};\r\n\r\nfunction addAppointmentDOM(appointment) {\r\n    const li = document.createElement('li');\r\n    const p1 = document.createElement('p');\r\n    const p2 = document.createElement('p');\r\n    const btnDelete = document.createElement('button');\r\n    const hour = appointment.hour;\r\n    \r\n    btnDelete.dataset.id = appointment.id;\r\n    btnDelete.classList.add('btnDelete');\r\n    p1.innerText = hour;\r\n    p2.innerText = appointment.client;\r\n    li.append(p1, p2, btnDelete);\r\n\r\n    const numberHour = Number(hour.slice(0,2));\r\n    if (numberHour < 13) {\r\n        listMorning.append(li);\r\n    } else if (numberHour > 18) {\r\n        listNight.append(li);\r\n    } else {\r\n        listAfternoon.append(li);\r\n    };\r\n}\r\n\r\nfunction clearAppointmentDOM() {\r\n    listMorning.replaceChildren();\r\n    listNight.replaceChildren();\r\n    listAfternoon.replaceChildren();\r\n}\r\n\r\nfunction checkMsgEMpty() {\r\n    checkAppointmentLists(listMorning);\r\n    checkAppointmentLists(listNight);\r\n    checkAppointmentLists(listAfternoon);\r\n};\r\n\r\nfunction checkAppointmentLists(list) {\r\n    if (list.children.length) {\r\n        list.previousElementSibling.hidden = true;\r\n        list.style.padding = '20px';\r\n    } else {\r\n        list.previousElementSibling.hidden = false;\r\n        list.style.padding = '0px';\r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/scripts/appointmentOperations/addAppointment.js?\n}");

/***/ },

/***/ "./src/scripts/appointmentOperations/deleteAppointment.js"
/*!****************************************************************!*\
  !*** ./src/scripts/appointmentOperations/deleteAppointment.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addEventBtnDelete: () => (/* binding */ addEventBtnDelete)\n/* harmony export */ });\n/* harmony import */ var _api_api_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api-operations.js */ \"./src/scripts/api/api-operations.js\");\n/* harmony import */ var _form_inputs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/inputs.js */ \"./src/scripts/form/inputs.js\");\n/* harmony import */ var _form_validationInputsHours_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form/validationInputsHours.js */ \"./src/scripts/form/validationInputsHours.js\");\n/* harmony import */ var _addAppointment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addAppointment.js */ \"./src/scripts/appointmentOperations/addAppointment.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// função de adicionar evento para deletar o agendamento é executada no momneto em que os agendamentos são carregados na tela\r\nfunction addEventBtnDelete() {\r\n\r\n    const btnDeteleList = document.querySelectorAll('.btnDelete');\r\n\r\n    btnDeteleList.forEach(btn => btn.onclick = async () => {\r\n        const id = btn.dataset.id;\r\n        await (0,_api_api_operations_js__WEBPACK_IMPORTED_MODULE_0__.deleteAppointment)(id);\r\n        (0,_addAppointment_js__WEBPACK_IMPORTED_MODULE_3__.addAppointment)(_addAppointment_js__WEBPACK_IMPORTED_MODULE_3__.dateSelectInput.value);\r\n        (0,_form_validationInputsHours_js__WEBPACK_IMPORTED_MODULE_2__.validationHours)();\r\n        \r\n         testInputHourDisable(btn)\r\n\r\n\r\n    });\r\n}\r\n\r\n// descobre se tem ou não que reativar o input hour\r\nfunction testInputHourDisable(btn) {\r\n    const hour = btn.previousElementSibling.previousElementSibling.innerText;\r\n    if(_form_inputs_js__WEBPACK_IMPORTED_MODULE_1__.dateInput.value === _addAppointment_js__WEBPACK_IMPORTED_MODULE_3__.dateSelectInput.value) {\r\n        _form_inputs_js__WEBPACK_IMPORTED_MODULE_1__.hoursInputs.forEach(inputRadio => {\r\n            if(inputRadio.closest('label').innerText === hour) {\r\n                inputRadio.disabled = false;\r\n                console.log(inputRadio)\r\n            };\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/scripts/appointmentOperations/deleteAppointment.js?\n}");

/***/ },

/***/ "./src/scripts/form/inputs.js"
/*!************************************!*\
  !*** ./src/scripts/form/inputs.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dateInput: () => (/* binding */ dateInput),\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   hoursInputs: () => (/* binding */ hoursInputs),\n/* harmony export */   nameClientInput: () => (/* binding */ nameClientInput)\n/* harmony export */ });\nconst form = document.querySelector('form');\r\nconst dateInput = document.querySelector('#appointment-date');\r\nconst hoursInputs = document.querySelectorAll('input[type=\"radio\"]');\r\nconst nameClientInput = document.querySelector('#name-client');\r\n\r\n\n\n//# sourceURL=webpack:///./src/scripts/form/inputs.js?\n}");

/***/ },

/***/ "./src/scripts/form/submit.js"
/*!************************************!*\
  !*** ./src/scripts/form/submit.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputs */ \"./src/scripts/form/inputs.js\");\n/* harmony import */ var _api_api_operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api-operations.js */ \"./src/scripts/api/api-operations.js\");\n/* harmony import */ var _appointmentOperations_addAppointment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appointmentOperations/addAppointment.js */ \"./src/scripts/appointmentOperations/addAppointment.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _toast_notification_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toast-notification.js */ \"./src/scripts/toast-notification.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n_inputs__WEBPACK_IMPORTED_MODULE_0__.form.onsubmit = async (event) => {\r\n    event.preventDefault();\r\n    const hourInput = document.querySelector('input[type=\"radio\"]:checked');\r\n    if (!hourInput){\r\n        return (0,_toast_notification_js__WEBPACK_IMPORTED_MODULE_4__.toastMsg)('Escolha um horário para agendamento!')\r\n    }\r\n    const name = _inputs__WEBPACK_IMPORTED_MODULE_0__.nameClientInput.value.trim();\r\n    if (!name) {\r\n        return (0,_toast_notification_js__WEBPACK_IMPORTED_MODULE_4__.toastMsg)('Informe o nome do cliente!')\r\n    }\r\n    const appointment = {\r\n        id: Date.now().toString(),\r\n        client: name,\r\n        date: _inputs__WEBPACK_IMPORTED_MODULE_0__.dateInput.value,\r\n        hour: hourInput.value\r\n    };\r\n    console.log('Agendamento:', appointment);\r\n    await (0,_api_api_operations_js__WEBPACK_IMPORTED_MODULE_1__.newAppointment)(appointment);\r\n    await (0,_api_api_operations_js__WEBPACK_IMPORTED_MODULE_1__.getAppointments)();\r\n    hourInput.disabled = true;\r\n    _inputs__WEBPACK_IMPORTED_MODULE_0__.form.reset();\r\n    _inputs__WEBPACK_IMPORTED_MODULE_0__.dateInput.value = appointment.date;\r\n    (0,_appointmentOperations_addAppointment_js__WEBPACK_IMPORTED_MODULE_2__.addAppointment)(_appointmentOperations_addAppointment_js__WEBPACK_IMPORTED_MODULE_2__.dateSelectInput.value);\r\n}\n\n//# sourceURL=webpack:///./src/scripts/form/submit.js?\n}");

/***/ },

/***/ "./src/scripts/form/validationInputsHours.js"
/*!***************************************************!*\
  !*** ./src/scripts/form/validationInputsHours.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   avaliableHours: () => (/* binding */ avaliableHours),\n/* harmony export */   validationHours: () => (/* binding */ validationHours)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputs */ \"./src/scripts/form/inputs.js\");\n/* harmony import */ var _api_api_operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api-operations.js */ \"./src/scripts/api/api-operations.js\");\n\r\n\r\n\r\n\r\nconst dateNow = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();\r\nconst dateNowFormat = dateNow.format('YYYY-MM-DD');\r\n\r\n// determina o valor mínimo e atual do input date\r\n_inputs__WEBPACK_IMPORTED_MODULE_1__.dateInput.value = dateNowFormat;\r\n_inputs__WEBPACK_IMPORTED_MODULE_1__.dateInput.min = dateNowFormat;\r\n\r\n_inputs__WEBPACK_IMPORTED_MODULE_1__.dateInput.onchange = () => {\r\n    validationHours();\r\n    clearInputsRadio();\r\n    avaliableHours();\r\n};\r\n\r\nfunction validationHours() {\r\n    console.log('função validationHours executada')\r\n    const dateInputFormat = _inputs__WEBPACK_IMPORTED_MODULE_1__.dateInput.value;\r\n    if (dateNowFormat === dateInputFormat){\r\n        _inputs__WEBPACK_IMPORTED_MODULE_1__.hoursInputs.forEach((input) => {\r\n            const numberHourNow = Number(dateNow.format('HH'));\r\n            const numberHour = Number(input.closest('label').innerText.slice(0, 2));\r\n            if(numberHourNow >= numberHour) {\r\n                input.disabled = true;\r\n            };\r\n        });\r\n    } else {\r\n        _inputs__WEBPACK_IMPORTED_MODULE_1__.hoursInputs.forEach((input) => {\r\n            input.disabled = false\r\n        });\r\n    };\r\n};\r\n\r\n// desativa os inputs hours de acordo com a presença dos agendamentos no servidor\r\nasync function avaliableHours() {\r\n    const appointmentsToday = await (0,_api_api_operations_js__WEBPACK_IMPORTED_MODULE_2__.getAppointments)(_inputs__WEBPACK_IMPORTED_MODULE_1__.dateInput.value);\r\n    appointmentsToday.forEach(item => {\r\n        document.querySelector(`input[type='radio'][value='${item.hour}']`).disabled = true;\r\n    })\r\n}\r\n\r\nfunction clearInputsRadio() {\r\n    _inputs__WEBPACK_IMPORTED_MODULE_1__.hoursInputs.forEach(input => input.checked = false);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/scripts/form/validationInputsHours.js?\n}");

/***/ },

/***/ "./src/scripts/load.js"
/*!*****************************!*\
  !*** ./src/scripts/load.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_validationInputsHours_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form/validationInputsHours.js */ \"./src/scripts/form/validationInputsHours.js\");\n/* harmony import */ var _appointmentOperations_addAppointment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointmentOperations/addAppointment.js */ \"./src/scripts/appointmentOperations/addAppointment.js\");\n/* harmony import */ var _toast_notification_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast-notification.js */ \"./src/scripts/toast-notification.js\");\n\r\n\r\n\r\n\r\nconst btnSubmit = document.querySelector('#btn-create-appointment');\r\n\r\nwindow.addEventListener('load', async (event) =>{\r\n    try {\r\n        (0,_form_validationInputsHours_js__WEBPACK_IMPORTED_MODULE_0__.validationHours)();\r\n        (0,_form_validationInputsHours_js__WEBPACK_IMPORTED_MODULE_0__.avaliableHours)();\r\n        await (0,_appointmentOperations_addAppointment_js__WEBPACK_IMPORTED_MODULE_1__.addAppointment)(_appointmentOperations_addAppointment_js__WEBPACK_IMPORTED_MODULE_1__.dateSelectInput.value);\r\n        btnSubmit.disabled = false;\r\n    } catch (error) {\r\n        (0,_toast_notification_js__WEBPACK_IMPORTED_MODULE_2__.toastMsg)('Erro ao carregar agendamentos!');\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/scripts/load.js?\n}");

/***/ },

/***/ "./src/scripts/main.js"
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_validationInputsHours_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form/validationInputsHours.js */ \"./src/scripts/form/validationInputsHours.js\");\n/* harmony import */ var _form_submit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form/submit.js */ \"./src/scripts/form/submit.js\");\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load.js */ \"./src/scripts/load.js\");\n/* harmony import */ var _appointmentOperations_addAppointment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointmentOperations/addAppointment.js */ \"./src/scripts/appointmentOperations/addAppointment.js\");\n/* harmony import */ var _appointmentOperations_deleteAppointment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appointmentOperations/deleteAppointment.js */ \"./src/scripts/appointmentOperations/deleteAppointment.js\");\n/* harmony import */ var _toast_notification_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toast-notification.js */ \"./src/scripts/toast-notification.js\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/index.css */ \"./src/styles/index.css\");\n// JavaScript\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Style CSS\r\n\n\n//# sourceURL=webpack:///./src/scripts/main.js?\n}");

/***/ },

/***/ "./src/scripts/toast-notification.js"
/*!*******************************************!*\
  !*** ./src/scripts/toast-notification.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toastMsg: () => (/* binding */ toastMsg)\n/* harmony export */ });\nconst msgToastContainer = document.querySelector('.msg-toast');\r\nconst btnToast = document.querySelector('.close-toast');\r\n\r\n// -------------------- toast msg -----------------\r\nlet toastTimeout;\r\n\r\nfunction toastMsg(msg) {\r\n    msgToastContainer.innerText = msg;\r\n    const toastContainer = msgToastContainer.closest('.toast-notification');\r\n    toastContainer.classList.remove('toast-off');\r\n    clearTimeout(toastTimeout);\r\n    toastTimeout = setTimeout(() => {\r\n        toastContainer.classList.add('toast-off');\r\n    }, 6000);\r\n}\r\n\r\n// --------------- button close of toast ----------------\r\nbtnToast.addEventListener('click', () => {\r\n    btnToast.closest('aside').classList.add('toast-off')\r\n})\r\n\r\nfunction generateRandomNumber(min, max) {\r\n    return Math.floor(Math.random() * (max - min + 1)) + min;\r\n};\n\n//# sourceURL=webpack:///./src/scripts/toast-notification.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;