export interface MercadoPagoWebhookEvent {
  id: number;
  live_mode: boolean;
  type: string;
  date_created: string | Date;
  api_version: string;
  action: string;
  data: { id: number };
}
