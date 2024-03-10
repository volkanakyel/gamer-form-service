interface AddOnPlan {
  title: string;
  description: string;
  active: boolean;
  monthlyPrice: number;
  yearlyPrice: number;
  planNumber: number;
}

interface UserInfo {
  name: string;
  email: string;
  phone: string;
}
interface Plan {
  name: string;
  price: number;
  yearlyPrice: number;
  image: string;
  yearlyPlan: boolean;
  active: boolean;
  id: number;
}
const planSelection: Plan[] = [
  {
    name: "Arcade",
    price: 9,
    yearlyPrice: 90,
    image: "arcade-icon.svg",
    yearlyPlan: false,
    active: true,
    id: 1,
  },
  {
    name: "Advanced",
    price: 12,
    yearlyPrice: 120,
    image: "advanced-icon.svg",
    yearlyPlan: false,
    active: false,
    id: 2,
  },
  {
    name: "Pro",
    price: 15,
    yearlyPrice: 150,
    image: "pro-icon.svg",
    yearlyPlan: false,
    active: false,
    id: 3,
  }]

const addOnsPlan: AddOnPlan[] = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    active: false,
    monthlyPrice: 1,
    yearlyPrice: 10,
    planNumber: 1,
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    active: false,
    monthlyPrice: 2,
    yearlyPrice: 20,
    planNumber: 2,
  },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    active: false,
    monthlyPrice: 2,
    yearlyPrice: 20,
    planNumber: 3,
  }
];

export {
  addOnsPlan,
  AddOnPlan,
  UserInfo,
  Plan,
  planSelection
}