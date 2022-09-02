function table(number){
    document.write(`${"Table of"}  ${number}<br>`);
    for(let i=1; i<= 10;i++) {
       // document.write()
       setTimeout(function () {
       var result = i*number
       
       document.write(`${number} x ${i} = ${result}<br>`); 
    },1000*i)
    }
}
