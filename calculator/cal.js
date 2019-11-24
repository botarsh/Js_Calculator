// script for input section 
function insert(num){
    document.form.textview.value =document.form.textview.value+num;
}
// script for equal button
function equal(){
    var exp=document.form.textview.value;
    if(exp){
        document.form.textview.value=eval(exp);
    }
}
// script for clear button
function clean(){
    document.form.textview.value="";
}
// script for back button
function back(){
    var exp=document.form.textview.value;
    document.form.textview.value=exp.substring(0,exp.length-1);
    
}
