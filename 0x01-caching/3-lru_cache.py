#!/usr/bin/python3
""" LRU Cache Module """

from base_caching import BaseCaching


class LRUCache(BaseCaching):
        """ LRU Cache class """

            def __init__(self):
                        """ Initialize LRU Cache """
                                super().__init__()
                                        self.lru_list = []

                                            def put(self, key, item):
                                                        """ Add an item to the cache """
                                                                if key is None or item is None:
                                                                                return

                                                                                    if key in self.cache_data:
                                                                                                    self.lru_list.remove(key)
                                                                                                            elif len(self.cache_data) >= self.MAX_ITEMS:
                                                                                                                            lru_key = self.lru_list.pop(0)
                                                                                                                                        del self.cache_data[lru_key]
                                                                                                                                                    print("DISCARD:", lru_key)

                                                                                                                                                            self.cache_data[key] = item
                                                                                                                                                                    self.lru_list.append(key)

                                                                                                                                                                        def get(self, key):
                                                                                                                                                                                    """ Retrieve an item from the cache """
                                                                                                                                                                                            if key is None or key not in self.cache_data:
                                                                                                                                                                                                            return None

                                                                                                                                                                                                                self.lru_list.remove(key)
                                                                                                                                                                                                                        self.lru_list.append(key)

                                                                                                                                                                                                                                return self.cache_data[key]


                                                                                                                                                                                                                            if __name__ == "__main__":
                                                                                                                                                                                                                                    my_cache = LRUCache()
                                                                                                                                                                                                                                        my_cache.put("A", "Hello")
                                                                                                                                                                                                                                            my_cache.put("B", "World")
                                                                                                                                                                                                                                                my_cache.put("C", "Holberton")
                                                                                                                                                                                                                                                    my_cache.put("D", "School")
                                                                                                                                                                                                                                                        my_cache.print_cache()
                                                                                                                                                                                                                                                            print(my_cache.get("B"))
                                                                                                                                                                                                                                                                my_cache.put("E", "Battery")
                                                                                                                                                                                                                                                                    my_cache.print_cache()
                                                                                                                                                                                                                                                                        my_cache.put("C", "Street")
                                                                                                                                                                                                                                                                            my_cache.print_cache()
                                                                                                                                                                                                                                                                                print(my_cache.get("A"))
                                                                                                                                                                                                                                                                                    print(my_cache.get("B"))
                                                                                                                                                                                                                                                                                        print(my_cache.get("C"))
                                                                                                                                                                                                                                                                                            my_cache.put("F", "Mission")
                                                                                                                                                                                                                                                                                                my_cache.print_cache()
                                                                                                                                                                                                                                                                                                    my_cache.put("G", "San Francisco")
                                                                                                                                                                                                                                                                                                        my_cache.print_cache()
                                                                                                                                                                                                                                                                                                            my_cache.put("H", "H")
                                                                                                                                                                                                                                                                                                                my_cache.print_cache()
                                                                                                                                                                                                                                                                                                                    my_cache.put("I", "I")
                                                                                                                                                                                                                                                                                                                        my_cache.print_cache()
                                                                                                                                                                                                                                                                                                                            my_cache.put("J", "J")
                                                                                                                                                                                                                                                                                                                                my_cache.print_cache()
                                                                                                                                                                                                                                                                                                                                    my_cache.put("K", "K")
                                                                                                                                                                                                                                                                                                                                        my_cache.print_cache()

