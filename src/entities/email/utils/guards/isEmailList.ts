import { isEmail } from './isEmail'
import { createArrayOfGuard } from '@/shared/utils'

export const isEmailList = createArrayOfGuard(isEmail)
