import { createContext, useState } from "react";
import { videos } from "../data/videos";

export const WatchLaterContext = createContext();

export function WatchLaterProvider({ children }){
    const [ watchLater,setWatchLater ] = useState([]);

    const addToWatchLater =(video)=>{
        setWatchLater([...watchLater,video]);
    }

    const removeFromWatchList =(video)=>{
        setWatchLater(prev=> prev.filter(({_id})=> _id !== video._id))
    }

    const isVideoInWatchList =(video)=> videos.findIndex(({ _id })=> _id === video._id)
    console.log(watchLater);
    return(
        <WatchLaterContext.Provider value={{
            watchLater,
            setWatchLater,
            addToWatchLater,
            isVideoInWatchList,
            removeFromWatchList
        }}>
            { children }
        </WatchLaterContext.Provider>
    )
}