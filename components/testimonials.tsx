import Image from 'next/image'

import TestimonialImage01 from '@/public/images/mini_2024-03-02_FCBFUTSALvsElPOZO_19.webp'
import TestimonialImage02 from '@/public/images/mini_2024-03-02_FCBFUTSALvsElPOZO_22.webp'
import TestimonialImage03 from '@/public/images/mini_2024-03-02_FCBFUTSALvsElPOZO_68.webp'
import TestimonialImage04 from '@/public/images/mini_2024-03-02_FCBFUTSALvsElPOZO_20.webp'
import TestimonialImage05 from '@/public/images/mini_2024-03-02_FCBFUTSALvsElPOZO_72.webp'
import TestimonialImage06 from '@/public/images/mini_2024-03-02_FCBFUTSALvsElPOZO_50.webp'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Последние фотографии</h2>
            <p className="text-xl text-gray-400">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 pb-6 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full justify-center bg-gray-800" data-aos="fade-up">
              <Image src={TestimonialImage01} alt='' />
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full justify-center bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <Image src={TestimonialImage02} alt='' />
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full justify-center bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <Image src={TestimonialImage03} alt='' />
            </div>

          </div>
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 pb-6 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full justify-center bg-gray-800" data-aos="fade-up">
              <Image src={TestimonialImage04} alt='' />
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full justify-center bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <Image src={TestimonialImage05} alt='' />
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full justify-center bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <Image src={TestimonialImage06} alt='' />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
