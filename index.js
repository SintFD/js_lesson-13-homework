const reviews = [
  {
    user: "Alice",
    product: "iPhone 13",
    rating: 5,
    comment: "Отличный телефон!",
  },
  {
    user: "Bob",
    product: "iPhone 13",
    rating: 4,
    comment: "Хороший,но дорогой.",
  },
  {
    user: "Alice",
    product: "MacBook Air",
    rating: 5,
    comment: "Очень легкий и быстрый.",
  },
  {
    user: "Charlie",
    product: "AirPods",
    rating: 2,
    comment: "Быстро разряжаются.",
  },
  {
    user: "Bob",
    product: "MacBook Air",
    rating: 3,
    comment: "Ожидал большего.",
  },
  {
    user: "Alice",
    product: "AirPods",
    rating: 1,
    comment: "Вообще не понравились.",
  },
  {
    user: "Charlie",
    product: "iPhone 13",
    rating: 5,
    comment: "Лучший телефон!",
  },
  {
    user: "Bob",
    product: "AirPods",
    rating: 2,
    comment: "Неудобные амбушюры.",
  },
];

// 1. Средняя оценка по каждому продукту — объект, где ключи — названия продуктов, а значения — средняя оценка.

const reviewsAnalysis = reviews.reduce((acc, { product, rating }, i, arr) => {
  if (!acc[product]) {
    acc[product] = { sumRating: 0, quantity: 0 };
  }
  acc[product].sumRating = acc[product].sumRating + rating;
  acc[product].quantity = acc[product].quantity + 1;

  if (i === arr.length - 1) {
    let averageRatings = {};
    for (key in acc) {
      averageRatings = {
        ...averageRatings,
        [key]: acc[key].sumRating / acc[key].quantity,
      };
    }
    return { averageRatings };
  }

  return acc;
}, {});

console.log(reviewsAnalysis);
