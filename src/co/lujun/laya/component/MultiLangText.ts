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

import DisplayText = laya.display.Text;

module co.lujun.laya.component{

	export class MultiLangText extends DisplayText{

		langKey: string = "";
		translateParent: boolean = false;

		constructor(){
			super();
			Laya.timer.callLater(this, this.transLang);
		}

		private transLang(){
			if(this.translateParent){
				let p: Laya.Text = this.parent as Laya.Text;
				if(p.text != null && p.text != undefined){
					LangManager.getInstance().pushMultiLangText(p, this.langKey);
					p.text = LangManager.getInstance().getValue(this.langKey);
				}
			}else{
				LangManager.getInstance().pushMultiLangText(this, this.langKey);
				this.text = LangManager.getInstance().getValue(this.langKey);
			}
		}

		public multiLang(langKey: string, translateParent: boolean = false){
			if(translateParent && (this.parent == undefined || this.parent == null)){
				throw "The parent node can not be found!";
			}
			this.langKey = langKey;
			this.translateParent = translateParent;
			this.transLang();
		}
	}
}