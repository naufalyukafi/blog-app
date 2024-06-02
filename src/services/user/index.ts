import { User } from "@/type/user";
import apiBlogApp from "@/utils/apiBlogApp";


const userService = {
    fetchUserList(page: string) {
        const currentPage = page ?? 1
        return apiBlogApp.get(`/users?page=${currentPage}&per_page=8`);
    },
    fetchDetailUser(id: string) {
        return apiBlogApp.get(`/users/${id}`);
    },
    deleteUser(id: string) {
        return apiBlogApp.delete(`/users/${parseInt(id)}`);
    },
    updateUser(id: string, payload: User) {
        return apiBlogApp.put(`/users/${id}`, payload);
    },
    createUser(payload: User) {
        return apiBlogApp.post(`/users`, payload);
    }

}

export default userService;