import { SignUp, useUser } from '@clerk/nextjs'
import { shadesOfPurple } from '@clerk/themes'

export default function Home() {
  const { user } = useUser()

  if (!user) return <SignUp  appearance={{ baseTheme: shadesOfPurple}}/>

  return <div>Welcome!</div>
}