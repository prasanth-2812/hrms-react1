export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
}