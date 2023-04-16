

function addItem(event){
    event.preventDefault();
    let text = document.getElementById("todo-input");
   db.collection("todo-items").add({
    text: text.value ,
    status:"active"
   })
   text.value ="";

}

function getItems(){
    db.collection("todo-items").onSnapshot((snapshot) => {
            
            let items = [];
            snapshot.docs.forEach((doc) => {
                items.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            
            generateItems(items);
    })
}

function generateItems(items){

    let itemsHTML= "";
    items.forEach((item) => {
        
        itemsHTML += `
        <div class="todo-item">
        <div class="check">

          <div data-id="${item.id}"class="check-mark ${item.status =="completed" ?"checked":""}">
            <img src="./icons8-check-64.png">
         </div>
        </div>
        <div class="todo-text ${item.status =="completed" ?"checked":""}">
          ${item.text}
        </div>
 </div>
 `
   
    })

   document.querySelector(".todo-items").innerHTML=itemsHTML;
   createEventListeners();
}

function createEventListeners (){
    let todoCheckMarks=document.querySelectorAll("todo-item .check-mark");
   todoCheckMarks.forEach((checkMark)=> {
    checkMark.addEventListener("click", function(){
        markCompleted(checkMark.dateset.id);
    
   })


   })
}

function markCompleted(id){
    let item = doc.collection( "todo-items" ).doc(id)
    //db dene doc yerine 
    item.get().then(function(doc){
        if (doc.exists){
                let statusa=doc.data().status;
                if(statusa=="active"){
                    item.update({status:"completed"})
        }
            else if (statusa=="complete"){
                item.update({status:"active"
        
    })
}

}
    })
}
getItems();
