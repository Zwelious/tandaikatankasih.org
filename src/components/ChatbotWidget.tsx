import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! Need help with Membership or the Charity Golf?" }
  ]);
  const [input, setInput] = useState("");

  const quickReplies = [
    "Membership fees",
    "Event schedule",
    "Rules & format",
    "Prizes",
    "Donate or sponsor"
  ];

  const handleSend = (message: string) => {
    if (!message.trim()) return;

    setMessages(prev => [...prev, { role: "user", content: message }]);
    setInput("");

    // Simulate response
    setTimeout(() => {
      let response = "Thank you for your interest! Our team will get back to you shortly.";
      
      if (message.toLowerCase().includes("membership")) {
        response = "Individual membership: IDR 500,000/year\nCorporate membership: IDR 5,000,000/year\n\nWould you like to join?";
      } else if (message.toLowerCase().includes("event") || message.toLowerCase().includes("schedule")) {
        response = "23rd Annual Charity Golf Tournament\nOct 17-18, 2025 at Bukit Darmo Golf, Surabaya\n\nView full program on our Events page!";
      }

      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    }, 500);
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lifted z-50"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-card rounded-lg shadow-lifted border z-50 flex flex-col">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">TI&A Assistant</h3>
                <p className="text-xs opacity-90">We're here to help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t space-y-2">
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <Button
                  key={reply}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSend(reply)}
                  className="text-xs"
                >
                  {reply}
                </Button>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend(input)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={() => handleSend(input)} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
