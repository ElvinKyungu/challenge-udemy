export interface SubscriptionFeature {
  text: string;
  icon?: string;
}

export interface SubscriptionPlan {
  title: string;
  subtitle: string;
  audience: string;
  price: string;
  billingInfo: string;
  buttonText: string;
  buttonLink: string;
  features: SubscriptionFeature[];
}