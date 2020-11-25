export const slideDownVariant = {
    initial: {
        y: '-100vh',
    },
    animate: {
        y: 0,
        transition: {
            duration: .3,
            delayChildren: .1,
            when: 'beforeChildren',

        }
    }
}

export const scaleVariant = {
    initial: {
        scale: 0,
    },
    animate: {
        scale: 1,
        transition: {
            duration: .2,
            delayChildren: .1,
            when: 'beforeChildren',

        }
    }
}

