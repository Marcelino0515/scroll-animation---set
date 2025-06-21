import React, { useEffect } from 'react';
import { useState } from 'react';

interface MenuItemProps {
    text: string;
    href: string;
    className?: string;
}

export default function MenuItem({ text, href, className }: MenuItemProps) {
    const [isOver, setIsOver] = useState(false);
    const [isOut, setIsOut] = useState(false);
    const mouseOverHander = () => {
        setIsOver(true);
        setIsOut(false);
    }
    const mouseOutHandler = () => {
        setIsOut(true);
        setIsOver(false);
    }

    useEffect(() => {
        console.log('result is',isOver, isOut);
    }, [isOver, isOut])
    return (
        <>
            <a href={href} className={`relative ${className}`} onMouseOver={mouseOverHander} onMouseOut={mouseOutHandler}>
                {text}
                <div className={"block absolute cursor-pointer bg-[#FFA500] text-[#FFA500] h-[1px] duration-[0.4s] pointer " + (isOver ? "animateover" : (isOut ? "animateout" : "left-0 w-0")) }></div>
            </a>
        </>
    )
}