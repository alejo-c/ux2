const getElementById = id => document.querySelector(`#${id}`)

const getElementsByClass = _class => document.querySelectorAll(`.${_class}`)

const addEvent = (element, type, action) => element.addEventListener(type, action)

const isNumber = string => !isNaN(string) && !isNaN(parseFloat(string))

const format = (string, value) => string.replace('{}', value)