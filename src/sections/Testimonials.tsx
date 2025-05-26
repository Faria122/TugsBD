import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import CLIENT from "@/assets/images/Clients.png";
import EMPLOYEEE from "@/assets/images/Employee.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";




const testimonials = [
  {
    name: "FOR OUR CUSTOMERS",
    position: "Marketing Manager @ TechStartups",
    text: [
      "To be the best Service Company in the industry.",
      "Focus on overall performance.",
      "Prioritize customer needs.",
    ],
    avatar: CLIENT,
  },
  {
    name: "FOR OUR EMPLOYEES",
    position: "Head of Design @ GreenLeaf",
    text: [
      "To Provide a quality work environment based upon teamwork and involvement.",
      "To achieve the industry's highest employee productivity."
    ],
    avatar: EMPLOYEEE,
  },

];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="The TUGS"
          title="Mission - Vision - Core Values"
          description="Our goal is to perform our functions correctly the first time."
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image: linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="max-w-xs md:max-w-md md:p-8">
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex itemms-center justify-center rounded-full">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="max-h-full" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    {/*  <div className="text-sm text-white/40">
                    {testimonial.position}
                  </div>
                  */}
                  </div>
                </div>
                <ul className="mt-4 md:mt-6 list-disc pl-5 text-sm md:text-base text-gray-300 space-y-1">
                  {testimonial.text.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
