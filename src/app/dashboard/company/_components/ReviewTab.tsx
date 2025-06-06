"use client";

interface Review {
  id: number;
  reviewer_name: string | null;
  rating: number;
  review_text: string;
  pros: string | null;
  cons: string | null;
  work_life_balance: number;
  culture: number;
}

interface Props {
  reviews: Review[];
}

export default function ReviewsTab({ reviews }: Props) {
  return (
    <section>
      {reviews.length === 0 && <p>No reviews available.</p>}
      {reviews.map((review) => (
        <div
          key={review.id}
          className="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-1">
            {review.reviewer_name ?? "Anonymous"}
          </h3>
          <p>
            <strong>Rating:</strong> {review.rating} / 5
          </p>
          <p className="mb-2 italic">"{review.review_text}"</p>
          {review.pros && (
            <p>
              <strong>Pros:</strong> {review.pros}
            </p>
          )}
          {review.cons && (
            <p>
              <strong>Cons:</strong> {review.cons}
            </p>
          )}
          <p>
            <strong>Work-Life Balance:</strong> {review.work_life_balance} / 10
          </p>
          <p>
            <strong>Culture:</strong> {review.culture} / 10
          </p>
        </div>
      ))}
    </section>
  );
}
