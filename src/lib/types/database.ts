// STAXION Database Types (수동 — 스키마 변경 시 업데이트)

export type UserRole = "pending" | "member" | "admin";
export type LicenseStatus = "none" | "uploaded" | "approved" | "rejected";
export type OrderStatus = "pending" | "paid" | "failed" | "cancelled" | "refunded";
export type PostCategory = "blog" | "column" | "news";
export type InquiryType = "general" | "consulting" | "education" | "global";
export type RegistrationStatus = "registered" | "cancelled" | "attended";
export type AnalysisStatus = "pending" | "processing" | "completed" | "failed";
export type NotificationType = "analysis_complete" | "analysis_failed" | "order_shipped" | "system";

export interface Profile {
  id: string;
  email: string;
  name: string | null;
  phone: string | null;
  role: UserRole;
  license_url: string | null;
  license_status: LicenseStatus;
  clinic_name: string | null;
  clinic_region: string | null;
  avatar_url: string | null;
  analysis_credits: number;
  created_at: string;
  updated_at: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  sort_order: number;
  created_at: string;
}

export interface Product {
  id: string;
  category_id: string | null;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  sale_price: number | null;
  image_url: string | null;
  images: string[];
  is_published: boolean;
  is_digital: boolean;
  stock: number | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface Order {
  id: string;
  user_id: string;
  status: OrderStatus;
  total_amount: number;
  payment_key: string | null;
  payment_method: string | null;
  paid_at: string | null;
  cancelled_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  product_name: string;
  price: number;
  quantity: number;
  created_at: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  cover_image: string | null;
  category: PostCategory;
  is_published: boolean;
  published_at: string | null;
  author_name: string | null;
  view_count: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface Seminar {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  date: string | null;
  location: string | null;
  max_seats: number | null;
  current_seats: number;
  price: number;
  image_url: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface Speaker {
  id: string;
  name: string;
  title: string | null;
  bio: string | null;
  photo_url: string | null;
  sort_order: number;
  created_at: string;
}

export interface SeminarRegistration {
  id: string;
  seminar_id: string;
  user_id: string;
  status: RegistrationStatus;
  created_at: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  content: string | null;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  clinic_name: string | null;
  type: InquiryType;
  message: string | null;
  is_read: boolean;
  created_at: string;
}

export interface GuestbookEntry {
  id: string;
  user_id: string | null;
  name: string;
  content: string;
  is_visible: boolean;
  created_at: string;
}

export interface WaitingVideo {
  id: string;
  title: string;
  video_url: string;
  thumbnail_url: string | null;
  sort_order: number;
  is_published: boolean;
  created_at: string;
}

export interface SiteSetting {
  key: string;
  value: Record<string, unknown>;
  updated_at: string;
}

export interface AnalysisReport {
  id: string;
  user_id: string;
  address: string;
  sido: string | null;
  sgg: string | null;
  dong: string | null;
  lat: number | null;
  lng: number | null;
  admi_code: string | null;
  upjong_code: string;
  upjong_name: string;
  status: AnalysisStatus;
  error_message: string | null;
  sbiz_analy_no: string | null;
  sbiz_data: Record<string, unknown> | null;
  sgis_data: Record<string, unknown> | null;
  kosis_data: Record<string, unknown> | null;
  competitors_data: Record<string, unknown> | null;
  ai_analysis: Record<string, unknown> | null;
  created_at: string;
  completed_at: string | null;
}

export interface Notification {
  id: string;
  user_id: string;
  type: string;
  title: string;
  message: string | null;
  link: string | null;
  is_read: boolean;
  created_at: string;
}
