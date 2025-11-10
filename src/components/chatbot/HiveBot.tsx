import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { studentData } from '@/data/studentData';
import { useToast } from '@/hooks/use-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const HiveBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content: `Hi! I'm HiveBot 🐝 — your smart CampusHive assistant. ${user ? `Welcome ${user.email}!` : ''} How can I help you today?`,
        },
      ]);
    }
  }, [isOpen, user]);

  const getCurrentStudentData = () => {
    if (!user) return null;
    // In a real app, you'd match by user ID or email
    // For demo, we'll use the first student
    return studentData[0];
  };

  const handleQuickAction = (action: string) => {
    const currentStudent = getCurrentStudentData();
    
    const actionMap: Record<string, string> = {
      attendance: currentStudent 
        ? `What's my attendance percentage?` 
        : 'Show me attendance information',
      assignments: currentStudent 
        ? `What assignments do I need to complete?` 
        : 'Tell me about assignments',
      fees: currentStudent 
        ? `What's my fee payment status?` 
        : 'Show fee information',
      notices: 'Show me recent notices',
      help: 'What can you help me with?',
    };

    const message = actionMap[action] || action;
    handleSend(message);
  };

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const currentStudent = getCurrentStudentData();
      
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/campus-chat`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            messages: [...messages, userMessage].map((m) => ({
              role: m.role,
              content: m.content,
            })),
            studentData: currentStudent,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response');
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.reply,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
      
      // Add error message to chat
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "I'm having trouble connecting right now. Please try again in a moment!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickActions = [
    { id: 'attendance', label: 'View Attendance', icon: '📊' },
    { id: 'assignments', label: 'Check Assignments', icon: '📝' },
    { id: 'fees', label: 'Fee Status', icon: '💰' },
    { id: 'notices', label: 'Show Notices', icon: '📢' },
    { id: 'help', label: 'Help', icon: '❓' },
  ];

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-emerald-600 hover:bg-emerald-700 z-50"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col border-2 border-emerald-200 dark:border-emerald-800">
          <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-4 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-lg">
              <span className="text-2xl">🐝</span>
              <div>
                <div className="font-bold">HiveBot</div>
                <div className="text-xs opacity-90">Your Campus Assistant</div>
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            {/* Quick Actions */}
            <div className="p-3 border-b bg-muted/30">
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action) => (
                  <Button
                    key={action.id}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction(action.id)}
                    className="text-xs hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                  >
                    <span className="mr-1">{action.icon}</span>
                    {action.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.role === 'user'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg px-4 py-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t bg-background">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  size="icon"
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default HiveBot;
