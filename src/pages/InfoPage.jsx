import { useParams } from 'react-router-dom'
import useFetchRestoDetail from "../component/util/customHooks/useFetchRestoDetail"
import useOnlineStatus from '../component/util/customHooks/useOnlineStatus'
function InfoPage() {
    const { id } = useParams()
    const myData = useFetchRestoDetail(id)
    const networkStatus = useOnlineStatus()
    console.log(networkStatus, "networkStatus")
    return networkStatus ?
        <h1>There is some issue in the Network Please Taka a look</h1>
        : (
            <div className='p-4'>
                <h1 className='text-orange-600 text-[40px]'>hello From Menu</h1>
                <div className='p-4 flex flex-wrap'>
                    {myData?.map((ele) => {
                        return (
                            <li className='p-2 m-4 text-lg text-yellow bg-amber-100 w-[40%] rounded-md hover:text-white hover:bg-slate-600 shadow-md'>{ele.card?.info?.name}</li>
                        )
                    })}
                </div>
            </div>

        )
}
export default InfoPage