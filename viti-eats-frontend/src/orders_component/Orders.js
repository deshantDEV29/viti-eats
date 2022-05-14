import React from 'react'
import Restaurant from '../home_component/Restaurant'

function Orders() {

  // const [data,setData]=useState([]);

  // useEffect(() => {
  //     async function fetchdata(){
  //       let result = await fetch("http://localhost:8000/api/displayrestaurant");
  //       result = await result.json();
  //       setData(result)
  //       console.log(result)
  //       console.log('test',data)
  //     }
  //     fetchdata();
  //   },[])

  //   const DisplayData=data.map(
  //       (restaurant)=>{
  //           return(
  //               // <Restaurant restaurant_name={restaurant.name} image={restaurant.image}/>
  //               <img src = {require(restaurant.image)} alt=''/>
  //               // console.log(restaurant.image)
  //               <img src="" alt="" />
  //           )
  //       }
  //   )

  let base64String = "";

  function imageUploaded() {
    var file = document.querySelector(
        'input[type=file]')['files'][0];
  
    var reader = new FileReader();
    console.log("next");
      
    reader.onload = function () {
        base64String = reader.result.replace("data:", "")
            .replace(/^.+,/, "");
  
        //imageBase64Stringsep = base64String;
  
        // alert(imageBase64Stringsep);
        console.log(base64String);
    }
    reader.readAsDataURL(file);
}
  
function displayString() {
    console.log("Base64String about to be printed");
    alert(base64String);
    console.log(base64String);
}


  return (
    <div>
      <input type="file" name="" id="fileId" 
          onChange={imageUploaded}/>
      <br></br>
    
      <button onClick={displayString}>
          Display String
      </button>
      <img src='data:image/png;base64,' alt=''/>
    </div>
  )
}

export default Orders