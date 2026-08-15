import { stackIcon } from "@/constants"
import { Stack } from "@/types"

export const getIconByStack = (stack: Stack) => {
    console.log('icone',stackIcon[stack.toLowerCase() as Stack])
  return stackIcon[stack.toLowerCase().replaceAll('.','') as Stack].src
} 