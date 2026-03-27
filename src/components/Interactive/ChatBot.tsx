import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2, Bot, User } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! Soy el asistente virtual de Linkit Pacific. ¿En qué puedo ayudarte hoy con tus importaciones desde China?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<GoogleGenAI | null>(null);

  useEffect(() => {
    if (!aiRef.current) {
      aiRef.current = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || !aiRef.current) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await aiRef.current.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: [
          {
            role: 'user',
            parts: [{ text: userMessage }]
          }
        ],
        config: {
          systemInstruction: "Eres el asistente virtual de Linkit Pacific, una empresa líder en sourcing, inspección de calidad y logística internacional entre China y Latinoamérica. Tu objetivo es ayudar a los usuarios con dudas sobre importaciones, servicios de la empresa (Sourcing, Compras, Inspección, Logística, Entrada al mercado chino) y proporcionar información útil de manera profesional y amable. Si no sabes algo, invita al usuario a contactar directamente a info@linkitpacific.com.",
        }
      });

      const botResponse = response.text || "Lo siento, no pude procesar tu solicitud. Por favor, intenta de nuevo.";
      setMessages(prev => [...prev, { role: 'model', text: botResponse }]);
    } catch (error) {
      console.error("ChatBot Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Hubo un error al conectar con el asistente. Por favor, intenta más tarde." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Linkit Assistant</h3>
                  <p className="text-[10px] opacity-80">En línea ahora</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 shadow-sm border border-gray-100 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 rounded-tl-none">
                    <Loader2 size={16} className="animate-spin text-primary" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Escribe tu mensaje..."
                  className="flex-grow bg-transparent border-none focus:ring-0 text-sm py-1"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="text-primary hover:scale-110 transition-transform disabled:opacity-50"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:shadow-primary/40 transition-shadow"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
}
