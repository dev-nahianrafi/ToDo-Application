let icons = document.querySelector(".iconn")
let cancleic = document.querySelector(".iconnn")
let inputdiv = document.querySelector(".inputs")


let inputss = document.querySelector(".inputboxx")
let erorshow = document.querySelector(".eror")
let addbtn = document.querySelector(".submit")
let main = document.querySelector(".main")

let storearr = []
let todoIndex

addbtn.addEventListener("click", function(){
    if(inputss.value !== "" && addbtn.innerHTML == "Add"){
        erorshow.innerHTML = ""
        storearr.push(inputss.value)
        inputss.value = ""
        todoo()
    }else if(inputss.value !== "" && addbtn.innerHTML == "Update"){
        storearr[todoIndex] = inputss.value
        addbtn.innerHTML = "Add"
        inputss.value = ""
        todoo()
    }
    else{
        erorshow.innerHTML = "Please Write Something"
    }
})

function todoo(){
    main.innerHTML = ""
    storearr.map((items,index)=>{
        main.innerHTML += `<li>${items} <div class="icontrebtn"><i class="fa-solid fa-pen editpen"></i> <i class="fa-solid fa-trash deletebtn"></i></div> </li>`
    })

    let editbtn = document.querySelectorAll(".editpen")
    let editbtnarr = Array.from(editbtn)
    editbtnarr.map((edititems,editIndex)=>{
        edititems.addEventListener("click", function(){
            addbtn.innerHTML = "Update"
            inputss.value = storearr[editIndex]
            todoIndex = editIndex
        })
    })

    let deleteicon = document.querySelectorAll(".deletebtn")
    let convoarryDB = Array.from(deleteicon)
    convoarryDB.map((deleteitem,deleteindex)=>{
        deleteitem.addEventListener("click", function(){
            storearr.splice(deleteindex, 1)
            todoo()
        })
    })
}


icons.addEventListener("click", function(){
    inputdiv.style.display = "block"
})
cancleic.addEventListener("click", function(){
    inputdiv.style.display = "none"
    erorshow.innerHTML = ""
})