'use client'

import { Button, Limit, RadioButton } from "@/components";
import { useQuestionnare } from "./useQuestionnaire";

import styles from './questionnaire.module.scss'


export const Questionnaire = () => {

    const {
        isLoading,
        dataTest,
        backButtonText,
        nextButtonText,
        nextButtonDisabled,
        handleAnswer,
        currentAnswer,
        currentTest,
        currentQuestion,
        handleNext,
        handleBack,
        handleSubmit
    } = useQuestionnare()

    if (dataTest) {
        return (
            <Limit>

                <div className={styles.question_container}>
                    <div>
                        <p className={styles.question_title}>
                            {currentQuestion + 1}.{" "}
                            {currentTest.question_description}
                        </p>

                        <div className={styles.alternatives_container}>
                            <RadioButton
                                key={currentTest.id_question}
                                valueKey="id_alternative"
                                labelKey="alternative_description"
                                optionGroup={currentTest.options}
                                value={String(currentAnswer?.id_alternative ?? 0)}
                                onChange={(value) => {
                                    handleAnswer(Number(value));
                                }}
                            />
                        </div>
                    </div>

                    <div className={styles.button_container}>
                        <Button
                            text={backButtonText}
                            variant="ghost"
                            onClick={handleBack}
                        />

                        <Button
                            isLoading={isLoading}
                            disabled={nextButtonDisabled}
                            text={nextButtonText}
                            onClick={
                                currentQuestion === dataTest.length - 1
                                    ? handleSubmit
                                    : handleNext
                            }
                        />
                    </div>
                </div>
            </Limit>
        );
    }
    return (
        <h3>Você ainda não possui um teste gerado</h3>
    )
};
