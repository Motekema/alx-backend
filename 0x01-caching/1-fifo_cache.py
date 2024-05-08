
dule for FIFOCache class"""

from base_caching import BaseCaching


class FIFOCache(BaseCaching):
        """FIFOCache class that inherits from BaseCaching"""

            def __init__(self):
                    """Initialize the FIFOCache"""
                            super().__init__()
                                    self.queue = []

                                        def put(self, key, item):
                                                """Add an item to the cache"""
                                                        if key is not None and item is not None:
                                                                    if len(self.cache_data) >= self.MAX_ITEMS:
                                                                                    discarded_key = self.queue.pop(0)
                                                                                                    del self.cache_data[discarded_key]
                                                                                                                    print("DISCARD:", discarded_key)
                                                                                                                                self.cache_data[key] = item
                                                                                                                                            self.queue.append(key)

                                                                                                                                                def get(self, key):
                                                                                                                                                        """Retrieve an item from the cache"""
                                                                                                                                                                if key is not None:
                                                                                                                                                                            return self.cache_data.get(key)


                                                                                                                                                                            if __name__ == "__main__":
                                                                                                                                                                                my_cache = FIFOCache()
                                                                                                                                                                                    my_cache.put("A", "Hello")
                                                                                                                                                                                        my_cache.put("B", "World")
                                                                                                                                                                                            my_cache.put("C", "Holberton")
                                                                                                                                                                                                my_cache.put("D", "School")
                                                                                                                                                                                                    my_cache.print_cache()
                                                                                                                                                                                                        my_cache.put("E", "Battery")
                                                                                                                                                                                                            my_cache.print_cache()
                                                                                                                                                                                                                my_cache.put("C", "Street")
                                                                                                                                                                                                                    my_cache.print_cache()
                                                                                                                                                                                                                        my_cache.put("F", "Mission")
                                                                                                                                                                                                                            my_cache.print_cache()

