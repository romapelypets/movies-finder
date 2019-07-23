import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let localStorageService: LocalStorageService;

  beforeEach(async () => TestBed.configureTestingModule({ providers: [LocalStorageService] }));

  beforeEach(async () => {
    localStorageService = TestBed.get(LocalStorageService);
  });

  it('should be created', () => {
    expect(localStorageService).toBeTruthy();
  });

  it('should set item to local storage', () => {
    localStorageService.setItem('foo', 'bar');
    expect(localStorageService.getItem('foo')).toBe('bar');
  });

  it('should return null for non existing items', () => {
    localStorageService.removeItem('foo');
    expect(localStorageService.getItem('foo')).toBeNull();
  });

  it('should set and remove items', () => {
    localStorageService.setItem('foo', 'bar');
    localStorageService.removeItem('foo');
    expect(localStorageService.getItem('foo')).toBeNull();
  });

  it('should return that item exists', () => {
    localStorageService.setItem('foo', 'bar');
    expect(localStorageService.itemExist('foo')).toBeTruthy();
  });

  it('should return that item does not exist', () => {
    localStorageService.removeItem('foo');
    expect(localStorageService.itemExist('foo')).toBeFalsy();
  });

  it('should clear the storage', () => {
    localStorageService.setItem('foo', 'bar');
    localStorageService.clear();
    expect(localStorageService.getItem('foo')).toBeNull();
  });
});
