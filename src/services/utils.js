export const getPostsByCount = ( postFeed, endIndex ) => {
    return postFeed.splice(0, endIndex)
}