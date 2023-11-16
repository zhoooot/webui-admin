import React from "react"
import QuizChart from "./charts/quiz-chart"

const QuizStats = (): JSX.Element => {
    return (
        <div className="bg-white rounded-lg">
            <QuizChart></QuizChart>
        </div>
    )
}

export default QuizStats;