import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Calendar, Send } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  type: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Please tell me a bit more about your project"),
});

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      type: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="bg-accent rounded-3xl p-8 md:p-16 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-16">
            <div className="text-white">
              <h2 className="text-sm font-mono opacity-80 mb-2 uppercase tracking-widest">{t.contact.eyebrow}</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.title}</h3>
              <p className="text-white/80 text-lg mb-8 max-w-md">
                {t.contact.description}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                    <Mail className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">{t.contact.emailLabel}</p>
                    <a href="mailto:hello@alexmoreno.design" className="text-lg font-medium hover:underline">hello@alexmoreno.design</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                    <Calendar className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">{t.contact.bookCall}</p>
                    <a href="#" className="text-lg font-medium hover:underline">Calendly/alexmoreno</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.name}</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-secondary/30 border-transparent focus:bg-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.email}</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="bg-secondary/30 border-transparent focus:bg-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.type}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-secondary/30 border-transparent focus:bg-white">
                              <SelectValue placeholder={t.contact.form.typePlaceholder} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ui-ux">{t.contact.form.types.uiux}</SelectItem>
                            <SelectItem value="web">{t.contact.form.types.web}</SelectItem>
                            <SelectItem value="motion">{t.contact.form.types.motion}</SelectItem>
                            <SelectItem value="branding">{t.contact.form.types.branding}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.message}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t.contact.form.messagePlaceholder}
                            className="min-h-[120px] bg-secondary/30 border-transparent focus:bg-white resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl h-12">
                    {t.contact.form.submit} <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
