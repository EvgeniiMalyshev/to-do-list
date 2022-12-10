import { Component } from "react"

export default class AddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
        this.onValueChange = this.onValueChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    

    onValueChange(e){
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }

    render(){
        return (
            <form onSubmit={this.onSubmit} className="add-form">
                <input
                    className="input"
                    type='text'
                    placeholder="Хочу сделать"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button className="btn" type="submit">Добавить задачу</button>
            </form>
        )
    }
}
