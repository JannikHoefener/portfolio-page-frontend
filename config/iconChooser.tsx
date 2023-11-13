import {
  BsInstagram,
  BsLink,
  BsTiktok,
  BsLinkedin,
  BsGithub,
  BsSpotify,
} from "react-icons/bs";

/* Achtung: String muss wie in Strapi sein!!! 
weblink
Instagram
TikTok
LinkedIn
GitHub
Spotify
*/
// https://react-icons.github.io/react-icons

export function iconChooser(props: string) {
    console.log(props)
  switch (props) {
    case "Instagram":
      return <BsInstagram />;
    case "TikTok":
      return <BsTiktok />;
    case "LinkedIn":
      return <BsLinkedin />;
    case "GitHub":
      return <BsGithub />;
    case "Spotify":
      return <BsSpotify />;
    default: /*weblink*/ 
      return <BsLink />;
  }
}
