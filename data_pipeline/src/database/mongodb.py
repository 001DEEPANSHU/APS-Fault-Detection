import pymongo
import os
import certifi
ca = certifi.where()

class MongodbOperation:

    def __init__(self) -> None:
        self.client = pymongo.MongoClient(os.getenv('MONGODB_URL_KEY',None)) #MONGODB_URL_KEY
        self.db_name="APS_DB"
        
    def insert_many(self,collection_name,records:list):
        self.client[self.db_name][collection_name].insert_many(records)

    def insert(self,collection_name,record):
        self.client[self.db_name][collection_name].insert_one(record)