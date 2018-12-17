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
var co;
(function (co) {
    var lujun;
    (function (lujun) {
        var laya;
        (function (laya) {
            var component;
            (function (component) {
                var LandCode;
                (function (LandCode) {
                    LandCode[LandCode["EN"] = 1] = "EN";
                    LandCode[LandCode["SC"] = 2] = "SC";
                    LandCode[LandCode["TC"] = 3] = "TC";
                    LandCode[LandCode["JP"] = 4] = "JP";
                })(LandCode = component.LandCode || (component.LandCode = {}));
                /** When you add new language translation, remember to add one new enum code in LandCode，
                and add this new enum code in mLangCodeArr. In 'langFile.csv' file, add new translation with(Tab). **/
                /** 添加新语言，上方枚举添加一个 code，下方的 mLangCodeArr 同样需要添加 code，
                'langFile.csv' 文件同样需要用制表符(Tab 键\t)顺序相同分别写入. **/
                var LangManager = /** @class */ (function () {
                    function LangManager() {
                        this.mLangCodeArr = [LandCode.EN, LandCode.SC, LandCode.TC, LandCode.JP];
                        this.mCurLangCode = LandCode.EN;
                        /**
                         * If you want to parse sync, this will cost some time to show the translation.
                         */
                        this.mParseAsync = false;
                        /**
                         * If you placed your langFile.csv in another place, remember to update the below path.
                         */
                        this.mLangFilePath = "res/langFile.csv";
                        this.mMultiLangTextArr = [];
                        this.mMultiLangKeystArr = [];
                        this.mKeyValue = {};
                        for (var _i = 0, _a = this.mLangCodeArr; _i < _a.length; _i++) {
                            var code = _a[_i];
                            this.mKeyValue[code] = {};
                        }
                    }
                    /**
                     * Init LangManager.
                     * @param preloadLangFile Do you preloaded langFile.csv?
                     * @param langFilePath language file path(.csv)?
                     */
                    LangManager.init = function (preloadLangFile, langFilePath) {
                        if (preloadLangFile === void 0) { preloadLangFile = false; }
                        if (langFilePath === void 0) { langFilePath = "res/langFile.csv"; }
                        var langManager = LangManager.getInstance();
                        langManager.mParseAsync = !preloadLangFile;
                        langManager.mLangFilePath = langFilePath;
                        if (!langManager.mParseAsync) {
                            langManager.parseRes();
                        }
                        else {
                            langManager.loadAsync();
                        }
                    };
                    LangManager.getInstance = function () {
                        if (LangManager.sInstance == null) {
                            LangManager.sInstance = new LangManager();
                        }
                        return LangManager.sInstance;
                    };
                    LangManager.prototype.parseRes = function () {
                        this.mLangFile = Laya.loader.getRes(this.mLangFilePath);
                        this.parse();
                    };
                    LangManager.prototype.parse = function () {
                        if (this.mLangFile == undefined || this.mLangFile == null) {
                            throw "langFile.csv not loaded!";
                        }
                        var rowArr = this.mLangFile.split("\n");
                        for (var i = 1; i < rowArr.length; i++) {
                            var columnArr = rowArr[i].split("\t");
                            if (columnArr != null && columnArr.length > 0) {
                                var key = columnArr[0];
                                for (var j = 1; j < columnArr.length; ++j) {
                                    this.mKeyValue[j][key] = columnArr[j];
                                }
                            }
                        }
                        if (this.mParseAsync) {
                            this.validate();
                        }
                    };
                    LangManager.prototype.loadAsync = function () {
                        Laya.loader.load(this.mLangFilePath, Laya.Handler.create(this, function () {
                            this.parseRes();
                        }));
                    };
                    LangManager.prototype.validate = function () {
                        for (var i = 0; i < this.mMultiLangTextArr.length; ++i) {
                            var multiLangText = this.mMultiLangTextArr[i];
                            var key = this.mMultiLangKeystArr[i];
                            if (multiLangText != null) {
                                multiLangText.text = LangManager.getInstance().getValue(key);
                            }
                        }
                    };
                    /**
                     * Push one Text for cache.
                     * @param text The Text that display world.
                     * @param key The key.
                     */
                    LangManager.prototype.pushMultiLangText = function (text, key) {
                        this.mMultiLangTextArr.push(text);
                        this.mMultiLangKeystArr.push(key);
                    };
                    /**
                     * Get translation with key.
                     * @param key The key.
                     */
                    LangManager.prototype.getValue = function (key) {
                        var value = this.mKeyValue[this.mCurLangCode][key];
                        return value == null || value == undefined ? "no translation for " + key : value;
                    };
                    /**
                     * Switch language.
                     * @param code language code, in co.lujun.laya.component.LandCode
                     */
                    LangManager.prototype.switchLang = function (code) {
                        this.mCurLangCode = code;
                        this.validate();
                    };
                    /**
                     * For __test__
                     */
                    LangManager.prototype.getSoundEnTranslation = function (fileBuffer, key) {
                        this.mLangFile = fileBuffer;
                        this.parse();
                        return this.getValue(key);
                    };
                    return LangManager;
                }());
                component.LangManager = LangManager;
            })(component = laya.component || (laya.component = {}));
        })(laya = lujun.laya || (lujun.laya = {}));
    })(lujun = co.lujun || (co.lujun = {}));
})(co || (co = {}));
//# sourceMappingURL=LangManager.js.map