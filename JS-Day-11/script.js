// function handelclick() {
//     document.querySelector("h1").style.color = "Blue"
//     document.getElementById("btn").textContent = "Colour Changed"
// }


const handelclick = ()=>{
    const image = document.createElement("img")
    image.setAttribute("src","https://images.unsplash.com/photo-1762245832997-d214d359c0d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8")

    image.setAttribute("alt","Building")
    document.getElementById("Heading").append(image);
}