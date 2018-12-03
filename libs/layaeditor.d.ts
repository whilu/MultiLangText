declare module laya.editorUI {
    /**
     *
     */
    class AddComp {
        constructor();
        target: laya.display.Node;
    }
}
declare module laya.editorUI {
    /**
     * 动画播放器
     */
    class AnimationPlayer extends laya.display.Animation {
        constructor();
        source: string;
        autoPlay: boolean;
        loadAtlas(url: string, loaded?: laya.utils.Handler, cacheName?: string): laya.display.Animation;
        loadImages(urls: Array<any>, cacheName?: string): laya.display.Animation;
        protected _parseGraphicAnimation(animationData: any): any;
        loadAnimation(url: string, loaded?: laya.utils.Handler): laya.display.Animation;
        _getBoundPointsM(ifRotate?: boolean): Array<any>;
    }
}
declare module laya.editorUI {
    /**
     * <code>AutoBitmap</code> 类是用于表示位图图像或绘制图形的显示对象。
     * <p>封装了位置，宽高及九宫格的处理，供UI组件使用。</p>
     */
    class AutoBitmap extends laya.display.Graphics {
        private static cmdCaches;
        private static cacheCount;
        private static textureCache;
        autoCacheCmd: boolean;
        _offset: Array<any>;
        /**@inheritDoc */
        destroy(): void;
        /**
         * 当前实例的有效缩放网格数据。
         * <p>如果设置为null,则在应用任何缩放转换时，将正常缩放整个显示对象。</p>
         * <p>数据格式：[上边距,右边距,下边距,左边距,是否重复填充(值为0：不重复填充，1：重复填充)]。
         * <ul><li>例如：[4,4,4,4,1]</li></ul></p>
         * <p> <code>sizeGrid</code> 的值如下所示：
         * <ol>
         * <li>上边距</li>
         * <li>右边距</li>
         * <li>下边距</li>
         * <li>左边距</li>
         * <li>是否重复填充(值为0：不重复填充，1：重复填充)</li>
         * </ol></p>
         * <p>当定义 <code>sizeGrid</code> 属性时，该显示对象被分割到以 <code>sizeGrid</code> 数据中的"上边距,右边距,下边距,左边距" 组成的矩形为基础的具有九个区域的网格中，该矩形定义网格的中心区域。网格的其它八个区域如下所示：
         * <ul>
         * <li>矩形上方的区域</li>
         * <li>矩形外的右上角</li>
         * <li>矩形左侧的区域</li>
         * <li>矩形右侧的区域</li>
         * <li>矩形外的左下角</li>
         * <li>矩形下方的区域</li>
         * <li>矩形外的右下角</li>
         * <li>矩形外的左上角</li>
         * </ul>
         * 同时也支持3宫格，比如0,4,0,4,1为水平3宫格，4,0,4,0,1为垂直3宫格，3宫格性能比9宫格高。
         * </p>
         */
        sizeGrid: Array<any>;
        /**
         * 表示显示对象的宽度，以像素为单位。
         */
        width: number;
        /**
         * 表示显示对象的高度，以像素为单位。
         */
        height: number;
        /**
         * 对象的纹理资源。
         * @see laya.resource.Texture
         */
        source: laya.resource.Texture;
        protected _setChanged(): void;
        /**
         *  清理命令缓存。
         */
        static clearCache(): void;
        static setCache(key: string, value: any): void;
        static getCache(key: string): any;
    }
}
declare module laya.editorUI {
    /**
     * <code>Box</code> 类是一个控件容器类。
     * @author yung
     */
    class Box extends Component implements laya.ui.IBox {
        /**@inheritDoc */
        dataSource: any;
    }
}
declare module laya.editorUI {
    /**
     * <code>Button</code> 组件用来表示常用的多态按钮。 <code>Button</code> 组件可显示文本标签、图标或同时显示两者。
     *
     * <p>可以是单态，两态和三态，默认三态(up,over,down)。</p>
     *
     * @example 以下示例代码，创建了一个 <code>Button</code> 实例。
     * <listing version="3.0">
     * package
     *	{
     *		import laya.ui.Button;
     *		import laya.utils.Handler;
     *
     *		public class Button_Example
     *		{
     *			public function Button_Example()
     *			{
     *				Laya.init(640, 800);//设置游戏画布宽高。
     *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *				Laya.loader.load("resource/ui/button.png", Handler.create(this,onLoadComplete));//加载资源。
     *			}
     *			private function onLoadComplete():void
     *			{
     *				trace("资源加载完成！");
     *				var button:Button = new Button("resource/ui/button.png","label");//创建一个 Button 类的实例对象 button ,并传入它的皮肤。
     *				button.x = 100;//设置 button 对象的属性 x 的值，用于控制 button 对象的显示位置。
     *				button.y = 100;//设置 button 对象的属性 y 的值，用于控制 button 对象的显示位置。
     *				button.clickHandler = new Handler(this, onClickButton,[button]);//设置 button 的点击事件处理器。
     *				Laya.stage.addChild(button);//将此 button 对象添加到显示列表。
     *			}
     *
     *			private function onClickButton(button:Button):void
     *			{
     *				trace("按钮button被点击了！");
     *			}
     *		}
     *	}
     * </listing>
     * <listing version="3.0">
     * Laya.init(640, 800);//设置游戏画布宽高、渲染模式。
     * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     * Laya.loader.load("resource/ui/button.png",laya.utils.Handler.create(this,loadComplete));//加载资源
     * function loadComplete()
     * {
     *     console.log("资源加载完成！");
     *     var button = new laya.ui.Button("resource/ui/button.png","label");//创建一个 Button 类的实例对象 button ,传入它的皮肤skin和标签label。
     *     button.x =100;//设置 button 对象的属性 x 的值，用于控制 button 对象的显示位置。
     *     button.y =100;//设置 button 对象的属性 y 的值，用于控制 button 对象的显示位置。
     *     button.clickHandler = laya.utils.Handler.create(this,onClickButton,[button],false);//设置 button 的点击事件处理函数。
     *     Laya.stage.addChild(button);//将此 button 对象添加到显示列表。
     * }
     * function onClickButton(button)
     * {
     *     console.log("按钮被点击了。",button);
     * }
     * </listing>
     * <listing version="3.0">
     *import Button=laya.ui.Button;
     *import Handler=laya.utils.Handler;
     *class Button_Example{
     *    constructor()
     *    {
     *        Laya.init(640, 800);
     *        Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *        Laya.loader.load("resource/ui/button.png", laya.utils.Handler.create(this,this.onLoadComplete));//加载资源。
     *    }
     *    private onLoadComplete()
     *    {
     *        var button:Button = new Button("resource/ui/button.png","label");//创建一个 Button 类的实例对象 button ,并传入它的皮肤。
     *        button.x = 100;//设置 button 对象的属性 x 的值，用于控制 button 对象的显示位置。
     *        button.y = 100;//设置 button 对象的属性 y 的值，用于控制 button 对象的显示位置。
     *        button.clickHandler = new Handler(this, this.onClickButton,[button]);//设置 button 的点击事件处理器。
     *        Laya.stage.addChild(button);//将此 button 对象添加到显示列表。
     *    }
     *    private onClickButton(button:Button):void
     *    {
     *        console.log("按钮button被点击了！")
     *    }
     *}
     * </listing>
     *
     * @author yung
     */
    class Button extends Component implements ISelect {
        protected static stateMap: any;
        /**
         * 指定按钮按下时是否是切换按钮的显示状态。
         *
         * @example 以下示例代码，创建了一个 <code>Button</code> 实例，并设置为切换按钮。
         * <listing version="3.0">
         * package
         *	{
         *		import laya.ui.Button;
         *		import laya.utils.Handler;
         *		public class Button_toggle
         *		{
         *			public function Button_toggle()
         *			{
         *				Laya.init(640, 800);//设置游戏画布宽高、渲染模式。
         *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
         *				Laya.loader.load("resource/ui/button.png", Handler.create(this,onLoadComplete));
         *			}
         *			private function onLoadComplete():void
         *			{
         *				trace("资源加载完成！");
         *				var button:Button = new Button("resource/ui/button.png","label");//创建一个 Button 实例对象 button ,传入它的皮肤skin和标签label。
         *				button.x = 100;//设置 button 对象的属性 x 的值，用于控制 button 对象的显示位置。
         *				button.y = 100;//设置 button 对象的属性 y 的值，用于控制 button 对象的显示位置。
         *				button.toggle = true;//设置 button 对象为切换按钮。
         *				button.clickHandler = new Handler(this, onClickButton,[button]);//设置 button 的点击事件处理器。
         *				Laya.stage.addChild(button);//将此 button 对象添加到显示列表。
         *	 		}
         *			private function onClickButton(button:Button):void
         *			{
         *				trace("button.selected = "+ button.selected);
         *			}
         *		}
         *	}
         * </listing>
         * <listing version="3.0">
         * Laya.init(640, 800);//设置游戏画布宽高、渲染模式。
         * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
         * Laya.loader.load("resource/ui/button.png",laya.utils.Handler.create(this,loadComplete));//加载资源
         * function loadComplete()
         * {
         *     console.log("资源加载完成！");
         *     var button = new laya.ui.Button("resource/ui/button.png","label");//创建一个 Button 类的实例对象 button ,传入它的皮肤skin和标签label。
         *     button.x =100;//设置 button 对象的属性 x 的值，用于控制 button 对象的显示位置。
         *     button.y =100;//设置 button 对象的属性 y 的值，用于控制 button 对象的显示位置。
         *     button.toggle = true;//设置 button 对象为切换按钮。
         *     button.clickHandler = laya.utils.Handler.create(this,onClickButton,[button],false);//设置 button 的点击事件处理器。
         *     Laya.stage.addChild(button);//将此 button 对象添加到显示列表。
         * }
         * function onClickButton(button)
         * {
         *     console.log("button.selected = ",button.selected);
         * }
         * </listing>
         * <listing version="3.0">
         * Laya.init(640, 800);//设置游戏画布宽高、渲染模式。
         * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
         * Laya.loader.load("button.png", null,null, null, null, null);//加载资源
         * function loadComplete() {
         *     console.log("资源加载完成！");
         *     var button:laya.ui.Button = new laya.ui.Button("button.png", "label");//创建一个 Button 类的实例对象 button ,传入它的皮肤skin和标签label。
         *     button.x = 100;//设置 button 对象的属性 x 的值，用于控制 button 对象的显示位置。
         *     button.y = 100;//设置 button 对象的属性 y 的值，用于控制 button 对象的显示位置。
         *     button.toggle = true;//设置 button 对象为切换按钮。
         *     button.clickHandler = laya.utils.Handler.create(this, onClickButton, [button], false);//设置 button 的点击事件处理器。
         *     Laya.stage.addChild(button);//将此 button 对象添加到显示列表。
         * }
         * function onClickButton(button) {
         *     console.log("button.selected = ", button.selected);
         * }
         * </listing>
         */
        toggle: boolean;
        protected _bitmap: laya.editorUI.AutoBitmap;
        protected _text: Text;
        protected _labelColors: Array<any>;
        protected _strokeColors: Array<any>;
        protected _state: number;
        protected _selected: boolean;
        protected _skin: string;
        protected _autoSize: boolean;
        protected _stateNum: number;
        protected _sources: Array<any>;
        protected _clickHandler: laya.utils.Handler;
        protected _stateChanged: boolean;
        /**
         * 创建一个新的 <code>Button</code> 类实例。
         * @param skin 皮肤资源地址。
         * @param label 按钮的文本内容。
         */
        constructor(skin?: string, label?: string);
        /**@inheritDoc */
        destroy(destroyChild?: boolean): void;
        protected createChildren(): void;
        protected createText(): void;
        protected initialize(): void;
        protected onMouse(e: laya.events.Event): void;
        /**
         * <p>对象的皮肤资源地址。</p>
         * 支持单态，两态和三态，用 <code>stateNum</code> 属性设置
         * <p>对象的皮肤地址，以字符串表示。</p>
         * @see #stateNum
         */
        skin: string;
        /**
         * <p>指定对象的状态值，以数字表示。</p>
         * <p>默认值为3。此值决定皮肤资源图片的切割方式。</p>
         * <p><b>取值：</b>
         * <li>1：单态。图片不做切割，按钮的皮肤状态只有一种。</li>
         * <li>2：两态。图片将以竖直方向被等比切割为2部分，从上向下，依次为
         * 弹起状态皮肤、
         * 按下和经过及选中状态皮肤。</li>
         * <li>3：三态。图片将以竖直方向被等比切割为2部分，从上向下，依次为
         * 弹起状态皮肤、
         * 经过状态皮肤、
         * 按下和选中状态皮肤</li>
         * </p>
         */
        stateNum: number;
        protected changeClips(): void;
        protected measureWidth: number;
        protected measureHeight: number;
        /**
         * 按钮的文本内容。
         */
        label: string;
        /**
         * 表示按钮的选中状态。
         * <p>如果值为true，表示该对象处于选中状态。否则该对象处于未选中状态。</p>
         */
        selected: boolean;
        protected state: number;
        protected changeState(): void;
        /**
         * 表示按钮各个状态下的文本颜色。
         * <p><b>格式:</b> "upColor,overColor,downColor,disableColor"。</p>
         */
        labelColors: string;
        /**
         * 表示按钮各个状态下的描边颜色。
         * <p><b>格式:</b> "upColor,overColor,downColor,disableColor"。</p>
         */
        strokeColors: string;
        /**
         * 表示按钮文本标签的边距。
         * <p><b>格式：</b>"上边距,右边距,下边距,左边距"。</p>
         */
        labelPadding: string;
        /**
         * 表示按钮文本标签的字体大小。
         * @see laya.display.Text.fontSize()
         */
        labelSize: number;
        /**
         * <p>描边宽度（以像素为单位）。</p>
         * 默认值0，表示不描边。
         * @see laya.display.Text.stroke()
         */
        labelStroke: number;
        /**
         * <p>描边颜色，以字符串表示。</p>
         * 默认值为 "#000000"（黑色）;
         * @see laya.display.Text.strokeColor()
         */
        labelStrokeColor: string;
        /**
         * 表示按钮文本标签是否为粗体字。
         * @see laya.display.Text.bold()
         */
        labelBold: boolean;
        /**
         * 表示按钮文本标签的字体名称，以字符串形式表示。
         * @see laya.display.Text.font()
         */
        labelFont: string;
        /**标签对齐模式，默认为居中对齐。*/
        labelAlign: string;
        /**
         * 对象的点击事件处理器函数（无默认参数）。
         */
        clickHandler: laya.utils.Handler;
        /**
         * 按钮文本标签 <code>Text</code> 控件。
         */
        text: Text;
        /**
         * <p>当前实例的位图 <code>AutoImage</code> 实例的有效缩放网格数据。</p>
         * <p>数据格式："上边距,右边距,下边距,左边距,是否重复填充(值为0：不重复填充，1：重复填充)"，以逗号分隔。
         * <ul><li>例如："4,4,4,4,1"</li></ul></p>
         * @see laya.ui.AutoBitmap.sizeGrid
         */
        sizeGrid: string;
        /**@inheritDoc */
        width: number;
        /**@inheritDoc */
        height: number;
        /**@inheritDoc */
        dataSource: any;
        /**图标x,y偏移，格式：100,100*/
        iconOffset: string;
        protected _setStateChanged(): void;
    }
}
declare module laya.editorUI {
    /**
     * <code>CheckBox</code> 组件显示一个小方框，该方框内可以有选中标记。
     * <code>CheckBox</code> 组件还可以显示可选的文本标签，默认该标签位于 CheckBox 右侧。
     * <p><code>CheckBox</code> 使用 <code>dataSource</code>赋值时的的默认属性是：<code>selected</code>。</p>
     *
     * @example 以下示例代码，创建了一个 <code>CheckBox</code> 实例。
     * <listing version="3.0">
     * package
     *	{
     *		import laya.ui.CheckBox;
     *		import laya.utils.Handler;
     *
     *		public class CheckBox_Example
     *		{
     *			public function CheckBox_Example()
     *			{
     *				Laya.init(640, 800);//设置游戏画布宽高。
     * 				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *				Laya.loader.load("resource/ui/check.png", Handler.create(this,onLoadComplete));//加载资源。
     *			}
     *
     *			private function onLoadComplete():void
     *			{
     *				trace("资源加载完成！");
     *				var checkBox:CheckBox = new CheckBox("resource/ui/check.png", "这个是一个CheckBox组件。");//创建一个 CheckBox 类的实例对象 checkBox ,传入它的皮肤skin和标签label。
     *				checkBox.x = 100;//设置 checkBox 对象的属性 x 的值，用于控制 checkBox 对象的显示位置。
     *				checkBox.y = 100;//设置 checkBox 对象的属性 y 的值，用于控制 checkBox 对象的显示位置。
     *				checkBox.clickHandler = new Handler(this, onClick, [checkBox]);//设置 checkBox 的点击事件处理器。
     *				Laya.stage.addChild(checkBox);//将此 checkBox 对象添加到显示列表。
     *			}
     *
     *			private function onClick(checkBox:CheckBox):void
     *			{
     *				trace("输出选中状态: checkBox.selected = " + checkBox.selected);
     *			}
     *		}
     *	}
     * </listing>
     * <listing version="3.0">
     * Laya.init(640, 800);//设置游戏画布宽高
     * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色
     * Laya.loader.load("resource/ui/check.png",laya.utils.Handler.create(this,loadComplete));//加载资源
     * function loadComplete()
     * {
     *     console.log("资源加载完成！");
     *     var checkBox = new laya.ui.CheckBox("resource/ui/check.png", "这个是一个CheckBox组件。");//创建一个 CheckBox 类的类的实例对象 checkBox ,传入它的皮肤skin和标签label。
     *     checkBox.x =100;//设置 checkBox 对象的属性 x 的值，用于控制 checkBox 对象的显示位置。
     *     checkBox.y =100;//设置 checkBox 对象的属性 y 的值，用于控制 checkBox 对象的显示位置。
     *     checkBox.clickHandler = new laya.utils.Handler(this,onClick,[checkBox],false);//设置 checkBox 的点击事件处理器。
     *     Laya.stage.addChild(checkBox);//将此 checkBox 对象添加到显示列表。
     * }
     * function onClick(checkBox)
     * {
     *     console.log("checkBox.selected = ",checkBox.selected);
     * }
     * </listing>
     * <listing version="3.0">
     * Laya.init(640, 800);//设置游戏画布宽高
     * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色
     * Laya.loader.load("resource/ui/check.png",laya.utils.Handler.create(this,loadComplete));//加载资源
     * function loadComplete()
     * {
     *     console.log("资源加载完成！");
     *     var checkBox:laya.ui.CheckBox= new laya.ui.CheckBox("resource/ui/check.png", "这个是一个CheckBox组件。");//创建一个 CheckBox 类的类的实例对象 checkBox ,传入它的皮肤skin和标签label。
     *     checkBox.x =100;//设置 checkBox 对象的属性 x 的值，用于控制 checkBox 对象的显示位置。
     *     checkBox.y =100;//设置 checkBox 对象的属性 y 的值，用于控制 checkBox 对象的显示位置。
     *     checkBox.clickHandler = new laya.utils.Handler(this,this.onClick,[checkBox],false);//设置 checkBox 的点击事件处理器。
     *     Laya.stage.addChild(checkBox);//将此 checkBox 对象添加到显示列表。
     * }
     * function onClick(checkBox)
     * {
     *     console.log("checkBox.selected = ",checkBox.selected);
     * }
     * </listing>
     * <listing version="3.0">
     *import CheckBox= laya.ui.CheckBox;
     *import Handler=laya.utils.Handler;
     *class CheckBox_Example{
     *    constructor()
     *    {
     *        Laya.init(640, 800);
     *        Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *        Laya.loader.load("resource/ui/check.png", Handler.create(this,this.onLoadComplete));//加载资源。
     *    }
     *    private onLoadComplete()
     *    {
     *        var checkBox:CheckBox = new CheckBox("resource/ui/check.png", "这个是一个CheckBox组件。");//创建一个 CheckBox 类的实例对象 checkBox ,传入它的皮肤skin和标签label。
     *        checkBox.x = 100;//设置 checkBox 对象的属性 x 的值，用于控制 checkBox 对象的显示位置。
     *        checkBox.y = 100;//设置 checkBox 对象的属性 y 的值，用于控制 checkBox 对象的显示位置。
     *        checkBox.clickHandler = new Handler(this, this.onClick,[checkBox]);//设置 checkBox 的点击事件处理器。
     *        Laya.stage.addChild(checkBox);//将此 checkBox 对象添加到显示列表。
     *    }
     *    private onClick(checkBox:CheckBox):void
     *    {
     *        console.log("输出选中状态: checkBox.selected = " + checkBox.selected);
     *    }
     *}
     * </listing>
     * @author yung
     */
    class CheckBox extends laya.editorUI.Button {
        /**
         * 创建一个新的 <code>CheckBox</code> 组件实例。
         * @param skin 皮肤资源地址。
         * @param label 文本标签的内容。
         */
        constructor(skin?: string, label?: string);
        protected preinitialize(): void;
        protected initialize(): void;
        /**@inheritDoc */
        dataSource: any;
    }
}
declare module laya.editorUI {
    /**
     * <p> <code>Clip</code> 类是位图切片动画。</p>
     * <p> <code>Clip</code> 可将一张图片，按横向分割数量 <code>clipX</code> 、竖向分割数量 <code>clipY</code> ，
     * 或横向分割每个切片的宽度 <code>clipWidth</code> 、竖向分割每个切片的高度 <code>clipHeight</code> ，
     * 从左向右，从上到下，分割组合为一个切片动画。</p>
     *
     * @example 以下示例代码，创建了一个 <code>Clip</code> 实例。
     * <listing version="3.0">
     * package
     *	{
     *		import laya.ui.Clip;
     *
     *		public class Clip_Example
     *		{
     *			private var clip:Clip;
     *
     *			public function Clip_Example()
     *			{
     *				Laya.init(640, 800);//设置游戏画布宽高。
     *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *				onInit();
     *			}
     *
     *			private function onInit():void
     *			{
     *				clip = new Clip("resource/ui/clip_num.png", 10, 1);//创建一个 Clip 类的实例对象 clip ,传入它的皮肤skin和横向分割数量、竖向分割数量。
     *				clip.autoPlay = true;//设置 clip 动画自动播放。
     *				clip.interval = 100;//设置 clip 动画的播放时间间隔。
     *				clip.x = 100;//设置 clip 对象的属性 x 的值，用于控制 clip 对象的显示位置。
     *				clip.y = 100;//设置 clip 对象的属性 y 的值，用于控制 clip 对象的显示位置。
     *				clip.on(Event.CLICK, this, onClick);//给 clip 添加点击事件函数侦听。
     *				Laya.stage.addChild(clip);//将此 clip 对象添加到显示列表。
     *			}
     *
     *			private function onClick():void
     *			{
     *				trace("clip 的点击事件侦听处理函数。clip.total="+ clip.total);
     *				if (clip.isPlaying == true)
     *				{
     *					clip.stop();//停止动画。
     *				}else {
     *					clip.play();//播放动画。
     *				}
     *			}
     *		}
     *	}
     * </listing>
     * <listing version="3.0">
     * Laya.init(640, 800);//设置游戏画布宽高
     * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色
     * var clip;
     * Laya.loader.load("resource/ui/clip_num.png",laya.utils.Handler.create(this,loadComplete));//加载资源
     *
     * function loadComplete() {
     *     console.log("资源加载完成！");
     *     clip = new laya.ui.Clip("resource/ui/clip_num.png",10,1);//创建一个 Clip 类的实例对象 clip ,传入它的皮肤skin和横向分割数量、竖向分割数量。
     *     clip.autoPlay = true;//设置 clip 动画自动播放。
     *     clip.interval = 100;//设置 clip 动画的播放时间间隔。
     *     clip.x =100;//设置 clip 对象的属性 x 的值，用于控制 clip 对象的显示位置。
     *     clip.y =100;//设置 clip 对象的属性 y 的值，用于控制 clip 对象的显示位置。
     *     clip.on(Event.CLICK,this,onClick);//给 clip 添加点击事件函数侦听。
     *     Laya.stage.addChild(clip);//将此 clip 对象添加到显示列表。
     * }
     * function onClick()
     * {
     *     console.log("clip 的点击事件侦听处理函数。");
     *     if(clip.isPlaying == true)
     *     {
     *         clip.stop();
     *     }else {
     *         clip.play();
     *     }
     * }
     * </listing>
     * <listing version="3.0">
     * import Clip = laya.ui.Clip;
     * import Handler = laya.utils.Handler;
     * class Clip_Example {
     *     private clip: Clip;
     *     constructor() {
     *         Laya.init(640, 800);//设置游戏画布宽高。
     *         Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *         this.onInit();
     *     }
     *
     *     private onInit(): void {
     *         this.clip = new Clip("resource/ui/clip_num.png", 10, 1);//创建一个 Clip 类的实例对象 clip ,传入它的皮肤skin和横向分割数量、竖向分割数量。
     *         this.clip.autoPlay = true;//设置 clip 动画自动播放。
     *         this.clip.interval = 100;//设置 clip 动画的播放时间间隔。
     *         this.clip.x = 100;//设置 clip 对象的属性 x 的值，用于控制 clip 对象的显示位置。
     *         this.clip.y = 100;//设置 clip 对象的属性 y 的值，用于控制 clip 对象的显示位置。
     *         this.clip.on(laya.events.Event.CLICK, this, this.onClick);//给 clip 添加点击事件函数侦听。
     *         Laya.stage.addChild(this.clip);//将此 clip 对象添加到显示列表。
     *     }
     *     private onClick(): void {
     *         console.log("clip 的点击事件侦听处理函数。clip.total=" + this.clip.total);
     *         if (this.clip.isPlaying == true) {
     *             this.clip.stop();//停止动画。
     *         } else {
     *             this.clip.play();//播放动画。
     *         }
     *     }
     * }
     *
     * </listing>
     * @author yung
     */
    class Clip extends Component {
        protected _sources: Array<any>;
        protected _bitmap: AutoBitmap;
        protected _skin: string;
        protected _clipX: number;
        protected _clipY: number;
        protected _clipWidth: number;
        protected _clipHeight: number;
        protected _autoPlay: boolean;
        protected _interval: number;
        protected _complete: laya.utils.Handler;
        protected _isPlaying: boolean;
        protected _index: number;
        /**
         * 创建一个新的 <code>Clip</code> 示例。
         * @param url 资源类库名或者地址
         * @param clipX x方向分割个数
         * @param clipY y方向分割个数
         */
        constructor(url?: string, clipX?: number, clipY?: number);
        /**
         *
         * @inheritDoc
         */
        destroy(clearFromCache?: boolean): void;
        /**
         * 释放实例加载的皮肤资源。
         */
        dispose(): void;
        protected createChildren(): void;
        protected initialize(): void;
        protected _onDisplay(e: laya.events.Event): void;
        /**
         * @copy laya.ui.Image#skin
         */
        skin: string;
        /**X轴（横向）切片数量。*/
        clipX: number;
        /**Y轴(竖向)切片数量。*/
        clipY: number;
        /**
         * 横向分割时每个切片的宽度，与 <code>clipX</code> 同时设置时优先级高于 <code>clipX</code> 。
         */
        clipWidth: number;
        /**
         * 竖向分割时每个切片的高度，与 <code>clipY</code> 同时设置时优先级高于 <code>clipY</code> 。
         */
        clipHeight: number;
        protected changeClip(): void;
        protected loadComplete(url: string, img: laya.resource.Texture): void;
        /**
         * 源数据。
         */
        sources: Array<any>;
        /**@inheritDoc */
        width: number;
        /**@inheritDoc */
        height: number;
        protected measureWidth: number;
        protected measureHeight: number;
        /**
         * <p>当前实例的位图 <code>AutoImage</code> 实例的有效缩放网格数据。</p>
         * <p>数据格式："上边距,右边距,下边距,左边距,是否重复填充(值为0：不重复填充，1：重复填充)"，以逗号分隔。
         * <ul><li>例如："4,4,4,4,1"</li></ul></p>
         * @see laya.ui.AutoBitmap.sizeGrid
         */
        sizeGrid: string;
        /**
         * 当前帧索引。
         */
        index: number;
        /**
         * 切片动画的总帧数。
         */
        total: number;
        /**
         * 表示是否自动播放动画，若自动播放值为true,否则值为false;
         * <p>可控制切片动画的播放、停止。</p>
         */
        autoPlay: boolean;
        /**
         * 表示动画播放间隔时间(以毫秒为单位)。
         */
        interval: number;
        /**
         * 表示动画的当前播放状态。
         * 如果动画正在播放中，则为true，否则为flash。
         */
        isPlaying: boolean;
        /**
         * 播放动画。
         */
        play(): void;
        protected _loop(): void;
        /**
         * 停止动画。
         */
        stop(): void;
        /**@inheritDoc */
        dataSource: any;
        /**
         * <code>AutoBitmap</code> 位图实例。
         */
        bitmap: AutoBitmap;
    }
}
declare module laya.editorUI {
    /**
     * <code>ColorPicker</code> 组件将显示包含多个颜色样本的列表，用户可以从中选择颜色。
     *
     * @example 以下示例代码，创建了一个 <code>ColorPicker</code> 实例。
     * <listing version="3.0">
     * package
     *	{
     *		import laya.ui.ColorPicker;
     *		import laya.utils.Handler;
     *
     *		public class ColorPicker_Example
     *		{
     *
     *			public function ColorPicker_Example()
     *			{
     *				Laya.init(640, 800);//设置游戏画布宽高。
     *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *				Laya.loader.load("resource/ui/color.png", Handler.create(this,onLoadComplete));//加载资源。
     *			}
     *
     *			private function onLoadComplete():void
     *			{
     *				trace("资源加载完成！");
     *				var colorPicket:ColorPicker = new ColorPicker();//创建一个 ColorPicker 类的实例对象 colorPicket 。
     *				colorPicket.skin = "resource/ui/color.png";//设置 colorPicket 的皮肤。
     *				colorPicket.x = 100;//设置 colorPicket 对象的属性 x 的值，用于控制 colorPicket 对象的显示位置。
     *				colorPicket.y = 100;//设置 colorPicket 对象的属性 y 的值，用于控制 colorPicket 对象的显示位置。
     *				colorPicket.changeHandler = new Handler(this, onChangeColor,[colorPicket]);//设置 colorPicket 的颜色改变回调函数。
     *				Laya.stage.addChild(colorPicket);//将此 colorPicket 对象添加到显示列表。
     *			}
     *			private function onChangeColor(colorPicket:ColorPicker):void
     *			{
     *				trace("当前选择的颜色： " + colorPicket.selectedColor);
     *			}
     *
     *		}
     *
     *	}
     * </listing>
     * <listing version="3.0">
     * Laya.init(640, 800);//设置游戏画布宽高
     * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色
     * Laya.loader.load("resource/ui/color.png",laya.utils.Handler.create(this,loadComplete));//加载资源
     * function loadComplete()
     * {
     *     console.log("资源加载完成！");
     *     var colorPicket = new laya.ui.ColorPicker();//创建一个 ColorPicker 类的实例对象 colorPicket 。
     *     colorPicket.skin = "resource/ui/color.png";//设置 colorPicket 的皮肤。
     *     colorPicket.x = 100;//设置 colorPicket 对象的属性 x 的值，用于控制 colorPicket 对象的显示位置。
     *     colorPicket.y = 100;//设置 colorPicket 对象的属性 y 的值，用于控制 colorPicket 对象的显示位置。
     *     colorPicket.changeHandler = laya.utils.Handler.create(this, onChangeColor,[colorPicket],false);//设置 colorPicket 的颜色改变回调函数。
     *     Laya.stage.addChild(colorPicket);//将此 colorPicket 对象添加到显示列表。
     * }
     * function onChangeColor(colorPicket)
     * {
     *     console.log("当前选择的颜色： " + colorPicket.selectedColor);
     * }
     * </listing>
     * <listing version="3.0">
     * import ColorPicker = laya.ui.ColorPicker;
     * import Handler = laya.utils.Handler;
     *
     * class ColorPicker_Example {
     *
     *     constructor() {
     *         Laya.init(640, 800);//设置游戏画布宽高。
     *         Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *         Laya.loader.load("resource/ui/color.png", Handler.create(this, this.onLoadComplete));//加载资源。
     *     }
     *
     *     private onLoadComplete(): void {
     *         console.log("资源加载完成！");
     *         var colorPicket: ColorPicker = new ColorPicker();//创建一个 ColorPicker 类的实例对象 colorPicket 。
     *         colorPicket.skin = "resource/ui/color.png";//设置 colorPicket 的皮肤。
     *         colorPicket.x = 100;//设置 colorPicket 对象的属性 x 的值，用于控制 colorPicket 对象的显示位置。
     *         colorPicket.y = 100;//设置 colorPicket 对象的属性 y 的值，用于控制 colorPicket 对象的显示位置。
     *         colorPicket.changeHandler = new Handler(this, this.onChangeColor, [colorPicket]);//设置 colorPicket 的颜色改变回调函数。
     *         Laya.stage.addChild(colorPicket);//将此 colorPicket 对象添加到显示列表。
     *     }
     *     private onChangeColor(colorPicket: ColorPicker): void {
     *         console.log("当前选择的颜色： " + colorPicket.selectedColor);
     *     }
     *
     * }
     * </listing>
     * @author yung
     */
    class ColorPicker extends Component {
        /**
         * 当颜色发生改变时执行的函数处理器。
         * 默认返回参数color：颜色值字符串。
         */
        changeHandler: laya.utils.Handler;
        protected _gridSize: number;
        protected _bgColor: string;
        protected _borderColor: string;
        protected _inputColor: string;
        protected _inputBgColor: string;
        protected _colorPanel: Box;
        protected _colorTiles: laya.display.Sprite;
        protected _colorBlock: laya.display.Sprite;
        protected _colorInput: laya.display.Input;
        protected _colorButton: Button;
        protected _colors: Array<any>;
        protected _selectedColor: string;
        /**
         *@inheritDoc
         */
        destroy(destroyChild?: boolean): void;
        protected createChildren(): void;
        protected initialize(): void;
        protected changePanel(): void;
        /**
         * 打开颜色样本列表面板。
         */
        open(): void;
        /**
         * 关闭颜色样本列表面板。
         */
        close(): void;
        protected getColorByMouse(): string;
        /**
         * 表示选择的颜色值。
         * @return
         */
        selectedColor: string;
        /**
         * @copy laya.ui.Button#skin
         * @return
         */
        skin: string;
        /**
         * 表示颜色样本列表面板的背景颜色值。
         * @return
         */
        bgColor: string;
        /**
         * 表示颜色样本列表面板的边框颜色值。
         * @return
         */
        borderColor: string;
        /**
         * 表示颜色样本列表面板选择或输入的颜色值。
         * @return
         */
        inputColor: string;
        /**
         * 表示颜色输入框的背景颜色值。
         * @return
         */
        inputBgColor: string;
    }
}
declare module laya.editorUI {
    /**
     * <code>ComboBox</code> 组件包含一个下拉列表，用户可以从该列表中选择单个值。
     *
     * @example 以下示例代码，创建了一个 <code>ComboBox</code> 实例。
     * <listing version="3.0">
     * package
     *	{
     *		import laya.ui.ComboBox;
     *		import laya.utils.Handler;
     *
     *		public class ComboBox_Example
     *		{
     *			public function ComboBox_Example()
     *			{
     *				Laya.init(640, 800);//设置游戏画布宽高。
     *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *				Laya.loader.load("resource/ui/button.png", Handler.create(this,onLoadComplete));//加载资源。
     *			}
     *
     *			private function onLoadComplete():void
     *			{
     *				trace("资源加载完成！");
     *				var comboBox:ComboBox = new ComboBox("resource/ui/button.png", "item0,item1,item2,item3,item4,item5");//创建一个 ComboBox 类的实例对象 comboBox ,传入它的皮肤和标签集。
     *				comboBox.x = 100;//设置 comboBox 对象的属性 x 的值，用于控制 comboBox 对象的显示位置。
     *				comboBox.y = 100;//设置 comboBox 对象的属性 x 的值，用于控制 comboBox 对象的显示位置。
     *				comboBox.selectHandler = new Handler(this, onSelect);//设置 comboBox 选择项改变时执行的处理器。
     *				Laya.stage.addChild(comboBox);//将此 comboBox 对象添加到显示列表。
     *			}
     *
     *			private function onSelect(index:int):void
     *			{
     *				trace("当前选中的项对象索引： ",index);
     *			}
     *
     *		}
     *
     *	}
     * </listing>
     * <listing version="3.0">
     * Laya.init(640, 800);//设置游戏画布宽高。
     * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     * Laya.loader.load("resource/ui/button.png",laya.utils.Handler.create(this,loadComplete));//加载资源
     * function loadComplete() {
     *     console.log("资源加载完成！");
     *     var comboBox = new laya.ui.ComboBox("resource/ui/button.png", "item0,item1,item2,item3,item4,item5");//创建一个 ComboBox 类的实例对象 comboBox ,传入它的皮肤和标签集。
     *     comboBox.x = 100;//设置 comboBox 对象的属性 x 的值，用于控制 comboBox 对象的显示位置。
     *     comboBox.y = 100;//设置 comboBox 对象的属性 x 的值，用于控制 comboBox 对象的显示位置。
     *     comboBox.selectHandler = new laya.utils.Handler(this, onSelect);//设置 comboBox 选择项改变时执行的处理器。
     *     Laya.stage.addChild(comboBox);//将此 comboBox 对象添加到显示列表。
     * }
     * function onSelect(index)
     * {
     *     console.log("当前选中的项对象索引： ",index);
     * }
     * </listing>
     * <listing version="3.0">
     * import ComboBox = laya.ui.ComboBox;
     * import Handler = laya.utils.Handler;
     * class ComboBox_Example {
     *     constructor() {
     *         Laya.init(640, 800);//设置游戏画布宽高。
     *         Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *         Laya.loader.load("resource/ui/button.png", Handler.create(this, this.onLoadComplete));//加载资源。
     *     }
     *
     *     private onLoadComplete(): void {
     *         console.log("资源加载完成！");
     *         var comboBox: ComboBox = new ComboBox("resource/ui/button.png", "item0,item1,item2,item3,item4,item5");//创建一个 ComboBox 类的实例对象 comboBox ,传入它的皮肤和标签集。
     *         comboBox.x = 100;//设置 comboBox 对象的属性 x 的值，用于控制 comboBox 对象的显示位置。
     *         comboBox.y = 100;//设置 comboBox 对象的属性 x 的值，用于控制 comboBox 对象的显示位置。
     *         comboBox.selectHandler = new Handler(this, this.onSelect);//设置 comboBox 选择项改变时执行的处理器。
     *         Laya.stage.addChild(comboBox);//将此 comboBox 对象添加到显示列表。
     *     }
     *
     *     private onSelect(index: number): void {
     *         console.log("当前选中的项对象索引： ", index);
     *     }
     *
     * }
     *
     * </listing>
     */
    class ComboBox extends Component {
        protected _visibleNum: number;
        protected _button: Button;
        protected _list: List;
        protected _isOpen: boolean;
        protected _scrollBar: VScrollBar;
        protected _itemColors: Array<any>;
        protected _itemSize: number;
        protected _labels: Array<any>;
        protected _selectedIndex: number;
        protected _selectHandler: laya.utils.Handler;
        protected _itemHeight: number;
        protected _listHeight: number;
        /**
         * 创建一个新的 <code>ComboBox</code> 组件实例。
         * @param skin 皮肤资源地址。
         * @param labels 下拉列表的标签集字符串。以逗号做分割，如"item0,item1,item2,item3,item4,item5"。
         */
        constructor(skin?: string, labels?: string);
        /**@inheritDoc */
        destroy(destroyChild?: boolean): void;
        protected createChildren(): void;
        protected initialize(): void;
        /**
         * @copy laya.ui.Button#skin
         * @return
         */
        skin: string;
        protected measureWidth: number;
        protected measureHeight: number;
        protected changeList(): void;
        protected onlistItemMouse(e: laya.events.Event, index: number): void;
        protected changeOpen(): void;
        /**@inheritDoc */
        width: number;
        /**@inheritDoc */
        height: number;
        /**
         * 标签集合字符串。
         * @return
         */
        labels: string;
        protected changeItem(): void;
        /**
         * 表示选择的下拉列表项的索引。
         * @return
         */
        selectedIndex: number;
        /**
         * 改变下拉列表的选择项时执行的处理器(默认返回参数index:int)。
         * @return
         */
        selectHandler: laya.utils.Handler;
        /**
         * 表示选择的下拉列表项的的标签。
         * @return
         */
        selectedLabel: string;
        /**
         * 获取或设置没有滚动条的下拉列表中可显示的最大行数。
         * @return
         */
        visibleNum: number;
        /**
         * 下拉列表项颜色。
         * <p><b>格式：</b>"悬停或被选中时背景颜色,悬停或被选中时标签颜色,标签颜色,边框颜色,背景颜色"</p>
         * @return
         */
        itemColors: string;
        /**
         * 下拉列表项标签的字体大小。
         * @return
         */
        itemSize: number;
        /**
         * 表示下拉列表的打开状态。
         * @return
         */
        isOpen: boolean;
        protected removeList(e: laya.events.Event): void;
        /**
         * 滚动条皮肤。
         * @return
         */
        scrollBarSkin: string;
        /**
         * <p>当前实例的位图 <code>AutoImage</code> 实例的有效缩放网格数据。</p>
         * <p>数据格式："上边距,右边距,下边距,左边距,是否重复填充(值为0：不重复填充，1：重复填充)"，以逗号分隔。
         * <ul><li>例如："4,4,4,4,1"</li></ul></p>
         * @see laya.ui.AutoBitmap.sizeGrid
         * @return
         */
        sizeGrid: string;
        /**
         * 获取对 <code>ComboBox</code> 组件所包含的 <code>VScrollBar</code> 滚动条组件的引用。
         * @return
         */
        scrollBar: VScrollBar;
        /**
         * 获取对 <code>ComboBox</code> 组件所包含的 <code>Button</code> 组件的引用。
         */
        button: Button;
        /**
         * 获取对 <code>ComboBox</code> 组件所包含的 <code>List</code> 列表组件的引用。
         * @return
         */
        list: List;
        /**@inheritDoc */
        dataSource: any;
        /**
         * 获取或设置对 <code>ComboBox</code> 组件所包含的 <code>Button</code> 组件的文本标签颜色。
         * <p><b>格式：</b>upColor,overColor,downColor,disableColor</p>
         * @return
         */
        labelColors: string;
        /**
         * 获取或设置对 <code>ComboBox</code> 组件所包含的 <code>Button</code> 组件的文本边距。
         * <p><b>格式：</b>上边距,右边距,下边距,左边距</p>
         * @return
         */
        labelPadding: string;
        /**
         * 获取或设置对 <code>ComboBox</code> 组件所包含的 <code>Button</code> 组件的标签字体大小。
         * @return
         */
        labelSize: number;
        /**
         * 表示按钮文本标签是否为粗体字。
         *
         * @see laya.display.Text#bold
         * @return
         */
        labelBold: boolean;
        /**
         * 表示按钮文本标签的字体名称，以字符串形式表示。
         *
         * @see laya.display.Text#font
         * @return
         */
        labelFont: string;
        /**
         * 表示按钮的状态值。
         *
         * @see laya.ui.Button#stateNum
         * @return
         */
        stateNum: number;
    }
}
declare module laya.editorUI {
    /**
     * <code>Component</code> 是ui控件类的基类。
     *
     *
     * <p>生命周期：preinitialize > createChildren > initialize > 组件构造函数</p>
     */
    class Component extends laya.ui.Component implements laya.ui.IComponent {
        _getBoundPointsM(ifRotate?: boolean): Array<any>;
        disableLayout: boolean;
        protected resetLayoutX(): void;
        protected resetLayoutY(): void;
    }
}
declare module laya.editorUI {
    /**
     * <code>Dialog</code> 组件是一个弹出对话框。
     *
     * @example 以下示例代码，创建了一个 <code>Dialog</code> 实例。
     * <listing version="3.0">
     * package
     *	{
     *		import laya.ui.Dialog;
     *		import laya.utils.Handler;
     *
     *		public class Dialog_Example
     *		{
     *			private var dialog:Dialog_Instance;
     *			public function Dialog_Example()
     *			{
     *				Laya.init(640, 800);//设置游戏画布宽高、渲染模式。
     *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *				Laya.loader.load("resource/ui/btn_close.png", Handler.create(this, onLoadComplete));//加载资源。
     *			}
     *
     *			private function onLoadComplete():void
     *			{
     *				dialog = new Dialog_Instance();//创建一个 Dialog_Instance 类的实例对象 dialog。
     *				dialog.dragArea = "0,0,150,50";//设置 dialog 的拖拽区域。
     *				dialog.show();//显示 dialog。
     *				dialog.closeHandler = new Handler(this, onClose);//设置 dialog 的关闭函数处理器。
     *			}
     *
     *			private function onClose(name:String):void
     *			{
     *				if (name == Dialog.CLOSE)
     *				{
     *					trace("通过点击 name 为" + name +"的组件，关闭了dialog。");
     *				}
     *			}
     *		}
     *	}
     *
     *	import laya.ui.Button;
     *	import laya.ui.Dialog;
     *	import laya.ui.Image;
     *
     *	class Dialog_Instance extends Dialog
     *	{
     *		function Dialog_Instance():void
     *		{
     *			var bg:Image = new Image("resource/ui/bg.png");
     *			bg.sizeGrid = "40,10,5,10";
     *			bg.width = 150;
     *			bg.height = 250;
     *			addChild(bg);
     *
     *			var image:Image = new Image("resource/ui/image.png");
     *			addChild(image);
     *
     *			var button:Button = new Button("resource/ui/btn_close.png");
     *			button.name = Dialog.CLOSE;//设置button的name属性值。
     *			button.x = 0;
     *			button.y = 0;
     *			addChild(button);
     *		}
     *	}
     * </listing>
     * <listing version="3.0">
     * Laya.init(640, 800);//设置游戏画布宽高、渲染模式
     * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色
     * var dialog;
     * Laya.loader.load("resource/ui/btn_close.png", laya.utils.Handler.create(this, loadComplete));//加载资源
     *
     * (function (_super) {//新建一个类Dialog_Instance继承自laya.ui.Dialog。
     *     function Dialog_Instance() {
     *         Dialog_Instance.__super.call(this);//初始化父类
     *
     *         var bg = new laya.ui.Image("resource/ui/bg.png");//新建一个 Image 类的实例 bg 。
     *         bg.sizeGrid = "10,40,10,5";//设置 bg 的网格信息。
     *         bg.width = 150;//设置 bg 的宽度。
     *         bg.height = 250;//设置 bg 的高度。
     *         this.addChild(bg);//将 bg 添加到显示列表。
     *
     *         var image = new laya.ui.Image("resource/ui/image.png");//新建一个 Image 类的实例 image 。
     *         this.addChild(image);//将 image 添加到显示列表。
     *
     *         var button = new laya.ui.Button("resource/ui/btn_close.png");//新建一个 Button 类的实例 bg 。
     *         button.name = laya.ui.Dialog.CLOSE;//设置 button 的 name 属性值。
     *         button.x = 0;//设置 button 对象的属性 x 的值，用于控制 button 对象的显示位置。
     *         button.y = 0;//设置 button 对象的属性 y 的值，用于控制 button 对象的显示位置。
     *         this.addChild(button);//将 button 添加到显示列表。
     *     };
     *
     *     Laya.class(Dialog_Instance,"mypackage.dialogExample.Dialog_Instance",_super);//注册类Dialog_Instance。
     * })(laya.ui.Dialog);
     *
     * function loadComplete() {
     *     console.log("资源加载完成！");
     *     dialog = new mypackage.dialogExample.Dialog_Instance();//创建一个 Dialog_Instance 类的实例对象 dialog。
     *     dialog.dragArea = "0,0,150,50";//设置 dialog 的拖拽区域。
     *     dialog.show();//显示 dialog。
     *     dialog.closeHandler = new laya.utils.Handler(this, onClose);//设置 dialog 的关闭函数处理器。
     * }
     * function onClose(name) {
     *     if (name == laya.ui.Dialog.CLOSE) {
     *         console.log("通过点击 name 为" + name + "的组件，关闭了dialog。");
     *     }
     * }
     * </listing>
     * <listing version="3.0">
     * import Dialog = laya.ui.Dialog;
     * import Handler = laya.utils.Handler;
     * class Dialog_Example {
     *     private dialog: Dialog_Instance;
     *     constructor() {
     *         Laya.init(640, 800);//设置游戏画布宽高。
     *         Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *         Laya.loader.load("resource/ui/btn_close.png", Handler.create(this, this.onLoadComplete));//加载资源。
     *     }
     *     private onLoadComplete(): void {
     *         this.dialog = new Dialog_Instance();//创建一个 Dialog_Instance 类的实例对象 dialog。
     *         this.dialog.dragArea = "0,0,150,50";//设置 dialog 的拖拽区域。
     *         this.dialog.show();//显示 dialog。
     *         this.dialog.closeHandler = new Handler(this, this.onClose);//设置 dialog 的关闭函数处理器。
     *     }
     *     private onClose(name: string): void {
     *         if (name == Dialog.CLOSE) {
     *             console.log("通过点击 name 为" + name + "的组件，关闭了dialog。");
     *         }
     *     }
     * }
     * import Button = laya.ui.Button;
     * class Dialog_Instance extends Dialog {
     *     Dialog_Instance(): void {
     *         var bg: laya.ui.Image = new laya.ui.Image("resource/ui/bg.png");
     *         bg.sizeGrid = "40,10,5,10";
     *         bg.width = 150;
     *         bg.height = 250;
     *         this.addChild(bg);
     *         var image: laya.ui.Image = new laya.ui.Image("resource/ui/image.png");
     *         this.addChild(image);
     *         var button: Button = new Button("resource/ui/btn_close.png");
     *         button.name = Dialog.CLOSE;//设置button的name属性值。
     *         button.x = 0;
     *         button.y = 0;
     *         this.addChild(button);
     *     }
     * }
     * </listing>
     * @author yung
     */
    class Dialog extends View {
        static CLOSE: string;
        static CANCEL: string;
        static SURE: string;
        static NO: string;
        static OK: string;
        static YES: string;
        private static _manager;
        static manager: DialogManager;
        /**
         * 一个布尔值，指定对话框是否居中弹出。
         *
         * <p>如果值为true，则居中弹出。</p>
         */
        popupCenter: boolean;
        /**
         * 对话框被关闭时会触发的回调函数处理器。
         *
         * <p>回调函数参数为用户点击的按钮名字name:String。</p>
         */
        closeHandler: laya.utils.Handler;
        protected _dragArea: laya.maths.Rectangle;
        protected initialize(): void;
        protected onClick(e: laya.events.Event): void;
        /**
         * 显示对话框（以非模式窗口方式显示）。
         * @param closeOther 是否关闭其它的对话框。若值为true则关闭其它对话框。
         */
        show(closeOther?: boolean): void;
        /**
         * 显示对话框（以模式窗口方式显示）。
         * @param closeOther 是否关闭其它的对话框。若值为true则关闭其它对话框。
         */
        popup(closeOther?: boolean): void;
        /**
         * 关闭对话框。
         * @param type 如果是点击默认关闭按钮触发，则传入关闭按钮的名字(name)，否则为null。
         */
        close(type?: string): void;
        /**关闭所有对话框。*/
        static closeAll(): void;
        /**
         * 用来指定对话框的拖拽区域。默认值为"0,0,0,0"。
         * <p><b>格式：</b>构成一个矩形所需的 x,y,width,heith 值，用逗号连接为字符串。
         * 例如："0,0,100,200"。
         * </p>
         *
         * @see #includeExamplesSummary 请参考示例
         * @return
         */
        dragArea: string;
        /**
         * 弹出框的显示状态；如果弹框处于显示中，则为true，否则为false;
         * @return
         */
        isPopup: boolean;
    }
    class DialogManager extends laya.display.Sprite {
        dialogLayer: laya.display.Sprite;
        modalLayer: laya.display.Sprite;
        /**
         * 创建一个新的 <code>DialogManager</code> 类实例。
         */
        DialogManager(): any;
        /**
         * 显示对话框(非模式窗口类型)。
         * @param dialog 需要显示的对象框 <code>Dialog</code> 实例。
         * @param closeOther 是否关闭其它对话框，若值为ture，则关闭其它的对话框。
         */
        show(dialog: laya.ui.Dialog, closeOther?: boolean): void;
        /**
         * 显示对话框(模式窗口类型)。
         * @param dialog 需要显示的对象框 <code>Dialog</code> 实例。
         * @param closeOther 是否关闭其它对话框，若值为ture，则关闭其它的对话框。
         */
        popup(dialog: laya.ui.Dialog, closeOther?: boolean): void;
        /**
         * 关闭对话框。
         * @param dialog 需要关闭的对象框 <code>Dialog</code> 实例。
         */
        close(dialog: laya.ui.Dialog): void;
        /**
         * 关闭所有的对话框。
         */
        closeAll(): void;
    }
}
declare module laya.editorUI.graphic {
    /**
     * 控制点
     */
    class ControlPoint extends laya.display.Sprite {
        startHandler: laya.utils.Handler;
        endHandler: laya.utils.Handler;
        dragingHandler: laya.utils.Handler;
        constructor();
        recover(): void;
        static getControlPoint(start: laya.utils.Handler, end: laya.utils.Handler, draging: laya.utils.Handler): ControlPoint;
    }
}
declare module laya.editorUI.graphic {
    /**
     * 画圆
     */
    class DrawCircle extends GraphicBase {
        radius: number;
        constructor();
        drawSelf(): void;
        freshIDESelect(): void;
        setIDESelectState(isSelect: boolean): void;
    }
}
declare module laya.editorUI.graphic {
    /**
     * 画曲线
     */
    class DrawCurves extends DrawLines {
        constructor();
        protected drawWork(): void;
    }
}
declare module laya.editorUI.graphic {
    /**
     * 画线
     */
    class DrawLine extends GraphicBase {
        toX: number;
        toY: number;
        constructor();
        drawSelf(): void;
        freshIDESelect(): void;
        setIDESelectState(isSelect: boolean): void;
    }
}
declare module laya.editorUI.graphic {
    /**
     * 绘制线段
     */
    class DrawLines extends GraphicBase {
        points: string;
        pointList: Array<any>;
        isSelectState: boolean;
        constructor();
        getPointsByStr(str: string): Array<any>;
        getPointsArrBySpList(spList: Array<any>): Array<any>;
        drawSelf(): void;
        protected drawWork(): void;
        freshIDESelect(): void;
        setIDESelectState(isSelect: boolean): void;
    }
}
declare module laya.editorUI.graphic {
    /**
     * 绘制扇形
     */
    class DrawPie extends GraphicBase {
        radius: number;
        startAngle: number;
        endAngle: number;
        constructor();
        drawSelf(): void;
        freshIDESelect(): void;
        setIDESelectState(isSelect: boolean): void;
    }
}
declare module laya.editorUI.graphic {
    /**
     * 绘制多边形
     */
    class DrawPoly extends DrawLines {
        constructor();
        protected drawWork(): void;
    }
}
declare module laya.editorUI.graphic {
    /**
     * 绘制矩形
     */
    class DrawRect extends GraphicBase implements IGraphic {
        drawSelf(): void;
        width: number;
        height: number;
    }
}
declare module laya.editorUI.graphic {
    /**
     * 绘制位图
     */
    class DrawTexture extends GraphicBase {
        drawSelf(): void;
        width: number;
        height: number;
        skin: string;
    }
}
declare module laya.editorUI.graphic {
    /**
     * 绘制文本
     */
    class FillText extends GraphicBase {
        text: string;
        font: string;
        color: string;
        textAlign: string;
        constructor();
        drawSelf(): void;
        _getBoundPointsM(ifRotate?: boolean): Array<any>;
    }
}
declare module laya.editorUI.graphic {
    /**
     * 填充位图
     */
    class FillTexture extends DrawTexture {
        constructor();
        drawSelf(): void;
        repeat: string;
    }
}
declare module laya.editorUI.graphic {
    /**
     * 矢量图基类
     */
    class GraphicBase extends laya.display.Sprite implements IGraphic {
        fillColor: any;
        lineColor: any;
        lineWidth: number;
        disablePivot: boolean;
        constructor();
        drawSelf(): void;
        addChild(node: laya.display.Node): laya.display.Node;
        myAddChild(node: laya.display.Node): laya.display.Node;
    }
}
declare module laya.editorUI.graphic {
    /**
     * 矢量图接口
     */
    interface IGraphic {
    }
}
declare module laya.editorUI {
    /**
     * Graphics容器
     */
    class GraphicContainer extends Box {
        constructor();
        removeChild(node: laya.display.Node): laya.display.Node;
        addChild(node: laya.display.Node): laya.display.Node;
    }
}
declare module laya.editorUI {
    /**
     * Graphics解析器
     */
    class GraphicParser extends laya.display.GraphicAnimation {
        protected _getTextureByUrl(url: string): string;
        static parseAnimationData(aniData: any): any;
    }
}
declare module laya.editorUI {
    /**
     * Graphics位图
     */
    class GraphicPic extends Image {
        constructor();
    }
}
declare module laya.editorUI {
    /**
     * 地图格子编辑组件
     */
    class GridEditor extends laya.display.Sprite {
        disablePivot: boolean;
        enableDragSet: boolean;
        isCleanMode: boolean;
        static DataSign: string;
        private static tipText;
        constructor();
        showPos: boolean;
        disableDragMove: boolean;
        drawSelf(): void;
        gridWidth: number;
        gridHeight: number;
        countX: number;
        countY: number;
        value: number;
        lineColor: string;
        textColor: string;
        lineWidth: number;
        data: Array<any>;
        private static _wordSpace;
        getPointsByStr(str: string): Array<any>;
        renderMe(): void;
        private static _ijPosPoint;
        getIJPos(i: number, j: number): laya.maths.Point;
        private static _preMousePos;
        private static _preMyPos;
        protected onStageMouseMove(e: laya.events.Event): void;
        protected onStageMouseUp(e: laya.events.Event): void;
        click(): void;
        getWrapGrid(x: number, y: number, width: number, height: number): Array<any>;
        getGridIJ(x: number, y: number): laya.maths.Point;
        freshIDESelect(): void;
        isSelectState: boolean;
        setIDESelectState(isSelect: boolean): void;
    }
}
declare module laya.editorUI {
    /**
     * <code>Group</code> 是一个可以自动布局的项集合控件。
     *
     * <p> <code>Group</code> 的默认项对象为 <code>Button</code> 类实例。
     * <code>Group</code> 是 <code>Tab</code> 和 <code>RadioGroup</code> 的基类。</p>
     */
    class Group extends Box implements laya.ui.IItem {
        /**
         * 改变 <code>Group</code> 的选择项时执行的处理器，(默认返回参数： 项索引（index:int）)。
         *
         */
        selectHandler: laya.utils.Handler;
        protected _items: Array<any>;
        protected _selectedIndex: number;
        protected _skin: string;
        protected _direction: string;
        protected _space: number;
        protected _labels: string;
        protected _labelColors: string;
        protected _labelStrokeColor: string;
        protected _strokeColors: string;
        protected _labelStroke: number;
        protected _labelSize: number;
        protected _labelBold: boolean;
        protected _labelPadding: string;
        protected _labelAlign: string;
        protected _stateNum: number;
        /**
         * 创建一个新的 <code>Group</code> 类实例。
         *
         * @param labels 标签集字符串。以逗号做分割，如"item0,item1,item2,item3,item4,item5"。
         * @param skin 皮肤。
         */
        constructor(labels?: string, skin?: string);
        /**@inheritDoc */
        destroy(destroyChild?: boolean): void;
        /**
         * 添加一个项对象，返回此项对象的索引id。
         *
         * @param item 需要添加的项对象。
         * @param autoLayOut 是否自动布局，如果为true，会根据 <code>direction</code> 和 <code>space</code> 属性计算item的位置。
         * @return
         */
        addItem(item: ISelect, autoLayOut?: boolean): number;
        /**
         * 删除一个项对象。
         *
         * @param item 需要删除的项对象。
         * @param autoLayOut 是否自动布局，如果为true，会根据 <code>direction</code> 和 <code>space</code> 属性计算item的位置。
         */
        delItem(item: ISelect, autoLayOut?: boolean): void;
        /**
         * 初始化项对象们。
         */
        initItems(): void;
        protected itemClick(index: number): void;
        /**
         * 表示当前选择的项索引。默认值为-1。
         * @return
         */
        selectedIndex: number;
        protected setSelect(index: number, selected: boolean): void;
        /**
         * @copy laya.ui.Image#skin
         * @return
         */
        skin: string;
        /**
         * 标签集合字符串。以逗号做分割，如"item0,item1,item2,item3,item4,item5"。
         * @return
         */
        labels: string;
        protected createItem(skin: string, label: string): laya.display.Sprite;
        /**
         *
         * @copy laya.ui.Button#labelColors()
         * @return
         */
        /**
         *
         * @param value
         */
        labelColors: string;
        /**
         * <p>描边宽度（以像素为单位）。</p>
         * 默认值0，表示不描边。
         * @see laya.display.Text.stroke()
         * @return
         */
        labelStroke: number;
        /**
         * <p>描边颜色，以字符串表示。</p>
         * 默认值为 "#000000"（黑色）;
         * @see laya.display.Text.strokeColor()
         * @return
         */
        labelStrokeColor: string;
        /**
         * <p>表示各个状态下的描边颜色。</p>
         * @see laya.display.Text.strokeColor()
         * @return
         */
        strokeColors: string;
        /**
         * 表示按钮文本标签的字体大小。
         *
         * @return
         */
        /**
         *
         * @param value
         */
        labelSize: number;
        /**
         * 表示按钮文本标签的字体大小。
         *
         * @return
         */
        /**
         *
         * @param value
         */
        stateNum: number;
        /**
         * 表示按钮文本标签是否为粗体字。
         * @return
         */
        /**
         *
         * @param value
         */
        labelBold: boolean;
        /**
         * 表示按钮文本标签的边距。
         *
         * <p><b>格式：</b>"上边距,右边距,下边距,左边距"。</p>
         * @return
         */
        /**
         *
         * @param value
         */
        labelPadding: string;
        /**
         * 布局方向。
         *
         * <p>默认值为"horizontal"。</p>
         * <p><b>取值：</b>
         * <li>"horizontal"：表示水平布局。</li>
         * <li>"vertical"：表示垂直布局。</li>
         * </p>
         * @return
         */
        /**
         *
         * @param value
         */
        direction: string;
        /**
         * 项对象们之间的间隔（以像素为单位）。
         * @return
         */
        space: number;
        protected changeLabels(): void;
        protected commitMeasure(): void;
        /**
         * 项对象们的存放数组。
         * @return
         */
        items: Array<any>;
        /**
         * 获取或设置当前选择的项对象。
         * @return
         */
        /**
         *
         * @param value
         */
        selection: ISelect;
        /**@inheritDoc */
        dataSource: any;
    }
}
declare module laya.editorUI {
    /**HBox容器*/
    class HBox extends LayoutBox {
        static NONE: string;
        static TOP: string;
        static MIDDLE: string;
        static BOTTOM: string;
        constructor();
        protected sortItem(items: Array<any>): void;
        protected changeItems(): void;
    }
}
declare module laya.editorUI {
    /**
     * 使用 <code>HScrollBar</code> （水平 <code>ScrollBar</code> ）控件，可以在因数据太多而不能在显示区域完全显示时控制显示的数据部分。
     *
     *
     * @example 以下示例代码，创建了一个 <code>HScrollBar</code> 实例。
     * <listing version="3.0">
     * package
     *	{
     *		import laya.ui.HScrollBar;
     *		import laya.utils.Handler;
     *
     *		public class HScrollBar_Example
     *		{
     *			private var hScrollBar:HScrollBar;
     *			public function HScrollBar_Example()
     *			{
     *				Laya.init(640, 800);//设置游戏画布宽高。
     *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *				Laya.loader.load(["resource/ui/hscroll.png", "resource/ui/hscroll$bar.png", "resource/ui/hscroll$down.png", "resource/ui/hscroll$up.png"], Handler.create(this, onLoadComplete));//加载资源。
     *			}
     *
     *			private function onLoadComplete():void
     *			{
     *				hScrollBar = new HScrollBar();//创建一个 HScrollBar 类的实例对象 hScrollBar 。
     *				hScrollBar.skin = "resource/ui/hscroll.png";//设置 hScrollBar 的皮肤。
     *				hScrollBar.x = 100;//设置 hScrollBar 对象的属性 x 的值，用于控制 hScrollBar 对象的显示位置。
     *				hScrollBar.y = 100;//设置 hScrollBar 对象的属性 y 的值，用于控制 hScrollBar 对象的显示位置。
     *				hScrollBar.changeHandler = new Handler(this, onChange);//设置 hScrollBar 的滚动变化处理器。
     *				Laya.stage.addChild(hScrollBar);//将此 hScrollBar 对象添加到显示列表。
     *			}
     *
     *			private function onChange(value:Number):void
     *			{
     *				trace("滚动条的位置： value=" + value);
     *			}
     *
     *		}
     *
     *	}
     * </listing>
     * <listing version="3.0">
     * Laya.init(640, 800);//设置游戏画布宽高
     * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色
     * var hScrollBar;
     * var res  = ["resource/ui/hscroll.png", "resource/ui/hscroll$bar.png", "resource/ui/hscroll$down.png", "resource/ui/hscroll$up.png"];
     * Laya.loader.load(res,laya.utils.Handler.create(this, onLoadComplete));//加载资源。
     *
     * function onLoadComplete() {
     *     console.log("资源加载完成！");
     *     hScrollBar = new laya.ui.HScrollBar();//创建一个 HScrollBar 类的实例对象 hScrollBar 。
     *     hScrollBar.skin = "resource/ui/hscroll.png";//设置 hScrollBar 的皮肤。
     *     hScrollBar.x = 100;//设置 hScrollBar 对象的属性 x 的值，用于控制 hScrollBar 对象的显示位置。
     *     hScrollBar.y = 100;//设置 hScrollBar 对象的属性 y 的值，用于控制 hScrollBar 对象的显示位置。
     *     hScrollBar.changeHandler = new laya.utils.Handler(this, onChange);//设置 hScrollBar 的滚动变化处理器。
     *     Laya.stage.addChild(hScrollBar);//将此 hScrollBar 对象添加到显示列表。
     * }
     *
     * function onChange(value)
     * {
     *     console.log("滚动条的位置： value=" + value);
     * }
     * </listing>
     * <listing version="3.0">
     * import HScrollBar = laya.ui.HScrollBar;
     * import Handler = laya.utils.Handler;
     * class HScrollBar_Example {
     *     private hScrollBar: HScrollBar;
     *     constructor() {
     *         Laya.init(640, 800);//设置游戏画布宽高。
     *         Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *         Laya.loader.load(["resource/ui/hscroll.png", "resource/ui/hscroll$bar.png", "resource/ui/hscroll$down.png", "resource/ui/hscroll$up.png"], Handler.create(this, this.onLoadComplete));//加载资源。
     *     }
     *     private onLoadComplete(): void {
     *         this.hScrollBar = new HScrollBar();//创建一个 HScrollBar 类的实例对象 hScrollBar 。
     *         this.hScrollBar.skin = "resource/ui/hscroll.png";//设置 hScrollBar 的皮肤。
     *         this.hScrollBar.x = 100;//设置 hScrollBar 对象的属性 x 的值，用于控制 hScrollBar 对象的显示位置。
     *         this.hScrollBar.y = 100;//设置 hScrollBar 对象的属性 y 的值，用于控制 hScrollBar 对象的显示位置。
     *         this.hScrollBar.changeHandler = new Handler(this, this.onChange);//设置 hScrollBar 的滚动变化处理器。
     *         Laya.stage.addChild(this.hScrollBar);//将此 hScrollBar 对象添加到显示列表。
     *     }
     *     private onChange(value: number): void {
     *         console.log("滚动条的位置： value=" + value);
     *     }
     * }
     * </listing>
     * @author yung
     */
    class HScrollBar extends ScrollBar {
        protected initialize(): void;
    }
}
declare module laya.editorUI {
    /**
     * 使用 <code>HSlider</code> 控件，用户可以通过在滑块轨道的终点之间移动滑块来选择值。
     *
     * <p> <code>HSlider</code> 控件采用水平方向。滑块轨道从左向右扩展，而标签位于轨道的顶部或底部。</p>
     *
     * @example 以下示例代码，创建了一个 <code>HSlider</code> 实例。
     * <listing version="3.0">
     * package
     *	{
     *		import laya.ui.HSlider;
     *		import laya.utils.Handler;
     *
     *		public class HSlider_Example
     *		{
     *			private var hSlider:HSlider;
     *
     *			public function HSlider_Example()
     *			{
     *				Laya.init(640, 800);//设置游戏画布宽高。
     *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *				Laya.loader.load(["resource/ui/hslider.png", "resource/ui/hslider$bar.png"], Handler.create(this, onLoadComplete));//加载资源。
     *			}
     *
     *			private function onLoadComplete():void
     *			{
     *				hSlider = new HSlider();//创建一个 HSlider 类的实例对象 hSlider 。
     *				hSlider.skin = "resource/ui/hslider.png";//设置 hSlider 的皮肤。
     *				hSlider.min = 0;//设置 hSlider 最低位置值。
     *				hSlider.max = 10;//设置 hSlider 最高位置值。
     *				hSlider.value = 2;//设置 hSlider 当前位置值。
     *				hSlider.tick = 1;//设置 hSlider 刻度值。
     *				hSlider.x = 100;//设置 hSlider 对象的属性 x 的值，用于控制 hSlider 对象的显示位置。
     *				hSlider.y = 100;//设置 hSlider 对象的属性 y 的值，用于控制 hSlider 对象的显示位置。
     *				hSlider.changeHandler = new Handler(this, onChange);//设置 hSlider 位置变化处理器。
     *				Laya.stage.addChild(hSlider);//把 hSlider 添加到显示列表。
     *			}
     *
     *			private function onChange(value:Number):void
     *			{
     *				trace("滑块的位置： value=" + value);
     *			}
     *
     *		}
     *
     *	}
     * </listing>
     * <listing version="3.0">
     * Laya.init(640, 800, "canvas");//设置游戏画布宽高、渲染模式
     * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色
     * var hSlider;
     * var res = ["resource/ui/hslider.png", "resource/ui/hslider$bar.png"];
     * Laya.loader.load(res, laya.utils.Handler.create(this, onLoadComplete));
     * function onLoadComplete() {
     *     console.log("资源加载完成！");
     *     hSlider = new laya.ui.HSlider();//创建一个 HSlider 类的实例对象 hSlider 。
     *     hSlider.skin = "resource/ui/hslider.png";//设置 hSlider 的皮肤。
     *     hSlider.min = 0;//设置 hSlider 最低位置值。
     *     hSlider.max = 10;//设置 hSlider 最高位置值。
     *     hSlider.value = 2;//设置 hSlider 当前位置值。
     *     hSlider.tick = 1;//设置 hSlider 刻度值。
     *     hSlider.x = 100;//设置 hSlider 对象的属性 x 的值，用于控制 hSlider 对象的显示位置。
     *     hSlider.y = 100;//设置 hSlider 对象的属性 y 的值，用于控制 hSlider 对象的显示位置。
     *     hSlider.changeHandler = new laya.utils.Handler(this, onChange);//设置 hSlider 位置变化处理器。
     *     Laya.stage.addChild(hSlider);//把 hSlider 添加到显示列表。
     * }
     *
     * function onChange(value)
     * {
     *     console.log("滑块的位置： value=" + value);
     * }
     * </listing>
     * <listing version="3.0">
     * import Handler = laya.utils.Handler;
     * import HSlider = laya.ui.HSlider;
     * class HSlider_Example {
     *     private hSlider: HSlider;
     *     constructor() {
     *         Laya.init(640, 800);//设置游戏画布宽高。
     *         Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *         Laya.loader.load(["resource/ui/hslider.png", "resource/ui/hslider$bar.png"], Handler.create(this, this.onLoadComplete));//加载资源。
     *     }
     *     private onLoadComplete(): void {
     *         this.hSlider = new HSlider();//创建一个 HSlider 类的实例对象 hSlider 。
     *         this.hSlider.skin = "resource/ui/hslider.png";//设置 hSlider 的皮肤。
     *         this.hSlider.min = 0;//设置 hSlider 最低位置值。
     *         this.hSlider.max = 10;//设置 hSlider 最高位置值。
     *         this.hSlider.value = 2;//设置 hSlider 当前位置值。
     *         this.hSlider.tick = 1;//设置 hSlider 刻度值。
     *         this.hSlider.x = 100;//设置 hSlider 对象的属性 x 的值，用于控制 hSlider 对象的显示位置。
     *         this.hSlider.y = 100;//设置 hSlider 对象的属性 y 的值，用于控制 hSlider 对象的显示位置。
     *         this.hSlider.changeHandler = new Handler(this, this.onChange);//设置 hSlider 位置变化处理器。
     *         Laya.stage.addChild(this.hSlider);//把 hSlider 添加到显示列表。
     *     }
     *
     *     private onChange(value: number): void {
     *         console.log("滑块的位置： value=" + value);
     *     }
     *
     * }
     * </listing>
     *
     * @see laya.ui.Slider
     * @author yung
     */
    class HSlider extends Slider {
        /**
         * 创建一个 <code>HSlider</code> 类实例。
         * @param skin 皮肤。
         */
        constructor(skin?: string);
    }
}
declare module laya.editorUI {
    /**
     * HTMLText组件
     */
    class HtmlText extends laya.html.dom.HTMLDivElement implements laya.ui.IComponent {
        constructor();
        /**
         * @private
         * @inheritDoc
         */
        _getBoundPointsM(ifRotate?: boolean): Array<any>;
        comXml: any;
    }
}
declare module laya.editorUI {
    /**
     * <code>Image</code> 类是用于表示位图图像或绘制图形的显示对象。
     *
     *
     * @example 以下示例代码，创建了一个新的 <code>Image</code> 实例，设置了它的皮肤、位置信息，并添加到舞台上。
     * <listing version="3.0">
     *	package
     *	 {
     *		import laya.ui.Image;
     *		public class Image_Example
     *		{
     *			public function Image_Example()
     *			{
     *				Laya.init(640, 800);//设置游戏画布宽高。
     *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *				onInit();
     *			}
     *			private function onInit():void
     *	 		{
     *				var bg:Image = new Image("resource/ui/bg.png");//创建一个 Image 类的实例对象 bg ,并传入它的皮肤。
     *				bg.x = 100;//设置 bg 对象的属性 x 的值，用于控制 bg 对象的显示位置。
     *				bg.y = 100;//设置 bg 对象的属性 y 的值，用于控制 bg 对象的显示位置。
     *				bg.sizeGrid = "40,10,5,10";//设置 bg 对象的网格信息。
     *				bg.width = 150;//设置 bg 对象的宽度。
     *				bg.height = 250;//设置 bg 对象的高度。
     *				Laya.stage.addChild(bg);//将此 bg 对象添加到显示列表。
     *
     *				var image:Image = new Image("resource/ui/image.png");//创建一个 Image 类的实例对象 image ,并传入它的皮肤。
     *				image.x = 100;//设置 image 对象的属性 x 的值，用于控制 image 对象的显示位置。
     *				image.y = 100;//设置 image 对象的属性 y 的值，用于控制 image 对象的显示位置。
     *				Laya.stage.addChild(image);//将此 image 对象添加到显示列表。
     *			}
     *		}
     *	 }
     * </listing>
     * <listing version="3.0">
     * Laya.init(640, 800);//设置游戏画布宽高
     * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色
     * onInit();
     * function onInit() {
     *     var bg = new laya.ui.Image("resource/ui/bg.png");//创建一个 Image 类的实例对象 bg ,并传入它的皮肤。
     *     bg.x = 100;//设置 bg 对象的属性 x 的值，用于控制 bg 对象的显示位置。
     *     bg.y = 100;//设置 bg 对象的属性 y 的值，用于控制 bg 对象的显示位置。
     *     bg.sizeGrid = "40,10,5,10";//设置 bg 对象的网格信息。
     *     bg.width = 150;//设置 bg 对象的宽度。
     *     bg.height = 250;//设置 bg 对象的高度。
     *     Laya.stage.addChild(bg);//将此 bg 对象添加到显示列表。
     *
     *     var image = new laya.ui.Image("resource/ui/image.png");//创建一个 Image 类的实例对象 image ,并传入它的皮肤。
     *     image.x = 100;//设置 image 对象的属性 x 的值，用于控制 image 对象的显示位置。
     *     image.y = 100;//设置 image 对象的属性 y 的值，用于控制 image 对象的显示位置。
     *     Laya.stage.addChild(image);//将此 image 对象添加到显示列表。
     * }
     * </listing>
     * <listing version="3.0">
     * class Image_Example {
     *     constructor() {
     *         Laya.init(640, 800);//设置游戏画布宽高。
     *         Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *         this.onInit();
     *     }
     *     private onInit(): void {
     *         var bg: laya.ui.Image = new laya.ui.Image("resource/ui/bg.png");//创建一个 Image 类的实例对象 bg ,并传入它的皮肤。
     *         bg.x = 100;//设置 bg 对象的属性 x 的值，用于控制 bg 对象的显示位置。
     *         bg.y = 100;//设置 bg 对象的属性 y 的值，用于控制 bg 对象的显示位置。
     *         bg.sizeGrid = "40,10,5,10";//设置 bg 对象的网格信息。
     *         bg.width = 150;//设置 bg 对象的宽度。
     *         bg.height = 250;//设置 bg 对象的高度。
     *         Laya.stage.addChild(bg);//将此 bg 对象添加到显示列表。
     *
     *         var image: laya.ui.Image = new laya.ui.Image("resource/ui/image.png");//创建一个 Image 类的实例对象 image ,并传入它的皮肤。
     *         image.x = 100;//设置 image 对象的属性 x 的值，用于控制 image 对象的显示位置。
     *         image.y = 100;//设置 image 对象的属性 y 的值，用于控制 image 对象的显示位置。
     *         Laya.stage.addChild(image);//将此 image 对象添加到显示列表。
     *     }
     * }
     * </listing>
     * @see laya.ui.AutoBitmap
     */
    class Image extends laya.editorUI.Component {
        protected _bitmap: laya.editorUI.AutoBitmap;
        protected _skin: string;
        /**
         * 创建一个 <code>Image</code> 实例
         * @param skin 皮肤资源地址。
         */
        constructor(skin?: string);
        /**@inheritDoc */
        destroy(destroyChild?: boolean): void;
        /**
         * 释放此对象的皮肤资源。
         */
        dispose(): void;
        protected createChildren(): void;
        /**
         * <p>对象的皮肤地址，以字符串表示。</p>
         * <p>如果资源未加载，则先加载资源，加载完成然后应用于此对象。</p>
         * <b>注意：</b>资源加载完成后，会自动缓存至资源库中。
         *
         * @return
         */
        skin: string;
        /**
         * @copy laya.ui.AutoBitmap#source
         * @return
         */
        source: laya.resource.Texture;
        protected setSource(url: string, value: any): void;
        protected measureWidth: number;
        protected measureHeight: number;
        /**@inheritDoc */
        width: number;
        /**@inheritDoc */
        height: number;
        /**
         * <p>当前实例的位图 <code>AutoImage</code> 实例的有效缩放网格数据。</p>
         * <p>数据格式："上边距,右边距,下边距,左边距,是否重复填充(值为0：不重复填充，1：重复填充)"，以逗号分隔。
         * <ul><li>例如："4,4,4,4,1"。</li></ul></p>
         * @see laya.ui.AutoBitmap#sizeGrid
         */
        sizeGrid: string;
        /**@inheritDoc */
        dataSource: any;
    }
}
declare module laya.editorUI {
    /**
     * <code>ISelect</code> 接口，实现对象的 <code>selected</code> 属性和 <code>clickHandler</code> 选择回调函数处理器。
     * @author yung
     */
    interface ISelect {
    }
}
declare module laya.editorUI {
    /**
     * <p> <code>Label</code> 类用于创建显示对象以显示文本。</p>
     *
     * @example 以下示例代码，创建了一个 <code>Label</code> 实例。
     * <listing version="3.0">
     * package
     *	{
     *		import laya.ui.Label;
     *
     *		public class Label_Example
     *		{
     *			public function Label_Example()
     *			{
     *				Laya.init(640, 800);//设置游戏画布宽高、渲染模式。
     *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *				onInit();
     *			}
     *
     *			private function onInit():void
     *			{
     *				var label:Label = new Label();//创建一个 Label 类的实例对象 label 。
     *				label.font = "Arial";//设置 label 的字体。
     *				label.bold = true;//设置 label 显示为粗体。
     *				label.leading = 4;//设置 label 的行间距。
     *				label.wordWrap = true;//设置 label 自动换行。
     *				label.padding = "10,10,10,10";//设置 label 的边距。
     *				label.color = "#ff00ff";//设置 label 的颜色。
     *				label.text = "Hello everyone,我是一个可爱的文本！";//设置 label 的文本内容。
     *				label.x = 100;//设置 label 对象的属性 x 的值，用于控制 label 对象的显示位置。
     *				label.y = 100;//设置 label 对象的属性 y 的值，用于控制 label 对象的显示位置。
     *				label.width = 300;//设置 label 的宽度。
     *				label.height = 200;//设置 label 的高度。
     *				Laya.stage.addChild(label);//将 label 添加到显示列表。
     *
     *				var passwordLabel:Label = new Label("请原谅我，我不想被人看到我心里话。");//创建一个 Label 类的实例对象 passwordLabel 。
     *				passwordLabel.asPassword = true;//设置 passwordLabel 的显示反式为密码显示。
     *				passwordLabel.x = 100;//设置 passwordLabel 对象的属性 x 的值，用于控制 passwordLabel 对象的显示位置。
     *				passwordLabel.y = 350;//设置 passwordLabel 对象的属性 y 的值，用于控制 passwordLabel 对象的显示位置。
     *				passwordLabel.width = 300;//设置 passwordLabel 的宽度。
     *				passwordLabel.color = "#000000";//设置 passwordLabel 的文本颜色。
     *				passwordLabel.bgColor = "#ccffff";//设置 passwordLabel 的背景颜色。
     *				passwordLabel.fontSize = 20;//设置 passwordLabel 的文本字体大小。
     *				Laya.stage.addChild(passwordLabel);//将 passwordLabel 添加到显示列表。
     *			}
     *
     *		}
     *
     *	}
     * </listing>
     * <listing version="3.0">
     * Laya.init(640, 800);//设置游戏画布宽高
     * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色
     * onInit();
     * function onInit(){
     *     var label = new laya.ui.Label();//创建一个 Label 类的实例对象 label 。
     *     label.font = "Arial";//设置 label 的字体。
     *     label.bold = true;//设置 label 显示为粗体。
     *     label.leading = 4;//设置 label 的行间距。
     *     label.wordWrap = true;//设置 label 自动换行。
     *     label.padding = "10,10,10,10";//设置 label 的边距。
     *     label.color = "#ff00ff";//设置 label 的颜色。
     *     label.text = "Hello everyone,我是一个可爱的文本！";//设置 label 的文本内容。
     *     label.x = 100;//设置 label 对象的属性 x 的值，用于控制 label 对象的显示位置。
     *     label.y = 100;//设置 label 对象的属性 y 的值，用于控制 label 对象的显示位置。
     *     label.width = 300;//设置 label 的宽度。
     *     label.height = 200;//设置 label 的高度。
     *     Laya.stage.addChild(label);//将 label 添加到显示列表。
     *
     *     var passwordLabel = new laya.ui.Label("请原谅我，我不想被人看到我心里话。");//创建一个 Label 类的实例对象 passwordLabel 。
     *     passwordLabel.asPassword = true;//设置 passwordLabel 的显示反式为密码显示。
     *     passwordLabel.x = 100;//设置 passwordLabel 对象的属性 x 的值，用于控制 passwordLabel 对象的显示位置。
     *     passwordLabel.y = 350;//设置 passwordLabel 对象的属性 y 的值，用于控制 passwordLabel 对象的显示位置。
     *     passwordLabel.width = 300;//设置 passwordLabel 的宽度。
     *     passwordLabel.color = "#000000";//设置 passwordLabel 的文本颜色。
     *     passwordLabel.bgColor = "#ccffff";//设置 passwordLabel 的背景颜色。
     *     passwordLabel.fontSize = 20;//设置 passwordLabel 的文本字体大小。
     *     Laya.stage.addChild(passwordLabel);//将 passwordLabel 添加到显示列表。
     * }
     * </listing>
     * <listing version="3.0">
     * import Label = laya.ui.Label;
     * class Label_Example {
     *     constructor() {
     *         Laya.init(640, 800);//设置游戏画布宽高。
     *         Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *         this.onInit();
     *     }
     *     private onInit(): void {
     *         var label: Label = new Label();//创建一个 Label 类的实例对象 label 。
     *         label.font = "Arial";//设置 label 的字体。
     *         label.bold = true;//设置 label 显示为粗体。
     *         label.leading = 4;//设置 label 的行间距。
     *         label.wordWrap = true;//设置 label 自动换行。
     *         label.padding = "10,10,10,10";//设置 label 的边距。
     *         label.color = "#ff00ff";//设置 label 的颜色。
     *         label.text = "Hello everyone,我是一个可爱的文本！";//设置 label 的文本内容。
     *         label.x = 100;//设置 label 对象的属性 x 的值，用于控制 label 对象的显示位置。
     *         label.y = 100;//设置 label 对象的属性 y 的值，用于控制 label 对象的显示位置。
     *         label.width = 300;//设置 label 的宽度。
     *         label.height = 200;//设置 label 的高度。
     *         Laya.stage.addChild(label);//将 label 添加到显示列表。
     *         var passwordLabel: Label = new Label("请原谅我，我不想被人看到我心里话。");//创建一个 Label 类的实例对象 passwordLabel 。
     *         passwordLabel.asPassword = true;//设置 passwordLabel 的显示反式为密码显示。
     *         passwordLabel.x = 100;//设置 passwordLabel 对象的属性 x 的值，用于控制 passwordLabel 对象的显示位置。
     *         passwordLabel.y = 350;//设置 passwordLabel 对象的属性 y 的值，用于控制 passwordLabel 对象的显示位置。
     *         passwordLabel.width = 300;//设置 passwordLabel 的宽度。
     *         passwordLabel.color = "#000000";//设置 passwordLabel 的文本颜色。
     *         passwordLabel.bgColor = "#ccffff";//设置 passwordLabel 的背景颜色。
     *         passwordLabel.fontSize = 20;//设置 passwordLabel 的文本字体大小。
     *         Laya.stage.addChild(passwordLabel);//将 passwordLabel 添加到显示列表。
     *     }
     * }
     * </listing>
     * @see laya.display.Text
     * @author yung
     */
    class Label extends laya.editorUI.Component {
        protected _tf: Text;
        static labelDefaultFont: string;
        /**
         * 创建一个新的 <code>Label</code> 实例。
         * @param text 文本内容字符串。
         */
        constructor(text?: string);
        /**@inheritDoc */
        destroy(destroyChild?: boolean): void;
        protected createChildren(): void;
        /**
         * 当前文本内容字符串。
         *
         * @see laya.display.Text.text
         * @return
         */
        text: string;
        private static _textReg;
        /**
         * @copy laya.display.Text#wordWrap
         */
        /**
         * @copy laya.display.Text#wordWrap
         */
        wordWrap: boolean;
        /**
         * @copy laya.display.Text#color
         * @return
         */
        color: string;
        /**
         * @copy laya.display.Text#font
         */
        font: string;
        /**
         * @copy laya.display.Text#align
         * @return
         */
        align: string;
        /**
         * @copy laya.display.Text#valign
         * @return
         */
        valign: string;
        /**
         * @copy laya.display.Text#bold
         * @return
         */
        bold: boolean;
        /**
         * @copy laya.display.Text#italic
         * @return
         */
        italic: boolean;
        /**
         * @copy laya.display.Text#leading
         * @return
         */
        leading: number;
        /**
         * @copy laya.display.Text#fontSize
         * @return
         */
        fontSize: number;
        /**
         * <p>边距信息</p>
         * <p>"上边距，右边距，下边距 , 左边距（边距以像素为单位）"</p>
         * @see laya.display.Text.padding
         * @return
         */
        padding: string;
        /**
         * @copy laya.display.Text#bgColor
         * @return
         */
        bgColor: string;
        /**
         * @copy laya.display.Text#borderColor
         * @return
         */
        borderColor: string;
        /**
         * @copy laya.display.Text#stroke
         * @return
         */
        stroke: number;
        /**
         * @copy laya.display.Text#strokeColor
         * @return
         */
        strokeColor: string;
        /**
         * @copy laya.display.Text#asPassword
         * @return
         */
        asPassword: boolean;
        /**
         * 文本控件实体 <code>Text</code> 实例。
         * @return
         */
        textField: Text;
        protected measureWidth: number;
        protected measureHeight: number;
        /**
         * @inheritDoc
         * @return
         */
        /**
         * @inheritDoc
         */
        width: number;
        /**
         * @inheritDoc
         */
        /**
         * @inheritDoc
         */
        height: number;
        /**@inheritDoc */
        dataSource: any;
        /**
         * @copy laya.display.Text#overflow
         */
        /**
         * @copy laya.display.Text#overflow
         */
        overflow: string;
        /**
         * @copy laya.display.Text#underline
         */
        /**
         * @copy laya.display.Text#underline
         */
        underline: boolean;
        /**
         * @copy laya.display.Text#underlineColor
         */
        /**
         * @copy laya.display.Text#underlineColor
         */
        underlineColor: string;
    }
}
declare module laya.editorUI {
    /**布局容器*/
    class LayoutBox extends Box {
        protected _space: number;
        protected _align: string;
        constructor();
        addChild(child: laya.display.Node): laya.display.Node;
        addChildAt(child: laya.display.Node, index: number): laya.display.Node;
        removeChild(child: laya.display.Node): laya.display.Node;
        removeChildAt(index: number): laya.display.Node;
        /**刷新*/
        refresh(): void;
        protected changeItems(): void;
        /**子对象的间隔*/
        space: number;
        /**子对象对齐方式*/
        align: string;
        protected sortItem(items: Array<any>): void;
    }
}
declare module laya.editorUI {
    /**
     * <code>LayoutStyle</code> 是一个布局样式类。
     * @author yung
     */
    class LayoutStyle {
        /**
         * 一个已初始化的 <code>LayoutStyle</code> 实例。
         */
        static EMPTY: LayoutStyle;
        /**
         * 表示距顶边的距离（以像素为单位）。
         */
        top: number;
        /**
         * 表示距底边的距离（以像素为单位）。
         */
        bottom: number;
        /**
         * 表示距左边的距离（以像素为单位）。
         */
        left: number;
        /**
         * 表示距右边的距离（以像素为单位）。
         */
        right: number;
        /**
         * 表示距水平方向中心轴的距离（以像素为单位）。
         */
        centerX: number;
        /**
         * 表示距垂直方向中心轴的距离（以像素为单位）。
         */
        centerY: number;
        /**
         * 一个布尔值，表示是否有效。
         * @internal #?
         */
        enable: boolean;
    }
}
declare module laya.editorUI {
    /**
     * <code>List</code> 控件可显示项目列表。默认为垂直方向列表。可通过UI编辑器自定义列表。
     *
     * @example 以下示例代码，创建了一个 <code>List</code> 实例。
     * <listing version="3.0">
     * package
     *	{
     *		import laya.ui.List;
     *		import laya.utils.Handler;
     *
     *		public class List_Example
     *		{
     *			public function List_Example()
     *			{
     *				Laya.init(640, 800, "false");//设置游戏画布宽高、渲染模式。
     *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *				Laya.loader.load(["resource/ui/vscroll.png", "resource/ui/vscroll$bar.png", "resource/ui/vscroll$down.png", "resource/ui/vscroll$up.png"], Handler.create(this, onLoadComplete));
     *			}
     *
     *			private function onLoadComplete():void
     *			{
     *				var arr:Array = [];//创建一个数组，用于存贮列表的数据信息。
     *				for (var i:int = 0; i &lt; 20; i++)
     *				{
     *					arr.push({label: "item" + i});
     *				}
     *
     *				var list:List = new List();//创建一个 List 类的实例对象 list 。
     *				list.itemRender = Item;//设置 list 的单元格渲染器。
     *				list.repeatX = 1;//设置 list 的水平方向单元格数量。
     *				list.repeatY = 10;//设置 list 的垂直方向单元格数量。
     *				list.vScrollBarSkin = "resource/ui/vscroll.png";//设置 list 的垂直方向滚动条皮肤。
     *				list.array = arr;//设置 list 的列表数据源。
     *				list.pos(100, 100);//设置 list 的位置。
     *				list.selectEnable = true;//设置 list 可选。
     *				list.selectHandler = new Handler(this, onSelect);//设置 list 改变选择项执行的处理器。
     *				Laya.stage.addChild(list);//将 list 添加到显示列表。
     *			}
     *
     *			private function onSelect(index:int):void
     *			{
     *				trace("当前选择的项目索引： index= ", index);
     *			}
     *		}
     *	}
     *	import laya.ui.Box;
     *	import laya.ui.Label;
     *	class Item extends Box
     *	{
     *		public function Item()
     *		{
     *			graphics.drawRect(0, 0, 100, 20,null, "#ff0000");
     *			var label:Label = new Label();
     *			label.text = "100000";
     *			label.name = "label";//设置 label 的name属性值。
     *			label.size(100, 20);
     *			addChild(label);
     *		}
     *	}
     * </listing>
     * <listing version="3.0">
     * import List = laya.ui.List;
     * import Handler = laya.utils.Handler;
     * public class List_Example {
     *     public List_Example() {
     *         Laya.init(640, 800);//设置游戏画布宽高。
     *         Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *         Laya.loader.load(["resource/ui/vscroll.png", "resource/ui/vscroll$bar.png", "resource/ui/vscroll$down.png", "resource/ui/vscroll$up.png"], Handler.create(this, this.onLoadComplete));
     *     }
     *     private onLoadComplete(): void {
     *         var arr= [];//创建一个数组，用于存贮列表的数据信息。
     *         for (var i: number = 0; i &lt; 20; i++)
     *         {
     *             arr.push({ label: "item" + i });
     *         }
     *         var list: List = new List();//创建一个 List 类的实例对象 list 。
     *         list.itemRender = Item;//设置 list 的单元格渲染器。
     *         list.repeatX = 1;//设置 list 的水平方向单元格数量。
     *         list.repeatY = 10;//设置 list 的垂直方向单元格数量。
     *         list.vScrollBarSkin = "resource/ui/vscroll.png";//设置 list 的垂直方向滚动条皮肤。
     *         list.array = arr;//设置 list 的列表数据源。
     *         list.pos(100, 100);//设置 list 的位置。
     *         list.selectEnable = true;//设置 list 可选。
     *         list.selectHandler = new Handler(this, this.onSelect);//设置 list 改变选择项执行的处理器。
     *         Laya.stage.addChild(list);//将 list 添加到显示列表。
     *     }
     *     private onSelect(index: number): void {
     *         console.log("当前选择的项目索引： index= ", index);
     *     }
     * }
     * import Box = laya.ui.Box;
     * import Label = laya.ui.Label;
     * class Item extends Box {
     *     constructor() {
     *         this.graphics.drawRect(0, 0, 100, 20, null, "#ff0000");
     *         var label: Label = new Label();
     *         label.text = "100000";
     *         label.name = "label";//设置 label 的name属性值。
     *         label.size(100, 20);
     *         this.addChild(label);
     *     }
     * }
     * </listing>
     *
     * @author yung
     */
    class List extends Box implements laya.ui.IRender, laya.ui.IItem {
        /**改变 <code>List</code> 的选择项时执行的处理器，(默认返回参数： 项索引（index:number）)。*/
        selectHandler: laya.utils.Handler;
        /**单元格渲染处理器(默认返回参数cell:Box,index:number)。*/
        renderHandler: laya.utils.Handler;
        /**单元格鼠标事件处理器(默认返回参数e:Event,index:number)。*/
        mouseHandler: laya.utils.Handler;
        /**指定是否可以选择，若值为true则可以选择，否则不可以选择。 @default false*/
        selectEnable: boolean;
        /**最大分页数。*/
        totalPage: number;
        protected _content: Box;
        protected _scrollBar: ScrollBar;
        protected _itemRender: any;
        protected _repeatX: number;
        protected _repeatY: number;
        protected _repeatX2: number;
        protected _repeatY2: number;
        protected _spaceX: number;
        protected _spaceY: number;
        protected _cells: Array<any>;
        protected _array: Array<any>;
        protected _startIndex: number;
        protected _selectedIndex: number;
        protected _page: number;
        protected _isVertical: boolean;
        protected _cellSize: number;
        protected _cellOffset: number;
        protected _isMoved: boolean;
        /**@inheritDoc */
        destroy(destroyChild?: boolean): void;
        protected createChildren(): void;
        /**
         * 获取对 <code>List</code> 组件所包含的内容容器 <code>Box</code> 组件的引用。
         * @return
         */
        content: Box;
        /**
         * 垂直方向滚动条皮肤。
         * @return
         */
        vScrollBarSkin: string;
        /**
         * 水平方向滚动条皮肤。
         * @return
         */
        hScrollBarSkin: string;
        /**
         * 获取对 <code>List</code> 组件所包含的滚动条 <code>ScrollBar</code> 组件的引用。
         * @return
         */
        scrollBar: ScrollBar;
        /**
         * 单元格渲染器。
         * <p><b>取值：</b>
         * <ol>
         * <li>单元格类对象。</li>
         * <li> UI 的 JSON 描述。</li>
         * </ol></p>
         * @return
         */
        itemRender: any;
        /**@inheritDoc */
        width: number;
        /**@inheritDoc */
        height: number;
        /**
         * 水平方向显示的单元格数量。
         * @return
         */
        repeatX: number;
        /**
         * 垂直方向显示的单元格数量。
         * @return
         */
        repeatY: number;
        /**
         * 水平方向显示的单元格之间的间距（以像素为单位）。
         * @return
         */
        spaceX: number;
        /**
         * 垂直方向显示的单元格之间的间距（以像素为单位）。
         * @return
         */
        spaceY: number;
        protected changeCells(): void;
        protected createItem(): Box;
        protected addCell(cell: Box): void;
        /**
         * 初始化单元格信息。
         */
        initItems(): void;
        /**
         * 设置可视区域大小。
         *
         * <p>以（0，0，width参数，height参数）组成的矩形区域为可视区域。</p>
         * @param width 可视区域宽度。
         * @param height 可视区域高度。
         */
        setContentSize(width: number, height: number): void;
        protected onCellMouse(e: laya.events.Event): void;
        protected changeCellState(cell: Box, visable: boolean, index: number): void;
        protected onScrollBarChange(e: laya.events.Event): void;
        /**
         * 表示当前选择的项索引。
         * @return
         */
        selectedIndex: number;
        protected changeSelectStatus(): void;
        /**
         * 当前选中的单元格数据源。
         * @return
         */
        selectedItem: any;
        /**
         * 获取或设置当前选择的单元格对象。
         * @return
         */
        selection: Box;
        /**
         * 当前显示的单元格列表的开始索引。
         * @return
         */
        startIndex: number;
        protected renderItems(): void;
        protected renderItem(cell: Box, index: number): void;
        /**
         * 列表数据源。
         * @return
         */
        array: Array<any>;
        /**
         * 列表的当前页码。
         * @return
         */
        page: number;
        /**
         * 列表的数据总个数。
         * @return
         */
        length: number;
        /**@inheritDoc */
        dataSource: any;
        /**
         * 单元格集合。
         * @return
         */
        cells: Array<any>;
        /**
         * 刷新列表数据源。
         */
        refresh(): void;
        /**
         * 获取单元格数据源。
         * @param index 单元格索引。
         * @return
         */
        getItem(index: number): any;
        /**
         * 修改单元格数据源。
         * @param index 单元格索引。
         * @param source 单元格数据源。
         */
        changeItem(index: number, source: any): void;
        /**
         * 添加单元格数据源。
         * @param souce
         */
        addItem(souce: any): void;
        /**
         * 添加单元格数据源到对应的数据索引处。
         * @param souce 单元格数据源。
         * @param index 索引。
         */
        addItemAt(souce: any, index: number): void;
        /**
         * 通过数据源索引删除单元格数据源。
         * @param index
         */
        deleteItem(index: number): void;
        /**
         * 通过可视单元格索引，获取单元格。
         * @param index 可视单元格索引。
         * @return 单元格对象。
         */
        getCell(index: number): Box;
        /**
         * <p>滚动列表，以设定的数据索引对应的单元格为当前可视列表的第一项。</p>
         *
         * @param index 单元格在数据列表中的索引。
         */
        scrollTo(index: number): void;
    }
}
declare module laya.editorUI {
    /**
     * 加载器，实现了文本，JSON，XML,二进制,图像的加载及管理
     */
    class Loader extends laya.events.EventDispatcher {
        static basePath: string;
        static TEXT: string;
        static JSOn: string;
        static XML: string;
        static BUFFER: string;
        static IMAGE: string;
        static TEXTURE: string;
        static ATLAS: string;
        static typeMap: any;
        /**
         * 加载资源
         * @param	url 地址
         * @param	type 类型，如果为null，则根据文件后缀，自动分析类型
         * @param	cache 是否缓存数据
         */
        load(url: string, type?: string, cache?: boolean): void;
        protected getTypeFromUrl(url: string): string;
        protected _loadImage(url: string): void;
        protected onLoaded(data: any): void;
        protected complete(data: any): void;
        /**加载地址，只读*/
        url: string;
        /**加载类型，只读*/
        type: string;
        /**是否缓存，只读*/
        cache: boolean;
        /**返回的数据*/
        data: any;
        /**
         * 清理缓存
         * @param	url 地址
         */
        static clearRes(url: string): void;
        /**
         * 获取已加载资源(如有缓存)
         * @param	url 地址
         * @return	返回资源
         */
        static getRes(url: string): any;
        /**
         * 缓存资源
         * @param	url 地址
         * @param	data 要缓存的内容
         */
        static cacheRes(url: string, data: any): void;
    }
}
declare module laya.editorUI {
    /**
     * Flash时间轴动画播放器
     */
    class MovieClipPlayer extends laya.ani.swf.MovieClip implements laya.ui.IComponent {
        comXml: any;
        constructor();
        _getBoundPointsM(ifRotate?: boolean): Array<any>;
        url: string;
    }
}
declare module laya.editorUI {
    /**
     * <code>Panel</code> 是一个面板容器类。
     *
     *
     *
     * @author yung
     *
     */
    class Panel extends Box {
        protected _content: Box;
        protected _vScrollBar: VScrollBar;
        protected _hScrollBar: HScrollBar;
        /**
         * 创建一个新的 <code>Panel</code> 类实例。
         *
         * <p>在 <code>Panel</code> 构造函数中设置属性width、height的值都为100。</p>
         */
        constructor();
        /**@inheritDoc */
        destroy(destroyChild?: boolean): void;
        destroyChildren(): void;
        protected createChildren(): void;
        /**@inheritDoc */
        addChild(child: laya.display.Node): laya.display.Node;
        /**@inheritDoc */
        addChildAt(child: laya.display.Node, index: number): laya.display.Node;
        /**@inheritDoc */
        removeChild(child: laya.display.Node): laya.display.Node;
        /**@inheritDoc */
        removeChildAt(index: number): laya.display.Node;
        /**@inheritDoc */
        removeChildren(beginIndex?: number, endIndex?: number): laya.display.Node;
        /**@inheritDoc */
        getChildAt(index: number): laya.display.Node;
        /**@inheritDoc */
        getChildByName(name: string): laya.display.Node;
        /**@inheritDoc */
        getChildIndex(child: laya.display.Node): number;
        /**@inheritDoc */
        numChildren: number;
        /**
         * @private
         * 获取内容宽度（以像素为单位）。
         * @return
         */
        contentWidth: number;
        /**
         * @private
         * 获取内容高度（以像素为单位）。
         * @return
         */
        contentHeight: number;
        /**
         * @inheritDoc
         * @param value
         */
        width: number;
        /**@inheritDoc */
        height: number;
        /**
         * 垂直方向滚动条皮肤。
         * @return
         */
        vScrollBarSkin: string;
        /**
         * 水平方向滚动条皮肤。
         * @return
         */
        hScrollBarSkin: string;
        /**
         * 垂直方向滚动条对象。
         * @return
         */
        vScrollBar: ScrollBar;
        /**
         * 水平方向滚动条对象。
         * @return
         */
        hScrollBar: ScrollBar;
        /**
         * 获取内容容器对象。
         * @return
         */
        content: laya.display.Sprite;
        protected onScrollBarChange(scrollBar: ScrollBar, e: laya.events.Event): void;
        /**
         * <p>滚动内容容器至设定的垂直、水平方向滚动条位置。</p>
         * @param x 水平方向滚动条属性value值。滚动条位置数字。
         * @param y 垂直方向滚动条属性value值。滚动条位置数字。
         */
        scrollTo(x?: number, y?: number): void;
        /**
         * 刷新滚动内容。
         */
        refresh(): void;
    }
}
declare module laya.editorUI {
    /**
     * 例子播放器
     */
    class ParticlePlayer extends laya.particle.Particle2D implements laya.ui.IComponent {
        constructor();
        comXml: any;
        _getBoundPointsM(ifRotate?: boolean): Array<any>;
        url: string;
        setParticleSetting(settings: laya.particle.ParticleSetting): void;
        setIDEFocusState(focus: boolean): void;
        advanceTime(passedTime?: number): void;
    }
}
declare module laya.editorUI {
    /**
     * <code>ProgressBar</code> 组件显示内容的加载进度。
     * @example 以下示例代码，创建了一个新的 <code>ProgressBar</code> 实例，设置了它的皮肤、位置、宽高、网格等信息，并添加到舞台上。
     * <listing version="3.0">
     * package
     *	{
     *		import laya.ui.ProgressBar;
     *		import laya.utils.Handler;
     *		public class ProgressBar_Example
     *		{
     *			private var progressBar:ProgressBar;
     *			public function ProgressBar_Example()
     *			{
     *				Laya.init(640, 800);//设置游戏画布宽高。
     *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *				Laya.loader.load(["resource/ui/progress.png", "resource/ui/progress$bar.png"], Handler.create(this, onLoadComplete));//加载资源。
     *			}
     *
     *			private function onLoadComplete():void
     *			{
     *				progressBar = new ProgressBar("resource/ui/progress.png");//创建一个 ProgressBar 类的实例对象 progressBar 。
     *				progressBar.x = 100;//设置 progressBar 对象的属性 x 的值，用于控制 progressBar 对象的显示位置。
     *				progressBar.y = 100;//设置 progressBar 对象的属性 y 的值，用于控制 progressBar 对象的显示位置。
     *				progressBar.value = 0.3;//设置 progressBar 的进度值。
     *				progressBar.width = 200;//设置 progressBar 的宽度。
     *				progressBar.height = 50;//设置 progressBar 的高度。
     *				progressBar.sizeGrid = "5,10,5,10";//设置 progressBar 的网格信息。
     *				progressBar.changeHandler = new Handler(this, onChange);//设置 progressBar 的value值改变时执行的处理器。
     *				Laya.stage.addChild(progressBar);//将 progressBar 添加到显示列表。
     *				Laya.timer.once(3000, this, changeValue);//设定 3000ms（毫秒）后，执行函数changeValue。
     *			}
     *
     *			private function changeValue():void
     *			{
     *				trace("改变进度条的进度值。");
     *				progressBar.value = 0.6;
     *			}
     *
     *			private function onChange(value:Number):void
     *			{
     *				trace("进度发生改变： value=" ,value);
     *			}
     *		}
     *	}
     *
     * </listing>
     * <listing version="3.0">
     * Laya.init(640, 800);//设置游戏画布宽高
     * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色
     * var res = ["resource/ui/progress.png", "resource/ui/progress$bar.png"];
     * Laya.loader.load(res, laya.utils.Handler.create(this, onLoadComplete));//加载资源。
     * function onLoadComplete()
     * {
     *     progressBar = new laya.ui.ProgressBar("resource/ui/progress.png");//创建一个 ProgressBar 类的实例对象 progressBar 。
     *     progressBar.x = 100;//设置 progressBar 对象的属性 x 的值，用于控制 progressBar 对象的显示位置。
     *     progressBar.y = 100;//设置 progressBar 对象的属性 y 的值，用于控制 progressBar 对象的显示位置。
     *     progressBar.value = 0.3;//设置 progressBar 的进度值。
     *     progressBar.width = 200;//设置 progressBar 的宽度。
     *     progressBar.height = 50;//设置 progressBar 的高度。
     *     progressBar.sizeGrid = "10,5,10,5";//设置 progressBar 的网格信息。
     *     progressBar.changeHandler = new laya.utils.Handler(this, onChange);//设置 progressBar 的value值改变时执行的处理器。
     *     Laya.stage.addChild(progressBar);//将 progressBar 添加到显示列表。
     *     Laya.timer.once(3000, this, changeValue);//设定 3000ms（毫秒）后，执行函数changeValue。
     * }
     * function changeValue()
     * {
     *     console.log("改变进度条的进度值。");
     *     progressBar.value = 0.6;
     * }
     *
     * function onChange(value)
     * {
     *     console.log("进度发生改变： value=" ,value);
     * }
     * </listing>
     * <listing version="3.0">
     * import ProgressBar = laya.ui.ProgressBar;
     * import Handler = laya.utils.Handler;
     * class ProgressBar_Example {
     *     private progressBar: ProgressBar;
     *     public ProgressBar_Example() {
     *         Laya.init(640, 800);//设置游戏画布宽高。
     *         Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *         Laya.loader.load(["resource/ui/progress.png", "resource/ui/progress$bar.png"], Handler.create(this, this.onLoadComplete));//加载资源。
     *     }
     *     private onLoadComplete(): void {
     *         this.progressBar = new ProgressBar("resource/ui/progress.png");//创建一个 ProgressBar 类的实例对象 progressBar 。
     *         this.progressBar.x = 100;//设置 progressBar 对象的属性 x 的值，用于控制 progressBar 对象的显示位置。
     *         this.progressBar.y = 100;//设置 progressBar 对象的属性 y 的值，用于控制 progressBar 对象的显示位置。
     *         this.progressBar.value = 0.3;//设置 progressBar 的进度值。
     *         this.progressBar.width = 200;//设置 progressBar 的宽度。
     *         this.progressBar.height = 50;//设置 progressBar 的高度。
     *         this.progressBar.sizeGrid = "5,10,5,10";//设置 progressBar 的网格信息。
     *         this.progressBar.changeHandler = new Handler(this, this.onChange);//设置 progressBar 的value值改变时执行的处理器。
     *         Laya.stage.addChild(this.progressBar);//将 progressBar 添加到显示列表。
     *         Laya.timer.once(3000, this, this.changeValue);//设定 3000ms（毫秒）后，执行函数changeValue。
     *     }
     *     private changeValue(): void {
     *         console.log("改变进度条的进度值。");
     *         this.progressBar.value = 0.6;
     *     }
     *     private onChange(value: number): void {
     *         console.log("进度发生改变： value=", value);
     *     }
     * }
     * </listing>
     * @author yung
     */
    class ProgressBar extends laya.editorUI.Component {
        /**
         * 当 <code>ProgressBar</code> 实例的 <code>value</code> 属性发生变化时的函数处理器。
         *
         * <p>默认返回参数<code>value</code> 属性（进度值）。</p>
         */
        changeHandler: laya.utils.Handler;
        protected _bg: laya.editorUI.Image;
        protected _bar: laya.editorUI.Image;
        protected _skin: string;
        protected _value: number;
        /**
         * 创建一个新的 <code>ProgressBar</code> 类实例。
         * @param skin
         */
        constructor(skin?: string);
        /**@inheritDoc */
        destroy(destroyChild?: boolean): void;
        protected createChildren(): void;
        /**
         * @copy laya.ui.Image#skin
         * @return
         */
        skin: string;
        protected measureWidth: number;
        protected measureHeight: number;
        /**
         * 当前的进度量。
         * <p><b>取值：</b>介于0和1之间。</p>
         * @return
         */
        value: number;
        protected changeValue(): void;
        /**
         * 获取进度条对象。
         * @return
         */
        bar: laya.editorUI.Image;
        /**
         * 获取背景条对象。
         * @return
         */
        bg: laya.editorUI.Image;
        /**
         * <p>当前 <code>ProgressBar</code> 实例的进度条背景位图（ <code>Image</code> 实例）的有效缩放网格数据。</p>
         * <p>数据格式："上边距,右边距,下边距,左边距,是否重复填充(值为0：不重复填充，1：重复填充)"，以逗号分隔。
         * <ul><li>例如："4,4,4,4,1"</li></ul></p>
         * @see laya.ui.AutoBitmap.sizeGrid
         * @return
         */
        sizeGrid: string;
        /**@inheritDoc */
        width: number;
        /**@inheritDoc */
        height: number;
        /**@inheritDoc */
        dataSource: any;
    }
}
declare module laya.editorUI {
    /**
     * <code>Radio</code> 控件使用户可在一组互相排斥的选择中做出一种选择。
     * 用户一次只能选择 <code>Radio</code> 组中的一个成员。选择未选中的组成员将取消选择该组中当前所选的 <code>Radio</code> 控件。
     *
     *
     * @see laya.ui.RadioGroup
     * @author yung
     */
    class Radio extends laya.editorUI.Button {
        protected _value: any;
        /**
         * 创建一个新的 <code>Radio</code> 类实例。
         * @param skin 皮肤。
         * @param label 标签。
         */
        constructor(skin?: string, label?: string);
        /**@inheritDoc */
        destroy(destroyChild?: boolean): void;
        protected preinitialize(): void;
        protected initialize(): void;
        protected onClick(e: laya.events.Event): void;
        /**
         * 获取或设置 <code>Radio</code> 关联的可选用户定义值。
         *
         * @internal ##?
         * @return
         */
        value: any;
    }
}
declare module laya.editorUI {
    /**
     * <code>RadioGroup</code> 控件定义一组 <code>Radio</code> 控件，这些控件相互排斥；
     * 因此，用户每次只能选择一个 <code>Radio</code> 控件。
     *
     * @example 以下示例代码，创建了一个 <code>RadioGroup</code> 实例。
     * <listing version="3.0">
     * package
     *	{
     *		import laya.ui.Radio;
     *		import laya.ui.RadioGroup;
     *		import laya.utils.Handler;
     *
     *		public class RadioGroup_Example
     *		{
     *
     *			public function RadioGroup_Example()
     *			{
     *				Laya.init(640, 800);//设置游戏画布宽高。
     *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *				Laya.loader.load(["resource/ui/radio.png"], Handler.create(this, onLoadComplete));//加载资源。
     *			}
     *
     *			private function onLoadComplete():void
     *			{
     *				var radioGroup:RadioGroup = new RadioGroup();//创建一个 RadioGroup 类的实例对象 radioGroup 。
     *				radioGroup.pos(100, 100);//设置 radioGroup 的位置信息。
     *				radioGroup.labels = "item0,item1,item2";//设置 radioGroup 的标签集。
     *				radioGroup.skin = "resource/ui/radio.png";//设置 radioGroup 的皮肤。
     *				radioGroup.space = 10;//设置 radioGroup 的项间隔距离。
     *				radioGroup.selectHandler = new Handler(this, onSelect);//设置 radioGroup 的选择项发生改变时执行的处理器。
     *				Laya.stage.addChild(radioGroup);//将 radioGroup 添加到显示列表。
     *			}
     *
     *			private function onSelect(index:int):void
     *			{
     *				trace("当前选择的单选按钮索引: index= ", index);
     *			}
     *
     *		}
     *
     *	}
     * </listing>
     * <listing version="3.0">
     * Laya.init(640, 800);//设置游戏画布宽高、渲染模式
     * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色
     * Laya.loader.load(["resource/ui/radio.png"], laya.utils.Handler.create(this, onLoadComplete));
     * function onLoadComplete() {
     *     var radioGroup= new laya.ui.RadioGroup();//创建一个 RadioGroup 类的实例对象 radioGroup 。
     *     radioGroup.pos(100, 100);//设置 radioGroup 的位置信息。
     *     radioGroup.labels = "item0,item1,item2";//设置 radioGroup 的标签集。
     *     radioGroup.skin = "resource/ui/radio.png";//设置 radioGroup 的皮肤。
     *     radioGroup.space = 10;//设置 radioGroup 的项间隔距离。
     *     radioGroup.selectHandler = new laya.utils.Handler(this, onSelect);//设置 radioGroup 的选择项发生改变时执行的处理器。
     *     Laya.stage.addChild(radioGroup);//将 radioGroup 添加到显示列表。
     * }
     * function onSelect(index) {
     *     console.log("当前选择的单选按钮索引: index= ", index);
     * }
     * </listing>
     * <listing version="3.0">
     * import Radio = laya.ui.Radio;
     * import RadioGroup = laya.ui.RadioGroup;
     * import Handler = laya.utils.Handler;
     *  class RadioGroup_Example {
     *
     *     constructor() {
     *         Laya.init(640, 800);//设置游戏画布宽高。
     *         Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *         Laya.loader.load(["resource/ui/radio.png"], Handler.create(this, this.onLoadComplete));//加载资源。
     *     }
     *
     *     private onLoadComplete(): void {
     *         var radioGroup: RadioGroup = new RadioGroup();//创建一个 RadioGroup 类的实例对象 radioGroup 。
     *         radioGroup.pos(100, 100);//设置 radioGroup 的位置信息。
     *         radioGroup.labels = "item0,item1,item2";//设置 radioGroup 的标签集。
     *         radioGroup.skin = "resource/ui/radio.png";//设置 radioGroup 的皮肤。
     *         radioGroup.space = 10;//设置 radioGroup 的项间隔距离。
     *         radioGroup.selectHandler = new Handler(this, this.onSelect);//设置 radioGroup 的选择项发生改变时执行的处理器。
     *         Laya.stage.addChild(radioGroup);//将 radioGroup 添加到显示列表。
     *     }
     *
     *     private onSelect(index: number): void {
     *         console.log("当前选择的单选按钮索引: index= ", index);
     *     }
     *
     * }
     * </listing>
     * @author yung
     */
    class RadioGroup extends Group {
        protected createItem(skin: string, label: string): laya.display.Sprite;
    }
}
declare module laya.editorUI {
    /**
     * 脚本
     */
    class Script extends SpritePlayer {
        constructor();
    }
}
declare module laya.editorUI {
    /**
     * <code>ScrollBar</code> 组件是一个滚动条组件。
     *
     * <p>当数据太多以至于显示区域无法容纳时，最终用户可以使用 <code>ScrollBar</code> 组件控制所显示的数据部分。</p>
     * <p> 滚动条由四部分组成：两个箭头按钮、一个轨道和一个滑块。 </p>	 *
     *
     * @see laya.ui.VScrollBar
     * @see laya.ui.HScrollBar
     * @author yung
     */
    class ScrollBar extends Component {
        /**滚动变化时回调，回传value参数。*/
        changeHandler: laya.utils.Handler;
        /**是否缩放滑动条，默认值为true。 */
        scaleBar: boolean;
        /**一个布尔值，指定是否自动隐藏滚动条(无需滚动时)，默认值为false。*/
        autoHide: boolean;
        /**橡皮筋效果极限距离，0为没有橡皮筋效果。*/
        elasticDistance: number;
        /**橡皮筋回弹时间，单位为毫秒*/
        elasticBackTime: number;
        protected _showButtons: boolean;
        protected _scrollSize: number;
        protected _skin: string;
        protected _upButton: Button;
        protected _downButton: Button;
        protected _slider: Slider;
        protected _thumbPercent: number;
        protected _target: laya.display.Sprite;
        protected _lastPoint: laya.maths.Point;
        protected _lastOffset: number;
        protected _checkElastic: boolean;
        protected _isElastic: boolean;
        protected _value: number;
        protected _hide: boolean;
        protected _clickOnly: boolean;
        protected _offsets: Array<any>;
        protected _touchScrollEnable: boolean;
        protected _mouseWheelEnable: boolean;
        /**
         * 创建一个新的 <code>ScrollBar</code> 实例。
         * @param skin 皮肤资源地址。
         */
        constructor(skin?: string);
        /**@inheritDoc */
        destroy(destroyChild?: boolean): void;
        protected createChildren(): void;
        protected initialize(): void;
        protected onSliderChange(e: laya.events.Event): void;
        protected onButtonMouseDown(e: laya.events.Event): void;
        protected startLoop(isUp: boolean): void;
        protected slide(isUp: boolean): void;
        protected onStageMouseUp(e: laya.events.Event): void;
        /**
         * @copy laya.ui.Image#skin
         */
        skin: string;
        protected changeScrollBar(): void;
        protected changeSize(): void;
        protected resetButtonPosition(): void;
        protected measureWidth: number;
        protected measureHeight: number;
        /**
         * 设置滚动条信息。
         * @param min 滚动条最小位置值。
         * @param max 滚动条最大位置值。
         * @param value 滚动条当前位置值。
         */
        setScroll(min: number, max: number, value: number): void;
        /**
         * 获取或设置表示最高滚动位置的数字。
         */
        max: number;
        /**
         * 获取或设置表示最低滚动位置的数字。
         */
        min: number;
        /**
         * 获取或设置表示当前滚动位置的数字。
         */
        value: number;
        /**
         * 一个布尔值，指示滚动条是否为垂直滚动。如果值为true，则为垂直滚动，否则为水平滚动。
         * <p>默认值为：true。</p>
         */
        isVertical: boolean;
        /**
         * <p>当前实例的 <code>Slider</code> 实例的有效缩放网格数据。</p>
         * <p>数据格式："上边距,右边距,下边距,左边距,是否重复填充(值为0：不重复填充，1：重复填充)"，以逗号分隔。
         * <ul><li>例如："4,4,4,4,1"</li></ul></p>
         * @see laya.ui.AutoBitmap.sizeGrid
         */
        sizeGrid: string;
        /**获取或设置一个值，该值表示按下滚动条轨道时页面滚动的增量。 */
        scrollSize: number;
        /**@inheritDoc */
        dataSource: any;
        /**获取或设置一个值，该值表示滑条长度比例，值为：（0-1）。 */
        thumbPercent: number;
        /**
         * 设置滚动对象。*
         * @see laya.ui.TouchScroll#target
         */
        target: laya.display.Sprite;
        /**是否隐藏滚动条，不显示滚动条，但是可以正常滚动，默认为false。*/
        hide: boolean;
        /**一个布尔值，指定是否显示向上、向下按钮，默认值为true。*/
        showButtons: boolean;
        /**一个布尔值，指定是否开启触摸，默认值为true。*/
        touchScrollEnable: boolean;
        /** 一个布尔值，指定是否滑轮滚动，默认值为true。*/
        mouseWheelEnable: boolean;
        protected onTargetMouseWheel(e: laya.events.Event): void;
        protected onTargetMouseDown(e: laya.events.Event): void;
        protected loop(): void;
        protected onStageMouseUp2(e: laya.events.Event): void;
        protected tweenMove(): void;
        /**
         * 停止滑动
         */
        stopScroll(): void;
    }
}
declare module laya.editorUI {
    /**
     * 骨骼动画播放器
     */
    class SkeletonPlayer extends laya.ani.bone.Skeleton implements laya.ui.IComponent {
        constructor(tmplete?: any);
        _getBoundPointsM(ifRotate?: boolean): Array<any>;
        comXml: any;
        url: string;
    }
}
declare module laya.editorUI {
    /**
     * 使用 <code>Slider</code> 控件，用户可以通过在滑块轨道的终点之间移动滑块来选择值。
     *
     * <p>滑块的当前值由滑块端点（对应于滑块的最小值和最大值）之间滑块的相对位置确定。</p>
     * <p>滑块允许最小值和最大值之间特定间隔内的值。滑块还可以使用数据提示显示其当前值。</p>
     *
     * @see laya.ui.HSlider
     * @see laya.ui.VSlider
     * @author yung
     */
    class Slider extends Component {
        static label: Label;
        /**
         * 数据变化处理器。
         * <p>默认回调参数为滑块位置属性 <code>value</code>属性值：Number 。</p>
         */
        changeHandler: laya.utils.Handler;
        /**
         * 一个布尔值，指示是否为垂直滚动。如果值为true，则为垂直方向，否则为水平方向。
         * <p>默认值为：true。</p>
         * @default true
         */
        isVertical: boolean;
        /**
         * 一个布尔值，指示是否显示标签。
         * @default true
         */
        showLabel: boolean;
        protected _allowClickBack: boolean;
        protected _max: number;
        protected _min: number;
        protected _tick: number;
        protected _value: number;
        protected _skin: string;
        protected _bg: Image;
        protected _bar: Button;
        protected _tx: number;
        protected _ty: number;
        protected _maxMove: number;
        /**
         * 创建一个新的 <code>Slider</code> 类示例。
         * @param skin 皮肤。
         */
        constructor(skin?: string);
        /**
         *@inheritDoc
         */
        destroy(destroyChild?: boolean): void;
        protected createChildren(): void;
        protected initialize(): void;
        protected onBarMouseDown(e: laya.events.Event): void;
        protected showValueText(): void;
        protected hideValueText(): void;
        protected sendChangeEvent(type?: string): void;
        /**
         * @copy laya.ui.Image#skin
         * @return
         */
        skin: string;
        protected setBarPoint(): void;
        protected measureWidth: number;
        protected measureHeight: number;
        protected changeSize(): void;
        /**
         * <p>当前实例的背景图（ <code>Image</code> ）和滑块按钮（ <code>Button</code> ）实例的有效缩放网格数据。</p>
         * <p>数据格式："上边距,右边距,下边距,左边距,是否重复填充(值为0：不重复填充，1：重复填充)"，以逗号分隔。
         * <ul><li>例如："4,4,4,4,1"</li></ul></p>
         * @see laya.ui.AutoBitmap.sizeGrid
         * @return
         */
        sizeGrid: string;
        /**
         * 设置滑动条的信息。
         * @param min 滑块的最小值。
         * @param max 滑块的最小值。
         * @param value 滑块的当前值。
         */
        setSlider(min: number, max: number, value: number): void;
        /**
         * 表示当前的刻度值。默认值为1。
         * @return
         */
        tick: number;
        protected changeValue(): void;
        /**
         * 获取或设置表示最高位置的数字。 默认值为100。
         * @return
         */
        max: number;
        /**
         * 获取或设置表示最低位置的数字。 默认值为0。
         * @return
         */
        min: number;
        /**
         * 获取或设置表示当前滑块位置的数字。
         * @return
         */
        value: number;
        /**
         * 一个布尔值，指定是否允许通过点击滑动条改变 <code>Slider</code> 的 <code>value</code> 属性值。
         * @return
         */
        allowClickBack: boolean;
        protected onBgMouseDown(e: laya.events.Event): void;
        /**@inheritDoc */
        dataSource: any;
        /**
         * 表示滑块按钮的引用。
         * @return
         */
        bar: Button;
    }
}
declare module laya.editorUI {
    /**
     * 声音播放器
     */
    class SoundPlayer extends laya.media.SoundNode {
        constructor();
        skin: string;
    }
}
declare module laya.editorUI {
    /**
     * 精灵
     */
    class SpritePlayer extends laya.display.Sprite implements laya.ui.IBox {
        constructor();
        protected pic: laya.ui.Image;
        comXml: any;
        width: number;
        height: number;
        _getBoundPointsM(ifRotate?: boolean): Array<any>;
    }
}
declare module laya.editorUI {
    /**
     * <code>Styles</code> 定义了组件常用的样式属性。
     * @author yung
     */
    class Styles {
        /**
         * 默认九宫格信息。
         *
         * @see laya.ui.AutoBitmap#sizeGrid
         */
        static defaultSizeGrid: Array<any>;
        /**
         * 标签颜色。
         */
        static labelColor: string;
        /**
         * 标签的边距。
         * <p><b>格式：</b>[上边距，右边距，下边距，左边距]。</p>
         */
        static labelPadding: Array<any>;
        /**
         * 标签的边距。
         * <p><b>格式：</b>[上边距，右边距，下边距，左边距]。</p>
         */
        static inputLabelPadding: Array<any>;
        /**
         * 按钮皮肤的状态数，支持1,2,3三种状态值。
         */
        static buttonStateNum: number;
        /**
         * 按钮标签颜色。
         * <p><b>格式：</b>[upColor,overColor,downColor,disableColor]。</p>
         */
        static buttonLabelColors: Array<any>;
        /**
         * 下拉框项颜色。
         * <p><b>格式：</b>[overBgColor,overLabelColor,outLabelColor,borderColor,bgColor]。</p>
         */
        static comboBoxItemColors: Array<any>;
        /**
         * 滚动条的最小值。
         */
        static scrollBarMinNum: number;
        /**
         * 长按按钮，等待时间，使其可激活连续滚动。
         */
        static scrollBarDelayTime: number;
    }
}
declare module laya.editorUI {
    /**
     * <code>Tab</code> 组件用来定义选项卡按钮组。
     *
     * @internal <p>属性：<code>selectedIndex</code> 的默认值为-1。</p>
     *
     * @example 以下示例代码，创建了一个 <code>Tab</code> 实例。
     * <listing version="3.0">
     * package
     *	{
     *		import laya.ui.Tab;
     *		import laya.utils.Handler;
     *
     *		public class Tab_Example
     *		{
     *
     *			public function Tab_Example()
     *			{
     *				Laya.init(640, 800);//设置游戏画布宽高。
     *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *				Laya.loader.load(["resource/ui/tab.png"], Handler.create(this, onLoadComplete));//加载资源。
     *			}
     *
     *			private function onLoadComplete():void
     *			{
     *				var tab:Tab = new Tab();//创建一个 Tab 类的实例对象 tab 。
     *				tab.skin = "resource/ui/tab.png";//设置 tab 的皮肤。
     *				tab.labels = "item0,item1,item2";//设置 tab 的标签集。
     *				tab.x = 100;//设置 tab 对象的属性 x 的值，用于控制 tab 对象的显示位置。
     *				tab.y = 100;//设置 tab 对象的属性 y 的值，用于控制 tab 对象的显示位置。
     *				tab.selectHandler = new Handler(this, onSelect);//设置 tab 的选择项发生改变时执行的处理器。
     *				Laya.stage.addChild(tab);//将 tab 添到显示列表。
     *			}
     *
     *			private function onSelect(index:int):void
     *			{
     *				trace("当前选择的表情页索引: index= ", index);
     *			}
     *		}
     *	}
     * </listing>
     * <listing version="3.0">
     * Laya.init(640, 800);//设置游戏画布宽高
     * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色
     * Laya.loader.load(["resource/ui/tab.png"], laya.utils.Handler.create(this, onLoadComplete));
     *
     * function onLoadComplete() {
     *     var tab = new laya.ui.Tab();//创建一个 Tab 类的实例对象 tab 。
     *     tab.skin = "resource/ui/tab.png";//设置 tab 的皮肤。
     *     tab.labels = "item0,item1,item2";//设置 tab 的标签集。
     *     tab.x = 100;//设置 tab 对象的属性 x 的值，用于控制 tab 对象的显示位置。
     *     tab.y = 100;//设置 tab 对象的属性 y 的值，用于控制 tab 对象的显示位置。
     *     tab.selectHandler = new laya.utils.Handler(this, onSelect);//设置 tab 的选择项发生改变时执行的处理器。
     *     Laya.stage.addChild(tab);//将 tab 添到显示列表。
     * }
     * function onSelect(index) {
     *     console.log("当前选择的标签页索引: index= ", index);
     * }
     * </listing>
     * <listing version="3.0">
     * import Tab = laya.ui.Tab;
     * import Handler = laya.utils.Handler;
     * class Tab_Example {
     *
     *     constructor() {
     *         Laya.init(640, 800);//设置游戏画布宽高。
     *         Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *         Laya.loader.load(["resource/ui/tab.png"], Handler.create(this, this.onLoadComplete));//加载资源。
     *     }
     *
     *     private onLoadComplete(): void {
     *         var tab: Tab = new Tab();//创建一个 Tab 类的实例对象 tab 。
     *         tab.skin = "resource/ui/tab.png";//设置 tab 的皮肤。
     *         tab.labels = "item0,item1,item2";//设置 tab 的标签集。
     *         tab.x = 100;//设置 tab 对象的属性 x 的值，用于控制 tab 对象的显示位置。
     *         tab.y = 100;//设置 tab 对象的属性 y 的值，用于控制 tab 对象的显示位置。
     *         tab.selectHandler = new Handler(this, this.onSelect);//设置 tab 的选择项发生改变时执行的处理器。
     *         Laya.stage.addChild(tab);//将 tab 添到显示列表。
     *     }
     *
     *     private onSelect(index: number): void {
     *         console.log("当前选择的表情页索引: index= ", index);
     *     }
     * }
     * </listing>
     * @author yung
     */
    class Tab extends laya.editorUI.Group {
        protected createItem(skin: string, label: string): laya.display.Sprite;
    }
}
declare module laya.editorUI {
    /**
     * ...
     * @author ww
     */
    class Text extends laya.display.Text {
        constructor();
    }
}
declare module laya.editorUI {
    /**
     * <code>TextArea</code> 类用于创建显示对象以显示和输入文本。
     *
     *
     * @example 以下示例代码，创建了一个 <code>TextArea</code> 实例。
     * <listing version="3.0">
     * package
     *	{
     *		import laya.ui.TextArea;
     *		import laya.utils.Handler;
     *
     *		public class TextArea_Example
     *		{
     *
     *			public function TextArea_Example()
     *			{
     *				Laya.init(640, 800);//设置游戏画布宽高。
     *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *				Laya.loader.load(["resource/ui/input.png"], Handler.create(this, onLoadComplete));//加载资源。
     *			}
     *
     *			private function onLoadComplete():void
     *			{
     *				var textArea:TextArea = new TextArea("这个一个TextArea实例。");//创建一个 TextArea 类的实例对象 textArea 。
     *				textArea.skin = "resource/ui/input.png";//设置 textArea 的皮肤。
     *				textArea.sizeGrid = "4,4,4,4";//设置 textArea 的网格信息。
     *				textArea.color = "#008fff";//设置 textArea 的文本颜色。
     *				textArea.font = "Arial";//设置 textArea 的字体。
     *				textArea.bold = true;//设置 textArea 的文本显示为粗体。
     *				textArea.fontSize = 20;//设置 textArea 的文本字体大小。
     *				textArea.wordWrap = true;//设置 textArea 的文本自动换行。
     *				textArea.x = 100;//设置 textArea 对象的属性 x 的值，用于控制 textArea 对象的显示位置。
     *				textArea.y = 100;//设置 textArea 对象的属性 y 的值，用于控制 textArea 对象的显示位置。
     *				textArea.width = 300;//设置 textArea 的宽度。
     *				textArea.height = 200;//设置 textArea 的高度。
     *				Laya.stage.addChild(textArea);//将 textArea 添加到显示列表。
     *			}
     *
     *		}
     *
     *	}
     * </listing>
     * <listing version="3.0">
     * Laya.init(640, 800);//设置游戏画布宽高、渲染模式
     * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色
     * Laya.loader.load(["resource/ui/input.png"], laya.utils.Handler.create(this, onLoadComplete));//加载资源。
     * function onLoadComplete() {
     *     var textArea = new laya.ui.TextArea("这个一个TextArea实例。");//创建一个 TextArea 类的实例对象 textArea 。
     *     textArea.skin = "resource/ui/input.png";//设置 textArea 的皮肤。
     *     textArea.sizeGrid = "4,4,4,4";//设置 textArea 的网格信息。
     *     textArea.color = "#008fff";//设置 textArea 的文本颜色。
     *     textArea.font = "Arial";//设置 textArea 的字体。
     *     textArea.bold = true;//设置 textArea 的文本显示为粗体。
     *     textArea.fontSize = 20;//设置 textArea 的文本字体大小。
     *     textArea.wordWrap = true;//设置 textArea 的文本自动换行。
     *     textArea.x = 100;//设置 textArea 对象的属性 x 的值，用于控制 textArea 对象的显示位置。
     *     textArea.y = 100;//设置 textArea 对象的属性 y 的值，用于控制 textArea 对象的显示位置。
     *     textArea.width = 300;//设置 textArea 的宽度。
     *     textArea.height = 200;//设置 textArea 的高度。
     *     Laya.stage.addChild(textArea);//将 textArea 添加到显示列表。
     * }
     * </listing>
     * <listing version="3.0">
     * import TextArea = laya.ui.TextArea;
     * import Handler = laya.utils.Handler;
     * class TextArea_Example {
     *     constructor() {
     *         Laya.init(640, 800);//设置游戏画布宽高、渲染模式。
     *         Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *         Laya.loader.load(["resource/ui/input.png"], Handler.create(this, this.onLoadComplete));//加载资源。
     *     }
     *     private onLoadComplete(): void {
     *         var textArea: TextArea = new TextArea("这个一个TextArea实例。");//创建一个 TextArea 类的实例对象 textArea 。
     *         textArea.skin = "resource/ui/input.png";//设置 textArea 的皮肤。
     *         textArea.sizeGrid = "4,4,4,4";//设置 textArea 的网格信息。
     *         textArea.color = "#008fff";//设置 textArea 的文本颜色。
     *         textArea.font = "Arial";//设置 textArea 的字体。
     *         textArea.bold = true;//设置 textArea 的文本显示为粗体。
     *         textArea.fontSize = 20;//设置 textArea 的文本字体大小。
     *         textArea.wordWrap = true;//设置 textArea 的文本自动换行。
     *         textArea.x = 100;//设置 textArea 对象的属性 x 的值，用于控制 textArea 对象的显示位置。
     *         textArea.y = 100;//设置 textArea 对象的属性 y 的值，用于控制 textArea 对象的显示位置。
     *         textArea.width = 300;//设置 textArea 的宽度。
     *         textArea.height = 200;//设置 textArea 的高度。
     *         Laya.stage.addChild(textArea);//将 textArea 添加到显示列表。
     *     }
     * }
     * </listing>
     * @author yung
     */
    class TextArea extends TextInput {
        /**
         * <p>创建一个新的 <code>TextArea</code> 示例。</p>
         * @param text 文本内容字符串。
         */
        constructor(text?: string);
        protected _vScrollBar: VScrollBar;
        protected _hScrollBar: HScrollBar;
        destroy(destroyChild?: boolean): void;
        protected initialize(): void;
        width: number;
        height: number;
        /**垂直滚动条皮肤*/
        vScrollBarSkin: string;
        /**水平滚动条皮肤*/
        hScrollBarSkin: string;
        protected onVBarChanged(e: laya.events.Event): void;
        protected onHBarChanged(e: laya.events.Event): void;
        /**垂直滚动条实体*/
        vScrollBar: VScrollBar;
        /**水平滚动条实体*/
        hScrollBar: HScrollBar;
        /**垂直滚动最大值*/
        maxScrollY: number;
        /**垂直滚动值*/
        scrollY: number;
        /**水平滚动最大值*/
        maxScrollX: number;
        /**水平滚动值*/
        scrollX: number;
        /**滚动到某个位置*/
        scrollTo(y: number): void;
    }
}
declare module laya.editorUI {
    /**
     * <code>TextInput</code> 类用于创建显示对象以显示和输入文本。
     *
     * @example 以下示例代码，创建了一个 <code>TextInput</code> 实例。
     * <listing version="3.0">
     * package
     *	{
     *		import laya.display.Stage;
     *		import laya.ui.TextInput;
     *		import laya.utils.Handler;
     *
     *		public class TextInput_Example
     *		{
     *			public function TextInput_Example()
     *			{
     *				Laya.init(640, 800);//设置游戏画布宽高、渲染模式。
     *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *				Laya.loader.load(["resource/ui/input.png"], Handler.create(this, onLoadComplete));//加载资源。
     *			}
     *
     *			private function onLoadComplete():void
     *			{
     *				var textInput:TextInput = new TextInput("这是一个TextInput实例。");//创建一个 TextInput 类的实例对象 textInput 。
     *				textInput.skin = "resource/ui/input.png";//设置 textInput 的皮肤。
     *				textInput.sizeGrid = "4,4,4,4";//设置 textInput 的网格信息。
     *				textInput.color = "#008fff";//设置 textInput 的文本颜色。
     *				textInput.font = "Arial";//设置 textInput 的文本字体。
     *				textInput.bold = true;//设置 textInput 的文本显示为粗体。
     *				textInput.fontSize = 30;//设置 textInput 的字体大小。
     *				textInput.wordWrap = true;//设置 textInput 的文本自动换行。
     *				textInput.x = 100;//设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
     *				textInput.y = 100;//设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
     *				textInput.width = 300;//设置 textInput 的宽度。
     *				textInput.height = 200;//设置 textInput 的高度。
     *				Laya.stage.addChild(textInput);//将 textInput 添加到显示列表。
     *			}
     *
     *		}
     *
     *	}
     * </listing>
     * <listing version="3.0">
     * Laya.init(640, 800);//设置游戏画布宽高
     * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色
     * Laya.loader.load(["resource/ui/input.png"], laya.utils.Handler.create(this, onLoadComplete));//加载资源。
     * function onLoadComplete() {
     *     var textInput = new laya.ui.TextInput("这是一个TextInput实例。");//创建一个 TextInput 类的实例对象 textInput 。
     *     textInput.skin = "resource/ui/input.png";//设置 textInput 的皮肤。
     *     textInput.sizeGrid = "4,4,4,4";//设置 textInput 的网格信息。
     *     textInput.color = "#008fff";//设置 textInput 的文本颜色。
     *     textInput.font = "Arial";//设置 textInput 的文本字体。
     *     textInput.bold = true;//设置 textInput 的文本显示为粗体。
     *     textInput.fontSize = 30;//设置 textInput 的字体大小。
     *     textInput.wordWrap = true;//设置 textInput 的文本自动换行。
     *     textInput.x = 100;//设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
     *     textInput.y = 100;//设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
     *     textInput.width = 300;//设置 textInput 的宽度。
     *     textInput.height = 200;//设置 textInput 的高度。
     *     Laya.stage.addChild(textInput);//将 textInput 添加到显示列表。
     * }
     * </listing>
     * <listing version="3.0">
     * import Stage = laya.display.Stage;
     * import TextInput = laya.ui.TextInput;
     * import Handler = laya.utils.Handler;
     * class TextInput_Example {
     *     constructor() {
     *         Laya.init(640, 800);//设置游戏画布宽高、渲染模式。
     *         Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *         Laya.loader.load(["resource/ui/input.png"], Handler.create(this, this.onLoadComplete));//加载资源。
     *     }
     *     private onLoadComplete(): void {
     *         var textInput: TextInput = new TextInput("这是一个TextInput实例。");//创建一个 TextInput 类的实例对象 textInput 。
     *         textInput.skin = "resource/ui/input.png";//设置 textInput 的皮肤。
     *         textInput.sizeGrid = "4,4,4,4";//设置 textInput 的网格信息。
     *         textInput.color = "#008fff";//设置 textInput 的文本颜色。
     *         textInput.font = "Arial";//设置 textInput 的文本字体。
     *         textInput.bold = true;//设置 textInput 的文本显示为粗体。
     *         textInput.fontSize = 30;//设置 textInput 的字体大小。
     *         textInput.wordWrap = true;//设置 textInput 的文本自动换行。
     *         textInput.x = 100;//设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
     *         textInput.y = 100;//设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
     *         textInput.width = 300;//设置 textInput 的宽度。
     *         textInput.height = 200;//设置 textInput 的高度。
     *         Laya.stage.addChild(textInput);//将 textInput 添加到显示列表。
     *     }
     *
     * }
     * </listing>
     * @author yung
     */
    class TextInput extends laya.editorUI.Label {
        protected _bg: laya.editorUI.AutoBitmap;
        protected _skin: string;
        /**
         * 创建一个新的 <code>TextInput</code> 类实例。
         * @param text 文本内容。
         */
        constructor(text?: string);
        /**@inheritDoc */
        destroy(destroyChild?: boolean): void;
        protected createChildren(): void;
        protected initialize(): void;
        /**
         * 表示此对象包含的文本背景 <code>AutoBitmap</code> 组件实例。
         * @return
         */
        bg: laya.editorUI.AutoBitmap;
        /**
         * @copy laya.ui.Image#skin
         * @return
         */
        skin: string;
        /**
         * <p>当前实例的背景图（ <code>AutoBitmap</code> ）实例的有效缩放网格数据。</p>
         * <p>数据格式："上边距,右边距,下边距,左边距,是否重复填充(值为0：不重复填充，1：重复填充)"，以逗号分隔。
         * <ul><li>例如："4,4,4,4,1"</li></ul></p>
         * @see laya.ui.AutoBitmap.sizeGrid
         * @return
         */
        sizeGrid: string;
        /**@inheritDoc */
        width: number;
        /**@inheritDoc */
        height: number;
        /**
         * <p>指示当前是否是文本域。</p>
         * 值为true表示当前是文本域，否则不是文本域。
         * @return
         */
        multiline: boolean;
        /**
         * 设置可编辑状态。
         */
        editable: boolean;
        /**
         * 设置原生input输入框的x坐标偏移。
         */
        inputElementXAdjuster: number;
        /**
         * 设置原生input输入框的y坐标偏移。
         */
        inputElementYAdjuster: number;
        /**选中输入框内的文本*/
        select(): void;
        /**限制输入的字符。*/
        restrict: string;
        /**
         * @copy laya.display.Input#prompt
         */
        prompt: string;
        /**
         * @copy laya.display.Input#promptColor
         */
        promptColor: string;
        /**
         * @copy laya.display.Input#maxChars
         */
        maxChars: number;
        /**
         * @copy laya.display.Input#type
         */
        type: string;
    }
}
declare module laya.editorUI {
    /**
     * <code>Tree</code> 控件使用户可以查看排列为可扩展树的层次结构数据。
     *
     * @example 以下示例代码，创建了一个 <code>Tree</code> 实例。
     * <listing version="3.0">
     * package
     *	{
     *		import laya.ui.Tree;
     *		import laya.utils.Browser;
     *		import laya.utils.Handler;
     *
     *		public class Tree_Example
     *		{
     *
     *			public function Tree_Example()
     *			{
     *				Laya.init(640, 800);
     *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *				Laya.loader.load(["resource/ui/vscroll.png", "resource/ui/vscroll$bar.png", "resource/ui/vscroll$down.png", "resource/ui/vscroll$up.png", "resource/ui/clip_selectBox.png", "resource/ui/clip_tree_folder.png", "resource/ui/clip_tree_arrow.png"], Handler.create(this, onLoadComplete));
     *			}
     *
     *			private function onLoadComplete():void
     *			{
     * 				var xmlString:String;//创建一个xml字符串，用于存储树结构数据。
     *				xmlString = "&lt;root&gt;&lt;item label='box1'&gt;&lt;abc label='child1'/&gt;&lt;abc label='child2'/&gt;&lt;abc label='child3'/&gt;&lt;abc label='child4'/&gt;&lt;abc label='child5'/&gt;&lt;/item&gt;&lt;item label='box2'&gt;&lt;abc label='child1'/&gt;&lt;abc label='child2'/&gt;&lt;abc label='child3'/&gt;&lt;abc label='child4'/&gt;&lt;/item&gt;&lt;/root&gt;";
     *				var domParser:* = new Browser.window.DOMParser();//创建一个DOMParser实例domParser。
     *				var xml:* = domParser.parseFromString(xmlString, "text/xml");//解析xml字符。
     *
     *				var tree:Tree = new Tree();//创建一个 Tree 类的实例对象 tree 。
     *				tree.scrollBarSkin = "resource/ui/vscroll.png";//设置 tree 的皮肤。
     *				tree.itemRender = Item;//设置 tree 的项渲染器。
     *				tree.xml = xml;//设置 tree 的树结构数据。
     *				tree.x = 100;//设置 tree 对象的属性 x 的值，用于控制 tree 对象的显示位置。
     *				tree.y = 100;//设置 tree 对象的属性 y 的值，用于控制 tree 对象的显示位置。
     *				tree.width = 200;//设置 tree 的宽度。
     *				tree.height = 100;//设置 tree 的高度。
     *				Laya.stage.addChild(tree);//将 tree 添加到显示列表。
     *			}
     *		}
     *	}
     *
     * import laya.ui.Box;
     * import laya.ui.Clip;
     * import laya.ui.Label;
     *	class Item extends Box
     *	{
     *		public function Item()
     *		{
     *			this.name = "render";
     *			this.right = 0;
     *			this.left = 0;
     *
     *			var selectBox:Clip = new Clip("resource/ui/clip_selectBox.png", 1, 2);
     *			selectBox.name = "selectBox";
     *			selectBox.height = 24;
     *			selectBox.x = 13;
     *			selectBox.y = 0;
     *			selectBox.left = 12;
     *			addChild(selectBox);
     *
     *			var folder:Clip = new Clip("resource/ui/clip_tree_folder.png", 1, 3);
     *			folder.name = "folder";
     *			folder.x = 14;
     *			folder.y = 4;
     *			addChild(folder);
     *
     *			var label:Label = new Label("treeItem");
     *			label.name = "label";
     *			label.color = "#ffff00";
     *			label.width = 150;
     *			label.height = 22;
     *			label.x = 33;
     *			label.y = 1;
     *			label.left = 33;
     *			label.right = 0;
     *			addChild(label);
     *
     *			var arrow:Clip = new Clip("resource/ui/clip_tree_arrow.png", 1, 2);
     *			arrow.name = "arrow";
     *			arrow.x = 0;
     *			arrow.y = 5;
     *			addChild(arrow);
     *		}
     *	 }
     *
     *
     * </listing>
     * <listing version="3.0">
     * Laya.init(640, 800);//设置游戏画布宽高、渲染模式
     * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色
     * var res = ["resource/ui/vscroll.png", "resource/ui/vscroll$bar.png", "resource/ui/vscroll$down.png", "resource/ui/vscroll$up.png", "resource/ui/clip_selectBox.png", "resource/ui/clip_tree_folder.png", "resource/ui/clip_tree_arrow.png"];
     * Laya.loader.load(res, new laya.utils.Handler(this, onLoadComplete));
     * function onLoadComplete() {
     *     var xmlString;//创建一个xml字符串，用于存储树结构数据。
     *     xmlString = "&lt;root&gt;&lt;item label='box1'&gt;&lt;abc label='child1'/&gt;&lt;abc label='child2'/&gt;&lt;abc label='child3'/&gt;&lt;abc label='child4'/&gt;&lt;abc label='child5'/&gt;&lt;/item&gt;&lt;item label='box2'&gt;&lt;abc label='child1'/&gt;&lt;abc label='child2'/&gt;&lt;abc label='child3'/&gt;&lt;abc label='child4'/&gt;&lt;/item&gt;&lt;/root&gt;";
     *     var domParser = new laya.utils.Browser.window.DOMParser();//创建一个DOMParser实例domParser。
     *     var xml = domParser.parseFromString(xmlString, "text/xml");//解析xml字符。

     *     var tree = new laya.ui.Tree();//创建一个 Tree 类的实例对象 tree 。
     *     tree.scrollBarSkin = "resource/ui/vscroll.png";//设置 tree 的皮肤。
     *     tree.itemRender = mypackage.treeExample.Item;//设置 tree 的项渲染器。
     *     tree.xml = xml;//设置 tree 的树结构数据。
     *     tree.x = 100;//设置 tree 对象的属性 x 的值，用于控制 tree 对象的显示位置。
     *     tree.y = 100;//设置 tree 对象的属性 y 的值，用于控制 tree 对象的显示位置。
     *     tree.width = 200;//设置 tree 的宽度。
     *     tree.height = 100;//设置 tree 的高度。
     *     Laya.stage.addChild(tree);//将 tree 添加到显示列表。
     * }
     * (function (_super) {
     *     function Item() {
     *         Item.__super.call(this);//初始化父类。
     *         this.right = 0;
     *         this.left = 0;

     *         var selectBox = new laya.ui.Clip("resource/ui/clip_selectBox.png", 1, 2);
     *         selectBox.name = "selectBox";//设置 selectBox 的name 为“selectBox”时，将被识别为树结构的项的背景。2帧：悬停时背景、选中时背景。
     *         selectBox.height = 24;
     *         selectBox.x = 13;
     *         selectBox.y = 0;
     *         selectBox.left = 12;
     *         this.addChild(selectBox);//需要使用this.访问父类的属性或方法。

     *         var folder = new laya.ui.Clip("resource/ui/clip_tree_folder.png", 1, 3);
     *         folder.name = "folder";//设置 folder 的name 为“folder”时，将被识别为树结构的文件夹开启状态图表。2帧：折叠状态、打开状态。
     *         folder.x = 14;
     *         folder.y = 4;
     *         this.addChild(folder);

     *         var label = new laya.ui.Label("treeItem");
     *         label.name = "label";//设置 label 的name 为“label”时，此值将用于树结构数据赋值。
     *         label.color = "#ffff00";
     *         label.width = 150;
     *         label.height = 22;
     *         label.x = 33;
     *         label.y = 1;
     *         label.left = 33;
     *         label.right = 0;
     *         this.addChild(label);

     *         var arrow = new laya.ui.Clip("resource/ui/clip_tree_arrow.png", 1, 2);
     *         arrow.name = "arrow";//设置 arrow 的name 为“arrow”时，将被识别为树结构的文件夹开启状态图表。2帧：折叠状态、打开状态。
     *         arrow.x = 0;
     *         arrow.y = 5;
     *         this.addChild(arrow);
     *     };
     *     Laya.class(Item,"mypackage.treeExample.Item",_super);//注册类 Item 。
     * })(laya.ui.Box);
     * </listing>
     * <listing version="3.0">
     * import Tree = laya.ui.Tree;
     * import Browser = laya.utils.Browser;
     * import Handler = laya.utils.Handler;
     * class Tree_Example {
     *
     *     constructor() { *
     *         Laya.init(640, 800); *
     *         Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。 *
     *         Laya.loader.load(["resource/ui/vscroll.png", "resource/ui/vscroll$bar.png", "resource/ui/vscroll$down.png", "resource/ui/vscroll$up.png", "resource/ui/vscroll$up.png", "resource/ui/clip_selectBox.png", "resource/ui/clip_tree_folder * . * png", "resource/ui/clip_tree_arrow.png"], Handler.create(this, this.onLoadComplete)); *
     *     } *
     *     private onLoadComplete(): void { *
     *         var xmlString: String;//创建一个xml字符串，用于存储树结构数据。 *
     *         xmlString = "&lt;root&gt;&lt;item label='box1'&gt;&lt;abc label='child1'/&gt;&lt;abc label='child2'/&gt;&lt;abc label='child3'/&gt;&lt;abc label='child4'/&gt;&lt;abc label='child5'/&gt;&lt;/item&gt;&lt;item label='box2'&gt;&lt;abc  * label='child1'/&gt;&lt;abc label='child2'/&gt;&lt;abc label='child3'/&gt;&lt;abc label='child4'/&gt;&lt;/item&gt;&lt;/root&gt;";
     *         var domParser: any = new Browser.window.DOMParser();//创建一个DOMParser实例domParser。
     *         var xml: any = domParser.parseFromString(xmlString, "text/xml");//解析xml字符。
     *
     *         var tree: Tree = new Tree();//创建一个 Tree 类的实例对象 tree 。
     *         tree.scrollBarSkin = "resource/ui/vscroll.png";//设置 tree 的皮肤。
     *         tree.itemRender = Item;//设置 tree 的项渲染器。
     *         tree.xml = xml;//设置 tree 的树结构数据。
     *         tree.x = 100;//设置 tree 对象的属性 x 的值，用于控制 tree 对象的显示位置。
     *         tree.y = 100;//设置 tree 对象的属性 y 的值，用于控制 tree 对象的显示位置。
     *         tree.width = 200;//设置 tree 的宽度。
     *         tree.height = 100;//设置 tree 的高度。
     *         Laya.stage.addChild(tree);//将 tree 添加到显示列表。
     *     }
     * }
     * import Box = laya.ui.Box;
     * import Clip = laya.ui.Clip;
     * import Label = laya.ui.Label;
     * class Item extends Box {
     *     constructor() {
     *         super();
     *         this.name = "render";
     *         this.right = 0;
     *         this.left = 0;
     *         var selectBox: Clip = new Clip("resource/ui/clip_selectBox.png", 1, 2);
     *         selectBox.name = "selectBox";
     *         selectBox.height = 24;
     *         selectBox.x = 13;
     *         selectBox.y = 0;
     *         selectBox.left = 12;
     *         this.addChild(selectBox);
     *
     *         var folder: Clip = new Clip("resource/ui/clip_tree_folder.png", 1, 3);
     *         folder.name = "folder";
     *         folder.x = 14;
     *         folder.y = 4;
     *         this.addChild(folder);
     *
     *         var label: Label = new Label("treeItem");
     *         label.name = "label";
     *         label.color = "#ffff00";
     *         label.width = 150;
     *         label.height = 22;
     *         label.x = 33;
     *         label.y = 1;
     *         label.left = 33;
     *         label.right = 0;
     *         this.addChild(label);
     *
     *         var arrow: Clip = new Clip("resource/ui/clip_tree_arrow.png", 1, 2);
     *         arrow.name = "arrow";
     *         arrow.x = 0;
     *         arrow.y = 5;
     *         this.addChild(arrow);
     *     }
     * }
     * </listing>
     * @author yung
     */
    class Tree extends Box implements laya.ui.IRender {
        protected _list: List;
        protected _source: Array<any>;
        protected _renderHandler: laya.utils.Handler;
        protected _spaceLeft: number;
        protected _spaceBottom: number;
        protected _keepStatus: boolean;
        /**
         * 创建一个新的 <code>Tree</code> 类实例。
         *
         * <p>在 <code>Tree</code> 构造函数中设置属性width、height的值都为200。</p>
         */
        constructor();
        /**@inheritDoc */
        destroy(destroyChild?: boolean): void;
        protected createChildren(): void;
        protected onListChange(e: laya.events.Event): void;
        /**
         * 数据源发生变化后，是否保持之前打开状态，默认为true。
         *
         * <p><b>取值：</b>
         * <li>true：保持之前打开状态。</li>
         * <li>false：不保持之前打开状态。</li>
         * </p>
         * @return
         */
        keepStatus: boolean;
        /**
         * 列表数据源，只包含当前可视节点数据。
         * @return
         */
        array: Array<any>;
        /**
         * 数据源，全部节点数据。
         * @return
         */
        source: Array<any>;
        /**
         * 此对象包含的<code>List</code>实例对象。
         * @return
         */
        list: List;
        /**
         * 此对象包含的<code>List</code>实例的单元格渲染器。
         *
         * <p><b>取值：</b>
         * <ol>
         * <li>单元格类对象。</li>
         * <li> UI 的 JSON 描述。</li>
         * </ol></p>
         *
         * @return
         */
        itemRender: any;
        /**
         * 滚动条皮肤。
         * @return
         */
        scrollBarSkin: string;
        /**滚动条*/
        scrollBar: ScrollBar;
        /**
         * 单元格鼠标事件处理器。
         * <p>默认返回参数（e:Event,index:int）。</p>
         * @return
         */
        mouseHandler: laya.utils.Handler;
        /**
         * <code>Tree</code> 实例的渲染处理器。
         * @return
         */
        renderHandler: laya.utils.Handler;
        /**
         * 左侧缩进距离（以像素为单位）。
         * @return
         */
        spaceLeft: number;
        /**
         * 每一项之间的间隔距离（以像素为单位）。
         * @return
         */
        spaceBottom: number;
        /**
         * 表示当前选择的项索引。
         * @return
         */
        selectedIndex: number;
        /**
         * 当前选中的项对象的数据源。
         * @return
         */
        selectedItem: any;
        /**
         * @inheritDoc
         * @param value
         */
        width: number;
        /**@inheritDoc */
        height: number;
        protected getArray(): Array<any>;
        protected getDepth(item: any, num?: number): number;
        protected getParentOpenStatus(item: any): boolean;
        protected renderItem(cell: Box, index: number): void;
        /**
         * 通过数据项索引，设置项对象的打开状态。
         * @param index
         * @param isOpen
         */
        setItemState(index: number, isOpen: boolean): void;
        /**@inheritDoc */
        dataSource: any;
        /**
         *  xml结构的数据源。
         * @param value
         */
        xml: any;
        protected parseXml(xml: any, source: Array<any>, nodeParent: any, isRoot: boolean): void;
        protected parseOpenStatus(oldSource: Array<any>, newSource: Array<any>): void;
        protected isSameParent(item1: any, item2: any): boolean;
        /**
         * 表示选择的树节点项的<code>path</code>属性值。
         * @return
         */
        selectedPath: string;
        /**
         * @internal ##??
         * @param key
         */
        filter(key: string): void;
    }
}
declare module laya.editorUI {
    /**全局配置*/
    class UIConfig {
        /**资源路径*/
        static resPath: string;
        /**UI路径(UI加载模式可用)*/
        static uiPath: string;
        /**是否开启触摸*/
        static touchScrollEnable: boolean;
        /**是否开启滑轮滚动*/
        static mouseWheelEnable: boolean;
        /**是否显示滚动条按钮*/
        static showButtons: boolean;
        static popupBgColor: string;
        static popupBgAlpha: number;
    }
}
declare module laya.editorUI {
    /**
     * <code>UIEvent</code> 类用来定义UI组件类的事件类型。
     * @author yung
     *
     */
    class UIEvent extends laya.events.Event {
        /**
         */
        static SHOW_TIP: string;
        /**
         */
        static HIDE_TIP: string;
    }
}
declare module laya.editorUI {
    /**
     * 文本工具集。
     * @author yung
     */
    class UIUtils {
        /**
         * 用字符串填充数组，并返回数组副本。
         * @param arr
         * @param str
         * @param type
         * @return
         */
        static fillArray(arr: Array<any>, str: string, type?: any): Array<any>;
        /**
         * 转换uint类型颜色值为字符串。
         * @param color uint颜色值。
         * @return
         */
        static toColor(color: number): string;
        /**让显示对象变成灰色*/
        static gray(traget: laya.display.Sprite, isGray?: boolean): void;
        /**添加滤镜*/
        static addFilter(target: laya.display.Sprite, filter: laya.filters.IFilter): void;
        /**清除滤镜*/
        static clearFilter(target: laya.display.Sprite, filterType: any): void;
    }
}
declare module laya.editorUI {
    /**VBox容器*/
    class VBox extends LayoutBox {
        static NONE: string;
        static LEFT: string;
        static CENTER: string;
        static RIGHT: string;
        constructor();
        protected changeItems(): void;
    }
}
declare module laya.editorUI {
    /**
     * <code>View</code> 是一个视图类。
     *
     * @internal <p><code>View</code></p>
     * @author yung
     */
    class View extends laya.editorUI.Box {
        /**
         * 存储UI配置数据(用于加载模式)。
         */
        static uiMap: any;
        /**
         * UI类映射。
         */
        static uiClassMap: any;
        protected static viewClassMap: any;
        protected createView(uiView: any): void;
        protected loadUI(path: string): void;
        /**
         * 根据UI数据实例化组件。
         * @param uiView UI数据。
         * @param comp 组件本体，如果为空，会新创建一个。
         * @param view 组件所在的视图实例，用来注册var全局变量，如果值为空则不注册。
         * @return
         */
        static createComp: Function;
        protected static getCompInstance(json: any): laya.editorUI.Component;
        /**
         * 注册组件类映射。
         * <p>用于扩展组件及修改组件对应关系。</p>
         * @param key 组件类的关键字。
         * @param compClass 组件类对象。
         */
        static regComponent(key: string, compClass: any): void;
        /**
         * 注册UI视图类的逻辑处理类。
         *
         * @internal 注册runtime解析。
         * @param key UI视图类的关键字。
         * @param compClass UI视图类对应的逻辑处理类。
         */
        static regViewRuntime(key: string, compClass: any): void;
    }
}
declare module laya.editorUI {
    /**
     * <code>ViewStack</code> 类用于视图堆栈类，用于视图的显示等设置处理。
     */
    class ViewStack extends laya.editorUI.Box implements laya.ui.IItem {
        protected _items: Array<any>;
        protected _setIndexHandler: laya.utils.Handler;
        protected _selectedIndex: number;
        /**
         * 批量设置视图对象。
         * @param views 视图对象数组。
         */
        setItems(views: Array<any>): void;
        /**
         * 添加视图。
         *
         * @internal 添加视图对象，并设置此视图对象的<code>name</code> 属性。
         * @param view 需要添加的视图对象。
         */
        addItem(view: laya.display.Node): void;
        /**
         * 初始化视图对象集合。
         */
        initItems(): void;
        /**
         * 表示当前视图索引。
         * @return
         */
        selectedIndex: number;
        protected setSelect(index: number, selected: boolean): void;
        /**
         * 获取或设置当前选择的项对象。
         * @return
         */
        selection: laya.display.Node;
        /**
         *  索引设置处理器。
         * <p>默认回调参数：index:int</p>
         * @return
         */
        setIndexHandler: laya.utils.Handler;
        protected setIndex(index: number): void;
        /**
         * 视图集合数组。
         * @return
         */
        items: Array<any>;
        /**@inheritDoc */
        dataSource: any;
    }
}
declare module laya.editorUI {
    /**
     *
     * 使用 <code>VScrollBar</code> （垂直 <code>ScrollBar</code> ）控件，可以在因数据太多而不能在显示区域完全显示时控制显示的数据部分。
     *
     * @example 以下示例代码，创建了一个 <code>VScrollBar</code> 实例。
     * <listing version="3.0">
     * package
     *	{
     *		import laya.ui.vScrollBar;
     *		import laya.ui.VScrollBar;
     *		import laya.utils.Handler;
     *
     *		public class VScrollBar_Example
     *		{
     *			private var vScrollBar:VScrollBar;
     *			public function VScrollBar_Example()
     *			{
     *				Laya.init(640, 800);//设置游戏画布宽高、渲染模式。
     *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *				Laya.loader.load(["resource/ui/vscroll.png", "resource/ui/vscroll$bar.png", "resource/ui/vscroll$down.png", "resource/ui/vscroll$up.png"], Handler.create(this, onLoadComplete));
     *			}
     *
     *			private function onLoadComplete():void
     *			{
     *				vScrollBar = new VScrollBar();//创建一个 vScrollBar 类的实例对象 hScrollBar 。
     *				vScrollBar.skin = "resource/ui/vscroll.png";//设置 vScrollBar 的皮肤。
     *				vScrollBar.x = 100;//设置 vScrollBar 对象的属性 x 的值，用于控制 vScrollBar 对象的显示位置。
     *				vScrollBar.y = 100;//设置 vScrollBar 对象的属性 y 的值，用于控制 vScrollBar 对象的显示位置。
     *				vScrollBar.changeHandler = new Handler(this, onChange);//设置 vScrollBar 的滚动变化处理器。
     *				Laya.stage.addChild(vScrollBar);//将此 vScrollBar 对象添加到显示列表。
     *			}
     *
     *			private function onChange(value:Number):void
     *			{
     *				trace("滚动条的位置： value=" + value);
     *			}
     *
     *		}
     *
     *	}
     * </listing>
     * <listing version="3.0">
     * Laya.init(640, 800);//设置游戏画布宽高
     * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色
     * var vScrollBar;
     * var res = ["resource/ui/vscroll.png", "resource/ui/vscroll$bar.png", "resource/ui/vscroll$down.png", "resource/ui/vscroll$up.png"];
     * Laya.loader.load(res, laya.utils.Handler.create(this, onLoadComplete));//加载资源。
     * function onLoadComplete() {
     *     vScrollBar = new laya.ui.VScrollBar();//创建一个 vScrollBar 类的实例对象 hScrollBar 。
     *     vScrollBar.skin = "resource/ui/vscroll.png";//设置 vScrollBar 的皮肤。
     *     vScrollBar.x = 100;//设置 vScrollBar 对象的属性 x 的值，用于控制 vScrollBar 对象的显示位置。
     *     vScrollBar.y = 100;//设置 vScrollBar 对象的属性 y 的值，用于控制 vScrollBar 对象的显示位置。
     *     vScrollBar.changeHandler = new laya.utils.Handler(this, onChange);//设置 vScrollBar 的滚动变化处理器。
     *     Laya.stage.addChild(vScrollBar);//将此 vScrollBar 对象添加到显示列表。
     * }
     * function onChange(value) {
     *     console.log("滚动条的位置： value=" + value);
     * }
     * </listing>
     * <listing version="3.0">
     * import VScrollBar = laya.ui.VScrollBar;
     * import Handler = laya.utils.Handler;
     * class VScrollBar_Example {
     *     private vScrollBar: VScrollBar;
     *     constructor() {
     *         Laya.init(640, 800);//设置游戏画布宽高、渲染模式。
     *         Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *         Laya.loader.load(["resource/ui/vscroll.png", "resource/ui/vscroll$bar.png", "resource/ui/vscroll$down.png", "resource/ui/vscroll$up.png"], Handler.create(this, this.onLoadComplete));
     *     }
     *
     *     private onLoadComplete(): void {
     *         this.vScrollBar = new VScrollBar();//创建一个 vScrollBar 类的实例对象 hScrollBar 。
     *         this.vScrollBar.skin = "resource/ui/vscroll.png";//设置 vScrollBar 的皮肤。
     *         this.vScrollBar.x = 100;//设置 vScrollBar 对象的属性 x 的值，用于控制 vScrollBar 对象的显示位置。
     *         this.vScrollBar.y = 100;//设置 vScrollBar 对象的属性 y 的值，用于控制 vScrollBar 对象的显示位置。
     *         this.vScrollBar.changeHandler = new Handler(this, this.onChange);//设置 vScrollBar 的滚动变化处理器。
     *         Laya.stage.addChild(this.vScrollBar);//将此 vScrollBar 对象添加到显示列表。
     *     }
     *
     *     private onChange(value: number): void {
     *         console.log("滚动条的位置： value=" + value);
     *     }
     *
     * }
     * </listing>
     * @author yung
     */
    class VScrollBar extends ScrollBar {
    }
}
declare module laya.editorUI {
    /**
     * 使用 <code>VSlider</code> 控件，用户可以通过在滑块轨道的终点之间移动滑块来选择值。
     *
     * <p> <code>VSlider</code> 控件采用垂直方向。滑块轨道从下往上扩展，而标签位于轨道的左右两侧。</p>
     *
     * @example 以下示例代码，创建了一个 <code>VSlider</code> 实例。
     * <listing version="3.0">
     * package
     *	{
     *		import laya.ui.HSlider;
     *		import laya.ui.VSlider;
     *		import laya.utils.Handler;
     *
     *		public class VSlider_Example
     *		{
     *			private var vSlider:VSlider;
     *
     *			public function VSlider_Example()
     *			{
     *				Laya.init(640, 800);//设置游戏画布宽高。
     *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *				Laya.loader.load(["resource/ui/vslider.png", "resource/ui/vslider$bar.png"], Handler.create(this, onLoadComplete));//加载资源。
     *			}
     *
     *			private function onLoadComplete():void
     *			{
     *				vSlider = new VSlider();//创建一个 VSlider 类的实例对象 vSlider 。
     *				vSlider.skin = "resource/ui/vslider.png";//设置 vSlider 的皮肤。
     *				vSlider.min = 0;//设置 vSlider 最低位置值。
     *				vSlider.max = 10;//设置 vSlider 最高位置值。
     *				vSlider.value = 2;//设置 vSlider 当前位置值。
     *				vSlider.tick = 1;//设置 vSlider 刻度值。
     *				vSlider.x = 100;//设置 vSlider 对象的属性 x 的值，用于控制 vSlider 对象的显示位置。
     *				vSlider.y = 100;//设置 vSlider 对象的属性 y 的值，用于控制 vSlider 对象的显示位置。
     *				vSlider.changeHandler = new Handler(this, onChange);//设置 vSlider 位置变化处理器。
     *				Laya.stage.addChild(vSlider);//把 vSlider 添加到显示列表。
     *			}
     *
     *			private function onChange(value:Number):void
     *			{
     *				trace("滑块的位置： value=" + value);
     *			}
     *
     *		}
     *
     *	}
     * </listing>
     * <listing version="3.0">
     * Laya.init(640, 800);//设置游戏画布宽高
     * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色
     * var vSlider;
     * Laya.loader.load(["resource/ui/vslider.png", "resource/ui/vslider$bar.png"], laya.utils.Handler.create(this, onLoadComplete));//加载资源。
     * function onLoadComplete() {
     *     vSlider = new laya.ui.VSlider();//创建一个 VSlider 类的实例对象 vSlider 。
     *     vSlider.skin = "resource/ui/vslider.png";//设置 vSlider 的皮肤。
     *     vSlider.min = 0;//设置 vSlider 最低位置值。
     *     vSlider.max = 10;//设置 vSlider 最高位置值。
     *     vSlider.value = 2;//设置 vSlider 当前位置值。
     *     vSlider.tick = 1;//设置 vSlider 刻度值。
     *     vSlider.x = 100;//设置 vSlider 对象的属性 x 的值，用于控制 vSlider 对象的显示位置。
     *     vSlider.y = 100;//设置 vSlider 对象的属性 y 的值，用于控制 vSlider 对象的显示位置。
     *     vSlider.changeHandler = new laya.utils.Handler(this, onChange);//设置 vSlider 位置变化处理器。
     *     Laya.stage.addChild(vSlider);//把 vSlider 添加到显示列表。
     * }
     * function onChange(value) {
     *     console.log("滑块的位置： value=" + value);
     * }
     * </listing>
     * <listing version="3.0">
     * import HSlider = laya.ui.HSlider;
     * import VSlider = laya.ui.VSlider;
     * import Handler = laya.utils.Handler;
     * class VSlider_Example {
     *     private vSlider: VSlider;
     *     constructor() {
     *         Laya.init(640, 800);//设置游戏画布宽高。
     *         Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
     *         Laya.loader.load(["resource/ui/vslider.png", "resource/ui/vslider$bar.png"], Handler.create(this, this.onLoadComplete));//加载资源。
     *     }
     *
     *     private onLoadComplete(): void {
     *         this.vSlider = new VSlider();//创建一个 VSlider 类的实例对象 vSlider 。
     *         this.vSlider.skin = "resource/ui/vslider.png";//设置 vSlider 的皮肤。
     *         this.vSlider.min = 0;//设置 vSlider 最低位置值。
     *         this.vSlider.max = 10;//设置 vSlider 最高位置值。
     *         this.vSlider.value = 2;//设置 vSlider 当前位置值。
     *         this.vSlider.tick = 1;//设置 vSlider 刻度值。
     *         this.vSlider.x = 100;//设置 vSlider 对象的属性 x 的值，用于控制 vSlider 对象的显示位置。
     *         this.vSlider.y = 100;//设置 vSlider 对象的属性 y 的值，用于控制 vSlider 对象的显示位置。
     *         this.vSlider.changeHandler = new Handler(this, this.onChange);//设置 vSlider 位置变化处理器。
     *         Laya.stage.addChild(this.vSlider);//把 vSlider 添加到显示列表。
     *     }
     *
     *     private onChange(value: number): void {
     *         console.log("滑块的位置： value=" + value);
     *     }
     *
     * }
     * </listing>
     * @see laya.ui.Slider
     * @author yung
     */
    class VSlider extends Slider {
    }
}
declare module laya.ide {
    /**
     * 组件被加载后，会调用此类的init方法进行初始化
     */
    class Initiator {
        static init(parms: any): any;
    }
}
