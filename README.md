# MultiLangText

[![Build Status](https://travis-ci.org/whilu/MultiLangText.svg)](https://travis-ci.org/whilu/MultiLangText)

English | [中文](README-zh_CN.md)

Multi-language Text for LayaAir engine.

## Screenshots

<img src="/screenshots/MultiLangText_screen_record_1.0.0.gif" alt="MultiLangText_screen_record_1.0.0.gif" title="MultiLangText_screen_record_1.0.0.gif" width="500" height="353" />

## Usage

### Step 1

- Copy ```/src/co/lujun/laya/component/MultiLangText.js``` to ```{LayaAir IDE directory}/Resources/app/out/vs/layaEditor/renders/custom/```
- Copy ```/src/co/lujun/laya/component/MultiLangText.xml``` to ```{LayaAir IDE directory}/Resources/app/out/vs/layaEditor/renders/custom/```
- Copy ```/src/co/lujun/laya/component/multiLangText.png``` to ```{LayaAir IDE directory}/Resources/app/out/vs/layaEditor/laya/basics/Custom/```
- Copy ```/src/co/lujun/laya/component/multiLangText.png``` to ```{LayaAir IDE directory}/Resources/app/out/vs/layaEditor/laya/icons/components/```
- Export ```/src/co/``` directory to your project

### Step 2

Init library, there are two ways for init(Sync and Async):

Sync init, when do this, you should preLoad ```langfile.csv``` first, when you complete loaded the ```langFile.csv``` then call ```init``` method. The first parameter ```preloadLangFile``` set as ```true```, the second parameter ```langFilePath``` set as your ```langFile.csv``` path.

```typescript
Laya.loader.load("res/langFile.csv", Laya.Handler.create(this, function(){
   LangManager.init(true, "res/langFile.csv");
   Laya.stage.addChild(new view.SampleView);
}));
```

Async init, when do this, you can init ```LangManager``` in any place, but remember call ```init``` method with ```false```(no preloaded ```langFile.csv```). The first parameter ```preloadLangFile``` set as ```false```, the second parameter ```langFilePath``` set as your ```langFile.csv``` path.

```typescript
Laya.loader.load(["res/atlas/comp.atlas"], Laya.Handler.create(this, function(){
    Laya.stage.addChild(new view.SampleView);
}));
LangManager.init(false, "res/langFile.csv");
```

### Step 3

#### Use ```MultiLangText``` in LayaAir IDE UI Editor:

In UI editor page, open ```Component``` tab and click ```Custom``` directory, just use ```MultiLangText``` like ```Text```.

<img src="/screenshots/MultiLangText_screen_record_1.0.1.jpg" alt="MultiLangText_screen_record_1.0.1.jpg" title="MultiLangText_screen_record_1.0.1.jpg" width="200" height="70.6" /> <img src="/screenshots/MultiLangText_screen_record_1.0.2.jpg" alt="MultiLangText_screen_record_1.0.2.jpg" title="MultiLangText_screen_record_1.0.2.jpg" width="300" height="137.9" /> <img src="/screenshots/MultiLangText_screen_record_1.0.3.jpg" alt="MultiLangText_screen_record_1.0.3.jpg" title="MultiLangText_screen_record_1.0.3.jpg" width="300" height="133.7" />

#### Use```MultiLangText``` in code, you may create ```MultiLangText``` like ```Text``` dynamically in code:

- Single ```MultiLangText``` usage

```typescript
let multiLangText: MultiLangText = new MultiLangText();
multiLangText.pos(0, 0);
multiLangText.fontSize = 50;
multiLangText.color = "#ffffff";
multiLangText.multiLang("^BTN_SET", false);
Laya.stage.addChild(multiLangText);
```

- ```MultiLangText``` as ```Laya.Text```'s child usage

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

- ```LangManager.getInstance().getValue(langKey: string)```, with this method, you can get a value with one key

```typescript
let layaText1: Laya.Text = new Laya.Text();
layaText1.pos(600, 0);
layaText1.fontSize = 50;
layaText1.color = "#ffffff";
layaText1.text = LangManager.getInstance().getValue("^BTN_MUSIC");
Laya.stage.addChild(layaText1);
```

- ```switchLang(code: LangCode)```, with this method, you can switch language with [LangCode](#langCode)

```typescript
LangManager.getInstance().switchLang(LangCode.SC);
```

## <span id="langCode">LangCode</span>

A enum for your translation, located in ```co.lujun.laya.component```.

|enum|value|in .csv file column index(first column index is 0)|description
|:---:|:---:|:---:|:---:|
| EN | 1 | 1 | English
| SC | 2 | 2 | 简体中文
| TC | 3 | 3 | 繁體中文
| JP | 4 | 4 | 日本語

**Note: When you add new language translation, remember to add one new enum code to ```LangCode```, you also need to add this new enum code into class ```co.lujun.laya.component.LangManager.mLangCodeArr```. In ```langFile.csv``` file, add new translation with(```Tab```).**

Enjoy it😄!

## Change logs

### 0.9.0(2018-12-4)

- First release.

## About
If you have any questions, contact me: [lujun.byte#gmail.com](mailto:lujun.byte@gmail.com).

## License

[MIT](LICENSE)
