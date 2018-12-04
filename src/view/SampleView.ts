/*
 * MIT License
 * 
 * Copyright (c) 2018 lujun. https://github.com/whilu
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import LangManager = co.lujun.laya.component.LangManager;
import LangCode = co.lujun.laya.component.LandCode;
import MultiLangText = co.lujun.laya.component.MultiLangText;

module view{
	
	export class SampleView extends ui.SampleViewUI{
		constructor(){
			super();

			this.enBtn.on(Laya.Event.CLICK, this, function(){
				LangManager.getInstance().switchLang(LangCode.EN);
			});
			this.scBtn.on(Laya.Event.CLICK, this, function(){
				LangManager.getInstance().switchLang(LangCode.SC);
			});
			this.tcBtn.on(Laya.Event.CLICK, this, function(){
				LangManager.getInstance().switchLang(LangCode.TC);
			});
			this.jpBtn.on(Laya.Event.CLICK, this, function(){
				LangManager.getInstance().switchLang(LangCode.JP);
			});

			// MultiLangText usage.
			let multiLangText: MultiLangText = new MultiLangText();
			multiLangText.pos(0, 0);
			multiLangText.fontSize = 50;
			multiLangText.color = "#ffffff";
			multiLangText.multiLang("^BTN_SET", false);
			Laya.stage.addChild(multiLangText);

			// MultiLangText as Laya.Text's child usage.
			let layaText: Laya.Text = new Laya.Text();
			let layaTextMultiText: MultiLangText = new MultiLangText();
			layaText.pos(300, 0);
			layaText.fontSize = 50;
			layaText.color = "#ffffff";
			layaText.addChild(layaTextMultiText);
			layaTextMultiText.multiLang("^BTN_SOUND", true);
			Laya.stage.addChild(layaText);

			// LangManager getValue(langKey: string) usage.
			let layaText1: Laya.Text = new Laya.Text();
			layaText1.pos(600, 0);
			layaText1.fontSize = 50;
			layaText1.color = "#ffffff";
			layaText1.text = LangManager.getInstance().getValue("^BTN_MUSIC");
			Laya.stage.addChild(layaText1);
		}
	}
}