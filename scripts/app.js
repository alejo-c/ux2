const getElementById = id => document.querySelector(`#${id}`)

const getElementsByClass = _class => document.querySelectorAll(`.${_class}`)

const addEvent = (element, type, action) => element.addEventListener(type, action)

const isNumber = string => !isNaN(string) && !isNaN(parseFloat(string))

const format = (string, value) => string.replace('{}', value)

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const toCOPCurrency = num => num.toLocaleString('es-CO',
	{ style: 'currency', currency: 'COP' }
).replace(',00', '')

const setProperty = (name, value) => document.documentElement.style.setProperty(name, value)
