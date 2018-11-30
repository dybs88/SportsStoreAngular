export class PaginateComponent {
  protected maxPageSize = 8;
  protected selectedPage;

  constructor(defaultPage: number = 1) {
    this.selectedPage = defaultPage;
  }

  paginate(collection: Object[]) {
    const pageIndex = (this.selectedPage - 1) * this.maxPageSize;
    return collection.slice(pageIndex, pageIndex + this.maxPageSize);
  }

  changePage(newPage?: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.maxPageSize = newSize;
  }

  getPageCount(collection: Object[]): number {
    return Math.ceil(collection.length / this.maxPageSize);
  }
}
