import { Component } from "react"

class ListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: this.props.label
        };
        this.onValueChange = this.onValueChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onValueChange(e){
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(){
        this.props.onRedactLabel(this.props.id,this.state.text)
    }

    render() {
        const {label, done, redact, onDelete, onDone, onRedact} = this.props
        let nameClass = "list-item";
        if (done){
            nameClass += " done"
        }

        if (redact) {
            return (
                <i className={nameClass}>
                    <input
                        className="input"
                        type='text'
                        onChange={this.onValueChange}
                        value={this.state.text}
                    />
                    <div className="list-item__btn">
                        <button onClick={this.onSubmit} type='button'>
                            <i className="bi bi-save"></i>
                        </button>
                    </div>
                </i>
            )
        } else {
            return (
                <i className={nameClass}>
                    <div className="list-item__text">{label}</div>
                    <div className="list-item__btn">
                        <button onClick={onDone} type='button'>
                            <i className="bi bi-check"></i>
                        </button>
                        <button onClick={onRedact} type='button'>
                            <i className="bi bi-pencil-square"></i>
                        </button>
                        <button onClick={onDelete} type='button'>
                            <i className="bi bi-trash"></i>
                        </button>
                    </div>
                </i>
            )
        }
    }
}

export default ListItem