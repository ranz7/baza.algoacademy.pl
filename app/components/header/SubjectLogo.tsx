import { Link } from '@remix-run/react'

const SubjectLogo = ({
  name,
  palete,
}: {
  name: string
  palete: { colorFrom: string; colorTo: string; textColor: string }
}) => {
  const gradientText = `inline-block text-transparent bg-clip-text bg-gradient-to-r ${palete.colorFrom} ${palete.colorTo}`

  return (
    <Link to={`/${name}/docs`} className={`font-bold hidden lg:block`}>
      <span className={`${gradientText} mt-1`}>{name}</span>
    </Link>
  )
}

export default SubjectLogo
