import React, { useState, useEffect, useRef } from 'react';
import './chats.sass';
import { useAuth0 } from '@auth0/auth0-react';

type Props = {
    userResponse: string;
    botResponse: {
        purpose: string;
        message: string;
        options?: string[];
        sender: string;
    };
    sendUserResponse: string;
    optionClick: (ev: React.MouseEvent<HTMLElement>) => void;
};

type MessagesInfo = {
    purpose?: string;
    message: string;
    options?: string[];
    sender: string;
};

const Chats: React.FC<Props> = props => {
    const [messages, setMessages] = useState<MessagesInfo[]>([]);
    const dummyRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);
    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        if (messages.length === 0) {
            if ( isAuthenticated ){
                setMessages([
                    {
                        purpose: 'introduction',
                        message: `Hej, ${user?.name} abyśmy mogli Ci pomóc odpowiedz na poniższe pytania`,
                        options: ['Employer', 'Developer'],
                        sender: 'bot'
                    }
                ]);   
            } else {
                setMessages([
                    {
                        purpose: 'introduction',
                        message:
                            'Hej, użytkowniku abyśmy mogli Ci pomóc odpowiedz na poniższe pytania',
                        options: ['Employer', 'Developer'],
                        sender: 'bot'
                    }
                ]);
            }
        } else {
            const tempArray = [...messages];
            tempArray.push({ message: props.sendUserResponse, sender: 'user' });
            setMessages(tempArray);

            setTimeout(() => {
                const temp2 = [...tempArray];
                temp2.push(props.botResponse);
                setMessages(temp2);
            }, 1000);
        }
    }, [props.sendUserResponse, props.botResponse]);

    // enable autoscroll after each message
    useEffect(() => {
        if (dummyRef && dummyRef.current && bodyRef && bodyRef.current) {
            bodyRef.current.scrollTo({
                top: dummyRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    }, [messages]);

    return (
        <div className="message-container" ref={bodyRef}>
            {messages.map(chat => (
                <div key={chat.message}>
                    <div className={`message ${chat.sender}`}>
                        <p>{chat.message}</p>
                    </div>
                    {chat.options ? (
                        <div className="options">
                            <div>
                                <i className="far fa-hand-pointer"/>
                            </div>
                            {chat.options.map(option => (
                                <p
                                    onClick={e => props.optionClick(e)}
                                    data-id={option}
                                    key={option}
                                >
                                    {option}
                                </p>
                            ))}
                        </div>
                    ) : null}
                    <div ref={dummyRef} className="dummy-div"/>
                </div>
            ))}
        </div>
    );
};

export default Chats;
