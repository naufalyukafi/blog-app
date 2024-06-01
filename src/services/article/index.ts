import apiBlogApp from "@/utils/apiBlogApp";


const articleService = {
    fetchArticleList(page: string) {
        const currentPage = page ?? 1
        return apiBlogApp.get(`/posts?page=${currentPage}&per_page=12`);
    },

}

export default articleService;