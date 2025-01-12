import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex">
              <Badge>FAQ</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
              Frequently Asked Questions
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
              Find answers to common questions about our driving school services, including enrollment, lesson scheduling, and tips to help you succeed on the road.
              </p>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              question:
                "What are the requirements to enroll in driving school in Los Angeles?",
              answer:
                "To enroll in our driving school, you must be at least 16 years old and have a valid learner's permit. If you're under 18, you'll need parental consent to begin lessons.",
            },
            {
              question:
                "How long does it take to complete the driving lessons?",
              answer:
                "Our driving lessons are designed to meet your individual needs, and the total duration depends on your current skill level. On average, it takes about 6 to 10 hours of instruction to become proficient, but this can vary.",
            },
            {
              question:
                "Can I take lessons if I already have a driver’s permit but no experience?",
              answer:
                "Yes! Our driving instructors will tailor the lessons to your skill level, whether you're a beginner or need a refresher before taking the driving test.",
            },
            {
              question: "How do I schedule my driving lessons?",
              answer:
                "You can schedule your lessons through our website, by calling our office, or by emailing us. We offer flexible hours to fit your schedule, including evenings and weekends.",
            },
            {
              question: "What should I bring to my driving lesson?",
              answer:
                "Please bring your learner's permit, a valid ID, and comfortable clothing and shoes suitable for driving. We also recommend bringing a bottle of water and any other items that might make you feel comfortable during the lesson.",
            },
            {
              question: "Do you offer lessons in automatic and manual cars?",
              answer:
                "Yes, we offer both automatic and manual transmission lessons. Please specify your preference when scheduling your lesson.",
            },
            {
              question:
                "Can you help me prepare for the California driving test?",
              answer:
                "Absolutely! Our instructors can provide specialized training to help you pass the California driving test. We offer practice tests and tips on how to handle the exam confidently.",
            },
            {
              question: "Do you offer any discounts or packages?",
              answer:
                "Yes, we offer discounted packages for multiple lessons, as well as referral discounts. Please check our 'Pricing' page for more information on our current offers.",
            },
          ].map((faq, index) => (
            <AccordionItem key={index} value={"index-" + index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
);
