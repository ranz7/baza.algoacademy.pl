import Header from '~/components/Header'

import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon
} from '@heroicons/react/24/outline'
import discordImage from '~/images/discord-logo-white.svg'
import LandingText from '~/components/LandingText'
import SubjectList from '~/components/SubjectList'
import DiscordPromo from '~/components/DiscordPromo'

export default function Page() {
  return (
    <div>
      <Header />
      <LandingText />
      <SubjectList />
      <div className={'my-20'}/>
      <DiscordPromo />
    </div>
  )
}
