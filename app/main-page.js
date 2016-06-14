"use strict";
var main_view_model_1 = require("./main-view-model");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel();
}
exports.navigatingTo = navigatingTo;
function load(args) {
    var page = args.object;
    //console.log(page.ios.viewDidLoad);
    //page.ios.viewDidLoad = function(){
    // page.ios.setNeedsStatusBarAppearanceUpdate();
    //}
    //console.log(page.ios.viewDidLoad);
    // console.log(page.ios.setNeedsStatusBarAppearanceUpdate());
    // page.ios.preferredStatusBarStyle = function():UIStatusBarStyle{
    //console.log("test");
    //     return UIStatusBarStyle.UIStatusBarStyleLightContent;
    // }
    // console.log(page.ios.preferredStatusBarStyle);
}
exports.load = load;
//# sourceMappingURL=main-page.js.map