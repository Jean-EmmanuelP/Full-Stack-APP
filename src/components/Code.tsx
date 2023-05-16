import { FC, useEffect, useState } from 'react';
import { Highlight, Prism } from 'prism-react-renderer';
import { useTheme } from 'next-themes';
import { clearInterval } from 'timers';
import nightOwl from '@theme-ui/prism/presets/night-owl.json'; // Import nightOwl theme
import nightOwlLight from '@theme-ui/prism/presets/night-owl-light.json'; // Import nightOwlLight theme

type Language = keyof Prism.Languages;

interface CodeProps {
    code: string;
    show: boolean;
    language: Language;
    animationDelay?: number;
    animated?: boolean;
}

const Code: FC<CodeProps> = ({ code, language, show, animated, animationDelay }) => {
    const { theme: applicationTheme } = useTheme();
    const [text, setText] = useState(animated ? '' : code);

    useEffect(() => {
        if (show && animated) {
            let i = 0
            setTimeout(() => {
                const intervalId = setInterval(() => {
                    setText(code.slice(0, i))
                    i++
                    if (i > code.length) {
                        clearInterval(intervalId)
                    }
                }, 15)

                return () => clearInterval(intervalId)
            }, animationDelay || 150)
        }
    }, [code, show, animated, animationDelay]);

    // number of lines
    const lines = text.split(/\r\n|\r|\n/).length

    const theme = applicationTheme === 'light' ? nightOwlLight : nightOwl // Use the imported themes

    return <Highlight code={text} language={language as string} theme={theme}>
        {({ className, tokens, getLineProps, getTokenProps }) => <pre className={className + 'transition-all w-fit bg-transparent duration-100 py-0 no-scrollbar'} style={{ maxHeight: show ? lines * 24 : 0, opacity: show ? 1 : 0 }}>{tokens.map((line, i) => {
            const {key, ...rest} = getLineProps({line, key: i})
            
            return (
                <div key={`line-${i}`} style={{position: 'relative'}} {...rest}>
                    {line.map((token, index) => {
                        const {key, ...props} = getTokenProps({token, i})
                        return <span key={index} {...props}></span>
                    })}
                </div>
            )
        })}</pre>}
    </Highlight>
}

export default Code;

// import { FC, useEffect, useState } from 'react';
// import { Highlight, Prism } from 'prism-react-renderer';
// import { useTheme } from 'next-themes';
// import { clearInterval } from 'timers';
// import darkTheme from "prism-react-renderer/themes/nightOwl"
// import lightTheme from 'prism-react-renderer/themes/nightOwlLight'

// type Language = keyof Prism.Languages;

// interface CodeProps {
//     code: string;
//     show: boolean;
//     language: Language;
//     animationDelay?: number;
//     animated?: boolean;
// }

// const Code: FC<CodeProps> = ({code, language, show , animated, animationDelay}) => {
//     const { theme: applicationTheme } = useTheme();
//     const [text, setText] = useState(animated ? '' : code);

//     useEffect(() => {
//         if (show && animated) {
//             let i = 0
//             setTimeout(() => {
//                 const intervalId = setInterval(() => {
//                     setText(code.slice(0, i))
//                     i++
//                     if (i > code.length) {
//                         clearInterval(intervalId)
//                     }
//                 }, 15)

//                 return () => clearInterval(intervalId)
//             }, animationDelay ||  150)
//         }
//     }, [code, show, animated, animationDelay]);

//     // number of lines
//     const lines = text.split(/\r\n|\r|\n/)

//     const theme = applicationTheme === 'light' ? lightTheme : darkTheme

//     return <div>Code</div>;
// }

// export default Code;