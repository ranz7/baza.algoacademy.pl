import discordImage from '~/images/discord-logo-white.svg'

const DiscordPromo = () => {
  return <div className='px-4 mx-auto max-w-screen-lg'>
    <div
      className={`
      
          rounded-md p-4 grid gap-6
          bg-discord text-white overflow-hidden relative
          shadow-xl shadow-indigo-700/30
          sm:p-8 sm:grid-cols-3`}
    >
      <div
        className={`absolute transform opacity-10 z-0
            right-0 top-0 -translate-y-1/3 translate-x-1/3
            sm:opacity-20`}
      >
        <img alt='Discord' src={discordImage} width={300} height={300} />
      </div>
      <div className={`sm:col-span-2`}>
        <h3 className={`text-3xl`}>Algo Academy on Discord</h3>
        <p className={`mt-4`}>
          The official AlgoAcademyPL community to ask questions, network and make
          new friends and get lightning fast news about what's coming next
          for AlgoAcademyPL!
        </p>
      </div>

      <div className={`flex items-center justify-center`}>
        <a
          href='https://discord.com/invite/'
          target='_blank'
          rel='noreferrer'
          className={`block w-full mt-4 px-4 py-2 bg-white text-aablue
                text-center rounded shadow-lg z-10 uppercase font-black`}
        >
          Join AlgoAcademyPL Discord
        </a>
      </div>
    </div>
  </div>
}

export default DiscordPromo
