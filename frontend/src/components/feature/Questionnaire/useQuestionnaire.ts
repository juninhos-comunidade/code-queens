import { useState } from 'react';
import { useParams } from 'next/navigation';
import { z } from "zod";
import { dataTest } from './teste';

export const useQuestionnare = () => {
    const { id } = useParams();
    const answerSchema = z.object({
        id_question: z.number(),
        id_alternative: z.number().min(1, "Questão não respondida"),
    });
    const assessmentSchema = z.array(answerSchema);

    type Answer = z.infer<typeof answerSchema>;

    const initialAnswers: Answer[] = dataTest.map((test) => ({
        id_question: test.id_question,
        id_alternative: 0,
    }));

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Answer[]>(initialAnswers);

    const currentTest = dataTest[currentQuestion];

    const currentAnswer = answers.find(
        answer => answer.id_question === currentTest.id_question
    );

    const backButtonText = currentQuestion === 0 ? 'Cancelar' : 'Voltar'
    const nextButtonText = currentQuestion === dataTest.length - 1
    ? 'Finalizar'
    : 'Avançar'
    
    const nextButtonDisabled = currentAnswer?.id_alternative === 0
    const handleAnswer = (idAlternative: number) => {
        setAnswers(prev =>
            prev.map(answer =>
                answer.id_question === currentTest.id_question
                    ? {
                        ...answer,
                        id_alternative: idAlternative,
                    }
                    : answer
            )
        );
    };
    const handleNext = () => {
        if (currentQuestion < dataTest.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1);
        }
    };

    const handleSubmit = () => {
        const result = assessmentSchema.safeParse(answers);

        if (!result.success) {
            console.log(result.error);
            return;
        }

        console.log("Respostas:", result.data);
    };

    return {
        dataTest,
        setAnswers,
        handleAnswer,
        backButtonText,
        nextButtonText,
        nextButtonDisabled,
        currentTest,
        currentAnswer,
        currentQuestion,
        setCurrentQuestion,
        handleNext,
        handleBack,
        handleSubmit,
    }
}