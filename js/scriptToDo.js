// var completedcount,notcompletedcount;
let completedcount=0,notcompletedcount=0;

let jsonlength=0;
function FetchData()//to take data from http:json
{
        let request=new XMLHttpRequest();
        request.open("GET",'https://jsonplaceholder.typicode.com/todos',true)
   
   request.onreadystatechange=function(){
   if(this.readyState==4 &&  this.status==200){
        let data=JSON.parse(this.responseText);
         jsonlength=data.length;
        console.log('jsonlength'+jsonlength);
   
       makeData(data);
    }
   }
request.send()
}


//-----------------------------------------------------------------------------
let ccount=0;//from data complted true tasks
var todocheck=[];

function makeData(data){
    // var table = document.createElement("table");
     // table.setAttribute('id', 'TodoTable');
  
    var table=document.getElementById('todotable');
        var tr = document.createElement("tr");
        var thUserId = document.createElement("th");
        var thId= document.createElement("th");
        var thTitle= document.createElement("th");
        var thCompleted = document.createElement("th");     
       
        thUserId.innerText = "userId";
        thId.innerText = "id";
        thTitle.innerText = "title";
        thCompleted.innerText = "completed";

        tr.appendChild(thUserId);
        tr.appendChild(thId);
        tr.appendChild(thTitle);
        tr.appendChild(thCompleted);

        for(var i=0; i<data.length; i++) {
            var userId = data[i].userId; 
            var id = data[i].id;
            var title = data[i].title;
            var completed = data[i].completed;
          

            var tr = document.createElement("tr");
            var tdUserId = document.createElement("td");
            tdUserId.innerText = userId;
            var tdId = document.createElement("td");
            tdId.innerText = id;
            var tdTitle = document.createElement("td");
            tdTitle.innerText = title;
            var tdCompleted = document.createElement("input");
            tdCompleted.type = "checkbox";
            if(completed==true){
                tdCompleted.checked=true;
                tdCompleted.disabled = true;
                completedcount++;
               // console.log('completedcount:'+completedcount);
                ccount=completedcount;
                //console.log('ccount:'+ccount);
              }
            else{
                tdCompleted.checked=false;
                tdCompleted.disabled = false;
                //notcompletedcount++;
                //console.log(notcompletedcount);
                }
            tdCompleted.innerText = completed;
            todocheck[i]=tdCompleted;
           
          
            tr.appendChild(tdId);
            tr.appendChild(tdTitle);
            tr.appendChild(tdCompleted);
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    }      

FetchData();

//-------------------------------------------------------
   
function ToCheck5Task(){

    let clickedcompletedcount=0;//count of new clicked tasks
    let promise=new Promise((resolve,reject)=>{

        for(var i=0; i<jsonlength; i++) {
            if(todocheck[i].checked==true)
            {
                clickedcompletedcount=clickedcompletedcount+1;
            }
            // else
            // {
            //     notcompletedcount++;
            //     //console.log(notcompletedcount);
            // }
        }
       
        if(clickedcompletedcount-ccount==5)
            resolve("ok");
        else
            reject("rejected");
    })
    promise.then(function(){
        alert("Congrats!! 5 Tasks have been Successfully Completed ");
        document.getElementById('text').innerHTML="   5 tasks selected...!!!";
        
        })
        .catch((err)=>{
            console.log(err);
           
        });
        
}
//---------------------------------------------------------------------------------------------------
// //button click working
// document.getElementById('select').onclick = function() {
//     var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
//     alert(checkboxes.length);
//     //alert(document.querySelectorAll('input[type="checkbox"]:checked').length);
// }



