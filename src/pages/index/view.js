import React, { Component } from "react";
import "./style.css";
import axios from 'axios';
import { Link } from "react-router";
import { connect } from "react-redux";
import { getIndexValue } from "./actionCreate";
import Canvas from "./canvas";
import ECharts from "./echarts";
import Swiper from "swiper";
import iScroll from 'iscroll/build/iscroll-probe';

class Index extends Component {
	
	constructor(props){
		super(props)
		
		this.state = {
			list : []
		}
		this.warpperNull = this.warpperNull.bind(this)
	}
	
	render(){
		const list = this.props.list.map((value,index) => {
			return <li className="index-list-li" key={value.key}><Link to={value.link}>{value.value}</Link></li>
		})
		
		return(
			<div>
				<div className="index-title">
					VOA（美国之音）慢速英语,常速英语,官网最新内容在线收听。
				</div>
				<div className="swiper-container" ref="swiperContainer">
				    <div className="swiper-wrapper">
					    <div className="swiper-slide"><img src={require("../../statics/images/swiper1.jpg")}/></div>
					    <div className="swiper-slide"><img src={require("../../statics/images/swiper2.jpg")}/></div>
					    <div className="swiper-slide"><img src={require("../../statics/images/swiper3.jpg")}/></div>
					</div>
				</div>
				<div className="class-boss">
					<div className="big-box">
						<div id="bigWrapper" ref="bigWrapper">
							<div id="scroller">
								<div id="reshef" ref="reshef">松开加载......</div>
								<ul className="index-list">
									{list}
								</ul>
							</div>
						</div>
						<ECharts/>
					</div>
					<div className="wrapper-index">
						<div id="warpperImg"><img  alt="找不到该图片" ref="warpperImg" src={require("../../statics/images/warpper.jpg")}/></div>
						<span ref="warpperSpan" onClick={this.warpperNull}>X</span>
						<Canvas></Canvas>
					</div>
				</div>
			</div>
		)
	}
	
	componentDidMount(){
		this.getIndexInfo()
		var swiper = new Swiper(this.refs.swiperContainer,{
			autoplay : {
				delay: 3000,
			    stopOnLastSlide: false,
			    disableOnInteraction: true
			}
		});
		
		this.myScroll = new iScroll(this.refs.bigWrapper, { probeType: 2,mouseWheel: true });
		this.myScroll.on("scroll",() => {
			if(this.myScroll.y > 0){
				this.refs.reshef.style.display = "block";
			}else{
				this.refs.reshef.style.display = "none";
			}
		})
	}
	
	warpperNull(){
		this.refs.warpperImg.style.display="none";
		this.refs.warpperSpan.style.display="none";
	}
	
	getIndexInfo(){
		axios.get("http://localhost:3000/index.json")
			.then(this.props.getIndexSucc.bind(this))
	}
	
	componentDidUpdate(){
		setTimeout(() => {
			this.myScroll.refresh();
		},500)
	}
	
}
const mapStateToProps = (state) => ({
	list : state.index.list
})

const mapDispatchToProps = (dispatch) => ({
	getIndexSucc : (res) => {
		const {list} = res.data.data;
 		if(res.data.ret === true){
			dispatch(getIndexValue(list))
		}
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(Index)


