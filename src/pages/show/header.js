import React, { Component } from "react";
import { Link } from "react-router";


export default class Header extends Component {
	
	constructor(props){
		super(props)
		
	}
	render(){
		return(
			<div className="showHeader">
				<div className="showWrapper">
					<div className="showWrapper-left">
						<Link className="showWrapper-left-logo"><img src={require("../../statics/car/logo.png")}/></Link>
						<div className="showWrapper-left-dropMeun">
							<div className="dropMeunShow">
								北京     v
							</div>
							<div ref="dropMeunHover" className="dropMeunHover">
								
							</div>
						</div>
						<div className="showWrapper-left-nav">
							<ul>
								<li><Link>首页</Link></li>
								<li><Link>我要买车</Link></li>
								<li className="hoverhome">
									<Link>商家服务</Link>
									<div>
										<Link>大风车</Link>
										<Link>车牛</Link>
									</div>
								</li>
								<li><Link>弹个车</Link></li>
								<li><Link>关于我们</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
	
}






