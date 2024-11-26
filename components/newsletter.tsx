"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
// Validação do email com Zod
const emailSchema = z.object({
  email: z.string().email("Por favor, insira um email válido."),
});

export function Newsletter() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: { email: string }) => {
    toast.success("Inscrição bem-sucedida!");
    reset()
  };

  return (
    <div className="bg-gray-100">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <Mail className="w-12 h-12 mx-auto mb-6 text-yellow-500" />
          <p className="text-sub-h1 text-gray-900 mb-4">
            Inscreva-se para Receber Últimas Atualizações
          </p>
          <p className="text-p3 text-gray-400 mb-4">
            Subscribe to the newsletter and never miss a new post every week.
          </p>
          <form
            className="flex gap-2 max-w-md mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              type="email"
              placeholder="Coloque seu email aqui"
              className={`flex-1 ${
                errors.email ? "border-red-500" : ""
              }`}
              {...register("email")}
            />
            <Button type="submit" size="default">
              Inscrever-se
            </Button>
          </form>
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}

        </motion.div>
      </section>
    </div>
  );
}
