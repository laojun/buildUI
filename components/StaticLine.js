/*@auth:zhangxj @date:2017-03-09
静态列表组件：（无滑动，多行多列）
@特点：本组件的要求就是连续固定个数子元素（id命名的下标连续）的区域，
	  可为n*n纬度
	  不动态添加dom元素
*/

function StaticLine(_p){
	if(!_p.id)return;
	this.id = _p.id;//组件id,必须参数
	this.eleNum = parseInt(_p.eleNum);//子元素个数，必须
	this.steps = _p.steps || [0,0];//xy轴移动步长，必须
	
	this.onFocCss = _p.onFocCss || "";//组件获焦css非必须参数，默认为“”
	this.initFocPos = parseInt(_p.initFocPos || 0);//组件初始获焦位置，非必须参数，默认为0
	this.eleName = _p.eleName || _p.id+"_";//子元素名称，默认为父元素id加下滑线，非必须参数，默认为:父id_
	this.data = _p.data || [];//数据
	this.upArea = null;//往上获焦区域
	this.downArea = null;//往下获焦区域
	this.leftArea = null;//往左获焦区域
	this.rightArea = null;//往右获焦区域
	
	this.allowMove = false;
	this.focPos = 0;//当前组件焦点位置
	this.areaIsFoc = false;//区域是否获焦
	this.refreshLogState = false;//对于单次的确定键操作，是否埋点过
	this.yStep = this.steps[1];//
	this.xStep = this.steps[0];
	
	this.Overrides = {
		beforOnFocus:function(){},
		afterOnFocus:function(){},
		beforOutFocus:function(){},
		afterOutFocus:function(){}
	}
	
	//初始化
	this.initArea = function(){
		this.focPos = this.initFocPos<0 ? 0 : this.initFocPos;
	};
	//进入区域
	this.enterArea = function(){
		keyBinds(this);
		this.onFoc();
		this.areaIsFoc = true;
	};
	//离开区域
	this.exitArea = function(){
		this.outFoc();
		this.areaIsFoc = false;
	};
	//设置区域关系
	this.setArea = function(_arr){
		this.upArea = _arr[0] ? _arr[0] : null;
		this.downArea = _arr[1] ? _arr[1] : null;
		this.leftArea = _arr[2] ? _arr[2] : null;
		this.rightArea = _arr[3] ? _arr[3] : null;
		
	};
	//获焦
	this.onFoc = function(){
		this.Overrides.beforOnFocus();
		if(this.onFocCss!=null){
			var _curEleID = this.eleName+this.focPos;
			this.$(_curEleID).className = (this.$(_curEleID).className+" "+this.onFocCss).replace(/(^\s*)|(\s*$)/g, "");
		}
		this.Overrides.afterOnFocus();
	};
	//失焦
	this.outFocus = function(){
		this.Overrides.beforOutFocus();
		if(this.onFocCss!=null){
			var _curEleID = this.eleName+this.focPos;
			var reg = new RegExp(this.onFocCss,"g");
			this.$(_curEleID).className = this.$(_curEleID).className.replace(reg,"").replace(/(^\s*)|(\s*$)/g, "");
		}
		this.Overrides.afterOutFocus();
	};
	this.toOtherArea = function(_dr){
		if(_dr=="up"){
			if(this.upArea){
				if(typeof this.upArea.enterArea=="function"){
					this.outFocus();
					this.upArea.enterArea();
				}
			}
		}else if(_dr=="down"){
			if(this.downArea){
				if(typeof this.downArea.enterArea=="function"){
					this.outFocus();
					this.downArea.enterArea();
				}
			}
		}else if(_dr=="left"){
			if(this.leftArea){
				if(typeof this.leftArea.enterArea=="function"){
					this.outFocus();
					this.leftArea.enterArea();
				}
			}
		}else if(_dr=="right"){
			if(this.rightArea){
				if(typeof this.rightArea.enterArea=="function"){
					this.outFocus();
					this.rightArea.enterArea();
				}
			}
		}
	};
	//上
	this.keyUp = function(){
		if(this.yStep>0){//有移动步长
			if(this.focPos-this.yStep<0){//越界
				this.toOtherArea("up");
				return;
			}
			this.outFocus();
			this.focPos -= this.yStep;
			this.onFoc();
		}else{
			this.toOtherArea("up");
		}
	};
	//下
	this.keyDown = function(){
		if(this.yStep>0){//有移动步长
			if(this.focPos+this.yStep>this.eleNum-1){//越界
				this.toOtherArea("down");
				return;
			}
			this.outFocus();
			this.focPos += this.yStep;
			this.onFoc();
		}else{
			this.toOtherArea("down");
		}
	};
	//左
	this.keyLeft = function(){
		if(this.xStep>0){//有移动步长
			if(this.focPos-this.xStep<0){
				this.toOtherArea("left");
				return;
			}
			if(this.yStep>0 && (this.focPos%this.yStep==0)){
				this.toOtherArea("left");
				return;
			}
			
			this.outFocus();
			this.focPos -= this.xStep;
			this.onFoc();
		}else{
			this.toOtherArea("left");
		}
	};
	//右
	this.keyRight = function(){
		if(this.xStep>0){//有移动步长
			if(this.focPos+this.xStep>this.eleNum-1){
				this.toOtherArea("right");
				return;
			}
			if(this.yStep>0 && (this.focPos%this.yStep==(this.yStep-1))){
				this.toOtherArea("right");
				return;
			}
			this.outFocus();
			this.focPos += this.xStep;
			this.onFoc();
		}else{
			this.toOtherArea("right");
		}
	};
	//确定
	this.doSelected = function(){
		
	};
	//返回
	this.comeBack = function(){
		window.history.go(-1);
	};
	//上翻页
	this.pageUp = function(){
		
	};
	//下翻页
	this.pageDown = function(){
		
	};
	this.$ = function(_id){////获取对象
		var obj = document.getElementById(_id);
		if(typeof(obj)!="object"){
		  obj = null;
		}
		return obj;
	};
	this.chv = function(id,bool){//设置元素隐藏显示
		if(id){
			this.$(id).style.visibility = bool ? "visible" : "hidden";
		}
	};
	
}