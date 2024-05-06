#!/usr/bin/env python3
"""Hypermedia pagination functionality."""

import csv
from typing import List, Dict, Union
from .1-simple_pagination import Server

class Server(Server):
    """Server class to paginate a database of popular baby names."""
    
    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Union[int, List[List[str]], None]]:
        """Returns hypermedia paginated dataset."""
        dataset_page = self.get_page(page, page_size)
        next_page = page + 1 if len(dataset_page) == page_size else None
        prev_page = page - 1 if page > 1 else None
        total_pages = (len(self.dataset()) + page_size - 1) // page_size

        return {
            'page_size': len(dataset_page),
            'page': page,
            'data': dataset_page,
            'next_page': next_page,
            'prev_page': prev_page,
            'total_pages': total_pages
        }
