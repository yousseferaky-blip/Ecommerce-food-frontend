import axios from "axios"
import { useState } from "react"
import { BsCloudUpload } from "react-icons/bs"
import { API, CREATE } from "../components/Api"
import { toast } from "react-toastify"

const CreateProduct = () => {
    const [data,setData] = useState({
        name : "",
        category : "",
        avatar : "",
        price : "",
        description : ""
      })

     const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
     } 
     const handleChangeImage = (e)=>{
        setData({...data,[e.target.name]:e.target.files[0]});
     } 

     const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, category, price, description, avatar } = data;
        const formData = new FormData();
        formData.append("name",name)
        formData.append("category",category)
        formData.append("avatar",avatar)
        formData.append("price",price)
        formData.append("description",description)
        try {
           const res = await axios.post(`${API}/${CREATE}`, formData);
           toast.success("Created Successfully");
        } catch (err) {
           if (err.response.status === 400) {
              toast.error("All Fields Required");
           } else {
              console.error(err);
           }
        }
     }  

  return (
    <div className="p-4">
       <form onSubmit={handleSubmit} className='m-auto w-full max-w-md  shadow flex flex-col p-3 bg-white' >
        <label htmlFor='name'>Name</label>
        <input onChange={handleChange} type={"text"}  name="name" className='bg-slate-200 p-1 my-1'  />

        <label htmlFor='category'>Category</label>
        <select onChange={handleChange}  className='bg-slate-200 p-1 my-1' id='category' name='category'  >
          <option value={"other"}>select category</option>
          <option value={"fruits"}>Fruits</option>
          <option value={"vegetable"}>Vegetable</option>
          <option value={"icream"}>Icream</option>
          <option value={"dosa"}>Dosa</option>
          <option value={"pizza"}>Pizza</option>
          <option value={"rice"}>rice</option>
          <option value={"cake"}>Cake</option>
          <option value={"burger"}>Burger</option>
          <option value={"panner"}>Panner</option>
          <option value={"sandwich"}>Sandwich</option>
        </select>

        <label htmlFor='image'>Image
        <div  className='h-40 w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer'>
            <img className="h-full" /> :<span className='text-5xl'><BsCloudUpload/></span> 
           <input onChange={handleChangeImage} name='avatar' type={"file"}  id="image"  className="hidden"/>
        </div>
        </label>
        

        <label htmlFor='price' className='my-1'>Price</label>
        <input onChange={handleChange} type={"text"} className='bg-slate-200 p-1 my-1' name='price' />

        <label htmlFor='description'>Description</label>
        <textarea onChange={handleChange} rows={2}  className='bg-slate-200 p-1 my-1 resize-none' name='description' ></textarea>

        <button className='bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow'>Save</button>
       </form>
    </div>
  )
}

export default CreateProduct