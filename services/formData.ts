interface AddOnPlan {
  title: string;
  description: string;
  active: boolean;
  monthlyPrice: number;
  yearlyPrice: number;
  planNumber: number;
}

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
  AddOnPlan
}