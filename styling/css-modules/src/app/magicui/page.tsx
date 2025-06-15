"use client";
import React, { useState, useEffect, ReactNode } from 'react';

interface AnimatedSpanProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedSpan: React.FC<AnimatedSpanProps> = ({ 
  children, 
  delay = 0, 
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}>
      {children}
    </div>
  );
};

interface TypingAnimationProps {
  children: string;
  delay?: number;
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ 
  children, 
  delay = 0, 
  className = "" 
}) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let currentIndex = 0;
      const typingTimer = setInterval(() => {
        if (currentIndex <= children.length) {
          setDisplayedText(children.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(typingTimer);
        }
      }, 30);

      return () => clearInterval(typingTimer);
    }, delay);

    return () => clearTimeout(timer);
  }, [children, delay]);

  return (
    <div className={className}>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </div>
  );
};

interface MacOSTerminalProps {
  children: ReactNode;
  title?: string;
}

const MacOSTerminal: React.FC<MacOSTerminalProps> = ({ 
  children, 
  title = "Terminal — bash — 80×24" 
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-black rounded-lg shadow-2xl overflow-hidden">
      {/* Title Bar */}
      <div className="bg-gray-200 px-4 py-2 flex items-center justify-between border-b">
        {/* Traffic Light Buttons */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors cursor-pointer"></div>
        </div>
        
        {/* Title */}
        <div className="text-gray-700 text-sm font-medium flex-1 text-center">
          {title}
        </div>
        
        {/* Empty space for balance */}
        <div className="w-16"></div>
      </div>

      {/* Terminal Content */}
      <div className="bg-black text-white p-4 font-mono text-sm leading-relaxed min-h-96">
        {children}
      </div>
    </div>
  );
};

interface TerminalLine {
  type: 'command' | 'success' | 'info' | 'output' | 'prompt';
  content: string;
  delay?: number;
  animated?: boolean;
}

export const TerminalDemo: React.FC = () => {
  const terminalLines: TerminalLine[] = [
    { type: 'command', content: '> pnpm dlx shadcn@latest init', delay: 0, animated: true },
    { type: 'success', content: '✔ Preflight checks.', delay: 1500 },
    { type: 'success', content: '✔ Verifying framework. Found Next.js.', delay: 2000 },
    { type: 'success', content: '✔ Validating Tailwind CSS.', delay: 2500 },
    { type: 'success', content: '✔ Validating import alias.', delay: 3000 },
    { type: 'success', content: '✔ Writing components.json.', delay: 3500 },
    { type: 'success', content: '✔ Checking registry.', delay: 4000 },
    { type: 'success', content: '✔ Updating tailwind.config.ts', delay: 4500 },
    { type: 'success', content: '✔ Updating app/globals.css', delay: 5000 },
    { type: 'success', content: '✔ Installing dependencies.', delay: 5500 },
    { type: 'info', content: 'ℹ Updated 1 file:\n  - lib/utils.ts', delay: 6000 },
    { type: 'output', content: 'Success! Project initialization completed.', delay: 6500, animated: true },
    { type: 'output', content: 'You may now add components.', delay: 7000, animated: true },
  ];

  const getLineClassName = (type: TerminalLine['type']): string => {
    switch (type) {
      case 'command':
        return 'text-white';
      case 'success':
        return 'text-green-400';
      case 'info':
        return 'text-blue-400';
      case 'output':
        return 'text-gray-400';
      case 'prompt':
        return 'text-white';
      default:
        return 'text-white';
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <MacOSTerminal title="Terminal — bash — 80×24">
        <div className="space-y-2">
          {/* Initial prompt */}
          <div className="text-white">
            <span className="text-green-400">user@MacBook-Pro</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~/project</span>
            <span className="text-white">$ </span>
          </div>
          
          {/* Terminal lines */}
          {terminalLines.map((line, index) => (
            <div key={index}>
              {line.animated ? (
                <TypingAnimation 
                  delay={line.delay} 
                  className={getLineClassName(line.type)}
                >
                  {line.content}
                </TypingAnimation>
              ) : (
                <AnimatedSpan 
                  delay={line.delay} 
                  className={getLineClassName(line.type)}
                >
                  {line.type === 'info' ? (
                    <div>
                      {line.content.split('\n').map((text, i) => (
                        <div key={i} className={i > 0 ? 'pl-4' : ''}>
                          {text}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span>{line.content}</span>
                  )}
                </AnimatedSpan>
              )}
            </div>
          ))}

          {/* Final prompt */}
          <AnimatedSpan delay={8000}>
            <div className="pt-2">
              <span className="text-green-400">user@MacBook-Pro</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~/project</span>
              <span className="text-white">$ </span>
              <span className="animate-pulse">|</span>
            </div>
          </AnimatedSpan>
        </div>
      </MacOSTerminal>
    </div>
  );
};

export default TerminalDemo;

// Export individual components for reuse
export { MacOSTerminal, TypingAnimation, AnimatedSpan };
export type { MacOSTerminalProps, TypingAnimationProps, AnimatedSpanProps };