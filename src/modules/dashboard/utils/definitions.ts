import { Folder, MailCheck } from 'lucide-react'
export const METRIC_TYPE_CONFIG = {
  IDENTITIES_PROVIDED: {
    key: "IDENTITIES_PROVIDED",
    title: "Identities provided",
    description: "New identities provided during the selected time period",
    img: "https://cdn.prod.website-files.com/657832498d13b3515c2c7580/67bf3f61807f12fee943b212_Sync%20them%20with%20your%20marketing%20tools%20copy.webp",
    icon: Folder
  },
  ITERABLE_METRIC: {
    key: "ITERABLE_METRIC",
    title: "Iterable metric",
    description: "Number of provided iterable who clicked on emails for selected time period",
    img: "https://cdn.prod.website-files.com/657832498d13b3515c2c7580/67bf3f61807f12fee943b212_Sync%20them%20with%20your%20marketing%20tools%20copy.webp",
    icon: MailCheck
  },
  YOTPO_METRIC: {
    key: "YOTPO_METRIC",
    title: "Yotpo metric",
    description: "Number of provided iterable who opened emails during selected time period",
    img: "https://cdn.prod.website-files.com/657832498d13b3515c2c7580/67bf3f61807f12fee943b212_Sync%20them%20with%20your%20marketing%20tools%20copy.webp",
    icon: MailCheck
  },
}