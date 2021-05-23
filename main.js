var array10 = [];
var length;
var empty_array= [];
function submit(){
for(var i=1; i<=3; i++){
   var name= document.getElementById("name_of_the_guest"+i).value;
   array10.push(name);
}
console.log(array10);
length=array10.length;
for(var j=0;j<length;j++){
empty_array.push("name-"+array10[j]);
console.log(empty_array);
}
document.getElementById("Guestswithcomma").innerHTML=empty_array;
var with_commas= empty_array.join(" ");
console.log(with_commas);
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    var sorted_array = [];
    array10.sort();
    var length1 =array10.length;
    for(var k=0; k<length1; k++){
        sorted_array.push("name-"+array10[k]);
    }
    document.getElementById("Guestswithcomma").innerHTML=sorted_array;
var without_commas= sorted_array.join(" ");
console.log(without_commas);
}
