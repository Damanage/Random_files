const {bind}= _;
class Button extends React.Component{
	clickMachine(e){console.log('work')}
	
	
	render(){
		return React.createElement('button',{
			onClick:(e)=>this.clickMachine(e)
		},"Button bich!")
	}
}
//Без оптимизации стандартный метод


class ButtonO extends React.Component{
		constructor(props){
			super(props);
			this.clickMachine = bind(this.clickMachine, this); 
		}
	
		clickMachine(e){console.log('work with optimization')}
	
	
	render(){
		return React.createElement('button',{
			onClick:this.clickMachine
		},"Button bich v2!")
	}
}
//Грошевая оптимизация

ReactDOM.render(React.createElement(ButtonO,{}), document.getElementById('root'))


