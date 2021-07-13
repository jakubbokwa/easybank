import { ReactComponent as Online } from "../images/icon-online.svg";
import { ReactComponent as Budgeting } from "../images/icon-budgeting.svg";
import { ReactComponent as Onboarding } from "../images/icon-onboarding.svg";
import { ReactComponent as Api } from "../images/icon-api.svg";

const contentCards = [
  {
    id: 1,
    title: "Online Banking",
    desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    image: Online,
  },
  {
    id: 2,
    title: "Simple Budgeting",
    desc: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    image: Budgeting,
  },
  {
    id: 3,
    title: "Fast Onboarding",
    desc: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    image: Onboarding,
  },
  {
    id: 4,
    title: "Open API",
    desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    image: Api,
  },
];

export default contentCards;
