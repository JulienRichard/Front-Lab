/*******************************************************************
   Documentation - Utility functions
   from Vuikit Docs - https://github.com/Skullbock/vuikit-docs
********************************************************************/
// -- isObject
export function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

// -- isPlainObject
export function isPlainObject (obj) {
  return isObject(obj) && Object.getPrototypeOf(obj) === Object.prototype
}

// -- isString
export function isString (val) {
  return typeof val === 'string'
}

// -- isArray
export const isArray = Array.isArray

export function inArray (array, value) {
  return (array || []).indexOf(value) !== -1
}

// -- Each
export function each (obj, iterator) {
  var i, key
  if (typeof obj.length === 'number') {
    for (i = 0; i < obj.length; i++) {
      iterator.call(obj[i], obj[i], i)
    }
  } else if (isObject(obj)) {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        iterator.call(obj[key], obj[key], key)
      }
    }
  }
  return obj
}
