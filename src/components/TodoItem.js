import React from "react"

class TodoItem extends React.Component {
    render() {
        return <li>{this.props.todo.tittle}</li>
    }
}

export default TodoItem