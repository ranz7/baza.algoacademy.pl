import LandingText from '~/components/landing/LandingText'
import Header from '~/components/header/Header'
import SubjectList from '~/components/landing/SubjectList'
import DiscordPromo from '~/components/landing/DiscordPromo'

export default function Page() {
  return (
    <div>
      <Header />
      <LandingText />
      <SubjectList />
      <DiscordPromo />
    </div>
  )
}
