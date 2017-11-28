
var KEY_PAGEUP = 372;
var KEY_PAGEDOWN = 373;
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_BACK = 45;
var KEY_OK = 13;
var KEY_QUIT = 339;
/*°´¼ü·½·¨*/

function keyBinds(_Obj){
	document.onkeydown = function(evt){
		var key_code = event.which ? event.which: event.keyCode;
		switch (key_code) {
			case 1:
			case KEY_UP:
				_Obj.keyUp();
				return 0;
				break;
			case 2:
			case KEY_DOWN:
				_Obj.keyDown();
				return 0;
				break;
			case 3:
			case KEY_LEFT:
				_Obj.keyLeft();
				return 0;
				break;
			case 4:
			case KEY_RIGHT:
				_Obj.keyRight();
				return 0;
				break;
			case KEY_OK:
				_Obj.doSelected();
				return 0;
				break;
			case 18:  
			case 340:
			case KEY_BACK:
				_Obj.comeBack();
				return 0;
				break;
			case KEY_QUIT:
				returnVideo();
				return 0;
				break;
			case KEY_PAGEUP:
				_Obj.pageUp();
				return 0;
				break;
			case KEY_PAGEDOWN:
				_Obj.pageDown();
				return 0;
				break;
			default:
				return key_code;
				break;
		}
	};
};
