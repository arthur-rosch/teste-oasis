"use client";

import { toast } from "sonner";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { useAuthMutations } from "@/hooks/use-auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, User, Loader2 } from "lucide-react";
import { registerSchema, type RegisterFormData } from "@/lib/validations/auth";


interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export function SignupModal({ isOpen, onClose, onSwitchToLogin }: SignupModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { register: registerUser } = useAuthMutations();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      await registerUser(data.email, data.password, data.name);
      toast.success("Conta criada com sucesso!");
      reset();
      onClose();
    } catch (error) {
      toast.error("Erro ao criar conta. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="w-full max-w-md mx-auto mt-20 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-lg shadow-xl">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-semibold">Criar conta</h2>
                <Button variant="default" size="icon" onClick={onClose}>
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome"
                      className="pl-9"
                      {...register("name")}
                      aria-invalid={!!errors.name}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="pl-9"
                      {...register("email")}
                      aria-invalid={!!errors.email}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-9"
                      {...register("password")}
                      aria-invalid={!!errors.password}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-sm text-red-500">{errors.password.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Criando conta...
                    </>
                  ) : (
                    "Criar conta"
                  )}
                </Button>

                <div className="text-center text-sm text-gray-500">
                  <button
                    type="button"
                    onClick={onSwitchToLogin}
                    className="text-yellow-500 hover:underline"
                  >
                    Já tem uma conta? Entre
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}