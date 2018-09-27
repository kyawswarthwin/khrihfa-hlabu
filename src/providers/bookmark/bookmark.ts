import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class BookmarkProvider {
  private BOOKMARK_KEY: string = '_Bookmark';
  private bookmarks: number[];

  constructor(private storage: Storage) {
    this.storage.get(this.BOOKMARK_KEY).then(bookmarks => (this.bookmarks = bookmarks || []));
  }

  addBookmark(id: number): Promise<any> {
    this.bookmarks.push(id);
    return this.storage.set(this.BOOKMARK_KEY, this.bookmarks);
  }

  removeBookmark(id: number): Promise<any> {
    const index = this.bookmarks && this.bookmarks.indexOf(id);
    if (index > -1) {
      this.bookmarks.splice(index, 1);
      return this.storage.set(this.BOOKMARK_KEY, this.bookmarks);
    }
  }

  isBookmarked(id: number): boolean {
    return this.bookmarks && this.bookmarks.indexOf(id) > -1;
  }

  toogleBookmark(id: number): Promise<any> {
    if (this.isBookmarked(id)) {
      return this.removeBookmark(id);
    } else {
      return this.addBookmark(id);
    }
  }
}
