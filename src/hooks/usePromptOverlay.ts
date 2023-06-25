import { useDisclosure, useIdle } from '@mantine/hooks';
import { useEffect } from 'react';
import useTypingStore from '../stores/typing';

function usePropmtOverlay() {
    const idle = useIdle(3000, { initialState: false });
    const hasTestStarted = useTypingStore(state => state.hasTestStarted());

    const [show, { open, close, toggle }] = useDisclosure(false);

    useEffect(() => {
        // console.log('idle', idle);
        console.log('show', show, hasTestStarted);
        if (idle && !hasTestStarted) open();
    }, [idle]);

    return { show, open, close, toggle };
}

export default usePropmtOverlay;
