import React from 'react'
import './ChatPage.css'
import { useEffect, useRef, useState } from "react";
import NewPrompt from '../../components/newPrompt/NewPrompt';

function ChatPage() {


  


  return (
     <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">
            test from Ai
          </div>

          <div className='message user'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident recusandae quas, cum dolore architecto, rem cupiditate molestiae tenetur possimus nisi praesentium doloribus quaerat vitae nemo, alias fugit nam? Debitis, id.
          </div>

          <div className="message">
            test from Ai
          </div>

          <div className='message user'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident recusandae quas, cum dolore architecto, rem cupiditate molestiae tenetur possimus nisi praesentium doloribus quaerat vitae nemo, alias fugit nam? Debitis, id.
          </div>
          <div className="message">
            test from Ai
          </div>

          <div className='message user'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident recusandae quas, cum dolore architecto, rem cupiditate molestiae tenetur possimus nisi praesentium doloribus quaerat vitae nemo, alias fugit nam? Debitis, id.
          </div>
          <div className="message">
            test from Ai
          </div>

          <div className='message user'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident recusandae quas, cum dolore architecto, rem cupiditate molestiae tenetur possimus nisi praesentium doloribus quaerat vitae nemo, alias fugit nam? Debitis, id.
          </div>
          <div className="message">
            test from Ai
          </div>

          <div className='message user'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident recusandae quas, cum dolore architecto, rem cupiditate molestiae tenetur possimus nisi praesentium doloribus quaerat vitae nemo, alias fugit nam? Debitis, id.
          </div>
          <div className="message">
            test from Ai
          </div>

          <div className='message user'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident recusandae quas, cum dolore architecto, rem cupiditate molestiae tenetur possimus nisi praesentium doloribus quaerat vitae nemo, alias fugit nam? Debitis, id.
          </div>
          <div className="message">
            test from Ai
          </div>

          <div className='message user'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident recusandae quas, cum dolore architecto, rem cupiditate molestiae tenetur possimus nisi praesentium doloribus quaerat vitae nemo, alias fugit nam? Debitis, id.
          </div>
          <NewPrompt />
          
          

        </div>
      </div>
    </div>
  )
}

export default ChatPage