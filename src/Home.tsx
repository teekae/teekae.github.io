import { useEffect, useRef, useState } from "react";
import Colours from "./Colours";
import { NamingScheme, NamingSchemeString } from "./Video";
import { Form, FormProvider, useForm } from "react-hook-form";
import { cva } from "class-variance-authority";

const rootVariants = cva([
    `bg-surface-2`,
    {
        variants: {
            canScroll: {
                false: `cursor-default`,
            },
            scrolling: {
                true: `cursor-grabbing`,
                false: "cursor-grab",
            },
        },
    },
]);

function Home() {
    const [showColours, setShowColours] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;

        if (element) {
            const handleScroll = () => {
                console.log("scrolled");
            };

            element.addEventListener("scroll", handleScroll);

            return () => {
                element.removeEventListener("scroll", handleScroll);
            };
        }
    }, [ref]);

    return (
        <>
            <div className="relative rounded-lg bg-surface-2 p-4">
                <div className="p-4 font-mono text-2xl font-bold">
                    <h1 className="text-sea-buckthorn">Main text colour</h1>
                    <h1 className="content-center text-hot-cinnamon">
                        Secondary colour
                    </h1>
                </div>
            </div>
            <FixedWrapper />

            <button
                onClick={() => setShowColours(!showColours)}
                className="rounded bg-sea-buckthorn p-4 font-bold text-baltic-sea hover:bg-sea-buckthorn-600"
            >
                Toggle Colours
            </button>

            {showColours ? <Colours /> : null}
        </>
    );
}

export const FixedWrapper = () => {
    const methods = useForm<NamingScheme>({
        defaultValues: {
            prefix: "",
            suffix: "",
            spacer: "_",
            namingSchemeElements: ["Sensor", "Location", "Type", "Number"],
        },
    });
    return (
        <div className="fixed left-1/2 -translate-x-1/2 bg-sunset-orange">
            <FormProvider {...methods}>
                <Form>
                    <NamingSchemeString />
                </Form>
            </FormProvider>
        </div>
    );
};

export default Home;
