export default ({ app }, inject) => {
  const restToEndpoint = (restPath) => {
    const methodArray = ['GET', 'GET', 'POST', 'PUT', 'DELETE']
    const resultEndpoint = []
    methodArray.forEach((method, i) => {
      const rest = {
        index: i,
        endpoint: (method.includes('GET') && i === 1) || method.includes('PUT') || method.includes('DELETE') ? restPath + '/{id}' : restPath,
        method,
        parameter: '-'
      }

      resultEndpoint.push(rest)
    })
    return resultEndpoint
  }
  inject('convertRestToEndpoint', restToEndpoint)
}
