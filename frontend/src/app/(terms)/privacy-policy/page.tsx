'use client'
import { useState, useEffect } from "react";
import { getPrivacyPolicy } from "@/api/endpoints";
import { Term } from "@/types";
import { Limit } from "@/components";

const PoliticaPrivacidade = () => {
    const [useTerm, setUseTerm] = useState<Term>()

    useEffect(() => {
        getPrivacyPolicy()
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
                    dangerouslySetInnerHTML={{ __html: useTerm && useTerm?.term_description }}>
                </div>
            }
        </Limit>
    )
}
export default PoliticaPrivacidade;