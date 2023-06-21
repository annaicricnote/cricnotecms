import {
    TwitterShareButton,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    FacebookIcon,
} from "react-share";

function Socialmedia({...props}) {
    const {quote,imageUrl,url,description,hashtags,title} = props

    return (
        <>
            <div class="post-sharing">
                <FacebookShareButton
                    url={url}                
                    quote={quote}
                    hashtags="#Cricnote"
                    imageUrl={imageUrl}
                    description={description}
                    className="Demo__some-network__share-button"
                >
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <br/>
                <TwitterShareButton
                    title={title}
                    url={url}
                    hashtags={hashtags}
                >
                    <TwitterIcon size={32} round={true} />

                </TwitterShareButton>
            </div>

        </>
    );
}

export default Socialmedia;
