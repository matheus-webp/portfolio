"use client"

import { useState, useEffect } from 'react';

interface TypingEffectProps {
    texts: string[];
    typeSpeed: number;
    deleteSpeed: number;
    delaySpeed: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ texts, typeSpeed, deleteSpeed, delaySpeed }) => {
    const [text, setText] = useState<string>('');
    const [index, setIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [loopNum, setLoopNum] = useState<number>(0);
    const [typingSpeed, setTypingSpeed] = useState<number>(typeSpeed);

    useEffect(() => {
        const handleType = () => {
            const current = loopNum % texts.length;
            const fullText = texts[current];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? deleteSpeed : typeSpeed);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), delaySpeed);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, deleteSpeed, delaySpeed, loopNum, texts, typeSpeed, typingSpeed]);

    return <span>{text}</span>;
}

export default TypingEffect;
