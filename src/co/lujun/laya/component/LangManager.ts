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

module co.lujun.laya.component{
	
	export enum LandCode{
		EN = 1,
		SC = 2,
		TC = 3,
		JP = 4
	}
	/** 添加新语言，上方枚举添加一个 code，下方的 mLangCodeArr 同样需要添加 code，langFile.csv 文件同样需要用制表符(Tab 键\t)顺序相同分别写入 **/
	export class LangManager{

		private mLangCodeArr: Array<LandCode> = [LandCode.EN, LandCode.SC, LandCode.TC, LandCode.JP];

		private static sInstance: LangManager;

		private mKeyValue: {[langCode: number]: {[key: string]: string}};

		private mMultiLangTextArr: Array<Laya.Text>;
		private mMultiLangKeystArr: Array<string>;

		private mCurLangCode: LandCode;
		private mLangFile: string;

		/**
		 * If you want to parse sync, this will cost some time to show the translation.
		 */
		private mParseAsync: boolean = false;

		/**
		 * If you placed your langFile.csv in another place, remember to update the below path.
		 */
		private mLangFilePath: string = "res/langFile.csv";

		constructor(){
			this.mCurLangCode = LandCode.SC;
			this.mMultiLangTextArr = [];
			this.mMultiLangKeystArr = [];
			this.mKeyValue = {};
			for(let code of this.mLangCodeArr){
				this.mKeyValue[code] = {};
			}
		}

		/**
		 * Init LangManager.
		 * @param preloadLangFile Do you preloaded langFile.csv?
		 */
		public static init(preloadLangFile: boolean = false){
			let langManager: LangManager = LangManager.getInstance();
			langManager.mParseAsync = !preloadLangFile;

			if(!langManager.mParseAsync){
				langManager.parse();
			}else{
				langManager.loadAsync();
			}
		}

		public static getInstance(): LangManager{
			if(LangManager.sInstance == null){
				LangManager.sInstance = new LangManager();
			}
			return LangManager.sInstance;
		}

		private parse(){
			this.mLangFile = Laya.loader.getRes(this.mLangFilePath);

			if(this.mLangFile == undefined || this.mLangFile == null){
				throw "langFile.csv not loaded!";
			}

			let rowArr: Array<string> = this.mLangFile.split("\n");
			for(let i = 1; i < rowArr.length; i++){
				let columnArr: Array<string> = rowArr[i].split("\t");
				if(columnArr != null && columnArr.length > 0){
					let key: string = columnArr[0];
					for(let j = 1; j < columnArr.length; ++j){
						this.mKeyValue[j][key] = columnArr[j];
					}
				}
			}

			if(this.mParseAsync){
				this.validate();
			}
		}

		private loadAsync(){
			Laya.loader.load(this.mLangFilePath, Laya.Handler.create(this, this.parse));
		}

		private validate(){
			for(let i = 0; i < this.mMultiLangTextArr.length; ++i){
				let multiLangText: Laya.Text = this.mMultiLangTextArr[i];
				let key: string = this.mMultiLangKeystArr[i];
				if(multiLangText != null){
					multiLangText.text = LangManager.getInstance().getValue(key);
				}
			}
		}

		/**
		 * Push one Text for cache.
		 * @param text The Text that display world.
		 * @param key The key.
		 */
		public pushMultiLangText(text: Laya.Text, key: string){
			this.mMultiLangTextArr.push(text);
			this.mMultiLangKeystArr.push(key);
		}

		/**
		 * Get translation with key.
		 * @param key The key.
		 */
		public getValue(key: string): string{
			let value: string = this.mKeyValue[this.mCurLangCode][key];
			return value == null || value == undefined ? "no translation for " + key : value;
		}

		/**
		 * Switch language.
		 * @param code language code, in co.lujun.laya.component.LandCode
		 */
		public switchLang(code: LandCode){
			this.mCurLangCode = code;
			this.validate();
		}
	}
}