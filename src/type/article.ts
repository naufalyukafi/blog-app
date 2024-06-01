export type Article = {
    id: string
    user_id: string
    title: string
    slug: string
    body: string
    description: string
    author: {
        name: string
        image: string
    }
}