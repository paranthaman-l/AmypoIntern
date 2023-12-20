import { useStates } from '../States'
const View = () => {
    const { data } = useStates();
    console.log(data);
    return (
        <div className='mt-24'>
            <div className="header_fixed">
                <table>
                    <thead className="header_fixed ">
                        <tr>
                            <th>S No.</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Blog</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Zip</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((d, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{d?.name}</td>
                                    <td>{d?.title}</td>
                                    <td>{d?.blog}</td>
                                    <td>{d?.address}</td>
                                    <td>{d?.city}</td>
                                    <td>{d?.state}</td>
                                    <td>{d?.country}</td>
                                    <td>{d?.zip}</td>
                                    <td className='flex justify-evenly items-center'><button>View</button>
                                        <button>Update</button>
                                        <button>Delete</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default View