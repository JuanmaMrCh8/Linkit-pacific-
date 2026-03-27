import React from 'react';
import { ChatBot } from './ChatBot';
import { WhatsAppButton } from './WhatsAppButton';

export function GlobalInteractive() {
  return (
    <>
      <WhatsAppButton />
      <ChatBot />
    </>
  );
}
