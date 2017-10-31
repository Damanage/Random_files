const DOM = React.DOM;

const name = 'Joe'
const container = (props) => (
  React.createElement(
    'div',
    {className:'first'},
    `Some text and hi ${name}`,
    props.children)
);
const sContainer = () =>(
  React.createElement(container,
      React.createElement('div',{className: 'second'}))
)

ReactDOM.render(React.createElement(sContainer), document.getElementById('app'))


const List = (x) => (
  React.createElement(
    'ul',
    {className:'list'},
    x.children
  )
);
const ListItem = ({ name, sname })=>(
  React.createElement(List,{},
                      
              React.createElement(
                'li',
                {className:'listItem'},
                `${name}`),
                      
                     
              React.createElement(
                'li',
                {className:'listItem'},
                `${sname}`))
);

ReactDOM.render(React.createElement(ListItem, {name:'epicon', sname:'anal'} ), document.getElementById('apps'))
