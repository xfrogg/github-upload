import React, { Component } from 'react';
import {IMyComponentProps, IChildComponentProps} from './MyComponentInterfaces';

class MyComponent extends Component<IMyComponentProps, {clickCnt:number}> {
    constructor(props: Readonly<IMyComponentProps>) {
        super(props);
        this.state = { clickCnt:0};
        this.handleFoo = this.handleFoo.bind(this);
    }
    
    public handleFoo(t:IChildComponentProps):void{
        const alertMsg = this.state.clickCnt + " | " + this.props.message + ", je suis " + t.message + "(" + t.id + ").";
        this.setState({clickCnt:this.state.clickCnt+1});
        alert(alertMsg);
    }
    render() {
        return (
            <div>
                {
                    this.props.things.map(t=> {
                    return(
                        <ChildComponent id={t.id} message={t.message} fooHandler={this.handleFoo}/>
                    )
                    })
                }
            </div>
        );
    }
}

class ChildComponent extends Component<IChildComponentProps>{
    constructor(props: Readonly<IChildComponentProps>) {
        super(props);
        this.handleBar = this.handleBar.bind(this);
    }
    
    handleBar(){
        this.props.fooHandler(this.props);
    }
    render(){
        return(
            <div onClick={this.handleBar}>{this.props.id} {this.props.message}</div>
            )
    }
}
export default MyComponent;