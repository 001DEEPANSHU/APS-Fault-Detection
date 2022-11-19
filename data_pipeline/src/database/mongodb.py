import pymongo
import os
import certifi
ca = certifi.where()

class MongodbOperation:

    def __init__(self) -> None:
        self.client = pymongo.MongoClient(os.getenv('MONGO_DB_URL'), tlsCAFile=ca)
        self.db_name="APS_DB"

    def insert_many(self,collection_name,records:list):
        self.client[self.db_name][collection_name].insert_many(records)  #insert many records
    
    def insert_many(self,collection_name,record):
        self.client[self.db_name][collection_name].insert_one(record)    #insert one record at a time