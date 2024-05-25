function averagePages(books) {
    const totalPages = books.map(book => book.pages).reduce((acc, curr) => acc + curr, 0);
    return books.length === 0 ? 0 : totalPages / books.length;
}