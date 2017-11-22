import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router";
import "./index.css";

export default class CommonHeader extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			list : [],
			navList : []
		}
		
		this.getListSucc = this.getListSucc.bind(this)
	}
	
	render(){
		const item = this.state.list.map((value,index) => {
			return <li className="commonHeader-list" key={value.key}><Link to={value.url}>{value.vaule}</Link></li>
		})
		const title = this.state.navList.map((value,index) => {
			return <li key={index}><a>{value.title}</a></li>
		})
		const list = this.state.navList.map((value,index) => {
			return <ul key={index}>
						{value.list.map((value,index) => {
							return <li key={value.key}>{value.value}</li>
						})}
					</ul>
				})
		
		return(
			<div className="zong-boss">
				<div className="CommonHeader">
					<Link to="/">
						<img alt="找不到该图片" className="logoImg" src={require("../../statics/images/logo.png")}/>
					</Link>
					<ul className="commonHeader-ul">
						{item}
					</ul>
				</div>
				<div className="CommonNav">
					<ul className="common-title">
						{title}
					</ul>
					<ul className="common-ul">
						<li>
							{list}
						</li>
					</ul>
				</div>
				<div>
					{this.props.children}
				</div>
				<div className="common-footer">
					<div>本网站由<a> EasyVOA </a>开发上线 © 2011-2014 手机版<a>EasyVOA</a></div>
					<p>网站所有内容，均来自VOA官方网站，所有资料均只作为英文学习资料使用。 站长QQ:1801785742 欢迎联系合作</p>
					<img alt="找不到该图片" src={require("../../statics/images/logo.png")}/>
				</div>
			</div>
			
		)
	}
	
	componentDidMount(){
		axios.get("http://localhost:3000/header.json").then(this.getListSucc);
	}
	
	getListSucc(res){
		const {list} = res.data.data;
		const {navList} = res.data.data;
		this.setState({
			list : list,
			navList :　navList
		})
	}
}
