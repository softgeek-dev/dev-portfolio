import { Github, Linkedin, Twitter, Youtube } from 'lucide-react'

export const SocialMedia = () => {
  const socialMediaLinks = [
    {
      title: 'Youtube',
      href: 'https://www.youtube.com/channel/UC4xKdmAXFh4ACyhpiQ_3qBw',
    },
    {
      title: 'Twitter',
      href: 'https://twitter.com/softgeekz',
    },
    {
      title: 'Github',
      href: '#',
    },
    {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/company/softgeekz',
    },
  ]
  return (
    <div className="flex justify-center md:justify-start translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <div className="flex justify-between">
        <div className="mt-auto flex space-x-4 text-grey">
          {socialMediaLinks.map((link) => (
            <div
              key={link.title}
              className="p-1 bg-transparent hover:shadow-primary transition-[shadow,text-shadow]"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-4 h-4 cursor-pointer hover:text-primary-text"
              >
                {link.title === 'Youtube' ? (
                  <Youtube
                    role="button"
                    className="w-4 h-4 hover:animate-bounce"
                  />
                ) : link.title === 'Twitter' ? (
                  <Twitter role="button" className="w-4 h-4" />
                ) : link.title === 'Github' ? (
                  <Github role="button" className="w-4 h-4" />
                ) : (
                  <Linkedin role="button" className="w-4 h-4" />
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
