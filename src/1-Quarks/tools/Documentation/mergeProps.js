/*******************************************************************
  Documentation - Merge Props
  from Vuikit Docs - https://github.com/Skullbock/vuikit-docs
********************************************************************/
import { each, isPlainObject, isArray } from '../../_js/helpers/utils'
import { pick } from 'lodash'

// -- Merge Props (DOCS)
export function merge (target) {
  const args = Array.prototype.slice.call(arguments, 1)
  args.forEach((source) => {
    _merge(target, source, true)
  })
  return target
}

function _merge (target, source, deep) {
  for (var key in source) {
    if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
      if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
        target[key] = {}
      }
      if (isArray(source[key]) && !isArray(target[key])) {
        target[key] = []
      }
      _merge(target[key], source[key], deep)
    } else if (source[key] !== undefined) {
      target[key] = source[key]
    }
  }
}

export function mergeProps (compProps, pageProps) {
  // we only want to pick declared props
  let pickedProps = pick(compProps, Object.keys(pageProps))
  // merge the new properties
  const props = merge({}, pickedProps, pageProps)
  each(props, prop => {
    prop.type = stringifyPropType(prop.type)
    prop.default = stringifyPropDefault(prop.default)
  })
  return props
}

function stringifyPropType (type) {
  if (isArray(type)) {
    type = type.map(t => t.name).join(', ')
  } else if (type && type.name) {
    type = type.name
  }
  return type || '*'
}

function stringifyPropDefault (def) {
  return def && typeof def === 'function'
    ? def.call()
    : def
}
