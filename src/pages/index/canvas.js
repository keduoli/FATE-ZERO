import React,{ Component } from "react";
import "./style.css"

export default class Canvas extends Component {
	constructor(props){
		super(props);
		
		this.Clock = this.Clock.bind(this);
	}
	
	render(){
		return(
			<div id="canvas-d"><canvas  width="250" height="250" ref="canvas" id="canvas"></canvas></div>
		)
	}
	
	componentDidMount(){
		const canvas = this.refs.canvas;
		this.Clock(canvas);
	}
	
	Clock(canvas){
		this.ctx = canvas.getContext("2d");
		var this_ = this;
		setInterval(function() {
			this_.ctx.clearRect(0, 0, 250, 250);
			this_.init();
		}, 1000);
	}
	
	init(){
		this.drawClock();
		this.drawCenterPoint();
		this.drawMinutesPoint();
		this.drawHoursPoints();
		this.drawHoursNumber();
		this.drawTimes();
	}
	
	
	drawTimes(){
		var date = new Date(),
			minutes = date.getMinutes(),
			seconds = date.getSeconds(),
			hours = (date.getHours() % 12) + (minutes / 60);
			
		this.drawMinutes(minutes);
		this.drawSeconds(seconds);
		this.drawHours(hours);
	}
	
	drawHours(hours){
		this.ctx.save();
		this.ctx.translate(125,125);
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI * hours /6 );
		this.ctx.moveTo(0, -65);
		this.ctx.lineTo(0, 5);
		this.ctx.lineWidth = 2;
		this.ctx.stroke();
		this.ctx.restore();
	}
	
	drawSeconds(seconds){
		this.ctx.save();
		this.ctx.translate(125,125);
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI * seconds /30 );
		this.ctx.moveTo(0, -100);
		this.ctx.lineTo(0, 5);
		this.ctx.lineWidth = 2;
		this.ctx.strokeStyle = "red";
		this.ctx.stroke();
		this.ctx.restore();
	}
	
	drawMinutes(minutes){
		this.ctx.save();
		this.ctx.translate(125,125);
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI * minutes /30 );
		this.ctx.moveTo(0, -80);
		this.ctx.lineTo(0, 5);
		this.ctx.lineWidth = 2;
		this.ctx.stroke();
		this.ctx.restore();
	}
	
	drawHoursNumber(){
		this.ctx.save();
		this.ctx.translate(125, 125);
		this.ctx.beginPath();
		for (var i = 1; i <= 12; i++) {
			this.ctx.font = "15px Arial";
			this.ctx.textAlign = "center";
			this.ctx.textBaseline = "middle";
			this.ctx.fillText(i, Math.sin(Math.PI * i / 6) * 100, - Math.cos(Math.PI * i / 6) * 100);
		}
		
		this.ctx.restore();
	}
	
	drawHoursPoints(){
		this.ctx.save();
		this.ctx.translate(125, 125);
		this.ctx.beginPath();
		for (var i = 0; i < 12; i++) {
			this.ctx.moveTo(0, -118);
			this.ctx.lineTo(0, -110);
			this.ctx.rotate(Math.PI / 6);
		}
		this.ctx.lineWidth = 2;
		this.ctx.stroke();
		this.ctx.restore();
	}
	
	drawMinutesPoint(){
		this.ctx.save();
		this.ctx.translate(125, 125);
		this.ctx.beginPath();
		for (var i = 0; i <60; i++) {
			this.ctx.moveTo(0, -118);
			this.ctx.lineTo(0, -115);
			this.ctx.rotate(Math.PI / 30);
		}
		this.ctx.lineWidth = 2;
		this.ctx.stroke();
		this.ctx.restore();
	}
	
	drawClock(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.arc(125, 125, 120, 0, Math.PI * 2);
		this.ctx.stroke();
		this.ctx.restore();
	}
	
	drawCenterPoint(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(125, 125);
		this.ctx.arc(0, 0, 5, 0, Math.PI * 2);
		this.ctx.fillStyle = "red";
		this.ctx.fill();
		this.ctx.restore();
	}
}

