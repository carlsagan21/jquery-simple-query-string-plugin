(function ($) {
  $.QueryString = (function (splitedParams) {
    if (splitedParams === '') return {}
    let result = {}
    splitedParams.forEach(param => {
      const indexOfEqual = param.indexOf('=')
      const key = param.slice(0, indexOfEqual)
      const value = decodeURIComponent(param.slice(indexOfEqual + 1).replace(/\+/g, ' '))
      result = {
        ...result,
        [key]: value
      }
    })
    return result
  })(window.location.search.substr(1).split('&'))
})(jQuery)
