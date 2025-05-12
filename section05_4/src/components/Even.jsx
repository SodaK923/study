import { useEffect } from "react";

const Even=()=>{
    useEffect(()=>{
        return(()=>{
            console.log("언마운트");
        });
    }, []);

    return(
        <div>
            <h3>짝수입니다</h3>
        </div>
    );
}

export default Even;