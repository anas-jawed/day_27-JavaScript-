// let url  = `https://catfact.ninja/fact`;
// let url1 = `https://dog.ceo/api/breeds/image/random`;


// // async function getFacts(params) {
// //     try {
        
// //         let res = await fetch(url);
// //         let data = await res.json();
// //         console.log("data", data.fact);  
// //         let res1 = await fetch(url);
// //         let data1 = await res1.json();
// //         console.log("data", data1.fact);   
// //     }
// //     catch (error) {
// //         console.log(error, "error");
// //         console.log("Erroe agaya hain")
    
// // }
// // }

// // console.log(getFacts())

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//     let link  = await getImage();
//     // console.log(link)
//     let img = document.getElementById("result");
//     img.setAttribute("src", link);
//     console.log(link);
// });

// async function getImage() {
//     try{
//         let res = await axios.get(url1);
//         return res.data.message;
//     }catch(error){
//         console.log("error", error)
//       return "No fact found"
//     }
    
// }

// console.log(getImage());



// const url  = "https://icanhazdadjoke.com/";

// async function getJokes() {
//   const config = {headers: {Accept: "application/json"}};
//    let res = await axios.get(url, config);
//    console.log(res.data);
// }

// console.log(getJokes());


//  Updating Querries string

let url = "https://universities.hipolabs.com/search?name=";

let country = "nepal";

async function getcolleges() {
   try{
      let res = await axios.get(url+country);
      cosole.log(res);
   
   } catch(err){
      console.log(err, "error");
   }
   console.log("ha bhai")
  
}

console.log(getcolleges());