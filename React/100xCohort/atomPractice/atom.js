import { atom, selector } from 'recoil'

export const notifications = atom({
    key: 'notifications',
    default: {}
});

export const notificationSelector = selector({
    key: 'notificationSelector',
    get: (props) => {
        const notification = props.get(notifications);

        return notification.home +
            notification.connections +
            notification.jobs +
            notification.message +
            notification.notification;
    }
});

export const homeAtom = atom({
    key: 'homeAtom',
    default: 0
})
export const connectionAtom = atom({
    key: 'connectionAtom',
    default: 11
})
export const jobAtom = atom({
    key: 'jobAtom',
    default: 0
})
export const messageAtom = atom({
    key: 'messageAtom',
    default: 3
})
export const notifyAtom = atom({
    key: 'notifyAtom',
    default: 25
})

export const selectAtomn = atom({
    key: 'selectAtom',
    default: 'home'
})

export const sumSelector = selector({
    key: 'sumSelector',
    get: (props) => {
        const home = props.get(homeAtom);
        const connection = props.get(connectionAtom);
        const job = props.get(jobAtom);
        const message = props.get(messageAtom);
        const notify = props.get(notifyAtom);
        return home + connection + job + message + notify;
    }
})