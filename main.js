var array10 = [];
var length;
function submit(){
   var name= document.getElementById("name_of_the_guest1").value;
   array10.push(name);
console.log(array10);
length=array10.length;
document.getElementById("Guestswithcomma").innerHTML=array10;
}
function sorting(){
    array10.sort();
    var sorted_array = array10.join("<br>")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    document.getElementById("sorted").innerHTML=sorted_array.toString();
}
function search(){
    var namesearched=document.getElementById("search_the_guest1").value;
    var found=0;
    for(var i=0;i<array10.length;i++){
        if(namesearched==array10[i]){
            found=found+1;
        }
    }
    document.getElementById("found").innerHTML="namefound"+found;
    
}