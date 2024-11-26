"use client";

import { Card } from "@/components/ui/card";

interface ContactCardProps {
  icon: () => JSX.Element;
  title: string;
  content: string;
}

export function ContactCard({ icon: Icon, title, content }: ContactCardProps) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <div className="mx-auto w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 text-white">
        {Icon()} {/* Chama a função para renderizar o ícone */}
      </div>
      <h3 className="text-yellow-500 font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{content}</p>
    </Card>
  );
}
