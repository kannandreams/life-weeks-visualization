
import { FacebookShareButton, TwitterShareButton, InstapaperShareButton } from 'react-share';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";



const SocialShareButtons = ({ url, title, summary }) => (
  <div>
    <FacebookShareButton url={url} >
    <AiFillFacebook size={46}/>
    </FacebookShareButton>
    <TwitterShareButton url={url} title={title}>
    <AiFillTwitterSquare size={46}/>
    </TwitterShareButton>
    <InstapaperShareButton url={url} title={title}>
    <AiFillInstagram size={46}/>
    </InstapaperShareButton>
  </div>
);

export default SocialShareButtons
