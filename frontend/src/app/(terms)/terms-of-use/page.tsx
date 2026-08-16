'use client'
import { useState, useEffect } from "react";
import { getUseTerm } from "@/api/endpoints";
import { Term } from "@/types";
import { Limit } from "@/components";

const TermoDeUso = () => {
    const [useTerm, setUseTerm] = useState<Term>()


    useEffect(() => {
        getUseTerm()
            .then(response => {

                setUseTerm(response)
                console.log(useTerm?.term_description)
            }
            )
            .catch((error) => console.error('Tivemos um erro ao recuperar as politicas de privacidade', error))
    }, [])

    return (
        <Limit>
            {
                useTerm &&
                <div className="term_container"
                    dangerouslySetInnerHTML={{ __html: useTerm?.term_description }}>
                </div>
            }
        </Limit>
    )
}
export default TermoDeUso;