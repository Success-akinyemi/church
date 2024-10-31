import TestimonialsSection from '../Helpers/TestimonalSection'
import { testimonialData } from '../../data/testimonies'

function Testimonials() {
  const testimonies = testimonialData

  return (
    <div>
      <TestimonialsSection data={testimonies} />
    </div>
  )
}

export default Testimonials
