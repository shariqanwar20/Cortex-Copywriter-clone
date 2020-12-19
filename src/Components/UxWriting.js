import React from 'react'
import uxImage from '../images/ux_writing.svg'
import websiteCopyWritingImage from '../images/website_copywriting.svg'
import contentWritingImage from '../images/content_writing.svg'

export const UxWriting = () => {
    return (
        <div className="container-fluid bg-dark text-white bg-gradient">
            <div className="row">
                <div className="col-lg-6">
                    <img src={uxImage} alt="uxWriting" width="500px" className="m-auto uxImage" style={{display: 'block'}}/>
                </div>
                <div className="col-lg-6">
                    <div className="ux-header">UX Writing</div>
                    <div className="ux-description">UX is better than s#x. It's not the size of your microcopy that matters, it’s how you use it. Flex your UX with little words that pack a punch. I dive into your users’ psychological labyrinth to figure out what they might think, feel, hear, see, say, and do. This ensures your products always have a smile on their interface.</div>
                    <div className="row ux-list">
                        <div className="ux-list-1 col-12">
                            <ul>
                                <li>Microcopy</li>
                                <li>Taxonomy &#38; Labeling</li>
                                <li>Chatbots</li>
                                <li>User Research</li>
                            </ul>
                        </div>
                        <div className="ux-list-2 col-12">
                            <ul>
                                <li>Content Style Guide</li>
                                <li>User Testing</li>
                                <li>Design Principles</li>
                            </ul>
                        </div>
                        <div className="ux-list-3 col-12">
                            <ul>
                                <li>Prototype</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <img src={websiteCopyWritingImage} alt="WebsiteCopyWriting" width="500px" className="m-auto websiteImage" style={{display: 'block'}}/>
                </div>
                <div className="col-lg-6">
                    <div className="ux-header">Website Copywriting</div>
                    <div className="ux-description">My tools of razor-sharp rhetoric, lovely linguistics, and potent psychology turn your website into a fully charged digital powerhouse that brings in new clients and spanks your competitors. You deserve words sweeter than dopamine. I’m 100% that web copy daddy.</div>
                    <div className="row ux-list">
                        <div className="ux-list-1 col-12">
                            <ul>
                                <li>Information Architecture</li>
                                <li>Wireframes</li>
                                <li>Competitor Analysis</li>
                            </ul>
                        </div>
                        <div className="ux-list-2 col-12">
                            <ul>
                                <li>On-page SEO</li>
                                <li>Off-Page SEO</li>
                                <li>USP/UVP</li>
                                <li>Landing Page</li>
                            </ul>
                        </div>
                        <div className="ux-list-3 col-12">
                            <ul>
                                <li>Sales Letter</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <img src={contentWritingImage} alt="ContentWriting" width="500px" className="m-auto contentImage" style={{display: 'block'}}/>
                </div>
                <div className="col-lg-6">
                    <div className="ux-header">Content Writing</div>
                    <div className="ux-description">As a former neuroscientist, I know the sorcery of crafting words that ignite minds, warm hearts, and move souls. My writing penetrates your audience on a ‘dopamine’ level. I offer deeply stimulating stories and succulent content more addictive than chocolate cheeseburgers.</div>
                    <div className="row ux-list">
                        <div className="ux-list-1 col-12">
                            <ul>
                                <li>Headlines &#38; Taglines</li>
                                <li>Content Strategy</li>
                                <li>Blogs &#38; Articles</li>
                            </ul>
                        </div>
                        <div className="ux-list-2 col-12">
                            <ul>
                                <li>Social Media Content</li>
                                <li>Video Scripts</li>
                                <li>eDMs &#38; NewsLetters</li>
                            </ul>
                        </div>
                        <div className="ux-list-3 col-12">
                            <ul>
                                <li>Case Studies</li>
                                <li>Whitepapers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
