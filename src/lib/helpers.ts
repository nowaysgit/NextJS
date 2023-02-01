export const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
}

const intervals = [
  { label: 'лет', label2: 'год', seconds: 31536000 },
  { label: 'месяцев', label2: 'месяц', seconds: 2592000 },
  { label: 'дней', label2: 'день', seconds: 86400 },
  { label: 'часов', label2: 'час', seconds: 3600 },
  { label: 'минут', label2: 'минута', seconds: 60 },
  { label: 'секунд', label2: 'секунда', seconds: 1 },
]

export function timeAgo(date: Date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
  const interval = intervals.find((i) => i.seconds < seconds) || intervals[5]
  const count = Math.floor(seconds / interval!.seconds)
  return `${count} ${count === 1 ? interval!.label2 : interval!.label} назад`
}
