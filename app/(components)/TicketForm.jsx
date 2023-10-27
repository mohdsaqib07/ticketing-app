// The useRouter hook should be imported from next/navigation and not next/router when using the App Router
"use client";
import { useRouter } from 'next/navigation'
import React,{useState} from 'react'

const TicketForm = () => {
  const router = useRouter();
  const startingTicketData = {
    title:"",
    description:"",
    category:"Hardware Problem",
    priority:1,
    progress:0,
    status:"not started",
  }
  const [formData, setFormData] = useState(startingTicketData)
  const handleChange=(e)=>{
  setFormData({
    ...formData,[e.target.name]:e.target.value
  })
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/Tickets',{
      method:"POST",
      "content-type":"application/json",
      body:JSON.stringify({formData})
    })
    if(!response.ok){
      throw new Error("Failed to create the ticket")
    }
    // const ticketStatus = await response.json();
    router.push("/")
    router.refresh();
  }
  return (
    <div className='flex justify-center'> 
      <form className='flex flex-col gap-3 w-1/3 box-border' method='post' onSubmit={handleSubmit}>
        <h3>Create Your Ticket</h3>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required={true} />
        <label htmlFor="description">Description</label>
        <textarea rows={5} name="description" id="description" value={formData.description} onChange={handleChange} required={true} />
        <label htmlFor="category">Category</label>
        <select name="category" id="category" onChange={handleChange} value={formData.category}>
           <option value="Hardware Problem">Hardware Problem</option>
           <option value="Software Problem">Software Problem</option>
           <option value="Project">Project</option>
        </select>
       <label htmlFor='priority'>Priority</label>
       <div>
        <input type='radio' id='priority-1' name='priority' onChange={handleChange} value={1} checked={formData.priority == 1} />
        <label htmlFor='priority-1'>1</label>
        <input type='radio' id='priority-2' name='priority' onChange={handleChange} value={2} checked={formData.priority == 2} />
        <label htmlFor='priority-2'>2</label>
        <input type='radio' id='priority-3' name='priority' onChange={handleChange} value={3} checked={formData.priority == 3} />
        <label htmlFor='priority-3'>3</label>
        <input type='radio' id='priority-4' name='priority' onChange={handleChange} value={4} checked={formData.priority == 4} />
        <label htmlFor='priority-4'>4</label>
        <input type='radio' id='priority-5' name='priority' onChange={handleChange} value={5} checked={formData.priority == 5} />
        <label htmlFor='priority-5'>5</label>
       </div>
       <label htmlFor="progress">Progress</label>
       <input type='range' name='progress' id='progress' value={formData.progress} onChange={handleChange} min="0" max="100" /> 
       <label htmlFor="status">Status</label>
       <select name="status" id="status" value={formData.status} onChange={handleChange}>
        <option value="Not Started">Not Started</option>
        <option value="Started">Started</option>
        <option value="Done">Done</option>
       </select>
       <button type="submit" className='btn text-white font-black transition-colors duration-200'>Create Ticket</button>
      </form>
    </div>
  )
}

export default TicketForm
