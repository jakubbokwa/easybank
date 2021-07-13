import imageConfetti from "../images/image-confetti.jpg";
import imageCurrency from "../images/image-currency.jpg";
import imagePlane from "../images/image-plane.jpg";
import imageRestaurant from "../images/image-restaurant.jpg";

const articles = [
  {
    id: 1,
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    desc: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    image: imageCurrency,
  },
  {
    id: 2,
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    desc: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    image: imageRestaurant,
  },
  {
    id: 3,
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    desc: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    image: imagePlane,
  },
  {
    id: 4,
    author: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    desc: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    image: imageConfetti,
  },
];

export default articles;
