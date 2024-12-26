export const paginacion = (perPage, currentPage, news) =>{
    const itemsPerPage = perPage;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(news.length / itemsPerPage);

    return{
        currentNews,
        totalPages
    }
}