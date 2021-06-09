const getParamByRegex = (regex: RegExp): string | undefined => {
  const url = window.location.href
  const match = url.match(regex)

  return match ? match[1] : undefined
}

export const getParam = (param: string): string =>
  param && getParamByRegex(new RegExp(`[\?|&]${param}=([\\w-]+)`))
