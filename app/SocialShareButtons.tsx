
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineX } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";



const SocialShareButtons = ({ url, summary }) => (
  <div>
    <FacebookShareButton url={url} title={summary} >
    <AiOutlineFacebook size={46}/>
    </FacebookShareButton>
    <TwitterShareButton url={url} title={summary}>
    <AiOutlineX size={46}/>
    </TwitterShareButton>
    <LinkedinShareButton url={url} title={summary}>
    <AiOutlineLinkedin size={46}/>
    </LinkedinShareButton>
  </div>
);

export default SocialShareButtons
