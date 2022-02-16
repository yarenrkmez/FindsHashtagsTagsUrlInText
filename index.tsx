import React, { useState, useEffect } from 'react'


type Props = {
    postContent: string;
}

const Content = ({ postContent }: Props) => {

    const contentFormat = () => {
        const hashtagRegex = /(?<=(\s|^))#[^\s\!\@\#\$\%\^\&\*\(\)]+(?=(\s|$))/g;
        const tagRegex = /(?<=(\s|^))@[^\s\!\@\#\$\%\^\&\*\(\)]+(?=(\s|$))/g;
        const urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

        let newContent = postContent?.replace(hashtagRegex, (match) => `<span style="color: #00AFF1;">${match}</span>`);
        newContent = newContent?.replace(tagRegex, (match) => `<span style="color: #00EAC8;">${match}</span>`);
        newContent = newContent?.replace(urlRegex, (match) => `<span style="color: #00AFF1;">${match}</span>`);

        return newContent;
    }

    return (

        <p className='whitespace-pre-wrap' dangerouslySetInnerHTML={{ __html: contentFormat()?.toString() }}>
        </p>



    )
}

export default Content
