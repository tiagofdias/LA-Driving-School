import { Check, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";

export const Pricing = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex text-center justify-center items-center gap-4 flex-col">
        <Badge>Pricing</Badge>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
            Prices that make sense!
          </h2>
        </div>
        <div className="grid text-left w-full grid-cols-3 lg:grid-cols-4 divide-x pt-20">
          <div className="col-span-3 lg:col-span-1"></div>
          <div className="px-3 py-1 md:px-6 md:py-4  gap-2 flex flex-col">
            <p className="text-2xl">Motorcycle license</p>
            <p className="text-sm text-muted-foreground">
              This is a special license allowing individuals to operate
              motorcycles. In California, you need to pass a motorcycle-specific
              written test and a riding skills test to qualify. If you already
              have a regular DL, you can add this endorsement at no additional
              cost.
            </p>
            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
              <span className="text-4xl">$399 - $10</span>
              <span className="text-sm text-muted-foreground"> / month</span>
            </p>
            <ScrollLink
              to="contacts"
              smooth={true}
              duration={500}
              offset={-50}
              className="no-underline"
            >
              <Button className="gap-4 w-full mt-8">Start Today</Button>
            </ScrollLink>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
            <p className="text-2xl">Driver's License</p>
            <p className="text-sm text-muted-foreground">
              The standard license issued to individuals who want to drive
              passenger vehicles. This allows you to operate most cars and light
              trucks on public roads. It requires passing a written test, a
              driving test, and meeting age requirements (typically 16+ years).
            </p>
            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
              <span className="text-4xl">$799 - $20</span>
              <span className="text-sm text-muted-foreground"> / month</span>
            </p>
            <ScrollLink
              to="contacts"
              smooth={true}
              duration={500}
              offset={-50}
              className="no-underline"
            >
              <Button className="gap-4 w-full mt-8">Start Today</Button>
            </ScrollLink>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
            <p className="text-2xl">Commercial License</p>
            <p className="text-sm text-muted-foreground">
              A CDL is required for individuals who wish to operate large or
              heavy vehicles, such as trucks, buses, and vehicles transporting
              hazardous materials. To obtain a CDL, you need to pass written and
              driving tests specific to the type of commercial vehicle you
              intend to drive.
            </p>
            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
              <span className="text-4xl">$1599 - $40</span>
              <span className="text-sm text-muted-foreground"> / month</span>
            </p>
            <ScrollLink
              to="contacts"
              smooth={true}
              duration={500}
              offset={-50}
              className="no-underline"
            >
              <Button className="gap-4 w-full mt-8">Start Today</Button>
            </ScrollLink>
          </div>
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1  py-4">
            <b>Features</b>
          </div>
          <div></div>
          <div></div>
          <div></div>

          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
            Intro to driving
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>

          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
            Reversing, parking, traffic signs
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Minus className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>

          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
            Residential/ business
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Minus className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>

          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
            Prescheduled DMV appointment
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>

          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
            Vehicule for your DMV drive test
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>

          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
            Pick up and drop off
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
