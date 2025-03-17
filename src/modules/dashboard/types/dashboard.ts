export type MetricType = "IDENTITIES_PROVIDED" | "ITERABLE_METRIC" | "YOTPO_METRIC";

export interface Metric {
  id: number;
  title: string;
  description: string;
  type: MetricType;
  x: number;
  y: number;
  w: number;
  h: number;
  meta: {
    key: string,
    value: string,
    description: string
    icon: string
  };
}