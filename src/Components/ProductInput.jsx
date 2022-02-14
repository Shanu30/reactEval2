

import { useState,useRef} from "react"
import styled from "styled-components";
import {v4 as uuid} from "uuid";

export default function ProductInput({onTaskCreate}) {

    const [formData, setFormData] = useState({
        title: "",
        cost: 0,
        category: "",
        image: null
    })

    const handleChange = (e) => {
        let { name,value } = e.target;

        
        setFormData({
            ...formData,
            [name]: value
            
        });
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        onTaskCreate &&  onTaskCreate(formData);
        setFormData("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title : </label>
                    <input type="text"
                        placeholder="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Cost : </label>
                    <input type="number"
                        placeholder="Cost"
                        name="cost"
                        value={formData.cost}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Image : </label>
                    <input type="text"
                        placeholder="Image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Category : </label>
                    <input type="text"
                        placeholder="Category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </div>
                
                <div>
                    <input type="submit" value="SUBMIT" />
                </div>
            </form>
        </div>
    )
}