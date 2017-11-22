import React, { Component } from "react";
import "./style.css";
import axios from 'axios';
import { connect } from "react-redux";
import { getListValue } from "./actionCreate";

class List extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			list : []
		}
	}
	
	componentWillReceiveProps(nextProps){
		if(nextProps.params.id !== this.props.params.id){
			this.getListInfo(nextProps.params.id)
		}
	}
	
	render(){
		const item = this.props.list.map((value,index) => {
			if(value.isNew){
				return <li key={value.key}><span>{value.title}</span><p>{value.value}</p><img src={require("../../statics/images/1.gif")}/></li>
			}else{
				return <li key={value.key}><span>{value.title}</span><p>{value.value}</p></li>
			}
			
		})
		
		return(
			<div className="list-boss">
				<div className="list-wrapper">欢迎来到列表页{this.props.params.id}</div>
				<ul className="list-ul">
					{item}
				</ul>
			</div>
		)
	}
	
	componentDidMount(){
		this.getListInfo()
	}
	
	getListInfo(id){
		id = id || this.props.params.id;
		axios.get("http://localhost:3000/list.json?id="+id)
			.then(this.props.getListValue.bind(this))
	}
		
}

const mapStateToProps = (state) => ({
	list : state.list.list
})

const mapDispatchToProps = (dispatch) => ({
	getListValue : (res) => {
		if(res.data.ret === true){
			const {list} = res.data.data;
			dispatch(getListValue(list))
		}
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(List)


