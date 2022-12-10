import Header from './components/header';
import SearchPanel from './components/search-panel';
import List from './components/list';
import AddForm from './components/add-form';
import './app.sass'
import { Component } from 'react';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {label: "Проснуться", done: true, id: 1, redact: false},
                {label: "Умыться", done: false, id: 2, redact: false},
                {label: "Покушать", done: false, id: 3, redact: false}
            ],
            term: '',
            filter: 'all'
        };
        this.onDone = this.onDone.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onChangeTerm = this.onChangeTerm.bind(this);
        this.filterPost = this.filterPost.bind(this);
        this.onChangeFilter = this.onChangeFilter.bind(this);
        this.onRedact = this.onRedact.bind(this);
        this.onRedactLabel = this.onRedactLabel.bind(this);

        this.id = 4;
    }

    onRedactLabel(id, body){
        this.setState(({data})=>{
            const index = data.findIndex(item=>item.id === id)
            const newItem = {...data[index], label: body, redact: false}
            const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newData
            }
        })
    }

    onRedact(id){
        this.setState(({data})=>{
            const index = data.findIndex(item=>item.id === id)
            const newItem = {...data[index], redact: true}
            const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newData
            }
        })
    }

    onDone(id){
        this.setState(({data})=>{
            const index = data.findIndex(item=>item.id===id)
            const newItem = {...data[index], done: !data[index].done}
            const newData = [...data.slice(0, index),newItem, ...data.slice(index+1)]
            return {
                data: newData
            }
        })
    }

    onDelete(id){
        this.setState(({data})=>{
            const newData = [...data.filter(item => item.id !== id)]
            return {
                data: newData
            }
        })
    }

    onAdd(body){
        const newItem = {label: body, done: false, id: this.id++, redact: false};
        this.setState(({data})=>{
            const newData = [...data, newItem]
            return {
                data: newData
            }
        })
    }

    searchPost(iterms, term){
        if (term.length===0){
            return iterms
        }

        return iterms.filter(item=>item.label.indexOf(term) > -1)
    }

    onChangeTerm(term){
        this.setState({term})
    }

    filterPost(posts, filter){
        if (filter === 'done') {
            return posts.filter(item=>item.done)
        } else if  (filter ==='notDone') {
            return posts.filter(item=>!item.done)
        } else {
            return posts
        }
    }

    onChangeFilter(filter){
        this.setState({filter})
    }


    render(){
        const allTask = this.state.data.length;
        const completedTask = this.state.data.filter(item=>item.done).length;
        const task = allTask - completedTask;
        return (
            <div className='app'>
                <Header 
                    allTask={allTask}
                    completedTask={completedTask}
                    task={task}
                />
                <SearchPanel 
                    onChangeTerm={this.onChangeTerm}
                    onChangeFilter={this.onChangeFilter}
                    filter={this.state.filter}/>
                <List 
                    posts={this.filterPost(this.searchPost(this.state.data, this.state.term), this.state.filter)} 
                    onDone={this.onDone} 
                    onDelete={this.onDelete}
                    onRedact={this.onRedact}
                    onRedactLabel={this.onRedactLabel}
                    />
                <AddForm
                    onAdd={this.onAdd}/>
            </div>
        )
    }
}
