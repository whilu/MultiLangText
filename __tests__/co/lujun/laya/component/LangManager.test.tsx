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

/// <reference path="../../../../../src/co/lujun/laya/component/LangManager.ts" />

import fs = require('fs');
import vm = require('vm');

let langManagerPath = __dirname + "/../../../../../bin/js/co/lujun/laya/component/LangManager.js";
let langFilePath = __dirname + "/../../../../../bin/res/langFile.csv";

let langManagerCode = fs.readFileSync(langManagerPath, {encoding:'utf8'});
let langFile = fs.readFileSync(langFilePath, {encoding:'utf8'});

vm.runInThisContext(langManagerCode);

describe('LangManager', function() {
  it('Get ^BTN_SOUND EN translation ', () => {
      expect(co.lujun.laya.component.LangManager.getInstance().getSoundEnTranslation(langFile, "^BTN_SOUND")).toBe('Sound');
  });
});