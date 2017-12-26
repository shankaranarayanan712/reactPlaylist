var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var _ = require('underscore-node');
require('./css/index.css')

var AddItem = require('./addItem')
var TodoItem = require('./todoItems')
//Create a component


var TodoComponent  = createReactClass({
      getInitialState: function() {
          return {
            todos :['eat', 'sleep','regret'],
            age : "30"
          }
        },
    
      render : function(){
           var todo = this.state.todos
           var ages =  this.state.age
          
           todo = todo.map(function(item, index){
              return(
               <TodoItem item = {item} key = {index} onDelete={this.onDelete}/>
             )
           }.bind(this))
          
      return (
          <div id='todo-list'>
            <p> The output is </p>
            <ul>{todo}</ul>
              <AddItem  onAdd={this.onAdd}/>
          </div>
            )
      },

      onDelete : function(item) {
              var updateDelete = this.state.todos.filter(function (val, index) {
                  return item !== val
              });
              this.setState({
                  todos: updateDelete
              })
      },
      onAdd : function (value) {
             debugger;
              var updatedTodos =  this.state.todos;
             updatedTodos.push(value);
             this.setState({
                 todos : updatedTodos
             })
      }
});





ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));
