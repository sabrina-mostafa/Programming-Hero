type IOptions = {
    page?: string,
    limit?: string,
    sortBy?: string,
    sortOrder?: string
}

type IPaginationSortingResult = {
    page: number,
    limit: number,
    skip: number,
    sortBy: string,
    sortOrder: string
}


const paginationSortingHelper = (options: IOptions): IPaginationSortingResult => {
    // Helper function to handle pagination and sorting logic

    const page = Number(options.page) || 1;
    const limit = Number(options.limit) || 5;
    const skip = (page - 1) * limit;

    const sortBy = options.sortBy || "createdAt";
    const sortOrder = options.sortOrder || "asc";

    return { page, limit, skip, sortBy, sortOrder };
};


export default paginationSortingHelper;