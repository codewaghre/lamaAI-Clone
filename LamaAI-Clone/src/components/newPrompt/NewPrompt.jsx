import React from 'react'
import { useEffect, useRef, useState } from "react";
import './NewPrompt.css'
import Markdown from "react-markdown";
import Upload from '../uploads/upload';
import { IKImage } from 'imagekitio-react';
import model from '../../lib/gemini';


function NewPrompt() {

    const endRef = useRef(null)
    const [question, setquestion] = useState("")
    const [answer, setAnswer] = useState("");

    const [img, setImg] = useState({
        isLoading: false,
        error: "",
        dbData: {},
        aiData: {}
    })


    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: "Hello" }],
            },
            {
                role: "model",
                parts: [{ text: "Great to meet you. What would you like to know?" }],
            },
        ],
        generationConfig: {
            // maxOutputTokens:100,
        }
    });

    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" })
    }, [question, answer, img.data])

    // Testing model Promt
    const add = async (text) => {
        // const prompt = "Write a story about a magic backpack.";

        setquestion(text)

        //first way 
        const result = await chat.sendMessageStream(Object.entries(img.aiData).length ? [img.aiData, text] : [text]);
        let accumulatedText = "";
        for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            console.log(chunkText);
            accumulatedText += chunkText;
            setAnswer(accumulatedText);
        }

        //for tesitng 
        // const text = response.text()
        // console.log(text);


        //second way 
        // const result = await model.generateContent(prompt);
        // console.log(result.response.text());


    }

    const handlesubmit = (e) => {
        e.preventDefault();

        const text = e.target.text.value
        if (!text) return;

        add(text)
    }

    return (
        <>
            {
                img.isLoading && <div>
                    Looding...
                </div>
            }

            {/* Fetch the Image and show on Screen */}
            {

                img.dbData?.filePath && (
                    <IKImage
                        urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT_KEY}
                        path={img.dbData?.filePath}
                        width="380"
                        transformation={[{ width: 380 }]}
                    />
                )
            }

            {question && <div className='message user'>{question}</div>}

            {answer &&
                (

                    <div className='message'>
                        <Markdown>
                            {answer}
                        </Markdown>
                    </div>
                )}

            {/* <button onClick={() => add()}>Tesr Ao</button> */}
            <div className='endChat' ref={endRef}></div>
            <form className="newForm" onSubmit={handlesubmit}>

                {/* Uplaod Component here */}
                <Upload setImg={setImg} />

                <input id="file" type="file" multiple={false} hidden />
                <input type="text" name="text" placeholder="Ask anything..." />


                <button>
                    <img src="/arrow.png" alt="" />
                </button>
            </form>
        </>
    )
}

export default NewPrompt