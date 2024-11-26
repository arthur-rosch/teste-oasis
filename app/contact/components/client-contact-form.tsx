import * as z from 'zod';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  celular: z.string().min(2, "Celular é obrigatório"),
  assunto: z.string().min(2, "Assunto é obrigatório"),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      celular: "",
      assunto: "",
      mensagem: "",
    },
  });


  function onSubmit(values: z.infer<typeof formSchema>) {
    const result = formSchema.safeParse(values);

    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    toast.success("Entraremos em contato em breve");
    form.reset();
  }

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-3xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Nome</label>
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className={`border border-gray-200 rounded-md focus-visible:ring-0 focus-visible:border-[#F2B544] ${form.formState.errors.nome ? 'border-red-500' : ''}`}
                        {...field}
                      />
                    </FormControl>
                    {form.formState.errors.nome && (
                      <p className="text-xs text-red-500">{form.formState.errors.nome.message}</p>
                    )}
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Email</label>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        className={`border border-gray-200 rounded-md focus-visible:ring-0 focus-visible:border-[#F2B544] ${form.formState.errors.email ? 'border-red-500' : ''}`}
                        {...field}
                      />
                    </FormControl>
                    {form.formState.errors.email && (
                      <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>
                    )}
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Celular</label>
              <FormField
                control={form.control}
                name="celular"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className={`border border-gray-200 rounded-md focus-visible:ring-0 focus-visible:border-[#F2B544] ${form.formState.errors.celular ? 'border-red-500' : ''}`}
                        {...field}
                      />
                    </FormControl>
                    {form.formState.errors.celular && (
                      <p className="text-xs text-red-500">{form.formState.errors.celular.message}</p>
                    )}
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Assunto</label>
              <FormField
                control={form.control}
                name="assunto"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className={`border border-gray-200 rounded-md focus-visible:ring-0 focus-visible:border-[#F2B544] ${form.formState.errors.assunto ? 'border-red-500' : ''}`}
                        {...field}
                      />
                    </FormControl>
                    {form.formState.errors.assunto && (
                      <p className="text-xs text-red-500">{form.formState.errors.assunto.message}</p>
                    )}
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">Mensagem</label>
            <FormField
              control={form.control}
              name="mensagem"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className={`min-h-[150px] resize-none border border-gray-200 rounded-md focus-visible:ring-0 focus-visible:border-[#F2B544] ${form.formState.errors.mensagem ? 'border-red-500' : ''}`}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.mensagem && (
                    <p className="text-xs text-red-500">{form.formState.errors.mensagem.message}</p>
                  )}
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" size="default" className="w-full">
              Enviar mensagem
          </Button>
        </form>
      </Form>
    </div>
  );
}
