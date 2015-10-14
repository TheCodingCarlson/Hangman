/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "Hangman2": {
        "strokepath": [
           
            {
                "path": "M492.9,132.9c5.2,19.3,8,39.2,8,59.2c0,5.9,9.3,5.9,9.3,0c0-21-2.8-41.4-8.4-61.6C500.3,124.8,491.2,127.2,492.9,132.9    L492.9,132.9z",
                "duration": 600
            },
            {
                "path": "M500.7,191c-11.1,12.1-21.9,24.3-32.3,37.1c-3.7,4.6,2.8,11.1,6.5,6.5c10.4-12.6,21.2-25.1,32.3-37.1    C511.3,193.1,504.8,186.6,500.7,191L500.7,191z",
                "duration": 600
            },
            {
                "path": "M503.8,194.2c12.6,9.5,24.3,20,34.9,31.7c4.1,4.5,10.6-2.2,6.5-6.5c-11.3-12.3-23.6-23.2-36.8-33.2    C503.6,182.7,499,190.7,503.8,194.2L503.8,194.2z",
                "duration": 600
            },
            {
                "path": "M495.5,152.1c-11,0-21.9,0-32.9,0c-5.9,0-5.9,9.3,0,9.3c11,0,21.9,0,32.9,0C501.4,161.3,501.4,152.1,495.5,152.1    L495.5,152.1z",
                "duration": 600
            },
            {
                "path": "M500.5,162.6c15,2.8,30.1,3.3,45.3,1.3c5.8-0.7,5.9-10,0-9.3c-14.3,1.9-28.6,1.7-42.9-1.1    C497.1,152.6,494.7,161.5,500.5,162.6L500.5,162.6z",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 575,
            "height": 400
        }
    }
}; 
 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
 $(document).ready(function(){ 
 $('#undefined').lazylinepainter( 
 {
    "svgData": pathObj,
    "strokeWidth": 2,
    "strokeColor": "#e09b99"
}).lazylinepainter('paint'); 
 });