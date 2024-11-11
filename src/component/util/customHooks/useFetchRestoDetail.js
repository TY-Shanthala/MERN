import { useEffect, useState } from "react";
import { restro_fetch_api } from "../constants";
const useFetchRestoDetail = (restroId) => {
    const [menuData, setMenuData] = useState()
    const fetchFn = async () => {
        // since the API is a constant i am storing it in constant and using as variable
        const data = await fetch(`${restro_fetch_api}${restroId}`)
        const menuFtchData = await data.json();
        console.log(menuFtchData, "fetchedData");
        const myMenuList = menuFtchData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        setMenuData(myMenuList)
    }
    useEffect(() => {
        fetchFn()
    }, [])
    return menuData;
}
export default useFetchRestoDetail;