const LandingText = () => {
  return (
    <div className="flex flex-col items-center gap-6 text-center px-4 py-12 lg:py-24">
      <div className="flex  gap-2 lg:gap-4 items-center">
        <h1
          className={`inline-block
            font-black text-5xl
            md:text-6xl
            lg:text-8xl`}
        >
          <span
            className={`
            inline-block  bg-clip-text bg-gradient-to-r to-fuchsia-500 from-sky-500 text-transparent
            underline decoration-4 md:decoration-8 underline-offset-[.5rem] md:underline-offset-[1rem] decoration-gray-200 dark:decoration-gray-800
            mb-2
            `}
          >
            Baza wiedzy Algo Academy
          </span>
        </h1>
      </div>
      <h2
        className="font-bold text-2xl max-w-md
            md:text-3xl
             dark:text-white
            lg:text-5xl lg:max-w-2xl"
      >
        Jedyna baza wiedzy w polsce dla{' '}
        <span className="underline decoration-dashed decoration-yellow-500 decoration-3 underline-offset-2">
          pasjonatów.
        </span>
      </h2>
      <p
        className="text opacity-90 max-w-sm
            lg:text-xl lg:max-w-2xl
            dark:text-white"
      >
        Wybierz temat pasujący dla ciebie
      </p>
    </div>
  )
}

export default LandingText
