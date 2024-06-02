// import { BroadcastChannel } from "worker_threads";

const localUser = {
    get() {
        if (typeof window === "undefined") return null;
        const storage = window.localStorage.getItem('user');
        if (storage) {
            const user = JSON.parse(storage);
            return user ?? {};
        }

        return {};
    },
    getToken() {
        const user = this.get();
        return user?.token ?? null;
    },
    getRole() {
        const user = this.get();
        return user?.role_id ?? null;
    },
    save(user: any) {
        return localStorage.setItem('user', JSON.stringify(user));
    },
    remove() {
        localStorage.removeItem('user');

        // const channel = new BroadcastChannel('userAccess');
        // channel.postMessage('logout');

        return Promise.resolve(true);
    }
}

export default localUser;