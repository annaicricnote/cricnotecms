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
                    imageUrl={imageUrl}
                    description={description}
                    className="Demo__some-network__share-button"
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <br />
                <TwitterShareButton
                    title={title}
                    url={url}
                    hashtags={hashtags}
                >
                    <TwitterIcon size={32} round />

                </TwitterShareButton>
            </div>

        </>
    );
}

export default Socialmedia;
