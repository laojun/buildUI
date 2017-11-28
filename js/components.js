var staticLineParm = {
	id:{val:"",require:true,name:"容器ID"},
	eleNum:{val:"",require:true,name:"子元素个数："},
	steps:{val:"",require:true,name:"步长(数组)"},
	onFocCss:{val:"",require:false,name:"获焦样式"},
	initFocPos:{val:"",require:false,name:"初始获焦"},
	eleName:{val:"",require:false,name:"子元素ID"},
	upArea:{val:"",require:false,name:"上区域"},
	downArea:{val:"",require:false,name:"下区域"},
	leftArea:{val:"",require:false,name:"左区域"},
	rightArea:{val:"",require:false,name:"右区域"}
}


var components = [
	{name:"静态列表(n*n)",compName:"StaticLine",reqJsUrl:"js/WasuTv2.js",compUrl:"components/StaticLine.js",initFun:"",inArea:"",setArea:"",parm:staticLineParm}
	
];

