import { orderDetails } from "../data/data"

const getOrderInfo = () => {
  return new Promise((resolve, reject) => {
    orderDetails.cart = orderDetails.cart.map(item => {
      return {
        ...item,
        originalPrice: item.originalPrice || item.price,
        originalQuantity: item.originalQuantity || item.quantity,
        uuid: crypto.randomUUID()
      }
    })
    setTimeout(() => {
      resolve(orderDetails)
    }, 1500);
  })
}
export default getOrderInfo