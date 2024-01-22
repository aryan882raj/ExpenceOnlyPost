const myfrom = document.getElementById("myform");

myfrom.addEventListener("submit",onsubmit);

async function onsubmit(event){
    try {
        event.preventDefault();
        let myExp = document.getElementById("exp");
        let myDiscription = document.getElementById("dis");
        let myCategory= document.getElementById("cat");

        let obj = {
            exp : myExp.value,
            dis : myDiscription.options[myDiscription.selectedIndex].value,
            cat : myCategory.options[myCategory.selectedIndex].value,
        }

        console.log(obj)
        // DisplayOnScreen(obj)
        // const response=await axios.post("http://localhost:4000/PostData", obj)
        const response = await axios.post("http://localhost:5500/expuser",obj)
        DisplayOnScreen(response.data);

    }catch(err) {

        console.log(err);
    }
    document.getElementById("exp").value = "";
    document.getElementById("dis").value = "";
    document.getElementById("cat").value = "";
}


async function DisplayOnScreen(obj){
    try{
        var Ul_List = document.getElementById("ullist");
        var Li = document.createElement("li");

        Li.innerHTML = "ID : "+obj.id + " , "+"Expence "+obj.exp+" , "+"Discription "+obj.dis+" , "+"Catagory "+obj.cat;
        
        var Deletbtn = document.createElement("button");
        Deletbtn.textContent = "Delete";
        var Editbtn = document.createElement("button");
        Editbtn.textContent = "Edit";


        Deletbtn.onclick = async(eve)=>{
            eve.preventDefault()
            try{
                let DeletValue = await axios.delete(`http://localhost:5500/delete-exp/${obj.id}`)
                console.log(DeletValue);
                let Id = DeletValue.data.deletedOrder.id
                Deletbtn = document.getElementById(Id);
                Deletbtn.remove();
                window.location.reload();
            }catch{
                console.log("Delete Error form js");

            }
            window.location.reload();
        }
        Li.appendChild(Deletbtn);
        Li.appendChild(Editbtn);
        Ul_List.appendChild(Li);
    }catch{
        console.log("Dissplay error");
    }
}
window.addEventListener("DOMContentLoaded", Reloaded)
async function Reloaded(ev) {
    ev.preventDefault();
    try {
        

        let GetData = await axios.get("http://localhost:5500/get-user")
        console.log(GetData.data.product);
        for (var i = 0; i < GetData.data.product.length; i++) {
            DisplayOnScreen(GetData.data.product[i]);
        }

    } catch {
        console.log("Dom Loaded is Failed")

    }

}