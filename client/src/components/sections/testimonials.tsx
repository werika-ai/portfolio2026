import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Alex transformed our vague ideas into a stunning, functional product. His attention to detail and ability to simplify complex flows is unmatched.",
    name: "Sarah Jenkins",
    role: "Product Manager",
    company: "FinTech Co."
  },
  {
    id: 2,
    text: "Working with Alex was a game-changer for our brand. The motion graphics he created elevated our marketing campaigns significantly.",
    name: "David Chen",
    role: "Marketing Director",
    company: "GrowthLabs"
  },
  {
    id: 3,
    text: "Fast, professional, and incredibly talented. The UI kit he delivered has saved our dev team hundreds of hours.",
    name: "Emily Ross",
    role: "CTO",
    company: "StartUp Inc."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-accent mb-2 uppercase tracking-widest">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Client Stories</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 p-4">
                  <div className="p-1">
                    <Card className="border-none shadow-md bg-white h-full">
                      <CardContent className="flex flex-col justify-between p-8 h-full">
                        <div>
                          <Quote className="text-accent/20 mb-4 w-8 h-8" />
                          <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                        </div>
                        <div className="flex items-center gap-4 mt-auto">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300" />
                          <div>
                            <p className="font-bold text-sm">{testimonial.name}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
