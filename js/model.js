
const getApiURL = (apiHostname, resourceName, resourceId) => {
    return `https://${apiHostname}/api/${resourceName}/${resourceId}`
  }
  
  const getResourceURL = (resourceName, resourceId) => {
    return getApiURL('localhost:3000', resourceName, resourceId)
  }
  
  const getUserURL = userId => {
    return getResourceURL('users', userId)
  }
  
  const getOrderURL = orderId => {
    return getResourceURL('orders', orderId)
  }
  
  const getProductURL = productId => {
    return getResourceURL('products', productId)
  }