import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
        console.log("constructor()")
        this.state = {
             count:0,
             memoryId:null
        }
    }
    

    componentDidMount(){
        console.log("componentDidMount()")
       
        this.setState({memoryId: setInterval(() => {
            this.increment()
        }, 1000)})
    }

    increment = () => {
        this.setState({ count:this.state.count+1  });
    }
    componentWillUnmount = () => {
        console.log("componentWilUnmount()")
        this.setState({count:this.state.count})
        clearInterval(this.state.memoryId)
        
    }


    render() {
        console.log("render()")
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

export default Counter
