const getStoredBookDetail = () => {
    const storedBookDetail = localStorage.getItem('book-detail');
    if(storedBookDetail) {
        return JSON.parse(storedBookDetail)
    }
    return [];
}

const savebookdetail = (ID) => {
    const storedBookDetails = getStoredBookDetail();
    const exists = storedBookDetails.find(bookId => bookId === ID);
    if(!exists) {
        storedBookDetails.push(ID);
        localStorage.setItem('book-detail', JSON.stringify(storedBookDetails))
    }
}
export {savebookdetail, getStoredBookDetail}