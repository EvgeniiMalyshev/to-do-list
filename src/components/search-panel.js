import { Component } from "react";

export default class SearchPanel extends Component{
    constructor(props){
        super(props);
        this.updateSearch = this.updateSearch.bind(this)
        this.updateFilter = this.updateFilter.bind(this)
    }

    updateSearch(e){
        this.props.onChangeTerm(e.target.value)
    }

    updateFilter(e){
        this.props.onChangeFilter(e.target.name)
    }

    render(){
        let btn1 = 'btn';
        let btn2 = 'btn';
        let btn3 = 'btn';
        if (this.props.filter === 'all'){
            btn1 += ' btn_active'
        } else if (this.props.filter === 'done') {
            btn2 += ' btn_active'
        } else {
            btn3 += ' btn_active'
        }
        return (
            <div className="search-panel">
                <input
                    className="input"
                    type='text'
                    placeholder="Поиск по задачам"
                    onChange={this.updateSearch}
                />
                <div>
                    <button onClick={this.updateFilter} name='all' className={btn1} type='button'>Все</button>
                    <button onClick={this.updateFilter} name='done' className={btn2} type='button'>Выполненные</button>
                    <button onClick={this.updateFilter} name='notDone' className={btn3} type='button'>Предстоит выполнить</button>
                </div>
            </div>
        )
    }
}