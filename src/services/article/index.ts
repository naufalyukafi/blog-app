import apiBlogApp from "@/utils/apiBlogApp";


const articleService = {
    fetchArticleList(page: string) {
        const currentPage = page ?? 1
        return apiBlogApp.get(`/posts?page=${currentPage}&per_page=12`);
    },
    fetchDetailArticle(id: string) {
        return apiBlogApp.get(`/posts/${id}`);
    },
    fetchDetailArticleComment(id: string) {
        return apiBlogApp.get(`/posts/${id}/comments`);
    },
    fetchDetailArticleProfile(userId: string) {
        return apiBlogApp.get(`/users/${userId}`);
    },
}

export default articleService;