import React from "react";

export default function({link, image, text}) {
    return (
    <li>
        <a href={link}>
            <img src={image} alt={text} />
            <p>{text}</p>
        </a>
    </li>)
}