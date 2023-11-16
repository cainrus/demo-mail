import { format as _format } from 'date-fns'
export const format = (sentAt: string) => {
  return _format(new Date(sentAt), 'MMM do yyyy')
}
