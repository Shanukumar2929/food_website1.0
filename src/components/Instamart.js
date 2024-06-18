import { useState } from "react";


const Section = ({ title, description, isVisible, setIsVisible }) => {

    return (
        <div className="border border-black p-2 m-2">
            <h3>{title}</h3>
            {isVisible ? (<button onClick={() => setIsVisible(false)} className="cursor-pointer text size-15">-</button>) : (
                <button onClick={() => setIsVisible(true)} className="cursor-pointer   text size-15">+</button>


            )}
            {isVisible && <p>{description}</p>}
        </div>
    );
};


const Instamart = () => {
    const [visibleSection, setIsVisibleSection] = useState("career");
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section title={"About Instamart"} description={"This is the about section of Instamart"
            } isVisible={visibleSection === "about"}
                setIsVisible={() => setIsVisibleSection(
                    "about")}
            />

            <Section title={"Team Instamart"} description={"This is the about section of Instamart"} isVisible={visibleSection === "team"}
                setIsVisible={() => setIsVisibleSection(
                    "team"
                )} />

            <Section title={"Careers"} description={"This is the career section of Instamart"}
                isVisible={visibleSection === "career"}
                setIsVisible={() => setIsVisibleSection(
                    "career"
                )}
            />

        </div>
    );
};

export default Instamart;