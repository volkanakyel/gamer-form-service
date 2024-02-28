interface AddOnPlan {
  title: string;
  description: string;
  active: boolean;
  monthlyPrice: number;
  yearlyPrice: number;
}

const addOnsPlan: AddOnPlan[] = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    active: false,
    monthlyPrice: 10,
    yearlyPrice: 90,
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    active: false,
    monthlyPrice: 20,
    yearlyPrice: 120,
  },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    active: false,
    monthlyPrice: 20,
    yearlyPrice: 150,
  }
];

export {
  addOnsPlan,
  AddOnPlan
}