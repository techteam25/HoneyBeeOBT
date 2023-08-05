// IMPORTING NES ACTIONS AND EVENT HOOKS FROM REACT
import React, { ChangeEvent, FormEvent, useState } from "react";


export default function Translate(){


  // A FILE LIST CONTAINS LIST OF FILES SUBMITTED BY USER
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  // HANLE CHANGES WHEN FORM FILEDS GET FILLED
  // STORE ALL THE FILES IN AN ARRAY
  const hanldeChange = (event: ChangeEvent<HTMLInputElement>) =>{
    const files = Array.from(event.target.files || [])
    setSelectedFiles(files)
  }


  // HANDLE FILE API SENDING AFTER CLICK SUBMIT BUTTON
  const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {

    // PREVENT DEFAULT REFRESH
    event.preventDefault();

    // Use the selectedFiles state to access the selected file(s)
    console.log(selectedFiles);

    // NEW FORM DATA -> [KEY:VALUE]
    const formData = new FormData()

    // ACESSING EACH FILE AND PROVIDE WITH MUCH CLEANER AND EASIER FORMAT TO MODIFY
    // AND THEN ADDED TO FORMDATA
    selectedFiles.forEach((file:File,index)=>{
      formData.append(`file_${index}`,file)
           
    });

    // DATA FETCHING AND API SENDING
    // try{
    //   const response = await fetch('api_endpoint',{
    //     method : "POST",
    //     body:formData
    //   })
      
    //   if(response.ok){
    //     console.log("Files uploaded sucessfully")
    //   }else{
    //   console.log("Something Wrong with uploading in fetching")
    //   }

    // }
    // catch(error){
    //   console.log("Error",error)
    // }


  };

  
  return(
    <form onSubmit={handleSubmit}>
      <input type="file" multiple onChange={hanldeChange}/>
      <button type="submit">submit</button>
    </form>
  )
}