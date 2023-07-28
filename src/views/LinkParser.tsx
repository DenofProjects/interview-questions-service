import React from 'react';

const LinkParser = (props: any) => {
    // Regular expression to find URLs in the text
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    console.log("text is : ", props.text);

    // Replace URLs with anchor tags
    const replacedText = props. text.replace(urlRegex, (url: any) => {
        return `<a href="${url}" target="_blank">${url}</a>`;
    });

    // Use dangerouslySetInnerHTML to render the HTML with anchor tags
    return <div dangerouslySetInnerHTML={{ __html: replacedText }} />;
};

export default LinkParser;
