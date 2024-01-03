window.addEventListener("load",()=>{
    document.querySelectorAll("#accesos-burguer li").forEach((element)=>{
        element.addEventListener("click",()=>{
            document.querySelector("input[type='checkbox']").checked = false
        })
    })
})