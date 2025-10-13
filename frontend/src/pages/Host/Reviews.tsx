import useFetch from '../../hooks/useFetch'
import { getHostReviews } from '../../api'
import type { Review } from '../../types'

const Reviews = () => {
  const { data: reviews, loading, error } = useFetch<Review[]>(getHostReviews)
    if (loading) {
        return <div className="p-4"><h1>Loading...</h1></div>
    }
    if (error) {
        return <div className="p-4"><h1>There was an error: {error.message}</h1></div>
    }
  return (
    <div>
      <h1>Your Reivews</h1>
      <h2>Reviews({reviews?.length})</h2>
      <div className="grid grid-cols-1 gap-6 mt-6">
        {reviews?.map((review: Review) => {
          return (
            <div key={review.user} className="grid grid-cols-1 md:grid-cols-6 gap-10 bg-white van-card p-4">
              <div className="col-span-1 md:col-span-4 flex justify-between items-center">
                <div>
                  <div className="text-lg font-bold mb-2">{review.user} - {new Date(review.created_at).toDateString()}</div>
                  <div><span className="text-lg font-bold">{review.rating}/5</span></div>
                  <div>{review.comment}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Reviews
