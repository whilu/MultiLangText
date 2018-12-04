# MultiLangText

[![Build Status](https://travis-ci.org/whilu/MultiLangText.svg)](https://travis-ci.org/whilu/MultiLangText)

[English](README.md) | 中文

Multi-language Text for LayaAir engine.

## Screenshots

<img src="/screenshots/MultiLangText_screen_record_1.0.0.gif" alt="MultiLangText_screen_record_1.0.0.gif" title="MultiLangText_screen_record_1.0.0.gif" width="741" height="524" />

## Usage

### Step 1

- Copy ```/src/co/lujun/laya/component/MultiLangText.js``` to ```{LayaAir IDE directory}/Resources/app/out/vs/layaEditor/renders/custom/```.
- Copy ```/src/co/lujun/laya/component/MultiLangText.xml``` to ```{LayaAir IDE directory}/Resources/app/out/vs/layaEditor/renders/custom/```.
- Copy ```/src/co/lujun/laya/component/multiLangText.png``` to ```{LayaAir IDE directory}/Resources/app/out/vs/layaEditor/laya/basics/Custom/```.
- Copy ```/src/co/lujun/laya/component/multiLangText.png``` to ```{LayaAir IDE directory}/Resources/app/out/vs/layaEditor/laya/icons/components/```.
- Export ```/src/co/``` directory to your project.

### Step 2

Init library first, there are two ways for init(Sync and Async):

#### Sync init, when do this, you should preLoad 'langfile.csv' first, when you complete loaded the 'langFile.csv' then call ```init``` method.

```typescript
// PreLoad 'langfile.csv', if do this, make sure init LangManager when you complete loaded the 'langFile.csv'.
Laya.loader.load("res/langFile.csv", Laya.Handler.create(this, function(){
   LangManager.init(true);
   Laya.stage.addChild(new view.SampleView);
}));
```
#### Async init, when do this, you can init LangManager in any place, but remember call ```init``` method with ```false```(no preloaded 'langFile.csv').

```typescript
Laya.loader.load(["res/atlas/comp.atlas"], Laya.Handler.create(this, function(){
    Laya.stage.addChild(new view.SampleView);
}));
LangManager.init(false);
```

### Step 3

#### Use ```MultiLangText``` in LayaAir IDE UI Editor

In UI editor page, open ```Component``` tab and click ```Custom``` directory, just use ```MultiLangText``` like ```Text```.

<img src="/screenshots/MultiLangText_screen_record_1.0.1.jpg" alt="MultiLangText_screen_record_1.0.1.jpg" title="MultiLangText_screen_record_1.0.1.jpg" width="200" height="70.6" /> <img src="/screenshots/MultiLangText_screen_record_1.0.2.jpg" alt="MultiLangText_screen_record_1.0.2.jpg" title="MultiLangText_screen_record_1.0.2.jpg" width="300" height="137.9" /> <img src="/screenshots/MultiLangText_screen_record_1.0.3.jpg" alt="MultiLangText_screen_record_1.0.3.jpg" title="MultiLangText_screen_record_1.0.3.jpg" width="300" height="133.7" />

#### Use```MultiLangText``` in code

You can create ```MultiLangText``` like ```Text``` dynamically in code.

- Single ```MultiLangText``` usage.

```typescript
let multiLangText: MultiLangText = new MultiLangText();
multiLangText.pos(0, 0);
multiLangText.fontSize = 50;
multiLangText.color = "#ffffff";
multiLangText.multiLang("^BTN_SET", false);
Laya.stage.addChild(multiLangText);
```

- ```MultiLangText``` as ```Laya.Text```'s child usage.

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

- ```LangManager.getInstance().getValue(langKey: string)```, with this method, you can get a value with one key.

```typescript
let layaText1: Laya.Text = new Laya.Text();
layaText1.pos(600, 0);
layaText1.fontSize = 50;
layaText1.color = "#ffffff";
layaText1.text = LangManager.getInstance().getValue("^BTN_MUSIC");
Laya.stage.addChild(layaText1);
```

- ```LangManager.getInstance().switchLang(code: co.lujun.laya.component.LandCode)```, with this method, you can switch language with language code.

** Note: When you add new language translation, remember to add one new enum code in ```co.lujun.laya.component.LandCode```, add this new enum code in ```co.lujun.laya.component.LangManager```'s member ```mLangCodeArr```. In 'langFile.csv' file, add new translation with(```Tab```). **

Enjoy it😄!

## Change logs

### 0.9.0(2018-12-4)

- First release.

## About
If you have any questions, contact me: [lujun.byte#gmail.com](mailto:lujun.byte@gmail.com).

## License

[MIT](LICENSE)