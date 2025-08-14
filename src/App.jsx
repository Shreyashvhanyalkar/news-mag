import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"
import NewsItem from "./Components/NewsItem"

const App=()=> {
 const [category,setcategory]=useState("general");
  return (
   <div>
    <Navbar setcategory={setcategory}/>
    <NewsBoard category={category}/>
   
   </div>
  )
}

export default App
