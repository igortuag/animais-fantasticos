/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Accordion\n/* harmony export */ });\nclass Accordion {\r\n  constructor(list) {\r\n    this.accordionList = document.querySelectorAll(list);\r\n    this.activeClass = 'ativo';\r\n  }\r\n\r\n  toggleAccordion(item) {\r\n    item.classList.toggle(this.activeClass);\r\n    item.nextElementSibling.classList.toggle(this.activeClass);\r\n  }\r\n\r\n  // adicionar os eventos ao accordion\r\n  addAccordionEvent() {\r\n    this.accordionList.forEach((item) => {\r\n      item.addEventListener('click', () => this.toggleAccordion(item));\r\n    });\r\n  }\r\n\r\n  // Iniciar função\r\n  init() {\r\n    if (this.accordionList.length) {\r\n      // Ativar primeiro item\r\n      this.toggleAccordion(this.accordionList[0]);\r\n      this.addAccordionEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ AnimaNumeros\n/* harmony export */ });\nclass AnimaNumeros {\r\n  constructor(numeros, observerTarget, observerClass) {\r\n    this.numeros = document.querySelectorAll(numeros);\r\n    this.observerTarget = document.querySelector(observerTarget);\r\n    this.observerClass = observerClass;\r\n\r\n    // bind o this do objeto ao callback da mutação\r\n    this.handleMutation = this.handleMutation.bind(this);\r\n  }\r\n\r\n  // Recebe um elemento do dom, com número em seu texto\r\n  // incrementa de zero até o numero final\r\n  static incrementarNumero(numero) {\r\n    const total = +numero.innerText;\r\n    const incremento = Math.floor(total / 100);\r\n\r\n    let start = 0;\r\n    const timer = setInterval(() => {\r\n      start += incremento;\r\n      numero.innerText = start;\r\n      if (start > total) {\r\n        numero.innerText = total;\r\n        clearInterval(timer);\r\n      }\r\n    }, 25 * Math.random());\r\n  }\r\n\r\n  // Ativa incrementar número para cadastra\r\n  // número selecionado do dom\r\n  animaNumeros() {\r\n    this.numeros.forEach((numero) =>\r\n      this.constructor.incrementarNumero(numero)\r\n    );\r\n  }\r\n\r\n  // Função que ocorre quando a mutações ocorrer\r\n  handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains(this.observerClass)) {\r\n      this.observer.disconnect();\r\n      this.animaNumeros();\r\n    }\r\n  }\r\n\r\n  // Adiciona o MutationObserver para verificar\r\n  // quanto a classe ativo é adiciona ao element target\r\n  addMutationObserver() {\r\n    this.observer = new MutationObserver(this.handleMutation);\r\n    this.observer.observe(this.observerTarget, { attributes: true });\r\n  }\r\n\r\n  init() {\r\n    if (this.numeros.length && this.observerTarget) {\r\n      this.addMutationObserver();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ outsideClick\n/* harmony export */ });\nfunction outsideClick(callback, delay) {\n  let timer;\n  return (...args) => {\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(() => {\n      callback(...args);\n      timer = null;\n    }, delay);\n  };\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/dropdownMenu.js":
/*!************************************!*\
  !*** ./js/modules/dropdownMenu.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initDropdownMenu\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n\n\nfunction initDropdownMenu() {\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]');\n\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add('active');\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__.default)(this, ['touchstart', 'click'], () => {\n      this.classList.remove('active');\n    });\n  }\n\n  if (dropdownMenus) {\n    dropdownMenus.forEach((menu) => {\n      ['touchstart', 'click'].forEach((userEvent) => {\n        menu.addEventListener(userEvent, handleClick);\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdownMenu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ fetchAnimais\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction fetchAnimais(url, target) {\r\n  // Cria a div contendo informações\r\n  // Com o total de animais\r\n  function createAnimal(animal) {\r\n    const div = document.createElement('div');\r\n    div.classList.add('numero-animal');\r\n\r\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\r\n\r\n    return div;\r\n  }\r\n\r\n  // Anima os números de cada animal\r\n  function animaAnimaisNumeros() {\r\n    const animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__.default('[data-numero]', '.numeros', 'ativo');\r\n    animaNumeros.init();\r\n  }\r\n\r\n  // Preenche cada animal no DOM\r\n  const numerosGrid = document.querySelector(target);\r\n  function preencherAnimais(animal) {\r\n    const divAnimal = createAnimal(animal);\r\n    numerosGrid.appendChild(divAnimal);\r\n  }\r\n\r\n  // Puxa os animais através de um arquivo json\r\n  // e cria cada animal utilizando createAnimal\r\n  async function criarAnimais() {\r\n    try {\r\n      // Fetch e espera resposta e transforma em json\r\n      const animaisResponse = await fetch(url);\r\n      const animaisJSON = await animaisResponse.json();\r\n\r\n      // Após a transformação de json, ativa as funções\r\n      // para preencher e animas os números\r\n      animaisJSON.forEach((animal) => {\r\n        preencherAnimais(animal);\r\n      });\r\n\r\n      animaAnimaisNumeros();\r\n    } catch (error) {\r\n      console.log(Error(error));\r\n    }\r\n  }\r\n\r\n  return criarAnimais();\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ fetchBitcoin\n/* harmony export */ });\nfunction fetchBitcoin(url, target) {\r\n  fetch(url)\r\n    .then((response) => response.json())\r\n    .then((bitcoin) => {\r\n      const btcPreco = document.querySelector(target);\r\n      btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);\r\n    })\r\n    .catch((err) => {\r\n      console.log(Error(err));\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initFuncionamento\n/* harmony export */ });\nfunction initFuncionamento() {\n  const funcionamento = document.querySelector('[data-semana]');\n\n  if (funcionamento) {\n    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);\n    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\n\n    const dataAgora = new Date();\n    const diaAgora = dataAgora.getDay();\n    const horarioAgora = dataAgora.getHours();\n\n    const semanaAberto = diasSemana.includes(diaAgora);\n    const horarioAberto =\n      horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\n\n    semanaAberto && horarioAberto && funcionamento.classList.add('aberto');\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initMenuMobile\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n\n\nfunction initMenuMobile() {\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\n  const menuList = document.querySelector('[data-menu=\"list\"]');\n  const eventos = ['click', 'touchstart'];\n\n  function openMenu() {\n    menuList.classList.add('active');\n    menuButton.classList.add('active');\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__.default)(menuList, eventos, () => {\n      menuList.classList.remove('active');\n      menuButton.classList.remove('active');\n    });\n  }\n\n  if (menuButton && menuList) {\n    eventos.forEach((userEvent) => {\n      menuButton.addEventListener(userEvent, openMenu);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Modal\n/* harmony export */ });\nclass Modal {\r\n  constructor(botaoAbrir, botaoFechar, containerModal) {\r\n    this.botaoAbrir = document.querySelector(botaoAbrir);\r\n    this.botaoFechar = document.querySelector(botaoFechar);\r\n    this.containerModal = document.querySelector(containerModal);\r\n\r\n    // Bind this ao callback para fazer referencia ao objeto da classe\r\n    this.eventToggleModal = this.eventToggleModal.bind(this);\r\n    this.clickForamModal = this.clickForamModal.bind(this);\r\n  }\r\n\r\n  // abre ou fecha o modal\r\n  toggleModal() {\r\n    this.containerModal.classList.toggle('ativo');\r\n  }\r\n\r\n  // adiciona o evento de toggle ao modal\r\n  eventToggleModal(event) {\r\n    event.preventDefault();\r\n    this.toggleModal();\r\n  }\r\n\r\n  // fecha o modal ao clicar do lado de fora\r\n  clickForamModal(event) {\r\n    if (event.target === this.containerModal) this.toggleModal();\r\n  }\r\n\r\n  // adiciona os eventos aos elementos do modal\r\n  addModalEvents() {\r\n    this.botaoAbrir.addEventListener('click', this.eventToggleModal);\r\n    this.botaoFechar.addEventListener('click', this.eventToggleModal);\r\n    this.containerModal.addEventListener('click', this.clickForamModal);\r\n  }\r\n\r\n  init() {\r\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\r\n      this.addModalEvents();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideClick.js":
/*!************************************!*\
  !*** ./js/modules/outsideClick.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ outsideClick\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = \"data-outside\";\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => {\n        html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, \"\");\n  }\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outsideClick.js?");

/***/ }),

/***/ "./js/modules/scroll-anima.js":
/*!************************************!*\
  !*** ./js/modules/scroll-anima.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ ScrollAnima\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\r\n\r\nclass ScrollAnima {\r\n  constructor(sections) {\r\n    this.sections = document.querySelectorAll(sections);\r\n    this.windowMetade = window.innerHeight * 0.6;\r\n\r\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.default)(this.checkDistance.bind(this), 50);\r\n  }\r\n\r\n  // Pega a distância de cada item em relação ao topo do site\r\n  getDistance() {\r\n    this.distance = [...this.sections].map((section) => {\r\n      const offset = section.offsetTop;\r\n      return {\r\n        element: section,\r\n        offset: Math.floor(offset - this.windowMetade),\r\n      };\r\n    });\r\n  }\r\n\r\n  // Verifica a distância em cada objeto em relação ao scroll do site\r\n  checkDistance() {\r\n    console.log('teste');\r\n    this.distance.forEach((item) => {\r\n      if (window.pageYOffset > item.offset) {\r\n        item.element.classList.add('ativo');\r\n      } else if (item.element.classList.contains('ativo')) {\r\n        item.element.classList.remove('ativo');\r\n      }\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.sections.length) {\r\n      this.getDistance();\r\n      this.checkDistance();\r\n      window.addEventListener('scroll', this.checkDistance);\r\n    }\r\n    return this;\r\n  }\r\n\r\n  // Remove o event de scroll\r\n  stop() {\r\n    window.removeEventListener('scroll', this.checkDistance);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-anima.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ ScrollSuave\n/* harmony export */ });\nclass ScrollSuave {\r\n  constructor(links, options) {\r\n    this.linksInternos = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = {\r\n        behavior: 'smooth',\r\n        block: 'start',\r\n      };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n    this.scrollToSection = this.scrollToSection.bind(this);\r\n  }\r\n\r\n  scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute('href');\r\n    const section = document.querySelector(href);\r\n\r\n    section.scrollIntoView(this.options);\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.linksInternos.forEach((link) => {\r\n      link.addEventListener('click', this.scrollToSection);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.linksInternos.length) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ TabNav\n/* harmony export */ });\nclass TabNav {\r\n  constructor(menu, content) {\r\n    this.tabMenu = document.querySelectorAll(menu);\r\n    this.tabContent = document.querySelectorAll(content);\r\n    this.activeClass = 'ativo';\r\n  }\r\n\r\n  // Ativa a tab de acordo com o index da mesma\r\n  activeTab(index) {\r\n    this.tabContent.forEach((section) => {\r\n      section.classList.remove(this.activeClass); \r\n    });\r\n    const direcao = this.tabContent[index].dataset.anime;\r\n    this.tabContent[index].classList.add(this.activeClass, direcao);\r\n  }\r\n\r\n  // Adiciona os eventos nas tabs\r\n  addTabNavEvent() {\r\n    this.tabMenu.forEach((itemMenu, index) => {\r\n      itemMenu.addEventListener('click', () => this.activeTab(index));\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tabMenu.length && this.tabContent.length) {\r\n      // Ativar primeiro item\r\n      this.activeTab(0);\r\n      this.addTabNavEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Tooltip\n/* harmony export */ });\nclass Tooltip {\r\n  constructor(tooltips) {\r\n    this.tooltips = document.querySelectorAll(tooltips);\r\n\r\n    // bind do objeto da classe aos callbacks\r\n    this.onMouseMove = this.onMouseMove.bind(this);\r\n    this.onMouseLeave = this.onMouseLeave.bind(this);\r\n    this.onMouseOver = this.onMouseOver.bind(this);\r\n  }\r\n\r\n  // Move a tooltip com base em seus estilos de acordo com a posição do mouse\r\n  onMouseMove(event) {\r\n    this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n    if (event.pageX + 240 > window.innerWidth) {\r\n      this.tooltipBox.style.left = `${event.pageX - 240}px`;\r\n    } else {\r\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n    }\r\n  }\r\n\r\n  // Remove a tooltip e os eventos de mouse move e mouseleave\r\n  onMouseLeave({ currentTarget }) {\r\n    this.tooltipBox.remove();\r\n    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);\r\n    currentTarget.removeEventListener('mousemove', this.onMouseMove);\r\n  }\r\n\r\n  // Cria a tooltip e adiciona os eentos de mouse e mouse leave ao target\r\n  criarTooltipBox(element) {\r\n    const tooltipBox = document.createElement('div');\r\n    const text = element.getAttribute('aria-label');\r\n    tooltipBox.classList.add('tooltip');\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    this.tooltipBox = tooltipBox;\r\n  }\r\n\r\n  // Cria a tootip box e coloca no body\r\n  onMouseOver({ currentTarget }) {\r\n    // cria a tooltipbox e coloca em uma propriedade\r\n    this.criarTooltipBox(event.currentTarget);\r\n\r\n    currentTarget.addEventListener('mousemove', this.onMouseMove);\r\n    currentTarget.addEventListener('mouseleave', this.onMouseLeave);\r\n  }\r\n\r\n  // Adiciona os eventos de mouse over a cada tooltip\r\n  addTooltipsEvent() {\r\n    this.tooltips.forEach((item) => {\r\n      item.addEventListener('mouseover', this.onMouseOver);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tooltips.length) {\r\n      this.addTooltipsEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dropdownMenu.js */ \"./js/modules/dropdownMenu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll-anima.js */ \"./js/modules/scroll-anima.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_4__.default('[data-menu=\"suave\"] a[href^=\"#\"]');\r\nscrollSuave.init();\r\n\r\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_5__.default(\"[data-anime='accordion'] dt\");\r\naccordion.init();\r\n\r\nconst tabNav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_6__.default(\r\n  \"[data-tab='menu'] li\",\r\n  \"[data-tab='content'] section\"\r\n);\r\ntabNav.init();\r\n\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_7__.default(\r\n  '[data-modal=\"abrir\"]',\r\n  '[data-modal=\"fechar\"]',\r\n  '[data-modal=\"container\"]'\r\n);\r\nmodal.init();\r\n\r\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_8__.default('[data-tooltip]');\r\ntooltip.init();\r\n\r\nconst scrollAnima = new _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_3__.default('[data-anime=\"scroll\"]');\r\nscrollAnima.init();\r\n\r\n(0,_modules_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__.default)();\r\n\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_0__.default)('../../animaisapi.json', '.numeros-grid');\r\n\r\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__.default)('https://blockchain.info/ticker', '.btc-preco');\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;