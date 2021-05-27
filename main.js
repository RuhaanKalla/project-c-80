name_of_people_array = [];

function submit(){
   var display_people_array= [];

    var guest_name = document.getElementById("guestnames").value;
    console.log(guest_name);
    name_of_people_array.push(guest_name);
    length_of_name_of_the_people_array = name_of_people_array.length;
    for(var i=0;i<length_of_name_of_the_people_array;i++){
    display_people_array.push(name_of_people_array[i]);
    console.log(display_people_array);
    document.getElementById("names").innerHTML = display_people_array;
    
    }
}
function show(){
    var array_value=[];
   for (j = 0;j < length_of_name_of_the_people_array; j++){

        array_value = array_value + name_of_people_array[j] + "<br>";
                document.getElementById("names_without_comma").innerHTML = array_value; 
    }
   
        
        }
  function sortedlist(){
  name_of_people_array.sort();
  var sorted_array = [];
  for(k=0;k<length_of_name_of_the_people_array;k++){
      sorted_array.push( "<h4>Name -" + name_of_people_array[k] + "</h4>" + "<br>")
       }
  console.log(sorted_array);
 var removed_comma_sorted = sorted_array.join("");
  console.log(removed_comma_sorted);
   document.getElementById("names_without_comma_sorted").innerHTML = removed_comma_sorted;
        }

 function search(){
  var search = document.getElementById("searchname").value;
    var found = 0;
    var l;
  for (l=0; l<length_of_name_of_the_people_array; l++){
   if(search==name_of_people_array[l]){
 found = found+1;  
     }
                
            }
  document.getElementById("search_times").innerHTML = "Found Name " + found + " time/times";
       console.log("found name" + found + "time");
            
        }
    