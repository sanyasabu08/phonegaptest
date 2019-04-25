var app = function(app) {  // module pattern      
    app.makeView = function(m, stage) {
        var stageW = stage.width;
        var stageH = stage.height;
        const v = {}; 
        
        STYLE = {
            type:{
                Tabs:{width:350,spacing:25,currentSelected:false}
            }
        }
        const manager = v.manager = new Manager();
        
        const page1 = v.page1 = new Container(stageW, stageH);        
        
        content = new Container(500, 500).addTo(page1);
        title = new Label("Shapes", 100,null,"deepskyblue").center(content);


        footer = v.page1.tabs = new Tabs({
            tabs:[new Button({
                width:200,
                height:70,
                corner:35,
                backgroundColor:blue,            
                label:"HOME",
                shadowBlur:-1
            }),
            new Button({
                width:200,
                height:70,
                corner:35,
                backgroundColor:green,
                label:"PLAY",
                shadowBlur:-1
            })]
       
        }).addTo(page1);
        
       

        manager.add(new Layout(page1, [
            
            {object:content, backgroundColor:black},
            {object:footer,maxWidth:90, marginTop:5}            
        ], 5, black, true, null, stage));
        
        const page2 = v.page2 = new Container(stageW, stageH);        
     
        content = new Container(500, 900).addTo(page2);
       

        var button1 = new zim.Button({
        width:200, height:60,
        label:"Circle",
        backgroundColor:"aqua",
        }).loc(100,50).addTo(page2);

        button1.on("click", function() {
        pane1.show();
        });

        var one = new Circle(45,"aqua");

        var pane1 = new zim.Pane({
            width:200, height:60,
            label:one,
            modal:false,
            backgroundColor:black,
        });


        var button2 = new zim.Button({
        width:200, height:60,
        label:"Square",
        backgroundColor:"orange",
        }).loc(100,150).addTo(page2);

        button2.on("click", function() {
        pane2.show();
        });

        var two = new Rectangle(100,100,"orange");

        var pane2 = new zim.Pane({
            width:200, height:60,
            label:two,
            modal:false,
            backgroundColor:black,
        });


        var button3 = new zim.Button({
        width:200, height:60,
        label:"Triangle",
        backgroundColor:"magenta",
        }).loc(100,250).addTo(page2);

        button3.on("click", function() {
        pane3.show();
        });

        var three = new Triangle(150,150,150,"magenta");

        var pane3 = new zim.Pane({
            width:200, height:60,
            label:three,
            modal:false,
            backgroundColor:black,
        });




        footer = v.page2.tabs =v.page1.tabs.clone().addTo(page2);
        manager.add(new Layout(page2, [
            {object:content, backgroundColor:black},
            {object:footer,maxWidth:90,}            
        ], 5, black, true, null, stage));
        
        manager.add(v.pages = new Pages([
            {page:page1, swipe:[null, null, page2, page2]},
            {page:page2, swipe:[null, null, page1, page1]}
        ], "slide", 500).addTo());
        
        return v;
        
    }
    return app; // module pattern
}(app||{}); // module pattern






