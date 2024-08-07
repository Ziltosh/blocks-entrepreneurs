import {useLottie, useLottieInteractivity} from 'lottie-react';

import letter from './Lotties/E.json';

export const LetterE = () => {
    const lottieE = useLottie({
        animationData: letter,
    });

    return useLottieInteractivity({
        lottieObj: lottieE,
        actions: [],
        mode: 'cursor',
    });
};
