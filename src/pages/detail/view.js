import React, { Component } from "react";
import "./style.css";
import axios from 'axios';

export default class Detail extends Component {
	constructor(props){
		super(props)
		
		this.state = {
			id : this.props.params.id,
			list : []
		}
		
		this.getDetailSucc = this.getDetailSucc.bind(this)
	}
	
	render(){
		const list = this.state.list.map((value,index) => {
			return <div key={value.key}>{value.value}</div>
		})
		
		return(
			<div className="detail">
				<img alt="找不到该图片" className="detail-img" src={require("../../statics/images/"+this.state.id+".jpg")}/>
				<div className="detail-nr">
					{list}
				</div>
			</div>
		)
	}
	
	componentDidMount(){
		axios.get("http://localhost:3000/detail.json/?id="+this.state.id).then(this.getDetailSucc)
	}
	
	getDetailSucc(res){
		if(res.data.ret === true){
			const {list} = res.data.data;
			this.setState({
				list : list
			})
		}
	}
}



