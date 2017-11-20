const Price = ({price, discount}) => (
	
  React.createElement('div',{}, 
										 
										 discount ? React.createElement('span',{},
																										 `Цена вместе со скидосиком: ${price-price*discount/100} песос`)
															: React.createElement('div', {}, 
																				 `цена: ${price} песос`),
										 )
)
Price.defaultProps = {price: 12,
										 discount: 10};
// Price.propTypes = {
// 	price: PropTypes.number,
// 	discount: PropTypes.number
// };
ReactDOM.render(React.createElement(Price, {price: 17, discount: 2}), document.getElementById('root'))