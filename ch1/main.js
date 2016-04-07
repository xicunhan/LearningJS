/**
 * Created by xicunhan on 07/04/2016.
 */
console.log('main.js is loaded');
$(document).ready(function(){
    'use strict';
    paper.install(window); // install to the global scope
    paper.setup(document.getElementById('mainCanvas')); // attaches paper.js to canvas


    // var c = Shape.Circle(200,200,50);
    // c.fillColor = 'green';



    // var c;
    // for (var x=25;x<400;x+=50){
    //     for (var y=25; y<400; y+=50){
    //         c=Shape.Circle(x,y,20);
    //         c.fillColor='green';
    //     }
    // }
    //paper.view.draw();


    var tool = new Tool();
    var c  = Shape.Circle(200,200,80);
    c.fillColor = 'black';
    var text = new PointText(200,200);
    text.justification="center";
    text.fillColor='white';
    text.fontSize=20;
    text.content = 'hello World;'
    tool.onMouseDown = function(event){
        var c = Shape.Circle(event.point.x,event.point.y, 20);
        c.fillColor='green';
    }

    console.log('main.js is loaded')
});