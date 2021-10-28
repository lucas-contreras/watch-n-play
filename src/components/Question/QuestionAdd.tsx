import React, { useCallback, useState, FormEvent, useEffect } from 'react';
import { QuestionInfo } from '../../types/Question';

interface QuestionAddState {
    question: string;
    answerA: string;
    answerB: string;
    correctId: string;
}

interface QuestionAddProps {
    data?: QuestionInfo;
    discard(): void;
    save(): void;
}

const questionAddInitialState: QuestionAddState = {
    question: '',
    answerA: '',
    answerB: '',
    correctId: '',
};

const css = {
    container: 'question-add',
};

export default function QuestionAdd({ data, discard, save }: QuestionAddProps) {
    console.log(data);
    const [state, setState] = useState<QuestionAddState>(questionAddInitialState);
    const onFormSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {

        save();
        event.preventDefault();
        // TODO: add to the question list
    }, []);

    const handleStateValues = useCallback((prop: string, value: string) => {
        setState((prevState) => ({
            ...prevState,
            [prop]: value,
        }));

    }, [setState]);

    useEffect(() => {
        if (data) {
            setState({
                question: data.title,
                answerA: '',
                answerB: '',
                correctId: '',
            });
        }
    }, [data]);

    return (
        <form onSubmit={onFormSubmit} className={css.container}>
            <div>
                <label htmlFor="question">Question</label>
                <input
                    id="question"
                    type="text"
                    value={state.question}
                    onChange={({ target }) => handleStateValues('question', target.value)}
                />
            </div>
            <div>
                <div>
                    <div>
                        <label htmlFor="answerA">Answer A</label>
                        <input
                            type="text"
                            id="answerA"
                            placeholder="Answer A"
                            value={state.answerA}
                            onChange={({ target }) => handleStateValues('answerA', target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="answerB">Answer B</label>
                        <input
                            type="text"
                            id="answerB"
                            placeholder="Answer B"
                            value={state.answerB}
                            onChange={({ target }) => handleStateValues('answerB', target.value)}
                        />
                    </div>
                </div>
                <div>
                    <input
                        type="radio"
                        name="answers"
                        id="answerA-rdo"
                        checked={(state.correctId === 'answerA-rdo')}
                        onChange={(event) => handleStateValues('correctId', event.target.id)}
                    />
                    <input
                        type="radio"
                        name="answers"
                        id="answerB-rdo"
                        checked={(state.correctId === 'answerB-rdo')}
                        onChange={(event) => handleStateValues('correctId', event.target.id)}
                    />
                </div>
            </div>
            <div>
                <button onClick={discard}>discard</button>
                <button type="submit">save</button>
            </div>
        </form>
    )
}