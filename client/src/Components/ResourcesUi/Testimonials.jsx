import TestimonialsSection from '../Helpers/TestimonalSection'
import { testimonialData } from '../../data/testimonies'

function Testimonials() {
  const testimonies = testimonialData

  return (
    <div>
      <TestimonialsSection data={testimonies} showMore={true} />
    </div>
  )
}

export default Testimonials
