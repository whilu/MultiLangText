# MultiLangText

[![Build Status](https://travis-ci.org/whilu/MultiLangText.svg)](https://travis-ci.org/whilu/MultiLangText)

[English](README.md) | 中文

LayaAir 引擎多语言 Text(Multi-language Text) Library.

## 截图

<img src="/screenshots/MultiLangText_screen_record_1.0.0.gif" alt="MultiLangText_screen_record_1.0.0.gif" title="MultiLangText_screen_record_1.0.0.gif" width="500" height="353" />

## 使用

### Step 1

- 复制 ```/src/co/lujun/laya/component/MultiLangText.js``` 到 ```{LayaAir IDE 安装目录}/Resources/app/out/vs/layaEditor/renders/custom/``` 目录
- 复制 ```/src/co/lujun/laya/component/MultiLangText.xml``` 到 ```{LayaAir IDE 安装目录}/Resources/app/out/vs/layaEditor/renders/custom/``` 目录
- 复制 ```/src/co/lujun/laya/component/multiLangText.png``` 到 ```{LayaAir IDE 安装目录}/Resources/app/out/vs/layaEditor/laya/basics/Custom/``` 目录
- 复制 ```/src/co/lujun/laya/component/multiLangText.png``` 到 ```{LayaAir IDE 安装目录}/Resources/app/out/vs/layaEditor/laya/icons/components/``` 目录
- 导入 ```/src/co/``` 至你的项目中

### Step 2

初始化，异步和同步两种方式:

同步初始化，先预加载 ```langfile.csv```, 加载成功再调用 ```init``` 方法.

```typescript
Laya.loader.load("res/langFile.csv", Laya.Handler.create(this, function(){
   LangManager.init(true, "res/langFile.csv");
   Laya.stage.addChild(new view.SampleView);
}));
```

异步初始化, 可以在使用之前任何地方调用 ```init``` 方法, 调用时第一个参数  ```preloadLangFile``` 需要传 ```false```, 第二个参数 ```langFilePath``` 为 ```langfile.csv``` 路径.

```typescript
Laya.loader.load(["res/atlas/comp.atlas"], Laya.Handler.create(this, function(){
    Laya.stage.addChild(new view.SampleView);
}));
LangManager.init(false, "res/langFile.csv");
```

### Step 3

#### 在 LayaAir IDE UI Editor 中使用 ```MultiLangText```:

在 LayaAir IDE UI Editor 中找到 ```组件``` 并打开 ```Custom``` 目录, 就可以像使用 ```Text``` 一样使用 ```MultiLangText```.

<img src="/screenshots/MultiLangText_screen_record_1.0.1.jpg" alt="MultiLangText_screen_record_1.0.1.jpg" title="MultiLangText_screen_record_1.0.1.jpg" width="200" height="70.6" /> <img src="/screenshots/MultiLangText_screen_record_1.0.2.jpg" alt="MultiLangText_screen_record_1.0.2.jpg" title="MultiLangText_screen_record_1.0.2.jpg" width="300" height="137.9" /> <img src="/screenshots/MultiLangText_screen_record_1.0.3.jpg" alt="MultiLangText_screen_record_1.0.3.jpg" title="MultiLangText_screen_record_1.0.3.jpg" width="300" height="133.7" />

#### 在代码中使用 ```MultiLangText```, 同样类似在代码中使用 ```Text``` 一样使用 ```MultiLangText```:

- 单一 ```MultiLangText``` 使用

```typescript
let multiLangText: MultiLangText = new MultiLangText();
multiLangText.pos(0, 0);
multiLangText.fontSize = 50;
multiLangText.color = "#ffffff";
multiLangText.multiLang("^BTN_SET", false);
Laya.stage.addChild(multiLangText);
```

- 将 ```MultiLangText``` 作为 ```Laya.Text``` 的子节点使用(多语言翻译为 ```Laya.Text``` 的 text)

```typescript
let layaText: Laya.Text = new Laya.Text();
let layaTextMultiText: MultiLangText = new MultiLangText();
layaText.pos(300, 0);
layaText.fontSize = 50;
layaText.color = "#ffffff";
layaText.addChild(layaTextMultiText);
layaTextMultiText.multiLang("^BTN_SOUND", true);
Laya.stage.addChild(layaText);
```

- ```LangManager.getInstance().getValue(langKey: string)``` 方法, 使用这个方法根据一个 key 获取翻译 value

```typescript
let layaText1: Laya.Text = new Laya.Text();
layaText1.pos(600, 0);
layaText1.fontSize = 50;
layaText1.color = "#ffffff";
layaText1.text = LangManager.getInstance().getValue("^BTN_MUSIC");
Laya.stage.addChild(layaText1);
```

- ```switchLang(code: LandCode)``` 方法, 使用此方法切换语言, 参数 [LandCode](#langCode)

```typescript
LangManager.getInstance().switchLang(LangCode.SC);
```

## <span id="langCode">LangCode</span>

翻译的枚举, 位于 ```co.lujun.laya.component```.

|enum|value|in .csv file column index(first column index is 0)|description
|:---:|:---:|:---:|:---:|
| EN | 1 | 1 | English
| SC | 2 | 2 | 简体中文
| TC | 3 | 3 | 繁體中文
| JP | 4 | 4 | 日本語

**注意: 添加新语言翻译时，先在 ```LandCode``` 中添加一个 code，然后将该 code 添加到 ```co.lujun.laya.component.LangManager.mLangCodeArr``` 数组中. ```langFile.csv``` 文件同样需要用制表符(Tab 键)顺序相同分别写入.**

Enjoy it😄!

## 更新

### 0.9.0(2018-12-4)

- First release.

## 关于
If you have any questions, contact me: [lujun.byte#gmail.com](mailto:lujun.byte@gmail.com).

## License

[MIT](LICENSE)
