import React from 'react'
import { useEffect, useRef, useState } from "react";
import './NewPrompt.css'
import Upload from '../uploads/upload';
import { IKImage } from 'imagekitio-react';


function NewPrompt() {

    const endRef = useRef(null)

    const [img, setImg] = useState({
        isLoading: false,
        error: "",
        dbData: {},
    })

    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" })
    }, [])

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

            <div className='endChat' ref={endRef}></div>
            <form className="newForm" >

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