const getParamByRegex = (regex: RegExp): any => {
  const url = window.location.href
  const match = url.match(regex)

  return match ? match[1] : undefined
}

export const getParam = (param): any =>
  param && getParamByRegex(new RegExp(`[\?|&]${param}=([\\w-]+)`))
