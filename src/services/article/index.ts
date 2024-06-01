import apiBlogApp from "@/utils/apiBlogApp";


const articleService = {
    fetchArticleList(page: string = '1') {
        return apiBlogApp.get(`/posts?page=${page}&per_page=12`);
    },

}

export default articleService;