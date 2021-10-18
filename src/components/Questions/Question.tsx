import React from "react";
import Edit from '../assets/edit.svg';
import Trash from '../assets/trash.svg';
import CheckMark from '../assets/check-mark.svg';

// MOVE TO QUESTION LIST
import './QuestionList.scss';

interface QuestionProps {
    title: string;
    question1: string;
    question2: string;
}

export default function Question({ title, question1, question2 }: QuestionProps): JSX.Element {
    return (
        <>
            <div className="aaa">
                <p>{title}</p>
                <label>{question1}</label>
                <label className="test1">
                    {question2}
                    <img src={CheckMark} alt="" />
                </label>
            </div>
            <div>
                <button>open</button>
                <button>
                    <img src={Edit} alt="" />
                </button>
                <button>
                    <img src={Trash} alt="" />
                </button>
            </div>
        </>
    );
}