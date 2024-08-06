import { reviews } from "../Constants"
import ReviewCard from "../MainComponent/ReviewCard"

const CustomerReviews = () => {
  return (
    <section id="max-container">
      <h3 className="font-palanquin text-4xl font-bold text-center" >What Our <span className="text-coral-red" >Customer</span> Say?</h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14" >
        {reviews.map((review)=>(
            <ReviewCard key={review.customerName} imgURL={review.imgURL} customername={review.customerName} rating={review.rating} feedback={review.feedback}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews