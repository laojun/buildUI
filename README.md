"# buildUI" 
buildUI：
    该工具是在2017年出自主创新开发的项目，用于解决团队内开发效率低的问题。

    由于机顶盒端的页面，分辨率固定，终端对布局支持最好的方式是absolute，故想在pc端通过鼠标画框，然后根据画的框生成div布局代码，以此来减少模板重复写代码的工作。
    
    应用场景主要有
    	假焦点页面【高清站点终端，页面js通过捕获遥控器事件，处理上下左右代码逻辑】：通过此工具画框，得到div布局代码，通过给区域配置组件，生成js代码，将页面逻辑串通，得到一个无内容有逻辑的页面。



目录：

builUI2.0.html【假焦点页面构建工具】
js/components.js【组件配置js】
demo.html【生成代码测试demo，代码拷贝到此验证】
demo_down.html【完成的demo示例】
js/jquery-3.1.1.js、jquery-ui【工具框架】
components/StaticLine.js【示例组件】
