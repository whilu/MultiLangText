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

import WebGL = Laya.WebGL;

class GameMain{
    constructor()
    {
        Laya.init(750, 1334, WebGL);

        // PreLoad 'langfile.csv', if do this, make sure init LangManager when you complete loaded the 'langFile.csv'.
        // Laya.loader.load(["res/atlas/comp.atlas", "res/langFile.csv"], Laya.Handler.create(this, function(){
        //     LangManager.init(true);
        //     Laya.stage.addChild(new view.SampleView);
        // }));
        
        // Not preLoad 'langfile.csv', you can init LangManager in any place, but remember init with 'false'(not preloaded 'langFile.csv').
        Laya.loader.load(["res/atlas/comp.atlas"], Laya.Handler.create(this, function(){
            Laya.stage.addChild(new view.SampleView);
        }));
        LangManager.init(false);
    }
}
new GameMain();