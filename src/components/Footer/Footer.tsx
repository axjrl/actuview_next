const Footer = () => {
    return (
        <footer className="bg-gray">
            <section className="px-20 mx-auto py-4">
                <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 text-sm text-white">
                    <div className="px-4">
                        <h3 className="mt-5 mb-2 text-xl font-medium">actuview</h3>
                        <hr className="border-white"/>
                        <h5 className="mt-5 mb-2 italic text-light_gray text-sm max-lg:text-xs">An initiative by</h5>
                        <p>Deutsche Aktuarvereinigung e.V. and partners from the actuarial community</p>
                        <h5 className="mt-5 mb-2 italic text-light_gray text-sm max-lg:text-xs">Operated by</h5>
                        <p>AMC - Actuarial Media Center GmbH</p>
                        <p>Hohenstaufenring 47-51</p>
                        <p>50674 Cologne, Germany</p>
                        <a className="imprint-a" href="mailto:contact@actuview.com">
                            contact@actuview.com
                        </a>
                    </div>
                    <div className="px-4">
                        <h3 className="mt-5 mb-2 text-xl font-medium">Quicklinks</h3>
                        <hr className="border-white mb-5"/>
                        <p className="quicklinks-p"><a href="/">Home</a></p>
                        <p className="quicklinks-p"><a href="/pages/view/id/22?">Newsletter</a></p>
                        <p className="quicklinks-p"><a href="/pages/view/id/26?">FAQ`s</a></p>
                        <p className="quicklinks-p"><a href="/pages/view/id/1">Legal</a></p>
                        <p className="quicklinks-p"><a href="/pages/view/id/2">Data Protection</a></p>
                        <p className="quicklinks-p"><a href="/cookieconsent">Cookie Consent</a></p>
                        <p className="quicklinks-p"><a href="/pages/view/id/16?">Contact</a></p>
                    </div>
                    <div className="px-4 ">
                        <h3 className="mt-5 mb-2 text-xl font-medium">Social Media</h3>
                        <hr className="border-white mb-5"/>
                        <div className="footer-icon-wrapper">
                            <a href="https://www.linkedin.com/groups/8738024/&quot;" target="_blank"><i
                                className="fab fa-linkedin-in"></i></a>
                            <a href="https://twitter.com/actuview?lang=de" target="_blank"><i
                                className="fab fa-twitter"></i></a>
                            <a href="https://www.xing.com/communities/groups/actuview-5a00-1109638"
                               target="_blank"> <i className="fab fa-xing"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;