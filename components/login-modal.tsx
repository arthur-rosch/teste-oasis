"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, Mail, Lock, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthMutations } from "@/hooks/use-auth";
import { loginSchema, type LoginFormData } from "@/lib/validations/auth";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
}

export function LoginModal({ isOpen, onClose, onSwitchToSignup }: LoginModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuthMutations();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      await login(data.email, data.password);
      toast.success("Login realizado com sucesso!");
      reset();
      onClose();
    } catch (error) {
      toast.error("Erro ao fazer login. Verifique suas credenciais.");
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
                <h2 className="text-xl font-semibold">Entrar</h2>
                <Button variant="default" size="icon" onClick={onClose}>
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
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
                      Entrando...
                    </>
                  ) : (
                    "Entrar"
                  )}
                </Button>

                <div className="text-center text-sm text-gray-500">
                  <button
                    type="button"
                    onClick={onSwitchToSignup}
                    className="text-yellow-500 hover:underline"
                  >
                    Não tem uma conta? Cadastre-se
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