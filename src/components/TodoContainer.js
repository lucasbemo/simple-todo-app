import React from "react"
import TodosList from "./TodosList"

class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                tittle: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                tittle: "Develop website and add content",
                completed: true
            },
            {
                id: 3,
                tittle: "Deploy to live server",
                completed: true
            }
        ]
    }

    render() {
        return (
            <div>
                <TodosList todos={this.state.todos}></TodosList>
            </div>
        )
    }
}

export default TodoContainer