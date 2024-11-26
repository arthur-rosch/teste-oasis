"use client";

import dev from "@/assets/dev.svg";
import { z } from "zod";
import Image from "next/image";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const emailSchema = z.object({
  email: z.string().email("Por favor, insira um e-mail válido."),
});

type EmailFormValues = z.infer<typeof emailSchema>;

export function Hero() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
  });

  const handleSubscribe = (data: EmailFormValues) => {
    toast.success("Inscrição realizada com sucesso!");
    reset(); // Reseta o formulário após sucesso
  };

  return (
    <div className="bg-gray-100">
      <section className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h1 className="text-h1 text-gray-900 mb-6">
              Olá, Sou Arthur<br />
              Front End Dev
            </h1>
            <p className="text-gray-600 mb-6 text-p2">
              Neste blog compartilho dicas e truques, frameworks, projetos, etc.
              <br />
              Certifique-se de inscrever-se para receber atualizações recentes
            </p>
            <form
              className="flex gap-4"
              onSubmit={handleSubmit(handleSubscribe)}
            >
              
                <Input
                  type="email"
                  placeholder="Coloque seu email aqui"
                  className={`flex-1 h-14 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  {...register("email")}
                />
              <Button
                type="submit"
                size="default"
                className="h-14"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Inscrever-se"}
              </Button>
            </form>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[500px]"
          >
            <Image
              src={dev}
              alt="Developer Illustration"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
