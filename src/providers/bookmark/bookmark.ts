import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class BookmarkProvider {
  private readonly BOOKMARK_KEY: string = '_Bookmark';
  private bookmarks: any;

  constructor(private storage: Storage) {
    storage
      .get(this.BOOKMARK_KEY)
      .then(bookmarks => (this.bookmarks = bookmarks || {}))
      .catch(console.error);
  }

  addBookmark(book: string, page: number): Promise<any> {
    if (this.bookmarks[book] === undefined) {
      this.bookmarks[book] = [];
    }
    this.bookmarks[book].push(page);
    return this.storage.set(this.BOOKMARK_KEY, this.bookmarks);
  }

  removeBookmark(book: string, page: number): Promise<any> {
    const index = this.bookmarks && this.bookmarks[book] && this.bookmarks[book].indexOf(page);
    if (index > -1) {
      this.bookmarks[book].splice(index, 1);
      return this.storage.set(this.BOOKMARK_KEY, this.bookmarks);
    }
  }

  isBookmarked(book: string, page: number): boolean {
    return this.bookmarks && this.bookmarks[book] && this.bookmarks[book].indexOf(page) > -1;
  }

  toogleBookmark(book: string, page: number): Promise<any> {
    if (this.isBookmarked(book, page)) {
      return this.removeBookmark(book, page);
    } else {
      return this.addBookmark(book, page);
    }
  }
}
