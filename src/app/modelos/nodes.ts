export interface User {
    id: string;
    displayName: string;
  }
  
  export interface Entry {
    createdAt: string;
    isFolder: boolean;
    isFile: boolean;
    createdByUser: User;
    modifiedAt: string;
    modifiedByUser: User;
    name: string;
    id: string;
    nodeType: string;
    parentId: string;
  }
  
  export interface EntryList {
    entry: Entry;
  }
  
  export interface Pagination {
    count: number;
    hasMoreItems: boolean;
    totalItems: number;
    skipCount: number;
    maxItems: number;
  }
  
  export interface List {
    pagination: Pagination;
    entries: EntryList[];
  }
  
  export interface ApiResponse {
    list: List;
  }
  