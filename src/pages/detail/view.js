import React, { Component } from "react";
import "./style.css";
import axios from 'axios';
import { connect } from "react-redux";
import { getDetail } from "./actionCreate"

class Detail extends Component {
	constructor(props){
		super(props)
		
		this.state = {
			id : this.props.params.id
		}
		
		this.listenScroll = this.listenScroll.bind(this);
		this.getDetailValue = this.getDetailValue.bind(this);
	}
	
	render(){
		const list = this.props.list.map((value,index) => {
			return <div key={value.key}>{value.value}</div>
		})
		
		return(
			<div className="detail">
				<div className="detail_left">
					<img alt="找不到该图片" className="detail-img" src={require("../../statics/images/"+this.state.id+".jpg")}/>
					<div className="detail-nr">
						{list}
					</div>
				</div>
				<div ref="detailRight" className="detail_right">
					<div className="clickHover">X</div>
					<img src={require("../../statics/images/imgad.jpg")}/>
				</div>
			</div>
		)
	}
	
	componentDidMount(){
		if(!this.props.list.length){
			this.getDetailValue()
		}
		this.listenScroll();
	}
	
	getDetailValue(){
		axios.get("http://localhost:3000/detail.json/?id="+this.state.id).then(this.props.getDetailSucc);
	}
	
	listenScroll(){
		var detailRight = this.refs.detailRight;
		window.addEventListener("scroll",() => {
			var scroll = document.documentElement.scrollTop;
			if(scroll >= 190){
				detailRight.className = "scrollFixed";
			}else{
				detailRight.className = "detail_right";
			}
		})
	}
}

const mapStateToProps = (state) => ({
	list : state.detail.list
})

const mapDispatchToProps = (dispatch) => ({
	getDetailSucc : function(res){
		const {list} = res.data.data;
		if(res.data.ret == true){
			dispatch(getDetail(list));
		}
	}
})


export default connect(mapStateToProps,mapDispatchToProps)(Detail)

