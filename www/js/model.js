var app = function(app) {      
    app.screen = function() {
           
        const m = {};    
       
        if(localStorage && localStorage.exampleData){
            m.data  =JSON.parse(localStorage.exampleData);
        }
        else{
            m.data = [0,0];
        }

        m.updateData = function(){
            localStorage.exampleData = JSON.stringify(m.data);
        }

        // m.title = "Mobile App Model";
        return m;
    }
    return app;
}(app||{}); 
