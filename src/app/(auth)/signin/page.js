import { SignIn } from '@clerk/nextjs'
import { shadesOfPurple } from '@clerk/themes'

export default function Page() {
  return <SignIn
   appearance={{ baseTheme: shadesOfPurple}} />
}