import { stackIcon } from "@/constants"
import { Stack } from "@/types"

export const getIconByStack = (stack: Stack) => {
  return stackIcon[stack.toLowerCase().replaceAll('.','') as Stack].src
} 