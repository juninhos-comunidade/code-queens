'use client'
import { useParams } from "next/navigation";

const Assessment = () => {
    const {id} = useParams()
    return(
        <h1>Teste em si - {id}</h1>
    )
}
export default Assessment;