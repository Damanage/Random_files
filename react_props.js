class BlogList extends React.Component{
	render(){
		return React.createElement(
			'div',{className:'blogList'},
			
			React.createElement(BlogItem,
				  {image: {
						src:'https://zooclub.ru/attach/15000/15607.jpg',
						width: '200px',
						title: 'Horse',
						alt: 'Horse must be there'
						  },
					 text: 'Horses are beautyful'
					}
						),
			
			React.createElement(BlogItem,
					{image:{
						src:'https://img.buzzfeed.com/store-an-image-prod-us-east-1/Skiy3MyD-.png?output-format=jpg?output-format=jpg&downsize=660:*&output-quality=auto',
						width: '200px',
						title: 'Donkey',
						alt: 'Donkey must be there'
						},
					 text: 'Donkey are cool'
					}
						)
			
				  );
				};
}


class BlogItem extends React.Component{
	render(){
		return React.createElement(
				'div', 
				{className:'blogItem'},
				React.createElement(Image,
					assign({}, this.props)
			),
			  React.createElement(TextImage,
					assign({}, this.props)
			)
		)
	}
}

class Image extends React.Component{

	
		 render(){
			 const {image} = this.props;
			 
			 return React.createElement('img', image)
		 }
}

class TextImage extends React.Component{
	render(){
		const {text} = this.props;
		
		return React.createElement('span',{className:'text'}, text)
	}
}

ReactDOM.render(React.createElement(BlogList), document.getElementById('root'))