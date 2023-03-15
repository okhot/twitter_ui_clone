import { click } from "@testing-library/user-event/dist/click";
import { useEffect, useState } from "react";

export function useLike () {

    const [like, setLike] = useState(0)

    function Like (clicked) {
       if(clicked){
        setLike(like + 1)
       }
       console.log(like)
    }

    return Like
}