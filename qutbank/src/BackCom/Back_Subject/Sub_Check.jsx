import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import { Checkbox } from 'antd';

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}


const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];

export default class SubCheck extends Component {
    state = {
        options: [
            { label: '', value: '' }
        ],
        rightAnswer:[],
        optA: this.props.value.optA,
        optB: this.props.value.optB,
        optC: this.props.value.optC,
        optD: this.props.value.optD,
    }

    componentDidMount() {
        this.setState({
            options: [
                { label: this.state.optA, value: 'A' },
                { label: this.state.optB, value: 'B' },
                { label: this.state.optC, value: 'C' },
                { label: this.state.optD, value: 'D' },

            ]
        })
       
    }
    componentWillMount(){
        this.setState({
            rightAnswer:this.props.value.rightAnswer.split("")
        })
    }



    render() {
      
        return (
            <>

                <Checkbox.Group
                    options={this.state.options}
                    disabled
                    defaultValue={this.state.rightAnswer}
                    onChange={onChange}
                />
            </>
        )
    }
}