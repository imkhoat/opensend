export interface Credentials {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string | null;
  status: string;
  date_joined: string;
  password_last_changed: string;
  url: string | null;
  last_active: string;
  terms_accepted: boolean;
  otp: string | null;
  user_group: string;
}

export interface Role {
  id: number;
  name: string;
}

export interface Store {
  id: number;
  name: string;
  url: string;
  status: string;
  onboarding_procedure?: {
    onboarding_status: string;
  };
  created_at: string;
  public_id: string;
  private_id: string;
  website_technology: string;
  client_type: string;
  revive_plan_group_id: number;
  email_milestones_id: string | null;
  marketing_platform: string;
  email_subdomain: boolean;
  estimated_revenue: string;
  estimated_site_traffic: string;
  quick_description: string | null;
  recent_3_templates: boolean;
  store_category: number;
  use_default_dashboard_group: boolean;
  default_dashboard_group_id: number | null;
  owner_invited: boolean;
  hidden_contact_table_columns: any[];
  hubspot_deal_id: string | null;
  referral: string | null;
  avatar_url: string | null;
  _count: {
    members: number;
  };
}

export interface Access {
  store_id: number;
  user_id: number;
  role_id: number;
  role: Role;
  store: Store;
}

export interface ViewToggles {
  id: number;
  role_id: number;
  view_type: string;
  clients: boolean;
  revive: boolean;
  postal: boolean;
  overview: boolean;
  delivery_integration: boolean;
  traffic_integration: boolean;
  s3_integration: boolean;
  webhook_source_integration: boolean;
  google_integration: boolean;
  subscription: boolean;
  billing: boolean;
  events: boolean;
  contacts: boolean;
  members: boolean;
  administrators: boolean;
  widget_setting: boolean;
  default_widget_setting: boolean;
  b2b_widgets: boolean;
  switch_role: boolean;
  list_segment: boolean;
}

export interface View {
  type: string;
  access: Access;
  accesses: Access[];
  viewToggles: ViewToggles;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
  clientToken: string;
}

export interface AuthResponse {
  message: string;
  user: User;
  view: View;
  accesses: Access[];
  tokens: Tokens;
}