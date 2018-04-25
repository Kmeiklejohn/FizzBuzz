for (var i = 1; i <= 1000; i++) {


    if(i % 2 == 0 && i % 3 == 0){
      
        document.write('<strong><span style="color:red">' + String(i) + ' </strong> </span>');
    }
    else if(i % 2 == 0) {
        document.write("<strong> " + String(i) + " </strong>");

    } else if(i % 3 == 0) {
        document.write('<span style="color:red">' + String(i) + ' </span>');


    } else{
        document.write(i)
    }

}