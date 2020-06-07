function drawKyle(x, y){
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');  
    x = x + 26;
    y = y - 34;
    //   ноги
    context.beginPath();
    context.strokeStyle = '#21847d';
    context.fillStyle = '#21847d';
    context.rect(x + 38, y + 315, 135, 33);
    context.stroke();
    context.fill();
    
    context.beginPath();
    context.strokeStyle = '#454147';
    context.fillStyle = '#454147';
    context.ellipse(x + 143, y + 348, 43, 4, 3 * Math.PI / 360, 0, Math.PI);
    context.stroke();
    context.fill();
    
    context.beginPath();
    context.ellipse(x + 74, y + 348, 43, 4, -3 * Math.PI / 360, 0, Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.ellipse(x + 108, y + 350, 79, 6, 0, Math.PI, 0);
    context.stroke();
    context.fill();

    //   тело
    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#ff6018';
    context.fillStyle = '#ff6018';
    context.bezierCurveTo(x + 4, y + 301, x + 11, y + 264, x + 38, y + 226); // /
    context.bezierCurveTo(x + 185, y + 170, x + 194, y + 266, x + 200, y + 301); // \
    context.bezierCurveTo(x + 199, y + 301, x + 189, y + 301, x + 181, y + 322);
    context.bezierCurveTo(x + 181, y + 322, x + 114, y + 340, x + 31, y + 320); // _
    context.bezierCurveTo(x + 31, y + 320, x + 39, y + 289, x + 10, y + 301);
    context.stroke();
    context.fill();

    //  застежка
    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#6a3523';
    context.moveTo(x + 108, y + 260);
    context.lineTo(x + 107, y + 331);
    context.stroke();

    //   карманы
    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#6a3523';
    context.rect(x + 59, y + 274, 28, 32);
    context.moveTo(x + 59, y + 274);
    context.lineTo(x + 73, y + 290);      
    context.lineTo(x + 87, y + 274);
    context.stroke();
    
    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#6a3523';
    context.rect(x + 124, y + 273, 28, 32);
    context.moveTo(x + 124, y + 273);
    context.lineTo(x + 138, y + 289);      
    context.lineTo(x + 152, y + 273);
    context.stroke();

    // рукава
    context.beginPath();
    context.strokeStyle = '#393035';
    context.lineWidth = 1; 
    context.moveTo(x + 40, y + 272);
    context.lineTo(x + 32, y + 301);      
    context.moveTo(x + 168, y + 273);
    context.lineTo(x + 173, y + 301);
    context.stroke();

    // кулаки
    context.beginPath();
    context.lineWidth = 1; 
    context.strokeStyle = '#4bc53d';
    context.fillStyle = '#4bc53d';
    context.arc(x + 18, y + 306, 17, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
    
    context.beginPath();
    context.arc(x + 187, y + 312, 17, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
    
    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#469243';
    context.arc(x + 175, y + 307, 7, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
    
    context.beginPath();
    context.arc(x + 31, y + 302, 7, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
    
    // воротник
    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#446839';
    context.fillStyle = '#00ad50';
    context.ellipse(x + 71, y + 243, 40, 10, 49 * Math.PI / 360, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.ellipse(x + 141, y + 244, 37, 11, -49 * Math.PI / 360, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.strokeStyle = '#00ad50';
    context.lineWidth = 8;
    context.moveTo(x + 101, y + 256);
    context.lineTo(x + 117, y + 256);
    context.stroke();

    //   голова
    context.beginPath();     
    context.arc(x + 104, y + 150, 104, 0, 2 * Math.PI);
    context.lineWidth = 3;
    context.strokeStyle = '#ffedc4';
    context.fillStyle = '#ffedc4';
    context.stroke();
    context.fill();

    //   шапка
    context.beginPath();
    context.strokeStyle = '#50c63e';
    context.fillStyle = '#50c63e';       
    context.lineJoin = 'round';
    context.lineWidth = 35;
    context.moveTo(x + 22, y + 52);
    context.lineTo(x + 188, y + 52);
    context.rect(x + 22, y + 52, 168, 45);
    context.stroke();
    context.fill();

    context.beginPath();      
    context.lineJoin = 'miter';
    context.lineWidth = 35;
    context.moveTo(x + 4, y + 102);
    context.lineTo(x + 208, y + 102);
    context.stroke();
    
    context.beginPath();      // 1
    context.lineWidth = 3;
    context.strokeStyle = '#478f41';
    context.ellipse(x, y + 155, 50, 19, -140 * Math.PI / 360, -Math.PI / 5, 0);
    context.stroke();

    context.beginPath();      // 2
    context.ellipse(x + 209, y + 156, 51, 19, -220 * Math.PI / 360, 0, Math.PI / 4.5);
    context.stroke();

    context.beginPath();      // 1
    context.strokeStyle = '#50c63e';
    context.lineWidth = 1;
    context.ellipse(x, y + 155, 50, 19, -140 * Math.PI / 360, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();      // 2
    context.lineWidth = 1;
    context.ellipse(x + 209, y + 156, 51, 19, 140 * Math.PI / 360, 0, 2 * Math.PI);
    context.stroke();
    context.fill();      

    context.beginPath();
    context.strokeStyle = '#00ad51';
    context.fillStyle = '#00ad51';
    context.moveTo(x + 19, y + 129);  
    context.lineTo(x + 19, y + 73);
    context.lineTo(x + 195, y + 73);
    context.lineTo(x + 195, y + 130);
    context.bezierCurveTo(x + 195, y + 130,  x + 107,  y + 110, x + 19, y + 129);
    context.stroke();
    context.fill();

    //   глаза
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = '#b9b1ab'; 
    context.moveTo(x + 106, y + 160);
    context.lineTo(x + 106, y + 145);
    context.stroke();

    context.beginPath(); 
    context.strokeStyle = '#fff';
    context.fillStyle = '#fff'; 
    context.ellipse(x + 77, y + 157, 27, 32, 60 * Math.PI / 360 , 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.ellipse(x + 137, y + 157, 27, 32, -60 * Math.PI / 360 , 0, 2 * Math.PI);
    context.stroke();      
    context.fill();

    context.beginPath(); 
    context.strokeStyle = '#342f33';
    context.fillStyle = '#342f33'; 
    context.arc(x + 87, y + 159, 2, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath(); // 2
    context.arc(x + 121, y + 159, 2, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.lineWidth = 3; 
    context.strokeStyle = '#434347';
    context.moveTo(x + 48, y + 126);
    context.lineTo(x + 76, y + 108);
    context.stroke();

    context.beginPath(); 
    context.moveTo(x + 162, y + 125);
    context.lineTo(x + 134, y + 112);
    context.stroke();

    //   рот
    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#312c30';
    context.bezierCurveTo(x + 78, y + 215, x + 104, y + 213, x + 140, y + 215); // ->
    context.bezierCurveTo(x + 140, y + 215, x + 133, y + 227, x + 110, y + 239); // -/
    context.bezierCurveTo(x + 110, y + 239, x + 78, y + 221, x + 78, y + 215); // \-
    context.stroke();
    context.fill();

    context.beginPath(); 
    context.strokeStyle = '#fff';
    context.fillStyle = '#fff'; 
    context.bezierCurveTo(x + 83, y + 217, x + 110, y + 214, x + 138, y + 216); // ->
    context.bezierCurveTo(x + 138, y + 216, x + 133, y + 228, x + 86, y + 221); // -/
    context.bezierCurveTo(x + 86, y + 221, x + 84, y + 219, x + 83, y + 217); // \-
    context.stroke();
    context.fill();

    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#312c30';
    context.moveTo(x + 96, y + 215); 
    context.lineTo(x + 95, y + 225);
    context.moveTo(x + 110, y + 213); 
    context.lineTo(x + 110, y + 225);
    context.moveTo(x + 127, y + 213); 
    context.lineTo(x + 123, y + 225);
    context.stroke();
}

function drawSten(x, y){     
    x = x - 40;
    y = y - 18;
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
      
    //   ноги
    context.beginPath();
    context.strokeStyle = '#3f77c9';
    context.fillStyle = '#3f77c9';
    context.rect(x + 84, y + 315, 142, 28);
    context.stroke();
    context.fill();
    
    context.beginPath();
    context.strokeStyle = '#363136';
    context.fillStyle = '#363136';
    context.ellipse(x + 191, y + 345, 45, 7, 0, Math.PI, 0);
    context.stroke();
    context.fill();
    
    context.beginPath();
    context.ellipse(x + 120, y + 343, 45, 7, -2 * Math.PI / 360, Math.PI, 0);
    context.stroke();
    context.fill();

    //   тело
    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#d26f60';
    context.fillStyle = '#d26f60';
    context.bezierCurveTo(x + 56, y + 301, x + 57, y + 264, x + 84, y + 226); // /
    context.bezierCurveTo(x + 237, y + 170, x + 235, y + 266, x + 245, y + 301); // \
    context.bezierCurveTo(x + 245, y + 301, x + 235, y + 301, x + 227, y + 315);
    context.bezierCurveTo(x + 227, y + 315, x + 160, y + 335, x + 77, y + 315); // _
    context.bezierCurveTo(x + 77, y + 315, x + 85, y + 289, x + 56, y + 301);
    context.stroke();
    context.fill();
    
    //  застежка
    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#403539';
    context.moveTo(x + 154, y + 264);
    context.lineTo(x + 151, y + 325);
    context.stroke();

    context.beginPath();
    context.lineWidth = 1; 
    context.strokeStyle = '#403539';
    context.fillStyle = '#403539';
    context.arc(x + 144, y + 269, 2, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(x + 144, y + 290, 2, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(x + 143, y + 313, 2, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    // рукава
    context.beginPath();
    context.strokeStyle = '#393035';
    context.lineWidth = 1; 
    context.moveTo(x + 87, y + 268);
    context.lineTo(x + 81, y + 301);      
    context.moveTo(x + 213, y + 268);
    context.lineTo(x + 219, y + 301);
    context.stroke();

    // кулаки
    context.beginPath();
    context.lineWidth = 1; 
    context.strokeStyle = '#ff1f3e';
    context.fillStyle = '#ff1f3e';
    context.arc(x + 70, y + 297, 16, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
    
    context.beginPath();
    context.arc(x + 232, y + 301, 16, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
    
    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#ac4c4d';
    context.arc(x + 219, y + 297, 6, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
    
    context.beginPath();
    context.arc(x + 81, y + 293, 6, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
    
    // воротник
    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#ac4c4d';
    context.fillStyle = '#ff1f3e';
    context.ellipse(x + 119, y + 245, 38, 10, 54 * Math.PI / 360, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.ellipse(x + 187, y + 245, 36, 11, -54 * Math.PI / 360, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    //   голова
    context.beginPath();     
    context.arc(x + 150, y + 150, 100, 0, 2 * Math.PI);
    context.lineWidth = 3;
    context.strokeStyle = '#ffedc4';
    context.fillStyle = '#ffedc4';
    context.stroke();
    context.fill();

    //   шапка
    context.beginPath();     
    context.arc(x + 150, y + 145, 100, Math.PI + Math.PI/30, -Math.PI/20);
    context.bezierCurveTo(x + 250, y + 130, x + 150, y + 90, x + 50, y + 135);
    context.lineWidth = 3;
    context.strokeStyle = '#3c73c5';
    context.fillStyle = '#3c73c5'; 
    context.stroke();
    context.fill();

    //   помпон    
    context.lineCap = 'round';
    context.lineWidth = 6;
    context.strokeStyle = '#ff1f41'; 
    context.beginPath();   
    context.moveTo(x + 139, y + 22); 
    context.lineTo(x + 139, y + 66); 
    context.moveTo(x + 147, y + 23);   
    context.lineTo(x + 134, y + 65);
    context.moveTo(x + 155, y + 27);
    context.lineTo(x + 128, y + 61);
    context.moveTo(x + 160, y + 33);
    context.lineTo(x + 123, y + 55);
    context.moveTo(x + 162, y + 42);
    context.lineTo(x + 120, y + 46);
    context.moveTo(x + 162, y + 50);
    context.lineTo(x + 121, y + 38);
    context.moveTo(x + 155, y + 60);
    context.lineTo(x + 125, y + 30);
    context.moveTo(x + 149, y + 64);
    context.lineTo(x + 131, y + 25);  
    context.stroke();

    //   шапка отворот
    context.beginPath(); 
    context.lineCap = 'butt';
    context.lineWidth = 1;
    context.strokeStyle = '#ff1f41';
    context.fillStyle = '#ff1f41'; 
    context.bezierCurveTo(x + 45, y + 125, x + 150, y + 85, x + 253, y + 118);   // ->     
    context.bezierCurveTo(x + 253, y + 118, x + 253, y + 128, x + 253, y + 138); // -|
    context.bezierCurveTo(x + 253, y + 138, x + 150, y + 107, x + 45, y + 146);  // <-     
    context.bezierCurveTo(x + 45, y + 146, x + 45, y + 135, x + 45, y + 125);    // |-
    context.stroke();
    context.fill();

    //   глаза
    context.beginPath();
    context.strokeStyle = '#b9b1ab'; 
    context.moveTo(x + 150, y + 164);
    context.lineTo(x + 150, y + 150);
    context.stroke();

    context.beginPath(); 
    context.strokeStyle = '#fff';
    context.fillStyle = '#fff'; 
    context.ellipse(x + 122, y + 162, 26, 31, 60 * Math.PI / 360 , 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.ellipse(x + 178, y + 162, 26, 31, -60 * Math.PI / 360 , 0, 2 * Math.PI);
    context.stroke();      
    context.fill();

    context.beginPath(); 
    context.strokeStyle = '#342f33';
    context.fillStyle = '#342f33'; 
    context.arc(x + 131, y + 162, 3, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(x + 165, y + 162, 3, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.lineWidth = 3; 
    context.strokeStyle = '#543d45';
    context.moveTo(x + 83, y + 139);
    context.lineTo(x + 104, y + 117);
    context.stroke();

    context.beginPath();
    context.moveTo(x + 210, y + 133);
    context.lineTo(x + 184, y + 115);
    context.stroke();

    //   рот
    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#312c30';
    context.bezierCurveTo(x + 128, y + 215, x + 150, y + 213, x + 181, y + 214); // ->
    context.bezierCurveTo(x + 181, y + 214, x + 169, y + 227, x + 156, y + 237); // -/
    context.bezierCurveTo(x + 156, y + 237, x + 138, y + 225, x + 128, y + 215); // \-
    context.stroke();
    context.fill();

    context.beginPath(); 
    context.strokeStyle = '#fff';
    context.fillStyle = '#fff'; 
    context.bezierCurveTo(x + 133, y + 217, x + 156, y + 214, x + 179, y + 215); // ->
    context.bezierCurveTo(x + 179, y + 215, x + 179, y + 225, x + 137, y + 221); // -/
    context.bezierCurveTo(x + 137, y + 221, x + 135, y + 219, x + 133, y + 217); // \-
    context.stroke();
    context.fill();

    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#312c30';
    context.moveTo(x + 143, y + 215); 
    context.lineTo(x + 142, y + 225);
    context.moveTo(x + 155, y + 213); 
    context.lineTo(x + 155, y + 225);
    context.moveTo(x + 171, y + 213); 
    context.lineTo(x + 165, y + 225);
    context.stroke();
}