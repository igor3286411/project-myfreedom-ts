interface UserSubscriptionPlan {
  type: string;
}

interface UserSubscription {
  plan: UserSubscriptionPlan;
  tokens: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  subscription: UserSubscription;
}

export interface UserProps {
  todo: User;
  pages: number;
}
