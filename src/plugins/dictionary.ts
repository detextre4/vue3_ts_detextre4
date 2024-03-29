export const APP_NAMES = {
  camelcase: 'vue3TsDetextre4',
  kedabcase: 'vue3-ts-detextre4',
  snakecase: 'vue3_ts_detextre4',
  capitalize: 'Vue3 TS Detextre4',
  values: () => Object.values(APP_NAMES),
}
export type APP_NAMES_TYPE = keyof typeof APP_NAMES

export const ALERT_TYPE = {
  success: "success",
  error: "error",
  values: () => Object.values(ALERT_TYPE),
}
export type ALERT_TYPE_TYPE = keyof typeof ALERT_TYPE

export const SCROLL_TO = {
  top: 'top',
  bottom: 'bottom',
  values: () => Object.values(SCROLL_TO),
}
export type SCROLL_TO_TYPE = keyof typeof SCROLL_TO
