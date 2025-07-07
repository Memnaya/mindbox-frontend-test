import { ChakraProvider } from "@chakra-ui/react"
import { system } from "./theme"

type Props = {
  children: React.ReactNode
}

export function Provider({ children }: Props) {
  return (
    <ChakraProvider value={system}>
      {children}
    </ChakraProvider>
  )
}