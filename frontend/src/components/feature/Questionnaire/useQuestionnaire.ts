import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store';
import { z } from "zod";

import { postAssessmentsQuestionnaire } from '@/api/endpoints'

export const useQuestionnare = () => {
    const router = useRouter()
    const { user, currentAssessment, setCurrentAssessment } = useUserStore((state) => state)
    const { id_users } = user
    const answerSchema = z.object({
        id_question: z.number(),
        id_alternative: z.number().min(1, "Questão não respondida"),
    });
    const assessmentSchema = z.array(answerSchema);

    type Answer = z.infer<typeof answerSchema>;

    const testId = currentAssessment?.assessment.id_assessments
    const dataTest = currentAssessment?.questions ?? []

    const initialAnswers: Answer[] = dataTest?.map((test) => ({
        id_question: test.id_question,
        id_alternative: 0,
    })) ?? [];

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [answers, setAnswers] = useState<Answer[]>(initialAnswers);

    const currentTest = dataTest[currentQuestion] ?? [];

    const currentAnswer = answers.find(
        answer => answer.id_question === currentTest?.id_question
    );

    const backButtonText = currentQuestion === 0 ? 'Cancelar' : 'Voltar'
    const nextButtonText = dataTest && currentQuestion === dataTest.length - 1
        ? 'Finalizar'
        : 'Avançar'

    const nextButtonDisabled = currentAnswer?.id_alternative === 0
    const handleAnswer = (idAlternative: number) => {
        setAnswers(prev =>
            prev.map(answer =>
                answer.id_question === currentTest?.id_question
                    ? {
                        ...answer,
                        id_alternative: idAlternative,
                    }
                    : answer
            )
        );
    };
    const handleNext = () => {
        if (dataTest && currentQuestion < dataTest.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1);
        } else {
            router.push('/test')
            setCurrentAssessment(null)
        }
    };

    const handleSubmit = async () => {
        if (testId) {
            const allAnswers = assessmentSchema.safeParse(answers).data;
            const data = {
                id_users: id_users,
                id_levels: currentAssessment.assessment.id_levels,
                id_stacks: currentAssessment.assessment.id_stacks,
                answers: allAnswers
            };

            setIsLoading(true)
            await postAssessmentsQuestionnaire(testId, data)
                .then((response) => {
                    router.push(`/test/assessment/result/${testId}`)
                    setCurrentAssessment(null)
                    console.log(response)
                })
                .catch((error) =>
                    console.error(error)
                )
                .finally(() => {
                    setIsLoading(false)
                    setCurrentAssessment(null)
                })
        }
        //TODO : remover console.log

    };

    return {
        dataTest,
        isLoading,
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