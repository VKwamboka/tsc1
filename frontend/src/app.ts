const title = document.getElementById("title")! as HTMLInputElement
const desc= document.getElementById("des")! as HTMLInputElement
const date = document.getElementById("date")! as HTMLInputElement
let content = document.getElementById("content1")! as HTMLDivElement
const btn = document.getElementById("create-btn")! as HTMLButtonElement
const incomplete = document.getElementById("incomplete")! as HTMLDivElement
const complete = document.getElementById("complete")! as HTMLDivElement

// let content1 = document.getElementById("content1")! as HTMLDivElement




interface Todo{
    id:number
    Title:string
    Description:string
    Date:string
    Completed:boolean
}

let updating = -1

// toggle btn updating and creating
function checkbtn(){
    if (updating != -1){
        btn.textContent = "update"
    }
    else{
        btn.textContent = "Create Todo"
    }
    
}
btn.addEventListener('click', showorupdate)

// updating function


const Todos:Todo[]=[{
    id:4,
    Title:"todo1",
    Description:"todo1",
    Date:"20/16/2023",
    Completed:false,

}]

function showorupdate(){
    if(updating >= 0){
        console.log("i am " + updating)

        let todo = Todos[updating]
        
        
        const Title= title.value
        const Description= desc.value
        const Date= date.value

        Todos[updating]= {...todo, Title,Date,Description}
        showtodos()
        updating=-1
        checkbtn()

         title.value=''
         desc.value=''
         date.value=''
    }else{
        const Title = title.value
        const Description = desc.value
        const Date = date.value
    
        console.log(Title, Description,Date)
    
        if(Title=="" || Description=="" ||Date==""){
            console.log("error")
    
    
            const p = document.createElement("p")
            p.textContent ="PLease fill in all the fields"
            p.style.color = "red"
            p.id = "error-message"
            content.insertAdjacentElement("afterbegin", p)
    
            setTimeout(() => {
                
                console.log("hello")
                p.style.display="none"
               
            },4000);
    
        }
        else{
            let singleTodo:Todo = {id :Math.random()*100000, Title, Description,Date, Completed:false}
            Todos.push(singleTodo)
            showtodos()
        
            console.log("hello")
        }  
    }
}


// btn.addEventListener("click", ()=>{
   
   
// })

showtodos()

function showtodos(){
    const todos:Todo[]=Todos.filter(a=>a.Completed===false)
    if(todos.length==0){
        incomplete.innerHTML = ""
        const p = document.createElement("p")
        p.textContent='No Todos Add One !!'
        p.style.color='Black'
        p.style.fontSize = "32px"
        incomplete.insertAdjacentElement("afterbegin",p)
        // p.id = "error-message"
    }else{
        incomplete.innerHTML =""
        todos.forEach((a) => {
           
            let html = `
            <div class="todo">
                    <h1>${a.Title}</h1>
                    <p>${a.Description}</p>
                    <p>${a.Date}</p>
                    <div class="btn">
                        <button onclick="populate(${a.id})">Update</button>
                        <button onclick="deleteTodo(${a.id})">delete</button>
                        <button onclick="completeTodo(${a.id})">complete</button>
                    </div>
            </div>`

                incomplete.innerHTML += html
        
        });
    
    }
   
}

function updateTodo(id:number){
    const index = Todos.findIndex(a=>a.id===id)
    let todo =Todos[index]

    // prepolulate
    title.value == todo.Title
    desc.value == todo.Description
    date.value == todo.Date
    // updating == true

}

// populating data
function populate(id:number){
    const index= Todos.findIndex(a=>a.id===id) 
    let todo=Todos[index]

    //popopulate Form
    title.value=todo.Title
    desc.value=todo.Description
    date.value=todo.Date
    // btn.textContent="Update"
    updating=index
    checkbtn()
    console.log(updating);
}

function deleteTodo(id:number){
    const index = Todos.findIndex(a=>a.id===id)
    console.log(index);
    Todos.splice(index,1)  
    showtodos() 
}

// completed todos
function completeTodo(id:number){
    const index= Todos.findIndex(a=>a.id===id) 
    let todo=Todos[index]
    todo.Completed === true
    console.log(todo)
   

    // let todo = Todos.find((todo) => todo.id === id);
    //   todo.Completed = true;

    const todos:Todo[]=Todos.filter(a=>a.Completed===true)
    complete.innerHTML =""
    todos.forEach((a) => {
       
        let html = `
        <div class="todo">
                <h1>${a.Title}</h1>
                <p>${a.Description}</p>
                <p>${a.Date}</p>
                <div class="btn">
                    <button>complete on ${new Date()}</button>
                </div>
        </div>`

            complete.innerHTML += html
    
    });
    showtodos()
}
