import { useState } from "react"
import { useStates } from "../States";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
    const [formData, setFormData] = useState();
    const {setData,data} = useStates();
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        setData((prev)=>[...prev,formData])
        console.log(data);
        navigate("/view")
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    }
    return (
        <div className="flex justify-center items-center h-screen w-full ">

            <form onSubmit={handleSubmit} className=" mt-20 flex flex-col w-1/2 bg-gray-100 rounded-lg p-4 shadow-sm ">
                <h2 className="text-black font-bold text-lg">Add Blog</h2>

                <div className="mt-4">
                    <label className="text-black" htmlFor="name">Name</label>
                    <input onChange={handleChange} name="name" placeholder="Your name" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
                </div>

                <div className="mt-4">
                    <label className="text-black" htmlFor="name">Title</label>
                    <input onChange={handleChange} name="title" placeholder="Title" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
                </div>

                <div className="mt-4">
                    <label className="text-black" htmlFor="address">Blog</label>
                    <textarea onChange={handleChange} name="blog" placeholder="Your Blog..." className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="blog"></textarea>
                </div>
                <div className="mt-4">
                    <label className="text-black" htmlFor="address">Address</label>
                    <textarea onChange={handleChange} name="address" placeholder="Your address" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="address"></textarea>
                </div>

                <div className="mt-4 flex flex-row space-x-2">
                    <div className="flex-1">
                        <label className="text-black" htmlFor="city">City</label>
                        <input onChange={handleChange} name="city" placeholder="Your city" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="city" type="text" />
                    </div>

                    <div className="flex-1">
                        <label className="text-black" htmlFor="state">State</label>
                        <input onChange={handleChange} name="state" placeholder="Your state" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="state" type="text" />
                    </div>
                </div>

                <div className="mt-4 flex flex-row space-x-2">
                    <div className="flex-1">
                        <label className="text-black" htmlFor="zip">ZIP</label>
                        <input onChange={handleChange} name="zip" placeholder="Your ZIP code" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="zip" type="text" />
                    </div>

                    <div className="flex-1">
                        <label className="text-black" htmlFor="country">Country</label>
                        <select onChange={handleChange} name="country" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="country">
                            <option value="">Select a country</option>
                            <optgroup label="India">
                                <option value="TAMIL NADU">TamilNadu</option>
                                <option value="KERALA">Kerala</option>
                                <option value="DELHI">Delhi</option>
                                ...
                                <option value="MUMBAI">Mumbai</option>
                            </optgroup>
                            <optgroup label="Africa">
                                <option value="AF">Afghanistan</option>
                                <option value="DZ">Algeria</option>
                                <option value="AO">Angola</option>
                                ...
                                <option value="ZW">Zimbabwe</option>
                            </optgroup>

                            <optgroup label="Asia">
                                <option value="AM">Armenia</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BH">Bahrain</option>
                                ...
                                <option value="YE">Yemen</option>
                            </optgroup>

                            <optgroup label="South America">
                                <option value="AR">Argentina</option>
                                <option value="BO">Bolivia</option>
                                <option value="BR">Brazil</option>
                                ...
                                <option value="VE">Venezuela</option>
                            </optgroup>

                            ...
                        </select>
                    </div>
                </div>

                <div className="mt-4 flex justify-end">
                    <button className="bg-white text-black rounded-md px-4 py-1 hover:bg-gray-200 hover:text-gray-900" type="submit">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default AddBlog