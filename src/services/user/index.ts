import { User } from "@/type/user";
import apiBlogApp from "@/utils/apiBlogApp";


const userService = {
    fetchUserList(page: string) {
        const currentPage = page ?? 1
        return apiBlogApp.get(`/users?page=${currentPage}&per_page=20`);
    },
    deleteUser(id: string) {
        return apiBlogApp.delete(`/users?id=${id}`);
    },
    updateUser(id: string, payload: User) {
        return apiBlogApp.put(`/users?id=${id}`, payload);
    }

}

export default userService;