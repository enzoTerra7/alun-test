export type PostListResponse = {
  posts: Post[]
  pagination: Pagination
  meta: Meta
}

type Post = {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
  likes: number
  category: Category
  tags: Tag[]
  imageUrl: string
}

type Category = {
  slug: string
  name: string
  description: string
}

type Tag = {
  slug: string
  name: string
}

type Pagination = {
  currentPage: number
  totalPages: number
  totalPosts: number
  postsPerPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

type Meta = {
  generatedAt: string
  seed: string
  category: string
}
