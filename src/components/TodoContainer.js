import React from "react"

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
                {
                    this.state.todos.map(todo => (
                        <li>{todo.tittle}</li>
                    ))
                }
            </div>
        )
    }
}
export default TodoContainer