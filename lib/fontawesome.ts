import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen, faGlobe, faLink, faMobile } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add(faMobile, faEnvelopeOpen, faLink, faGithub, faLinkedin, faGlobe)
