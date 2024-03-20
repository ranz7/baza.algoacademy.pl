import LandingText from '~/components/landing/LandingText'
import Header from '~/components/header/Header'
import SubjectList from '~/components/landing/SubjectList'
import DiscordPromo from '~/components/landing/DiscordPromo'
import AAFooter from '~/components/common/Footer'
import Baner from '~/components/landing/Baner'

export default function Page() {
  return (
    <div>
      <Baner />
      <Header gradient={' to-fuchsia-500 from-sky-500'} />
      <LandingText />
      <SubjectList />
      <DiscordPromo />

      <AAFooter />
    </div>
  )
}
