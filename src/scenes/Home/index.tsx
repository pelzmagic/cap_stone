// import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePage from "@/assets/home.png";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    // const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return <section
  id="home"
  className="gap-16  bg-gray-20 py-10 md:h-full md:pb-0"
  >
    {/* IMAGE AND MAIN HEADER */}
    <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basics-3/5">
            {/*HEADINGS*/}
            <div className="md:mt-10">
                <div className="relative">
                    <div className="before:absolute">
                        <h1>CARE-X</h1>
                    </div>
                </div>
                <p>
                    Like Education, Healthcare also needs to be given complete unrivaled importance!
                </p>
            </div>
            {/*ACTIONS*/}
            <div>
                <ActionButton setSelectedPage={setSelectedPage}>
                    Join now
                </ActionButton>
                <AnchorLink
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={() => setSelectedPage(SelectedPage.Contactus)}
                    href={`#${SelectedPage.Contactus}`}
                >
                    <p>Learn more</p>
                </AnchorLink>
            </div>
        </div>

        {/*IMAGE*/}
        <div>
            <img alt="home-page" src={HomePage} />
        </div>
    </div>
    </section>;
};

export default Home;