#!/usr/bin/python3
""" MRU Cache Module """

from base_caching import BaseCaching


class MRUCache(BaseCaching):
        """ MRU Cache class """

            def __init__(self):
                        """ Initialize MRU Cache """
                                super().__init__()

                                    def put(self, key, item):
                                                """ Add an item to the cache """
                                                        if key is None or item is None:
                                                                        return

                                                                            if len(self.cache_data) >= self.MAX_ITEMS:
                                                                                            mru_key = max(self.cache_data, key=self.cache_data.get)
                                                                                                        del self.cache_data[mru_key]
                                                                                                                    print("DISCARD:", mru_key)

                                                                                                                            self.cache_data[key] = item

                                                                                                                                def get(self, key):
                                                                                                                                            """ Retrieve an item from the cache """
                                                                                                                                                    if key is None or key not in self.cache_data:
                                                                                                                                                                    return None

                                                                                                                                                                        return self.cache_data[key]


                                                                                                                                                                    if __name__ == "__main__":
                                                                                                                                                                            my_cache = MRUCache()
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

