'use client'
import { Button, Limit, RadioButton } from "@/components";
import { useParams } from "next/navigation";
import styles from './assessment.module.scss'
import { dataTest } from './teste'
import { useState } from "react";

const Assessment = () => {
    const { id } = useParams()
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
   
    return (
        <>
            <Limit>
                <div className={styles.question_container}>
                    {
                        dataTest.map((test, index) =>
                            index === currentQuestion &&
                            <div key={test.id_question}>

                                <p className={styles.question_title}>{index+1}. {test.question_description}
                                </p>
                                <div className={styles.alternatives_container}>

                                    {
                                        <RadioButton
                                            valueKey='id_alternative'
                                            labelKey='alternative_description'
                                            optionGroup={test.options}
                                        />
                                    }
                                </div>

                            </div>
                        )
                    }
                    <div className={styles.button_container}>
                        <Button text={currentQuestion === 0 ? 'Cancelar' : 'Voltar'} variant="ghost"  onClick={() => currentQuestion && setCurrentQuestion((prev) => prev - 1)} />
                        <Button text="Avançar" onClick={() => currentQuestion+1 !== dataTest.length  && setCurrentQuestion((prev) => prev + 1)} />
                    </div>
                </div>
            </Limit>
            <br />

        </>
    )
}
export default Assessment;