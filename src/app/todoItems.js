/**
 * Created by shankara on 15/12/17.
 */

var React = require('react');
var createReactClass = require('create-react-class');
import { Button } from 'reactstrap';
var TodoItem  = createReactClass({
    render : function(){
        return(
            <li>
                <div className="todoItem">
                    <span className="itemName">{this.props.item} </span>
                    <Button color="danger"  onClick={this.handleDelete}>Delete!</Button>
                </div>
            </li>
        )
    },
    handleDelete : function () {
        debugger;
        this.props.onDelete(this.props.item)
    }
})

module.exports = TodoItem
