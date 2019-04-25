var app = function(app) {  // module pattern      
    app.makeController = function(m, v, stage) {         
        const c = {};     
        
        v.page1.tabs.change(function () {
            if (v.page1.tabs.text == 2) v.pages.go(v.page2, "down");
        });        
        
        // v.dial.on("change", ()=>{ // not chainable
        //     zog(v.dial.currentValue)
        //     m.data[0] = v.dial.currentValue;
        //     m.updateData();
        // })
        
        // v.dial.change(()=>{ // chainable            
        // })      
        
        // v.slider.on("change", ()=>{ // not chainable
        //     m.data[1] = v.slider.currentValue;
        //     m.updateData();
        // })
        
        //can loop using zimjs.mvc.html
        const hs = new HotSpots(
            [
                {
                    page:v.page1,
                    rect:v.page1.tabs.buttons[1],
                    call:()=>{v.pages.go(v.page2,"right");}

                },
                {
                    page:v.page2,
                    rect:v.page2.tabs.buttons[0],
                    call:()=>{v.pages.go(v.page1,"left");}

                }

            ]
        );
        hs.show();

        frame.on("resize", () => {  
            v.manager.resize();
            stage.update();
        });
                
        return c;
    }
    return app; // module pattern
}(app||{}); // module pattern
