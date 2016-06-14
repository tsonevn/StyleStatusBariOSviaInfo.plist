import { EventData } from "data/observable";
import { Page } from "ui/page";
import { HelloWorldModel } from "./main-view-model";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}


export function load(args:EventData){
    var page:Page =<Page>args.object;
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