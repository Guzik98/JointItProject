import React, {  useState } from 'react';
import { nextSteps } from './HelpFunction/nextSteps';
import './ChatBot.sass';
import Chats from '../chat/Chats';
import { useSettings } from '../../../../Settings';

type ResponseBotObject = {
    purpose: string;
    message: string;
    options?: string[];
    sender: string;
};

let seniority: string;
const Chatbot = () : JSX.Element => {
    const [userResponse, setUserResponse] = useState<string>('');
    const [step, setStep] = useState<number>(0);
    const [sendUserResponse, setSendUserResponse] = useState<string>('');
    const { setSeniority, setEmploymentType, setOpenDetailComponent } = useSettings();
    const [botResponse, setBotResponse] = useState<ResponseBotObject>({
        purpose: '',
        message: '',
        sender: 'bot'
    });

    const setOffers = (step : number) => {
        switch (step){
            case (2):
                seniority = sendUserResponse;
                break;
            case (3):
                setSeniority(seniority);
                setEmploymentType(sendUserResponse);
                setOpenDetailComponent(false);
                break;
            default : break;
        }
    };

    // setting next step when there's response and option click
    const setNextStep = (response: string) => {
        setStep(prevState => prevState + 1);
        setSendUserResponse(response);
        const res = nextSteps(step, response);
        setBotResponse({ message: '', options: [], purpose: '', ...res, sender: 'bot' });
        setUserResponse('');
    };

    const optionClick = (e: React.MouseEvent<HTMLElement>) => {
        const option = e.currentTarget.dataset.id;
        setOffers(step);
        if (option) {
            setNextStep(option);
        }
    };

    // event handlers
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserResponse(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNextStep(userResponse);
    };

    return (
        <div className="chat-container">
            <Chats
                userResponse={userResponse}
                botResponse={botResponse}
                sendUserResponse={sendUserResponse}
                optionClick={optionClick}
            />
            <form onSubmit={e => handleSubmit(e)} className="form-container">
                <input
                    onChange={e => handleInputChange(e)}
                    value={userResponse}
                    />
                <button>
                    <i className="far fa-paper-plane"/>
                </button>
            </form>
        </div>
    );
};

export default Chatbot;
