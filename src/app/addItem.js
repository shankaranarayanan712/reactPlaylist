/**
 * Created by shankara on 18/12/17.
 */
var React = require('react');
var createReactClass = require('create-react-class');
require('./css/addItem.css')

var AddItem = createReactClass({

   render : function () {
       return (
    
           <form id="add-todo" onSubmit={this.handleSubmit}>
               <input type="text" required ref="newItem"/>
               <input type="submit" value="Hit me"/>
           </form>
       )
       
   },
    handleSubmit : function (e) {
       e.preventDefault()
        debugger;
        var value = this.refs.newItem.value
        if(value && value!="") {
            this.props.onAdd(value)
        }
    }
})
module.exports = AddItem